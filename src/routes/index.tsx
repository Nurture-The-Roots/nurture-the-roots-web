import { createFileRoute, Link } from "@tanstack/react-router";
import welcomeAsset from "@/assets/welcome-ashlee-baby.jpg.asset.json";
import welcomeResponsive from "@/assets/welcome-ashlee-baby.responsive.json";
import ashleeTenderHoldAsset from "@/assets/ashlee-tender-hold.jpeg.asset.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";
const welcomeImg = welcomeAsset.url;
const homeBandImg = ashleeTenderHoldAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurture The Roots™ — Evidence-Based Postpartum & Newborn Support" },
      {
        name: "description",
        content:
          "Evidence-based postpartum and newborn development support for the fourth trimester. Newborn communication, responsive care, and developmental guidance for San Francisco Bay Area families.",
      },
      {
        property: "og:title",
        content: "Nurture The Roots™ — Evidence-Based Postpartum & Newborn Support",
      },
      {
        property: "og:description",
        content:
          "Postpartum and newborn development support for the fourth trimester — newborn communication, cues + states, developmental rhythms, and responsive care for San Francisco Bay Area families.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/" },
      {
        name: "keywords",
        content:
          "postpartum support, newborn care specialist, newborn communication, fourth trimester, developmental rhythms, responsive care, early regulation, San Francisco Bay Area",
      },
      { property: "og:image", content: welcomeImg },
      { name: "twitter:image", content: welcomeImg },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nurture The Roots™",
          description:
            "Evidence-based postpartum doula and newborn care practice serving families across the San Francisco Bay Area — focused on newborn communication, developmental rhythms, and responsive care.",
          url: "https://nurturetheroots.co/",
          image: welcomeImg,
          telephone: "",
          email: "ashleemckenzie@nurturetheroots.co",
          founder: { "@type": "Person", name: "Ashlee McKenzie" },
          areaServed: [
            { "@type": "City", name: "San Francisco" },
            { "@type": "Place", name: "San Francisco Bay Area" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US",
          },
          serviceType: [
            "Postpartum Doula Care",
            "Overnight Newborn Care",
            "NBO-Informed Newborn Sessions",
            "Feeding & Lactation Support",
            "New Parent Support Coaching",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero section relative overflow-hidden bg-hero-gradient">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-clay/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-24 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-cocoa">
            Nurture The Roots<sup className="align-super text-[0.45em] ml-1">™</sup>
          </h1>
          <h2 className="mt-8 font-serif text-2xl md:text-3xl font-medium text-cocoa/90 leading-[1.3]">
            Evidence‑Based Postpartum &amp; Newborn Development Support
          </h2>
          <p className="mt-6 mx-auto max-w-2xl font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
            For families who want clarity, confidence, and responsive guidance from the very beginning.
          </p>
          <div className="mt-12">
            <CalendlyButton className="button inline-flex items-center rounded-full bg-clay px-9 py-4 text-base font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
              Begin Your Postpartum Support
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <ResponsiveImage
              source={welcomeResponsive}
              alt="Postpartum doula Ashlee McKenzie holding a newborn in a warm, sunlit San Francisco home"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/2] md:aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <div className="space-y-6 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              The earliest weeks with a newborn are a time of rapid development — for the baby and
              for the parents. My work centers on helping families understand their newborn's
              communication, build responsive rhythms, and move through the fourth trimester with
              steadiness and confidence.
            </p>
            <p>This is a space for grounded, evidence‑based support — for clarity, not noise.</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* WHAT I OFFER */}
      <section className="section bg-blush/40">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">What I Offer</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              What I Offer
            </h2>
          </div>
          <div className="space-y-5 max-w-2xl mx-auto">
            {[
              {
                title: "Postpartum Doula Support",
                body: "Attuned, in‑home care for the earliest days. Rooted in newborn behavioral observation, feeding support, recovery care, and responsive rhythms.",
              },
              {
                title: "Newborn Care Specialist Support",
                body: "Developmentally informed newborn care — especially overnight. Focused on cues, states, safe sleep, and continuity.",
              },
              {
                title: "Fourth Trimester Coaching",
                body: "A reflective, educational space for identity, clarity, and developmental guidance. For families who want depth beyond tasks.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-taupe/25 bg-sand/60 p-8 md:p-10"
              >
                <h3 className="font-serif text-2xl text-cocoa leading-snug">{service.title}</h3>
                <p className="mt-3 text-[16px] text-cocoa/75 leading-[1.85]">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="section bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">My Approach</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            My Approach
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85]">
            My work is grounded in newborn communication, developmental science, and the lived
            realities of early parenthood. I help families read their baby's cues + states, build
            developmental rhythms, support early regulation, move through identity transitions, and
            create systems that reduce overwhelm.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/framework"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the Framework
            </Link>
            <Link
              to="/about"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-4 md:pb-10">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={homeBandImg}
              alt="Newborn care specialist Ashlee McKenzie swaddling a baby in a calm, light-filled nursery"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_52%]"
            />
          </div>
        </div>
      </section>

      {/* THE CLIENT JOURNEY */}
      <section className="section bg-blush/40">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              The Client Journey
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Client Journey
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              A developmental arc through the fourth trimester.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              { name: "Rooting", line: "Orientation, stabilization, early understanding." },
              { name: "Settling", line: "Shaping responsive rhythms." },
              { name: "Deepening", line: "Strengthening connection and confidence." },
              { name: "Integrating", line: "Carrying your rhythm forward." },
            ].map((phase) => (
              <div key={phase.name} className="rounded-2xl border border-taupe/25 bg-sand/60 p-7">
                <h3 className="font-serif text-xl text-cocoa leading-snug">{phase.name}</h3>
                <p className="mt-2 text-[15px] text-cocoa/75 leading-[1.75]">{phase.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A SPACE TO LEARN */}
      <section className="section bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">A Space to Learn</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            A Space to Learn
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85]">
            Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> is a learning
            hub — a place to return for clarity and evidence‑based guidance on newborn cues + states,
            developmental rhythms, identity transitions, partner support, and practical tools for
            daily life.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/resources"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Browse Resources
            </Link>
            <Link
              to="/blog"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Visit the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* BEGIN WITH A CONVERSATION */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Begin</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Begin With a Conversation
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Every family begins with a 20‑minute conversation — calm, unhurried, and pressure‑free.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
              Begin Your Postpartum Support
            </CalendlyButton>
            <Link
              to="/services"
              className="button inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
