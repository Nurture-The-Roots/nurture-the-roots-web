import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurture The Roots™ — Postpartum Sanctuary in San Francisco" },
      {
        name: "description",
        content:
          "Lineage-rooted, identity-aligned postpartum support for the fourth trimester in San Francisco.",
      },
      {
        property: "og:title",
        content: "Nurture The Roots™ — Postpartum Sanctuary in San Francisco",
      },
      {
        property: "og:description",
        content:
          "Lineage-rooted, identity-aligned postpartum support for the fourth trimester in San Francisco.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/" },
      { property: "og:image", content: "https://nurturetheroots.co/images/ashlee-brand-0077.jpg" },
      { name: "twitter:image", content: "https://nurturetheroots.co/images/ashlee-brand-0077.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/" }],
  }),
  component: Index,
});

const frameworkPillars = [
  {
    headline: "Support starts with you.",
    name: "Identity-Aligned Care™",
    description:
      "Your values, your instincts, and the identity shifts of early parenthood. Care that fits who you are, not imposed from outside.",
  },
  {
    headline: "You come from somewhere.",
    name: "Ancestral-Rooted Care™",
    description:
      "The patterns and stories you carry shape the ones you pass on — what you keep, and what you set down.",
  },
  {
    headline: "Your baby is already communicating.",
    name: "Developmental & Relational Guidance™",
    description:
      "Newborns speak from the very beginning. Reading their cues and states is the foundation of connection.",
  },
  {
    headline: "Your whole family is finding its footing.",
    name: "Sovereign Family Systems™",
    description:
      "Rhythms that fit your real life, not idealized schedules. Support for the whole system, not just the baby.",
  },
] as const;

const journeySteps = [
  "Rooting — Orientation, stabilization, early understanding.",
  "Settling — Shaping responsive rhythms.",
  "Deepening — Strengthening connection and confidence.",
  "Integrating — Carrying your rhythm forward.",
] as const;

function Index() {
  return (
    <div>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-deep-accent">
                SAN FRANCISCO · POSTPARTUM SANCTUARY
              </p>
              <h1 className="text-5xl font-medium leading-[1.08] text-cocoa md:text-6xl lg:text-7xl">
                Postpartum care begins at the roots.
              </h1>
              <p className="mt-6 max-w-2xl font-serif text-xl italic leading-[1.45] text-cocoa/85 md:text-2xl">
                Lineage-rooted, identity-aligned support for the fourth trimester — honoring who you
                are, where you come from, and the new life emerging in your arms.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CalendlyButton className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-deep-accent">
                  Book a Consultation
                </CalendlyButton>
                <Link
                  to="/framework"
                  className="inline-flex items-center rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-cocoa transition-colors hover:bg-soft-accent"
                >
                  Explore the Framework
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-soft-accent/70 bg-card shadow-[0_24px_50px_-30px_rgba(61,46,37,0.45)]">
              <img
                src="/images/ashlee-brand-0077.jpg"
                alt="Ashlee McKenzie holding a newborn in a warm postpartum home setting"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">Hi, I'm Ashlee McKenzie.</h2>
          <p className="mt-5 font-serif text-xl italic text-soft-ink md:text-2xl">
            Certified Postpartum Doula · Newborn Care Specialist · Founder of Nurture The Roots™
          </p>
          <div className="mt-10 space-y-5 text-lg leading-[1.85] text-earth">
            <p>
              For 16 years, I've sat with families through the hardest, tenderest hours — the 2am
              feeds, the questions no one warns you about, the steep, tender work of learning to
              read a brand-new person. After more than 500 families, I've learned that what
              parents need most isn't more information. It's understanding.
            </p>
            <p>
              My work helps you read your baby's cues, build rhythms that fit your real life, and
              move through this season rooted in who you are and where you come from. Not a method
              for doing more — a way of understanding more.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            A different kind of fourth trimester support
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-[1.85] text-earth">
            Most postpartum support is a task list — feedings logged, diapers counted, things done
            <em> to </em>
            your family. My work is something else. I help you understand what's actually happening
            — in your baby, in you, in the family you're becoming — so you can move through these
            weeks with clarity instead of guesswork.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="text-4xl font-medium leading-tight md:text-5xl">
              The Nurture The Roots™ Framework
            </h2>
            <p className="mt-5 font-serif text-xl italic text-soft-ink md:text-2xl">
              Four pillars. One way of seeing the fourth trimester.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {frameworkPillars.map((pillar) => (
              <article
                key={pillar.name}
                className="rounded-3xl border border-soft-accent bg-card p-7 md:p-8"
              >
                <h3 className="text-2xl font-semibold leading-tight text-cocoa">{pillar.headline}</h3>
                <p className="mt-3 text-lg font-semibold text-deep-accent">{pillar.name}</p>
                <p className="mt-3 leading-[1.8] text-earth">{pillar.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/framework"
              className="inline-flex items-center rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-cocoa transition-colors hover:bg-soft-accent"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="text-4xl font-medium leading-tight md:text-5xl">The Client Journey</h2>
            <p className="mt-5 font-serif text-xl italic text-soft-ink md:text-2xl">
              A developmental arc through the fourth trimester.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {journeySteps.map((step) => (
              <div key={step} className="rounded-2xl border border-soft-accent bg-background p-6 text-earth">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-6 md:py-10">
          <div className="overflow-hidden rounded-3xl border border-soft-accent/70 bg-card shadow-[0_20px_40px_-30px_rgba(61,46,37,0.45)]">
            <img
              src="/images/ashlee-brand-0042.jpg"
              alt="Ashlee supporting a family with newborn care in a peaceful home"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">A weekly note from Ashlee</h2>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-xl italic text-soft-ink md:text-2xl">
            One piece of fourth-trimester wisdom, every week — plus my free guide on the #1 thing
            every parent Googles at 2am.
          </p>
          <div className="mt-10 rounded-3xl border border-dashed border-soft-accent bg-background px-6 py-10 text-earth">
            [I will paste a Kit (ConvertKit) embed form here — for now, leave a clearly marked
            placeholder section with the heading and subhead, styled to match, where the form will
            go.]
          </div>
        </div>
      </section>

      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">Begin with a conversation</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-[1.85] text-earth">
            Every family begins with a 20-minute conversation — calm, unhurried, and pressure-free.
            A chance to explore what support would feel right for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-deep-accent">
              Book a Consultation
            </CalendlyButton>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-cocoa transition-colors hover:bg-soft-accent"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
