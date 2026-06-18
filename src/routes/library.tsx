import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionDivider } from "@/components/SectionDivider";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      {
        title:
          "Postpartum Library — Emotions, Recovery, Feeding, Sleep & More | Nurture The Roots™",
      },
      {
        name: "description",
        content:
          "A curated postpartum learning library organized by depth — Skimmer, Dipper, and Diver. Explore seven topic categories: Emotions, Recovery, Feeding, Sleep, Newborn Care, Relationships, and Identity.",
      },
      {
        property: "og:title",
        content: "Postpartum Library | Nurture The Roots™",
      },
      {
        property: "og:description",
        content:
          "Seven topic categories organized by Skimmer, Dipper, and Diver depth — a curated postpartum learning library for new families.",
      },
      { property: "og:url", content: "https://nurturetheroots.co/library" },
    ],
    links: [{ rel: "canonical", href: "https://nurturetheroots.co/library" }],
  }),
  component: LibraryPage,
});

type Depth = "Skimmer" | "Dipper" | "Diver";

interface DepthEntry {
  label: string;
  description: string;
  items: string[];
}

interface Category {
  name: string;
  tagline: string;
  emoji: string;
  depths: Record<Depth, DepthEntry>;
}

const depths: Depth[] = ["Skimmer", "Dipper", "Diver"];

const depthMeta: Record<Depth, { color: string; bg: string; description: string }> = {
  Skimmer: {
    color: "text-clay",
    bg: "bg-blush/60 border-clay/20",
    description: "Quick orientation — what you need to know right now.",
  },
  Dipper: {
    color: "text-cocoa",
    bg: "bg-sand/70 border-taupe/30",
    description: "Guided exploration — go a little deeper when you're ready.",
  },
  Diver: {
    color: "text-earth",
    bg: "bg-taupe/20 border-cocoa/15",
    description: "Deep dive — comprehensive understanding for those who want it all.",
  },
};

const categories: Category[] = [
  {
    name: "Emotions",
    tagline: "Understanding your inner landscape.",
    emoji: "🌿",
    depths: {
      Skimmer: {
        label: "What to expect emotionally",
        description:
          "The fourth trimester brings a wide range of emotions — joy, grief, love, overwhelm, and everything in between. This is normal and expected.",
        items: [
          "Hormonal shifts in the first weeks",
          "The difference between baby blues and postpartum mood disorders",
          "Emotional ambivalence is common and valid",
          "Your nervous system is in recovery",
        ],
      },
      Dipper: {
        label: "Navigating your emotional world",
        description:
          "Learning to name, hold, and work with your emotions — rather than pushing through them.",
        items: [
          "Co-regulation: how your calm creates your baby's calm",
          "Processing identity grief and unexpected feelings",
          "Window of tolerance in the postpartum period",
          "When emotions signal a need for more support",
          "Somatic tools for emotional regulation",
        ],
      },
      Diver: {
        label: "The psychology of early parenthood",
        description:
          "A deeper look at the psychological landscape of new parenthood — matrescence, patrescence, and identity transformation.",
        items: [
          "Matrescence: the developmental passage into motherhood",
          "Attachment theory and your own attachment history",
          "Perinatal mood and anxiety disorders — full picture",
          "Trauma and postpartum: what you carry shapes what you experience",
          "Grief, ambivalence, and the complexity of love",
          "Building emotional literacy as a new parent",
        ],
      },
    },
  },
  {
    name: "Recovery",
    tagline: "Caring for your body after birth.",
    emoji: "🌱",
    depths: {
      Skimmer: {
        label: "Your body needs rest and care",
        description:
          "Birth is significant — whether vaginal or cesarean. Your body deserves the same care and attention as your baby.",
        items: [
          "The physical reality of the first six weeks",
          "Rest is not a luxury — it's healing",
          "Warning signs to watch for",
          "Nutrition and hydration basics",
        ],
      },
      Dipper: {
        label: "Supporting your postpartum body",
        description:
          "Deeper support for physical healing — what helps, what to avoid, and how to listen to your body.",
        items: [
          "Pelvic floor awareness and gentle recovery",
          "Cesarean recovery: layers and timeline",
          "Sleep deprivation: cumulative effects and survival strategies",
          "Hormonal changes and their physical effects",
          "Movement re-entry: when and how",
          "Postpartum nutrition for healing and lactation",
        ],
      },
      Diver: {
        label: "Comprehensive postpartum physical care",
        description:
          "A thorough understanding of postpartum recovery — for parents who want to approach healing with full knowledge.",
        items: [
          "The four trimesters: a physiological framework",
          "Core and pelvic floor rehabilitation",
          "Diastasis recti: understanding and rehabilitation",
          "Postpartum thyroid changes",
          "Pain management: pharmacological and non-pharmacological",
          "Building a sustainable recovery support system",
          "When to seek specialist care",
        ],
      },
    },
  },
  {
    name: "Feeding",
    tagline: "Nourishing your baby — in every way it takes.",
    emoji: "🍃",
    depths: {
      Skimmer: {
        label: "Feeding basics",
        description:
          "Feeding is one of the most common sources of stress in the early weeks. Whatever your path looks like, you are feeding your baby.",
        items: [
          "Breast, bottle, and combination feeding are all valid",
          "Hunger cues vs. fullness cues",
          "Newborn feeding frequency is normal and expected",
          "Feeding is relationship — not just nutrition",
        ],
      },
      Dipper: {
        label: "Feeding rhythms and support",
        description:
          "A guided look at the practical and relational dimensions of feeding — how to read your baby, support your body, and find your rhythm.",
        items: [
          "Breastfeeding mechanics: latch, transfer, and output",
          "Bottle-feeding responsively",
          "Milk supply: myths and realities",
          "Feeding and sleep — the connection",
          "Common feeding challenges and first steps",
          "Asking for help: when and from whom",
        ],
      },
      Diver: {
        label: "Deep understanding of infant feeding",
        description:
          "For parents who want the full picture — evidence-based, relational, and developmentally grounded.",
        items: [
          "Infant gut development and feeding readiness",
          "Lactation physiology: supply and demand in detail",
          "Tongue tie and oral function: what to look for",
          "Formula: navigating options with confidence",
          "Feeding aversion: recognition and response",
          "Combination feeding as a sustainable choice",
          "Weaning: a developmental and relational process",
          "Feeding trauma and how to heal it",
        ],
      },
    },
  },
  {
    name: "Sleep",
    tagline: "Understanding newborn sleep — without pressure.",
    emoji: "🌙",
    depths: {
      Skimmer: {
        label: "Newborn sleep is not adult sleep",
        description:
          "Newborns are biologically designed to sleep lightly, wake frequently, and need proximity. This is normal developmental behavior.",
        items: [
          "Newborns have short sleep cycles by design",
          "Frequent waking is protective and expected",
          "Safe sleep fundamentals",
          "You are not 'creating bad habits' by responding",
        ],
      },
      Dipper: {
        label: "Navigating sleep in the fourth trimester",
        description:
          "A deeper look at responsive sleep — how to support your baby's sleep while protecting your own wellbeing.",
        items: [
          "Understanding sleep states and transitions",
          "Developmental patterns: what to expect when",
          "Safe sleep: the full picture",
          "Contact naps and their developmental value",
          "Responsive settling techniques",
          "Managing your own sleep deprivation",
          "What disrupts sleep — and what actually helps",
        ],
      },
      Diver: {
        label: "Sleep science and the fourth trimester",
        description:
          "Comprehensive, evidence-based understanding of infant sleep — grounded in developmental science, not trends.",
        items: [
          "Infant sleep architecture: active vs. quiet sleep",
          "The neuroscience of sleep regulation",
          "Night waking and brain development",
          "SIDS prevention: full evidence review",
          "Bedsharing: the evidence, the risks, the realities",
          "Sleep training: what the research actually says",
          "Sleep regressions as developmental leaps",
          "Individual variation in infant sleep",
          "Building sustainable sleep rhythms without pressure",
        ],
      },
    },
  },
  {
    name: "Newborn Care",
    tagline: "Reading your baby from day one.",
    emoji: "🤲",
    depths: {
      Skimmer: {
        label: "Your newborn communicates",
        description:
          "Newborns are not blank slates. From their first moments, they express themselves through cues, states, and behavior. You can learn to read them.",
        items: [
          "Newborns have six behavioral states",
          "Cues are communication — not manipulation",
          "The most important thing: be present and responsive",
          "You will learn your baby — trust the process",
        ],
      },
      Dipper: {
        label: "Understanding and caring for your newborn",
        description:
          "A practical and developmental guide to reading your baby and responding with confidence.",
        items: [
          "The six states of newborn alertness",
          "Early hunger, discomfort, and engagement cues",
          "Soothing techniques that actually work",
          "Swaddling, holding, and movement",
          "Bathing, skin care, and umbilical cord care",
          "When to call the pediatrician",
          "Understanding the Newborn Behavioral Observations (NBO)",
        ],
      },
      Diver: {
        label: "Newborn developmental science",
        description:
          "Deep understanding of newborn neurology, behavior, and communication — for parents who want to know the 'why' behind their baby's behavior.",
        items: [
          "Neonatal neurobehavioral science: the basics",
          "The Brazelton Neonatal Behavioral Assessment Scale",
          "Newborn sensory systems: what they see, hear, feel",
          "Autonomic nervous system regulation in newborns",
          "Habituation, orientation, and self-regulation",
          "Individual differences in newborn temperament",
          "Early brain development and responsive caregiving",
          "Toxic stress and protective factors",
          "Premature infants: developmental considerations",
        ],
      },
    },
  },
  {
    name: "Relationships",
    tagline: "How a baby changes everything between people.",
    emoji: "💛",
    depths: {
      Skimmer: {
        label: "Relationships shift — that's normal",
        description:
          "A new baby changes every relationship in the family — partnerships, friendships, and extended family. This is expected, and it can be navigated.",
        items: [
          "Partnership stress increases after a baby — for almost everyone",
          "You don't have to do this alone",
          "Asking for and accepting help is a skill",
          "Boundaries with family are healthy and necessary",
        ],
      },
      Dipper: {
        label: "Tending to your relationships",
        description:
          "Practical and emotional tools for navigating the relational landscape of new parenthood.",
        items: [
          "Communicating needs to a partner",
          "Division of labor: realities and renegotiation",
          "When partners are on different pages",
          "Maintaining friendship during the fog of early parenthood",
          "Navigating extended family dynamics",
          "Building your support ecosystem",
          "The role of community in postpartum wellbeing",
        ],
      },
      Diver: {
        label: "The relational architecture of early parenthood",
        description:
          "A deep exploration of how relationships transform — with your partner, your family of origin, your friendships, and yourself.",
        items: [
          "Gottman research on couples after baby",
          "Attachment theory applied to adult partnerships",
          "How your family of origin shapes your parenting",
          "Grief, resentment, and repair in relationships",
          "Sexuality, intimacy, and postpartum body image",
          "Single parenting: relational considerations",
          "Protective factors in postpartum relationships",
          "Building a village: cultural and community practices",
        ],
      },
    },
  },
  {
    name: "Identity",
    tagline: "Who you are becoming — not just what you're doing.",
    emoji: "🌸",
    depths: {
      Skimmer: {
        label: "You are changing, too",
        description:
          "Becoming a parent is one of the most significant identity transitions in adult life. You are not the same person you were before — and that's part of the process.",
        items: [
          "Matrescence and patrescence: parental identity formation",
          "Grief and the life you left behind",
          "Your values are being clarified right now",
          "This is a passage, not a problem",
        ],
      },
      Dipper: {
        label: "Navigating your identity transition",
        description:
          "Guided reflection on who you are becoming — how to hold both the old and new parts of yourself.",
        items: [
          "What you're grieving and what you're gaining",
          "Reconnecting with the parts of yourself that matter most",
          "Career, purpose, and meaning in the postpartum period",
          "Your body, your autonomy, your story",
          "Parenting values: what do you actually believe?",
          "The identity shift in non-birthing partners",
          "Building a life that holds both parent and self",
        ],
      },
      Diver: {
        label: "The psychology of parental identity formation",
        description:
          "A comprehensive exploration of the identity transformation that accompanies parenthood — psychologically, culturally, and relationally.",
        items: [
          "Matrescence as a developmental life stage",
          "The neuroscience of the parental brain",
          "Cultural and ancestral identity in parenting",
          "Intergenerational transmission and conscious parenting",
          "Loss, reinvention, and integration",
          "Feminist frameworks for postpartum identity",
          "Racial and cultural identity in early parenthood",
          "Building an integrated postpartum identity",
          "Meaning-making and postpartum growth",
        ],
      },
    },
  },
];

function DepthBadge({ depth }: { depth: Depth }) {
  const meta = depthMeta[depth];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em] font-medium ${meta.bg} ${meta.color}`}
    >
      {depth}
    </span>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const [activeDepth, setActiveDepth] = useState<Depth>("Skimmer");
  const entry = category.depths[activeDepth];

  return (
    <div className="rounded-2xl border border-taupe/25 bg-sand/60 overflow-hidden">
      {/* Category header */}
      <div className="px-7 pt-7 pb-5 border-b border-taupe/15">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden>
            {category.emoji}
          </span>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-[1.2] text-cocoa">
              {category.name}
            </h2>
            <p className="mt-1 font-serif italic text-sm md:text-base text-cocoa/70 leading-[1.5]">
              {category.tagline}
            </p>
          </div>
        </div>

        {/* Depth selector */}
        <div className="mt-5 flex flex-wrap gap-2">
          {depths.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDepth(d)}
              className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                activeDepth === d
                  ? depthMeta[d].bg + " " + depthMeta[d].color
                  : "border-taupe/25 text-cocoa/50 hover:border-taupe/50 hover:text-cocoa/70"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Depth content */}
      <div className="px-7 py-6">
        <div className="flex items-center gap-2 mb-3">
          <DepthBadge depth={activeDepth} />
          <span className="font-serif italic text-sm text-cocoa/75">{entry.label}</span>
        </div>
        <p className="text-[15px] text-cocoa/80 leading-[1.85] mb-4">{entry.description}</p>
        <ul className="space-y-2">
          {entry.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[14px] text-cocoa/75 leading-[1.75]"
            >
              <span className="text-clay mt-1.5 text-[0.45rem] shrink-0">&#9679;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LibraryPage() {
  return (
    <div className="library-page">
      {/* HERO */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-36 md:pb-24 text-center">
          <div className="uppercase tracking-[0.32em] text-xs text-clay mb-8">Resources</div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-cocoa">
            Postpartum Library
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-[17px] text-cocoa/80 leading-[1.85]">
            Seven topic categories — Emotions, Recovery, Feeding, Sleep, Newborn Care,
            Relationships, Identity — organized by depth so you can engage at your own pace.
          </p>
        </div>
      </section>

      {/* DEPTH GUIDE */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-16 md:pb-20">
          <div className="rounded-2xl border border-taupe/25 bg-blush/40 p-7 md:p-9">
            <h2 className="font-serif text-xl text-cocoa mb-5">How to use this library</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {depths.map((d) => (
                <div key={d} className={`rounded-xl border p-4 ${depthMeta[d].bg}`}>
                  <div
                    className={`text-xs uppercase tracking-[0.22em] font-medium mb-1 ${depthMeta[d].color}`}
                  >
                    {d}
                  </div>
                  <p className="text-[13px] text-cocoa/75 leading-[1.7]">
                    {depthMeta[d].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CATEGORIES */}
      <section className="section bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-hero-gradient">
        <div className="mx-auto max-w-2xl px-6 py-28 md:py-36 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-6">
            Want Personalized Guidance?
          </div>
          <h2 className="sr-only">Want Personalized Guidance?</h2>
          <p className="text-[17px] text-cocoa/80 leading-[1.85] max-w-xl mx-auto">
            The library gives you a foundation. For support that's shaped around your family, your
            baby, and your specific season — reach out for a consultation.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="button inline-flex items-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="button inline-flex items-center rounded-full border border-cocoa/30 px-8 py-4 text-sm font-medium text-cocoa hover:bg-cocoa/5 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
