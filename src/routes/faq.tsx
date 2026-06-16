import { createFileRoute, Link } from "@tanstack/react-router";
import welcomeAsset from "@/assets/welcome-ashlee-baby.jpg.asset.json";
import nurseryResponsive from "@/assets/branding-photos-40.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "I support families throughout San Francisco and the greater Bay Area.",
  },
  {
    question: "When should we book postpartum support?",
    answer:
      "Most families book during the second or early third trimester, but I also support families who reach out after birth when space is available.",
  },
  {
    question: "Do you offer overnight care?",
    answer:
      "Yes. Overnight newborn care is one of my core services and provides rest, feeding support, and gentle, developmentally aligned nighttime care.",
  },
  {
    question: "Do you support chestfeeding, bottle feeding, or combination feeding?",
    answer:
      "All of the above. I offer evidence-based, judgment-free feeding support tailored to your family's needs and goals.",
  },
  {
    question: "What is NBO-informed care?",
    answer:
      "NBO (Newborn Behavioral Observations) is a relational, developmental framework that helps you understand your baby's cues, communication, and early patterns.",
  },
  {
    question: "Do you offer virtual support?",
    answer:
      "Yes. New Parent Support Coaching can be done virtually for families outside my service area or those who prefer remote guidance.",
  },
  {
    question: "Do you work with first-time parents only?",
    answer:
      "No. I support first-time parents, second-time parents, and families welcoming multiples.",
  },
  {
    question: "Do you offer sleep training?",
    answer:
      "No. I offer developmentally aligned sleep shaping, which supports healthy rhythms without conditioning or behavioral sleep training.",
  },
  {
    question: "Can you help with postpartum identity shifts?",
    answer:
      "Yes. Identity-aligned support is a core part of my work. I help parents navigate emotional transitions, nervous system changes, and the relational shifts that come with becoming a family.",
  },
  {
    question: "How do we get started?",
    answer:
      "You can reach out through my contact form or schedule a consultation to explore what support feels right for your family.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nurture The Roots™" },
      { name: "description", content: "Frequently asked questions about postpartum support, overnight care, feeding support, and working with Ashlee McKenzie." },
      { property: "og:title", content: "FAQ — Nurture The Roots™" },
      { property: "og:description", content: "Answers to common questions about postpartum support and care services." },
      { property: "og:url", content: "https://nurturetheroots.co/faq" },
      { property: "og:image", content: welcomeAsset.url },
    ],
    links: [
      { rel: "canonical", href: "https://nurturetheroots.co/faq" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">FAQ</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
          <p className="text-[17px] text-cocoa/80 leading-[1.85]">
            Every family arrives with different questions, needs, and curiosities.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85]">
            Here are answers to the most common questions new parents ask when exploring support.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — quiet, grounded support */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-16 md:pb-20">
          <div className="mx-auto overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[3/4] sm:aspect-[4/3] max-w-2xl">
            <ResponsiveImage
              source={nurseryResponsive}
              alt="Ashlee gently lowering a swaddled baby into a bassinet in a warmly lit nursery at night"
              sizes="(min-width: 768px) 672px, 100vw"
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-24 md:pb-32">
          <div className="rounded-2xl bg-blush/50 border border-taupe/25 p-10 md:p-14">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-taupe/25 last:border-b-0">
                  <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-cocoa font-medium py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-cocoa/80 leading-[1.85] pb-6 text-[15px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Still Have Questions?</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Still Have Questions?
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            I'm here to help. Reach out anytime — I'd love to connect with you.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
