import { createFileRoute, Link } from "@tanstack/react-router";
import blogImageAsset from "@/assets/approach-2.jpeg.asset.json";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Nurture the Roots Blog — Fourth Trimester Reflections" },
      {
        name: "description",
        content:
          "Warm, grounded writing for new parents navigating the fourth trimester — reflections, guidance, and identity-aligned postpartum support.",
      },
      { property: "og:title", content: "Nurture the Roots Blog" },
      {
        property: "og:description",
        content:
          "Reflections, guidance, and identity-aligned support for the fourth trimester.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/blog" },
      { property: "og:image", content: blogImageAsset.url },
    ],
    links: [
      { rel: "canonical", href: "https://nurturetheroots.co/blog" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Nurture the Roots Blog",
          url: "https://nurturetheroots.co/blog",
          description:
            "Warm, grounded writing for new parents navigating the fourth trimester — reflections, guidance, and identity-aligned postpartum support.",
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

const featuredPosts = [
  {
    title: "What Is a Postpartum Doula?",
    excerpt:
      "A warm guide to understanding what a postpartum doula does, how they differ from other caregivers, and why identity-aligned care matters in the fourth trimester.",
    href: "/blog/what-is-a-postpartum-doula",
  },
  {
    title: "The Sacred Pause of the Fourth Trimester",
    excerpt:
      "A reflection on slowing down, softening expectations, and meeting yourself with tenderness in the weeks after birth.",
  },
  {
    title: "Reading Your Newborn's Cues",
    excerpt:
      "How attunement begins long before words — gentle ways to recognize what your baby is telling you, from the very first days.",
  },
];

const categories = [
  "Fourth Trimester",
  "Newborn Cues & Development",
  "Identity & Postpartum Transitions",
  "Lineage & Ancestral Support",
  "Feeding & Nourishment",
  "Sleep & Rhythms",
  "Home Environment & Nervous System",
  "Personal Essays",
];

function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <p className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Nurture the Roots Blog
          </h1>
          <div className="mt-10 space-y-5 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>Warm, grounded writing for new parents navigating the fourth trimester.</p>
            <p>
              Here you'll find reflections, guidance, and identity-aligned support
              rooted in lineage, attunement, and developmental understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Featured</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">Featured Writing</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.title}
                className="bg-cream/50 border border-taupe/25 rounded-2xl p-8 md:p-10 flex flex-col"
              >
                <h3 className="font-serif text-xl md:text-2xl leading-[1.2] text-cocoa">{post.title}</h3>
                <p className="mt-5 text-[15px] text-cocoa/75 leading-[1.8] flex-1">
                  {post.excerpt}
                </p>
                {post.href ? (
                  <Link
                    to={post.href}
                    className="mt-8 self-start text-sm uppercase tracking-[0.22em] text-clay hover:text-cocoa transition-colors"
                  >
                    Read More →
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="mt-8 self-start text-sm uppercase tracking-[0.22em] text-clay hover:text-cocoa transition-colors"
                  >
                    Read More →
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-blush/40 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Topics</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">Explore Topics</h2>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <li key={cat}>
                <span className="inline-block rounded-full border border-taupe/50 bg-background px-5 py-2 text-sm text-cocoa/80 hover:bg-blush hover:text-cocoa transition-colors cursor-default">
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Archive</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">All Posts</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <article className="rounded-2xl bg-blush/50 border border-taupe/25 p-10 md:p-14">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-clay mb-3">Fourth Trimester · June 2026</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-cocoa">
                    <Link to="/blog/what-is-a-postpartum-doula" className="hover:text-earth transition-colors">
                      What Is a Postpartum Doula?
                    </Link>
                  </h3>
                  <p className="mt-3 text-[15px] text-cocoa/80 leading-[1.8] max-w-xl">
                    A warm guide to understanding what a postpartum doula does, how they differ from other caregivers, and why identity-aligned care matters in the fourth trimester.
                  </p>
                </div>
                <Link
                  to="/blog/what-is-a-postpartum-doula"
                  className="inline-flex items-center rounded-full border border-taupe/70 px-5 py-2 text-sm text-cocoa hover:bg-blush transition-colors shrink-0"
                >
                  Read post
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Want Support Beyond the Blog?
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're craving attuned, identity-aligned care during your fourth
            trimester, I'd love to support your family.
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
          >
            Schedule a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
