import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Press — Nurture The Roots™" },
      { name: "description", content: "Media appearances, speaking topics, and press inquiries for Ashlee McKenzie — postpartum doula, newborn care specialist, and founder of Nurture the Roots." },
      { property: "og:title", content: "Media & Press — Nurture The Roots™" },
      { property: "og:description", content: "Expert voice on postpartum care, newborn development, identity, and lineage-rooted support." },
    ],
  }),
  component: MediaPage,
});

const topics = [
  "Identity-Aligned Postpartum Care™",
  "Newborn cues, communication & developmental rhythms",
  "The fourth trimester as a rite of passage",
  "Nervous system support for new parents",
  "Lineage, ancestry & postpartum identity",
  "Relational newborn care & secure attachment",
  "Feeding support (chestfeeding, bottle feeding, combination feeding)",
  "Sleep shaping rooted in development, not conditioning",
  "Creating supportive home environments for newborns",
  "The emotional landscape of becoming a parent",
];

const recognition = [
  "Founder of Nurture the Roots",
  "16+ years supporting families across the Bay Area",
  "Specialist in newborn cues, developmental rhythms, and relational care",
  "Creator of Identity-Aligned Care™, Ancestral-Rooted Support™, and Sovereign Family Systems™ frameworks",
  "Winner of DEIJ Hackathon (Overall + Gender Equality tracks) for Vela (pre-launch research project)",
];

function MediaPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Media</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Media & Press</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 text-center">
          <p className="text-lg text-earth/80 leading-relaxed">
            I'm honored to share my work, philosophy, and expertise with communities, publications,
            and organizations who are expanding the conversation around postpartum care, newborn
            development, identity, and lineage.
          </p>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            My voice centers attunement, relational care, and the emotional landscape of early
            parenthood. If you're seeking a grounded, thoughtful perspective on the fourth trimester,
            I'd love to connect.
          </p>
        </div>
      </section>

      {/* FEATURED APPEARANCES */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Featured Appearances</div>
            <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">In the Conversation</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Coming Soon",
                description: "Future interviews, articles, or podcast features will appear here.",
              },
              {
                title: "Coming Soon",
                description: "This section will highlight media conversations about postpartum care, newborn cues, identity, and lineage-rooted support.",
              },
              {
                title: "Coming Soon",
                description: "As your brand grows, this space will showcase collaborations, panels, and expert contributions.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-cream/40 rounded-2xl p-8 border border-taupe/25 text-center">
                <div className="uppercase tracking-[0.2em] text-xs text-clay mb-3">Feature</div>
                <h3 className="text-xl leading-tight text-cocoa mb-3">{feature.title}</h3>
                <p className="text-sm text-earth/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS I SPEAK ON */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Expertise</div>
            <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">Areas of Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <div key={i} className="flex items-start gap-3 bg-background/60 rounded-xl p-5">
                <span className="text-clay mt-1">&bull;</span>
                <span className="text-earth/80">{topic}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/approach"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Learn About My Approach
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIA BIO (SHORT) */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Media Bio</div>
          <h2 className="text-3xl md:text-4xl leading-tight text-cocoa mb-8">Short Version</h2>
          <p className="text-lg text-earth/80 leading-relaxed">
            Ashlee McKenzie is a Certified Postpartum Doula, Newborn Care Specialist, and New Parent
            Support Coach with over sixteen years of experience supporting families across the San
            Francisco Bay Area. Her work blends evidence-based newborn care with identity-aligned,
            lineage-rooted support that honors the emotional, developmental, and relational landscape
            of early parenthood. Ashlee specializes in newborn cues, attuned care, and guiding parents
            through the fourth trimester with clarity, warmth, and grounded presence.
          </p>
        </div>
      </section>

      {/* MEDIA BIO (LONG) */}
      <section className="bg-soft-gradient">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Media Bio</div>
          <h2 className="text-3xl md:text-4xl leading-tight text-cocoa mb-8">Full Version</h2>
          <p className="text-lg text-earth/80 leading-relaxed">
            Ashlee McKenzie is a postpartum specialist, newborn care expert, and the founder of Nurture
            the Roots — a practice dedicated to identity-aligned, lineage-rooted support for new parents.
            With over sixteen years of experience, Ashlee brings a deeply relational, developmentally
            informed approach to the fourth trimester, helping families understand their newborns,
            regulate their nervous systems, and navigate the profound identity shifts of early parenthood.
          </p>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            Her work is grounded in the belief that postpartum is a sacred rite of passage, not a medical
            event. She blends Newborn Behavioral Observations (NBO), developmental guidance, and ancestral
            postpartum principles to create care that is warm, attuned, and deeply human. Ashlee is available
            for interviews, panels, podcasts, and written contributions on newborn development, postpartum
            identity, lineage, and the emotional landscape of becoming a family.
          </p>
        </div>
      </section>

      {/* PAST PROJECTS & RECOGNITION */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Recognition</div>
            <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">Projects & Recognition</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {recognition.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-cream/40 rounded-xl p-5">
                <span className="text-clay mt-1">&bull;</span>
                <span className="text-earth/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Learn About My Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT FOR MEDIA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Media Inquiries</div>
          <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">Let's Connect</h2>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            For interviews, collaborations, speaking engagements, or written contributions, please reach
            out directly.
          </p>
          <p className="mt-4 text-lg">
            <a
              href="mailto:ashleemckenzie@nurturetheroots.co"
              className="text-cocoa hover:underline"
            >
              ashleemckenzie@nurturetheroots.co
            </a>
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
