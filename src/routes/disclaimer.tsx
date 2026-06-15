import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Nurture The Roots™" },
      { name: "description", content: "Disclaimer for Nurture The Roots. Important information about the scope of services and medical advice." },
      { property: "og:title", content: "Disclaimer — Nurture The Roots™" },
      { property: "og:description", content: "Disclaimer for Nurture The Roots services and website content." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Legal</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Disclaimer</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="space-y-16">
            {/* INTRO */}
            <div className="space-y-4">
              <p className="text-lg text-earth/80 leading-relaxed">
                This website provides general information about postpartum support services. Nothing on this site should be considered medical, legal, or psychological advice.
              </p>
            </div>

            {/* NOT A MEDICAL PROVIDER */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Not a Medical Provider</h2>
              <p className="text-earth/80 leading-relaxed">
                I am not a medical provider. All guidance offered is educational, relational, and supportive in nature. Always consult your healthcare provider for medical concerns.
              </p>
            </div>

            {/* NO GUARANTEES */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">No Guarantees</h2>
              <p className="text-earth/80 leading-relaxed">
                Every family and baby is unique. Results may vary based on individual circumstances.
              </p>
            </div>

            {/* EXTERNAL LINKS */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">External Links</h2>
              <p className="text-earth/80 leading-relaxed">
                This website may include links to external resources. We are not responsible for the content or privacy practices of those sites.
              </p>
            </div>

            {/* CONTACT */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Contact</h2>
              <p className="text-earth/80 leading-relaxed">
                For questions about any of these policies, contact:
              </p>
              <p className="text-cocoa font-medium">ashleemckenzie@nurturetheroots.co</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-4">Questions?</div>
          <h2 className="text-3xl md:text-4xl leading-tight">Still Have Questions?</h2>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            I am here to help. Reach out anytime — I would love to connect with you.
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
