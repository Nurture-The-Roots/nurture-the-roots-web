import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "ntr-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = useCallback((value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
    // Restore focus to whatever was focused before the banner appeared.
    if (previouslyFocused.current && document.contains(previouslyFocused.current)) {
      previouslyFocused.current.focus();
    }
  }, []);

  // Focus management: capture previous focus, move focus to Accept on open,
  // trap Tab inside the dialog, and close on Escape (treated as Decline).
  useEffect(() => {
    if (!visible) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    acceptRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        decide("declined");
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [visible, decide]);

  if (!visible) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border-2 border-taupe bg-sand shadow-[0_18px_40px_-12px_rgba(74,63,57,0.55)] px-5 py-5 sm:px-6 sm:py-6">
        <h2
          id="cookie-consent-title"
          className="font-serif text-lg text-cocoa mb-2"
        >
          A note about cookies
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p
            id="cookie-consent-desc"
            className="text-sm leading-relaxed text-cocoa max-w-prose"
          >
            This site uses a few simple cookies to understand how visitors use
            the pages — never to sell or share your information. See our{" "}
            <Link
              to="/privacy"
              className="underline underline-offset-2 text-cocoa hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-sand rounded-sm"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => decide("declined")}
              className="min-h-11 rounded-full border border-cocoa/40 bg-sand px-5 py-2 text-sm font-medium text-cocoa hover:bg-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-sand transition-colors"
            >
              Decline
            </button>
            <button
              ref={acceptRef}
              type="button"
              onClick={() => decide("accepted")}
              className="min-h-11 rounded-full bg-clay px-5 py-2 text-sm font-semibold text-sand hover:bg-cocoa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa focus-visible:ring-offset-2 focus-visible:ring-offset-sand transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}