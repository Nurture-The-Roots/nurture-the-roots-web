## Goal
Make the currently active page (and, on the home page, the currently visible section) clearly highlighted in both desktop and mobile navigation — in a way that fits the warm, editorial brand voice.

## Scope
All changes live in `src/routes/__root.tsx` (the shared `SiteHeader`). No copy changes, no nav restructure, no new pages.

## 1. Elevated active styles (route-based)

Today active links only swap text color from `earth/80` → `cocoa`, which reads as a hover state. Replace with a clearer editorial treatment:

- **Desktop top-level links** (Home, About, Framework, Services, Client Journey, Workshops, Contact):
  - Active: `text-cocoa` + a soft terracotta underline rendered as a 1px `bg-clay` bar under the label (using a `relative` wrapper + `after:` pseudo via a span, since `activeProps` only swaps className). Inactive: no underline. Animate the underline width (`w-0` → `w-full`) on activation/hover for a quiet motion cue.
- **Resources dropdown button**: when the current route is one of `/resources`, `/blog`, `/media`, `/faq`, mark the trigger active using the same underline treatment. Detected via `useRouterState({ select: s => s.location.pathname })`.
- **Resources dropdown items**: keep current `bg-blush/40` active background; add a small `text-clay` leading dot (`•`) before the active item for additional clarity.
- **Mobile panel links**: active item gets `text-clay`, `font-medium`, and a 2px left `border-clay` accent with `pl-3` indent (replacing the current text-only swap). Inactive items stay flush.

All active detection continues to use TanStack's built-in `activeProps` + `activeOptions={{ exact: n.to === "/" }}` so SSR and client renders agree.

## 2. Scroll-position active state (home page sections)

On `/` only, the home page has multiple long-form sections. Add lightweight scroll-spy so the desktop nav reflects which section is in view, giving the same active treatment as a route match.

- Section ids to track on `/` (matching existing section anchors — to be confirmed after a quick read of `src/routes/index.tsx`): e.g. `#about`, `#framework`, `#services`. Each nav item maps to its section id when present on the current route.
- Implementation: a single `IntersectionObserver` inside `SiteHeader` that activates only when `pathname === "/"`. Observes the mapped section elements with `rootMargin: "-40% 0px -55% 0px"` so the active section changes when the section crosses roughly the middle of the viewport.
- Tracks `activeSection` in state. A nav item is rendered active when either (a) TanStack reports the route as active, or (b) `pathname === "/"` and `activeSection === item.sectionId`.
- Clicking a section-linked nav item on `/` smooth-scrolls to the anchor (`element.scrollIntoView({ behavior: "smooth", block: "start" })`) and closes the mobile panel.
- No scroll-spy on non-home routes — only the route-based active state applies there.

If `src/routes/index.tsx` doesn't yet have stable section ids, I'll add the minimum ids needed (`id="..."` on existing wrapper sections) without changing copy or layout.

## 3. Reduced-motion + a11y

- The underline animation respects `prefers-reduced-motion: reduce` (skip the width transition).
- Active link gets `aria-current="page"` (route match) or `aria-current="location"` (scroll-spy section). TanStack adds `data-status="active"` automatically; we'll mirror with `aria-current` via a small wrapper so screen readers announce the current page/section.

## Files touched
- `src/routes/__root.tsx` — nav link rendering, scroll-spy hook, active styling.
- `src/routes/index.tsx` — only if section `id`s are missing; add ids on existing sections.

## Out of scope
- No changes to footer, copy, color tokens, fonts, or page content.
- No new pages or nav items.
- No changes to the Resources dropdown structure beyond active styling.
