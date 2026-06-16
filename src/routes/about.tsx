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
        <div className="mx-auto max-w-2xl px-6 pt-24 pb-12 md:pt-32 md:pb-16 font-sans">
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
              attunement, clarity, and lineage‑rooted care that honors your baby's earliest days.
            </p>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pt-8 pb-24 md:pt-12 md:pb-36 font-sans">
          <div className="mx-auto mb-12 md:mb-16 overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] max-w-md">
            <img
              src={walkingAsset.url}
              alt="Ashlee McKenzie, a postpartum doula, walking outdoors and cradling a swaddled newborn close to her chest with warm, attuned presence"
              loading="lazy"
              width={1280}
              height={1920}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mb-10">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">My Story</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Woven through lineage and lived experience
            </h2>
          </div>
          <div className="space-y-7 text-[17px] text-cocoa/80 leading-[1.85] max-w-2xl mx-auto">
            <p>
              My path into postpartum work is woven through my lineage, lived experience, and a deep
              commitment to helping families feel held during one of the most tender transitions of
              early parenthood.
            </p>
            <p>
              I support parents with grounded presence, evidence‑based guidance, and a relational
              approach that centers your family's identity and values.
            </p>
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

      {/* TRAININGS & CERTIFICATIONS */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border-t border-taupe/30" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 font-sans">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Trainings & Certifications</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
              Grounded in continued learning
            </h2>
            <p className="mt-6 mx-auto max-w-xl font-serif italic text-lg text-cocoa/75 leading-[1.5]">
              A foundation of evidence‑based training in postpartum care, newborn development, and relational support.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "ProDoula Certified Postpartum & Infant Care Doula",
                org: "ProDoula",
                year: "2024",
              },
              {
                title: "Newborn Behavioral Observations (NBO) System — Level 1",
                org: "The Brazelton Institute · Boston Children's Hospital / Harvard Medical School Teaching Hospital",
                year: "2025",
              },
              {
                title: "Beyond Trauma‑Informed Care: A Developmental & Relational Framework for Healing",
                org: "Brazelton Touchpoints Center™",
                year: "2024",
              },
              {
                title: "CAPPA Lactation Educator Training",
                org: "Childbirth and Postpartum Professional Association (CAPPA)",
                year: "2021",
              },
              {
                title: "Infant Massage Certification Training",
                org: "Infant Massage USA® — US Chapter, International Association of Infant Massage",
                year: "2011",
              },
              {
                title: "TrustLine Registered Childcare Provider",
                org: "California Department of Social Services & California Child Care Resource & Referral Network",
                year: "Since 2012",
              },
            ].map((cert, i) => (
              <li
                key={i}
                className="rounded-2xl border border-taupe/25 bg-blush/40 px-6 py-6 text-cocoa"
              >
                <div className="text-[0.65rem] uppercase tracking-[0.24em] text-clay mb-2">{cert.year}</div>
                <h3 className="font-serif text-lg md:text-xl font-medium leading-[1.3] text-cocoa">
                  {cert.title}
                </h3>
                <p className="mt-2 text-[14px] text-cocoa/75 leading-[1.6]">{cert.org}</p>
              </li>
            ))}
          </ul>
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
