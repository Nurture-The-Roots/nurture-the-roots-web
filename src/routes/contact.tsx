import { createFileRoute } from "@tanstack/react-router";
import contactFamilyResponsive from "@/assets/contact-family.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
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
import { DubsadoEmbed } from "@/components/integrations/DubsadoEmbed";
import { integrations } from "@/lib/integrations";

const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(50).optional(),
  dueDate: z.string().optional(),
  location: z.string().trim().max(150).optional(),
  supportType: z.string().optional(),
  heardAbout: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
  /** Honeypot: must be empty — bots fill it, humans don't see it */
  _hp: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nurture The Roots™" },
      {
        name: "description",
        content:
          "Reach out to Ashlee at Nurture The Roots™ for warm, evidence-based postpartum and newborn support in the San Francisco Bay Area.",
      },
      { property: "og:title", content: "Contact — Nurture The Roots™" },
      {
        property: "og:description",
        content:
          "I'd love to connect with you. Reach out and I'll respond with warmth, clarity, and care.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/contact" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/contact" }],
  }),
  component: ContactPage,
});

const supportOptions = [
  "Postpartum Doula Support",
  "Newborn Care Specialist Support",
  "Fourth Trimester Coaching",
  "I'm not sure yet",
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
    // Honeypot check: if the hidden field is filled, a bot submitted the form.
    // Silently fake success to avoid revealing the protection mechanism.
    if (data._hp) {
      setSent(true);
      reset();
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const extraLines: string[] = [];
      if (data.location) extraLines.push(`Location: ${data.location}`);
      if (data.heardAbout)
        extraLines.push(`How they heard about Nurture The Roots: ${data.heardAbout}`);
      const composedMessage = extraLines.length
        ? `${data.message}\n\n— — —\n${extraLines.join("\n")}`
        : data.message;
      const { location: _l, heardAbout: _h, _hp: _honeypot, ...rest } = data;
      void _l;
      void _h;
      void _honeypot;
      await submitContact({ data: { ...rest, message: composedMessage } });
      setSent(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Contact</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Contact
          </h1>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            I'd love to connect with you.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Whether you're ready to book support or simply exploring your options, reach out and
            I'll respond with warmth, clarity, and care.
          </p>
        </div>
      </section>

      {/* EDITORIAL IMAGE */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <ResponsiveImage
              source={contactFamilyResponsive}
              alt="Postpartum doula Ashlee McKenzie supporting a San Francisco family with their newborn during the fourth trimester"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          {integrations.dubsadoInquiryUrl ? (
            <DubsadoEmbed title="Nurture The Roots inquiry form" />
          ) : sent ? (
            <div className="rounded-2xl bg-blush/50 border border-taupe/25 p-10 md:p-14 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-cocoa">
                Thank you.
              </h2>
              <p className="confirmation mt-6 text-[17px] text-cocoa/80 leading-[1.85]">
                Thank you for reaching out. I'll be in touch within 1–2 business days with next
                steps.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 text-cocoa border-b border-clay pb-1 hover:text-earth transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="rounded-2xl bg-blush/50 border border-taupe/25 p-10 md:p-14">
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Inquiry Form</div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium leading-[1.25] text-cocoa mb-8">
                Share a bit about your family and what you're hoping for in this season.
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot: hidden from real users, visible to bots */}
                <div aria-hidden="true" className="absolute opacity-0 pointer-events-none overflow-hidden h-0 w-0 -z-10">
                  <label htmlFor="contact_hp">Leave this field empty</label>
                  <input
                    id="contact_hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("_hp")}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="block text-sm text-cocoa mb-2">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/70 focus-visible:ring-clay focus-visible:ring-offset-0"
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
                      placeholder="Your email address"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/70 focus-visible:ring-clay focus-visible:ring-offset-0"
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
                      placeholder="Your phone number"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/70 focus-visible:ring-clay focus-visible:ring-offset-0"
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dueDate" className="block text-sm text-cocoa mb-2">
                      Estimated Due Date or Baby's Birth Date
                    </Label>
                    <Input
                      id="dueDate"
                      type="date"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/70 focus-visible:ring-clay focus-visible:ring-offset-0"
                      {...register("dueDate")}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="block text-sm text-cocoa mb-2">
                    Location
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="City or neighborhood"
                    className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/70 focus-visible:ring-clay focus-visible:ring-offset-0"
                    {...register("location")}
                  />
                </div>

                <div>
                  <Label htmlFor="supportType" className="block text-sm text-cocoa mb-2">
                    What kind of support you're seeking
                  </Label>
                  <Select
                    value={watch("supportType") || ""}
                    onValueChange={(value) => setValue("supportType", value)}
                  >
                    <SelectTrigger
                      id="supportType"
                      aria-label="Type of support"
                      className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth focus:ring-clay focus:ring-offset-0 h-auto"
                    >
                      <SelectValue placeholder="Select an option" />
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
                  <Label htmlFor="heardAbout" className="block text-sm text-cocoa mb-2">
                    How you heard about Nurture The Roots
                    <span className="align-super text-[0.6em] ml-0.5">™</span>
                  </Label>
                  <Input
                    id="heardAbout"
                    type="text"
                    placeholder="Referral, social media, search, etc."
                    className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/70 focus-visible:ring-clay focus-visible:ring-offset-0"
                    {...register("heardAbout")}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm text-cocoa mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Share anything you'd like me to know about your family, your needs, or your questions."
                    className="w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/70 focus-visible:ring-clay focus-visible:ring-offset-0 resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {submitError && <p className="text-sm text-red-600">{submitError}</p>}

                <p className="form-subtext text-[15px] italic text-cocoa/70 leading-[1.7]">
                  You don't need the perfect words — just begin where you are.
                </p>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button primary inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 pb-24 md:pb-32">
          <SectionDivider className="mb-16 md:mb-20" />
          <div className="text-center space-y-8">
            <div>
              <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
                Your words are held in confidence.
              </p>
              <p className="mt-2 text-[17px] text-cocoa/70 leading-[1.85]">
                I respond personally to every message.
              </p>
            </div>
            <div>
              <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
                Your family does not have to move through postpartum alone.
              </p>
              <p className="mt-2 text-[17px] text-cocoa/70 leading-[1.85]">
                Support is not a luxury — it is part of the postpartum design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
