import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  listGscSites,
  getGscMetrics,
  type GscMetrics,
} from "@/lib/search-console.functions";

export const Route = createFileRoute("/search-console")({
  component: SearchConsoleDashboard,
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

function SearchConsoleDashboard() {
  const sitesQuery = useQuery({
    queryKey: ["gsc", "sites"],
    queryFn: () => listGscSites(),
    staleTime: 5 * 60_000,
  });

  const [siteUrl, setSiteUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!siteUrl && sitesQuery.data && sitesQuery.data.length > 0) {
      setSiteUrl(sitesQuery.data[0].siteUrl);
    }
  }, [siteUrl, sitesQuery.data]);

  const metricsMutation = useMutation({
    mutationFn: (url: string) => getGscMetrics({ data: { siteUrl: url } }),
  });

  useEffect(() => {
    if (siteUrl) metricsMutation.mutate(siteUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteUrl]);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Google Search Console
          </p>
          <h1 className="mt-2 font-serif text-4xl text-foreground">
            Search performance — last 28 days
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Data is sourced from Google Search Console and reflects the most recent
            28-day window (Google's data lags ~2 days).
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
                value={siteUrl ?? ""}
                onChange={(e) => setSiteUrl(e.target.value)}
              >
                {sitesQuery.data?.map((s) => (
                  <option key={s.siteUrl} value={s.siteUrl}>
                    {s.siteUrl}
                  </option>
                ))}
              </select>
            )}
          </div>
          {siteUrl && (
            <button
              onClick={() => metricsMutation.mutate(siteUrl)}
              className="rounded-md border border-border bg-background px-4 py-2 text-sm hover:bg-muted"
              disabled={metricsMutation.isPending}
            >
              {metricsMutation.isPending ? "Refreshing…" : "Refresh"}
            </button>
          )}
        </section>

        {metricsMutation.error && (
          <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
            {(metricsMutation.error as Error).message}
          </div>
        )}

        {metricsMutation.data && <MetricsView m={metricsMutation.data} />}

        {metricsMutation.isPending && !metricsMutation.data && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 animate-pulse rounded-lg bg-muted/50" />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function MetricsView({ m }: { m: GscMetrics }) {
  const cards = [
    { label: "Clicks", value: nfInt.format(m.totals.clicks) },
    { label: "Impressions", value: nfInt.format(m.totals.impressions) },
    { label: "CTR", value: nfPct.format(m.totals.ctr) },
    { label: "Avg. position", value: nfPos.format(m.totals.position) },
  ];

  return (
    <div className="space-y-10">
      <p className="text-xs text-muted-foreground">
        {m.range.startDate} → {m.range.endDate}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              {c.label}
            </div>
            <div className="mt-2 font-serif text-3xl text-foreground">{c.value}</div>
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
        />
      </div>
    </div>
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
}: {
  title: string;
  headers: string[];
  rows: Array<Array<React.ReactNode>>;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h2 className="mb-3 font-serif text-lg text-foreground">{title}</h2>
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