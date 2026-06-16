import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "ntr-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-taupe/50 bg-sand/95 backdrop-blur-sm shadow-[0_18px_40px_-22px_rgba(74,63,57,0.5)] px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-cocoa/85">
            This site uses a few simple cookies to understand how visitors use the
            pages — never to sell or share your information. See our{" "}
            <Link to="/privacy" className="underline underline-offset-2 hover:text-clay">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => decide("declined")}
              className="rounded-full border border-taupe/70 px-4 py-2 text-sm text-cocoa hover:bg-blush transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="rounded-full bg-clay px-4 py-2 text-sm font-medium text-sand hover:bg-cocoa transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}