import { createFileRoute, Link } from "@tanstack/react-router";
import bandAsset from "@/assets/branding-57.jpeg.asset.json";
import ashleeBabyLaughingAsset from "@/assets/ashlee-baby-laughing.jpeg.asset.json";
import ashleeBabyCloseupAsset from "@/assets/ashlee-baby-closeup.jpeg.asset.json";
import bandResponsive from "@/assets/branding-57.responsive.json";
import closingResponsive from "@/assets/branding-photos-51.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Nurture The Roots™" },
      {
        name: "description",
        content:
          "What families say about working with Ashlee McKenzie and Nurture The Roots™ postpartum care.",
      },
      { property: "og:title", content: "Testimonials — Nurture The Roots™" },
      {
        property: "og:description",
        content: "What families say about their experience with lineage-rooted postpartum care.",
      },
      { property: "og:url", content: "https://nurture-the-roots-web.lovable.app/testimonials" },
    ],
    links: [{ rel: "canonical", href: "https://nurture-the-roots-web.lovable.app/testimonials" }],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    quote:
      "Ashlee supported us with all three of our babies — in 2018, 2021, and again in 2024. I absolutely love working with her. She was our first son's doula, and I knew immediately that if we had another child, I would want her with us again. We welcomed our second son a few weeks ago and are so happy to have her back in our lives.\n\nShe is incredibly sweet, loving, and patient with our baby. Both of our boys were very fussy and struggled with sleep, and she spent so much time and energy trying to understand the cause and test different solutions. She gave us talking points for our pediatrician visits and followed up afterward to integrate their recommendations. She truly becomes part of the care team, which is invaluable.\n\nShe's also extremely dependable. She communicates clearly, is proactive, and gives us daytime sleep guidance. She reviews his daytime progress every day so she's fully prepared for him at night. She's professional, hardworking, and does everything she can to make parenting easier on us.",
    name: "Vanessa — Mother of three, San Francisco",
  },
  {
    quote: "You made our home feel peaceful again.",
    name: "Family of three, Pacific Heights",
  },
  {
    quote: "You held us, not just the baby.",
    name: "New parents, Richmond District",
  },
  {
    quote: "Your presence brought calm into our home during a time that felt overwhelming.",
    name: "Second-time parents, Bay Area",
  },
  {
    quote: "We felt seen, supported, and understood. You helped us trust ourselves.",
    name: "First-time parents, Inner Sunset",
  },
];

function TestimonialsPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Testimonials</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Testimonials
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
          <p className="text-[17px] text-cocoa/80 leading-[1.85]">
            The families I support often describe our time together as grounding, clarifying, and
            deeply transformative.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85]">
            Here are some of the words they've shared about their experience.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — joyful presence */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-4 md:pb-10">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={ashleeBabyLaughingAsset.url}
              alt="Ashlee laughing warmly with a baby in her arms, both fully engaged in a joyful and attuned exchange"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_50%]"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pb-24 md:pb-32 space-y-14">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="rounded-2xl bg-blush/50 border border-taupe/25 p-10 md:p-14"
            >
              <div className="font-serif text-5xl text-clay/50 leading-none mb-6">"</div>
              <blockquote className="font-serif italic text-xl md:text-2xl text-cocoa leading-[1.6] space-y-6">
                {t.quote.split("\n\n").map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </blockquote>
              {t.name && (
                <p className="mt-8 text-xs uppercase tracking-[0.28em] text-clay">— {t.name}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* IMAGE BAND — quiet sanctuary */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pb-4 md:pb-10">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={ashleeBabyCloseupAsset.url}
              alt="Ashlee cradling a baby close in her lap, held in a quiet portrait that feels intimate and deeply reassuring"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_42%]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
            Ready to Feel Supported?
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Ready to Feel Supported?
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're craving clarity, rest, and attuned guidance, I'd love to support your family
            through this tender beginning.
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
