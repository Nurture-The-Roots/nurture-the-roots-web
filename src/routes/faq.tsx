import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nurture The Roots™" },
      { name: "description", content: "Frequently asked questions about postpartum support, overnight care, feeding support, and working with Ashlee McKenzie." },
      { property: "og:title", content: "FAQ — Nurture The Roots™" },
      { property: "og:description", content: "Answers to common questions about postpartum support and care services." },
    ],
  }),
  component: FaqPage,
});

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

function FaqPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">FAQ</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 text-center">
          <p className="text-lg text-earth/80 leading-relaxed">
            Every family arrives with different questions, needs, and curiosities.
          </p>
          <p className="mt-4 text-lg text-earth/80 leading-relaxed">
            Here are answers to the most common questions new parents ask when exploring support.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
          <div className="rounded-2xl bg-cream/40 border border-taupe/25 p-8 md:p-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-taupe/25">
                  <AccordionTrigger className="text-left text-base md:text-lg text-cocoa font-medium py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-earth/80 leading-relaxed pb-5">
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
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Still Have Questions?</div>
          <h2 className="text-3xl md:text-4xl leading-tight">
            Still Have Questions?
          </h2>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            I'm here to help. Reach out anytime — I'd love to connect with you.
          </p>
          <div className="mt-10">
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
