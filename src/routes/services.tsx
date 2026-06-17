import { createFileRoute } from "@tanstack/react-router";
import servicesImageAsset from "@/assets/approach-3.jpeg.asset.json";
import anchorResponsive from "@/assets/branding-54.responsive.json";
import journeyOpenerResponsive from "@/assets/branding-55.responsive.json";
import ncsResponsive from "@/assets/branding-57.responsive.json";
import ashleeFeedingAsset from "@/assets/ashlee-feeding-moment.jpeg.asset.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Grounded, Identity‑Aligned Postpartum Support | Nurture The Roots™" },
      {
        name: "description",
        content:
          "Postpartum doula support, newborn care specialist services, fourth trimester coaching, and holistic family sessions — identity‑aligned, lineage‑rooted care for San Francisco families.",
      },
      {
        property: "og:title",
        content: "Services — Nurture The Roots™ Postpartum Support",
      },
      {
        property: "og:description",
        content:
          "Care that honors your identity, your lineage, your rhythms, and the tender threshold of the fourth trimester.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/services" },
      { property: "og:image", content: servicesImageAsset.url },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nurture The Roots™",
          url: "https://nurturetheroots.co/services",
          areaServed: { "@type": "City", name: "San Francisco" },
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Postpartum Doula Support" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Newborn Care Specialist Support" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Fourth Trimester Coaching" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Holistic Family Support Sessions" },
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const TM = () => <sup className="align-super text-[0.55em] ml-0.5">™</sup>;

const phases = [
  {
    numeral: "One",
    name: "Rooting",
    focus: "Identity, values, emotional landscape, and preparation.",
    body: "This phase helps families name who they are, what they value, and what they need protected as they prepare for postpartum.",
    includes: [
      "intake",
      "identity mapping",
      "values clarification",
      "postpartum vision",
      "support ecosystem review",
    ],
  },
  {
    numeral: "Two",
    name: "Settling",
    focus: "Establishing rhythms, understanding newborn cues, and grounding into the early days.",
    body: "",
    includes: [
      "newborn behavioral observation",
      "feeding support",
      "soothing + settling",
      "safe sleep guidance",
      "emotional grounding",
      "partner support",
    ],
  },
  {
    numeral: "Three",
    name: "Deepening",
    focus: "Strengthening identity, relationship, and continuity.",
    body: "",
    includes: [
      "lineage integration",
      "relational guidance",
      "attuned routines",
      "family systems support",
      "developmental education",
    ],
  },
  {
    numeral: "Four",
    name: "Integrating",
    focus: "Sovereign continuity beyond the early postpartum window.",
    body: "",
    includes: [
      "rhythm building",
      "identity‑aligned parenting support",
      "developmental guidance",
      "ongoing support sessions",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 md:pt-40 md:pb-32 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Services</div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Grounded, Identity‑Aligned Postpartum Support
          </h1>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            Care that honors your identity, your lineage, your rhythms, and the tender threshold of
            the fourth trimester.
          </p>
        </div>
      </section>

      {/* INTRO PARAGRAPH */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
          <p className="text-[17px] text-cocoa/80 leading-[1.85]">
            Your fourth trimester is a threshold — a tender, transformative season where identity,
            lineage, and relationship take new shape. My role is to support your family with care
            that is attuned, sovereign, and rooted in who you are becoming. Every offering below is
            shaped by the Nurture The Roots
            <TM /> Framework: Identity · Lineage · Relationship · Rhythm.
          </p>
        </div>
      </section>

      {/* IMAGE 1 — ANCHOR: family + Fourth Trimester book */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pb-10 md:pb-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <ResponsiveImage
              source={anchorResponsive}
              alt="Three adults sitting together in a cozy living room, one holding a baby wrapped in a rust-colored blanket, another holding the book The Fourth Trimester, all smiling and engaged"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover aspect-[3/2] md:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1 — POSTPARTUM DOULA SUPPORT */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Service One</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Postpartum Doula Support
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              Attuned, in‑home care for the earliest days and weeks.
            </p>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-8">
            This support includes:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "newborn behavioral observation",
              "feeding support (breast/chest/bottle)",
              "soothing + settling",
              "sleep rhythms (not schedules)",
              "identity‑aligned postpartum planning",
              "emotional grounding + presence",
              "light household support",
              "sibling integration",
              "care for the birthing parent",
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

          {/* Doula image — feeding moment */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-[0_16px_48px_-20px_rgba(74,63,57,0.3)]">
              <img
                src={ashleeFeedingAsset.url}
                alt="Ashlee in a quiet feeding moment, illustrating the attuned, relational rhythm of postpartum doula support"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <p className="mt-10 text-center font-serif italic text-lg text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            This is not task‑based care. It is relational, developmental, and deeply attuned.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2 — NEWBORN CARE SPECIALIST SUPPORT */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Service Two</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Newborn Care Specialist Support
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              Developmentally informed newborn care rooted in attunement and continuity.
            </p>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-8">
            This support includes:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "newborn cues + states",
              "responsive care",
              "safe sleep guidance",
              "developmental rhythms",
              "overnight support",
              "continuity of care",
              "attuned routines that honor your family's values",
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
          <p className="mt-10 text-center font-serif italic text-lg text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            Ideal for families seeking expert newborn guidance with a grounded, identity‑aligned
            approach.
          </p>
        </div>
      </section>

      {/* IMAGE — NCS: baby on mat under wooden gym */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-10 md:py-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <ResponsiveImage
              source={ncsResponsive}
              alt="Baby on a soft mat under a wooden baby gym, with Ashlee kneeling close by in a warm, developmental moment"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover aspect-[3/2] md:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — FOURTH TRIMESTER COACHING */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Service Three</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Fourth Trimester Coaching
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              A space for identity, belonging, and continuity.
            </p>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-8">
            This support includes:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "identity‑aligned postpartum planning",
              "lineage exploration + integration",
              "family systems support",
              "emotional processing",
              "relational guidance",
              "newborn communication education",
              "support for partners",
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
          <p className="mt-10 text-center font-serif italic text-lg text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            A collaborative, reflective offering for families who want depth, clarity, and
            continuity through the fourth trimester.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4 — HOLISTIC FAMILY SUPPORT SESSIONS */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Service Four</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Holistic Family Support Sessions
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              Support for families beyond the newborn period.
            </p>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-8">
            This support includes:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "developmental + relational guidance",
              "rhythm building",
              "attuned routines",
              "identity‑aligned parenting support",
              "family systems + communication",
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
          <p className="mt-10 text-center font-serif italic text-lg text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            Available virtually or in person.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 5 — THE CLIENT JOURNEY */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              The Client Journey
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Nurture The Roots
              <TM /> Client Journey
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              A four‑phase pathway through the fourth trimester.
            </p>
          </div>
          <p className="text-center text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-16 md:mb-20">
            This is the relational arc that holds all of my services. Every family moves through
            these phases at their own pace, with support that is attuned, grounded, and aligned with
            who they are becoming.
          </p>

          {/* IMAGE 2 — CLIENT JOURNEY OPENER: nursery/bassinet */}
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] max-w-3xl mx-auto mb-16 md:mb-20">
            <ResponsiveImage
              source={journeyOpenerResponsive}
              alt="Ashlee holding a baby wrapped in a rust-colored blanket, standing beside a white mesh bassinet in a bright nursery with a bird mobile above"
              sizes="(min-width: 1024px) 768px, 100vw"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3]"
            />
          </div>

          {/* PHASES */}
          <div className="space-y-16 md:space-y-20">
            {phases.map((phase, i) => {
              const alt = i % 2 === 0;
              return (
                <div key={phase.numeral}>
                  {i > 0 && <SectionDivider className="mb-16 md:mb-20" />}
                  <article
                    className={`rounded-2xl border border-taupe/25 p-10 md:p-14 ${alt ? "bg-blush/50" : "bg-sand/60"}`}
                  >
                    <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">
                      Phase {phase.numeral}
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-cocoa">
                      {phase.name}
                    </h3>
                    <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/80 leading-[1.5] max-w-2xl">
                      {phase.focus}
                    </p>
                    {phase.body && (
                      <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl">
                        {phase.body}
                      </p>
                    )}
                    <div className="mt-10">
                      <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">
                        Includes
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {phase.includes.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-3 rounded-xl border border-taupe/25 px-4 py-3 text-sm text-cocoa ${alt ? "bg-sand/60" : "bg-blush/60"}`}
                          >
                            <span className="text-clay mt-1 text-[0.55rem]">&#9679;</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>

                  {/* IMAGE 3 — SUPPORT ECOSYSTEM: under Phase One Includes */}
                  {i === 0 && (
                    <div className="mt-12 md:mt-16">
                      <div className="overflow-hidden rounded-2xl shadow-[0_16px_48px_-20px_rgba(74,63,57,0.3)] max-w-2xl mx-auto">
                        <img
                          src="/images/support-ecosystem.jpg"
                          alt="Three adults standing in a bright nursery, one holding a baby wrapped in a rust-colored blanket, the others standing close by observing"
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

      {/* SECTION 6 — HOW WE BEGIN */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Begin</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            How We Begin
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Every family starts with a free 20‑minute consultation — a gentle, pressure‑free
            conversation to explore what support would feel grounding and aligned for your family.
          </p>
          <div className="mt-12">
            <CalendlyButton className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
              Begin Your Postpartum Support →
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
