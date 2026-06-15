import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  fullName?: string
  email?: string
  phone?: string
  dueDate?: string
  supportType?: string
  message?: string
}

const ConsultationInquiry = ({
  fullName,
  email,
  phone,
  dueDate,
  supportType,
  message,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New consultation inquiry from {fullName ?? 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New consultation inquiry</Heading>
        <Text style={intro}>
          Someone reached out through your contact form. Details below.
        </Text>

        <Section style={card}>
          <Row label="Name" value={fullName} />
          <Row label="Email" value={email} />
          {phone ? <Row label="Phone" value={phone} /> : null}
          {dueDate ? <Row label="Due date" value={dueDate} /> : null}
          {supportType ? <Row label="Support type" value={supportType} /> : null}
        </Section>

        <Hr style={hr} />

        <Text style={label}>Message</Text>
        <Text style={messageStyle}>{message ?? '—'}</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Text style={rowStyle}>
    <span style={rowLabel}>{label}: </span>
    <span style={rowValue}>{value ?? '—'}</span>
  </Text>
)

export const template = {
  component: ConsultationInquiry,
  subject: (data: Record<string, any>) =>
    `New consultation inquiry — ${data.fullName ?? 'Website visitor'}`,
  displayName: 'Consultation inquiry notification',
  to: 'ashleemckenzie@nurturetheroots.co',
  previewData: {
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '555-123-4567',
    dueDate: '2026-09-01',
    supportType: 'Postpartum Doula Care',
    message: 'Hi Ashlee, I would love to learn more about your postpartum support.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  color: '#3b2a1f',
}
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '26px',
  fontWeight: 500,
  margin: '0 0 12px 0',
  color: '#3b2a1f',
}
const intro = { fontSize: '15px', lineHeight: '24px', margin: '0 0 20px 0', color: '#5a4636' }
const card = {
  backgroundColor: '#f6efe6',
  borderRadius: '12px',
  padding: '20px 22px',
  margin: '8px 0',
}
const rowStyle = { fontSize: '14px', lineHeight: '22px', margin: '4px 0' }
const rowLabel = { color: '#7a6753', fontWeight: 600 }
const rowValue = { color: '#3b2a1f' }
const hr = { borderColor: '#e7ddd0', margin: '24px 0' }
const label = {
  fontSize: '12px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: '#a8694b',
  margin: '0 0 6px 0',
}
const messageStyle = {
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
  color: '#3b2a1f',
}