import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { integrations } from "@/lib/integrations";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const STYLE_HREF = "https://assets.calendly.com/assets/external/widget.css";

type CalendlyWindow = Window & {
  Calendly?: { initPopupWidget: (opts: { url: string }) => void };
};

function ensureCalendlyAssets(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") return resolve();
    if (!document.querySelector(`link[href="${STYLE_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = STYLE_HREF;
      document.head.appendChild(link);
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (existing) {
      if ((window as CalendlyWindow).Calendly) return resolve();
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Calendly failed to load")), {
        once: true,
      });
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly failed to load"));
    document.head.appendChild(script);
  });
}

type Props = {
  className?: string;
  children?: ReactNode;
  /** Overrides VITE_CALENDLY_URL when provided. */
  url?: string;
  /** When the URL is not yet configured, gracefully fall back to a mailto link. */
  fallbackHref?: string;
};

/**
 * Renders a button that opens the Calendly popup widget. Calendly's script is
 * loaded lazily on first click so it never blocks first paint.
 */
export function CalendlyButton({ className, children, url, fallbackHref }: Props) {
  const target = url ?? integrations.calendlyUrl;
  const [busy, setBusy] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleClick = useCallback(async () => {
    if (!target) return;
    setBusy(true);
    try {
      await ensureCalendlyAssets();
      (window as CalendlyWindow).Calendly?.initPopupWidget({ url: target });
    } catch (err) {
      console.error(err);
    } finally {
      if (mountedRef.current) setBusy(false);
    }
  }, [target]);

  if (!target) {
    // Graceful fallback before the Calendly URL is configured.
    return (
      <a
        href={fallbackHref ?? "/contact"}
        className={className}
        aria-label="Schedule a consultation"
      >
        {children ?? "Book a Consultation"}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      className={className}
      aria-label="Open scheduling popup"
    >
      {busy ? "Opening…" : (children ?? "Book a Consultation")}
    </button>
  );
}