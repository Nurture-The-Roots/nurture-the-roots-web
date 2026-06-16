import { createServerFn } from "@tanstack/react-start";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

function authHeaders() {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const gscKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  if (!lovableKey || !gscKey) {
    throw new Error(
      "Google Search Console connector is not configured. Please link it from the Connectors panel.",
    );
  }
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": gscKey,
    "Content-Type": "application/json",
  } as const;
}

export type GscSite = { siteUrl: string; permissionLevel: string };

export const listGscSites = createServerFn({ method: "GET" }).handler(
  async (): Promise<GscSite[]> => {
    const res = await fetch(`${GATEWAY}/webmasters/v3/sites`, {
      headers: authHeaders(),
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Search Console sites fetch failed (${res.status}): ${body}`);
    }
    const data = (await res.json()) as { siteEntry?: GscSite[] };
    return (data.siteEntry ?? []).filter((s) =>
      ["siteOwner", "siteFullUser", "siteRestrictedUser"].includes(s.permissionLevel),
    );
  },
);

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

async function gscQuery(siteUrl: string, body: Record<string, unknown>) {
  const url = `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Search Analytics query failed (${res.status}): ${t}`);
  }
  return (await res.json()) as {
    rows?: Array<{ keys?: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  };
}

export type GscMetrics = {
  siteUrl: string;
  range: { startDate: string; endDate: string };
  totals: { clicks: number; impressions: number; ctr: number; position: number };
  daily: Array<{ date: string; clicks: number; impressions: number; ctr: number; position: number }>;
  topQueries: Array<{ query: string; clicks: number; impressions: number; ctr: number; position: number }>;
  topPages: Array<{ page: string; clicks: number; impressions: number; ctr: number; position: number }>;
};

export const getGscMetrics = createServerFn({ method: "POST" })
  .inputValidator((input: { siteUrl: string }) => {
    if (!input || typeof input.siteUrl !== "string" || !input.siteUrl) {
      throw new Error("siteUrl is required");
    }
    return { siteUrl: input.siteUrl };
  })
  .handler(async ({ data }): Promise<GscMetrics> => {
    const end = new Date();
    // GSC data lags ~2 days; use end-3 as endDate, span 28 days back
    end.setUTCDate(end.getUTCDate() - 3);
    const start = new Date(end);
    start.setUTCDate(end.getUTCDate() - 27);
    const startDate = isoDate(start);
    const endDate = isoDate(end);

    const base = { startDate, endDate, dataState: "all" as const };

    const [totalsRes, dailyRes, queriesRes, pagesRes] = await Promise.all([
      gscQuery(data.siteUrl, { ...base }),
      gscQuery(data.siteUrl, { ...base, dimensions: ["date"], rowLimit: 30 }),
      gscQuery(data.siteUrl, { ...base, dimensions: ["query"], rowLimit: 10 }),
      gscQuery(data.siteUrl, { ...base, dimensions: ["page"], rowLimit: 10 }),
    ]);

    const totalsRow = totalsRes.rows?.[0];
    const totals = totalsRow
      ? {
          clicks: totalsRow.clicks,
          impressions: totalsRow.impressions,
          ctr: totalsRow.ctr,
          position: totalsRow.position,
        }
      : { clicks: 0, impressions: 0, ctr: 0, position: 0 };

    return {
      siteUrl: data.siteUrl,
      range: { startDate, endDate },
      totals,
      daily: (dailyRes.rows ?? []).map((r) => ({
        date: r.keys?.[0] ?? "",
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
      topQueries: (queriesRes.rows ?? []).map((r) => ({
        query: r.keys?.[0] ?? "",
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
      topPages: (pagesRes.rows ?? []).map((r) => ({
        page: r.keys?.[0] ?? "",
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
    };
  });