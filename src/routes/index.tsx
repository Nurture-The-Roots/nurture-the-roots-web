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
    <div className="home-page">
      {/* HERO — Split Hero (Option C): text left, image right; image stacks above text on mobile */}
      <section className="hero split-hero relative overflow-hidden bg-hero-gradient">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-clay/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="hero-image order-1 md:order-2 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/2] md:aspect-[4/5]">
              <ResponsiveImage
                source={welcomeResponsive}
                alt="Ashlee cradling a newborn in a warm, sunlit room — a grounded moment of attuned postpartum presence"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
            <div className="hero-text order-2 md:order-1 text-center md:text-left">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-cocoa">
                Nurture The Roots<sup className="align-super text-[0.45em] ml-1">™</sup>
              </h1>
              <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
                Postpartum &amp; Newborn Development Support for the Fourth Trimester and Beyond
              </p>
              <div className="mt-12">
                <CalendlyButton className="button inline-flex items-center rounded-full bg-clay px-9 py-4 text-base font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
                  Book a Consultation
                </CalendlyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider className="my-2 md:my-4" />

      {/* THE CUE COMES BEFORE THE CRY */}
      <section className="cue-before-cry bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            The Cue Comes Before the Cry
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Your baby is communicating long before they make a sound...
          </p>
          <div className="mt-10">
            <Link
              to="/framework"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>

      {/* SUPPORT THAT PROTECTS YOUR ACTUAL LIFE */}
      <section className="support-life bg-blush/60">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Support That Protects Your Actual Life
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Postpartum care should protect the life you're actually living...
          </p>
          <div className="mt-10">
            <Link
              to="/services"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* A PHILOSOPHY ROOTED IN RELATIONSHIP */}
      <section className="philosophy bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            A Philosophy Rooted in Relationship
          </h2>
          <ul className="mt-10 grid gap-3 max-w-2xl mx-auto text-left">
            {[
              "postpartum begins with identity, not tasks",
              "the cue comes before the cry",
              "care is ceremony",
              "rhythm listens first",
              "a threshold is not a failure point — it is a passage",
              "nothing in postpartum care is small when done with presence",
              "your calm does not have to be perfect — your presence matters",
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
          <div className="mt-10">
            <Link
              to="/approach"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Read the Postpartum Ethos
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* A BODY OF WORK IN PROGRESS */}
      <section className="body-of-work bg-blush/60">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            A Body of Work in Progress
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> is more than a
            service — it's a platform...
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/resources"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Visit the Resource Library
            </Link>
            <Link
              to="/blog"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* MEET ASHLEE */}
      <section className="meet-ashlee bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Meet Ashlee
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Certified Postpartum Doula · Newborn Care Specialist · Fourth Trimester Expert...
          </p>
          <div className="mt-10">
            <Link
              to="/about"
              className="link inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              About Ashlee
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — READY TO BEGIN */}
      <section className="cta bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Ready to Begin?
          </h2>
          <div className="mt-12">
            <CalendlyButton className="button inline-flex items-center rounded-full bg-clay px-9 py-4 text-base font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
              Book a Consultation
            </CalendlyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
