import { createFileRoute, Link } from "@tanstack/react-router";
import bandAsset from "@/assets/branding-54.jpeg.asset.json";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops & Education — Nurture The Roots™" },
      { name: "description", content: "Workshops and the Rooted Fourth Trimester Course — identity, lineage, newborn communication, rhythm, regulation, and family systems for parents and professionals." },
      { property: "og:title", content: "Workshops & Education — Nurture The Roots™" },
      { property: "og:description", content: "Workshops on identity, lineage, newborn communication, rhythm, and family systems." },
      { property: "og:url", content: "https://nurturetheroots.co/workshops" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/workshops" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "The Rooted Fourth Trimester Course",
          description: "A six‑module course rooted in the Nurture The Roots™ Postpartum Framework — identity, lineage, newborn communication, rhythms, ceremony, and sovereign family systems.",
          provider: { "@type": "Organization", name: "Nurture The Roots LLC", url: "https://nurturetheroots.co" },
        }),
      },
    ],
  }),
  component: WorkshopsPage,
});

const TM = () => <span className="align-super text-[0.4em] ml-0.5">™</span>;

const workshops = [
  "The Rooted Fourth Trimester",
  "Rhythms Over Routines",
  "Reading Your Newborn",
  "Postpartum Identity Mapping",
  "Care as Ceremony",
  "Building Your Postpartum Ecosystem",
  "Sovereign Postpartum Planning",
  "Newborn Cues + Parent Confidence",
  "The Relational Newborn",
  "Thresholds of the Fourth Trimester",
];

const modules = [
  { n: "One", title: "The Root System", body: "Identity, lineage, and values." },
  { n: "Two", title: "The Communicating Baby", body: "Newborn cues, states, and relational observation." },
  { n: "Three", title: "Rhythms and Regulation", body: "Daily flow, sleep, feeding, nervous system support." },
  { n: "Four", title: "Care as Ceremony", body: "Ritual, presence, ancestral care, and meaning‑making." },
  { n: "Five", title: "Sovereign Family Systems", body: "Planning, boundaries, support, and continuity." },
  { n: "Six", title: "Integration", body: "Reflection, confidence, transition, and next season." },
];

function WorkshopsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Workshops + Education</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Workshops + Education
          </h1>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            Postpartum through the lenses of identity, lineage, newborn communication, rhythm, regulation, and family systems.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
          <p className="text-[17px] text-cocoa/80 leading-[1.85]">
            Nurture The Roots<TM /> workshops help parents and professionals understand postpartum through a lineage‑rooted, identity‑aligned, developmental, and relational lens.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — learning together */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-4 md:pb-10">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={bandAsset.url}
              alt="Ashlee leading a warm postpartum education session with a family — two parents and a baby learning together"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WORKSHOP TITLES */}
      <section className="bg-blush/50">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Workshop Offerings</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Ten grounded conversations
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {workshops.map((title) => (
              <li
                key={title}
                className="rounded-xl border border-taupe/25 bg-sand/70 px-5 py-5 text-cocoa font-serif text-lg leading-snug"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COURSE */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Signature Course</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The Rooted Fourth Trimester Course
            </h2>
            <p className="mt-6 font-serif italic text-lg text-cocoa/75 leading-[1.5]">
              Six modules, woven through the four pillars of the framework.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {modules.map((m) => (
              <article
                key={m.n}
                className="rounded-2xl border border-taupe/25 bg-blush/40 p-8"
              >
                <div className="uppercase tracking-[0.22em] text-xs text-clay mb-3">Module {m.n}</div>
                <h3 className="font-serif text-2xl text-cocoa leading-snug mb-3">{m.title}</h3>
                <p className="text-cocoa/80 leading-[1.8] text-[15px]">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Join the workshop list
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Workshops and course cohorts open in seasonal rounds. Reach out to be notified when the next round begins.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}