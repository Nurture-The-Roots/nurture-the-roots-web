import { createFileRoute, Link } from "@tanstack/react-router";
import babyChangingTableAsset from "@/assets/baby-changing-table.jpeg.asset.json";
import { SectionDivider } from "@/components/SectionDivider";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources for a Rooted Fourth Trimester — Nurture The Roots™" },
      {
        name: "description",
        content:
          "Worksheets, reflections, and grounded tools to support identity, rhythm, relationship, and postpartum care.",
      },
      { property: "og:title", content: "Resources for a Rooted Fourth Trimester" },
      {
        property: "og:description",
        content: "Grounded worksheets and reflections for the fourth trimester — coming soon.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/resources" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/resources" }],
  }),
  component: ResourcesPage,
});

const categories = [
  {
    name: "Identity & Inner Landscape",
    items: [
      {
        title: "Postpartum Identity Map",
        body: "A reflection to name who you are becoming as a parent.",
      },
      {
        title: "Emotional Landscape Reflection",
        body: "A practice for reading the emotional field of your home.",
      },
      {
        title: "Fourth Trimester Integration Reflection",
        body: "A gentle space to integrate and step into the next season.",
      },
    ],
  },
  {
    name: "Newborn Communication & Rhythm",
    items: [
      {
        title: "Baby Cue Observation Sheet",
        body: "Track and learn your baby's cues, states, and signals.",
      },
      {
        title: "Cue‑Based Care Tracker",
        body: "A gentle tool for following feeding, sleep, and regulation cues.",
      },
      {
        title: "Family Rhythm Map",
        body: "Map the rhythms that support your family's grounded days.",
      },
    ],
  },
  {
    name: "Care as Ceremony",
    items: [
      {
        title: "Care as Ceremony Ritual Builder",
        body: "Turn daily care tasks into grounding, meaningful rituals.",
      },
      {
        title: "Threshold Navigation Map",
        body: "A guide for the emotional and developmental shifts ahead.",
      },
    ],
  },
  {
    name: "Lineage & Support",
    items: [
      {
        title: "Lineage Continuity Reflection",
        body: "Honor the ancestral significance of your baby's arrival.",
      },
      {
        title: "Support Ecosystem Map",
        body: "Build the sustainable support network your family needs.",
      },
      {
        title: "Sovereign Postpartum Plan",
        body: "A planning template rooted in identity and lived reality.",
      },
    ],
  },
];

function ResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Resources</div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-cocoa">
            Resources for a Rooted Fourth Trimester
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            These reflections and tools support families in slowing down, listening deeply, and
            building postpartum care that honors identity, rhythm, relationship, and support.
          </p>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <img
              src={babyChangingTableAsset.url}
              alt="Ashlee barefoot in a calm nursery, attentively tending to a baby on the changing table"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* WORKSHEETS & REFLECTIONS */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Worksheets &amp; Reflections
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Twelve grounded companions for your fourth trimester
            </h2>
          </div>
          <div className="text-center max-w-xl mx-auto mb-20 md:mb-24">
            <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85]">
              New downloadable resources are being prepared with care.
            </p>
            <p className="mt-4 text-[17px] text-cocoa/80 leading-[1.85]">
              Each one is designed to help you root into who you are, what you value, and how you
              want to move through this tender season.
            </p>
          </div>

          {/* CATEGORY SECTIONS */}
          <div className="space-y-16 md:space-y-20">
            {categories.map((category, ci) => {
              const alt = ci % 2 === 0;
              return (
                <div key={category.name}>
                  {ci > 0 && <SectionDivider className="mb-14 md:mb-18" />}
                  <div className="uppercase tracking-[0.22em] text-xs text-clay mb-6">
                    {category.name}
                  </div>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div
                        key={item.title}
                        className={`rounded-2xl border border-taupe/25 p-7 md:p-8 ${alt ? "bg-blush/40" : "bg-sand/60"}`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="font-serif text-xl text-cocoa leading-snug">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-[15px] text-cocoa/75 leading-[1.75]">
                              {item.body}
                            </p>
                          </div>
                          <span className="inline-flex w-fit items-center rounded-full border border-taupe/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cocoa/60 shrink-0">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Image after Newborn Communication & Rhythm */}
                  {ci === 1 && (
                    <div className="mt-14 md:mt-18">
                      <div className="overflow-hidden rounded-2xl shadow-[0_16px_48px_-20px_rgba(74,63,57,0.3)] max-w-2xl mx-auto">
                        <img
                          src="/images/ashlee-brand-0037.jpg"
                          alt="A baby lying on a play mat under a wooden activity gym, Ashlee's hands gently holding the baby's feet in a developmental moment"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING + CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
            All resources are coming soon.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85]">
            If you'd like to receive them as they're released, join the mailing list.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Join the Mailing List
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
