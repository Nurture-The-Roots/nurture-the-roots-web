import { createFileRoute, Link } from "@tanstack/react-router";
import approach1Asset from "@/assets/approach-1.jpeg.asset.json";
import approach2Asset from "@/assets/approach-2.jpeg.asset.json";
import approach3Asset from "@/assets/approach-3.jpeg.asset.json";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "My Approach — Nurture The Roots™" },
      { name: "description", content: "A warm, grounded, relational approach to postpartum care rooted in identity, lineage, attunement, and development." },
      { property: "og:title", content: "My Approach — Nurture The Roots™" },
      { property: "og:description", content: "A warm, grounded, relational approach to postpartum care rooted in identity, lineage, attunement, and development." },
      { property: "og:image", content: approach1Asset.url },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:pt-36 md:pb-20 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Approach</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">My Approach</h1>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 md:pb-28">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[21/9]">
            <img
              src={approach2Asset.url}
              alt="Ashlee gently attending to a newborn baby"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              My approach is rooted in identity, lineage, attunement, and development. I support
              new parents in a way that feels grounded, relational, and deeply aligned with who
              they are — not a script or a trend.
            </p>
            <p>
              This page outlines the frameworks that shape my work and the way I support families
              through the fourth trimester.
            </p>
          </div>
        </div>
      </section>

      {/* PILLAR 1 — IDENTITY-ALIGNED CARE */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="rounded-2xl bg-sand/70 p-10 md:p-14 border border-taupe/25">
            <div className="overflow-hidden rounded-xl mb-10 aspect-[4/3] md:aspect-[21/9]">
              <img
                src={approach1Asset.url}
                alt="Parent holding newborn beside a bassinet in a sunlit nursery"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-5 mb-8">
              <div className="font-serif text-5xl text-clay leading-none">I</div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa">
                Identity-Aligned Care<span className="align-super text-[0.4em] ml-0.5">™</span>
              </h2>
            </div>
            <p className="text-lg text-cocoa/80 leading-[1.85] mb-6 max-w-2xl">
              Identity-Aligned Care<span className="align-super text-[0.5em] ml-0.5">™</span>{" "}
              honors who you are, where you come from, and the lineage you're continuing.
            </p>
            <p className="text-cocoa/80 leading-[1.85] mb-10 max-w-2xl">
              Every family has its own rhythms, values, and ways of loving. My role is to support
              you in a way that aligns with your identity — not override it.
            </p>
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">What this looks like</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Support that reflects your cultural values",
                "Care that honors your lived experience",
                "Guidance that strengthens your confidence",
                "A postpartum space that feels like you",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/70 px-5 py-4 text-sm text-cocoa">
                  <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 2 — ANCESTRAL-ROOTED CARE */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="rounded-2xl bg-blush/50 p-10 md:p-14 border border-taupe/25">
            <div className="overflow-hidden rounded-xl mb-10 aspect-[4/3] md:aspect-[21/9]">
              <img
                src={approach2Asset.url}
                alt="Doula tenderly attending to a baby on a changing table"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-5 mb-8">
              <div className="font-serif text-5xl text-clay leading-none">II</div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa">
                Ancestral-Rooted Care<span className="align-super text-[0.4em] ml-0.5">™</span>
              </h2>
            </div>
            <p className="text-lg text-cocoa/80 leading-[1.85] mb-6 max-w-2xl">
              Postpartum is a rite of passage, not a medical event.
            </p>
            <p className="text-cocoa/80 leading-[1.85] mb-10 max-w-2xl">
              Ancestral-Rooted Care<span className="align-super text-[0.5em] ml-0.5">™</span>{" "}
              reconnects families to the wisdom, rituals, and grounding practices that have
              supported new parents for generations.
            </p>
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">What this looks like</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Slowing down",
                "Creating a warm, regulated environment",
                "Supporting the nervous system",
                "Honoring lineage and continuity",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/70 px-5 py-4 text-sm text-cocoa">
                  <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 3 — DEVELOPMENTAL & RELATIONAL GUIDANCE */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="rounded-2xl bg-sand/70 p-10 md:p-14 border border-taupe/25">
            <div className="overflow-hidden rounded-xl mb-10 aspect-[4/3] md:aspect-[21/9]">
              <img
                src={approach3Asset.url}
                alt="Engaging a baby with a wooden toy during developmental play"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-5 mb-8">
              <div className="font-serif text-5xl text-clay leading-none">III</div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa">
                Developmental & Relational Guidance<span className="align-super text-[0.4em] ml-0.5">™</span>
              </h2>
            </div>
            <p className="text-lg text-cocoa/80 leading-[1.85] mb-6 max-w-2xl">
              Babies communicate long before they speak.
            </p>
            <p className="text-cocoa/80 leading-[1.85] mb-10 max-w-2xl">
              This pillar helps parents understand newborn cues, rhythms, and behaviors so they
              can respond with confidence and attunement.
            </p>
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">What this looks like</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "NBO-informed newborn observations",
                "Understanding your baby's communication",
                "Supporting early developmental rhythms",
                "Building secure attachment from the beginning",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/70 px-5 py-4 text-sm text-cocoa">
                  <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 4 — SOVEREIGN FAMILY SYSTEMS */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="rounded-2xl bg-blush/50 p-10 md:p-14 border border-taupe/25">
            <div className="flex items-center gap-5 mb-8">
              <div className="font-serif text-5xl text-clay leading-none">IV</div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-cocoa">
                Sovereign Family Systems<span className="align-super text-[0.4em] ml-0.5">™</span>
              </h2>
            </div>
            <p className="text-lg text-cocoa/80 leading-[1.85] mb-6 max-w-2xl">
              Every family is a system — relational, emotional, and dynamic.
            </p>
            <p className="text-cocoa/80 leading-[1.85] mb-10 max-w-2xl">
              This pillar supports parents in navigating identity shifts, communication, and the
              emotional landscape of early parenthood.
            </p>
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-5">What this looks like</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Coaching for new parents",
                "Support through identity transitions",
                "Creating sustainable rhythms",
                "Strengthening partnership and communication",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-sand/70 px-5 py-4 text-sm text-cocoa">
                  <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            My approach is warm, grounded, and deeply relational.
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            I support you in understanding your baby, your identity, and your new family system —
            with clarity, compassion, and attunement.
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
