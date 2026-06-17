/**
 * Reads third-party integration configuration from build-time public env vars.
 * Each value is optional — components degrade gracefully when missing so the
 * site keeps working before the user provides their account IDs.
 */
export const integrations = {
  calendlyUrl: import.meta.env.VITE_CALENDLY_URL as string | undefined,
  dubsadoInquiryUrl: import.meta.env.VITE_DUBSADO_INQUIRY_URL as string | undefined,
  dubsadoIntakeUrl: import.meta.env.VITE_DUBSADO_INTAKE_URL as string | undefined,
  convertKitFormAction: import.meta.env.VITE_CONVERTKIT_FORM_ACTION as string | undefined,
  clarityProjectId: import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined,
  instagramUrl: (import.meta.env.VITE_INSTAGRAM_URL as string | undefined) ?? undefined,
  tiktokUrl: (import.meta.env.VITE_TIKTOK_URL as string | undefined) ?? undefined,
  youtubeUrl: (import.meta.env.VITE_YOUTUBE_URL as string | undefined) ?? undefined,
  /** Comma-separated TikTok video URLs (one per video) for the Media page grid. */
  tiktokVideoUrls: parseList(import.meta.env.VITE_TIKTOK_VIDEO_URLS as string | undefined),
  /** Comma-separated YouTube video URLs (one per video) for the Media page grid. */
  youtubeVideoUrls: parseList(import.meta.env.VITE_YOUTUBE_VIDEO_URLS as string | undefined),
};

function parseList(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Extract a YouTube video ID from any common URL shape. */
export function youtubeIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1) || null;
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const match = u.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
    if (match) return match[2];
    return null;
  } catch {
    return null;
  }
}

/** Extract a TikTok video ID from a standard TikTok URL. */
export function tiktokIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const match = u.pathname.match(/\/video\/(\d+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}