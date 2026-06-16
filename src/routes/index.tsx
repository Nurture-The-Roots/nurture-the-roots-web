import { createFileRoute, Link } from "@tanstack/react-router";
import welcomeAsset from "@/assets/welcome-ashlee-baby.jpg.asset.json";
import aboutAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
const welcomeImg = welcomeAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Postpartum Doula San Francisco | Nurture The Roots™" },
      { name: "description", content: "Private, in-home postpartum support for San Francisco families—rooted in attunement, identity, and evidence-based care." },
      { property: "og:title", content: "Postpartum Doula San Francisco | Nurture The Roots™" },
      { property: "og:description", content: "Guiding you through the fourth trimester with clarity and care." },
      { property: "og:url", content: "https://nurture-the-roots-web.lovable.app/" },
      { property: "og:image", content: welcomeImg },
      { name: "twitter:image", content: welcomeImg },
    ],
    links: [
      { rel: "canonical", href: "https://nurture-the-roots-web.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nurture The Roots™",
          description:
            "Lineage-rooted, identity-aligned postpartum doula and newborn care practice serving families across the San Francisco Bay Area.",
          url: "https://nurture-the-roots-web.lovable.app/",
          image: welcomeImg,
          telephone: "",
          email: "ashleemckenzie@nurturetheroots.co",
          founder: { "@type": "Person", name: "Ashlee McKenzie" },
          areaServed: [
            { "@type": "City", name: "San Francisco" },
            { "@type": "Place", name: "San Francisco Bay Area" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US",
          },
          serviceType: [
            "Postpartum Doula Care",
            "Overnight Newborn Care",
            "NBO-Informed Newborn Sessions",
            "Feeding & Lactation Support",
            "New Parent Support Coaching",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-clay/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-24 md:pt-36 md:pb-36 text-center">
          <div className="uppercase tracking-[0.32em] text-[0.7rem] text-cocoa/70 mb-10">
            San Francisco · Postpartum Sanctuary
          </div>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-medium leading-[1.02] text-cocoa">
            Nurture the Roots<sup className="text-2xl md:text-3xl align-super ml-1 font-normal">™</sup>
          </h1>
          <p className="mt-10 mx-auto max-w-2xl font-serif text-2xl md:text-3xl text-cocoa leading-[1.3]">
            Warm, Attuned Postpartum Support in San Francisco
          </p>
          <p className="mt-10 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5]">
            Guiding you through the fourth trimester with clarity and care.
          </p>
          <p className="mt-10 mx-auto max-w-2xl text-lg text-cocoa/80 leading-[1.85]">
            Your fourth trimester deserves care that feels grounding, relational, and deeply human. I support new parents with clarity, attunement, and developmental guidance — so you can feel confident, rested, and connected in this new beginning.
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-10 py-4 text-base font-medium text-sand shadow-sm hover:bg-cocoa transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* YOU'RE IN THE RIGHT PLACE */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">You're in the Right Place</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Support that meets you where you are
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            The early weeks after birth can feel tender, overwhelming, and deeply transformative.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            You may be navigating:
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
            {[
              "Exhaustion and constant change",
              "Questions about your newborn's needs",
              "Your own recovery and identity shift",
              "A desire to feel more steady, more supported, more like yourself",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-sm text-cocoa">
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            You don't have to move through this alone.
          </p>
          <p className="mt-4 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            Nurture The Roots offers calm, attuned, and grounded support so you can settle into this season with greater clarity and care.
          </p>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">What You Receive</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Postpartum care that is both practical and deeply attuned
            </h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Newborn Care Guidance",
                body: "Hands-on support with feeding, sleep, soothing, and understanding your baby's cues.",
              },
              {
                title: "Postpartum Recovery Support",
                body: "Care that honors your healing, rest, and physical recovery after birth.",
              },
              {
                title: "Emotional & Relational Support",
                body: "A steady, nonjudgmental presence as you navigate the emotional landscape of early parenthood.",
              },
              {
                title: "In-Home, Personalized Care",
                body: "Private support tailored to your needs, rhythm, and home environment in San Francisco.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-taupe/30 bg-sand/60 p-8 hover:bg-sand transition-colors"
              >
                <h3 className="font-serif text-xl text-cocoa mb-3">{item.title}</h3>
                <p className="text-cocoa/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR APPROACH */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Your Approach</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Rooted in attunement, guided by what matters
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            My approach is both relational and evidence-based.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            “Lineage-rooted” care means I honor your identity, family history, and lived experience as part of how we support your transition into parenthood.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            This is not one-size-fits-all care.
          </p>
          <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            It is support that:
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
            {[
              "Listens before it leads",
              "Adapts to your values and needs",
              "Integrates best practices in newborn and postpartum care",
              "Centers your sense of safety, clarity, and trust in yourself",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-sm text-cocoa">
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT YOU (FOUNDER) */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5]">
              <img
                src={aboutAsset.url}
                alt="Ashlee McKenzie holding a sleeping newborn close, standing by a bright window with greenery outside"
                loading="lazy"
                width={1280}
                height={1920}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-md">
              <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">About</div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
                Meet Ashlee
              </h2>
              <div className="mt-8 space-y-6 text-[17px] text-cocoa/80 leading-[1.85]">
                <p>
                  I'm a certified postpartum doula and newborn care specialist and new parent support coach, based in San Francisco.
                </p>
                <p>
                  My work is grounded in attunement, presence, and a deep respect for the early postpartum period as a foundational time for both parent and child.
                </p>
                <p>
                  I believe families deserve support that is not only knowledgeable, but also relational, culturally aware, and emotionally safe.
                </p>
                <p>
                  I come to this work not just with training, but with a commitment to helping you feel more steady, more informed, and more supported in this transition.
                </p>
              </div>
              <p className="mt-6 text-sm text-cocoa/60 italic">
                Certified postpartum doula serving San Francisco families through the fourth trimester.
              </p>
              <div className="mt-8">
                <Link
                  to="/approach"
                  className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
                >
                  Learn More About My Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">Testimonials</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa mb-14">
            Trusted by growing families
          </h2>
          <div className="rounded-2xl bg-blush/50 border border-taupe/25 p-10 md:p-14 max-w-2xl mx-auto">
            <p className="text-cocoa/75 leading-[1.85]">
              Kind words from families I've supported will be shared here soon.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO BEGIN */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">How to Begin</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Start with a conversation
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            Every family's needs are different.
          </p>
          <p className="mt-4 text-[17px] text-cocoa/80 leading-[1.85]">
            We'll begin with a consultation to understand your postpartum plans, your questions, and how I can best support you during this time.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
