import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      {
        title: "The Nurture The Roots™ Framework | Ashlee McKenzie",
      },
      {
        name: "description",
        content:
          "The Nurture The Roots™ Framework: a developmental, relational model for the fourth trimester built on four pillars — Identity-Aligned Care™, Ancestral-Rooted Care™, Developmental & Relational Guidance™, and Sovereign Family Systems™ — grounded in newborn communication.",
      },
      {
        property: "og:title",
        content: "The Nurture The Roots™ Framework",
      },
      {
        property: "og:description",
        content:
          "Identity-Aligned Care™ · Ancestral-Rooted Care™ · Developmental & Relational Guidance™ · Sovereign Family Systems™ — four pillars for grounded, evidence-based postpartum and newborn care.",
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
    name: "Identity-Aligned Care™",
    lead: "Who you are shapes how you parent. The fourth trimester is a time of profound identity expansion. This pillar centers the parent — their values, their instincts, their history, and the emerging shape of who they are becoming.",
    bullets: [
      "clarifying what matters most in this season",
      "understanding your emotional landscape",
      "naming boundaries and needs",
      "supporting the transition into a new role",
      "aligning care with your lived reality",
    ],
  },
  {
    numeral: "II",
    name: "Ancestral-Rooted Care™",
    lead: "The stories you carry shape the stories you pass on. Every family arrives in the fourth trimester with inherited patterns — cultural, ancestral, relational. This pillar helps you understand what you're carrying, what you want to continue, and what you're ready to release.",
    bullets: [
      "exploring inherited beliefs about care",
      "integrating cultural or ancestral practices",
      "understanding intergenerational patterns",
      "choosing what you want to carry forward",
    ],
  },
  {
    numeral: "III",
    name: "Developmental & Relational Guidance™",
    lead: "Newborns communicate from the beginning. This pillar centers the early relational dance between you and your baby. Newborns express themselves through cues, states, rhythms, and patterns — and when parents understand these signals, connection becomes intuitive.",
    bullets: [
      "newborn behavioral observation (NBO‑informed)",
      "understanding cues + states",
      "supporting co‑regulation",
      "partner involvement + shared caregiving",
      "early attachment‑supportive practices",
    ],
  },
  {
    numeral: "IV",
    name: "Sovereign Family Systems™",
    lead: "This isn't a rigid schedule handed down from the outside. It is the natural patterning that emerges when you understand your baby's cues and your own needs — with your family fully in charge of what that looks like. This pillar helps families create sustainable flow — responsive, flexible, and grounded in real life.",
    bullets: [
      "shaping feeding + sleep patterns responsively",
      "supporting state transitions",
      "environmental adjustments",
      "daily flow mapping",
      "building systems that reduce overwhelm",
    ],
  },
];

function FrameworkPage() {
  return (
    <div className="framework-page">
      {/* HERO — THE FRAMEWORK */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-24 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">The Framework</div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            The Nurture The Roots
            <TM /> Framework
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            The earliest weeks of life are a period of rapid neurological, relational, and identity
            formation. The Nurture The Roots
            <TM /> Framework is the structure that guides my work with families — a way of
            understanding the fourth trimester that is grounded in newborn communication,
            developmental science, and the lived reality of early parenthood.
          </p>
          <p className="mt-6 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            This framework is not a method or a protocol. It is a lens — one that helps families
            make sense of their baby, their own transition, and the systems that support them.
          </p>
        </div>
      </section>

      {/* FRAMEWORK IMAGE */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <img
              src="/images/ashlee-brand-0042.jpg"
              alt="Postpartum doula Ashlee McKenzie caring for a newborn on a changing table in a calm nursery"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* PILLARS — Identity-Aligned Care™ · Ancestral-Rooted Care™ · Developmental & Relational Guidance™ · Sovereign Family Systems™ */}
      {pillars.map((pillar, i) => {
        const alt = i % 2 === 1;
        return (
          <div key={pillar.numeral} className="section">
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
                </div>
                <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
                  {pillar.lead}
                </p>
                <ul className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                  {pillar.bullets.map((item) => (
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
            </section>
          </div>
        );
      })}

      <SectionDivider />

      {/* IMAGE — relational moment */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-10 md:py-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] max-w-md mx-auto">
            <img
              src="/images/playful-relational-moment.jpg"
              alt="A playful, responsive moment between caregiver and baby during early relational connection"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY THIS FRAMEWORK MATTERS */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">
            Why This Framework Matters
          </div>
          <h2 className="sr-only">Why This Framework Matters</h2>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            The Nurture The Roots
            <TM /> Framework gives families a way to understand the fourth trimester that is:
          </p>
          <ul className="mt-6 space-y-2 text-[17px] text-cocoa/80 leading-[1.85] max-w-md mx-auto text-left">
            {[
              "developmental and relational",
              "attentive to identity transitions",
              "culturally aware",
              "grounded in newborn communication",
              "adaptable to each family's values and lived reality",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-clay mt-2 text-[0.5rem]">&#9679;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Explore Services
            </Link>
            <CalendlyButton className="button inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors">
              Schedule a Consultation
            </CalendlyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
