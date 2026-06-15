import { createFileRoute, Link } from "@tanstack/react-router";
import contactFamilyAsset from "@/assets/contact-family.jpeg.asset.json";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/lib/contact.functions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(50).optional(),
  dueDate: z.string().optional(),
  supportType: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nurture The Roots™" },
      { name: "description", content: "Reach out to Ashlee at Nurture The Roots™ for warm, attuned postpartum support in San Francisco." },
      { property: "og:title", content: "Contact — Nurture The Roots™" },
      { property: "og:description", content: "I'd love to connect with you. Reach out and I'll respond with warmth, clarity, and care." },
    ],
  }),
  component: ContactPage,
});

const supportOptions = [
  "Postpartum Doula Care",
  "Overnight Newborn Care",
  "NBO-Informed Newborn Sessions",
  "Feeding & Lactation Support",
  "New Parent Support Coaching",
  "Innate Postpartum Care",
  "General Inquiry / Not Sure Yet",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await submitContact({ data });
      setSent(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Contact</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Contact</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 text-center">
          <p className="text-lg text-earth/80 leading-relaxed">
            I'd love to connect with you.
          </p>
          <p className="mt-4 text-lg text-earth/80 leading-relaxed">
            Whether you're ready to book support or simply exploring your options, reach out
            and I'll respond with warmth, clarity, and care.
          </p>
        </div>
      </section>

      {/* PHOTO */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-12 md:pb-16">
          <img
            src={contactFamilyAsset.url}
            alt="Ashlee McKenzie supporting a family during the fourth trimester"
            className="w-full rounded-2xl object-cover aspect-[16/9] md:aspect-[21/9]"
          />
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          {sent ? (
            <div className="rounded-2xl bg-blush/70 border border-taupe/30 p-10 text-center">
              <h2 className="text-2xl">Thank you.</h2>
              <p className="mt-4 text-earth/80 leading-relaxed">
                Your inquiry has been received with care. I'll respond within two days,
                often sooner. Until then — be gentle with yourself.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-cocoa border-b border-clay pb-1 hover:text-earth transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="rounded-2xl bg-cream/40 border border-taupe/25 p-8 md:p-12">
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">Get in Touch</div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="block text-sm text-cocoa mb-2">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/40 focus-visible:ring-clay focus-visible:ring-offset-0"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm text-cocoa mb-2">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/40 focus-visible:ring-clay focus-visible:ring-offset-0"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="block text-sm text-cocoa mb-2">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/40 focus-visible:ring-clay focus-visible:ring-offset-0"
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dueDate" className="block text-sm text-cocoa mb-2">
                      Baby's Due Date or Birth Date
                    </Label>
                    <Input
                      id="dueDate"
                      type="date"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/40 focus-visible:ring-clay focus-visible:ring-offset-0"
                      {...register("dueDate")}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="supportType" className="block text-sm text-cocoa mb-2">
                    Type of Support You're Interested In
                  </Label>
                  <Select
                    value={watch("supportType") || ""}
                    onValueChange={(value) => setValue("supportType", value)}
                  >
                    <SelectTrigger className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth focus:ring-clay focus:ring-offset-0 h-auto">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="pointer-events-auto">
                      {supportOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm text-cocoa mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Share as much or as little as feels right."
                    className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/40 focus-visible:ring-clay focus-visible:ring-offset-0 resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-sm text-red-600">{submitError}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                </div>
                <p className="text-xs text-earth/60">
                  Your words are held in confidence. I respond personally to every message.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Direct Contact</div>
            <h2 className="text-3xl md:text-4xl leading-tight">
              Prefer to Reach Out Directly?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-background/60 border border-taupe/30 p-8 text-center">
              <div className="uppercase tracking-[0.22em] text-xs text-clay mb-3">Email</div>
              <a
                href="mailto:ashleemckenzie@nurturetheroots.co"
                className="text-cocoa font-serif text-xl hover:text-earth transition-colors"
              >
                ashleemckenzie@nurturetheroots.co
              </a>
            </div>
            <div className="rounded-2xl bg-background/60 border border-taupe/30 p-8 text-center">
              <div className="uppercase tracking-[0.22em] text-xs text-clay mb-3">Location</div>
              <p className="text-cocoa font-serif text-xl">San Francisco, CA</p>
              <p className="mt-1 text-sm text-earth/70">Serving families across the Bay Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Ready to Begin?</div>
          <h2 className="text-3xl md:text-4xl leading-tight">
            Let's start your fourth trimester with intention, clarity, and attuned support.
          </h2>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
