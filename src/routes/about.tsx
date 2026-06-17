import { createFileRoute, Link } from "@tanstack/react-router";
import walkingAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
import ashleeRelationalDetailAsset from "@/assets/ashlee-relational-detail.jpeg.asset.json";
import ashleePortraitAsset from "@/assets/ashlee-portrait.jpeg.asset.json";
import branding54Responsive from "@/assets/branding-54.responsive.json";
import branding39Responsive from "@/assets/branding-photos-39.responsive.json";
import branding60Responsive from "@/assets/branding-60.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { GoogleReviewsBlock } from "@/components/integrations/GoogleReviewsBlock";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";
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
              recognizedBy: {
                "@type": "Organization",
                name: "Brazelton Touchpoints Center",
              },
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
      {/* HERO — WHO I AM */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">About</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Hi, I'm <span className="italic text-clay">Ashlee McKenzie</span>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            A Certified Postpartum Doula, Newborn Care Specialist, and Fourth Trimester Expert
          </p>
        </div>
      </section>

      {/* WHO I AM — INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Who I Am</div>
          </div>
          <div className="mx-auto mb-12 md:mb-16 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] max-w-2xl">
            <ResponsiveImage
              source={branding54Responsive}
              alt="Ashlee sitting with a family in a cozy living room, one adult holding a baby wrapped in a rust-colored blanket, another holding the book The Fourth Trimester"
              sizes="(min-width: 768px) 672px, 100vw"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              I'm Ashlee McKenzie — a Certified Postpartum Doula, Newborn Care Specialist, and
              Fourth Trimester Expert with 15+ years of experience supporting families through one
              of the most tender identity thresholds of their lives.
            </p>
            <p>
              My work is rooted in lineage, attunement, developmental understanding, and the belief
              that postpartum care begins at the roots: identity, relationship, rhythm, and
              ancestral continuity.
            </p>
            <p>
              But this work didn't start with a certification.
              <br />
              It started long before I had language for it.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* WHERE MY WORK TRULY BEGAN */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Where My Work Truly Began
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              A deeply attuned child
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              I grew up as a deeply attuned child — sensitive, observant, always reading the
              emotional field around me. I learned early how to sense what people needed, how to
              soothe, how to regulate, and how to create calm in the midst of intensity.
            </p>
            <p>
              I didn't know it then, but I was already practicing the foundations of the work I do
              now:
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "Reading cues",
              "Understanding rhythms",
              "Holding emotional landscapes",
              "Creating safety",
              "Tending to relationships",
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
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            These early experiences became the soil that my future work would grow from.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — attunement / bassinet */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pb-10 md:pb-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] max-w-2xl mx-auto">
            <ResponsiveImage
              source={branding39Responsive}
              alt="Ashlee leaning over a bassinet, gently adjusting and soothing a baby wrapped in an orange blanket"
              sizes="(min-width: 768px) 672px, 100vw"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* THE PATH THAT CHOSE ME */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              The Path That Chose Me
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Where all my gifts naturally converged
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              In my early adulthood, I found myself drawn again and again to babies, new parents,
              and the threshold of postpartum. Families trusted me. Babies responded to me. I could
              see the whole system — the baby, the parent, the relationship, the environment — all
              at once.
            </p>
            <p>
              I didn't choose postpartum work.
              <br />
              It revealed itself as the place where all of my gifts naturally converged.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* RECLAIMING MY LINEAGE */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Reclaiming My Lineage
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              My work became not just professional — but ancestral
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              My life shifted profoundly when I began the process of reclaiming and documenting my
              Indigenous ancestry. Through deep research and primary‑source confirmation, I
              discovered my lineage as a descendant of the Sinixt (Arrow Lakes People), the Skoyelpi
              (Colville), and the Interior Salish peoples of the Columbia Plateau — a lineage
              spanning ten generations, two confirmed chiefs, and a history of relational, rhythmic,
              sovereign ways of being.
            </p>
            <p>This reclamation didn't just inform my work — it clarified it.</p>
            <p>It gave language to what I had always felt:</p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "Care is ceremony",
              "Tending is relational",
              "Identity is central",
              "Rhythm is medicine",
              "Lineage is continuity",
              "Sovereignty is essential",
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
          <p className="mt-10 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            My work became not just professional — but ancestral.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — portrait */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-10 md:pb-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/4] sm:aspect-[4/3] max-w-2xl mx-auto">
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

      {/* HOW MY JOURNEY SHAPES MY CARE */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              How My Journey Shapes My Care
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Everything I've lived converged into this work
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              Everything I've lived — my sensitivity, my early caregiving instincts, my lineage, my
              reclamation, my professional mastery — converged into the way I support families
              today.
            </p>
            <p>My approach is grounded in:</p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "Newborn communication + developmental attunement",
              "Relational regulation",
              "Identity‑aligned care",
              "Ancestral continuity",
              "Sovereign family systems",
              "Slow, intentional postpartum tending",
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
          <div className="mt-12 text-center text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              This is not task‑based care.
              <br />
              This is identity‑based, lineage‑rooted postpartum sanctuary.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* THE NURTURE THE ROOTS™ FRAMEWORK */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">The Framework</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Nurture The Roots
              <sup className="align-super text-[0.55em] ml-0.5">™</sup> Framework
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p className="font-serif italic text-lg text-cocoa/85">
              My signature framework is the natural expression of my life's journey. It is built on
              four pillars:
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Identity‑Aligned Care",
              "Ancestral‑Rooted Care",
              "Developmental + Relational Guidance",
              "Sovereign Family Systems",
            ].map((pillar) => (
              <div
                key={pillar}
                className="rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-center"
              >
                <span className="font-serif text-lg text-cocoa leading-snug">{pillar}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            These pillars shape every moment of the fourth trimester and guide how I support
            families through becoming.
          </p>
          <div className="mt-10 text-center">
            <Link
              to="/framework"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the Full Framework
            </Link>
          </div>
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

      {/* WHY I DO THIS WORK */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Why I Do This Work
            </div>
          </div>
          <div className="space-y-4 text-center max-w-2xl mx-auto font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
            <p>Because postpartum is a threshold.</p>
            <p>Because babies communicate from the beginning.</p>
            <p>Because parents deserve to feel confident and connected.</p>
            <p>Because lineage deserves continuity.</p>
            <p>Because identity deserves space to unfold.</p>
            <p>Because families deserve care that is slow, relational, and deeply human.</p>
          </div>
          <div className="mt-14 text-center space-y-2 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>This is my calling.</p>
            <p>This is my lineage.</p>
            <p className="font-medium text-cocoa">This is my life's work.</p>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviewsBlock />

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Begin</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            You don't have to navigate this beginning alone.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for support that honors who you are and the family you're becoming,
            I'd be honored to walk with you.
          </p>
          <div className="mt-12">
            <CalendlyButton className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
              Book a Consultation
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
