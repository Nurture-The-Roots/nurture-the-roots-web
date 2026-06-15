import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Nurture The Roots™" },
      { name: "description", content: "Terms and conditions for using the Nurture The Roots website and services." },
      { property: "og:title", content: "Terms & Conditions — Nurture The Roots™" },
      { property: "og:description", content: "Terms and conditions for Nurture The Roots." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Legal</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Terms & Conditions</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="space-y-16">
            {/* INTRO */}
            <div className="space-y-4">
              <p className="text-lg text-earth/80 leading-relaxed">
                By using this website, you agree to the following terms and conditions. Please read them carefully.
              </p>
            </div>

            {/* USE OF WEBSITE */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Use of Website</h2>
              <p className="text-earth/80 leading-relaxed">
                This website provides information about postpartum support services. Content is for general informational purposes and may change at any time.
              </p>
            </div>

            {/* NO MEDICAL ADVICE */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">No Medical Advice</h2>
              <p className="text-earth/80 leading-relaxed">
                Information on this website is not medical advice and should not replace guidance from a licensed healthcare provider.
              </p>
            </div>

            {/* SERVICE AVAILABILITY */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Service Availability</h2>
              <p className="text-earth/80 leading-relaxed">
                All services depend on availability, location, and scheduling. Completing a contact form does not guarantee service.
              </p>
            </div>

            {/* INTELLECTUAL PROPERTY */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Intellectual Property</h2>
              <p className="text-earth/80 leading-relaxed">
                All content on this website — including text, images, and branding — is the property of Nurture the Roots and may not be copied or reproduced without permission.
              </p>
            </div>

            {/* LIMITATION OF LIABILITY */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Limitation of Liability</h2>
              <p className="text-earth/80 leading-relaxed">
                We are not responsible for any damages resulting from use of this website or reliance on its content.
              </p>
            </div>

            {/* GOVERNING LAW */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Governing Law</h2>
              <p className="text-earth/80 leading-relaxed">
                These terms are governed by the laws of the State of California.
              </p>
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
