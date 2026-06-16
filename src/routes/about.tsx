import { createFileRoute, Link } from "@tanstack/react-router";
import walkingAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
const aboutImg = walkingAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ashlee McKenzie — Nurture The Roots™" },
      { name: "description", content: "Ashlee McKenzie is a postpartum doula, newborn care specialist, and family coach with 16+ years of lineage-rooted practice in San Francisco." },
      { property: "og:title", content: "About Ashlee McKenzie" },
      { property: "og:description", content: "Postpartum doula, newborn care specialist, and family coach." },
      { property: "og:url", content: "https://nurture-the-roots-web.lovable.app/about" },
      { property: "og:image", content: aboutImg },
    ],
    links: [
      { rel: "canonical", href: "https://nurture-the-roots-web.lovable.app/about" },
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
            A certified postpartum doula, newborn care specialist, and new parent support coach —
            walking alongside families through the fourth trimester.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-cocoa/70">
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">Certified Postpartum Doula</li>
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">Newborn Care Specialist</li>
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">New Parent Support Coach</li>
          </ul>
        </div>
      </section>

      {/* HERO IMAGE + INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 font-sans">
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              For more than sixteen years, I've supported families through one of the most tender
              and transformative seasons of their lives. My work is rooted in clarity, attunement,
              and the belief that the fourth trimester is not something to "get through," but a
              sacred beginning that shapes everything that follows.
            </p>
            <p>
              I help new parents slow down, understand their baby, and feel deeply supported — not
              just in tasks, but in identity, lineage, and the emotional landscape of becoming a family.
            </p>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 grid md:grid-cols-[6fr_5fr] gap-14 md:gap-20 items-center">
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] font-sans order-2 md:order-1 max-w-xl">
            <div className="uppercase tracking-[0.28em] text-xs text-clay">My Story</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa mt-2">
              Your story, your becoming
            </h2>
            <p className="pt-2">
              My path into postpartum work wasn't a straight line — it was a calling that revealed
              itself through years of being invited into the quiet, sacred spaces where life begins.
              I've always been drawn to the subtle language of newborns: the way they communicate
              through movement, breath, and presence long before words arrive.
            </p>
            <p>
              Over the years, I've supported hundreds of families across the Bay Area, each with their
              own histories, cultures, and ways of loving. What I've learned is simple and universal:
            </p>
            <p className="font-serif italic text-cocoa text-xl leading-relaxed border-l-2 border-clay/40 pl-6 py-2">
              Every family deserves to feel held.<br />
              Every parent deserves to feel capable.<br />
              Every baby deserves to be understood.
            </p>
            <p>
              My work is grounded in identity-aligned care, honoring who you are, where you come from,
              and the lineage you're continuing. I support you in a way that feels like you — not a
              script, not a trend, not a one-size-fits-all approach.
            </p>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] my-8 md:my-0">
            <img
              src={walkingAsset.url}
              alt="Ashlee McKenzie holding a sleeping newborn close, standing by a bright window with greenery outside"
              loading="lazy"
              width={1280}
              height={1920}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW I SHOW UP */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border-t border-taupe/30" />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 font-sans">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">How I Show Up</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">Walking with you, at your own pace.</h2>
          </div>
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              My presence is calm, grounded, and attuned. I move slowly. I listen deeply. I help you
              understand your baby's cues, rhythms, and communication so you can feel confident in your
              own instincts.
            </p>
          </div>
          <div className="mt-12 bg-blush/60 rounded-2xl p-10 md:p-14">
            <p className="text-cocoa font-medium text-center uppercase tracking-[0.2em] text-xs mb-10">Parents often tell me</p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                "You made our home feel peaceful again.",
                "You helped us understand our baby in a way no book ever could.",
                "You held us, not just the baby.",
              ].map((quote, i) => (
                <div key={i} className="text-center px-2">
                  <p className="font-serif italic text-cocoa text-lg leading-relaxed">"{quote}"</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              This is the heart of my work — relational care that honors your nervous system, your
              identity, and your family's unique dynamic.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BACKGROUND */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-36 font-sans">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Professional Background</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">Experience &amp; Training</h2>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] text-center mb-14 max-w-2xl mx-auto">
            I bring over sixteen years of experience supporting families in the San Francisco Bay Area,
            with specialized training in:
          </p>
          <ul className="max-w-2xl mx-auto space-y-5">
            {[
              "Newborn Behavioral Observations (NBO)",
              "Developmental + relational newborn care",
              "Holistic postpartum support",
              "New parent coaching",
              "High-acuity newborn care",
              "Feeding support + early lactation education",
              "Sleep shaping rooted in development, not conditioning",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 py-3 border-b border-taupe/20 last:border-b-0">
                <span className="text-clay mt-2 text-xs">&#9679;</span>
                <span className="text-cocoa/80 text-[17px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] text-center mt-16 max-w-2xl mx-auto">
            My approach blends evidence-based care with intuitive, identity-aligned support. I help you
            understand why your baby does what they do — and how to respond in ways that build secure
            attachment and confidence.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-36 font-sans">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Philosophy</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa max-w-3xl mx-auto">Postpartum is not a medical event — it's a rite of passage.</h2>
          </div>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] text-center mb-12">I believe:</p>
          <ul className="max-w-2xl mx-auto space-y-5">
            {[
              "Babies arrive with wisdom.",
              "Parents deserve to feel supported, not overwhelmed.",
              "Lineage matters.",
              "Identity matters.",
              "The home environment shapes the nervous system.",
              "Care must be relational, not transactional.",
              "Families thrive when they feel seen, not managed.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 py-3 border-b border-taupe/20 last:border-b-0">
                <span className="text-clay mt-2 text-xs">&#9679;</span>
                <span className="text-cocoa/80 text-[17px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl leading-relaxed text-center mt-16 font-serif italic text-cocoa max-w-2xl mx-auto">
            My work is to help you feel rooted, confident, and connected — to your baby, to yourself,
            and to the lineage you're continuing.
          </p>
        </div>
      </section>

      {/* INVITATION / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center font-sans">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Invitation</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">You don't have to navigate this beginning alone.</h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for support that honors who you are and the family you're becoming, I'd be honored to walk with you.
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
