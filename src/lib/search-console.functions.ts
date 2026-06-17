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
  range: {
    startDate: string;
    endDate: string;
    days: number;
    previousStartDate: string;
    previousEndDate: string;
  };
  totals: { clicks: number; impressions: number; ctr: number; position: number };
  previousTotals: { clicks: number; impressions: number; ctr: number; position: number };
  deltas: { clicks: number; impressions: number; ctr: number; position: number };
  daily: Array<{ date: string; clicks: number; impressions: number; ctr: number; position: number }>;
  topQueries: Array<{ query: string; clicks: number; impressions: number; ctr: number; position: number }>;
  topPages: Array<{ page: string; clicks: number; impressions: number; ctr: number; position: number }>;
  topCountries: Array<{ code: string; clicks: number; impressions: number; ctr: number; position: number }>;
  topDevices: Array<{ device: string; clicks: number; impressions: number; ctr: number; position: number }>;
};

const RANGE_DAYS = { "7d": 7, "28d": 28, "90d": 90 } as const;
export type GscRange = keyof typeof RANGE_DAYS;

export const getGscMetrics = createServerFn({ method: "POST" })
  .inputValidator((input: { siteUrl: string; range?: GscRange }) => {
    if (!input || typeof input.siteUrl !== "string" || !input.siteUrl) {
      throw new Error("siteUrl is required");
    }
    const range: GscRange =
      input.range && input.range in RANGE_DAYS ? input.range : "28d";
    return { siteUrl: input.siteUrl, range };
  })
  .handler(async ({ data }): Promise<GscMetrics> => {
    const days = RANGE_DAYS[data.range];
    const end = new Date();
    // GSC data lags ~2 days; use end-3 as endDate
    end.setUTCDate(end.getUTCDate() - 3);
    const start = new Date(end);
    start.setUTCDate(end.getUTCDate() - (days - 1));
    const startDate = isoDate(start);
    const endDate = isoDate(end);

    const prevEnd = new Date(start);
    prevEnd.setUTCDate(start.getUTCDate() - 1);
    const prevStart = new Date(prevEnd);
    prevStart.setUTCDate(prevEnd.getUTCDate() - (days - 1));
    const previousStartDate = isoDate(prevStart);
    const previousEndDate = isoDate(prevEnd);

    const base = { startDate, endDate, dataState: "all" as const };
    const prevBase = {
      startDate: previousStartDate,
      endDate: previousEndDate,
      dataState: "all" as const,
    };

    const [
      totalsRes,
      prevTotalsRes,
      dailyRes,
      queriesRes,
      pagesRes,
      countriesRes,
      devicesRes,
    ] = await Promise.all([
      gscQuery(data.siteUrl, { ...base }),
      gscQuery(data.siteUrl, { ...prevBase }),
      gscQuery(data.siteUrl, { ...base, dimensions: ["date"], rowLimit: days + 2 }),
      gscQuery(data.siteUrl, { ...base, dimensions: ["query"], rowLimit: 25 }),
      gscQuery(data.siteUrl, { ...base, dimensions: ["page"], rowLimit: 25 }),
      gscQuery(data.siteUrl, { ...base, dimensions: ["country"], rowLimit: 10 }),
      gscQuery(data.siteUrl, { ...base, dimensions: ["device"], rowLimit: 3 }),
    ]);

    const totalsOf = (
      r?: { clicks: number; impressions: number; ctr: number; position: number },
    ) =>
      r
        ? { clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position }
        : { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    const totals = totalsOf(totalsRes.rows?.[0]);
    const previousTotals = totalsOf(prevTotalsRes.rows?.[0]);
    const deltas = {
      clicks: totals.clicks - previousTotals.clicks,
      impressions: totals.impressions - previousTotals.impressions,
      ctr: totals.ctr - previousTotals.ctr,
      // Invert: lower position is better
      position: previousTotals.position - totals.position,
    };

    return {
      siteUrl: data.siteUrl,
      range: { startDate, endDate, days, previousStartDate, previousEndDate },
      totals,
      previousTotals,
      deltas,
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
      topCountries: (countriesRes.rows ?? []).map((r) => ({
        code: r.keys?.[0] ?? "",
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
      topDevices: (devicesRes.rows ?? []).map((r) => ({
        device: r.keys?.[0] ?? "",
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
    };
  });

export type GscSitemap = {
  path: string;
  lastSubmitted: string | null;
  lastDownloaded: string | null;
  isPending: boolean;
  isSitemapsIndex: boolean;
  type: string;
  warnings: number;
  errors: number;
  contents: Array<{ type: string; submitted: number; indexed: number }>;
};

export const listGscSitemaps = createServerFn({ method: "POST" })
  .inputValidator((input: { siteUrl: string }) => {
    if (!input || typeof input.siteUrl !== "string" || !input.siteUrl) {
      throw new Error("siteUrl is required");
    }
    return { siteUrl: input.siteUrl };
  })
  .handler(async ({ data }): Promise<GscSitemap[]> => {
    const url = `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(data.siteUrl)}/sitemaps`;
    const res = await fetch(url, { headers: authHeaders() });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Sitemaps fetch failed (${res.status}): ${body}`);
    }
    const json = (await res.json()) as {
      sitemap?: Array<{
        path: string;
        lastSubmitted?: string;
        lastDownloaded?: string;
        isPending?: boolean;
        isSitemapsIndex?: boolean;
        type?: string;
        warnings?: string | number;
        errors?: string | number;
        contents?: Array<{ type?: string; submitted?: string | number; indexed?: string | number }>;
      }>;
    };
    const toNum = (v: string | number | undefined) =>
      v == null ? 0 : typeof v === "number" ? v : Number(v) || 0;
    return (json.sitemap ?? []).map((s) => ({
      path: s.path,
      lastSubmitted: s.lastSubmitted ?? null,
      lastDownloaded: s.lastDownloaded ?? null,
      isPending: !!s.isPending,
      isSitemapsIndex: !!s.isSitemapsIndex,
      type: s.type ?? "",
      warnings: toNum(s.warnings),
      errors: toNum(s.errors),
      contents: (s.contents ?? []).map((c) => ({
        type: c.type ?? "web",
        submitted: toNum(c.submitted),
        indexed: toNum(c.indexed),
      })),
    }));
  });