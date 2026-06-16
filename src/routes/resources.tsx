import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Nurture The Roots™" },
      { name: "description", content: "Editorial articles, media features, and parent-friendly FAQs on postpartum care, newborn rhythms, and identity-rooted parenting." },
      { property: "og:title", content: "Resources — Nurture The Roots™" },
      { property: "og:description", content: "Blog, media, and FAQ — grounded guidance for the fourth trimester." },
      { property: "og:url", content: "https://nurturetheroots.co/resources" },
    ],
    links: [
      { rel: "canonical", href: "https://nurturetheroots.co/resources" },
    ],
  }),
  component: ResourcesPage,
});

const items = [
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

function ResourcesPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Resources</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Grounded guidance for the fourth trimester
          </h1>
          <p className="mt-8 font-serif italic text-xl text-cocoa/75">
            Reading, listening, and answers to support your becoming.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
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
      </section>
    </>
  );
}