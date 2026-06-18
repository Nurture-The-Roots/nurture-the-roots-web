import { createFileRoute, Link } from "@tanstack/react-router";
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
      { title: "Postpartum & Newborn Care Services | Nurture The Roots™" },
      {
        name: "description",
        content:
          "Postpartum doula support, newborn care specialist services, and fourth trimester coaching — evidence-based newborn communication, developmental rhythms, and responsive care for San Francisco Bay Area families.",
      },
      {
        property: "og:title",
        content: "Postpartum & Newborn Care Services — Nurture The Roots™",
      },
      {
        property: "og:description",
        content:
          "Evidence-based postpartum doula and newborn care services for the fourth trimester — newborn communication, cues + states, developmental rhythms, and responsive care.",
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
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const phases = [
  {
    numeral: "One",
    name: "Rooting",
    includes: [
      "intake + orientation",
      "early newborn cues",
      "feeding support",
      "soothing + settling",
      "recovery support",
      "partner guidance",
    ],
  },
  {
    numeral: "Two",
    name: "Settling",
    includes: [
      "state regulation",
      "responsive sleep + wake patterns",
      "feeding rhythms",
      "environmental support",
      "emotional steadiness",
    ],
  },
  {
    numeral: "Three",
    name: "Deepening",
    includes: [
      "developmental guidance",
      "responsive care",
      "partner support",
      "family systems",
      "identity transitions",
    ],
  },
  {
    numeral: "Four",
    name: "Integrating",
    includes: [
      "evolving rhythms",
      "developmental next steps",
      "returning‑to‑work planning",
      "ongoing support sessions",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="services-page">
      {/* HERO — SERVICES & SUPPORT */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 md:pt-40 md:pb-24 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Services</div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Services &amp; Support
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            The earliest weeks with a newborn are a period of rapid development — for the baby and
            for the parents. My work centers on helping families understand what their newborn is
            communicating, respond with confidence, and build rhythms that support everyone's
            well‑being.
          </p>
        </div>
      </section>

      {/* IMAGE — ANCHOR: family + Fourth Trimester book */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
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

      {/* POSTPARTUM DOULA SUPPORT */}
      <section className="section bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Service One</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Postpartum Doula Support
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              Attuned, in‑home care for the earliest days.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "newborn behavioral observation (NBO‑informed)",
              "feeding support (breast/chest, bottle, combination)",
              "soothing + settling strategies",
              "responsive sleep + wake patterns",
              "recovery support for the birthing parent",
              "emotional steadiness + practical guidance",
              "light household support",
              "sibling integration",
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
                alt="Postpartum doula Ashlee McKenzie supporting a feeding during an in-home postpartum doula session"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* NEWBORN CARE SPECIALIST SUPPORT */}
      <section className="section bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Service Two</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Newborn Care Specialist Support
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              Developmentally informed newborn care.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "newborn cues + state regulation",
              "safe sleep guidance",
              "responsive nighttime care",
              "developmental rhythms",
              "bottle‑feeding support",
              "continuity of care",
              "responsive care",
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

      {/* FOURTH TRIMESTER COACHING */}
      <section className="section bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Service Three</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Fourth Trimester Coaching
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              Clarity, identity, and developmental guidance.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "postpartum planning",
              "identity + role transitions",
              "partner support",
              "newborn communication education",
              "developmental guidance",
              "family systems support",
              "emotional processing",
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
      </section>

      <SectionDivider />

      {/* THE CLIENT JOURNEY */}
      <section className="section bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              The Client Journey
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Client Journey
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              A developmental arc through the first weeks.
            </p>
          </div>

          {/* IMAGE — CLIENT JOURNEY OPENER: nursery/bassinet */}
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] max-w-3xl mx-auto mb-16 md:mb-20 mt-10 md:mt-14">
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
                    <div className="mt-10">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE BEGIN */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Begin</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            How We Begin
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Every family starts with a 20‑minute consultation to understand your needs and determine
            the right level of support.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
              Begin Your Postpartum Support
            </CalendlyButton>
            <Link
              to="/framework"
              className="button inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
