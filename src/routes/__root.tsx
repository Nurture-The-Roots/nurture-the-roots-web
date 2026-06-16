import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieConsent } from "../components/CookieConsent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
      { title: "Nurture The Roots™ — Fourth Trimester Expert & Postpartum Support" },
      { name: "description", content: "Lineage‑rooted postpartum support from a Fourth Trimester Expert serving families in San Francisco. Guiding you through the fourth trimester with clarity, attunement, and care." },
      { name: "author", content: "Ashlee McKenzie" },
      { property: "og:title", content: "Nurture The Roots™ — Fourth Trimester Expert & Postpartum Support" },
      { property: "og:description", content: "Lineage‑rooted postpartum support from a Fourth Trimester Expert serving families in San Francisco. Guiding you through the fourth trimester with clarity, attunement, and care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Nurture The Roots™ — Fourth Trimester Expert & Postpartum Support" },
      { name: "twitter:description", content: "Lineage‑rooted postpartum support from a Fourth Trimester Expert serving families in San Francisco. Guiding you through the fourth trimester with clarity, attunement, and care." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/AQ2lCvbMjJa5vC9jf05TYfDbSXt2/social-images/social-1781566712427-Branding_photos-50.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/AQ2lCvbMjJa5vC9jf05TYfDbSXt2/social-images/social-1781566712427-Branding_photos-50.webp" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap" },
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
        <CookieConsent />
      </div>
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/framework", label: "The Framework" },
    { to: "/services", label: "Services" },
    { to: "/client-journey", label: "Client Journey" },
    { to: "/workshops", label: "Workshops" },
  ] as const;
  const resourcesItems = [
    { to: "/resources", label: "Resources" },
    { to: "/blog", label: "Blog" },
    { to: "/media", label: "Media" },
    { to: "/faq", label: "FAQ" },
  ] as const;
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const resourcesActive = resourcesItems.some((r) => pathname.startsWith(r.to));
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setResourcesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setResourcesOpen(false), 120);
  };
  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);
  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);
  const allMobileNav = [...nav, ...resourcesItems, { to: "/contact", label: "Contact" }] as const;
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-[color-mix(in_oklab,var(--sand)_85%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="font-serif text-lg text-cocoa tracking-wide">
          Nurture The Roots<span className="align-super text-[0.55em] ml-0.5">™</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-earth/80">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-link hover:text-cocoa transition-colors"
              activeProps={{ className: "nav-link is-active text-cocoa", "aria-current": "page" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              onFocus={openMenu}
              aria-haspopup="menu"
              aria-expanded={resourcesOpen}
              aria-current={resourcesActive ? "page" : undefined}
              className={`nav-link hover:text-cocoa transition-colors inline-flex items-center gap-1 ${resourcesActive ? "is-active text-cocoa" : ""}`}
            >
              Resources
              <span aria-hidden className="text-[0.6rem] mt-0.5">▾</span>
            </button>
            {resourcesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full -translate-x-1/2 mt-3 min-w-[10rem] rounded-xl border border-taupe/40 bg-sand shadow-[0_18px_40px_-22px_rgba(74,63,57,0.5)] py-2"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                {resourcesItems.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-cocoa/80 hover:bg-blush/60 hover:text-cocoa transition-colors"
                    activeProps={{
                      className:
                        "block px-4 py-2 text-sm text-cocoa bg-blush/40 border-l-2 border-clay",
                      "aria-current": "page",
                    }}
                    onClick={() => setResourcesOpen(false)}
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className="nav-link hover:text-cocoa transition-colors"
            activeProps={{ className: "nav-link is-active text-cocoa", "aria-current": "page" }}
          >
            Contact
          </Link>
        </nav>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center rounded-full border border-taupe/70 px-4 py-2 text-sm text-cocoa hover:bg-blush transition-colors"
        >
          Begin
        </Link>
        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-taupe/60 p-2 text-cocoa hover:bg-blush transition-colors"
        >
          <span className="relative block h-5 w-5">
            <Menu
              size={20}
              className={`absolute inset-0 transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}
            />
            <X
              size={20}
              className={`absolute inset-0 transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}
            />
          </span>
        </button>
      </div>
      {/* Mobile slide-down panel + backdrop */}
      <div
        className={`lg:hidden fixed inset-0 top-[var(--header-h,0px)] z-30 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-cocoa/30 backdrop-blur-sm" />
      </div>
      <nav
        id="mobile-nav-panel"
        aria-hidden={!mobileOpen}
        className={`lg:hidden absolute left-0 right-0 top-full z-40 origin-top overflow-hidden border-b border-taupe/40 bg-sand shadow-[0_20px_40px_-24px_rgba(74,63,57,0.45)] transition-all duration-300 ease-out ${
          mobileOpen
            ? "max-h-[80vh] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="mx-auto max-w-2xl px-6 py-6 flex flex-col divide-y divide-taupe/30">
          {allMobileNav.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 border-l-2 border-transparent font-serif text-lg text-cocoa/85 hover:text-clay transition-colors"
                activeProps={{
                  className:
                    "block py-3 pl-3 border-l-2 border-clay font-serif text-lg text-clay font-medium",
                  "aria-current": "page",
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 bg-taupe text-cocoa">
      {/* Brand anchor line */}
      <div className="border-b border-cocoa/10">
        <p className="mx-auto max-w-3xl px-6 py-8 text-center font-serif italic text-base md:text-lg text-cocoa/80 leading-[1.6]">
          Rooted care for the fourth trimester — San Francisco Bay Area.
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* Brand Info */}
        <div>
          <div className="font-serif text-2xl">
            Nurture The Roots<span className="align-super text-[0.55em] ml-0.5">™</span>
          </div>
          <p className="mt-2 text-sm text-cocoa/75">
            Postpartum Support · San Francisco, CA
          </p>
        </div>

        {/* Contact */}
        <div className="text-sm text-cocoa/80">
          <div className="uppercase tracking-[0.2em] text-xs text-clay mb-3">Contact</div>
          <p>San Francisco, California — Serving families across the Bay Area</p>
          <p className="mt-2">
            <a href="mailto:ashleemckenzie@nurturetheroots.co" className="hover:text-clay transition-colors">
              ashleemckenzie@nurturetheroots.co
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div className="text-sm text-cocoa/80">
          <div className="uppercase tracking-[0.2em] text-xs text-clay mb-3">Navigation</div>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-clay transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-clay transition-colors">About</Link></li>
            <li><Link to="/framework" className="hover:text-clay transition-colors">The Framework</Link></li>
            <li><Link to="/services" className="hover:text-clay transition-colors">Services</Link></li>
            <li><Link to="/client-journey" className="hover:text-clay transition-colors">Client Journey</Link></li>
            <li><Link to="/workshops" className="hover:text-clay transition-colors">Workshops</Link></li>
            <li><Link to="/resources" className="hover:text-clay transition-colors">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-clay transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-sm text-cocoa/80">
          <div className="uppercase tracking-[0.2em] text-xs text-clay mb-3">Legal</div>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="hover:text-clay transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-clay transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cocoa/15">
        <div className="mx-auto max-w-6xl px-6 py-10 space-y-6">
          <p className="text-xs text-cocoa/65 text-center">
            My support is relational and educational, not medical. Please consult your healthcare provider for medical concerns.
          </p>
          <p className="text-xs text-cocoa/65 text-center max-w-2xl mx-auto">
            The Nurture The Roots™ Postpartum Framework and related language are original intellectual property of Nurture The Roots LLC.
          </p>
          <p className="text-xs text-cocoa/65 text-center">
            © 2026 Nurture the Roots LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
