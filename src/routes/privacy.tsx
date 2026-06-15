import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nurture The Roots™" },
      { name: "description", content: "Privacy policy for Nurture The Roots. Learn what information is collected, how it is used, and how it is protected." },
      { property: "og:title", content: "Privacy Policy — Nurture The Roots™" },
      { property: "og:description", content: "Privacy policy for Nurture The Roots." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Legal</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Privacy Policy</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="space-y-16">
            {/* INTRO */}
            <div className="space-y-4">
              <p className="text-lg text-earth/80 leading-relaxed">
                Your privacy matters. This policy explains what information is collected, how it is used, and how it is protected when you visit this website or submit an inquiry.
              </p>
            </div>

            {/* INFORMATION WE COLLECT */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Information We Collect</h2>
              <p className="text-earth/80 leading-relaxed">
                We may collect the following information when you interact with this website:
              </p>
              <ul className="space-y-3 text-earth/80">
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Name</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Email address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Phone number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Due date or baby's birth date</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Details you choose to share in your message</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Basic website analytics (non-identifying)</span>
                </li>
              </ul>
            </div>

            {/* HOW YOUR INFORMATION IS USED */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">How Your Information Is Used</h2>
              <p className="text-earth/80 leading-relaxed">
                Your information may be used to:
              </p>
              <ul className="space-y-3 text-earth/80">
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Respond to inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Provide requested services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Communicate scheduling or service details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay mt-1.5">&bull;</span>
                  <span>Improve website functionality</span>
                </li>
              </ul>
              <p className="text-earth/80 leading-relaxed">
                We do not sell or share your information with third parties for marketing.
              </p>
            </div>

            {/* COOKIES & ANALYTICS */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Cookies & Analytics</h2>
              <p className="text-earth/80 leading-relaxed">
                This website may use cookies or basic analytics tools to understand how visitors use the site. These tools do not collect personally identifying information.
              </p>
            </div>

            {/* DATA SECURITY */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Data Security</h2>
              <p className="text-earth/80 leading-relaxed">
                Reasonable measures are taken to protect your information. However, no online transmission is ever 100% secure.
              </p>
            </div>

            {/* YOUR CHOICES */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl">Your Choices</h2>
              <p className="text-earth/80 leading-relaxed">
                You may request that your information be updated or deleted at any time by contacting:
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
