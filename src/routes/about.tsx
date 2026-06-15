import { createFileRoute, Link } from "@tanstack/react-router";
import aboutAsset from "@/assets/about-ashlee-reflection.jpg.asset.json";
import walkingAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
const aboutImg = aboutAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ashlee McKenzie — Nurture The Roots™" },
      { name: "description", content: "Ashlee McKenzie is a postpartum doula, newborn care specialist, and family coach with 16+ years of lineage-rooted practice in San Francisco." },
      { property: "og:title", content: "About Ashlee McKenzie" },
      { property: "og:description", content: "Postpartum doula, newborn care specialist, and family coach." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">About</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Hi, I'm Ashlee McKenzie.</h1>
          <p className="mt-5 font-serif italic text-xl text-earth/80">
            Certified Postpartum Doula &bull; Newborn Care Specialist &bull; New Parent Support Coach
          </p>
        </div>
      </section>

      {/* HERO IMAGE + INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-[5fr_7fr] gap-10 md:gap-16 items-start">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt="Ashlee McKenzie standing near a sunlit window, her reflection visible in the glass, warm and grounded"
              loading="lazy"
              width={1280}
              height={1920}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 text-lg text-earth/80 leading-relaxed">
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
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-[7fr_5fr] gap-10 md:gap-16 items-center">
          <div className="space-y-6 text-lg text-earth/80 leading-relaxed order-2 md:order-1">
            <div className="uppercase tracking-[0.28em] text-xs text-clay">My Story</div>
            <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">
              Your story, your becoming
            </h2>
            <p>
              My path into postpartum work wasn't a straight line — it was a calling that revealed
              itself through years of being invited into the quiet, sacred spaces where life begins.
              I've always been drawn to the subtle language of newborns: the way they communicate
              through movement, breath, and presence long before words arrive.
            </p>
            <p>
              Over the years, I've supported hundreds of families across the Bay Area, each with their
              own histories, cultures, and ways of loving. What I've learned is simple and universal:
            </p>
            <p className="font-serif italic text-cocoa text-xl">
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
          <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <img
              src={walkingAsset.url}
              alt="Ashlee walking down a sunlit alley, smiling warmly, grounded and approachable"
              loading="lazy"
              width={1280}
              height={1920}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW I SHOW UP */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">How I Show Up</div>
            <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">Walking with you, at your own pace.</h2>
          </div>
          <div className="space-y-6 text-lg text-earth/80 leading-relaxed">
            <p>
              My presence is calm, grounded, and attuned. I move slowly. I listen deeply. I help you
              understand your baby's cues, rhythms, and communication so you can feel confident in your
              own instincts.
            </p>
            <p className="text-cocoa font-medium">Parents often tell me:</p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                "You made our home feel peaceful again.",
                "You helped us understand our baby in a way no book ever could.",
                "You held us, not just the baby.",
              ].map((quote, i) => (
                <div key={i} className="bg-background/60 rounded-xl p-6 text-center">
                  <p className="font-serif italic text-cocoa text-lg leading-relaxed">"{quote}"</p>
                </div>
              ))}
            </div>
            <p className="pt-4">
              This is the heart of my work — relational care that honors your nervous system, your
              identity, and your family's unique dynamic.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BACKGROUND */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Professional Background</div>
            <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">Experience & Training</h2>
          </div>
          <p className="text-lg text-earth/80 leading-relaxed text-center mb-12">
            I bring over sixteen years of experience supporting families in the San Francisco Bay Area,
            with specialized training in:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Newborn Behavioral Observations (NBO)",
              "Developmental + relational newborn care",
              "Holistic postpartum support",
              "New parent coaching",
              "High-acuity newborn care",
              "Feeding support + early lactation education",
              "Sleep shaping rooted in development, not conditioning",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-cream/40 rounded-xl p-5">
                <span className="text-clay mt-1">&bull;</span>
                <span className="text-earth/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-earth/80 leading-relaxed text-center mt-12">
            My approach blends evidence-based care with intuitive, identity-aligned support. I help you
            understand why your baby does what they do — and how to respond in ways that build secure
            attachment and confidence.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-soft-gradient">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Philosophy</div>
            <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">Postpartum is not a medical event — it's a rite of passage.</h2>
          </div>
          <p className="text-lg text-earth/80 leading-relaxed text-center mb-10">I believe:</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Babies arrive with wisdom.",
              "Parents deserve to feel supported, not overwhelmed.",
              "Lineage matters.",
              "Identity matters.",
              "The home environment shapes the nervous system.",
              "Care must be relational, not transactional.",
              "Families thrive when they feel seen, not managed.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-background/50 rounded-xl p-5">
                <span className="text-clay mt-1">&bull;</span>
                <span className="text-earth/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-earth/80 leading-relaxed text-center mt-12 font-serif italic text-cocoa">
            My work is to help you feel rooted, confident, and connected — to your baby, to yourself,
            and to the lineage you're continuing.
          </p>
        </div>
      </section>

      {/* INVITATION / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Invitation</div>
          <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">You don't have to navigate this beginning alone.</h2>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            If you're craving clarity, calm, and attuned support, I'd love to walk with you through this season.
          </p>
          <div className="mt-10">
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
