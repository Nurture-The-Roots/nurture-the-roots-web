import { createFileRoute, Link } from "@tanstack/react-router";
import servicesImageAsset from "@/assets/approach-3.jpeg.asset.json";
import babyChangingTableAsset from "@/assets/baby-changing-table.jpeg.asset.json";
import approach1Responsive from "@/assets/approach-1.responsive.json";
import approach2Responsive from "@/assets/approach-2.responsive.json";
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
              itemOffered: {
                "@type": "Service",
                name: "Postpartum Doula Support",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Newborn Care Specialist Support",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fourth Trimester Coaching",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Holistic Family Support Sessions",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

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
            <sup className="align-super text-[0.55em] ml-0.5">™</sup> Framework: Identity · Lineage
            · Relationship · Rhythm.
          </p>
        </div>
      </section>

      {/* IMAGE 1 — warm, relational, holding baby */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-10 md:pb-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]">
            <ResponsiveImage
              source={approach1Responsive}
              alt="Ashlee holding a baby in a bright, calm environment — a warm, relational moment of postpartum care"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-center"
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
              "Newborn behavioral observation",
              "Feeding support (breast/chest/bottle)",
              "Soothing + settling",
              "Sleep rhythms (not schedules)",
              "Identity‑aligned postpartum planning",
              "Emotional grounding + presence",
              "Light household support",
              "Sibling integration",
              "Care for the birthing parent",
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
              "Newborn cues + states",
              "Responsive care",
              "Safe sleep guidance",
              "Developmental rhythms",
              "Overnight support",
              "Continuity of care",
              "Attuned routines that honor your family's values",
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

      {/* IMAGE 2 — developmental / attunement moment */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={babyChangingTableAsset.url}
              alt="A developmental, attunement-based moment — baby on a changing table during a gentle, grounded postpartum care session"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_45%]"
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
              "Identity‑aligned postpartum planning",
              "Lineage exploration + integration",
              "Family systems support",
              "Emotional processing",
              "Relational guidance",
              "Newborn communication education",
              "Support for partners",
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
              "Developmental + relational guidance",
              "Rhythm building",
              "Attuned routines",
              "Identity‑aligned parenting support",
              "Family systems + communication",
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

      {/* IMAGE 3 — soft, ceremonial */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]">
            <ResponsiveImage
              source={approach2Responsive}
              alt="A soft, ceremonial nursery moment — a grounded image of attuned postpartum presence"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW WE BEGIN */}
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
              Begin Your Postpartum Support
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
