import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Nurture The Roots™" },
      { name: "description", content: "What families say about working with Ashlee McKenzie and Nurture The Roots™ postpartum care." },
      { property: "og:title", content: "Testimonials — Nurture The Roots™" },
      { property: "og:description", content: "What families say about their experience with lineage-rooted postpartum care." },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    quote: "You helped us understand our baby in a way no book ever could.",
    name: "First-time parents, San Francisco",
  },
  {
    quote: "You made our home feel peaceful again.",
    name: "Family of three, Pacific Heights",
  },
  {
    quote: "You held us, not just the baby.",
    name: "New parents, Richmond District",
  },
  {
    quote: "Your presence brought calm into our home during a time that felt overwhelming.",
    name: "Second-time parents, Bay Area",
  },
  {
    quote: "We felt seen, supported, and understood. You helped us trust ourselves.",
    name: "First-time parents, Inner Sunset",
  },
  {
    quote: "Our baby responded to you immediately. Watching you read her cues taught us so much.",
    name: "Parents of a newborn, Noe Valley",
  },
];

function TestimonialsPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Testimonials</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Testimonials</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 text-center">
          <p className="text-lg text-earth/80 leading-relaxed">
            The families I support often describe our time together as grounding, clarifying, and deeply transformative.
          </p>
          <p className="mt-4 text-lg text-earth/80 leading-relaxed">
            Here are some of the words they've shared about their experience.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-16 md:pb-24 space-y-10">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="rounded-2xl bg-cream/40 border border-taupe/25 p-8 md:p-12"
            >
              <div className="font-serif text-4xl text-clay/40 leading-none mb-4">"</div>
              <blockquote className="font-serif italic text-2xl md:text-3xl text-cocoa leading-snug">
                {t.quote}
              </blockquote>
              {t.name && (
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-clay">
                  — {t.name}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Ready to Feel Supported?</div>
          <h2 className="text-3xl md:text-4xl leading-tight">
            Ready to Feel Supported?
          </h2>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            If you're craving clarity, rest, and attuned guidance, I'd love to support your family through this tender beginning.
          </p>
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
