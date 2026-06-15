import { createFileRoute, Link } from "@tanstack/react-router";
import aboutAsset from "@/assets/about-ashlee-reflection.jpg.asset.json";
import walkingAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
const aboutImg = aboutAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ashlee McKenzie — Nurture The Roots™" },
      { name: "description", content: "Ashlee McKenzie is a postpartum doula, newborn care specialist, and family coach with 15+ years of lineage-rooted practice in San Francisco." },
      { property: "og:title", content: "About Ashlee McKenzie" },
      { property: "og:description", content: "Postpartum doula, newborn care specialist, and family coach." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">About</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Ashlee McKenzie</h1>
          <p className="mt-5 font-serif italic text-xl text-earth/80">
            Postpartum doula. Newborn care specialist. Family coach.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-[5fr_7fr] gap-10 md:gap-16 items-start">
          <div className="overflow-hidden rounded-2xl">
            <img src={aboutImg} alt="Ashlee McKenzie standing on a sunlit sidewalk, leaning against a brick storefront with her reflection in the window" loading="lazy" width={1280} height={1920} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 text-lg text-earth/80 leading-relaxed">
            <p>
              For more than fifteen years, I have walked alongside families in the
              tender, sacred weeks that follow a birth. My work is lineage-rooted,
              identity-aligned, and quiet by design — care that meets you where
              you actually are, not where culture insists you should be.
            </p>
            <p>
              I came to this work through my own becoming and through the women
              who shaped me. What I offer is not a service so much as a steady
              presence: someone who listens, who tends, who knows how to hold
              the threshold between who you were and who you are becoming.
            </p>
            <p>
              I am trained as a postpartum doula, a newborn care specialist, and a
              holistic family coach. I am informed by Newborn Behavioral
              Observations, Innate Postpartum Care, and the ancestral practices
              of nourishment, warmth, and ceremony that long preceded any
              certification.
            </p>
            <p className="font-serif italic text-cocoa text-xl">
              My intention is simple: to make sure no family begins this chapter alone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-[7fr_5fr] gap-10 md:gap-16 items-center">
          <div className="space-y-6 text-lg text-earth/80 leading-relaxed order-2 md:order-1">
            <div className="uppercase tracking-[0.28em] text-xs text-clay">Your story, your becoming</div>
            <h2 className="text-3xl md:text-4xl leading-tight text-cocoa">
              Walking with you, at your own pace.
            </h2>
            <p>
              Becoming a parent is not a single moment — it is a slow, daily
              unfolding. I show up as a steady companion along that walk: noticing
              what you might not yet have words for, naming what is already true,
              and trusting the wisdom that lives in your lineage and in your body.
            </p>
            <p>
              There is no right way to begin. There is only your way, supported.
            </p>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)]">
            <img
              src={walkingAsset.url}
              alt="Ashlee walking down a sunlit city sidewalk in a plaid coat, smiling toward the camera"
              loading="lazy"
              width={1280}
              height={1920}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-blush/60">
        <div className="mx-auto max-w-5xl px-6 py-20 grid sm:grid-cols-3 gap-8 text-center">
          {[
            ["15+", "Years of practice"],
            ["4", "Pillars of care"],
            ["1", "Family at a time"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-serif text-5xl text-clay">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.22em] text-cocoa/80">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft-gradient">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl">Let's meet.</h2>
          <p className="mt-5 text-earth/75 leading-relaxed">
            A consultation is a soft, no-obligation beginning. Tell me a little about
            your family and we'll find a time to talk.
          </p>
          <div className="mt-9">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
              Reach out
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}