import { createFileRoute, Link } from "@tanstack/react-router";
import servicesImageAsset from "@/assets/approach-3.jpeg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nurture The Roots™ Postpartum Care" },
      { name: "description", content: "Postpartum doula care, overnight newborn care, NBO-informed sessions, feeding and lactation support, and new parent coaching in San Francisco." },
      { property: "og:title", content: "Services — Nurture The Roots™" },
      { property: "og:description", content: "Warm, attuned, identity-aligned postpartum offerings." },
      { property: "og:url", content: "https://nurture-the-roots-web.lovable.app/services" },
      { property: "og:image", content: servicesImageAsset.url },
    ],
    links: [
      { rel: "canonical", href: "https://nurture-the-roots-web.lovable.app/services" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Postpartum Doula Care",
    description:
      "Identity-aligned, attuned support for your fourth trimester.",
  },
  {
    title: "Overnight Newborn Care",
    description:
      "Rest, recovery, and continuity through the night.",
  },
  {
    title: "NBO‑Informed Newborn Sessions",
    description:
      "Learn to read your baby's cues with confidence.",
  },
  {
    title: "Lactation Education",
    description:
      "Gentle, evidence‑based feeding support.",
  },
  {
    title: "Holistic Family Coaching",
    description:
      "Guidance for identity, rhythms, and relational wellbeing.",
  },
];

function ServicesPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Services</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">How I Support Your Family</h1>
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
              <p className="text-lg text-cocoa/80 leading-[1.85] max-w-2xl">
                {s.description}
              </p>
            </article>
          ))}
          <div className="text-center pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            You don't have to navigate this beginning alone.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for support that feels aligned with your family's needs, I'd be honored to walk with you.
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
