import { createFileRoute, Link } from "@tanstack/react-router";
import servicesImageAsset from "@/assets/approach-3.jpeg.asset.json";
import babyChangingTableAsset from "@/assets/baby-changing-table.jpeg.asset.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionDivider } from "@/components/SectionDivider";
import { IntakeButton } from "@/components/integrations/DubsadoEmbed";
import { GoogleReviewsBlock } from "@/components/integrations/GoogleReviewsBlock";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Identity‑Rooted Postpartum Support | Nurture The Roots™" },
      {
        name: "description",
        content:
          "Postpartum support rooted in identity, rhythm, and relationship — planning, in‑home and virtual support, newborn cue sessions, family systems, and integration for San Francisco families.",
      },
      { property: "og:title", content: "Services — Nurture The Roots™ Postpartum Support" },
      {
        property: "og:description",
        content:
          "Five ways to work together — practical, attuned, developmentally informed, and deeply rooted in your family's identity and values.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/services" },
      { property: "og:image", content: servicesImageAsset.url },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Rooted Postpartum Planning",
    signature: "[PLACEHOLDER: One signature line for Rooted Postpartum Planning.]",
    description:
      "A values‑based planning session for expecting families who want to prepare for postpartum with clarity, support, and sovereignty.",
    includes: [
      "identity and values mapping",
      "support ecosystem review",
      "visitor and boundary planning",
      "rest and nourishment planning",
      "feeding and newborn rhythm preparation",
      "emotional support planning",
      "household support systems",
      "transition planning",
    ],
    cta: "Plan Your Fourth Trimester",
  },
  {
    title: "In‑Home or Virtual Postpartum Support",
    signature: "[PLACEHOLDER: One signature line for In-Home or Virtual Postpartum Support.]",
    description:
      "Relational postpartum support focused on newborn cues, parent confidence, rhythm, regulation, and family grounding.",
    includes: [
      "newborn cue education",
      "feeding and sleep rhythm support",
      "emotional landscape reading",
      "co‑regulation support",
      "parent‑baby attunement",
      "care as ceremony",
      "threshold navigation",
      "family system support",
    ],
    cta: "Request Support",
  },
  {
    title: "Newborn Cue + Attunement Session",
    signature: "[PLACEHOLDER: One signature line for Newborn Cue + Attunement Session.]",
    description:
      "A focused session helping parents understand their baby's communication, states, cues, stress signals, readiness signals, and regulation needs.",
    includes: [
      "newborn state observation",
      "feeding, sleep, and regulation cues",
      "stress and disengagement signals",
      "responsive care practices",
      "parent confidence building",
    ],
    cta: "Learn Your Baby's Language",
  },
  {
    title: "Sovereign Family Systems Session",
    signature: "[PLACEHOLDER: One signature line for Sovereign Family Systems Session.]",
    description:
      "A practical and reflective session for families who need support organizing care, boundaries, household systems, and community support.",
    includes: [
      "support ecosystem mapping",
      "household rhythm planning",
      "partner role clarity",
      "visitor boundaries",
      "professional referrals",
      "continuity planning",
    ],
    cta: "Build Your Support Ecosystem",
  },
  {
    title: "Integration + Continuity Session",
    signature: "[PLACEHOLDER: One signature line for Integration + Continuity Session.]",
    description:
      "A closing or transition session for families moving beyond early postpartum and into the next season of family life.",
    includes: [
      "reflection",
      "identity integration",
      "baby rhythm review",
      "family system review",
      "ongoing support planning",
      "closing ritual",
    ],
    cta: "Integrate Your Postpartum Season",
  },
];

function ServicesPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Services</div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-cocoa">
            Postpartum support rooted in identity, rhythm, and relationship
          </h1>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            Practical, emotionally attuned, developmentally informed — and deeply rooted in your
            family's identity and values.
          </p>
        </div>
      </section>

      {/* IMAGE BAND — care in practice */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-10 md:pt-14">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={babyChangingTableAsset.url}
              alt="A baby resting on a changing table while Ashlee tends nearby, showing practical and gentle postpartum care in action"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="w-full h-full object-cover object-[center_45%]"
            />
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 space-y-16 md:space-y-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Offerings</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Five ways we can work together
            </h2>
            <p className="mt-6 text-[16px] text-cocoa/75 leading-[1.85] max-w-xl mx-auto">
              {/* [PLACEHOLDER: A grounding intro paragraph above the offerings, in your voice.] */}
            </p>
          </div>

          {/* WHO THIS IS FOR */}
          <div className="rounded-2xl border border-taupe/25 bg-sand/60 p-10 md:p-14">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">
              Who This Is For
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-cocoa leading-snug mb-4">
              These offerings are for…
            </h3>
            <p className="text-[16px] text-cocoa/75 leading-[1.85] max-w-2xl">
              {/* [PLACEHOLDER: 2–3 sentences describing who these offerings are for, in your voice.] */}
            </p>
          </div>

          {/* WHAT TO EXPECT */}
          <div className="rounded-2xl border border-taupe/25 bg-blush/40 p-10 md:p-14">
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">
              What to Expect When We Work Together
            </div>
            <ol className="mt-2 grid gap-5 sm:grid-cols-2">
              {[
                "[PLACEHOLDER: Step 1 — first beat of working with you.]",
                "[PLACEHOLDER: Step 2 — second beat.]",
                "[PLACEHOLDER: Step 3 — third beat.]",
                "[PLACEHOLDER: Step 4 — fourth beat.]",
              ].map((line, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-[15px] text-cocoa/80 leading-[1.7]"
                >
                  <span className="font-serif text-clay text-xl leading-none mt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="italic font-serif">{line}</span>
                </li>
              ))}
            </ol>
          </div>

          {services.map((s, i) => (
            <div key={s.title}>
              {i > 0 && <SectionDivider className="mb-16 md:mb-20" />}
              <article className="rounded-2xl bg-blush/50 p-10 md:p-14 border border-taupe/25">
                <div className="flex items-center gap-5 mb-6">
                  <div className="font-serif text-4xl text-clay leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa">
                    {s.title}
                  </h2>
                </div>
                <p className="font-serif italic text-lg text-cocoa/85 leading-[1.5] mb-5 max-w-2xl">
                  {s.signature}
                </p>
                <p className="text-lg text-cocoa/80 leading-[1.85] max-w-2xl">{s.description}</p>
                <div className="mt-8">
                  <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">Includes</div>
                  <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/60 px-4 py-3 text-sm text-cocoa"
                      >
                        <span className="text-clay mt-1 text-[0.55rem]">&#9679;</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
                  >
                    {s.cta}
                  </Link>
                  <IntakeButton className="ml-3 inline-flex items-center rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-blush transition-colors">
                    Begin Intake
                  </IntakeButton>
                </div>
              </article>
            </div>
          ))}
          <div className="text-center pt-4">
            <p className="font-serif italic text-lg text-cocoa/75 max-w-2xl mx-auto leading-[1.6]">
              Services can be adapted based on family needs, location, availability, and stage of
              pregnancy or postpartum.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING / CTA */}
      <section className="bg-hero-gradient">
        <GoogleReviewsBlock
          eyebrow="From Google"
          heading="Care that families return to"
          className="bg-background"
        />
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            You don't have to navigate this beginning alone.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for support that feels aligned with your family's needs, I'd be
            honored to walk with you.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Begin Your Postpartum Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
