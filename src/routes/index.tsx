import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/hero-ashlee-baby.jpg.asset.json";
import approachImg from "@/assets/approach.jpg";
const heroImg = heroAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurture The Roots™ — Lineage-Rooted Postpartum Care in San Francisco" },
      { name: "description", content: "Guiding you through the fourth trimester with clarity and care. Lineage-rooted postpartum support for your most sacred beginning." },
      { property: "og:title", content: "Nurture The Roots™" },
      { property: "og:description", content: "Lineage-rooted postpartum support for your most sacred beginning." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-clay/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-20 md:pt-28 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-[0.7rem] text-cocoa/70 mb-6">
            San Francisco · Postpartum Sanctuary
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-cocoa">
            Nurture The Roots
            <span className="align-super text-[0.4em] ml-1 text-cocoa/70">™</span>
          </h1>
          <p className="mt-7 mx-auto max-w-2xl font-serif text-xl md:text-2xl text-earth/85 italic">
            Guiding you through the fourth trimester with clarity and care.
          </p>
          <p className="mt-5 mx-auto max-w-xl text-base text-earth/70 leading-relaxed">
            Lineage-rooted postpartum support for your most sacred beginning.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/approach"
              className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand shadow-sm hover:bg-cocoa transition-colors"
            >
              Explore my approach
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-taupe text-cocoa px-7 py-3.5 text-sm font-medium hover:bg-blush transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>

          <div className="mt-16 md:mt-20 mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(74,63,57,0.35)]">
            <img
              src={heroImg}
              alt="Ashlee McKenzie holding a newborn wrapped in a rust-colored blanket near a sunlit window with greenery outside"
              width={1920}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">A gentle welcome</div>
          <h2 className="text-3xl md:text-4xl">
            The fourth trimester is sacred ground.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-earth/80">
            In the weeks after birth, you and your baby are becoming. This is a tender,
            ancestral threshold — one that asks to be held with reverence, not rushed
            through. My work is to hold that space with you: with attunement, with
            lineage, with care that meets you as your whole self.
          </p>
        </div>
      </section>

      {/* PILLARS PREVIEW */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">My Approach</div>
              <h2 className="text-3xl md:text-4xl leading-tight">
                A lineage-rooted, identity-aligned framework for the fourth trimester.
              </h2>
              <p className="mt-6 text-earth/80 leading-relaxed">
                Built across fifteen years of postpartum practice, the Nurture The
                Roots™ Framework gathers four pillars — identity, ancestry, development,
                and sovereignty — into a steady, relational way of caring for your family.
              </p>
              <ul className="mt-8 space-y-3 text-cocoa">
                {[
                  "Identity-Aligned Care™",
                  "Ancestral-Rooted Care™",
                  "Developmental & Relational Guidance™",
                  "Sovereign Family Systems™",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-clay" aria-hidden />
                    <span className="font-serif text-lg">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/approach" className="inline-flex items-center text-cocoa border-b border-clay pb-1 hover:text-earth">
                  Read the full framework →
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src={approachImg}
                alt="Ceremonial postpartum still life with woven textiles, dried herbs, and clay bowl"
                loading="lazy"
                width={1400}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Care Offerings</div>
            <h2 className="text-3xl md:text-4xl">Ways we can walk together.</h2>
            <p className="mt-5 text-earth/75 leading-relaxed">
              Each offering is shaped around your family — your rhythms, your lineage, your
              becoming. Begin with a consultation and we'll listen for what is right.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["Postpartum Doula Care", "Relational, in-home care through the early weeks."],
              ["Overnight Newborn Care", "Held, rested nights for parents and baby."],
              ["NBO-Informed Newborn Sessions", "Reading and honoring your baby's cues."],
              ["Lactation Education", "Attuned guidance for feeding and nourishment."],
              ["Holistic Family Coaching", "Care for the whole family system."],
              ["Innate Postpartum Care", "Ancestral, ceremonial postpartum tradition."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-taupe/30 bg-blush/50 p-7 hover:bg-blush transition-colors">
                <h3 className="text-xl">{title}</h3>
                <p className="mt-3 text-sm text-earth/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center text-cocoa border-b border-clay pb-1 hover:text-earth">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-soft-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-cocoa leading-snug">
            "You don't have to navigate this beginning alone. I'm here."
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
