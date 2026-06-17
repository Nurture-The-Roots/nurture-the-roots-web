import { useState, type FormEvent } from "react";
import { integrations } from "@/lib/integrations";

type Props = {
  heading?: string;
  description?: string;
  className?: string;
};

/**
 * Warm, brand-styled newsletter signup. Posts directly to a ConvertKit form
 * action so we don't need to ship ConvertKit's external script. When the form
 * action is not yet configured, the input is disabled with a gentle note.
 */
export function NewsletterForm({
  heading = "Stay close to the rhythm",
  description = "Soft, occasional letters on identity-aligned postpartum care.",
  className,
}: Props) {
  const action = integrations.convertKitFormAction;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!action) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className={
        className ??
        "rounded-2xl border border-taupe/30 bg-sand/70 px-6 py-8 md:px-10 md:py-10"
      }
    >
      <h3 className="font-serif text-2xl text-cocoa">{heading}</h3>
      {description && (
        <p className="mt-2 text-sm text-cocoa/75 leading-[1.7] max-w-md">{description}</p>
      )}
      {submitted ? (
        <p className="mt-6 text-sm font-serif italic text-cocoa/80">
          Thank you — please confirm your email to begin.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md"
          aria-label="Newsletter signup"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email_address"
            required
            placeholder="you@email.com"
            disabled={!action || submitting}
            className="flex-1 rounded-full border border-taupe/40 bg-background px-5 py-3 text-sm text-earth placeholder:text-earth/45 focus:outline-none focus:ring-2 focus:ring-clay/40 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!action || submitting}
            className="inline-flex items-center justify-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-sand hover:bg-cocoa transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending…" : "Subscribe"}
          </button>
        </form>
      )}
      {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
      {!action && (
        <p className="mt-3 text-xs text-cocoa/55 italic">
          Signup will activate once the newsletter form is connected.
        </p>
      )}
    </section>
  );
}