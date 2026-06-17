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
          "The Nurture The Roots™ Framework: a grounded, identity‑aligned approach to fourth trimester care built on four pillars — Identity, Lineage, Relationship, and Rhythm.",
      },
      {
        property: "og:title",
        content: "The Nurture The Roots™ Framework",
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

function FrameworkPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">The Framework</div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            The Nurture The Roots
            <TM /> Framework
          </h1>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            Identity · Lineage · Relationship · Rhythm
          </p>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            Your fourth trimester is not a set of tasks — it is a relational ecosystem. The Nurture
            The Roots
            <TM /> Framework is the foundation of my work with families: a grounded,
            identity‑aligned approach that honors who you are, where you come from, and how you want
            to move through this tender season.
          </p>
          <p className="mt-6 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            This framework supports you in slowing down, listening deeply, and building postpartum
            care that is sovereign, sustainable, and rooted in your lived reality.
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

      {/* PILLAR I — IDENTITY */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Pillar I</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Identity
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              Your identity is shifting, expanding, and taking new shape. This pillar helps you name
              who you are becoming — as a parent, as a partner, and as a person.
            </p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">
              Identity work includes
            </div>
            <ul className="space-y-3">
              {[
                "Values clarification",
                "Emotional landscape mapping",
                "Postpartum identity reflection",
                "Naming what you need protected",
                "Grounding practices for the early weeks",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-[15px] text-cocoa"
                >
                  <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-12 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            Identity is the soil everything else grows from.
          </p>
        </div>
      </section>

      {/* IMAGE — tender hold */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pb-10 md:pb-16">
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

      <SectionDivider />

      {/* PILLAR II — LINEAGE */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Pillar II</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Lineage
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              You do not enter the fourth trimester alone — you arrive carrying stories, histories,
              and ancestral threads.
            </p>
            <p>
              This pillar honors the continuity between where you come from and where your baby is
              going.
            </p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">
              Lineage work includes
            </div>
            <ul className="space-y-3">
              {[
                "Exploring ancestral patterns",
                "Honoring cultural practices",
                "Integrating family stories",
                "Naming what you want to carry forward",
                "Releasing what no longer belongs",
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
          </div>
          <p className="mt-12 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            Lineage is the thread that connects past, present, and future.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* PILLAR III — RELATIONSHIP */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Pillar III</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Relationship
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              Postpartum is relational — with your baby, your partner, your support system, and
              yourself.
            </p>
            <p>This pillar supports attunement, communication, and connection.</p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">
              Relationship work includes
            </div>
            <ul className="space-y-3">
              {[
                "Newborn behavioral observation",
                "Cue‑based care",
                "Partner support",
                "Family systems guidance",
                "Co‑regulation practices",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-[15px] text-cocoa"
                >
                  <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-12 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            Relationship is the heartbeat of the fourth trimester.
          </p>
        </div>
      </section>

      {/* IMAGE — attunement */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pb-10 md:pb-16">
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

      <SectionDivider />

      {/* PILLAR IV — RHYTHM */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Pillar IV</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Rhythm
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              Rhythm is how your days begin to take shape — not schedules, not strict routines, but
              gentle patterns that support regulation and rest.
            </p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">
              Rhythm work includes
            </div>
            <ul className="space-y-3">
              {[
                "Developmental rhythms",
                "Feeding + sleep patterns (responsive, not rigid)",
                "Daily flow mapping",
                "Environmental support",
                "Sustainable postpartum planning",
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
          </div>
          <p className="mt-12 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            Rhythm is what helps your family settle, soften, and breathe.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <div className="space-y-6 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              Together, these four pillars create a grounded, sovereign postpartum experience. They
              guide every offering, every session, and every moment of support — helping your family
              move through the fourth trimester with clarity, continuity, and care.
            </p>
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
