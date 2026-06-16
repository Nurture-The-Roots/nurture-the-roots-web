import { createFileRoute, Link } from "@tanstack/react-router";
import bandAsset from "@/assets/branding-61.jpeg.asset.json";
import bandResponsive from "@/assets/branding-61.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: "The Nurture The Roots™ Postpartum Framework — Four Pillars & Twelve Practices" },
      { name: "description", content: "A lineage‑rooted, identity‑aligned, developmental, relational model for the fourth trimester — four pillars and twelve practices for grounded postpartum care in San Francisco." },
      { name: "keywords", content: "postpartum framework, fourth trimester, identity-aligned postpartum, ancestral postpartum care, newborn cues, sovereign family systems, Nurture The Roots" },
      { property: "og:title", content: "The Nurture The Roots™ Postpartum Framework" },
      { property: "og:description", content: "Four pillars and twelve practices for grounded, identity‑rooted postpartum care." },
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
    title: "Identity‑Aligned Care",
    belief: "Postpartum support begins with identity, not tasks.",
    description:
      "This pillar recognizes postpartum as an identity threshold for the parent, the baby, the family system, and the practitioner.",
    practices: [
      { name: "Identity Mapping", description: "helps parents understand who they are becoming, not only what they need to do." },
      { name: "Emotional Landscape Reading", description: "is the practice of reading the room, the nervous system, and the relational field." },
      { name: "Attunement as a Practice", description: "teaches parents how to observe, interpret, and respond to their baby's cues." },
    ],
  },
  {
    numeral: "II",
    title: "Ancestral‑Rooted Care",
    belief: "Care is ceremony. Care is lineage. Care is continuity.",
    description:
      "This pillar restores sacredness, rhythm, and meaning to daily postpartum tending.",
    practices: [
      { name: "Rhythms Over Routines", description: "teaches families to follow the baby's natural rhythms rather than impose rigid schedules." },
      { name: "Care as Ceremony", description: "transforms daily care tasks into grounding rituals." },
      { name: "Lineage Continuity", description: "helps parents understand the ancestral, familial, and spiritual significance of their baby's arrival." },
    ],
  },
  {
    numeral: "III",
    title: "Developmental + Relational Guidance",
    belief: "Newborns communicate from the beginning. Parents deserve to feel confident listening.",
    description:
      "This pillar translates professional newborn care mastery into practical, relational teaching.",
    practices: [
      { name: "Cue‑Based Care", description: "teaches parents to follow newborn cues for feeding, sleep, soothing, and regulation." },
      { name: "Relational Regulation", description: "supports parents in co‑regulating with their baby." },
      { name: "Threshold Navigation", description: "guides families through the emotional, developmental, and identity shifts of the fourth trimester." },
    ],
  },
  {
    numeral: "IV",
    title: "Sovereign Family Systems",
    belief: "Families thrive when they build systems that honor their identity, not external expectations.",
    description:
      "This pillar helps families create practical, sustainable, values‑aligned support systems.",
    practices: [
      { name: "Sovereign Postpartum Planning", description: "creates plans based on identity, values, needs, and lived reality." },
      { name: "Support Ecosystem Building", description: "helps families create sustainable care networks." },
      { name: "Integration + Continuity", description: "guides families as they transition out of the fourth trimester with confidence and clarity." },
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
            The Nurture The Roots<TM /> Postpartum Framework
          </h1>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            A lineage‑rooted, identity‑aligned, developmental, relational model for the fourth trimester.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <p className="text-[17px] text-cocoa/80 leading-[1.85]">
            Nurture The Roots<TM /> helps families move through the fourth trimester by grounding postpartum care in identity, lineage, newborn communication, relational regulation, and sovereign systems of support.
          </p>
          <p className="mt-10 font-serif italic text-xl md:text-2xl text-cocoa leading-[1.5]">
            Postpartum support begins at the roots: identity, lineage, relationship, and rhythm.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — developmental + relational guidance */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-4 md:pb-10">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <ResponsiveImage
              source={bandResponsive}
              alt="Ashlee playfully engaging a baby with a wooden toy during developmental tummy time"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_40%]"
            />
          </div>
        </div>
      </section>

      {/* ROOT-SYSTEM DIAGRAM */}
      <section className="bg-blush/50">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">At the Center</div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-cocoa">
              Identity · Lineage · Relationship · Rhythm
            </h2>
          </div>
          <div className="relative mx-auto aspect-square max-w-lg">
            <div className="absolute inset-0 rounded-full border border-taupe/30" />
            <div className="absolute inset-[12%] rounded-full border border-taupe/25" />
            <div className="absolute inset-[28%] rounded-full bg-sand border border-taupe/30 flex items-center justify-center text-center px-6">
              <span className="font-serif italic text-cocoa leading-[1.4] text-base md:text-lg">
                identity<br />lineage<br />relationship<br />rhythm
              </span>
            </div>
            {pillars.map((p, i) => {
              const positions = [
                "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
              ];
              return (
                <div
                  key={p.numeral}
                  className={`absolute ${positions[i]} w-32 md:w-40 rounded-full border border-clay/40 bg-sand px-3 py-3 text-center shadow-sm`}
                >
                  <div className="font-serif text-clay text-xs uppercase tracking-[0.2em]">Pillar {p.numeral}</div>
                  <div className="font-serif text-cocoa text-xs md:text-sm leading-[1.25] mt-1">{p.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PILLARS + PRACTICES */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Four Pillars · Twelve Practices</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The structure of the work
            </h2>
          </div>
          <div className="space-y-16 md:space-y-24">
            {pillars.map((p, i) => {
              const alt = i % 2 === 0;
              return (
                <article
                  key={p.numeral}
                  className={`rounded-2xl border border-taupe/25 p-10 md:p-14 ${alt ? "bg-blush/50" : "bg-sand/60"}`}
                >
                  <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">
                    Pillar {p.numeral}
                  </div>
                  <div className="flex items-baseline gap-5 mb-6">
                    <div className="font-serif text-5xl text-clay leading-none">{p.numeral}</div>
                    <h3 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa">
                      {p.title}
                    </h3>
                  </div>
                  <p className="font-serif italic text-xl md:text-2xl text-cocoa/80 leading-[1.4] mb-6 max-w-2xl">
                    “{p.belief}”
                  </p>
                  <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mb-10">
                    {p.description}
                  </p>
                  <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">Practices</div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {p.practices.map((practice) => (
                      <div
                        key={practice.name}
                        className={`rounded-xl border border-taupe/25 px-5 py-5 ${alt ? "bg-sand/70" : "bg-blush/60"}`}
                      >
                        <div className="font-serif text-lg text-cocoa mb-2 leading-snug">
                          {practice.name}
                        </div>
                        <p className="text-sm text-cocoa/75 leading-relaxed">{practice.description}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
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
            <Link
              to="/services"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/client-journey"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              The Client Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}