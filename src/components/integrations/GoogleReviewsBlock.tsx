import type { Testimonial } from "./TestimonialsCarousel";

/**
 * Static, curated reviews block. Designed so a future Google Places API
 * integration can swap the data source without changing the layout.
 */
const defaultReviews: Testimonial[] = [
  {
    quote:
      "Ashlee is the kind of postpartum support every family deserves — calm, deeply knowledgeable, and quietly transformative.",
    author: "Google review",
  },
  {
    quote:
      "Her care helped us feel grounded in the most disorienting weeks of our lives. We will be forever grateful.",
    author: "Google review",
  },
  {
    quote:
      "Warm, attuned, and rooted in real expertise. Ashlee changed how we understand our baby and ourselves as parents.",
    author: "Google review",
  },
];

type Props = {
  reviews?: Testimonial[];
  heading?: string;
  eyebrow?: string;
  className?: string;
};

export function GoogleReviewsBlock({
  reviews = defaultReviews,
  heading = "What families share",
  eyebrow = "Google Reviews",
  className,
}: Props) {
  return (
    <section className={className ?? "bg-background"}>
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">{eyebrow}</div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] text-cocoa">
            {heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-taupe/25 bg-sand/60 p-8 shadow-[0_14px_40px_-28px_rgba(74,63,57,0.4)]"
            >
              <blockquote className="font-serif italic text-[17px] text-cocoa/85 leading-[1.7]">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.22em] text-clay">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}