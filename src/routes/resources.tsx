import { createFileRoute, Link } from "@tanstack/react-router";
import babyChangingTableAsset from "@/assets/baby-changing-table.jpeg.asset.json";
import { SectionDivider } from "@/components/SectionDivider";
import { CalendlyButton } from "@/components/integrations/CalendlyButton";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — A Learning Hub for the Fourth Trimester | Nurture The Roots™" },
      {
        name: "description",
        content:
          "A learning hub for new parents: guides, articles, and practical tools shaped by developmental science, newborn communication, and the lived reality of early parenthood.",
      },
      { property: "og:title", content: "Resources — A Learning Hub for the Fourth Trimester" },
      {
        property: "og:description",
        content:
          "Guides, articles, and practical tools to help you understand your baby, trust your instincts, and move through the fourth trimester with confidence.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/resources" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/resources" }],
  }),
  component: ResourcesPage,
});

const guides = [
  "Understanding Newborn Cues",
  "Early Feeding Rhythms",
  "Responsive Sleep Foundations",
  "Daily Flow Mapping",
  "Partner Support in the Fourth Trimester",
  "Preparing Your Support Ecosystem",
];

const collections: {
  name: string;
  intro: string;
  body: string;
  bullets?: string[];
  note?: string;
}[] = [
  {
    name: "Articles & Education",
    intro: "Thoughtful, developmental writing for new parents.",
    body: "Topics include:",
    bullets: [
      "Newborn behavioral patterns and cue reading",
      "Early regulation and state transitions",
      "Developmental rhythms in the first weeks",
      "Identity shifts and the parental transition",
      "Relational beginnings and early attachment",
      "Building sustainable systems in the fourth trimester",
    ],
  },
  {
    name: "The Blog",
    intro: "Ongoing insights, reflections, and practical support.",
    body: "This is where long‑form educational content and future digital offerings will live.",
  },
  {
    name: "Media & Features",
    intro: "Interviews, collaborations, and educational contributions.",
    body: "Including podcasts, guest articles, expert features, and community events.",
    note: "Ashlee's work has been informed by training through the Brazelton Institute and Brazelton Touchpoints Center. Future features and collaborations will be listed here as they develop.",
  },
  {
    name: "FAQ",
    intro: "Clear answers to common questions.",
    body: "Common questions about feeding, sleep, newborn cues, postpartum recovery, partner support, and early rhythms — answered clearly and without pressure.",
  },
];

function ResourcesPage() {
  return (
    <div className="resources-page">
      {/* HERO — RESOURCES */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-24 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Resources</div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-cocoa">
            Resources
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            This space is designed as a learning hub — a place where parents can return for clarity,
            grounding, and practical support. Everything here is shaped by developmental science,
            newborn communication, and the lived reality of early parenthood.
          </p>
          <p className="mt-6 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            These resources are not meant to overwhelm you. They're meant to help you understand
            your baby, trust your instincts, and move through the fourth trimester with more
            confidence and ease.
          </p>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <img
              src={babyChangingTableAsset.url}
              alt="Postpartum doula Ashlee McKenzie caring for a newborn on a changing table in a calm nursery"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* IMAGE — settling baby in bassinet */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-10 md:py-16">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] max-w-3xl mx-auto">
            <img
              src="/images/ashlee-brand-0077.jpg"
              alt="Postpartum doula Ashlee McKenzie settling a swaddled newborn into a bassinet for safe sleep in a calm San Francisco home"
              loading="lazy"
              decoding="async"
              width="910"
              height="748"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* GUIDES & HANDOUTS */}
      <section className="section bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
              Guides &amp; Handouts
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Guides &amp; Handouts
            </h2>
            <p className="mt-6 font-serif italic text-lg md:text-xl text-cocoa/75 leading-[1.5]">
              Clear, practical tools for everyday moments.
            </p>
          </div>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {guides.map((title) => (
              <li
                key={title}
                className="rounded-2xl border border-taupe/25 bg-blush/40 p-6 md:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h3 className="font-serif text-xl text-cocoa leading-snug">{title}</h3>
                  <span className="inline-flex w-fit items-center rounded-full border border-taupe/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cocoa/60 shrink-0">
                    Coming Soon
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* COLLECTIONS — Articles · Blog · Media · FAQ */}
      <section className="section bg-blush/40">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="grid sm:grid-cols-2 gap-5">
            {collections.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-taupe/25 bg-sand/60 p-8 md:p-10"
              >
                <h2 className="font-serif text-2xl md:text-3xl font-medium leading-[1.2] text-cocoa">
                  {item.name}
                </h2>
                <p className="mt-4 font-serif italic text-base text-cocoa/75 leading-[1.5]">
                  {item.intro}
                </p>
                <p className="mt-4 text-[15px] text-cocoa/75 leading-[1.85]">{item.body}</p>
                {item.bullets && (
                  <ul className="mt-3 space-y-2 text-[15px] text-cocoa/75 leading-[1.75]">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="text-clay mt-1.5 text-[0.5rem]">&#9679;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.note && (
                  <p className="mt-4 text-[15px] text-cocoa/75 leading-[1.85]">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* START WITH WHAT YOU NEED */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">
            Start With What You Need
          </div>
          <h2 className="sr-only">Start With What You Need</h2>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            If you're not sure where to begin, start with the guide or article that speaks to your
            current season — or reach out for a consultation if you want support tailored to your
            family.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Explore Services
            </Link>
            <CalendlyButton className="button inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors">
              Schedule a Consultation
            </CalendlyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
