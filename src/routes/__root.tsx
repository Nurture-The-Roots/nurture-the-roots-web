import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
      { title: "Nurture The Roots™ — Postpartum Support" },
      { name: "description", content: "Gentle, lineage‑rooted postpartum support for families in San Francisco. Guiding you through the fourth trimester with clarity, attunement, and care." },
      { name: "author", content: "Ashlee McKenzie" },
      { property: "og:title", content: "Nurture The Roots™ — Postpartum Support" },
      { property: "og:description", content: "Nurture The Roots™ offers grounded, identity‑rooted postpartum support for the fourth trimester. Serving families in San Francisco with clarity, care, and attuned newborn guidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Nurture The Roots™ — Postpartum Support" },
      { name: "twitter:description", content: "Nurture The Roots™ offers grounded, identity‑rooted postpartum support for the fourth trimester. Serving families in San Francisco with clarity, care, and attuned newborn guidance." },
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
      </div>
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
  ] as const;
  const resourcesItems = [
    { to: "/blog", label: "Blog" },
    { to: "/media", label: "Media" },
    { to: "/faq", label: "FAQ" },
  ] as const;
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setResourcesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setResourcesOpen(false), 120);
  };
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-[color-mix(in_oklab,var(--sand)_85%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="font-serif text-lg text-cocoa tracking-wide">
          Nurture The Roots<span className="align-super text-[0.55em] ml-0.5">™</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-earth/80">
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
              className="hover:text-cocoa transition-colors inline-flex items-center gap-1"
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
                    activeProps={{ className: "block px-4 py-2 text-sm text-cocoa bg-blush/40" }}
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
            className="hover:text-cocoa transition-colors"
            activeProps={{ className: "text-cocoa" }}
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
      </div>
      <nav className="lg:hidden flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 pb-3 text-xs tracking-wide text-earth/75">
        {[...nav, { to: "/resources", label: "Resources" }, { to: "/contact", label: "Contact" }].map((n) => (
          <Link key={n.to} to={n.to} className="hover:text-cocoa" activeProps={{ className: "text-cocoa" }} activeOptions={{ exact: n.to === "/" }}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 bg-taupe text-cocoa">
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
            <li><Link to="/services" className="hover:text-clay transition-colors">Services</Link></li>
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
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-xs text-cocoa/65 text-center">
            My support is relational and educational, not medical. Please consult your healthcare provider for medical concerns.
          </p>
          <p className="mt-2 text-xs text-cocoa/65 text-center">
            © 2026 Nurture the Roots LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
