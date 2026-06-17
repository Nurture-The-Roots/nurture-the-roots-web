import { createFileRoute, Link } from "@tanstack/react-router";
import walkingAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
import ashleeRelationalDetailAsset from "@/assets/ashlee-relational-detail.jpeg.asset.json";
import ashleePortraitAsset from "@/assets/ashlee-portrait.jpeg.asset.json";
import branding49Responsive from "@/assets/branding-photos-49.responsive.json";
import branding60Responsive from "@/assets/branding-60.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { GoogleReviewsBlock } from "@/components/integrations/GoogleReviewsBlock";
import { IntakeButton } from "@/components/integrations/DubsadoEmbed";
const aboutImg = walkingAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "Ashlee McKenzie — Postpartum Doula & Newborn Specialist",
      },
      {
        name: "description",
        content:
          "Meet Ashlee McKenzie: ProDoula Certified Postpartum Doula, NBO‑trained Newborn Specialist, and Fourth Trimester Expert serving San Francisco families.",
      },
      {
        name: "keywords",
        content:
          "postpartum doula San Francisco, certified postpartum doula, newborn care specialist, NBO trained, Brazelton Touchpoints, CAPPA lactation educator, fourth trimester expert, TrustLine registered, infant massage certified, Ashlee McKenzie",
      },
      {
        property: "og:title",
        content:
          "Ashlee McKenzie — Certified Postpartum Doula, NBO‑Trained Newborn Care Specialist",
      },
      {
        property: "og:description",
        content:
          "Lineage‑rooted postpartum support backed by ProDoula, NBO Level 1, CAPPA Lactation, and TrustLine credentials for San Francisco families.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://nurturetheroots.co/about" },
      { property: "og:image", content: aboutImg },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Ashlee McKenzie — Certified Postpartum Doula & NBO‑Trained Newborn Care Specialist",
      },
      {
        name: "twitter:description",
        content:
          "ProDoula‑certified, Brazelton NBO‑trained, CAPPA Lactation Educator — fourth trimester support for San Francisco families.",
      },
      { name: "twitter:image", content: aboutImg },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ashlee McKenzie",
          jobTitle: "Certified Postpartum Doula & Fourth Trimester Expert",
          url: "https://nurturetheroots.co/about",
          image: aboutImg,
          worksFor: { "@type": "Organization", name: "Nurture The Roots" },
          areaServed: { "@type": "City", name: "San Francisco" },
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              name: "ProDoula Certified Postpartum & Infant Care Doula",
              credentialCategory: "certification",
              recognizedBy: { "@type": "Organization", name: "ProDoula" },
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "Newborn Behavioral Observations (NBO) System — Level 1",
              credentialCategory: "certification",
              recognizedBy: {
                "@type": "Organization",
                name: "The Brazelton Institute, Boston Children's Hospital / Harvard Medical School Teaching Hospital",
              },
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "Beyond Trauma‑Informed Care: A Developmental & Relational Framework for Healing",
              credentialCategory: "certification",
              recognizedBy: { "@type": "Organization", name: "Brazelton Touchpoints Center" },
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "CAPPA Lactation Educator Training",
              credentialCategory: "certification",
              recognizedBy: {
                "@type": "Organization",
                name: "Childbirth and Postpartum Professional Association (CAPPA)",
              },
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "Infant Massage Certification Training",
              credentialCategory: "certification",
              recognizedBy: { "@type": "Organization", name: "Infant Massage USA" },
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "TrustLine Registered Childcare Provider",
              credentialCategory: "registration",
              recognizedBy: {
                "@type": "Organization",
                name: "California Department of Social Services",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">About</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Hi, I'm <span className="italic text-clay">Ashlee McKenzie</span>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            A Certified Postpartum Doula, Newborn Care Specialist, and Fourth Trimester Expert —
            walking alongside San Francisco families through the earliest days of new parenthood.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-cocoa/70">
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">
              Certified Postpartum Doula
            </li>
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">
              Newborn Care Specialist
            </li>
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">
              Fourth Trimester Expert
            </li>
          </ul>
          <p className="mt-10 mx-auto max-w-xl text-[16px] text-cocoa/75 leading-[1.85]">
            {/* [PLACEHOLDER: A short grounding line under the hero in your voice — one sentence that invites the reader in.] */}
            Welcome — I'm glad you're here.
          </p>
        </div>
      </section>

      {/* MEET ASHLEE */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 pt-24 pb-12 md:pt-32 md:pb-16 font-sans">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Meet Ashlee</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              A grounded presence for your fourth trimester
            </h2>
          </div>
          <div className="mx-auto mb-12 md:mb-16 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] max-w-2xl">
            <ResponsiveImage
              source={branding49Responsive}
              alt="Ashlee McKenzie holding a newborn by a sunlit window — a warm portrait of grounded, attuned postpartum care"
              sizes="(min-width: 768px) 672px, 100vw"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              I'm Ashlee McKenzie — a Certified Postpartum Doula, Newborn Care Specialist, and
              Fourth Trimester Expert based in San Francisco. For more than fifteen years, I've
              supported families through the tender, disorienting, identity‑shifting threshold of
              the fourth trimester.
            </p>
            <p>
              My work is grounded in attunement, presence, and a deep respect for the early
              postpartum period as a foundational time for both parent and child. I help families
              slow down, listen deeply, and build rhythms that feel aligned with who they are
              becoming.
            </p>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pt-8 pb-24 md:pt-12 md:pb-36 font-sans">
          <div className="mx-auto mb-12 md:mb-16 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/4] sm:aspect-[4/5] max-w-md">
            <img
              src={ashleeRelationalDetailAsset.url}
              alt="A quiet relational detail between Ashlee and a baby, illustrating attuned, grounded postpartum care"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 768px) 448px, 100vw"
              className="w-full h-full object-cover object-[center_40%]"
            />
          </div>
          <div className="text-center mb-10">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">My Story</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Woven through lineage and lived experience
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>My approach didn't begin in a training or a classroom. It began in my lineage.</p>
            <p>
              I come from Sinixt and Chinook ancestry — peoples whose traditions hold care,
              continuity, and relational tending as sacred. For much of my life, I didn't have the
              language or access to fully understand this inheritance. But the values were always
              there: the instinct to listen, to observe, to honor rhythm, to protect the vulnerable,
              to tend the roots so the future can thrive.
            </p>
            <p>
              Through reclamation, research, and reconnection, I've been able to name and integrate
              this part of myself. The more I learned about my ancestors, the more clearly I
              understood why my work has always felt like ceremony — why I've always been drawn to
              identity, lineage, and the earliest relational beginnings.
            </p>
          </div>

          <blockquote className="mt-12 mb-12 max-w-2xl mx-auto text-center font-serif italic text-2xl md:text-3xl text-clay leading-[1.4]">
            Nurture The Roots<sup className="align-super text-[0.45em] ml-0.5">™</sup> is not a
            brand I created. It is a lineage I stepped into.
          </blockquote>

          <div className="text-center mb-10">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Identity, Belonging &amp; Continuity
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-cocoa">
              A life shaped by where I come from
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              My personal story — adoptee, foster care, reclamation, multi‑generation lineage
              research — taught me early on that identity and belonging are not abstract ideas. They
              are lived experiences that shape how we attach, how we parent, how we love, and how we
              understand ourselves.
            </p>
            <p>This lived understanding is woven into every part of my work.</p>
          </div>
          <ul className="mt-8 space-y-3 max-w-2xl mx-auto">
            {[
              "It's why I see the fourth trimester as a threshold, not a task list.",
              "It's why I support parents in naming who they are becoming.",
              "It's why I help families build systems that honor their values, not someone else's expectations.",
              "It's why I believe care is ceremony, and continuity is a form of protection.",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-[16px] text-cocoa leading-[1.7]"
              >
                <span className="text-clay mt-1.5 text-[0.6rem]">&#9679;</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            My framework is not theoretical. It is lived, embodied, and ancestral.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* WHAT FAMILIES OFTEN SAY */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">In Their Words</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              What families often say about me
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <figure key={i} className="rounded-2xl border border-taupe/25 bg-sand/70 p-8">
                <blockquote className="font-serif italic text-[17px] text-cocoa/85 leading-[1.6]">
                  {/* [PLACEHOLDER: Short pull-quote from existing testimonials — 1–2 sentences.] */}
                  "A short, attuned quote in the family's own words."
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-[0.22em] text-clay">
                  {/* [PLACEHOLDER: Attribution — e.g. "— A San Francisco family"] */}— A family
                  Ashlee served
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border-t border-taupe/30" />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 font-sans">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">My Approach</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Professional mastery, rooted in attunement
            </h2>
            <p className="mt-8 mx-auto max-w-xl text-[17px] text-cocoa/80 leading-[1.85]">
              Over the past 15+ years, I've supported more than 500 families across the Bay Area. My
              work blends:
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Newborn behavioral observation",
              "Developmental + relational guidance",
              "Identity‑aligned postpartum support",
              "Cue‑based care",
              "Attachment‑supportive practices",
              "Ancestral care principles",
              "Family systems support",
              "Postpartum planning and continuity",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-cocoa"
              >
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            This is not clinical care — it is relational, educational, and deeply human.
          </p>
        </div>
      </section>

      {/* WHY THIS WORK MATTERS */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 font-sans">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Why This Work Matters
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The fourth trimester is a sacred window
            </h2>
          </div>
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              When parents feel supported, babies thrive. My role is to help you feel confident,
              connected, and deeply cared for as you step into new parenthood.
            </p>
          </div>
          <div className="mt-16 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/4] sm:aspect-[4/3] max-w-2xl mx-auto">
            <img
              src={ashleePortraitAsset.url}
              alt="A grounded editorial portrait of Ashlee, the practitioner behind Nurture The Roots™"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 768px) 672px, 100vw"
              className="w-full h-full object-cover object-[center_40%]"
            />
          </div>
        </div>
      </section>

      {/* TRAININGS & CERTIFICATIONS */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border-t border-taupe/30" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 font-sans">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Trainings & Certifications
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Grounded in continued learning
            </h2>
            <p className="mt-6 mx-auto max-w-xl font-serif italic text-lg text-cocoa/75 leading-[1.5]">
              A foundation of evidence‑based training in postpartum care, newborn development, and
              relational support.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "ProDoula Certified Postpartum & Infant Care Doula",
                org: "ProDoula",
                year: "2024",
              },
              {
                title: "Newborn Behavioral Observations (NBO) System — Level 1",
                org: "The Brazelton Institute · Boston Children's Hospital / Harvard Medical School Teaching Hospital",
                year: "2025",
              },
              {
                title:
                  "Beyond Trauma‑Informed Care: A Developmental & Relational Framework for Healing",
                org: "Brazelton Touchpoints Center™",
                year: "2024",
              },
              {
                title: "CAPPA Lactation Educator Training",
                org: "Childbirth and Postpartum Professional Association (CAPPA)",
                year: "2021",
              },
              {
                title: "Infant Massage Certification Training",
                org: "Infant Massage USA® — US Chapter, International Association of Infant Massage",
                year: "2011",
              },
              {
                title: "TrustLine Registered Childcare Provider",
                org: "California Department of Social Services & California Child Care Resource & Referral Network",
                year: "Since 2012",
              },
            ].map((cert, i) => (
              <li
                key={i}
                className="rounded-2xl border border-taupe/25 bg-blush/40 px-6 py-6 text-cocoa"
              >
                <div className="text-[0.65rem] uppercase tracking-[0.24em] text-clay mb-2">
                  {cert.year}
                </div>
                <h3 className="font-serif text-lg md:text-xl font-medium leading-[1.3] text-cocoa">
                  {cert.title}
                </h3>
                <p className="mt-2 text-[14px] text-cocoa/75 leading-[1.6]">{cert.org}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            I am trained in newborn development, lactation education, infant massage, and the
            Brazelton Touchpoints/NBO approach — a framework that aligns deeply with my
            lineage‑rooted understanding of newborn communication. But my deepest training has come
            from the families I've served, the babies I've held, and the ancestral values that have
            guided me long before I had the words for them.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — daily practice */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-10 md:pb-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <ResponsiveImage
              source={branding60Responsive}
              alt="A soft editorial moment from the Nurture The Roots™ brand library"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_42%]"
            />
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviewsBlock />

      {/* BEGIN INTAKE */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-28 text-center">
          <IntakeButton className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
            Begin Intake
          </IntakeButton>
          <p className="mt-3 text-xs text-cocoa/60">
            Opens our intake form — a gentle first step to working together.
          </p>
        </div>
      </section>

      {/* INVITATION / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center font-sans">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Invitation</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            You don't have to navigate this beginning alone.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for support that honors who you are and the family you're becoming,
            I'd be honored to walk with you.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Schedule Your First Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
