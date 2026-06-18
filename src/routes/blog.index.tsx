import { createFileRoute } from "@tanstack/react-router";
import blogImageAsset from "@/assets/approach-2.jpeg.asset.json";
import { SectionDivider } from "@/components/SectionDivider";
import { useState } from "react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Reflections & Resources — Nurture The Roots™" },
      {
        name: "description",
        content:
          "Writing from the intersections of identity, lineage, newborn communication, and the fourth trimester.",
      },
      { property: "og:title", content: "Reflections & Resources — Nurture The Roots™" },
      {
        property: "og:description",
        content:
          "Stories, guidance, and reflections for families moving through the earliest seasons of parenthood.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/blog" },
      { property: "og:image", content: blogImageAsset.url },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Reflections & Resources — Nurture The Roots™",
          url: "https://nurturetheroots.co/blog",
          description:
            "Writing from the intersections of identity, lineage, newborn communication, and the fourth trimester.",
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

const categories = [
  "Identity",
  "Lineage",
  "Newborn Communication",
  "Rhythm",
  "Postpartum Care",
  "Family Systems",
];

const placeholderCards = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: "Coming Soon",
  subtitle: "A grounded reflection is on its way.",
}));

function BlogPage() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Blog</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Reflections &amp; Resources
          </h1>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5] max-w-2xl mx-auto">
            Writing from the intersections of identity, lineage, newborn communication, and the
            fourth trimester.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            This space is a calm, grounded archive of stories, guidance, and reflections for
            families moving through the earliest seasons of parenthood.
          </p>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
            Featured Categories
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
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

      {/* FEATURED POST */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <div className="rounded-2xl border border-taupe/25 bg-sand/60 p-10 md:p-14 text-center">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">Featured</div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-cocoa">
              Coming Soon
            </h2>
            <p className="mt-4 font-serif italic text-lg text-cocoa/75 leading-[1.5]">
              A new reflection is being prepared with care.
            </p>
            <button
              type="button"
              disabled
              className="mt-8 inline-flex items-center rounded-full border border-taupe/40 px-6 py-3 text-sm uppercase tracking-[0.22em] text-cocoa/50 cursor-not-allowed"
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* BLOG GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* EMAIL SIGNUP */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <p className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
            Want to receive new reflections as they're published?
          </p>
          <p className="mt-5 text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            Join the mailing list for grounded writing on identity, lineage, and the fourth
            trimester.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 rounded-full border border-taupe/40 bg-background px-5 py-3.5 text-sm text-earth placeholder:text-earth/60 focus:outline-none focus:ring-2 focus:ring-clay/40"
            />
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
