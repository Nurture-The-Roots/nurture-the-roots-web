import { integrations, tiktokIdFromUrl, youtubeIdFromUrl } from "@/lib/integrations";

function YouTubeGrid() {
  const ids = integrations.youtubeVideoUrls
    .map(youtubeIdFromUrl)
    .filter((v): v is string => Boolean(v));
  if (ids.length === 0) return null;
  return (
    <div>
      <h3 className="font-serif text-2xl text-cocoa mb-6">From YouTube</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        {ids.map((id) => (
          <div
            key={id}
            className="overflow-hidden rounded-2xl border border-taupe/25 bg-background shadow-[0_18px_50px_-32px_rgba(74,63,57,0.4)] aspect-video"
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}`}
              title={`YouTube video ${id}`}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TikTokGrid() {
  const items = integrations.tiktokVideoUrls
    .map((url) => ({ url, id: tiktokIdFromUrl(url) }))
    .filter((v): v is { url: string; id: string } => Boolean(v.id));
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="font-serif text-2xl text-cocoa mb-6">From TikTok</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map(({ id }) => (
          <div
            key={id}
            className="overflow-hidden rounded-2xl border border-taupe/25 bg-background shadow-[0_18px_50px_-32px_rgba(74,63,57,0.4)] aspect-[9/16] sm:aspect-[3/4]"
          >
            <iframe
              src={`https://www.tiktok.com/embed/v2/${id}`}
              title={`TikTok video ${id}`}
              loading="lazy"
              allow="encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MediaEmbeds() {
  const youtube = integrations.youtubeVideoUrls.length;
  const tiktok = integrations.tiktokVideoUrls.length;
  if (youtube === 0 && tiktok === 0) {
    return (
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24 text-center">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Watch &amp; Listen</div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] text-cocoa">
            Conversations, in motion
          </h2>
          <p className="mt-6 font-serif italic text-cocoa/70 max-w-xl mx-auto">
            Featured videos will appear here once the TikTok and YouTube selections are added.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="uppercase tracking-[0.28em] text-xs text-clay mb-5">Watch &amp; Listen</div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] text-cocoa">
            Conversations, in motion
          </h2>
        </div>
        <YouTubeGrid />
        <TikTokGrid />
      </div>
    </section>
  );
}