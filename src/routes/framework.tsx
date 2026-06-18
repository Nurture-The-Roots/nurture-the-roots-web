import { createFileRoute, Link } from "@tanstack/react-router";
import branding56Responsive from "@/assets/branding-56.responsive.json";
import branding57Responsive from "@/assets/branding-57.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      {
        title: "The Nurture The Roots™ Framework — Identity · Lineage · Relationship · Rhythm",
      },
      {
        name: "description",
        content:
          "The Nurture The Roots™ Postpartum Framework: a lineage‑rooted, identity‑aligned, developmental, and relational model for the fourth trimester, built on four pillars.",
      },
      {
        property: "og:title",
        content: "The Nurture The Roots™ Postpartum Framework",
      },
      {
        property: "og:description",
        content:
          "Identity · Lineage · Relationship · Rhythm — four pillars for grounded, sovereign postpartum care.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/framework" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/framework" }],
  }),
  component: FrameworkPage,
});

const TM = () => <span className="align-super text-[0.4em] ml-0.5">™</span>;

const pillars = [
  {
    numeral: "I",
    name: "Identity‑Aligned Care",
    quote: "Postpartum support begins with identity, not tasks.",
    body: [
      "The fourth trimester is an identity shift for the parent, the baby, and the family system. This pillar centers who you are becoming — not just what you need to do.",
      "Parents learn to understand their own emotional landscape, read the room, and respond to their baby with grounded presence.",
    ],
    practices: ["Identity Mapping", "Emotional Landscape Reading", "Attunement as a Practice"],
  },
  {
    numeral: "II",
    name: "Ancestral‑Rooted Care",
    quote: "Care is ceremony. Care is lineage. Care is continuity.",
    body: [
      "Postpartum is a sacred return to rhythm, meaning, and ancestral memory. This pillar restores the ceremonial nature of tending — transforming daily care into grounding rituals that honor the lineage your baby is entering.",
    ],
    practices: ["Rhythms Over Routines", "Care as Ceremony", "Lineage Continuity"],
  },
  {
    numeral: "III",
    name: "Developmental + Relational Guidance",
    quote: "Newborns communicate from the beginning. Parents deserve to feel confident listening.",
    body: [
      "This pillar translates professional newborn care mastery into relational, accessible guidance. Parents learn to understand newborn cues, support regulation, and navigate the emotional and developmental thresholds of the fourth trimester.",
    ],
    practices: ["Cue‑Based Care", "Relational Regulation", "Threshold Navigation"],
  },
  {
    numeral: "IV",
    name: "Sovereign Family Systems",
    quote:
      "Families thrive when they build systems that honor their identity, not external expectations.",
    body: [
      "This pillar helps families create sustainable, values‑aligned support systems that reflect who they are — not what culture demands. Parents leave the fourth trimester with clarity, confidence, and continuity.",
    ],
    practices: [
      "Sovereign Postpartum Planning",
      "Support Ecosystem Building",
      "Integration + Continuity",
    ],
  },
];

function FrameworkPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">The Framework</div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            The Nurture The Roots
            <TM /> Postpartum Framework
          </h1>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            A lineage‑rooted, identity‑aligned, developmental, and relational model for the fourth
            trimester.
          </p>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            Postpartum is a threshold — a becoming.
          </p>
          <p className="mt-6 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            Families deserve care that honors who they are, where they come from, and the new life
            emerging in their arms. The Nurture The Roots
            <TM /> Framework restores meaning, rhythm, and relational depth to the earliest weeks of
            parenthood, grounding care in identity, lineage, newborn communication, and sovereign
            systems of support.
          </p>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-lg md:text-xl text-cocoa/85 leading-[1.5]">
            This is not task‑based postpartum care. This is identity‑based, relationally attuned,
            lineage‑rooted postpartum sanctuary.
          </p>
        </div>
      </section>

      {/* FRAMEWORK IMAGE */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <ResponsiveImage
              source={branding56Responsive}
              alt="Ashlee barefoot in a calm nursery, attentively tending to a baby on a changing table"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* AT THE CENTER */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">At the Center</div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] text-cocoa">
            Identity · Lineage · Relationship · Rhythm
          </h2>
          <div className="mt-10 space-y-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>These four roots shape every moment of the fourth trimester.</p>
            <p>
              They are the foundation of the Nurture The Roots
              <TM /> approach and the compass for how families are supported, seen, and strengthened.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      {pillars.map((pillar, i) => {
        const alt = i % 2 === 1;
        return (
          <div key={pillar.numeral}>
            <SectionDivider />
            <section className={alt ? "bg-blush/40" : "bg-background"}>
              <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
                <div className="text-center mb-12">
                  <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
                    Pillar {pillar.numeral}
                  </div>
                  <h2 className="font-serif text-3xl md:text-5xl font-medium leading-[1.15] text-cocoa">
                    {pillar.name}
                  </h2>
                  <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5] max-w-2xl mx-auto">
                    {pillar.quote}
                  </p>
                </div>
                <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
                  {pillar.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-10 max-w-2xl mx-auto">
                  <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">Practices</div>
                  <ul className="space-y-3">
                    {pillar.practices.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-3 rounded-xl border border-taupe/25 px-5 py-4 text-[15px] text-cocoa ${alt ? "bg-sand/60" : "bg-blush/40"}`}
                      >
                        <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* IMAGE — tender hold (after Pillar II) */}
            {i === 1 && (
              <section className="bg-background">
                <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-16">
                  <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] max-w-2xl mx-auto">
                    <img
                      src="/images/ashlee-brand-0020.jpg"
                      alt="Ashlee holding a baby close against her chest in a tender embrace, bright nursery light behind them"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 768px) 672px, 100vw"
                      className="w-full h-full object-cover object-[center_30%]"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* IMAGE — attunement (after Pillar III) */}
            {i === 2 && (
              <section className="bg-background">
                <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-16">
                  <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/4] sm:aspect-[3/2] max-w-2xl mx-auto">
                    <ResponsiveImage
                      source={branding57Responsive}
                      alt="Ashlee kneeling on a play mat, smiling and cradling a baby in a joyful moment of attunement"
                      sizes="(min-width: 768px) 672px, 100vw"
                      className="w-full h-full object-cover object-[center_25%]"
                    />
                  </div>
                </div>
              </section>
            )}
          </div>
        );
      })}

      <SectionDivider />

      {/* WHY THIS FRAMEWORK MATTERS */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Why This Framework Matters
            </div>
          </div>
          <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] text-center max-w-2xl mx-auto">
            Because postpartum is not a checklist. It is a relational, ancestral, developmental,
            identity‑shaping experience.
          </p>
          <p className="mt-12 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto text-center">
            Families deserve care that:
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "Honors their lineage",
              "Strengthens their identity",
              "Deepens their relationship with their baby",
              "Restores rhythm and regulation",
              "Builds sustainable systems of support",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/60 px-5 py-4 text-[15px] text-cocoa"
              >
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            This framework ensures that postpartum care is not reactive — it is rooted, intentional,
            and sovereign.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* HOW THIS FRAMEWORK COMES ALIVE */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">
            How This Framework Comes Alive
          </div>
          <div className="space-y-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              The Nurture The Roots
              <TM /> Framework is woven through every part of your care experience — from newborn
              communication and developmental guidance to identity mapping, ceremonial tending, and
              sovereign postpartum planning.
            </p>
            <p>
              It is the foundation of how families are held, taught, and supported in the fourth
              trimester.
            </p>
            <p>Explore how this framework shapes your care experience:</p>
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Explore how this framework holds your family
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
              Schedule a Consultation
            </CalendlyButton>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
