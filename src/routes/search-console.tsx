import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import {
  listGscSites,
  getGscMetrics,
  listGscSitemaps,
  type GscMetrics,
  type GscSitemap,
  type GscRange,
} from "@/lib/search-console.functions";

const searchSchema = z.object({
  site: fallback(z.string().optional(), undefined),
  range: fallback(z.enum(["7d", "28d", "90d"]), "28d").default("28d"),
});

export const Route = createFileRoute("/search-console")({
  component: SearchConsoleDashboard,
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Search Console Dashboard" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-2xl text-foreground">Dashboard error</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Try again
        </button>
      </div>
    );
  },
  notFoundComponent: () => <div className="p-12">Not found</div>,
});

const nfInt = new Intl.NumberFormat("en-US");
const nfPct = new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 2 });
const nfPos = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });
const regionNames =
  typeof Intl !== "undefined" && "DisplayNames" in Intl
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

// Search Console returns ISO 3166-1 alpha-3; map a handful, fall back to code.
const ISO3_TO_ISO2: Record<string, string> = {
  usa: "US", gbr: "GB", can: "CA", aus: "AU", deu: "DE", fra: "FR", esp: "ES",
  ita: "IT", nld: "NL", swe: "SE", nor: "NO", dnk: "DK", fin: "FI", irl: "IE",
  ind: "IN", jpn: "JP", kor: "KR", chn: "CN", hkg: "HK", twn: "TW", sgp: "SG",
  mex: "MX", bra: "BR", arg: "AR", chl: "CL", col: "CO", per: "PE", nzl: "NZ",
  che: "CH", aut: "AT", bel: "BE", prt: "PT", pol: "PL", cze: "CZ", grc: "GR",
  tur: "TR", isr: "IL", zaf: "ZA", are: "AE", sau: "SA", egy: "EG", phl: "PH",
  tha: "TH", vnm: "VN", idn: "ID", mys: "MY", pak: "PK", bgd: "BD", rus: "RU",
  ukr: "UA",
};
function countryName(code: string) {
  if (!code) return "(unknown)";
  const iso2 = ISO3_TO_ISO2[code.toLowerCase()];
  if (iso2 && regionNames) {
    try {
      return regionNames.of(iso2) ?? iso2;
    } catch {
      return iso2;
    }
  }
  return code.toUpperCase();
}

function SearchConsoleDashboard() {
  const { site, range } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const queryClient = useQueryClient();

  const sitesQuery = useQuery({
    queryKey: ["gsc", "sites"],
    queryFn: () => listGscSites(),
    staleTime: 5 * 60_000,
  });

  // Default the URL ?site param to the first verified site so it's shareable.
  useEffect(() => {
    if (!site && sitesQuery.data && sitesQuery.data.length > 0) {
      navigate({
        search: (p) => ({ ...p, site: sitesQuery.data![0].siteUrl }),
        replace: true,
      });
    }
  }, [site, sitesQuery.data, navigate]);

  const metricsQuery = useQuery({
    queryKey: ["gsc", "metrics", site, range],
    queryFn: () =>
      getGscMetrics({ data: { siteUrl: site!, range: range as GscRange } }),
    enabled: !!site,
    staleTime: 60_000,
  });

  const sitemapsQuery = useQuery({
    queryKey: ["gsc", "sitemaps", site],
    queryFn: () => listGscSitemaps({ data: { siteUrl: site! } }),
    enabled: !!site,
    staleTime: 5 * 60_000,
  });

  const handleRefresh = () => {
    if (!site) return;
    queryClient.invalidateQueries({ queryKey: ["gsc", "metrics", site, range] });
    queryClient.invalidateQueries({ queryKey: ["gsc", "sitemaps", site] });
  };

  const rangeWindow = metricsQuery.data?.range;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Google Search Console
          </p>
          <h1 className="mt-2 font-serif text-4xl text-foreground">
            Search performance
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {rangeWindow
              ? `${rangeWindow.startDate} → ${rangeWindow.endDate} · compared with ${rangeWindow.previousStartDate} → ${rangeWindow.previousEndDate}`
              : "Data is sourced from Google Search Console (lags ~2 days)."}
          </p>
        </header>

        <section className="mb-8 flex flex-wrap items-end gap-4">
          <div className="min-w-[280px]">
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Verified site
            </label>
            {sitesQuery.isLoading ? (
              <p className="mt-2 text-sm text-muted-foreground">Loading sites…</p>
            ) : sitesQuery.error ? (
              <p className="mt-2 text-sm text-destructive">
                {(sitesQuery.error as Error).message}
              </p>
            ) : sitesQuery.data && sitesQuery.data.length === 0 ? (
              <div className="mt-2 rounded-md border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                No verified properties found on the connected Google account. Verify
                your site in Search Console, then refresh this page.
              </div>
            ) : (
              <select
                className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                value={site ?? ""}
                onChange={(e) =>
                  navigate({ search: (p) => ({ ...p, site: e.target.value }) })
                }
              >
                {sitesQuery.data?.map((s) => (
                  <option key={s.siteUrl} value={s.siteUrl}>
                    {s.siteUrl}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Range
            </label>
            <div className="mt-2 inline-flex overflow-hidden rounded-md border border-border bg-background">
              {(["7d", "28d", "90d"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => navigate({ search: (p) => ({ ...p, range: r }) })}
                  className={`px-3 py-2 text-sm transition-colors ${
                    range === r
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {r === "7d" ? "7 days" : r === "28d" ? "28 days" : "90 days"}
                </button>
              ))}
            </div>
          </div>
          {site && (
            <button
              onClick={handleRefresh}
              className="rounded-md border border-border bg-background px-4 py-2 text-sm hover:bg-muted"
              disabled={metricsQuery.isFetching}
            >
              {metricsQuery.isFetching ? "Refreshing…" : "Refresh"}
            </button>
          )}
        </section>

        {metricsQuery.error && (
          <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
            {(metricsQuery.error as Error).message}
          </div>
        )}

        {metricsQuery.data && (
          <MetricsView m={metricsQuery.data} siteUrl={site ?? ""} range={range} />
        )}

        {metricsQuery.isLoading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 animate-pulse rounded-lg bg-muted/50" />
            ))}
          </div>
        )}

        {site && (
          <SitemapsPanel
            isLoading={sitemapsQuery.isLoading}
            error={sitemapsQuery.error as Error | null}
            data={sitemapsQuery.data ?? []}
          />
        )}
      </div>
    </main>
  );
}

function MetricsView({
  m,
  siteUrl,
  range,
}: {
  m: GscMetrics;
  siteUrl: string;
  range: string;
}) {
  const cards: Array<{
    label: string;
    value: string;
    delta: number;
    formatDelta: (n: number) => string;
    invertSign?: boolean;
  }> = [
    {
      label: "Clicks",
      value: nfInt.format(m.totals.clicks),
      delta: m.deltas.clicks,
      formatDelta: (n) => nfInt.format(Math.abs(n)),
    },
    {
      label: "Impressions",
      value: nfInt.format(m.totals.impressions),
      delta: m.deltas.impressions,
      formatDelta: (n) => nfInt.format(Math.abs(n)),
    },
    {
      label: "CTR",
      value: nfPct.format(m.totals.ctr),
      delta: m.deltas.ctr,
      formatDelta: (n) => nfPct.format(Math.abs(n)),
    },
    {
      label: "Avg. position",
      value: nfPos.format(m.totals.position),
      // Already inverted server-side so positive = improvement.
      delta: m.deltas.position,
      formatDelta: (n) => nfPos.format(Math.abs(n)),
    },
  ];

  const host = safeHost(siteUrl);
  const maxDeviceClicks = Math.max(1, ...m.topDevices.map((d) => d.clicks));

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-lg border border-border bg-card p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              {c.label}
            </div>
            <div className="mt-2 font-serif text-3xl text-foreground">{c.value}</div>
            <DeltaPill value={c.delta} format={c.formatDelta} />
          </div>
        ))}
      </div>

      <DailyChart daily={m.daily} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TableBlock
          title="Top queries"
          headers={["Query", "Clicks", "Impr.", "CTR", "Pos."]}
          rows={m.topQueries.map((r) => [
            r.query || "(not provided)",
            nfInt.format(r.clicks),
            nfInt.format(r.impressions),
            nfPct.format(r.ctr),
            nfPos.format(r.position),
          ])}
          headerExtra={
            <CsvButton
              filename={`gsc-queries-${host}-${range}.csv`}
              headers={["query", "clicks", "impressions", "ctr", "position"]}
              rows={m.topQueries.map((r) => [
                r.query,
                r.clicks,
                r.impressions,
                r.ctr,
                r.position,
              ])}
            />
          }
        />
        <TableBlock
          title="Top pages"
          headers={["Page", "Clicks", "Impr.", "CTR", "Pos."]}
          rows={m.topPages.map((r) => [
            <a
              key={r.page}
              href={r.page}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline decoration-dotted underline-offset-2 hover:no-underline"
            >
              {shortenUrl(r.page)}
            </a>,
            nfInt.format(r.clicks),
            nfInt.format(r.impressions),
            nfPct.format(r.ctr),
            nfPos.format(r.position),
          ])}
          headerExtra={
            <CsvButton
              filename={`gsc-pages-${host}-${range}.csv`}
              headers={["page", "clicks", "impressions", "ctr", "position"]}
              rows={m.topPages.map((r) => [
                r.page,
                r.clicks,
                r.impressions,
                r.ctr,
                r.position,
              ])}
            />
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TableBlock
          title="Top countries"
          headers={["Country", "Clicks", "Impr.", "CTR", "Pos."]}
          rows={m.topCountries.map((r) => [
            countryName(r.code),
            nfInt.format(r.clicks),
            nfInt.format(r.impressions),
            nfPct.format(r.ctr),
            nfPos.format(r.position),
          ])}
        />
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="mb-3 font-serif text-lg text-foreground">Devices</h2>
          {m.topDevices.length === 0 ? (
            <p className="text-sm text-muted-foreground">No data yet.</p>
          ) : (
            <ul className="space-y-3">
              {m.topDevices.map((d) => {
                const pct = d.clicks / maxDeviceClicks;
                return (
                  <li key={d.device}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="capitalize text-foreground">
                        {d.device.toLowerCase()}
                      </span>
                      <span className="tabular-nums text-muted-foreground">
                        {nfInt.format(d.clicks)} clicks · {nfPct.format(d.ctr)} CTR
                      </span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${Math.max(4, pct * 100)}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function DeltaPill({
  value,
  format,
}: {
  value: number;
  format: (n: number) => string;
}) {
  if (!Number.isFinite(value) || value === 0) {
    return (
      <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
        — no change
      </div>
    );
  }
  const up = value > 0;
  return (
    <div
      className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${
        up
          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
          : "bg-red-500/10 text-red-700 dark:text-red-400"
      }`}
    >
      <span aria-hidden>{up ? "▲" : "▼"}</span>
      {format(value)}
    </div>
  );
}

function CsvButton({
  filename,
  headers,
  rows,
}: {
  filename: string;
  headers: string[];
  rows: Array<Array<string | number>>;
}) {
  const onClick = () => {
    const escape = (v: string | number) => {
      const s = String(v ?? "");
      return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const csv = [headers, ...rows]
      .map((r) => r.map(escape).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={rows.length === 0}
      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted disabled:opacity-50"
    >
      Download CSV
    </button>
  );
}

function safeHost(u: string) {
  try {
    if (u.startsWith("sc-domain:")) return u.slice("sc-domain:".length);
    return new URL(u).host;
  } catch {
    return "site";
  }
}

function SitemapsPanel({
  isLoading,
  error,
  data,
}: {
  isLoading: boolean;
  error: Error | null;
  data: GscSitemap[];
}) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 font-serif text-lg text-foreground">Sitemaps</h2>
      {isLoading ? (
        <div className="h-24 animate-pulse rounded-lg bg-muted/50" />
      ) : error ? (
        <div className="rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
          {error.message}
        </div>
      ) : data.length === 0 ? (
        <div className="rounded-md border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
          No sitemaps submitted for this property yet. Submit one in Google
          Search Console under <em>Indexing → Sitemaps</em>.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-2">Path</th>
                <th className="px-4 py-2">Last downloaded</th>
                <th className="px-4 py-2 text-right">Submitted</th>
                <th className="px-4 py-2 text-right">Indexed</th>
                <th className="px-4 py-2 text-right">Warnings</th>
                <th className="px-4 py-2 text-right">Errors</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((s) => {
                const submitted = s.contents.reduce((acc, c) => acc + c.submitted, 0);
                const indexed = s.contents.reduce((acc, c) => acc + c.indexed, 0);
                return (
                  <tr key={s.path} className="border-b border-border/50 last:border-0">
                    <td className="max-w-[280px] truncate px-4 py-2">
                      <a
                        href={s.path}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline decoration-dotted underline-offset-2 hover:no-underline"
                      >
                        {s.path}
                      </a>
                    </td>
                    <td className="px-4 py-2 text-muted-foreground">
                      {s.lastDownloaded ? s.lastDownloaded.slice(0, 10) : "—"}
                    </td>
                    <td className="px-4 py-2 text-right tabular-nums">
                      {nfInt.format(submitted)}
                    </td>
                    <td className="px-4 py-2 text-right tabular-nums">
                      {nfInt.format(indexed)}
                    </td>
                    <td className="px-4 py-2 text-right tabular-nums">
                      {nfInt.format(s.warnings)}
                    </td>
                    <td
                      className={`px-4 py-2 text-right tabular-nums ${
                        s.errors > 0 ? "text-destructive" : ""
                      }`}
                    >
                      {nfInt.format(s.errors)}
                    </td>
                    <td className="px-4 py-2 text-xs text-muted-foreground">
                      {s.isPending ? "Pending" : "Processed"}
                      {s.isSitemapsIndex ? " · Index" : ""}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function shortenUrl(u: string) {
  try {
    const parsed = new URL(u);
    return parsed.pathname + (parsed.search || "");
  } catch {
    return u;
  }
}

function DailyChart({ daily }: { daily: GscMetrics["daily"] }) {
  if (daily.length === 0) {
    return null;
  }
  const width = 800;
  const height = 200;
  const pad = { top: 16, right: 16, bottom: 28, left: 40 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  const sorted = [...daily].sort((a, b) => a.date.localeCompare(b.date));
  const maxClicks = Math.max(1, ...sorted.map((d) => d.clicks));
  const maxImpr = Math.max(1, ...sorted.map((d) => d.impressions));

  const x = (i: number) =>
    pad.left + (sorted.length === 1 ? innerW / 2 : (i / (sorted.length - 1)) * innerW);
  const yClicks = (v: number) => pad.top + innerH - (v / maxClicks) * innerH;
  const yImpr = (v: number) => pad.top + innerH - (v / maxImpr) * innerH;

  const clicksPath = sorted
    .map((d, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${yClicks(d.clicks).toFixed(1)}`)
    .join(" ");
  const imprPath = sorted
    .map((d, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${yImpr(d.impressions).toFixed(1)}`)
    .join(" ");

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-serif text-lg text-foreground">Daily trend</h2>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-3 rounded-sm bg-primary" />
            Clicks
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-3 rounded-sm bg-muted-foreground/50" />
            Impressions
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        <line
          x1={pad.left}
          y1={pad.top + innerH}
          x2={pad.left + innerW}
          y2={pad.top + innerH}
          stroke="currentColor"
          className="text-border"
        />
        <path d={imprPath} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/50" />
        <path d={clicksPath} fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
        {sorted.map((d, i) => (
          <text
            key={d.date}
            x={x(i)}
            y={height - 8}
            textAnchor="middle"
            className="fill-muted-foreground text-[9px]"
            style={{ display: i % Math.ceil(sorted.length / 7) === 0 ? undefined : "none" }}
          >
            {d.date.slice(5)}
          </text>
        ))}
      </svg>
    </div>
  );
}

function TableBlock({
  title,
  headers,
  rows,
  headerExtra,
}: {
  title: string;
  headers: string[];
  rows: Array<Array<React.ReactNode>>;
  headerExtra?: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="font-serif text-lg text-foreground">{title}</h2>
        {headerExtra}
      </div>
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">No data yet.</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
              {headers.map((h, i) => (
                <th
                  key={h}
                  className={`py-2 ${i === 0 ? "" : "text-right"}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-border/50 last:border-0">
                {r.map((cell, j) => (
                  <td
                    key={j}
                    className={`py-2 ${j === 0 ? "max-w-[260px] truncate pr-3" : "text-right tabular-nums"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}