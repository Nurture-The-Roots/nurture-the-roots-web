import { createFileRoute, Link } from "@tanstack/react-router";
import postImageAsset from "@/assets/approach-1.jpeg.asset.json";
import postImageResponsive from "@/assets/approach-1.responsive.json";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const Route = createFileRoute("/blog/what-is-a-postpartum-doula")({
  head: () => ({
    meta: [
      { title: "What Is a Postpartum Doula? | Nurture The Roots™" },
      {
        name: "description",
        content:
          "Learn what a postpartum doula does, how she differs from a night nurse or nanny, and why identity-aligned care in San Francisco transforms the fourth trimester.",
      },
      {
        property: "og:title",
        content: "What Is a Postpartum Doula? A San Francisco Guide | Nurture The Roots™",
      },
      {
        property: "og:description",
        content:
          "What a postpartum doula does, how she differs from a night nurse or nanny, and why identity-aligned care matters in the fourth trimester.",
      },
      {
        property: "og:url",
        content: "https://nurturetheroots.co/blog/what-is-a-postpartum-doula",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: postImageAsset.url },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://nurturetheroots.co/blog/what-is-a-postpartum-doula",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Is a Postpartum Doula? A Guide to Fourth Trimester Support",
          description:
            "What a postpartum doula does, how she differs from a midwife, night nurse, or nanny, and why identity-aligned care in San Francisco transforms the fourth trimester.",
          author: {
            "@type": "Person",
            name: "Ashlee McKenzie",
          },
          publisher: {
            "@type": "Organization",
            name: "Nurture The Roots™",
            logo: {
              "@type": "ImageObject",
              url: "https://nurturetheroots.co",
            },
          },
          url: "https://nurturetheroots.co/blog/what-is-a-postpartum-doula",
          image: postImageAsset.url,
          datePublished: "2026-06-15",
        }),
      },
    ],
  }),
  component: PostPage,
});

function PostPage() {
  return (
    <div className="bg-background text-cocoa">
      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:pt-36 md:pb-20 text-center">
          <p className="uppercase tracking-[0.32em] text-xs text-clay mb-6">
            Fourth Trimester · June 2026
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-cocoa">
            What Is a Postpartum Doula? A Guide to Fourth Trimester Support
          </h1>
          <p className="mt-8 text-lg md:text-xl text-cocoa/80 leading-relaxed max-w-2xl mx-auto">
            A warm guide to understanding the role, the care, and why the right support
            can change everything in your fourth trimester.
          </p>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 md:pb-28">
          <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(74,63,57,0.4)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]">
            <ResponsiveImage
              source={postImageResponsive}
              alt="Parent holding newborn beside a bassinet in a sunlit nursery"
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="bg-background">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
          <div className="space-y-12 text-[17px] text-cocoa/80 leading-[1.85]">
            <p className="font-serif text-xl md:text-2xl text-cocoa leading-[1.6]">
              If you're expecting a baby, or you've recently welcomed one, you may have
              heard the term <em>postpartum doula</em> and wondered what it really means.
              You're not alone.
            </p>

            <p>
              In a culture that often rushes new parents through the early weeks, a
              postpartum doula offers something rare: attuned, grounded, nonjudgmental
              support that honors your pace, your identity, and the family you're becoming.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-cocoa pt-4">
              What Is a Postpartum Doula?
            </h2>
            <p>
              A postpartum doula is a trained professional who supports new parents during
              the weeks and months after birth — often called the{" "}
              <Link to="/blog" className="text-clay hover:text-cocoa underline underline-offset-4 transition-colors">
                fourth trimester
              </Link>
              . Unlike medical providers, a postpartum doula does not diagnose or treat
              conditions. Instead, she offers emotional care, practical guidance, newborn
              support, and evidence-based education so you can feel grounded and confident
              in your new role. You can explore the full range of{" "}
              <Link to="/services" className="text-clay hover:text-cocoa underline underline-offset-4 transition-colors">
                postpartum doula services
              </Link>{" "}
              I offer to families in San Francisco.
            </p>
            <p>
              The word <em>doula</em> comes from the Greek for "a woman who serves." Today,
              postpartum doulas serve all kinds of families — first-time parents, second-time
              parents, single parents, and those welcoming multiples — with care that is
              relational, developmental, and deeply human.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-cocoa pt-4">
              What Does a Postpartum Doula Do?
            </h2>
            <p>
              The role of a postpartum doula is as layered as the families she serves.
              Depending on your needs, her support might include:
            </p>
            <ul className="space-y-4 my-6">
              {[
                "Emotional support and processing — holding space for the tenderness, uncertainty, and joy of early parenthood",
                "Newborn care education — reading cues, understanding communication, and building confidence in your instincts",
                "Feeding support — chestfeeding, bottle feeding, combination feeding, and early lactation guidance",
                "Overnight care — gentle, developmentally aligned nighttime support so you can rest and recover",
                "Household assistance — light meal prep, nursery organization, and creating a calm, regulated environment",
                "Parent coaching — identity support, partnership communication, and navigating the emotional landscape of becoming a family",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-clay mt-2 text-[0.5rem]">&#9679;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Every family's needs are different. A postpartum doula adapts her care to
              your rhythms, your values, and the kind of support that actually feels
              helpful — not prescriptive.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-cocoa pt-4">
              Postpartum Doula vs. Midwife, Night Nurse, and Nanny
            </h2>
            <p>
              It's natural to wonder how a postpartum doula differs from the other caregivers
              you may already be working with. Here's a gentle guide:
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  label: "Midwife or OB-GYN",
                  text: "Provides medical care during pregnancy, birth, and the immediate postpartum period. A postpartum doula does not replace your medical team — she complements it with emotional and practical support.",
                },
                {
                  label: "Night Nurse or Newborn Care Specialist",
                  text: "Focuses primarily on infant care overnight. A postpartum doula may offer overnight support, but her scope is broader — she also cares for the parents, the home environment, and the family's emotional wellbeing.",
                },
                {
                  label: "Lactation Consultant (IBCLC)",
                  text: "Specializes in clinical lactation support. Many postpartum doulas offer feeding guidance, but they refer out for complex lactation challenges. I work collaboratively with IBCLCs when deeper clinical support is needed.",
                },
                {
                  label: "Nanny or Babysitter",
                  text: "Provides ongoing childcare, often with less focus on parent education and emotional support. A postpartum doula is there to help you become confident in your own care, not to replace you.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-taupe/25 bg-blush/50 px-6 py-5"
                >
                  <h3 className="font-serif text-lg text-cocoa mb-2">{item.label}</h3>
                  <p className="text-[15px] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-cocoa pt-4">
              Identity-Aligned Postpartum Care in San Francisco
            </h2>
            <p>
              Not all postpartum support looks the same. At Nurture The Roots™, my
              approach is rooted in{" "}
              <Link to="/approach" className="text-clay hover:text-cocoa underline underline-offset-4 transition-colors">
                Identity-Aligned Care
              </Link>
              — a framework that honors who you are, where you come from, and the lineage
              you're continuing.
            </p>
            <p>
              This means your postpartum experience isn't shaped by a script or a trend. It's
              shaped by your values, your cultural rhythms, your nervous system, and the
              unique way your family moves through the world. The care you receive should
              reflect that — not override it.
            </p>
            <p>
              Whether you're drawn to ancestral practices, evidence-based guidance, or a blend
              of both, identity-aligned support meets you where you are and helps you feel
              more like yourself, not less.
            </p>
            <p>
              If this resonates, you can read more about my{" "}
              <Link to="/services" className="text-clay hover:text-cocoa underline underline-offset-4 transition-colors">
                postpartum services in San Francisco
              </Link>
              , including daytime doula care, overnight newborn support, and NBO-informed
              sessions.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-cocoa pt-4">
              When Should You Hire a Postpartum Doula?
            </h2>
            <p>
              Many families reach out during the second or early third trimester, which
              allows time to build rapport and plan for the postpartum season ahead. But it's
              never too late. Some of the families I've supported most deeply came to me
              after birth, when they realized they needed more care than they expected.
            </p>
            <p>
              If you're feeling uncertain about the early weeks, if this is your first baby
              and you crave guidance, or if you've done this before and know how much
              support matters — a postpartum doula can help.
            </p>

            <div className="rounded-2xl bg-blush/50 border border-taupe/25 p-8 md:p-10 mt-16">
              <p className="font-serif text-xl text-cocoa leading-relaxed">
                "You helped us understand our baby in a way no book ever could."
              </p>
              <p className="mt-4 text-sm text-earth/70">
                — A San Francisco family, fourth trimester
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] text-cocoa">
            Curious about working together?
          </h2>
          <p className="mt-8 text-[17px] text-cocoa/80 leading-[1.85]">
            If you're looking for postpartum support that honors your identity, your pace,
            and the family you're becoming, I'd be honored to walk with you.
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
    </div>
  );
}
