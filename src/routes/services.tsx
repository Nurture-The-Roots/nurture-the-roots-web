import { createFileRoute, Link } from "@tanstack/react-router";
import servicesImg from "@/assets/services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nurture The Roots™ Postpartum Care" },
      { name: "description", content: "Postpartum doula care, overnight newborn care, NBO-informed sessions, lactation education, holistic family coaching, and innate postpartum care in San Francisco." },
      { property: "og:title", content: "Services — Nurture The Roots™" },
      { property: "og:description", content: "Warm, attuned, identity-aligned postpartum offerings." },
      { property: "og:image", content: servicesImg },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Postpartum Doula Care",
    body: "Relational, in-home support in the early weeks — tending to your rest, your nourishment, your baby, and the rhythm of your days. Care that adapts as you adapt.",
  },
  {
    title: "Overnight Newborn Care",
    body: "Held, restorative nights so you can sleep deeply. I tend to feeds, soothing, and your baby's rhythms while honoring your feeding goals and your home's softness.",
  },
  {
    title: "NBO-Informed Newborn Sessions",
    body: "A gentle, observational practice rooted in the Newborn Behavioral Observations system — reading your baby's cues together so attachment grows with clarity.",
  },
  {
    title: "Lactation Education",
    body: "Attuned guidance for breastfeeding, chestfeeding, pumping, and combination feeding. Practical, body-literate, and free of shame.",
  },
  {
    title: "Holistic Family Coaching",
    body: "For the whole family system — partners, siblings, grandparents, and chosen kin. Strengthening communication, role-clarity, and shared rhythms.",
  },
  {
    title: "Innate Postpartum Care",
    body: "Lineage-rooted, ceremonial postpartum tradition: warmth, sealing, nourishment, and ritual to honor the threshold you are crossing.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-6">Care Offerings</div>
          <h1 className="text-4xl md:text-5xl leading-tight">Services</h1>
          <p className="mt-6 font-serif italic text-xl text-earth/80">
            Each offering is shaped around your family.
          </p>
          <p className="mt-4 text-earth/70 leading-relaxed">
            Care that begins with listening — to your story, your body, your lineage, your baby.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {services.map((s, i) => (
              <article key={s.title} className="border-t border-taupe/40 pt-8">
                <div className="text-clay text-sm tracking-[0.25em] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl">{s.title}</h2>
                <p className="mt-4 text-earth/80 leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/60">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="overflow-hidden rounded-2xl">
            <img src={servicesImg} alt="Parent feeding newborn in soft natural light" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl leading-tight">Not sure where to begin?</h2>
            <p className="mt-5 text-earth/80 leading-relaxed">
              That's exactly what a consultation is for. We'll sit together, listen to where
              you are, and shape a constellation of care that fits — without pressure, without script.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-sand hover:bg-cocoa transition-colors">
                Schedule a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}