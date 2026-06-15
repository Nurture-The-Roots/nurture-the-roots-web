import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nurture The Roots™ Postpartum Care" },
      { name: "description", content: "Postpartum doula care, overnight newborn care, NBO-informed sessions, feeding and lactation support, new parent coaching, and innate postpartum care in San Francisco." },
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
  {
    title: "Innate Postpartum Care",
    description:
      "A holistic, lineage-rooted approach to postpartum healing that supports rest, nourishment, warmth, and emotional grounding.",
    includes: [
      "Nervous system support",
      "Rest + recovery guidance",
      "Warmth + nourishment practices",
      "Rituals for postpartum healing",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Services</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Services</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="space-y-6 text-lg text-earth/80 leading-relaxed text-center">
            <p>
              Every family's needs are unique.
            </p>
            <p>
              My services are designed to support you through the fourth trimester with clarity,
              warmth, and attuned care — day and night.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="rounded-2xl bg-cream/40 p-8 md:p-12 border border-taupe/25"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="font-serif text-4xl text-clay leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-2xl md:text-3xl leading-tight">{s.title}</h2>
              </div>
              <p className="text-lg text-earth/80 leading-relaxed mb-6">
                {s.description}
              </p>
              <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">
                Includes
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {s.includes.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3 rounded-lg border border-taupe/30 bg-blush/70 px-4 py-3 text-sm text-cocoa"
                  >
                    <span className="text-clay mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl leading-tight">
            You don't have to navigate this beginning alone.
          </h2>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            If you're craving clarity, rest, and attuned support, I'd love to walk with you through this season.
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
