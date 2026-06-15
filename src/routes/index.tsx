import { createFileRoute, Link } from "@tanstack/react-router";
import welcomeAsset from "@/assets/welcome-ashlee-baby.jpg.asset.json";
const welcomeImg = welcomeAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Postpartum Doula San Francisco | Nurture The Roots™" },
      { name: "description", content: "Guiding you through the fourth trimester with clarity and care." },
      { property: "og:title", content: "Postpartum Doula San Francisco | Nurture The Roots™" },
      { property: "og:description", content: "Guiding you through the fourth trimester with clarity and care." },
      { property: "og:url", content: "https://nurture-the-roots-web.lovable.app/" },
      { property: "og:image", content: welcomeImg },
      { name: "twitter:image", content: welcomeImg },
    ],
    links: [
      { rel: "canonical", href: "https://nurture-the-roots-web.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nurture The Roots™",
          description:
            "Lineage-rooted, identity-aligned postpartum doula and newborn care practice serving families across the San Francisco Bay Area.",
          url: "https://nurture-the-roots-web.lovable.app/",
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
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-clay/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-24 md:pt-36 md:pb-36 text-center">
          <div className="uppercase tracking-[0.32em] text-[0.7rem] text-cocoa/70 mb-8">
            San Francisco · Postpartum Sanctuary
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-cocoa">
            Nurture the Roots
            <span className="align-super text-[0.4em] ml-1 text-cocoa/70">™</span>
            <span className="block mt-6 font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-cocoa/80">
              Warm, Attuned Postpartum Support in San Francisco
            </span>
          </h1>
          <p className="mt-10 mx-auto max-w-2xl font-serif text-xl md:text-2xl text-cocoa/80 italic">
            Guiding you through the fourth trimester with clarity and care.
          </p>
          <p className="mt-6 mx-auto max-w-xl text-base text-cocoa/70 leading-[1.85]">
            Your fourth trimester deserves care that feels grounding, relational, and deeply human.
            I support new parents with clarity, attunement, and developmental guidance — so you can
            feel confident, rested, and connected in this new beginning.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand shadow-sm hover:bg-cocoa transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5]">
              <img
                src={welcomeAsset.url}
                alt="Ashlee McKenzie kneeling on the floor, smiling warmly while gently holding a happy baby in a striped onesie"
                loading="lazy"
                width={1920}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-md">
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">Welcome</div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
                Welcome — I'm Ashlee.
              </h2>
              <p className="mt-8 text-[17px] leading-[1.85] text-cocoa/80">
                I'm a Certified Postpartum Doula, Newborn Care Specialist, and New Parent Support
                Coach with over sixteen years of experience supporting families across the Bay Area.
                My work blends evidence-based newborn care with identity-aligned, lineage-rooted
                support that honors who you are and the family you're becoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I OFFER */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">What I Offer</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">Support for the Fourth Trimester</h2>
            <p className="mt-7 text-cocoa/75 leading-[1.85] max-w-xl mx-auto">
              Whether you need daytime support, overnight newborn care, feeding guidance, or
              relational coaching, I offer care that meets you where you are — with warmth,
              clarity, and attunement.
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Postpartum Doula Care",
              "Overnight Newborn Care",
              "NBO-Informed Newborn Sessions",
              "Feeding & Lactation Support",
              "New Parent Support Coaching",
              "Innate Postpartum Care",
            ].map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-taupe/30 bg-sand/60 p-8 hover:bg-sand transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-clay mt-1">&bull;</span>
                  <h3 className="text-lg text-cocoa">{title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* MY APPROACH PREVIEW */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">My Approach</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            A Relational, Identity-Aligned Approach
          </h2>
          <p className="mt-8 text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            My care is rooted in four pillars: Identity-Aligned Care™, Ancestral-Rooted Care™,
            Developmental & Relational Guidance™, and Sovereign Family Systems™. These
            frameworks help you understand your baby, your identity, and your new family system
            with clarity and confidence.
          </p>
          <div className="mt-12">
            <Link
              to="/approach"
              className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Learn About My Approach
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL PREVIEW */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">Testimonials</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa mb-14">What Families Say</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              "You helped us understand our baby in a way no book ever could.",
              "You made our home feel peaceful again.",
              "You held us, not just the baby.",
            ].map((quote, i) => (
              <div
                key={i}
                className="rounded-2xl bg-sand/70 border border-taupe/30 p-10"
              >
                <p className="font-serif italic text-cocoa text-lg leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-cocoa border-b border-clay pb-1 hover:text-earth"
            >
              Read More Testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            You don't have to navigate this beginning alone.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for support that honors your identity, your pace, and your family's rhythm, I'd be honored to walk with you.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
