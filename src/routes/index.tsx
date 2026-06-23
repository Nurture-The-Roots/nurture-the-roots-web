import { createFileRoute, Link } from "@tanstack/react-router";
import welcomeAsset from "@/assets/welcome-ashlee-baby.jpg.asset.json";
import welcomeResponsive from "@/assets/welcome-ashlee-baby.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";
const welcomeImg = welcomeAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurture The Roots™ — Postpartum Sanctuary in San Francisco" },
      {
        name: "description",
        content:
          "Lineage-rooted, identity-aligned support for the fourth trimester — honoring who you are, where you come from, and the new life emerging in your arms. Postpartum care in San Francisco.",
      },
      {
        property: "og:title",
        content: "Nurture The Roots™ — Postpartum Sanctuary in San Francisco",
      },
      {
        property: "og:description",
        content:
          "Lineage-rooted, identity-aligned support for the fourth trimester — honoring who you are, where you come from, and the new life emerging in your arms.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/" },
      {
        name: "keywords",
        content:
          "postpartum doula San Francisco, fourth trimester, newborn care specialist, ancestral postpartum care, identity-aligned care, lineage-rooted, postpartum sanctuary, San Francisco Bay Area",
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
            "Lineage-rooted, identity-aligned postpartum doula and newborn care practice serving families across the San Francisco Bay Area.",
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
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-clay/15 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-24 text-center">
          <div className="uppercase tracking-[0.32em] text-[11px] md:text-xs text-clay-deep mb-7 font-medium">
            San Francisco · Postpartum Sanctuary
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-cocoa">
            Postpartum care begins at the roots.
          </h1>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-lg md:text-xl text-earth leading-[1.55]">
            Lineage-rooted, identity-aligned support for the fourth trimester — honoring who you
            are, where you come from, and the new life emerging in your arms.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand shadow-sm hover:bg-clay-deep transition-colors">
              Book a Consultation
            </CalendlyButton>
            <Link
              to="/framework"
              className="button inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-blush hover:border-cocoa/50 transition-colors"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(61,46,37,0.4)]">
            <ResponsiveImage
              source={welcomeResponsive}
              alt="Postpartum doula Ashlee McKenzie holding a newborn in a warm, sunlit San Francisco home"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/2] md:aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* HI, I'M ASHLEE */}
      <section className="section bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Hi, I'm Ashlee McKenzie.
          </h2>
          <p className="mt-6 font-serif italic text-lg md:text-xl text-earth leading-[1.5]">
            Certified Postpartum Doula · Newborn Care Specialist · Founder of Nurture The Roots
            <span className="align-super text-[0.55em] ml-0.5">™</span>
          </p>
          <div className="mt-10 space-y-6 text-[17px] text-earth leading-[1.85]">
            <p>
              For 16 years, I've sat with families through the hardest, tenderest hours — the 2am
              feeds, the questions no one warns you about, the steep, tender work of learning to
              read a brand-new person. After more than 500 families, I've learned that what parents
              need most isn't more information. It's understanding.
            </p>
            <p>
              My work helps you read your baby's cues, build rhythms that fit your real life, and
              move through this season rooted in who you are and where you come from. Not a method
              for doing more — a way of understanding more.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* A DIFFERENT KIND OF SUPPORT */}
      <section className="section bg-blush">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay-deep mb-5">
            Fourth Trimester
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            A different kind of fourth trimester support
          </h2>
          <p className="mt-10 text-[17px] text-earth leading-[1.85]">
            Most postpartum support is a task list — feedings logged, diapers counted, things done
            <em> to</em> your family. My work is something else. I help you understand what's
            actually happening — in your baby, in you, in the family you're becoming — so you can
            move through these weeks with clarity instead of guesswork.
          </p>
        </div>
      </section>

      {/* THE FRAMEWORK — FOUR PILLARS */}
      <section className="section bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay-deep mb-5">
              The Framework
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Nurture The Roots
              <span className="align-super text-[0.4em] ml-0.5">™</span> Framework
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-earth leading-[1.5]">
              Four pillars. One way of seeing the fourth trimester.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                headline: "Support starts with you.",
                name: "Identity-Aligned Care™",
                body: "Your values, your instincts, and the identity shifts of early parenthood. Care that fits who you are, not imposed from outside.",
              },
              {
                headline: "You come from somewhere.",
                name: "Ancestral-Rooted Care™",
                body: "The patterns and stories you carry shape the ones you pass on — what you keep, and what you set down.",
              },
              {
                headline: "Your baby is already communicating.",
                name: "Developmental & Relational Guidance™",
                body: "Newborns speak from the very beginning. Reading their cues and states is the foundation of connection.",
              },
              {
                headline: "Your whole family is finding its footing.",
                name: "Sovereign Family Systems™",
                body: "Rhythms that fit your real life, not idealized schedules. Support for the whole system, not just the baby.",
              },
            ].map((pillar) => (
              <div
                key={pillar.name}
                className="rounded-2xl border border-border bg-blush p-8 md:p-10"
              >
                <h3 className="font-serif text-2xl md:text-[26px] text-cocoa leading-snug font-medium">
                  {pillar.headline}
                </h3>
                <div className="mt-3 uppercase tracking-[0.22em] text-[11px] text-clay-deep font-medium">
                  {pillar.name}
                </div>
                <p className="mt-4 text-[16px] text-earth leading-[1.85]">{pillar.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/framework"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-blush hover:border-cocoa/50 transition-colors"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>

      {/* THE CLIENT JOURNEY */}
      <section className="section bg-blush">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay-deep mb-5">
              The Client Journey
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Client Journey
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-earth leading-[1.5]">
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
              <div key={phase.name} className="rounded-2xl border border-border bg-sand p-7">
                <h3 className="font-serif text-xl text-cocoa leading-snug">{phase.name}</h3>
                <p className="mt-2 text-[15px] text-earth leading-[1.75]">{phase.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP — placeholder for ConvertKit (Kit) form */}
      <section className="section bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay-deep mb-5">
            A Weekly Note
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            A weekly note from Ashlee
          </h2>
          <p className="mt-6 font-serif italic text-lg md:text-xl text-earth leading-[1.55]">
            One piece of fourth-trimester wisdom, every week — plus my free guide on the #1 thing
            every parent Googles at 2am.
          </p>
          <div
            data-convertkit-placeholder
            className="mt-10 mx-auto max-w-lg rounded-2xl border border-dashed border-clay/60 bg-blush p-8 text-sm text-earth"
          >
            <div className="uppercase tracking-[0.22em] text-[11px] text-clay-deep font-medium mb-3">
              ConvertKit form placeholder
            </div>
            <p className="leading-[1.7]">
              Paste the Kit (ConvertKit) embed form here. This card will be replaced with the live
              sign-up form.
            </p>
          </div>
        </div>
      </section>

      {/* BEGIN WITH A CONVERSATION */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay-deep mb-5">Begin</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Begin with a conversation
          </h2>
          <p className="mt-8 text-[17px] text-earth leading-[1.85] max-w-xl mx-auto">
            Every family begins with a 20-minute conversation — calm, unhurried, and pressure-free.
            A chance to explore what support would feel right for you.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand shadow-sm hover:bg-clay-deep transition-colors">
              Book a Consultation
            </CalendlyButton>
            <Link
              to="/services"
              className="button inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-blush hover:border-cocoa/50 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
