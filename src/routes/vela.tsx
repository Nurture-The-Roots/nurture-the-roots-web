import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/vela")({
  component: VelaOnboarding,
});

const roles = [
  {
    value: "birthing-person",
    label: "Birthing person",
    description: "Pregnant or postpartum",
  },
  {
    value: "partner",
    label: "Partner",
    description: "Walking alongside someone",
  },
  {
    value: "other-support",
    label: "Other support person",
    description: "Family, friend, doula",
  },
] as const;

function VelaOnboarding() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [context, setContext] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: persist { name, role, context } to user profile (Supabase / context store)
    // and navigate to the Vela app dashboard once the route exists.
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-hero-gradient flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-2">
        <span className="font-serif text-sm tracking-[0.35em] text-cocoa/80">
          v e l a
        </span>
        {/* Progress indicator — step 3 of 3 */}
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-cocoa/25" />
          <div className="h-2 w-2 rounded-full bg-cocoa/25" />
          <div className="h-2 w-3 rounded-full bg-clay" />
        </div>
      </div>

      {/* Content */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col mx-auto w-full max-w-sm px-6 pt-8 pb-8 gap-8"
      >
        {/* Section label + heading */}
        <div>
          <p className="uppercase tracking-[0.22em] text-xs text-cocoa/55 mb-4">
            Personalization
          </p>
          <h1 className="font-serif text-[2.15rem] leading-[1.1] text-cocoa">
            Tell us a little{" "}
            <em className="not-italic font-serif italic text-clay">
              about you.
            </em>
          </h1>
          <p className="mt-4 text-sm text-cocoa/60 leading-[1.7]">
            Only your name is needed. Everything else is optional — share what
            feels right.
          </p>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="vela-name"
            className="uppercase tracking-[0.18em] text-[0.7rem] text-cocoa/55"
          >
            What should we call you?
          </label>
          <input
            id="vela-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Sam"
            className="w-full rounded-2xl border border-border bg-sand/70 px-5 py-4 text-base text-cocoa placeholder:text-cocoa/35 focus:outline-none focus:ring-2 focus:ring-clay/40 transition"
          />
        </div>

        {/* Role */}
        <div className="space-y-3">
          <p className="uppercase tracking-[0.18em] text-[0.7rem] text-cocoa/55">
            Which best describes you?
          </p>
          <RadioGroup value={role} onValueChange={setRole} className="gap-3">
            {roles.map((r) => (
              <label
                key={r.value}
                htmlFor={`role-${r.value}`}
                className={`flex items-center justify-between rounded-2xl border px-5 py-4 cursor-pointer transition ${
                  role === r.value
                    ? "border-clay/60 bg-clay/8 ring-1 ring-clay/30"
                    : "border-border bg-sand/70 hover:border-clay/30"
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-cocoa">{r.label}</p>
                  <p className="text-xs text-cocoa/55 mt-0.5">{r.description}</p>
                </div>
                <RadioGroupItem
                  id={`role-${r.value}`}
                  value={r.value}
                  className="shrink-0 ml-4 border-cocoa/30 text-clay"
                />
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Optional context */}
        <div className="space-y-2">
          <label
            htmlFor="vela-context"
            className="uppercase tracking-[0.18em] text-[0.7rem] text-cocoa/55"
          >
            Anything else? (optional)
          </label>
          <textarea
            id="vela-context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Loss, NICU, mental health history — only what you want to share."
            rows={4}
            className="w-full rounded-2xl border border-border bg-sand/70 px-5 py-4 text-sm text-cocoa placeholder:text-cocoa/35 focus:outline-none focus:ring-2 focus:ring-clay/40 transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!name.trim()}
          aria-label={name.trim() ? "Enter Vela" : "Enter Vela (name required)"}
          className="w-full rounded-2xl bg-clay px-6 py-4 text-base font-medium text-sand shadow-sm transition hover:bg-cocoa disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enter Vela →
        </button>
      </form>
    </div>
  );
}
