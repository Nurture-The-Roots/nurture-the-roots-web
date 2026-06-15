import { createFileRoute, Link } from "@tanstack/react-router";
import approachImg from "@/assets/approach.jpg";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "My Approach — The Nurture The Roots™ Postpartum Framework" },
      { name: "description", content: "A lineage-rooted, identity-aligned, developmental model for the fourth trimester built across fifteen years of postpartum practice." },
      { property: "og:title", content: "The Nurture The Roots™ Postpartum Framework" },
      { property: "og:description", content: "A lineage-rooted, identity-aligned, developmental model for the fourth trimester." },
      { property: "og:image", content: approachImg },
    ],
  }),
  component: ApproachPage,
});

const pillars = [
  {
    n: "I",
    title: "Identity-Aligned Care™",
    body: "Care that meets you as your whole self — your story, your culture, your becoming as a parent.",
    practices: ["Identity Mapping™", "Emotional Landscape Reading™", "Attunement as a Practice™"],
  },
  {
    n: "II",
    title: "Ancestral-Rooted Care™",
    body: "Honoring the lineages — chosen and inherited — that shape how your family rests, eats, and tends.",
    practices: ["Rhythms Over Routines™", "Care as Ceremony™", "Lineage Continuity™"],
  },
  {
    n: "III",
    title: "Developmental & Relational Guidance™",
    body: "Reading your baby's cues with you, and tending the relationship that's forming between you both.",
    practices: ["Cue-Based Care™", "Relational Regulation™", "Threshold Navigation™"],
  },
  {
    n: "IV",
    title: "Sovereign Family Systems™",
    body: "Plans, ecosystems, and continuity that keep your family in authorship of its own beginning.",
    practices: ["Sovereign Postpartum Planning™", "Support Ecosystem Building™", "Integration & Continuity™"],
  },
];

function ApproachPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">My Approach</div>
          <h1 className="text-4xl md:text-5xl leading-tight">
            The Nurture The Roots<span className="align-super text-[0.4em] ml-1">™</span> Postpartum Framework
          </h1>
          <p className="mt-6 font-serif italic text-xl text-earth/80">
            A lineage-rooted, identity-aligned, developmental model for the fourth trimester.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="overflow-hidden rounded-2xl">
              <img src={approachImg} alt="Postpartum ceremonial textures" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl leading-snug">A framework that holds you, your baby, and your lineage.</h2>
              <p className="mt-6 text-earth/80 leading-relaxed">
                The fourth trimester is not a transaction. It is a developmental window —
                for the baby, for the parent, for the family. The Nurture The Roots™
                Framework gathers four pillars and twelve practices into a steady,
                relational way of caring for what is being born — including you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blush/60">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 space-y-10">
          {pillars.map((p) => (
            <article key={p.title} className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 rounded-2xl bg-background/70 p-8 md:p-10 border border-taupe/25">
              <div className="font-serif text-5xl text-clay leading-none">{p.n}</div>
              <div>
                <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-4 text-earth/80 leading-relaxed">{p.body}</p>
                <ul className="mt-6 grid sm:grid-cols-3 gap-3">
                  {p.practices.map((pr) => (
                    <li key={pr} className="rounded-lg border border-taupe/30 bg-blush/70 px-4 py-3 text-sm text-cocoa">
                      {pr}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-soft-gradient">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl">Ready to begin?</h2>
          <p className="mt-5 text-earth/75 leading-relaxed">
            Every family arrives differently. A consultation is the first quiet
            conversation — a place to be heard before anything is planned.
          </p>
          <div className="mt-9">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}