import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/check-in")({
  head: () => ({
    meta: [
      { title: "Daily Check-In — Nurture The Roots™" },
      { name: "description", content: "A gentle daily check-in to support your postpartum wellbeing." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckInPage,
});

/* ── Data ─────────────────────────────────────────────────────── */

const MOODS = [
  { id: "struggling", emoji: "⛈️", label: "Struggling" },
  { id: "heavy", emoji: "☁️", label: "Heavy" },
  { id: "in-between", emoji: "⛅", label: "In between" },
  { id: "steady", emoji: "🌿", label: "Steady" },
  { id: "good", emoji: "☀️", label: "Good" },
] as const;

type MoodId = (typeof MOODS)[number]["id"];

const DAILY_TIPS = [
  {
    icon: "💧",
    headline: "If you can, drink a glass of water right now.",
    body: "That counts as taking care of yourself.",
  },
  {
    icon: "🌬️",
    headline: "Take one slow breath before the next task.",
    body: "Regulation is contagious — your calm reaches your baby.",
  },
  {
    icon: "🌱",
    headline: "Rest is not the same as doing nothing.",
    body: "Your body is doing enormous work, even when you're still.",
  },
  {
    icon: "🤲",
    headline: "You don't have to figure everything out today.",
    body: "One small, grounded action is enough.",
  },
  {
    icon: "🍃",
    headline: "Notice something outside — light, sky, a tree.",
    body: "Brief moments of nature can soften the nervous system.",
  },
  {
    icon: "💛",
    headline: "You are allowed to feel more than one thing at once.",
    body: "The fourth trimester holds complexity. All of it is valid.",
  },
  {
    icon: "🌙",
    headline: "Short sleep stretches add up.",
    body: "Even micro-rests between feeds matter to your recovery.",
  },
];

const WEEKLY_GUIDES = [
  {
    color: "bg-clay",
    title: "Reading Your Baby's Cues",
    meta: "5–8 min read · Week 1–2",
    icon: "👶",
  },
  {
    color: "bg-cocoa",
    title: "The Emotional Rollercoaster",
    meta: "5–7 min read · Week 3–4",
    icon: "📖",
  },
  {
    color: "bg-earth",
    title: "Building a Feeding Rhythm",
    meta: "6–9 min read · Week 2–3",
    icon: "🌿",
  },
  {
    color: "bg-clay",
    title: "Safe Sleep & Settling",
    meta: "4–6 min read · Any week",
    icon: "🌙",
  },
  {
    color: "bg-cocoa",
    title: "Partner Support in the Fourth Trimester",
    meta: "5–7 min read · Week 1+",
    icon: "🤝",
  },
  {
    color: "bg-earth",
    title: "Identity Shift: Becoming a Parent",
    meta: "7–10 min read · Any week",
    icon: "🌱",
  },
  {
    color: "bg-clay",
    title: "When to Ask for Help",
    meta: "4–5 min read · Any week",
    icon: "💛",
  },
];

/* ── Helpers ──────────────────────────────────────────────────── */

function getTimeGreeting(): string {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "wherever this morning finds you, take a breath.";
  if (h >= 12 && h < 17) return "wherever this afternoon finds you, take a breath.";
  if (h >= 17 && h < 21) return "wherever this evening finds you, take a breath.";
  return "wherever tonight finds you, take a breath.";
}

function getDailyTip() {
  const day = new Date().getDay(); // 0–6
  return DAILY_TIPS[day % DAILY_TIPS.length];
}

function getWeeklyGuide() {
  const week = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % WEEKLY_GUIDES.length;
  return WEEKLY_GUIDES[week];
}

/* ── Page ─────────────────────────────────────────────────────── */

function CheckInPage() {
  const [selectedMood, setSelectedMood] = useState<MoodId | null>(null);
  const [moodSaved, setMoodSaved] = useState(false);

  const greeting = getTimeGreeting();
  const tip = getDailyTip();
  const guide = getWeeklyGuide();

  function handleMoodSelect(id: MoodId) {
    if (moodSaved) return;
    setSelectedMood(id);
    setTimeout(() => setMoodSaved(true), 400);
  }

  return (
    /* Full viewport wrapper — phone-like shell on desktop */
    <div className="flex justify-center bg-blush/30 min-h-screen">
      <div className="relative flex flex-col w-full max-w-sm min-h-screen bg-sand">
        {/* ── Scrollable body ───────────────────────────────── */}
        <div className="flex-1 overflow-y-auto pb-32 px-5 pt-10">
          {/* Brand mark */}
          <p className="uppercase tracking-[0.28em] text-[10px] text-cocoa/50 mb-6">
            nurture the roots
          </p>

          {/* Greeting */}
          <h1 className="font-serif text-4xl text-cocoa leading-[1.1] mb-1">Hi Ash,</h1>
          <p className="font-serif italic text-clay text-xl leading-[1.4] mb-8">{greeting}</p>

          {/* Daily check-in card */}
          <div className="rounded-2xl border border-taupe/25 bg-white/80 shadow-sm p-5 mb-4">
            <div className="flex items-start justify-between mb-3">
              <p className="uppercase tracking-[0.2em] text-[10px] text-cocoa/50">
                Daily Check-In
              </p>
              <span className="text-[11px] text-cocoa/40">60 sec</span>
            </div>

            {moodSaved ? (
              <div className="py-4 text-center">
                <p className="font-serif text-2xl text-cocoa mb-1">
                  {MOODS.find((m) => m.id === selectedMood)?.emoji}
                </p>
                <p className="font-serif text-lg text-cocoa">
                  {MOODS.find((m) => m.id === selectedMood)?.label}
                </p>
                <p className="mt-2 text-sm text-cocoa/60">Checked in for today. Take good care.</p>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl text-cocoa leading-snug mb-5">
                  How are you feeling today?
                </h2>
                <div className="flex justify-between gap-1 mb-4">
                  {MOODS.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => handleMoodSelect(mood.id)}
                      className={`flex flex-col items-center gap-1.5 flex-1 rounded-xl py-2 px-1 transition-all ${
                        selectedMood === mood.id
                          ? "bg-blush/60 ring-1 ring-clay/40"
                          : "hover:bg-blush/30"
                      }`}
                    >
                      <span className="text-2xl">{mood.emoji}</span>
                      <span className="text-[10px] text-cocoa/70 text-center leading-tight">
                        {mood.label}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-cocoa/45 text-center">
                  All options valid. No wrong answer.
                </p>
              </>
            )}
          </div>

          {/* Today's tip */}
          <div className="rounded-2xl bg-[oklch(0.88_0.025_155)] px-5 py-4 mb-4 flex gap-4 items-start">
            <div className="shrink-0 w-9 h-9 rounded-full bg-white/50 flex items-center justify-center text-xl">
              {tip.icon}
            </div>
            <div className="min-w-0">
              <p className="uppercase tracking-[0.2em] text-[10px] text-cocoa/55 mb-1">
                Today's Tip
              </p>
              <p className="font-serif text-[17px] text-cocoa leading-snug mb-1">
                {tip.headline}
              </p>
              <p className="text-sm text-cocoa/65">{tip.body}</p>
            </div>
          </div>

          {/* This week's guide */}
          <Link
            to="/resources"
            className="block rounded-2xl border border-taupe/25 bg-white/80 shadow-sm p-4 mb-4 flex gap-4 items-center group"
          >
            <div
              className={`shrink-0 w-12 h-12 rounded-xl ${guide.color} flex items-center justify-center text-xl`}
            >
              {guide.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="uppercase tracking-[0.2em] text-[10px] text-cocoa/50 mb-0.5">
                This Week's Guide
              </p>
              <p className="font-serif text-[17px] text-cocoa leading-snug group-hover:text-clay transition-colors">
                {guide.title}
              </p>
              <p className="text-xs text-cocoa/50 mt-0.5">{guide.meta}</p>
            </div>
            <span className="text-cocoa/30 group-hover:text-clay transition-colors text-sm shrink-0">
              ↗
            </span>
          </Link>

          {/* Resources teaser cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Link
              to="/resources"
              className="rounded-2xl border border-taupe/25 bg-white/80 shadow-sm p-4 flex flex-col gap-2 group hover:border-clay/30 transition-colors"
            >
              <span className="text-2xl">📚</span>
              <p className="font-serif text-[14px] text-cocoa leading-snug group-hover:text-clay transition-colors">
                Resources Library
              </p>
              <p className="text-[11px] text-cocoa/50">Evidence-based guides</p>
            </Link>
            <Link
              to="/framework"
              className="rounded-2xl border border-taupe/25 bg-white/80 shadow-sm p-4 flex flex-col gap-2 group hover:border-clay/30 transition-colors"
            >
              <span className="text-2xl">🌱</span>
              <p className="font-serif text-[14px] text-cocoa leading-snug group-hover:text-clay transition-colors">
                The Framework
              </p>
              <p className="text-[11px] text-cocoa/50">Your fourth trimester arc</p>
            </Link>
          </div>
        </div>

        {/* ── Crisis bar ────────────────────────────────────── */}
        <div className="absolute bottom-[64px] left-0 right-0 bg-sand border-t border-taupe/30 px-4 py-2.5 flex items-center gap-2">
          <span className="text-clay text-base shrink-0">⊘</span>
          <p className="text-[11px] text-cocoa/70 leading-snug">
            Nurture The Roots does not replace medical care.{" "}
            <a
              href="https://www.postpartum.net/get-help/helpline/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cocoa hover:text-clay transition-colors underline-offset-2 hover:underline"
            >
              If you are in crisis, tap here.
            </a>
          </p>
        </div>

        {/* ── Bottom navigation ─────────────────────────────── */}
        <nav className="absolute bottom-0 left-0 right-0 h-16 bg-sand border-t border-taupe/30 flex items-center justify-around px-2">
          <Link to="/" className="flex flex-col items-center gap-0.5 min-w-0 px-2 py-1 text-cocoa/45 hover:text-cocoa/70 transition-colors">
            <HomeIcon className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-[0.1em]">Home</span>
          </Link>
          <Link to="/resources" className="flex flex-col items-center gap-0.5 min-w-0 px-2 py-1 text-cocoa/45 hover:text-cocoa/70 transition-colors">
            <LibraryIcon className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-[0.1em]">Library</span>
          </Link>
          <Link to="/check-in" className="flex flex-col items-center gap-0.5 min-w-0 px-2 py-1 text-clay transition-colors">
            <HeartCheckIcon className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-[0.1em]">Check-In</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center gap-0.5 min-w-0 px-2 py-1 text-cocoa/45 hover:text-cocoa/70 transition-colors">
            <CommunityIcon className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-[0.1em]">Community</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center gap-0.5 min-w-0 px-2 py-1 text-cocoa/45 hover:text-cocoa/70 transition-colors">
            <ProfileIcon className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-[0.1em]">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

/* ── Icon components ──────────────────────────────────────────── */

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 9.5 9-7 9 7V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
    </svg>
  );
}

function LibraryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h4v16H2zM10 3h4v19h-4zM18 8h4v14h-4z" />
    </svg>
  );
}

function HeartCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.343 7.778a4.5 4.5 0 0 1 7.414-1.393L12 7.636l1.243-1.251a4.5 4.5 0 0 1 6.414 6.302L12 20l-3.44-3.46" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 12 2 2 4-4" />
    </svg>
  );
}

function CommunityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 0 0-5.93-3.5M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 20h10v-1a5 5 0 0 0-10 0v1Z" />
    </svg>
  );
}

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx={12} cy={8} r={4} />
      <path strokeLinecap="round" d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}
