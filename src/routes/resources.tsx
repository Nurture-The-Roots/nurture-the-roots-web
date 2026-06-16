import { createFileRoute, Link } from "@tanstack/react-router";
import bandAsset from "@/assets/branding-56.jpeg.asset.json";
import babyFootMassageWideAsset from "@/assets/baby-foot-massage-wide.jpeg.asset.json";
import bandResponsive from "@/assets/branding-56.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources for a Rooted Fourth Trimester — Nurture The Roots™" },
      { name: "description", content: "Worksheets, reflections, articles, and parent‑friendly resources to support identity, rhythm, relationship, and grounded postpartum care." },
      { property: "og:title", content: "Resources for a Rooted Fourth Trimester" },
      { property: "og:description", content: "Grounded worksheets, reflections, and editorial writing for the fourth trimester." },
      { property: "og:url", content: "https://nurturetheroots.co/resources" },
    ],
    links: [
      { rel: "canonical", href: "https://nurturetheroots.co/resources" },
    ],
  }),
  component: ResourcesPage,
});

const explore = [
  {
    to: "/blog" as const,
    eyebrow: "Blog",
    title: "Editorial writing on the fourth trimester",
    body: "Articles on postpartum care, newborn rhythms, identity-rooted parenting, and grounded guidance.",
    cta: "Read the blog",
  },
  {
    to: "/media" as const,
    eyebrow: "Media",
    title: "Interviews, features, and brand visuals",
    body: "Press appearances, conversations, photography, and brand-aligned visuals from Nurture The Roots™.",
    cta: "View media",
  },
  {
    to: "/faq" as const,
    eyebrow: "FAQ",
    title: "Clear answers to common questions",
    body: "Parent-friendly answers about postpartum doula support, newborn care, scheduling, and what to expect.",
    cta: "Browse the FAQ",
  },
];

const worksheets = [
  { title: "Postpartum Identity Map", body: "A reflection to name who you are becoming as a parent." },
  { title: "Emotional Landscape Reflection", body: "A practice for reading the emotional field of your home." },
  { title: "Baby Cue Observation Sheet", body: "Track and learn your baby's cues, states, and signals." },
  { title: "Family Rhythm Map", body: "Map the rhythms that support your family's grounded days." },
  { title: "Care as Ceremony Ritual Builder", body: "Turn daily care tasks into grounding, meaningful rituals." },
  { title: "Lineage Continuity Reflection", body: "Honor the ancestral significance of your baby's arrival." },
  { title: "Cue‑Based Care Tracker", body: "A gentle tool for following feeding, sleep, and regulation cues." },
  { title: "Co‑Regulation Practice Sheet", body: "Simple practices for co‑regulating with your baby." },
  { title: "Threshold Navigation Map", body: "A guide for the emotional and developmental shifts ahead." },
  { title: "Sovereign Postpartum Plan", body: "A planning template rooted in identity and lived reality." },
  { title: "Support Ecosystem Map", body: "Build the sustainable support network your family needs." },
  { title: "Fourth Trimester Integration Reflection", body: "Reflect, integrate, and step into the next season." },
];

const reflections = [
  "Who were you before this baby arrived?",
  "What parts of you feel changed?",
  "What parts of you feel more alive?",
  "What expectations are you releasing?",
  "What is your baby already communicating?",
  "What rhythms are emerging naturally?",
  "What kind of support would help your family feel more rooted?",
  "What kind of ancestor are you becoming?",
];

function ResourcesPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Resources</div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-cocoa">
            Resources for a rooted fourth trimester
          </h1>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
            These resources support families in slowing down, listening deeply, and building postpartum care that honors identity, rhythm, relationship, and support.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — quiet tending */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={babyFootMassageWideAsset.url}
              alt="A baby resting on a bed while receiving gentle foot care, reflecting the quiet, grounded pace of fourth-trimester tending"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_50%]"
            />
          </div>
        </div>
      </section>

      {/* WORKSHEETS */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          {/* GROUNDING INTRO + HOW TO USE + WHO FOR */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 md:mb-20">
            <div className="rounded-2xl border border-taupe/25 bg-sand/60 p-10">
              <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">How to Use These Resources</div>
              <p className="text-[16px] text-cocoa/75 leading-[1.85]">
                {/* [PLACEHOLDER: 2–3 sentences guiding how to move through these resources, in your voice.] */}
              </p>
            </div>
            <div className="rounded-2xl border border-taupe/25 bg-blush/40 p-10">
              <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">Who These Are For</div>
              <p className="text-[16px] text-cocoa/75 leading-[1.85]">
                {/* [PLACEHOLDER: 2–3 sentences naming who these resources will serve.] */}
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Worksheets &amp; Reflections</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Twelve grounded companions
            </h2>
            <p className="mt-6 font-serif italic text-lg text-cocoa/75 leading-[1.5]">
              New downloadable resources are being prepared with care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {worksheets.map((w) => (
              <article
                key={w.title}
                className="rounded-2xl border border-taupe/25 bg-blush/40 p-7 flex flex-col"
              >
                <h3 className="font-serif text-xl text-cocoa leading-snug mb-3">{w.title}</h3>
                <p className="text-cocoa/75 leading-[1.75] text-[14px] flex-1">{w.body}</p>
                <p className="mt-3 text-[13px] text-cocoa/60 leading-[1.7] italic font-serif">
                  {/* [PLACEHOLDER: One expanded description line in your voice.] */}
                </p>
                <span className="mt-6 inline-flex w-fit items-center rounded-full border border-taupe/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cocoa/70">
                  Coming Soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SIGNATURE REFLECTIONS */}
      <section className="bg-blush/50">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Signature Reflections</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Questions to sit with
            </h2>
          </div>
          <ul className="space-y-4">
            {reflections.map((q) => (
              <li
                key={q}
                className="rounded-xl border border-taupe/25 bg-sand/70 px-6 py-5 font-serif italic text-lg md:text-xl text-cocoa/85 leading-[1.5]"
              >
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Explore More</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Reading, conversations, and answers
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
          {explore.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-2xl border border-taupe/30 bg-blush/50 p-8 md:p-10 hover:bg-blush transition-colors flex flex-col"
            >
              <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">
                {item.eyebrow}
              </div>
              <h2 className="font-serif text-2xl md:text-[1.75rem] leading-[1.2] text-cocoa">
                {item.title}
              </h2>
              <p className="mt-5 text-[15px] text-cocoa/75 leading-[1.8] flex-1">
                {item.body}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-clay group-hover:text-cocoa transition-colors">
                {item.cta}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <p className="mb-10 font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
            {/* [PLACEHOLDER: A short closing reflection in your voice before the CTA.] */}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Receive new resources as they're released
          </h2>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Stay in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}