import { createFileRoute, Link } from "@tanstack/react-router";
import approachImg from "@/assets/approach.jpg";
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
      { property: "og:image", content: approachImg },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Approach</div>
          <h1 className="text-4xl md:text-5xl leading-tight">My Approach</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={approachImg}
              alt="Warm, grounded postpartum ceremonial textures"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 text-lg text-earth/80 leading-relaxed">
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
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="rounded-2xl bg-background/70 p-8 md:p-12 border border-taupe/25">
            <div className="overflow-hidden rounded-xl mb-8 aspect-[4/3] md:aspect-[16/9]">
              <img
                src={approach1Asset.url}
                alt="Parent holding newborn beside a bassinet in a sunlit nursery"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-serif text-5xl text-clay leading-none">I</div>
              <h2 className="text-2xl md:text-3xl leading-tight">
                Identity-Aligned Care<span className="align-super text-[0.4em] ml-0.5">™</span>
              </h2>
            </div>
            <p className="text-lg text-earth/80 leading-relaxed mb-8">
              Identity-Aligned Care<span className="align-super text-[0.5em] ml-0.5">™</span>{" "}
              honors who you are, where you come from, and the lineage you're continuing.
            </p>
            <p className="text-earth/80 mb-6">
              Every family has its own rhythms, values, and ways of loving. My role is to support
              you in a way that aligns with your identity — not override it.
            </p>
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">What this looks like</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Support that reflects your cultural values",
                "Care that honors your lived experience",
                "Guidance that strengthens your confidence",
                "A postpartum space that feels like you",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-taupe/30 bg-blush/70 px-4 py-3 text-sm text-cocoa">
                  <span className="text-clay mt-0.5">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 2 — ANCESTRAL-ROOTED CARE */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="rounded-2xl bg-cream/40 p-8 md:p-12 border border-taupe/25">
            <div className="overflow-hidden rounded-xl mb-8 aspect-[4/3] md:aspect-[16/9]">
              <img
                src={approach2Asset.url}
                alt="Doula tenderly attending to a baby on a changing table"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-serif text-5xl text-clay leading-none">II</div>
              <h2 className="text-2xl md:text-3xl leading-tight">
                Ancestral-Rooted Care<span className="align-super text-[0.4em] ml-0.5">™</span>
              </h2>
            </div>
            <p className="text-lg text-earth/80 leading-relaxed mb-8">
              Postpartum is a rite of passage, not a medical event.
            </p>
            <p className="text-earth/80 mb-6">
              Ancestral-Rooted Care<span className="align-super text-[0.5em] ml-0.5">™</span>{" "}
              reconnects families to the wisdom, rituals, and grounding practices that have
              supported new parents for generations.
            </p>
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">What this looks like</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Slowing down",
                "Creating a warm, regulated environment",
                "Supporting the nervous system",
                "Honoring lineage and continuity",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-taupe/30 bg-blush/70 px-4 py-3 text-sm text-cocoa">
                  <span className="text-clay mt-0.5">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 3 — DEVELOPMENTAL & RELATIONAL GUIDANCE */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="rounded-2xl bg-background/70 p-8 md:p-12 border border-taupe/25">
            <div className="overflow-hidden rounded-xl mb-8 aspect-[4/3] md:aspect-[16/9]">
              <img
                src={approach3Asset.url}
                alt="Engaging a baby with a wooden toy during developmental play"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-serif text-5xl text-clay leading-none">III</div>
              <h2 className="text-2xl md:text-3xl leading-tight">
                Developmental & Relational Guidance<span className="align-super text-[0.4em] ml-0.5">™</span>
              </h2>
            </div>
            <p className="text-lg text-earth/80 leading-relaxed mb-8">
              Babies communicate long before they speak.
            </p>
            <p className="text-earth/80 mb-6">
              This pillar helps parents understand newborn cues, rhythms, and behaviors so they
              can respond with confidence and attunement.
            </p>
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">What this looks like</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "NBO-informed newborn observations",
                "Understanding your baby's communication",
                "Supporting early developmental rhythms",
                "Building secure attachment from the beginning",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-taupe/30 bg-blush/70 px-4 py-3 text-sm text-cocoa">
                  <span className="text-clay mt-0.5">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 4 — SOVEREIGN FAMILY SYSTEMS */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="rounded-2xl bg-cream/40 p-8 md:p-12 border border-taupe/25">
            <div className="flex items-center gap-4 mb-6">
              <div className="font-serif text-5xl text-clay leading-none">IV</div>
              <h2 className="text-2xl md:text-3xl leading-tight">
                Sovereign Family Systems<span className="align-super text-[0.4em] ml-0.5">™</span>
              </h2>
            </div>
            <p className="text-lg text-earth/80 leading-relaxed mb-8">
              Every family is a system — relational, emotional, and dynamic.
            </p>
            <p className="text-earth/80 mb-6">
              This pillar supports parents in navigating identity shifts, communication, and the
              emotional landscape of early parenthood.
            </p>
            <div className="uppercase tracking-[0.22em] text-xs text-clay mb-4">What this looks like</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Coaching for new parents",
                "Support through identity transitions",
                "Creating sustainable rhythms",
                "Strengthening partnership and communication",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-taupe/30 bg-blush/70 px-4 py-3 text-sm text-cocoa">
                  <span className="text-clay mt-0.5">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl leading-tight">
            My approach is warm, grounded, and deeply relational.
          </h2>
          <p className="mt-6 text-lg text-earth/80 leading-relaxed">
            I support you in understanding your baby, your identity, and your new family system —
            with clarity, compassion, and attunement.
          </p>
          <div className="mt-10">
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
