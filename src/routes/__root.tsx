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
      { title: "Nurture The Roots™ — Lineage-Rooted Postpartum Care" },
      { name: "description", content: "Guiding you through the fourth trimester with clarity and care. Lineage-rooted postpartum support based in San Francisco." },
      { name: "author", content: "Ashlee McKenzie" },
      { property: "og:title", content: "Nurture The Roots™" },
      { property: "og:description", content: "Lineage-rooted postpartum support for your most sacred beginning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
    { to: "/approach", label: "My Approach" },
    { to: "/services", label: "Services" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-[color-mix(in_oklab,var(--sand)_85%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="font-serif text-lg text-cocoa tracking-wide">
          Nurture The Roots<span className="align-super text-[0.55em] ml-0.5">™</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-earth/80">
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
          className="hidden md:inline-flex items-center rounded-full border border-taupe/70 px-4 py-2 text-sm text-cocoa hover:bg-blush transition-colors"
        >
          Begin
        </Link>
      </div>
      <nav className="md:hidden flex justify-center gap-5 pb-3 text-xs tracking-wide text-earth/75">
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
    <footer className="mt-24 bg-earth text-sand">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl">Nurture The Roots<span className="align-super text-[0.55em] ml-0.5">™</span></div>
          <p className="mt-3 text-sm text-sand/75 max-w-xs">
            Lineage-rooted postpartum support for your most sacred beginning. Based in San Francisco.
          </p>
        </div>
        <div className="text-sm text-sand/80">
          <div className="uppercase tracking-[0.2em] text-xs text-clay mb-3">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/approach" className="hover:text-clay">My Approach</Link></li>
            <li><Link to="/services" className="hover:text-clay">Services</Link></li>
            <li><Link to="/about" className="hover:text-clay">About Ashlee</Link></li>
            <li><Link to="/contact" className="hover:text-clay">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm text-sand/80">
          <div className="uppercase tracking-[0.2em] text-xs text-clay mb-3">Sanctuary</div>
          <p>San Francisco, California</p>
          <p className="mt-1">By appointment & invitation</p>
        </div>
      </div>
      <div className="border-t border-sand/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-sand/55 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Nurture The Roots™. All rights reserved.</span>
          <span>Held with care.</span>
        </div>
      </div>
    </footer>
  );
}
