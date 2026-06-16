import { createFileRoute, Link } from "@tanstack/react-router";
import mediaImageAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
import teachingResponsive from "@/assets/branding-photos-53.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { MediaEmbeds } from "@/components/integrations/MediaEmbeds";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Press — Nurture The Roots™" },
      { name: "description", content: "Media appearances, speaking topics, and press inquiries for Ashlee McKenzie — postpartum doula, newborn care specialist, and founder of Nurture the Roots." },
      { property: "og:title", content: "Media & Press — Nurture The Roots™" },
      { property: "og:description", content: "Expert voice on postpartum care, newborn development, identity, and lineage-rooted support." },
      { property: "og:url", content: "https://nurturetheroots.co/media" },
      { property: "og:image", content: mediaImageAsset.url },
    ],
    links: [
      { rel: "canonical", href: "https://nurturetheroots.co/media" },
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
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Media</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">Media &amp; Press</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
          <p className="text-[17px] text-cocoa/80 leading-[1.85]">
            I'm honored to share my work, philosophy, and expertise with communities, publications,
            and organizations who are expanding the conversation around postpartum care, newborn
            development, identity, and lineage.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85]">
            My voice centers attunement, relational care, and the emotional landscape of early
            parenthood. If you're seeking a grounded, thoughtful perspective on the fourth trimester,
            I'd love to connect.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — in the conversation */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-16 md:pb-20">
          <div className="mx-auto overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/4] sm:aspect-[4/3] max-w-2xl">
            <ResponsiveImage
              source={teachingResponsive}
              alt="Ashlee reading aloud from a book to two parents during an attentive postpartum education session in a sunlit living room"
              sizes="(min-width: 768px) 672px, 100vw"
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
        </div>
      </section>

      {/* FEATURED APPEARANCES */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Featured Appearances</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">In the Conversation</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={i} className="bg-cream/50 rounded-2xl p-8 md:p-10 border border-taupe/25 text-center">
                <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">Feature</div>
                <h3 className="font-serif text-xl leading-tight text-cocoa mb-4">{feature.title}</h3>
                <p className="text-[15px] text-cocoa/75 leading-[1.8]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIKTOK + YOUTUBE EMBEDS */}
      <MediaEmbeds />

      {/* TOPICS I SPEAK ON */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Expertise</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">Areas of Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {topics.map((topic, i) => (
              <div key={i} className="flex items-start gap-3 bg-background/60 border border-taupe/25 rounded-xl p-5">
                <span className="text-clay mt-1">&bull;</span>
                <span className="text-cocoa/80 leading-relaxed">{topic}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
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
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Media Bio</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa mb-10">Short Version</h2>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] text-left">
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
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Media Bio</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa mb-10">Full Version</h2>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] text-left">
            Ashlee McKenzie is a postpartum specialist, newborn care expert, and the founder of Nurture
            the Roots — a practice dedicated to identity-aligned, lineage-rooted support for new parents.
            With over sixteen years of experience, Ashlee brings a deeply relational, developmentally
            informed approach to the fourth trimester, helping families understand their newborns,
            regulate their nervous systems, and navigate the profound identity shifts of early parenthood.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] text-left">
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
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Recognition</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">Projects &amp; Recognition</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {recognition.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-cream/50 border border-taupe/25 rounded-xl p-5">
                <span className="text-clay mt-1">&bull;</span>
                <span className="text-cocoa/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
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
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Media Inquiries</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">Let's Connect</h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            For interviews, collaborations, speaking engagements, or written contributions, please reach
            out directly.
          </p>
          <p className="mt-4 text-[17px]">
            <a
              href="mailto:ashleemckenzie@nurturetheroots.co"
              className="text-cocoa hover:underline"
            >
              ashleemckenzie@nurturetheroots.co
            </a>
          </p>
          <div className="mt-12">
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
