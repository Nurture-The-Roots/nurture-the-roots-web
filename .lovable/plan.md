Finish the `/search-console` dashboard with date ranges + period-over-period comparison, country & device breakdowns, sitemaps status, and CSV exports. Keep the route public with `noindex, nofollow`.

## Server functions (`src/lib/search-console.functions.ts`)

Extend the existing file — no new files.

- `getGscMetrics` — add a validated `range` input: `"7d" | "28d" | "90d"` (default `28d`). Compute current window ending `today − 3 days`. Compute the immediately-preceding window of the same length. Run both windows in parallel and return:
  - `range: { startDate, endDate, days, previousStartDate, previousEndDate }`
  - `totals`, `previousTotals`, and `deltas` (`{ clicks, impressions, ctr, position }` as absolute differences; position delta is inverted so "lower is better" reads as positive)
  - `daily` (current window only, one row per day)
  - `topQueries`, `topPages` (current window, limit 25)
  - `topCountries` (dimension `country`, limit 10 — ISO-3 codes mapped to display names via `Intl.DisplayNames`)
  - `topDevices` (dimension `device`, limit 3 — DESKTOP / MOBILE / TABLET)
- `listGscSitemaps({ siteUrl })` — `GET /webmasters/v3/sites/{siteUrl}/sitemaps`. Return `Array<{ path, lastSubmitted, lastDownloaded, isPending, isSitemapsIndex, type, warnings, errors, contents: Array<{ type, submitted, indexed }> }>`. Errors surface in the panel, not as a thrown exception.

All gateway calls keep the existing `authHeaders()` + status-aware error pattern.

## Route (`src/routes/search-console.tsx`)

URL state via `validateSearch` + `zodValidator` + `fallback`:

- `site?: string` — selected verified property
- `range: "7d" | "28d" | "90d"` (default `28d`)

Behavior:

- First render: `listGscSites` (TanStack Query, 5-min stale). If `?site` is missing, navigate-replace to the first verified site so the URL is shareable.
- Metrics: `useQuery` keyed by `["gsc", "metrics", site, range]`, calls `getGscMetrics({ siteUrl, range })`. Refresh button calls `queryClient.invalidateQueries` for that key.
- Sitemaps: `useQuery` keyed by `["gsc", "sitemaps", site]`.

Layout (top → bottom inside the existing editorial shell):

1. Header (unchanged copy, updated subtitle showing the current window dates).
2. Controls row: Verified-site `<select>`, Range segmented control (7d / 28d / 90d), Refresh button.
3. Four metric cards — value + delta pill (▲ green / ▼ red, neutral when 0). Position card inverts color logic.
4. Daily trend SVG (existing chart, restyled legend to match cards).
5. Two-column grid: **Top queries** and **Top pages** — each gets a "Download CSV" button in the card header.
6. Two-column grid: **Top countries** (country name + 4 metric columns) and **Devices** (3 rows with a small bar showing share of clicks).
7. **Sitemaps** panel — table of submitted sitemaps with last-downloaded date, pending/index flags, warnings/errors counts; empty state explains how to submit one in Search Console.

CSV export is pure client-side: build a CSV string from the table data, `Blob` + `URL.createObjectURL` + anchor click. File name: `gsc-{queries|pages}-{site-host}-{range}.csv`.

## Technical details

- Date math is UTC, ISO `YYYY-MM-DD`, end = `today − 3 days`.
- All numeric formatting via existing `nfInt` / `nfPct` / `nfPos`.
- Country code → name: `new Intl.DisplayNames(["en"], { type: "region" })` with fallback to the raw code (Search Console returns ISO-3, `Intl.DisplayNames` expects ISO-2; map common ones in a small lookup, else show the code).
- All new tables reuse the existing `TableBlock` component; pass a `headerExtra` slot for the Download button.
- Keep error / not-found components and `noindex` meta; no auth gating.

## Out of scope

- URL inspection / coverage report (require separate APIs not enabled on this connector).
- Per-user OAuth — dashboard reflects the single connected Google account.
- Custom date pickers — only 7/28/90 presets.
