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
  { name: "Rooting", line: "Orientation, stabilization, early understanding." },
  { name: "Settling", line: "Shaping responsive rhythms." },
  { name: "Deepening", line: "Strengthening connection and confidence." },
  { name: "Integrating", line: "Carrying your rhythm forward." },
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
          <p className="mt-6 mx-auto max-w-2xl font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
            Developmental, evidence‑based care for the earliest weeks.
          </p>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            The first months with a newborn call for support that is both practical and deeply
            attuned. My services are designed to help you understand your baby's communication,
            create responsive rhythms, and receive grounded guidance that supports your whole
            family's well‑being.
          </p>
          <p className="mt-6 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            Each offering is shaped by newborn behavioral science, relational care, and the lived
            realities of early parenthood — so you can move through the fourth trimester with
            clarity, steadiness, and confidence.
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
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-8 text-center">
            Postpartum doula support provides hands‑on, relational care during the transition into
            life with a newborn. This work centers on:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "understanding your baby's cues and states",
              "supporting early feeding",
              "shaping responsive rhythms",
              "tending to your physical recovery",
              "creating systems that reduce overwhelm",
              "helping you feel grounded and confident",
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
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto text-center">
            This is not task‑based care. It is developmental, relational, and responsive to what
            your family needs in real time.
          </p>

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
              Developmentally informed overnight + continuity care.
            </p>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-8 text-center">
            Overnight support offers rest, continuity, and developmental guidance during the
            earliest weeks. My approach is rooted in newborn behavioral observation and focuses on:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "supporting early regulation",
              "understanding state transitions",
              "responding to cues with consistency",
              "maintaining safe sleep practices",
              "shaping rhythms that support the whole family",
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
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto text-center">
            This is not sleep training. It is responsive, evidence‑based care that honors your
            baby's development and your family's values.
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

      {/* FOURTH TRIMESTER COACHING */}
      <section className="section bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Service Three</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Fourth Trimester Coaching
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              A reflective, educational space for clarity and confidence.
            </p>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-8 text-center">
            Fourth trimester coaching is for families who want depth beyond tasks — a space to
            understand your baby, your own transition, and the identity shifts of early parenthood.
            Sessions may include:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "newborn communication + developmental guidance",
              "feeding and rhythm support",
              "emotional + identity transitions",
              "partner dynamics and shared caregiving",
              "practical tools for daily life",
              "building confidence through clarity",
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
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto text-center">
            This is a collaborative, grounding space for parents who want to feel steady and
            informed.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* HOW SUPPORT WORKS */}
      <section className="section bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              How Support Works
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              How Support Works
            </h2>
            <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85]">
              My work follows a developmental arc that adapts to your baby's needs and your
              family's values:
            </p>
          </div>

          {/* IMAGE — JOURNEY OPENER: nursery/bassinet */}
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] max-w-3xl mx-auto mb-16 md:mb-20 mt-10 md:mt-14">
            <ResponsiveImage
              source={journeyOpenerResponsive}
              alt="Ashlee holding a baby wrapped in a rust-colored blanket, standing beside a white mesh bassinet in a bright nursery with a bird mobile above"
              sizes="(min-width: 1024px) 768px, 100vw"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3]"
            />
          </div>

          {/* PHASES */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {phases.map((phase) => (
              <div key={phase.name} className="rounded-2xl border border-taupe/25 bg-sand/60 p-7">
                <h3 className="font-serif text-xl text-cocoa leading-snug">{phase.name}</h3>
                <p className="mt-2 text-[15px] text-cocoa/75 leading-[1.75]">{phase.line}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Every family moves through these phases differently. Your support plan is tailored,
            flexible, and responsive.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* WHO THIS IS FOR */}
      <section className="section bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Who This Is For</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Who This Is For
            </h2>
            <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85]">Families who want:</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "clarity, not noise",
              "evidence‑based guidance",
              "support grounded in newborn communication",
              "relational, non‑prescriptive care",
              "a steady presence during the fourth trimester",
              "help understanding their baby's cues and rhythms",
              "continuity and confidence in the earliest weeks",
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
          <p className="mt-8 text-center text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            If you're unsure which service is right for you, we'll figure it out together.
          </p>
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
