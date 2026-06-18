import { createFileRoute, Link } from "@tanstack/react-router";
import walkingAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
import ashleePortraitAsset from "@/assets/ashlee-portrait.jpeg.asset.json";
import branding54Responsive from "@/assets/branding-54.responsive.json";
import branding39Responsive from "@/assets/branding-photos-39.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";
const aboutImg = walkingAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "Meet Ashlee McKenzie — Nurture The Roots™",
      },
      {
        name: "description",
        content:
          "Meet Ashlee McKenzie: Certified Postpartum Doula, Newborn Care Specialist, and Fourth Trimester Expert serving San Francisco families with identity‑aligned, lineage‑rooted postpartum care.",
      },
      {
        property: "og:title",
        content: "Meet Ashlee McKenzie — Nurture The Roots™",
      },
      {
        property: "og:description",
        content:
          "Certified Postpartum Doula, Newborn Care Specialist, and Fourth Trimester Expert — lineage‑rooted postpartum support for San Francisco families.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://nurturetheroots.co/about" },
      { property: "og:image", content: aboutImg },
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
        }),
      },
    ],
  }),
  component: AboutPage,
});

const TM = () => <span className="align-super text-[0.4em] ml-0.5">™</span>;

function AboutPage() {
  return (
    <>
      {/* HERO — MEET ASHLEE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">About</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Meet Ashlee
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            I'm Ashlee McKenzie — a Certified Postpartum Doula, Newborn Care Specialist, and Fourth
            Trimester Expert based in San Francisco. For more than fifteen years, I've supported
            families through the tender, disorienting, identity‑shifting threshold of the fourth
            trimester.
          </p>
          <p className="mt-6 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            My work is grounded in attunement, presence, and a deep respect for the early postpartum
            period as a foundational time for both parent and child. I help families slow down,
            listen deeply, and build rhythms that feel aligned with who they are becoming.
          </p>
        </div>
      </section>

      {/* PRIMARY IMAGE — family moment */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] max-w-3xl mx-auto">
            <ResponsiveImage
              source={branding54Responsive}
              alt="Ashlee sitting with a family in a cozy living room, one adult holding a baby wrapped in a rust-colored blanket, another holding the book The Fourth Trimester"
              sizes="(min-width: 768px) 768px, 100vw"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* WHERE MY WORK COMES FROM */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Where My Work Comes From
            </div>
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
            <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] text-center pt-4">
              Nurture The Roots
              <TM /> is not a brand I created.
              <br />
              It is a lineage I stepped into.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

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

      {/* A LIFE SHAPED BY IDENTITY, BELONGING, AND CONTINUITY */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              A Life Shaped by Identity, Belonging, and Continuity
            </div>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              My personal story — adoptee, foster care, reclamation, multi‑generation lineage
              research — taught me early on that identity and belonging are not abstract ideas. They
              are lived experiences that shape how we attach, how we parent, how we love, and how we
              understand ourselves.
            </p>
            <p>This lived understanding is woven into every part of my work.</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-clay">
              <li>It's why I see the fourth trimester as a threshold, not a task list.</li>
              <li>It's why I support parents in naming who they are becoming.</li>
              <li>
                It's why I help families build systems that honor their values, not someone else's
                expectations.
              </li>
              <li>It's why I believe care is ceremony, and continuity is a form of protection.</li>
            </ul>
            <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] text-center pt-4">
              My framework is not theoretical.
              <br />
              It is lived, embodied, and ancestral.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PROFESSIONAL MASTERY */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Professional Mastery, Rooted in Attunement
            </div>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              Over the past 15+ years, I've supported more than 500 families across the Bay Area. My
              work blends:
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "newborn behavioral observation (trained through the Brazelton Institute's NBO System, Level 1)",
              "developmental + relational guidance (Brazelton Touchpoints Center)",
              "identity‑aligned postpartum support",
              "cue‑based care and newborn communication",
              "attachment‑supportive practices",
              "ancestral care principles",
              "family systems support",
              "postpartum planning and continuity",
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
          <div className="mt-12 space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              I am trained in newborn development, lactation education (CAPPA CLE), infant massage
              (Infant Massage USA), and the Brazelton Touchpoints/NBO approach — a framework that
              aligns deeply with my lineage‑rooted understanding of newborn communication.
            </p>
            <p>
              I am also TrustLine‑cleared, CPR/First Aid certified, and trained through DONA, Gentle
              Ventures, and APPPAH.
            </p>
            <p>
              But my deepest training has come from the families I've served, the babies I've held,
              and the ancestral values that have guided me long before I had the words for them.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BAND — portrait */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pb-10 md:pb-16">
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

      {/* THE NURTURE THE ROOTS™ FRAMEWORK */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">The Framework</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Nurture The Roots
              <TM /> Framework
            </h2>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto mb-10">
            My work is shaped by four pillars — the synthesis of my lineage, my lived experience,
            and my professional training:
          </p>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                numeral: "I",
                name: "Identity",
                body: "Postpartum support begins with who you are becoming, not what you must do.",
              },
              {
                numeral: "II",
                name: "Lineage",
                body: "Care is continuity. Care is ceremony. Care is the thread between past and future.",
              },
              {
                numeral: "III",
                name: "Relationship",
                body: "Newborns communicate from the beginning. Attunement is the foundation of connection.",
              },
              {
                numeral: "IV",
                name: "Rhythm",
                body: "Families thrive when their systems honor their real lives, not idealized expectations.",
              },
            ].map((pillar) => (
              <div
                key={pillar.numeral}
                className="rounded-2xl border border-taupe/25 bg-sand/60 p-8 md:p-10"
              >
                <div className="uppercase tracking-[0.22em] text-xs text-clay mb-2">
                  {pillar.numeral}.
                </div>
                <h3 className="font-serif text-2xl text-cocoa leading-snug">{pillar.name}</h3>
                <p className="mt-3 text-[16px] text-cocoa/75 leading-[1.85]">{pillar.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center space-y-6 max-w-2xl mx-auto">
            <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
              These pillars are not a method.
              <br />
              They are a worldview.
            </p>
            <Link
              to="/framework"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the Full Framework
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MY ROLE IN YOUR POSTPARTUM SEASON */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              My Role in Your Postpartum Season
            </div>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              When I enter a family's home, I'm not there to manage tasks. I'm there to support
              identity, relationship, rhythm, and continuity. I'm there to help you understand your
              baby, trust your instincts, and build a postpartum experience that feels grounded,
              sovereign, and deeply aligned with who you are.
            </p>
            <p>
              My presence is calm, steady, and attuned.
              <br />
              My care is relational, developmental, and identity‑rooted.
              <br />
              My intention is always the same:
            </p>
            <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] text-center pt-4">
              To help your family feel held, confident, and connected — from the very beginning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Step Into Your Fourth Trimester With Support
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Every family's needs are different. Our consultation is a gentle, pressure‑free
            conversation to explore what would help you feel grounded, confident, and held.
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
