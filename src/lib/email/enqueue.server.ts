import * as React from 'react'
import { render } from '@react-email/components'
import { TEMPLATES } from '@/lib/email-templates/registry'
import { supabaseAdmin } from '@/integrations/supabase/client.server'

const SITE_NAME = 'nurture-the-roots-web'
const SENDER_DOMAIN = 'notify.nurturetheroots.co'
const FROM_DOMAIN = 'nurturetheroots.co'

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

export interface EnqueueArgs {
  templateName: string
  recipientEmail?: string
  idempotencyKey?: string
  templateData?: Record<string, any>
}

/**
 * Server-side helper to render + enqueue a transactional email, bypassing the
 * Supabase-JWT-protected /lovable/email/transactional/send route. Use only from
 * trusted server code (server functions, server routes) — never expose to the client.
 */
export async function enqueueTransactionalEmail(args: EnqueueArgs) {
  const template = TEMPLATES[args.templateName]
  if (!template) {
    throw new Error(`Template '${args.templateName}' not found in registry`)
  }

  const effectiveRecipient = template.to || args.recipientEmail
  if (!effectiveRecipient) {
    throw new Error('recipientEmail is required when template has no fixed `to`')
  }

  const messageId = crypto.randomUUID()
  const idempotencyKey = args.idempotencyKey || messageId
  const normalizedEmail = effectiveRecipient.toLowerCase()
  const templateData = args.templateData ?? {}

  // Suppression check
  const { data: suppressed } = await supabaseAdmin
    .from('suppressed_emails')
    .select('id')
    .eq('email', normalizedEmail)
    .maybeSingle()

  if (suppressed) {
    await supabaseAdmin.from('email_send_log').insert({
      message_id: messageId,
      template_name: args.templateName,
      recipient_email: effectiveRecipient,
      status: 'suppressed',
    })
    return { success: false, reason: 'email_suppressed' as const }
  }

  // Get or create unsubscribe token
  let unsubscribeToken: string
  const { data: existingToken } = await supabaseAdmin
    .from('email_unsubscribe_tokens')
    .select('token, used_at')
    .eq('email', normalizedEmail)
    .maybeSingle()

  if (existingToken && !existingToken.used_at) {
    unsubscribeToken = existingToken.token
  } else {
    unsubscribeToken = generateToken()
    await supabaseAdmin
      .from('email_unsubscribe_tokens')
      .upsert(
        { token: unsubscribeToken, email: normalizedEmail },
        { onConflict: 'email', ignoreDuplicates: true },
      )
    const { data: stored } = await supabaseAdmin
      .from('email_unsubscribe_tokens')
      .select('token')
      .eq('email', normalizedEmail)
      .maybeSingle()
    if (stored?.token) unsubscribeToken = stored.token
  }

  // Render template
  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function'
      ? template.subject(templateData)
      : template.subject

  await supabaseAdmin.from('email_send_log').insert({
    message_id: messageId,
    template_name: args.templateName,
    recipient_email: effectiveRecipient,
    status: 'pending',
  })

  const { error: enqueueError } = await supabaseAdmin.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: {
      message_id: messageId,
      to: effectiveRecipient,
      from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
      sender_domain: SENDER_DOMAIN,
      subject,
      html,
      text,
      purpose: 'transactional',
      label: args.templateName,
      idempotency_key: idempotencyKey,
      unsubscribe_token: unsubscribeToken,
      queued_at: new Date().toISOString(),
    },
  })

  if (enqueueError) {
    await supabaseAdmin.from('email_send_log').insert({
      message_id: messageId,
      template_name: args.templateName,
      recipient_email: effectiveRecipient,
      status: 'failed',
      error_message: 'Failed to enqueue email',
    })
    throw new Error(`Failed to enqueue email: ${enqueueError.message}`)
  }

  return { success: true as const, messageId }
}