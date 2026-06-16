import { createFileRoute, Link } from "@tanstack/react-router";
import bandAsset from "@/assets/branding-55.jpeg.asset.json";
import bandResponsive from "@/assets/branding-55.responsive.json";
import bassinetResponsive from "@/assets/branding-photos-39.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";

export const Route = createFileRoute("/client-journey")({
  head: () => ({
    meta: [
      { title: "The Client Journey — Nurture The Roots™" },
      { name: "description", content: "A four‑phase pathway through the fourth trimester: Rooting, Tending, Strengthening, and Integrating — identity‑aligned postpartum support in San Francisco." },
      { property: "og:title", content: "The Nurture The Roots™ Client Journey" },
      { property: "og:description", content: "Rooting · Tending · Strengthening · Integrating — a four‑phase pathway through the fourth trimester." },
      { property: "og:url", content: "https://nurturetheroots.co/client-journey" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/client-journey" }],
  }),
  component: ClientJourneyPage,
});

const TM = () => <span className="align-super text-[0.4em] ml-0.5">™</span>;

const phases = [
  {
    numeral: "One",
    name: "Rooting",
    focus: "Identity, values, emotional landscape, and preparation.",
    includes: ["intake", "identity mapping", "values clarification", "postpartum vision", "support ecosystem review"],
    body: "This phase helps families name who they are, what they value, and what they need protected as they prepare for postpartum.",
  },
  {
    numeral: "Two",
    name: "Tending",
    focus: "Newborn care, regulation, rhythms, nourishment, and family support.",
    includes: ["cue‑based care", "emotional landscape reading", "parent‑baby attunement", "care as ceremony", "feeding and sleep rhythm support", "co‑regulation practices"],
    body: "This phase supports the daily realities of newborn care while helping parents build confidence through relationship and observation.",
  },
  {
    numeral: "Three",
    name: "Strengthening",
    focus: "Confidence, systems, family sovereignty, and transitions.",
    includes: ["sovereign planning refinement", "support ecosystem building", "threshold navigation", "relational repair", "household systems"],
    body: "This phase helps the family strengthen the rhythms, boundaries, and systems that allow them to feel supported and grounded.",
  },
  {
    numeral: "Four",
    name: "Integrating",
    focus: "Continuity beyond the fourth trimester.",
    includes: ["reflection", "identity integration", "baby rhythm review", "family system review", "next‑season planning", "closing ritual"],
    body: "This phase helps families carry what they have learned into the next season with clarity, confidence, and continuity.",
  },
];

function ClientJourneyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Client Journey</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            The Nurture The Roots<TM /> Client Journey
          </h1>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            A four‑phase pathway through the fourth trimester.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — tending the rhythm */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <ResponsiveImage
              source={bassinetResponsive}
              alt="Ashlee leaning over a bassinet, sharing a quiet moment of eye contact with a baby looking up at her"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_40%]"
            />
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 space-y-16 md:space-y-24">
          {phases.map((phase, i) => {
            const alt = i % 2 === 0;
            return (
              <article
                key={phase.numeral}
                className={`rounded-2xl border border-taupe/25 p-10 md:p-14 ${alt ? "bg-blush/50" : "bg-sand/60"}`}
              >
                <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">Phase {phase.numeral}</div>
                <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-cocoa">
                  {phase.name}
                </h2>
                <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/80 leading-[1.5] max-w-2xl">
                  {phase.focus}
                </p>
                <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl">
                  {phase.body}
                </p>
                <div className="mt-10">
                  <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">Includes</div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {phase.includes.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-3 rounded-xl border border-taupe/25 px-4 py-3 text-sm text-cocoa ${alt ? "bg-sand/60" : "bg-blush/60"}`}
                      >
                        <span className="text-clay mt-1 text-[0.55rem]">&#9679;</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Begin your client journey
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Every family begins where they are. We'll meet first in a consultation, then root your support into the phase that fits.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}