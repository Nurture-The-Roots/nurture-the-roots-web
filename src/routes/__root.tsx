import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

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
      { name: "description", content: "Postpartum support for the fourth trimester — grounded, evidence‑based, and rooted in your family’s story. Serving families in San Francisco." },
      { name: "author", content: "Ashlee McKenzie" },
      { property: "og:title", content: "Nurture The Roots™ — Postpartum Support" },
      { property: "og:description", content: "Postpartum support for the fourth trimester — grounded, evidence‑based, and rooted in your family’s story. Serving families in San Francisco." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Nurture The Roots™ — Postpartum Support" },
      { name: "twitter:description", content: "Postpartum support for the fourth trimester — grounded, evidence‑based, and rooted in your family’s story. Serving families in San Francisco." },
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
    { to: "/framework", label: "Framework" },
    { to: "/resources", label: "Resources" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ] as const;
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
          className="hidden lg:inline-flex items-center rounded-full border border-taupe/70 px-4 py-2 text-sm text-cocoa hover:bg-blush transition-colors"
        >
          Begin
        </Link>
      </div>
      <nav className="lg:hidden flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 pb-3 text-xs tracking-wide text-earth/75">
        {nav.map((n) => (
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
      <div className="mx-auto max-w-3xl px-6 py-16 text-center space-y-4">
        <p className="text-[15px] text-cocoa/85 leading-[1.85]">
          Evidence‑based postpartum &amp; newborn development support in the San Francisco Bay Area.
        </p>
        <p className="text-sm text-cocoa/75">
          © Nurture The Roots<span className="align-super text-[0.6em] ml-0.5">™</span> — All rights
          reserved.
        </p>
        <p className="text-xs text-cocoa/65 leading-[1.7]">
          This site is for educational purposes only and does not replace medical care.
        </p>
      </div>

      {/* Bottom bar — legal */}
      <div className="border-t border-cocoa/15">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-cocoa/65">
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
