import { createFileRoute, Link } from "@tanstack/react-router";
import blogImageAsset from "@/assets/approach-2.jpeg.asset.json";

export const Route = createFileRoute("/blog")({
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
      { property: "og:url", content: "https://nurture-the-roots-web.lovable.app/blog" },
      { property: "og:image", content: blogImageAsset.url },
    ],
    links: [
      { rel: "canonical", href: "https://nurture-the-roots-web.lovable.app/blog" },
    ],
  }),
  component: BlogPage,
});

const featuredPosts = [
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
  {
    title: "Becoming: Identity in the Postpartum Season",
    excerpt:
      "On the quiet, layered transformation of becoming a parent — and how to honor every version of yourself along the way.",
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
    <div className="bg-background text-cocoa">
      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-clay mb-6">Journal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cocoa">
            Nurture the Roots Blog
          </h1>
          <div className="mt-8 space-y-4 text-earth/80 text-lg leading-relaxed max-w-2xl mx-auto">
            <p>Warm, grounded writing for new parents navigating the fourth trimester.</p>
            <p>
              Here you'll find reflections, guidance, and identity-aligned support
              rooted in lineage, attunement, and developmental understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.3em] text-xs text-clay mb-4">Featured</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cocoa">Featured Writing</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.title}
                className="bg-cream/50 border border-taupe/20 rounded-2xl p-8 flex flex-col"
              >
                <h3 className="font-serif text-xl text-cocoa">{post.title}</h3>
                <p className="mt-4 text-sm text-earth/80 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  className="mt-6 self-start text-sm uppercase tracking-[0.2em] text-clay hover:text-cocoa transition-colors"
                >
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-cream/30">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-clay mb-4">Topics</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cocoa">Explore Topics</h2>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <li key={cat}>
                <span className="inline-block rounded-full border border-taupe/50 bg-background px-5 py-2 text-sm text-earth hover:bg-blush hover:text-cocoa transition-colors cursor-default">
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.3em] text-xs text-clay mb-4">Archive</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cocoa">All Posts</h2>
            <p className="mt-4 text-earth/70 max-w-xl mx-auto">
              New reflections are added regularly. Published writing will appear here in
              chronological order.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-taupe/40 bg-cream/30 p-16 text-center">
            <p className="font-serif text-xl text-cocoa">Writing in progress</p>
            <p className="mt-3 text-sm text-earth/70 max-w-md mx-auto">
              The first essays are being carefully composed. Check back soon, or reach
              out to be notified when new pieces are published.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-full border border-taupe/70 px-5 py-2 text-sm text-cocoa hover:bg-blush transition-colors"
            >
              Stay in touch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cocoa">
            Want Support Beyond the Blog?
          </h2>
          <p className="mt-6 text-earth/80 text-lg leading-relaxed">
            If you're craving attuned, identity-aligned care during your fourth
            trimester, I'd love to support your family.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-cocoa text-sand px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-earth transition-colors"
          >
            Schedule a consultation
          </Link>
        </div>
      </section>
    </div>
  );
}