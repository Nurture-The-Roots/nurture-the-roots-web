import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "The Nurture The Roots™ Blog — Newborn Communication & Developmental Guidance" },
      {
        name: "description",
        content:
          "Developmental guidance, newborn communication, and grounded support for the earliest weeks — clear, evidence‑based writing to help you understand your baby and your own transition.",
      },
      { property: "og:title", content: "The Nurture The Roots™ Blog" },
      {
        property: "og:description",
        content:
          "Developmental guidance, newborn communication, and grounded support for the earliest weeks of parenthood.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/blog" },
      { property: "og:image", content: "/images/consultation-planning-session.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The Nurture The Roots™ Blog",
          url: "https://nurturetheroots.co/blog",
          description:
            "Developmental guidance, newborn communication, and grounded support for the earliest weeks of parenthood.",
          publisher: {
            "@type": "Organization",
            name: "Nurture The Roots™",
            url: "https://nurturetheroots.co/",
          },
        }),
      },
    ],
  }),
  component: BlogPage,
});

const topics = [
  {
    name: "Newborn Communication",
    body: "How babies express themselves through cues, states, rhythms, and patterns — and how to respond with confidence.",
  },
  {
    name: "Developmental Guidance",
    body: "Evidence‑based explanations of early regulation, state transitions, feeding rhythms, sleep patterns, and the first months of development.",
  },
  {
    name: "Fourth Trimester Support",
    body: "Identity shifts, emotional landscape, partner dynamics, and the lived realities of early parenthood.",
  },
  {
    name: "Practical Tools",
    body: "Simple, grounded strategies for soothing, feeding, sleep, and daily flow — always responsive, never prescriptive.",
  },
  {
    name: "Thought Leadership",
    body: "Essays and reflections on postpartum care, continuity, and the future of newborn + family support.",
  },
];

const featuredCategories = [
  "Newborn Cues & States",
  "Feeding & Early Rhythms",
  "Sleep Without Schedules",
  "Identity & Transition",
  "Partner Support",
  "Systems & Sustainability",
];

const placeholderCards = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  title: "Coming Soon",
  subtitle: "A grounded, evidence‑based article is on its way.",
}));

function BlogPage() {
  return (
    <div className="blog-page">
      {/* HERO */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-24 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Blog</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            The Nurture The Roots<sup className="align-super text-[0.4em] ml-0.5">™</sup> Blog
          </h1>
          <h2 className="mt-8 font-serif text-2xl md:text-3xl font-medium text-cocoa/90 leading-[1.3] max-w-2xl mx-auto">
            Developmental guidance, newborn communication, and grounded support for the earliest
            weeks
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            This blog is an extension of my work with families — a place where I translate newborn
            communication, developmental science, and fourth‑trimester experience into clear, usable
            insights.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Every article is written to help you understand your baby, your own becoming, and the
            rhythms that hold early parenthood.
          </p>
        </div>
      </section>

      {/* IMAGE — soothing moment */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] max-w-3xl mx-auto">
            <img
              src="/images/ashlee-brand-0025.jpg"
              alt="Ashlee McKenzie soothing a baby against her shoulder in a calm, sunlit nursery"
              loading="lazy"
              decoding="async"
              width="1200"
              height="800"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL FIND HERE */}
      <section className="section bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              What You'll Find Here
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              What You'll Find Here
            </h2>
          </div>
          <div className="space-y-5 max-w-2xl mx-auto">
            {topics.map((topic) => (
              <div
                key={topic.name}
                className="rounded-2xl border border-taupe/25 bg-blush/40 p-8 md:p-10"
              >
                <h3 className="font-serif text-2xl text-cocoa leading-snug">{topic.name}</h3>
                <p className="mt-3 text-[16px] text-cocoa/75 leading-[1.85]">{topic.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FEATURED CATEGORIES */}
      <section className="section bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
            Featured Categories
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] text-cocoa mb-8">
            Featured Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {featuredCategories.map((cat) => (
              <span
                key={cat}
                className="inline-block rounded-full border border-taupe/40 bg-blush/40 px-6 py-2.5 text-sm text-cocoa/80 cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS BLOG EXISTS */}
      <section className="section bg-blush/40">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">
            Why This Blog Exists
          </div>
          <h2 className="sr-only">Why This Blog Exists</h2>
          <p className="text-[17px] text-cocoa/80 leading-[1.85]">
            Parents deserve information that is clear, evidence‑based, developmentally accurate, free
            of pressure, grounded in real life, and aligned with newborn communication. This blog is
            here to help you understand your baby — not to follow rules, but to build confidence
            through clarity.
          </p>
        </div>
      </section>

      {/* START READING */}
      <section className="section bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Start Reading</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Start Reading
            </h2>
            <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
              Browse the categories above or explore the latest articles below. If you're not sure
              where to begin, start with the topic that feels most relevant to your current season.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Link
                to="/resources"
                className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
              >
                Explore Resources
              </Link>
              <CalendlyButton className="button inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors">
                Schedule a Consultation
              </CalendlyButton>
            </div>
          </div>

          {/* LATEST ARTICLES — coming soon */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {placeholderCards.map((card) => {
              const alt = card.id % 2 === 0;
              return (
                <article
                  key={card.id}
                  className={`rounded-2xl border border-taupe/25 p-8 flex flex-col ${alt ? "bg-blush/40" : "bg-sand/50"}`}
                >
                  <h3 className="font-serif text-xl text-cocoa leading-snug">{card.title}</h3>
                  <p className="mt-3 text-[15px] text-cocoa/70 leading-[1.75] flex-1">
                    {card.subtitle}
                  </p>
                  <button
                    type="button"
                    disabled
                    className="mt-8 self-start inline-flex items-center rounded-full border border-taupe/40 px-5 py-2 text-xs uppercase tracking-[0.22em] text-cocoa/50 cursor-not-allowed"
                  >
                    Read More
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
