import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nurture The Roots™ Postpartum Care" },
      { name: "description", content: "Postpartum doula care, overnight newborn care, NBO-informed sessions, feeding and lactation support, and new parent coaching in San Francisco." },
      { property: "og:title", content: "Services — Nurture The Roots™" },
      { property: "og:description", content: "Warm, attuned, identity-aligned postpartum offerings." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Postpartum Doula Care",
    description:
      "Daytime support focused on emotional care, newborn guidance, feeding support, and helping you feel grounded and confident in your new role.",
    includes: [
      "Emotional support",
      "Feeding + lactation guidance",
      "Newborn care education",
      "Household support",
      "Parent coaching",
    ],
  },
  {
    title: "Overnight Newborn Care",
    description:
      "Gentle, developmentally aligned overnight support so you can rest while your baby is cared for with attunement and expertise.",
    includes: [
      "Overnight newborn care",
      "Feeding support",
      "Sleep shaping (developmental, not conditioning)",
      "Morning updates + guidance",
    ],
  },
  {
    title: "NBO-Informed Newborn Sessions",
    description:
      "A structured, relational session using the Newborn Behavioral Observations (NBO) framework to help you understand your baby's cues, communication, and early developmental patterns.",
    includes: [
      "NBO assessment",
      "Cue-based guidance",
      "Developmental support",
      "Personalized recommendations",
    ],
  },
  {
    title: "Feeding & Lactation Support",
    description:
      "Gentle, evidence-based support for chestfeeding, bottle feeding, combination feeding, and early lactation challenges.",
    includes: [
      "Positioning + latch support",
      "Pumping guidance",
      "Bottle feeding education",
      "Feeding plans tailored to your family",
    ],
  },
  {
    title: "New Parent Support Coaching",
    description:
      "Relational, identity-aligned coaching for new parents navigating the emotional, developmental, and practical transitions of early parenthood.",
    includes: [
      "Identity support",
      "Nervous system care",
      "Communication + partnership support",
      "Guidance through postpartum transitions",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Services</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">Services</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <div className="space-y-6 text-[17px] text-cocoa/80 leading-[1.85] text-center">
            <p>
              Below, you'll find the offerings that currently shape my practice —
              from daytime postpartum care and overnight support to feeding guidance,
              NBO-informed newborn sessions, and relational coaching for new parents.
            </p>
            <p>
              Each one is designed to meet you with warmth, clarity, and attuned care
              through the tender terrain of the fourth trimester.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-24 md:pb-32 space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="rounded-2xl bg-blush/50 p-10 md:p-14 border border-taupe/25"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="font-serif text-4xl text-clay leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa">{s.title}</h2>
              </div>
              <p className="text-lg text-cocoa/80 leading-[1.85] mb-10 max-w-2xl">
                {s.description}
              </p>
              <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">
                Includes
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {s.includes.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/70 px-5 py-4 text-sm text-cocoa"
                  >
                    <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            You don't have to navigate this beginning alone.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're craving clarity, rest, and attuned support, I'd love to walk with you through this season.
          </p>
          <div className="mt-12">
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
