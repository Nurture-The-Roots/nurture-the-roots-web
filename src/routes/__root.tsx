import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="not-found flex min-h-screen items-center justify-center bg-hero-gradient px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-cocoa">
          This page isn't here.
        </h1>
        <p className="mt-6 text-[17px] text-cocoa/80 leading-[1.85]">
          Let's get you back to what you need.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="button inline-flex items-center justify-center rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand shadow-sm transition-colors hover:bg-cocoa"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nurture The Roots™ — Postpartum Support" },
      {
        name: "description",
        content:
          "Lineage-rooted, identity-aligned postpartum support for the fourth trimester — honoring who you are, where you come from, and the new life emerging in your arms. Serving families in San Francisco.",
      },
      { name: "author", content: "Ashlee McKenzie" },
      { property: "og:title", content: "Nurture The Roots™ — Postpartum Support" },
      {
        property: "og:description",
        content:
          "Lineage-rooted, identity-aligned postpartum support for the fourth trimester — honoring who you are, where you come from, and the new life emerging in your arms. Serving families in San Francisco.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Nurture The Roots™ — Postpartum Support" },
      {
        name: "twitter:description",
        content:
          "Lineage-rooted, identity-aligned postpartum support for the fourth trimester — honoring who you are, where you come from, and the new life emerging in your arms. Serving families in San Francisco.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/AQ2lCvbMjJa5vC9jf05TYfDbSXt2/social-images/social-1781566712427-Branding_photos-50.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/AQ2lCvbMjJa5vC9jf05TYfDbSXt2/social-images/social-1781566712427-Branding_photos-50.webp",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Nunito+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/framework", label: "Framework" },
    { to: "/services", label: "Services" },
    { to: "/resources", label: "Resources" },
    { to: "/contact", label: "Contact" },
  ] as const;

  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const openBtnRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Body-scroll lock + ESC to close + focus trap when drawer is open
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Capture the trigger element so we can restore focus to it on cleanup.
    const trigger = openBtnRef.current;

    // Move focus to the close button
    closeBtnRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      // Return focus to the trigger
      trigger?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-[color-mix(in_oklab,var(--sand)_88%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="font-serif text-lg text-cocoa tracking-wide">
          Nurture The Roots<span className="align-super text-[0.55em] ml-0.5">™</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-earth">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-cocoa transition-colors"
              activeProps={{ className: "text-cocoa" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full border border-cocoa/25 px-4 py-2 text-sm text-cocoa hover:bg-clay hover:text-sand hover:border-clay transition-colors"
        >
          Begin
        </Link>

        {/* Mobile hamburger trigger */}
        <button
          ref={openBtnRef}
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 -mr-2 text-cocoa hover:bg-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-mobile-drawer"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          id="site-mobile-drawer"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-cocoa/40 backdrop-blur-sm cursor-default"
          />
          {/* Drawer panel */}
          <div
            ref={drawerRef}
            className="absolute inset-y-0 right-0 w-full max-w-sm bg-sand shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
              <span className="font-serif text-lg text-cocoa tracking-wide">
                Nurture The Roots<span className="align-super text-[0.55em] ml-0.5">™</span>
              </span>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md p-2 -mr-2 text-cocoa hover:bg-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
                aria-label="Close menu"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="flex flex-col gap-1">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-4 font-serif text-2xl text-cocoa hover:bg-blush transition-colors"
                      activeProps={{
                        className:
                          "block rounded-lg px-3 py-4 font-serif text-2xl text-clay bg-blush",
                      }}
                      activeOptions={{ exact: n.to === "/" }}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-border/60">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-clay px-6 py-3.5 text-sm font-medium text-sand shadow-sm hover:bg-clay-deep transition-colors"
                >
                  Begin
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 bg-blush text-cocoa border-t border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center space-y-4">
        <p className="text-[15px] text-earth leading-[1.85]">
          Lineage-rooted, identity-aligned postpartum &amp; newborn support in the San Francisco Bay
          Area.
        </p>
        <p className="text-sm text-earth/85">
          © Nurture The Roots<span className="align-super text-[0.6em] ml-0.5">™</span> — All rights
          reserved.
        </p>
        <p className="text-xs text-taupe leading-[1.7]">
          This site is for educational purposes only and does not replace medical care.
        </p>
      </div>

      {/* Bottom bar — legal */}
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-taupe">
            <Link to="/privacy" className="hover:text-clay transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-clay transition-colors">
              Terms
            </Link>
            <Link to="/disclaimer" className="hover:text-clay transition-colors">
              Disclaimer
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
