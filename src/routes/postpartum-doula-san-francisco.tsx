import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";

const CANONICAL = "https://nurturetheroots.co/postpartum-doula-san-francisco";

export const Route = createFileRoute("/postpartum-doula-san-francisco")({
  head: () => ({
    meta: [
      { title: "Postpartum Doula in San Francisco & Bay Area | Nurture The Roots™" },
      {
        name: "description",
        content:
          "Experienced postpartum doula in San Francisco offering warm, evidence-based daytime support, overnight newborn care, feeding guidance, and NBO-informed sessions for Bay Area families.",
      },
      { property: "og:title", content: "Postpartum Doula in San Francisco & Bay Area | Nurture The Roots™" },
      {
        property: "og:description",
        content:
          "Warm, evidence-based postpartum doula care for San Francisco and Bay Area families — daytime support, overnight newborn care, feeding guidance, and NBO-informed sessions.",
      },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Nurture The Roots™ — Postpartum Doula Care",
          description:
            "Evidence-based postpartum doula and newborn care specialist serving San Francisco and the Bay Area.",
          areaServed: [
            { "@type": "City", name: "San Francisco" },
            { "@type": "AdministrativeArea", name: "San Francisco Bay Area" },
          ],
          url: CANONICAL,
          email: "ashleemckenzie@nurturetheroots.co",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: SfDoulaPage,
});

const offerings = [
  {
    title: "Daytime Postpartum Doula Care",
    body:
      "Hands-on emotional, physical, and educational support during the day — so you can rest, feed, and find your footing with someone experienced beside you.",
  },
  {
    title: "Overnight Newborn Care",
    body:
      "Restorative overnights with developmentally informed newborn care, responsive feeding support, and clear morning updates.",
  },
  {
    title: "Feeding & Lactation Support",
    body:
      "Chestfeeding, bottle, and combination feeding support grounded in your body, your baby, and your family's real life.",
  },
  {
    title: "NBO-Informed Newborn Sessions",
    body:
      "A session using the Newborn Behavioral Observations framework to help you read your baby's cues + states and newborn communication.",
  },
];

const neighborhoods = [
  "San Francisco",
  "Mission",
  "Noe Valley",
  "Bernal Heights",
  "Pacific Heights",
  "Sunset",
  "Richmond",
  "Potrero Hill",
  "Oakland",
  "Berkeley",
  "Marin",
  "Peninsula",
];

function SfDoulaPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">
            San Francisco · Bay Area
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Postpartum Doula in San Francisco
          </h1>
          <p className="mt-8 text-[17px] md:text-lg text-cocoa/80 leading-[1.85]">
            Evidence-based postpartum care for families across San Francisco and the Bay Area —
            warm, developmental, and grounded in newborn communication.
          </p>
          <div className="mt-12">
            <CalendlyButton className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
              Schedule a Consultation
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* WHAT IS A POSTPARTUM DOULA */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6 text-center">
            What I Offer
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa text-center">
            A postpartum doula who meets your family where you are
          </h2>
          <div className="mt-10 space-y-6 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              A postpartum doula offers non-medical, relational care during the
              fourth trimester — guiding you through newborn care, feeding,
              recovery, and the identity transitions of early parenthood. If
              you're new to the role, the{" "}
              <Link to="/blog/what-is-a-postpartum-doula" className="text-clay underline underline-offset-4 hover:text-cocoa">
                guide to what a postpartum doula does
              </Link>{" "}
              is a good place to start.
            </p>
            <p>
              As a postpartum doula in San Francisco, I offer fourth trimester
              support for families who want more than a checklist: evidence-based
              care shaped around your family, your values, and how you actually
              live.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-24 md:pb-32">
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa text-center mb-14">
            Postpartum Doula Services in San Francisco
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((o) => (
              <article
                key={o.title}
                className="rounded-2xl bg-blush/50 p-10 border border-taupe/25"
              >
                <h3 className="font-serif text-2xl text-cocoa leading-tight">
                  {o.title}
                </h3>
                <p className="mt-5 text-[16px] text-cocoa/80 leading-[1.85]">
                  {o.body}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-taupe/70 px-6 py-3 text-sm text-cocoa hover:bg-blush transition-colors"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* IDENTITY-ALIGNED */}
      <section className="bg-sand/60">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6 text-center">
            The Approach
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa text-center">
            Responsive, Evidence-Based Care in the Bay Area
          </h2>
          <div className="mt-10 space-y-6 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              San Francisco families come from many backgrounds, structures, and
              traditions. That means I follow your culture, your language around
              your body, and the rhythms of your home — not a single template of
              what postpartum should look like.
            </p>
            <p>
              You can read more about the four pillars that shape this work on
              the{" "}
              <Link to="/framework" className="text-clay underline underline-offset-4 hover:text-cocoa">
                framework
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa text-center">
            Serving San Francisco & the Bay Area
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] text-center max-w-xl mx-auto">
            As a postpartum doula and newborn care specialist in San Francisco,
            I serve families across neighborhoods and surrounding Bay Area
            communities, including:
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-full border border-taupe/40 bg-sand/70 px-4 py-2 text-sm text-cocoa"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Begin with a conversation.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for a postpartum doula in San Francisco who will meet your family with
            warmth and evidence-based care, I'd be glad to support you.
          </p>
          <div className="mt-12">
            <CalendlyButton className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
              Schedule a Consultation
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}