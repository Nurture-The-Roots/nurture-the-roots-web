import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Full name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().max(50).optional(),
  dueDate: z.string().optional(),
  supportType: z.string().optional(),
  message: z.string().trim().min(1, { message: "Message is required" }).max(2000, { message: "Message must be less than 2000 characters" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("contact_inquiries")
      .insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone || null,
        due_date: data.dueDate || null,
        support_type: data.supportType || null,
        message: data.message,
      });
    if (error) throw new Error("Failed to submit inquiry: " + error.message);
    return { success: true };
  });
