import { createFileRoute, Link } from "@tanstack/react-router";
import welcomeAsset from "@/assets/welcome-ashlee-baby.jpg.asset.json";
import ashleeBabyChairPortraitAsset from "@/assets/ashlee-baby-chair-portrait.jpeg.asset.json";
import ashleeTenderHoldAsset from "@/assets/ashlee-tender-hold.jpeg.asset.json";
import aboutResponsive from "@/assets/branding-65.responsive.json";
import consultResponsive from "@/assets/branding-54.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";
import { TestimonialsCarousel } from "@/components/integrations/TestimonialsCarousel";
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

const pillars = [
  {
    numeral: "I",
    title: "Identity‑Aligned Care",
    body: "Postpartum support begins with identity, not tasks. This pillar supports the parent, the baby, and the family system through the deep identity shifts of the fourth trimester.",
  },
  {
    numeral: "II",
    title: "Ancestral‑Rooted Care",
    body: "Care is ceremony. Care is lineage. Care is continuity. This pillar restores meaning, rhythm, and sacredness to daily postpartum tending.",
  },
  {
    numeral: "III",
    title: "Developmental + Relational Guidance",
    body: "Newborns communicate from the beginning. This pillar helps parents understand cues, states, regulation, and the relational language of their baby.",
  },
  {
    numeral: "IV",
    title: "Sovereign Family Systems",
    body: "Families thrive when their systems honor their actual identity, values, needs, and lived reality. This pillar supports planning, boundaries, support ecosystems, and continuity.",
  },
];

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
          <p className="mt-10 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
            Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> offers
            lineage‑rooted, identity‑aligned, developmental, and relational support for families
            moving through the fourth trimester.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="inline-flex items-center rounded-full bg-clay px-9 py-4 text-base font-medium text-sand shadow-sm hover:bg-cocoa transition-colors">
              Book a Consultation
            </CalendlyButton>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-9 py-4 text-base font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Begin Your Postpartum Support
            </Link>
            <Link
              to="/framework"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-9 py-4 text-base font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider className="my-2 md:my-4" />

      {/* OPENING — fourth trimester as threshold */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">
            A Threshold, Not a Task List
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            The fourth trimester is a becoming
          </h2>
          <div className="mt-10 space-y-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              The fourth trimester is not simply a season of feeding, sleeping, diapers, and
              recovery. It is a threshold. A becoming. A time when identity, lineage, relationship,
              rhythm, and support all matter.
            </p>
            <p>
              Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> supports
              families through this passage with care that honors who they are, who their baby is
              becoming, and the systems they need to feel grounded, confident, and held.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BAND — consultation in a family's home */}
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

      {/* THE NURTURE THE ROOTS DIFFERENCE */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">The Difference</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            The Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup>{" "}
            Difference
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> is not
            generic postpartum support. It is a sovereign postpartum framework rooted in lived
            experience, professional mastery, developmental training, relational care, and ancestral
            wisdom.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            This work integrates:
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {[
              "identity formation",
              "newborn development",
              "ancestral care practices",
              "relational regulation",
              "postpartum planning",
              "family systems",
              "practitioner attunement",
              "continuity beyond the early postpartum window",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/60 px-5 py-4 text-sm text-cocoa"
              >
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <TestimonialsCarousel />

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

      {/* THE FOUR PILLARS */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">The Framework</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Four Pillars
            </h2>
            <p className="mt-6 font-serif italic text-lg text-cocoa/75 leading-[1.5]">
              Identity · Lineage · Relationship · Rhythm
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <article
                key={p.numeral}
                className="rounded-2xl border border-taupe/25 bg-blush/40 p-8 md:p-10"
              >
                <div className="font-serif text-3xl text-clay leading-none mb-4">{p.numeral}</div>
                <h3 className="font-serif text-2xl md:text-[1.75rem] text-cocoa leading-[1.2] mb-4">
                  {p.title}
                </h3>
                <p className="text-cocoa/80 leading-[1.85] text-[15px]">{p.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/framework"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the full Framework
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES AT A GLANCE */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Services at a Glance
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Five ways we can work together
            </h2>
            <p className="mt-6 text-[16px] text-cocoa/75 leading-[1.8] max-w-xl mx-auto">
              {/* Services intro */}
              Your care experience is grounded in identity, rhythm, relationship, and the realities
              of your family.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Rooted Postpartum Planning",
                line: "Prepare for postpartum with clarity and sovereignty.",
              },
              {
                title: "In-Home or Virtual Support",
                line: "Relational care for newborn cues, rhythm, and grounding.",
              },
              {
                title: "Newborn Cue + Attunement",
                line: "Understand your baby's communication and states.",
              },
              {
                title: "Sovereign Family Systems",
                line: "Organize care, boundaries, and household rhythms.",
              },
              {
                title: "Integration + Continuity",
                line: "Carry what you've learned into the next season.",
              },
            ].map((s) => (
              <article key={s.title} className="rounded-2xl border border-taupe/25 bg-blush/40 p-6">
                <h3 className="font-serif text-lg text-cocoa leading-snug mb-2">{s.title}</h3>
                <p className="text-[14px] text-cocoa/75 leading-[1.7]">{s.line}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* WHO THIS IS FOR */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">Who This Is For</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            This work is for…
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            I support families who desire care that honors who they are — not a template. Whether
            this is your first baby or your fourth, your fourth trimester deserves to be held with
            intention.
          </p>
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
        </div>
      </section>

      {/* ABOUT YOU (FOUNDER) */}
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
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">About</div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
                Meet Ashlee
              </h2>
              <div className="mt-8 space-y-6 text-[17px] text-cocoa/80 leading-[1.85]">
                <p>
                  I'm a postpartum doula, newborn care specialist, and fourth trimester guide with
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
                  More About Ashlee
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR FAMILIES WHO WANT MORE THAN SURVIVAL */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">For Families</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            For families who want more than survival
          </h2>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Nurture The Roots<sup className="align-super text-[0.55em] ml-0.5">™</sup> is for
            families who want postpartum care that is practical and meaningful, grounded and
            responsive, professional and deeply human.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            It is for parents who want to listen to their baby, trust their rhythms, protect their
            values, and move through postpartum as a meaningful passage rather than a season to
            simply survive.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — editorial sanctuary */}
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

      {/* CLOSING CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Begin</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Begin your rooted postpartum support
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Every family's needs are different. We'll begin with a consultation to understand your
            postpartum plans, your questions, and how I can best support you during this time.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Schedule Your First Conversation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
