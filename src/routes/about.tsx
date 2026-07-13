import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";
const aboutImg = "https://nurturetheroots.co/images/family-consultation-fourth-trimester.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "Meet Ashlee McKenzie — Postpartum Doula & Newborn Care Specialist | Nurture The Roots™",
      },
      {
        name: "description",
        content:
          "Meet Ashlee McKenzie: Certified Postpartum Doula, Newborn Care Specialist, and Fourth Trimester Expert helping San Francisco Bay Area families with newborn communication, developmental rhythms, and responsive care.",
      },
      {
        property: "og:title",
        content: "Meet Ashlee McKenzie — Postpartum Doula & Newborn Care Specialist",
      },
      {
        property: "og:description",
        content:
          "Certified Postpartum Doula, Newborn Care Specialist, and Fourth Trimester Expert — evidence-based postpartum support for San Francisco Bay Area families.",
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
            Trimester Expert based in San Francisco. For 16 years, I've helped
            families navigate the fourth trimester with clarity and confidence.
          </p>
          <p className="mt-6 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            My work is grounded in newborn communication, developmental science, and the lived
            realities of early parenthood. I help families read their baby's cues + states, build
            developmental rhythms, and move through identity transitions with steady, responsive
            care.
          </p>
        </div>
      </section>

      {/* PRIMARY IMAGE — family moment */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] max-w-3xl mx-auto">
            <img
              src="/images/family-consultation-fourth-trimester.jpg"
              alt="Ashlee McKenzie meeting with a family in their living room, discussing fourth trimester care alongside a copy of The Fourth Trimester"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* WHERE MY WORK COMES FROM */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <h2 className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Where My Work Comes From
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              Long before I had the training, I had the instincts: to listen closely, to observe, to
              protect the vulnerable, and to pay attention to rhythm.
            </p>
            <p>
              I come from Sinixt and Chinook ancestry — peoples whose traditions hold care and
              continuity as central. For much of my life I didn't have the language or access to
              fully understand that inheritance. Through research and reconnection, I've come to name
              it, and it shapes why I've always been drawn to identity, relationship, and the
              earliest weeks of a baby's life.
            </p>
            <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] text-center pt-4">
              That history is the foundation. The work itself is grounded in newborn communication
              and developmental science.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* IMAGE BAND — responsive newborn care / bassinet */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pb-10 md:pb-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/2] max-w-2xl mx-auto">
            <img
              src="/images/responsive-care-close-hold.jpg"
              alt="Postpartum doula holding a baby close for comfort during a responsive newborn care moment"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* A LIFE SHAPED BY IDENTITY, BELONGING, AND CONTINUITY */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <h2 className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              A Life Shaped by Identity and Belonging
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              My own story — adoptee, foster care, and years of family research — taught me early
              that identity and belonging aren't abstract ideas. They shape how we attach, how we
              parent, and how we understand ourselves.
            </p>
            <p>That understanding informs how I work with families:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-clay">
              <li>I treat the fourth trimester as a real developmental period, not a task list.</li>
              <li>I support parents through identity transitions, not just newborn logistics.</li>
              <li>
                I help families build systems that fit their actual lives and values.
              </li>
              <li>I focus on responsive care and clear, evidence-based guidance.</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PROFESSIONAL MASTERY */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <h2 className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Professional Training &amp; Experience
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              Over 16 years, I've supported more than 500 families across the Bay Area. My
              work blends:
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "newborn behavioral observation (trained through the Brazelton Institute's NBO System, Level 1)",
              "developmental + relational guidance (Brazelton Touchpoints Center)",
              "newborn communication and cues + states",
              "responsive care and early regulation",
              "attachment-supportive practices",
              "support through identity transitions",
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
              (Infant Massage USA), and the Brazelton Touchpoints/NBO approach — the foundation of
              how I read and respond to newborn communication.
            </p>
            <p>
              I am also TrustLine-cleared, CPR/First Aid certified, and trained through DONA, Gentle
              Ventures, and APPPAH.
            </p>
            <p>
              And my deepest education has come from the families themselves — hundreds of real
              fourth trimesters, each one its own story.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BAND — portrait */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pb-10 md:pb-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/4] sm:aspect-[4/3] max-w-2xl mx-auto">
            <img
              src="/images/ashlee-tender-kiss.jpg"
              alt="Editorial portrait of Ashlee McKenzie, postpartum doula and newborn care specialist behind Nurture The Roots™"
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
            My work is shaped by four pillars — the synthesis of my experience, my training, and
            what I've learned alongside families:
          </p>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                numeral: "I",
                name: "Identity-Aligned Care™",
                body: "Postpartum support starts with the parent — your values, your instincts, and the identity transitions of early parenthood.",
              },
              {
                numeral: "II",
                name: "Ancestral-Rooted Care™",
                body: "The patterns and stories you carry shape the ones you pass on — what you keep, and what you set down.",
              },
              {
                numeral: "III",
                name: "Developmental & Relational Guidance™",
                body: "Newborns communicate from the beginning. Reading cues + states is the foundation of connection.",
              },
              {
                numeral: "IV",
                name: "Sovereign Family Systems™",
                body: "Families do best with developmental rhythms that fit their real lives, not idealized schedules.",
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
              Together, they shape how I support every family.
            </p>
            <Link
              to="/framework"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* IMAGE — tender hold */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-10 md:py-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] max-w-3xl mx-auto">
            <img
              src="/images/ashlee-brand-0020.jpg"
              alt="Ashlee McKenzie holding a baby close, cheek to cheek, in a bright, sunlit room"
              loading="lazy"
              decoding="async"
              width="1200"
              height="800"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* MY ROLE IN YOUR POSTPARTUM SEASON */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <h2 className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              My Role in Your Fourth Trimester
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              In your home, I'm not there just to manage tasks. I'm there to help you understand your
              baby's cues + states, support early regulation, build developmental rhythms, and move
              through identity transitions with confidence.
            </p>
            <p>
              My approach is calm, steady, and responsive — relational, developmental, and
              evidence-based. The goal is always the same:
            </p>
            <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] text-center pt-4">
              to help your family feel confident and connected from the very beginning.
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
            Every family's needs are different. A consultation is a calm, pressure-free conversation
            to explore what support would feel right for your family.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CalendlyButton className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
              Schedule a Consultation
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
    </>
  );
}
