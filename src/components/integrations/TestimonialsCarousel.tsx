import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type Testimonial = {
  quote: string;
  author: string;
  location?: string;
};

/**
 * Placeholder testimonials — swap with curated Google Reviews once the Place
 * ID + API key are wired up, or replace with hand-picked client quotes.
 */
const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Ashlee held our family with such steadiness. Her presence let me sleep, eat, and meet my baby with my whole self — not just survive.",
    author: "A San Francisco family",
  },
  {
    quote:
      "She made postpartum feel like a season I was invited into, not one I had to brace for. Every visit felt like coming home to myself.",
    author: "A Bay Area parent",
  },
  {
    quote:
      "Working with Ashlee gave us language for what our newborn was telling us. We left every session more confident and more connected.",
    author: "A new parent in San Francisco",
  },
];

type Props = {
  testimonials?: Testimonial[];
  className?: string;
};

export function TestimonialsCarousel({ testimonials = defaultTestimonials, className }: Props) {
  return (
    <section className={className ?? "bg-background"}>
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">
            From the Families I've Held
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] text-cocoa">
            Care, in their words
          </h2>
        </div>
        <Carousel opts={{ loop: true, align: "start" }} className="px-2">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <figure className="mx-auto max-w-2xl rounded-2xl border border-taupe/25 bg-blush/40 p-10 md:p-14 text-center shadow-[0_18px_50px_-32px_rgba(74,63,57,0.4)]">
                  <blockquote className="font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.55]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-xs uppercase tracking-[0.22em] text-clay">
                    — {t.author}
                    {t.location ? ` · ${t.location}` : ""}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-2 bg-background/80 border-taupe/40 text-cocoa hover:bg-blush" />
          <CarouselNext className="hidden md:flex -right-2 bg-background/80 border-taupe/40 text-cocoa hover:bg-blush" />
        </Carousel>
      </div>
    </section>
  );
}