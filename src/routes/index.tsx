import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/hero-ashlee-baby.jpg.asset.json";
import welcomeAsset from "@/assets/welcome-ashlee-baby.jpg.asset.json";
import approachImg from "@/assets/approach.jpg";
const heroImg = heroAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurture The Roots™ — Warm, Attuned Postpartum Support in San Francisco" },
      { name: "description", content: "Guiding you through the fourth trimester with clarity and care." },
      { property: "og:title", content: "Nurture The Roots™" },
      { property: "og:description", content: "Guiding you through the fourth trimester with clarity and care." },
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
            Nurture the Roots
            <span className="align-super text-[0.4em] ml-1 text-cocoa/70">™</span>
          </h1>
          <p className="mt-7 mx-auto max-w-2xl font-serif text-xl md:text-2xl text-earth/85 italic">
            Guiding you through the fourth trimester with clarity and care.
          </p>
          <p className="mt-5 mx-auto max-w-2xl text-base text-earth/70 leading-relaxed">
            Your fourth trimester deserves care that feels grounding, relational, and deeply human.
            I support new parents with clarity, attunement, and developmental guidance — so you can
            feel confident, rested, and connected in this new beginning.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand shadow-sm hover:bg-cocoa transition-colors"
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

      {/* WELCOME */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
              <img
                src={welcomeAsset.url}
                alt="Ashlee McKenzie kneeling on the floor, smiling warmly while gently holding a happy baby in a striped onesie"
                loading="lazy"
                width={1920}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Welcome</div>
              <h2 className="text-3xl md:text-4xl leading-tight">
                Welcome — I'm Ashlee.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-earth/80">
                I'm a Certified Postpartum Doula, Newborn Care Specialist, and New Parent Support
                Coach with over sixteen years of experience supporting families across the Bay Area.
                My work blends evidence-based newborn care with identity-aligned, lineage-rooted
                support that honors who you are and the family you're becoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I OFFER */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">What I Offer</div>
            <h2 className="text-3xl md:text-4xl">Support for the Fourth Trimester</h2>
            <p className="mt-5 text-earth/75 leading-relaxed">
              Whether you need daytime support, overnight newborn care, feeding guidance, or
              relational coaching, I offer care that meets you where you are — with warmth,
              clarity, and attunement.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Postpartum Doula Care",
              "Overnight Newborn Care",
              "NBO-Informed Newborn Sessions",
              "Feeding & Lactation Support",
              "New Parent Support Coaching",
              "Innate Postpartum Care",
            ].map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-taupe/30 bg-blush/50 p-7 hover:bg-blush transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-clay mt-1">&bull;</span>
                  <h3 className="text-lg">{title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* MY APPROACH PREVIEW */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">My Approach</div>
              <h2 className="text-3xl md:text-4xl leading-tight">
                A Relational, Identity-Aligned Approach
              </h2>
              <p className="mt-6 text-earth/80 leading-relaxed">
                My care is rooted in four pillars: Identity-Aligned Care™, Ancestral-Rooted Care™,
                Developmental & Relational Guidance™, and Sovereign Family Systems™. These
                frameworks help you understand your baby, your identity, and your new family system
                with clarity and confidence.
              </p>
              <div className="mt-10">
                <Link
                  to="/approach"
                  className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
                >
                  Learn About My Approach
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

      {/* TESTIMONIAL PREVIEW */}
      <section className="bg-soft-gradient">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">Testimonials</div>
          <h2 className="text-3xl md:text-4xl mb-12">What Families Say</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              "You helped us understand our baby in a way no book ever could.",
              "You made our home feel peaceful again.",
              "You held us, not just the baby.",
            ].map((quote, i) => (
              <div
                key={i}
                className="rounded-2xl bg-background/60 border border-taupe/30 p-8"
              >
                <p className="font-serif italic text-cocoa text-lg leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-cocoa border-b border-clay pb-1 hover:text-earth"
            >
              Read More Testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl leading-tight">
            You Don't Have to Navigate This Beginning Alone
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
