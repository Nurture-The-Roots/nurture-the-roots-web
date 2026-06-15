import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nurture The Roots™" },
      { name: "description", content: "You don't have to navigate this beginning alone. Reach out to Ashlee at Nurture The Roots™ for postpartum support in San Francisco." },
      { property: "og:title", content: "Contact — Nurture The Roots™" },
      { property: "og:description", content: "You don't have to navigate this beginning alone. I'm here." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Contact</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Begin with a quiet conversation.</h1>
          <p className="mt-6 font-serif italic text-xl text-earth/80">
            "You don't have to navigate this beginning alone. I'm here."
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          {sent ? (
            <div className="rounded-2xl bg-blush/70 border border-taupe/30 p-10 text-center">
              <h2 className="text-2xl">Thank you.</h2>
              <p className="mt-4 text-earth/80 leading-relaxed">
                Your note has been received with care. I'll respond within two days,
                often sooner. Until then — be gentle with yourself.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Your name">
                  <input required type="text" name="name" className={inputCls} />
                </Field>
                <Field label="Email">
                  <input required type="email" name="email" className={inputCls} />
                </Field>
              </div>
              <Field label="Estimated due date or baby's birth date (optional)">
                <input type="text" name="due" placeholder="e.g. March 2026" className={inputCls} />
              </Field>
              <Field label="What kind of care are you exploring?">
                <input type="text" name="care" placeholder="Postpartum doula, overnights, lactation…" className={inputCls} />
              </Field>
              <Field label="Anything you'd like me to know">
                <textarea name="message" rows={5} className={inputCls} placeholder="Share as much or as little as feels right." />
              </Field>
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
                >
                  Send with care
                </button>
              </div>
              <p className="text-xs text-earth/60">
                Your words are held in confidence. I respond personally to every message.
              </p>
            </form>
          )}
        </div>
      </section>

      <section className="bg-blush/60">
        <div className="mx-auto max-w-3xl px-6 py-16 grid sm:grid-cols-2 gap-8 text-center sm:text-left">
          <div>
            <div className="uppercase tracking-[0.22em] text-xs text-clay">Sanctuary</div>
            <p className="mt-2 text-cocoa font-serif text-xl">San Francisco, California</p>
            <p className="mt-1 text-sm text-earth/70">Serving the Bay Area & surrounding peninsula.</p>
          </div>
          <div>
            <div className="uppercase tracking-[0.22em] text-xs text-clay">Rhythm</div>
            <p className="mt-2 text-cocoa font-serif text-xl">By appointment</p>
            <p className="mt-1 text-sm text-earth/70">Replies within two days, often sooner.</p>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-lg border border-taupe/40 bg-background px-4 py-3 text-earth placeholder:text-earth/40 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/30 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm text-cocoa mb-2">{label}</span>
      {children}
    </label>
  );
}