import { createFileRoute, Link } from "@tanstack/react-router";
import walkingAsset from "@/assets/about-ashlee-walking.jpg.asset.json";
const aboutImg = walkingAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ashlee McKenzie — Fourth Trimester Expert | Nurture The Roots™" },
      { name: "description", content: "Ashlee McKenzie is a Certified Postpartum Doula, Newborn Care Specialist, and Fourth Trimester Expert serving families across San Francisco." },
      { property: "og:title", content: "About Ashlee McKenzie — Fourth Trimester Expert" },
      { property: "og:description", content: "Lineage‑rooted postpartum support from a Fourth Trimester Expert serving San Francisco families." },
      { property: "og:url", content: "https://nurturetheroots.co/about" },
      { property: "og:image", content: aboutImg },
    ],
    links: [
      { rel: "canonical", href: "https://nurturetheroots.co/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">About</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-cocoa">
            Hi, I'm <span className="italic text-clay">Ashlee McKenzie</span>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl font-serif italic text-xl md:text-2xl text-cocoa/75 leading-[1.5]">
            A Certified Postpartum Doula, Newborn Care Specialist, and Fourth Trimester Expert —
            walking alongside San Francisco families through the earliest days of new parenthood.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-cocoa/70">
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">Certified Postpartum Doula</li>
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">Newborn Care Specialist</li>
            <li className="rounded-full border border-taupe/40 bg-sand/60 px-4 py-2">Fourth Trimester Expert</li>
          </ul>
        </div>
      </section>

      {/* MEET ASHLEE */}
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 font-sans">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Meet Ashlee</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              A grounded presence for your fourth trimester
            </h2>
          </div>
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85]">
            <p>
              I'm Ashlee McKenzie — a Certified Postpartum Doula, Newborn Care Specialist, and
              Fourth Trimester Expert serving families across San Francisco. My work is grounded in
              attunement, clarity, and lineage‑rooted care that honors the earliest days of your
              baby's life.
            </p>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 grid md:grid-cols-[6fr_5fr] gap-14 md:gap-20 items-center">
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] font-sans order-2 md:order-1 max-w-xl">
            <div className="uppercase tracking-[0.28em] text-xs text-clay">My Story</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa mt-2">
              Woven through lineage and lived experience
            </h2>
            <p className="pt-2">
              My path into postpartum work is woven through my lineage, lived experience, and a deep
              commitment to helping families feel held during one of life's most tender transitions.
            </p>
            <p>
              I support parents with grounded presence, evidence‑based guidance, and a relational
              approach that centers your family's identity and values.
            </p>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] my-8 md:my-0">
            <img
              src={walkingAsset.url}
              alt="Ashlee McKenzie holding a sleeping newborn close, standing by a bright window with greenery outside"
              loading="lazy"
              width={1280}
              height={1920}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border-t border-taupe/30" />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 font-sans">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">My Approach</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              As a Fourth Trimester Expert, I support families through
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Attuned newborn care",
              "Identity‑rooted guidance",
              "Evidence‑based education",
              "Calm, grounded presence",
              "Relational support that honors your story",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-taupe/25 bg-blush/40 px-5 py-4 text-cocoa"
              >
                <span className="text-clay mt-1 text-[0.6rem]">&#9679;</span>
                <span className="leading-relaxed text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center font-serif italic text-xl md:text-2xl text-cocoa/85 leading-[1.5] max-w-2xl mx-auto">
            This is not clinical care — it is relational, educational, and deeply human.
          </p>
        </div>
      </section>

      {/* WHY THIS WORK MATTERS */}
      <section className="bg-blush/40">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 font-sans">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Why This Work Matters</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              The fourth trimester is a sacred window
            </h2>
          </div>
          <div className="space-y-8 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              When parents feel supported, babies thrive. My role is to help you feel confident,
              connected, and deeply cared for as you step into new parenthood.
            </p>
          </div>
        </div>
      </section>

      {/* INVITATION / CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center font-sans">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Invitation</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">You don't have to navigate this beginning alone.</h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for support that honors who you are and the family you're becoming, I'd be honored to walk with you.
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
