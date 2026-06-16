import { createFileRoute, Link } from "@tanstack/react-router";
import servicesImageAsset from "@/assets/approach-3.jpeg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fourth Trimester Expert & Postpartum Doula Support | Nurture The Roots™" },
      { name: "description", content: "Postpartum doula support from a Fourth Trimester Expert in San Francisco — attuned newborn care, identity‑rooted guidance, and evidence‑based education for families in the first 12 weeks." },
      { property: "og:title", content: "Postpartum Doula Support — Fourth Trimester Expert" },
      { property: "og:description", content: "Gentle, grounded postpartum doula support for San Francisco families welcoming a newborn." },
      { property: "og:url", content: "https://nurturetheroots.co/services" },
      { property: "og:image", content: servicesImageAsset.url },
    ],
    links: [
      { rel: "canonical", href: "https://nurturetheroots.co/services" },
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
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            Fourth Trimester Expert care for San Francisco families.
          </p>
        </div>
      </section>

      {/* POSTPARTUM DOULA SUPPORT */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Postpartum Doula Support</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Sixteen years of attuned, grounded care
            </h2>
          </div>
          <div className="space-y-6 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              As a Fourth Trimester Expert with 16 years of experience, I offer gentle, grounded
              care for families welcoming a newborn. My support blends attuned newborn care,
              identity‑rooted guidance, and evidence‑based education to help you feel steady and
              supported.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">What's Included</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Care woven through your earliest weeks
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Newborn care + soothing",
              "Feeding support (breast / chest / bottle)",
              "Sleep shaping + natural rhythms",
              "Emotional grounding + reassurance",
              "Light household support",
              "Parent education + clarity",
              "Identity‑rooted guidance for your family's values",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/60 px-5 py-4 text-cocoa"
              >
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO I SUPPORT + PACKAGES */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-blush/50 border border-taupe/25 p-10 md:p-12">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">Who I Support</div>
            <h3 className="font-serif text-2xl md:text-3xl text-cocoa leading-snug mb-4">
              Families welcoming newborns
            </h3>
            <p className="text-cocoa/80 leading-[1.85]">
              San Francisco families in the first 12 weeks with their baby.
            </p>
          </div>
          <div className="rounded-2xl bg-blush/50 border border-taupe/25 p-10 md:p-12">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">Packages &amp; Availability</div>
            <h3 className="font-serif text-2xl md:text-3xl text-cocoa leading-snug mb-4">
              Customizable to your needs
            </h3>
            <p className="text-cocoa/80 leading-[1.85]">
              Support is shaped around your family's rhythms and capacity. Reach out to talk through
              what would feel most supportive.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-24 md:pb-32 space-y-16 md:space-y-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Offerings</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Ways we can work together
            </h2>
          </div>
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

      {/* FAQ (SHORT) */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 font-sans">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">FAQ</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              A few common questions
            </h2>
          </div>
          <dl className="space-y-8">
            {[
              {
                q: "What does a Fourth Trimester Expert do?",
                a: "I support you emotionally, practically, and educationally during the earliest weeks with your baby.",
              },
              {
                q: "Do you offer overnight support?",
                a: "Yes — availability varies.",
              },
              {
                q: "What areas do you serve?",
                a: "San Francisco and nearby neighborhoods.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-taupe/25 bg-sand/60 p-8 md:p-10">
                <dt className="font-serif text-xl md:text-2xl text-cocoa leading-snug mb-3">{item.q}</dt>
                <dd className="text-[17px] text-cocoa/80 leading-[1.85]">{item.a}</dd>
              </div>
            ))}
          </dl>
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
