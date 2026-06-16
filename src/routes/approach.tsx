import { createFileRoute, Link } from "@tanstack/react-router";
import approach1Asset from "@/assets/approach-1.jpeg.asset.json";
import approach2Asset from "@/assets/approach-2.jpeg.asset.json";
import approach3Asset from "@/assets/approach-3.jpeg.asset.json";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "My Approach — Nurture The Roots™" },
      { name: "description", content: "A warm, grounded, relational approach to postpartum care rooted in identity, lineage, attunement, and development." },
      { property: "og:title", content: "My Approach — Nurture The Roots™" },
      { property: "og:description", content: "A warm, grounded, relational approach to postpartum care rooted in identity, lineage, attunement, and development." },
      { property: "og:url", content: "https://nurture-the-roots-web.lovable.app/approach" },
      { property: "og:image", content: approach1Asset.url },
    ],
    links: [
      { rel: "canonical", href: "https://nurture-the-roots-web.lovable.app/approach" },
    ],
  }),
  component: ApproachPage,
});

const TM = () => <span className="align-super text-[0.4em] ml-0.5">™</span>;

type Pillar = {
  numeral: string;
  title: string;
  tagline: string;
  body: string;
  practices: { name: string; description: string }[];
  footer: string;
  image?: { src: string; alt: string };
};

const pillars: Pillar[] = [
  {
    numeral: "I",
    title: "Identity‑Aligned Care",
    tagline: "Postpartum begins with who you are becoming.",
    body: "Your identity matters. Your baby's identity matters. This pillar honors the emotional, relational, and personal transformation of early parenthood.",
    practices: [
      { name: "Identity Mapping", description: "understanding who you are becoming as a parent." },
      { name: "Emotional Landscape Reading", description: "attuning to the emotional field of your home." },
      { name: "Attunement as a Practice", description: "learning to read your baby's cues with confidence." },
    ],
    footer: "This is where your story, your identity, and your baby's needs meet.",
    image: { src: approach1Asset.url, alt: "Parent holding newborn beside a bassinet in a sunlit nursery" },
  },
  {
    numeral: "II",
    title: "Ancestral‑Rooted Care",
    tagline: "Care as ceremony. Care as lineage. Care as continuity.",
    body: "Your postpartum experience is part of a much older story — one carried by your ancestors and passed forward through you.",
    practices: [
      { name: "Rhythms Over Routines", description: "following your baby's natural rhythms instead of rigid schedules." },
      { name: "Care as Ceremony", description: "transforming daily care into grounding rituals." },
      { name: "Lineage Continuity", description: "honoring the ancestral significance of your baby's arrival." },
    ],
    footer: "This pillar is shaped by my Sinixt + Skoyelpi lineage and my Innate Postpartum Care training.",
    image: { src: approach2Asset.url, alt: "Doula tenderly attending to a baby on a changing table" },
  },
  {
    numeral: "III",
    title: "Developmental & Relational Guidance",
    tagline: "Newborns communicate from the beginning. You deserve to feel confident listening.",
    body: "This pillar blends developmental science with relational attunement so you can understand your baby's cues, needs, and communication from day one.",
    practices: [
      { name: "Cue‑Based Care", description: "following your baby's cues for feeding, sleep, and regulation." },
      { name: "Relational Regulation", description: "learning how your nervous system supports your baby's." },
      { name: "Threshold Navigation", description: "guiding you through the emotional and developmental shifts of the fourth trimester." },
    ],
    footer: "This pillar is informed by my NBO certification, APPPAH training, and 15+ years of high‑acuity newborn experience.",
    image: { src: approach3Asset.url, alt: "Engaging a baby with a wooden toy during developmental play" },
  },
  {
    numeral: "IV",
    title: "Sovereign Family Systems",
    tagline: "Families thrive when their systems honor their identity.",
    body: "This pillar helps you build a postpartum experience that reflects your values, your needs, and your lived reality — not external expectations.",
    practices: [
      { name: "Sovereign Postpartum Planning", description: "creating a plan that supports your identity and your baby's rhythms." },
      { name: "Support Ecosystem Building", description: "helping you build sustainable support around your family." },
      { name: "Integration & Continuity", description: "guiding you as you transition out of the fourth trimester with clarity and confidence." },
    ],
    footer: "This pillar reflects my coaching background, trauma‑aware training, and identity‑aligned philosophy.",
  },
];

function ApproachPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:pt-36 md:pb-20 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Approach</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            The Nurture The Roots<TM /> Postpartum Framework
          </h1>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.4]">
            A lineage‑rooted, identity‑aligned, developmental model for the fourth trimester.
          </p>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 md:pb-28">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={approach2Asset.url}
              alt="Ashlee gently attending to a newborn baby"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              Becoming a parent is a threshold — a place where identity, lineage, and new life meet.
              My approach is built to honor that threshold with depth, clarity, and care.
            </p>
            <p>
              After supporting more than 150 families over 15 years, I developed a sovereign
              postpartum framework that blends identity, ancestry, developmental science, and
              relational attunement. This is the foundation of how I support families through the
              fourth trimester.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS INTRO */}
      <section className="bg-blush/30">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">The Four Pillars</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            The Four Pillars of My Approach
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            Below are the four pillars of the Nurture The Roots<TM /> Postpartum Framework, each
            holding three practices that guide the way I support you and your baby.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      {pillars.map((p, i) => {
        const alt = i % 2 === 0;
        return (
          <section key={p.numeral} className={alt ? "bg-background" : "bg-blush/40"}>
            <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
              <div
                className={`rounded-2xl p-10 md:p-14 border border-taupe/25 ${
                  alt ? "bg-blush/50" : "bg-sand/70"
                }`}
              >
                {p.image && (
                  <div className="overflow-hidden rounded-xl mb-10 aspect-[4/3] md:aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
                    <img
                      src={p.image.src}
                      alt={p.image.alt}
                      loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">
                  Pillar {p.numeral}
                </div>
                <div className="flex items-baseline gap-5 mb-8">
                  <div className="font-serif text-5xl text-clay leading-none">{p.numeral}</div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa">
                    {p.title}
                    <TM />
                  </h2>
                </div>
                <p className="font-serif italic text-xl md:text-2xl text-cocoa/80 leading-[1.5] mb-8 max-w-2xl">
                  {p.tagline}
                </p>
                <p className="text-[17px] text-cocoa/80 leading-[1.85] mb-10 max-w-2xl">
                  {p.body}
                </p>
                <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">
                  Practices inside this pillar
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {p.practices.map((practice) => (
                    <div
                      key={practice.name}
                      className={`rounded-xl border border-taupe/25 px-5 py-5 text-cocoa ${
                        alt ? "bg-sand/60" : "bg-blush/70"
                      }`}
                    >
                      <div className="font-serif text-lg text-cocoa mb-2 leading-snug">
                        {practice.name}
                        <TM />
                      </div>
                      <p className="text-sm text-cocoa/75 leading-relaxed">{practice.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-cocoa/75 italic leading-[1.85] max-w-2xl">{p.footer}</p>
              </div>
            </div>
          </section>
        );
      })}

      {/* CLOSING / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            You don't have to navigate this beginning alone.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for support that aligns with your identity, your values, and the way your family moves through the world, I'd be honored to walk with you.
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
