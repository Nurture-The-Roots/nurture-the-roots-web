import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Mood = {
  id: string;
  label: string;
  emoji: string;
  iconBg: string;
};

const MOODS: Mood[] = [
  { id: "struggling", label: "Really struggling", emoji: "🌧️", iconBg: "#6878A2" },
  { id: "heavy", label: "Heavy today", emoji: "🌥️", iconBg: "#9890BE" },
  { id: "between", label: "Somewhere in between", emoji: "⛅", iconBg: "#C4AA7A" },
  { id: "steady", label: "Holding steady", emoji: "🌿", iconBg: "#7BAF7B" },
  { id: "good", label: "Feeling good today", emoji: "☀️", iconBg: "#E8926A" },
];

const TOTAL_STEPS = 4;

interface DailyCheckInProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userName?: string;
}

export function DailyCheckIn({ open, onOpenChange, userName = "you" }: DailyCheckInProps) {
  const [step, setStep] = React.useState(1);
  const [selectedMood, setSelectedMood] = React.useState<string | null>(null);

  function handleMoodSelect(moodId: string) {
    setSelectedMood(moodId);
    setTimeout(() => {
      if (step < TOTAL_STEPS) {
        setStep((s) => s + 1);
      } else {
        onOpenChange(false);
      }
    }, 280);
  }

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) {
      setTimeout(() => {
        setStep(1);
        setSelectedMood(null);
      }, 300);
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-cocoa/25 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className={cn(
            "fixed z-50 bg-sand shadow-2xl focus:outline-none",
            /* mobile: bottom sheet */
            "inset-x-0 bottom-0 rounded-t-[28px]",
            /* sm+: centered card */
            "sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[400px] sm:rounded-[28px]",
            /* enter/exit animations */
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:slide-out-to-bottom-4 data-[state=open]:slide-in-from-bottom-4",
            "sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95",
            "sm:data-[state=closed]:slide-out-to-bottom-0 sm:data-[state=open]:slide-in-from-bottom-0",
          )}
        >
          <div className="px-5 pt-5 pb-8">
            {/* Top bar: close button + progress dots */}
            <div className="flex items-center justify-between mb-7">
              <DialogPrimitive.Close asChild>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full text-cocoa/50 transition-colors hover:bg-cocoa/8 hover:text-cocoa"
                  aria-label="Close check-in"
                >
                  <X className="h-4 w-4" />
                </button>
              </DialogPrimitive.Close>

              <div className="flex items-center gap-[5px]" aria-label={`Step ${step} of ${TOTAL_STEPS}`}>
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "block rounded-full transition-all duration-300",
                      i === step - 1
                        ? "w-[18px] h-[6px] bg-clay"
                        : "w-[6px] h-[6px] bg-cocoa/20",
                    )}
                  />
                ))}
              </div>

              {/* Invisible spacer to keep dots centred */}
              <div className="h-8 w-8" aria-hidden />
            </div>

            {/* ── Step 1: Mood selection ── */}
            {step === 1 && (
              <>
                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-cocoa/45 mb-2">
                    Daily Check‑In
                  </p>
                  <DialogPrimitive.Title asChild>
                    <h2 className="font-serif text-[2rem] font-medium text-cocoa leading-[1.15]">
                      How are you feeling,{" "}
                      <span className="italic text-clay">{userName}?</span>
                    </h2>
                  </DialogPrimitive.Title>
                  <p className="mt-2 text-[13px] text-cocoa/50 leading-relaxed">
                    All answers valid. No wrong feeling.
                  </p>
                </div>

                <div className="space-y-[10px]">
                  {MOODS.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => handleMoodSelect(mood.id)}
                      className={cn(
                        "group w-full flex items-center gap-4 rounded-2xl border border-taupe/30 bg-white/75 px-4 py-3.5 text-left transition-all duration-150",
                        "hover:border-clay/35 hover:bg-white active:scale-[0.985]",
                        selectedMood === mood.id &&
                          "border-clay/50 bg-white ring-1 ring-clay/20 scale-[0.985]",
                      )}
                    >
                      <span
                        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] text-[26px] leading-none"
                        style={{ backgroundColor: mood.iconBg + "40" }}
                      >
                        <span
                          className="flex h-[44px] w-[44px] items-center justify-center rounded-[11px] text-[22px] leading-none"
                          style={{ backgroundColor: mood.iconBg + "70" }}
                        >
                          {mood.emoji}
                        </span>
                      </span>
                      <span className="text-[15px] font-medium text-cocoa">{mood.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* ── Steps 2–4: placeholders ── */}
            {step > 1 && (
              <div className="py-10 text-center">
                <p className="font-serif text-2xl text-cocoa">
                  Step {step} of {TOTAL_STEPS}
                </p>
                <p className="mt-3 text-sm text-cocoa/55">Coming soon…</p>
                <button
                  onClick={() => setStep((s) => Math.min(s + 1, TOTAL_STEPS))}
                  className="mt-8 inline-flex items-center rounded-full bg-clay px-7 py-3 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
                >
                  {step < TOTAL_STEPS ? "Continue" : "Done"}
                </button>
              </div>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
