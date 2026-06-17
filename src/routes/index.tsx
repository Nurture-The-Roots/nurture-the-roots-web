import { createFileRoute, Link } from "@tanstack/react-router";
import welcomeAsset from "@/assets/welcome-ashlee-baby.jpg.asset.json";
import ashleeBabyChairPortraitAsset from "@/assets/ashlee-baby-chair-portrait.jpeg.asset.json";
import ashleeTenderHoldAsset from "@/assets/ashlee-tender-hold.jpeg.asset.json";
import aboutResponsive from "@/assets/branding-65.responsive.json";
import consultResponsive from "@/assets/branding-54.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";
const welcomeImg = welcomeAsset.url;
const homeBandImg = ashleeTenderHoldAsset.url;
const homeClosingImg = ashleeBabyChairPortraitAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurture The Roots™ — Fourth Trimester Postpartum Support" },
      {
        name: "description",
        content:
          "Lineage‑rooted postpartum support from a Fourth Trimester Expert serving San Francisco families with clarity, attunement, and attuned newborn care.",
      },
      {
        property: "og:title",
        content: "Nurture The Roots™ — Fourth Trimester Postpartum Support",
      },
      {
        property: "og:description",
        content:
          "Grounded, identity‑rooted postpartum support from a Fourth Trimester Expert in San Francisco — clarity, care, and attuned newborn guidance.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/" },
      {
        name: "keywords",
        content:
          "fourth trimester expert, postpartum doula San Francisco, newborn care specialist, postpartum support SF, fourth trimester support, newborn guidance, attuned postpartum care",
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
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-clay/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-24 md:pt-36 md:pb-36 text-center">
          <div className="uppercase tracking-[0.32em] text-[0.7rem] text-cocoa/70 mb-10">
            San Francisco · Postpartum Sanctuary
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-cocoa">
            Postpartum care begins at the roots
          </h1>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            A lineage‑rooted, identity‑aligned sanctuary for the fourth trimester.
          </p>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> offers
            attuned, relational, developmental postpartum care that honors who you are, where you
            come from, and the new life emerging in your arms.
          </p>
          <div className="mt-12">
            <CalendlyButton className="inline-flex items-center rounded-full bg-clay px-9 py-4 text-base font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
              Book a Consultation
            </CalendlyButton>
          </div>
        </div>
      </section>

      <SectionDivider className="my-2 md:my-4" />

      {/* WHAT FAMILIES NEED MOST */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">
            What Families Need Most
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            The fourth trimester is a threshold — a becoming
          </h2>
          <div className="mt-10 space-y-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>Parents deserve care that is grounded, relational, and deeply human.</p>
            <p>
              Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> supports
              families through identity shifts, newborn communication, emotional regulation, and the
              creation of sovereign systems of support.
            </p>
            <p>
              This is not task‑based care.
              <br />
              This is identity‑based, lineage‑rooted postpartum tending.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section aria-hidden="false" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-2 pb-10 md:pt-6 md:pb-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]">
            <ResponsiveImage
              source={consultResponsive}
              alt="Ashlee reading from a fourth trimester book alongside two parents holding their baby in a warm, sunlit living room"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* THE NURTURE THE ROOTS™ APPROACH */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">The Approach</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            The Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> Approach
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Postpartum support is most powerful when it begins at the roots:
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {[
              { root: "Identity", line: "who you are becoming" },
              { root: "Lineage", line: "the continuity you carry forward" },
              { root: "Relationship", line: "the bond you are building" },
              { root: "Rhythm", line: "the pace your family naturally moves at" },
            ].map((item) => (
              <div
                key={item.root}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/60 px-5 py-4 text-sm text-cocoa"
              >
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed">
                  <strong className="font-medium">{item.root}</strong> — {item.line}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            These four roots shape the entire fourth trimester and form the foundation of the
            Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> Framework.
          </p>
          <div className="mt-10">
            <Link
              to="/framework"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>

      {/* IMAGE BAND — relational presence */}
      <section aria-hidden="false" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-4 pb-4 md:pt-10 md:pb-10">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={homeBandImg}
              alt="Ashlee beside a bed, gently swaddling a baby in a calm, light-filled room"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_52%]"
            />
          </div>
        </div>
      </section>

      {/* HOW I SUPPORT YOU */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              How I Support You
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Your care experience is grounded in
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Attuned presence",
              "Newborn communication + developmental guidance",
              "Relational regulation",
              "Ceremonial tending",
              "Sovereign postpartum planning",
              "Sustainable support systems",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-sm text-cocoa"
              >
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Every family receives care that is tailored, relational, and aligned with their identity
            and lived reality.
          </p>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* THE CLIENT JOURNEY (SHORT VERSION) */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              The Client Journey
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Your journey is held with clarity, rhythm, and relational depth
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              {
                num: "01",
                name: "Connection",
                line: "we begin with identity, lineage, and your family's story",
              },
              {
                num: "02",
                name: "Attunement",
                line: "we learn your baby's cues, rhythms, and communication",
              },
              {
                num: "03",
                name: "Regulation",
                line: "we support emotional + nervous system grounding",
              },
              {
                num: "04",
                name: "Integration",
                line: "we build sustainable systems for your fourth trimester and beyond",
              },
            ].map((step) => (
              <div key={step.num} className="rounded-2xl border border-taupe/25 bg-sand/60 p-6">
                <div className="font-serif text-2xl text-clay leading-none mb-3">{step.num}</div>
                <h3 className="font-serif text-lg text-cocoa leading-snug mb-2">{step.name}</h3>
                <p className="text-[14px] text-cocoa/75 leading-[1.7]">{step.line}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center font-serif italic text-lg md:text-xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            This is postpartum care that meets you where you are and grows with you.
          </p>
          <div className="mt-10 text-center">
            <Link
              to="/client-journey"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* WHO I SUPPORT */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">Who I Support</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            I support families who desire
          </h2>
          <ul className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
            {[
              "A grounded, relational postpartum experience",
              "Newborn communication + developmental guidance",
              "Identity‑aligned care",
              "Ancestral continuity",
              "A calm, regulated home environment",
              "Support that honors their values, culture, and lived reality",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/60 px-5 py-3 text-sm text-cocoa"
              >
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Whether this is your first baby or your fourth, your fourth trimester deserves to be
            held with intention.
          </p>
        </div>
      </section>

      {/* ABOUT ASHLEE */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5]">
              <ResponsiveImage
                source={aboutResponsive}
                alt="Ashlee McKenzie seated in a sunlit nursery, gently cradling a newborn in a soft moment of attuned presence"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover object-[center_28%]"
              />
            </div>
            <div className="max-w-md">
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">About Ashlee</div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
                Meet Ashlee
              </h2>
              <div className="mt-8 space-y-6 text-[17px] text-cocoa/80 leading-[1.85]">
                <p>
                  I am a postpartum doula, newborn care specialist, and fourth trimester guide with
                  15+ years of experience supporting families through identity shifts, newborn
                  communication, and relational regulation.
                </p>
                <p>
                  My work is rooted in lineage, developmental attunement, and sovereign family
                  systems — helping parents feel confident, connected, and deeply supported.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
                >
                  Meet Ashlee
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BAND — editorial */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-4 md:pb-10">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={homeClosingImg}
              alt="Ashlee seated with a baby in her lap near a sunlit window, sharing a soft, grounded moment together"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_38%]"
            />
          </div>
        </div>
      </section>

      {/* BEGIN YOUR POSTPARTUM SANCTUARY */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Begin</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Begin your postpartum sanctuary
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Your fourth trimester deserves care that is slow, relational, and rooted.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            If you're ready to feel held, grounded, and supported:
          </p>
          <div className="mt-12">
            <CalendlyButton className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
              Book a Consultation
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
