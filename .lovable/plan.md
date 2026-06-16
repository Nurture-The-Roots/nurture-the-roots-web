## Scope

Add six integrations to the live site exactly where specified, styled to match the existing warm/grounded brand. No new widgets, no homepage Instagram feed, no extra noise.

## What I need from you before I build

These are external accounts/IDs I can't fabricate. Drop them in your reply and I'll wire everything in one pass.

1. **Calendly** — your scheduling URL (e.g. `https://calendly.com/ashlee-nurturetheroots/consultation`)
2. **Dubsado** — the **public form URL** for each of:
   - Inquiry form (Contact page)
   - Intake form (Services page + About page "Begin Intake" button)
   (Dubsado gives a `https://forms.dubsado.com/public/form/view/...` link plus an `<iframe>` snippet. Either works — paste what you have.)
3. **ConvertKit** — the **form ID** (or full embed snippet) for the newsletter signup. From ConvertKit → Grow → Landing Pages & Forms → your form → Embed → JavaScript or HTML. I'll style our own input + use the form action so the embed matches the site exactly.
4. **Microsoft Clarity** — your **Project ID** (10-char string from Clarity → Settings → Setup).
5. **Google Reviews** — your **Google Place ID** for the business. Easiest: search the business on [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) and paste the ID. (Reviews require a Google Maps Places API key — I'll guide you on that as a secret once you confirm the Place ID; alternative: hand-curated quotes from your Google profile if you'd rather skip the API.)
6. **TikTok** — handle + up to 6 video URLs you want featured on Media.
7. **YouTube** — channel handle + up to 6 video URLs (or a playlist ID) for Media.
8. **Instagram** — your profile URL (handle is enough) for the footer icon.

## Page-by-page changes

**Homepage (`/`)**
- Hero: warm rounded "Book a Consultation" button → opens Calendly inline popup widget (loaded lazily).
- New testimonials carousel section beneath the intro, before the existing services preview. Soft cards, warm cream background, subtle shadow, autoplay paused on hover, accessible arrow + dot nav.
- Footer (site-wide): ConvertKit signup + social icons (see Footer below).

**About (`/about`)**
- Add a small Google Reviews block (3 reviews, soft cards) near the bottom, above the existing closing image.
- Add a single "Begin Intake" button (Dubsado) below that block.

**Services (`/services`)**
- Under each service card, add a "Begin Intake" link/button to the Dubsado intake form.
- Optional small Google Reviews block above the closing CTA (3 cards).

**Contact (`/contact`)**
- Replace the current contact form with the Dubsado inquiry form (iframe embed, styled wrapper for soft borders + spacing).
- Below the embed: "Schedule a Call" button → Calendly popup.
- Keep the existing FAQ accordion if present; add one if not.

**Media (`/media`)**
- Clean two-column responsive grid: TikTok embeds in one column, YouTube embeds in the other (stacks on mobile). Lazy-loaded iframes so the page stays light.

**Footer (site-wide, in `__root.tsx`)**
- ConvertKit signup: single email input + warm earth-tone submit button on a soft beige panel, gentle serif header ("Stay close to the rhythm" — placeholder copy you can revise).
- Social icons row: Instagram, TikTok, YouTube. Subtle hover.

**Global head (in `__root.tsx`)**
- Microsoft Clarity script injected via TanStack head() (production only — skipped in dev to keep your analytics clean).

## Implementation details (technical)

- **Calendly**: load `https://assets.calendly.com/assets/external/widget.js` once via a small `<CalendlyButton>` component using `Calendly.initPopupWidget({ url })`. Script injected on demand (button click) so it doesn't slow first paint.
- **Dubsado**: use Dubsado's iframe embed in a `<DubsadoEmbed>` component with a styled wrapper (rounded, soft shadow, brand background). For the "Begin Intake" buttons we link to the public form URL (opens in a new tab) — simpler than embedding the same form on three pages.
- **ConvertKit**: build a small `<NewsletterForm>` that POSTs to ConvertKit's form action URL (no third-party script needed; matches the site's visual language exactly). If you'd rather use their script-based embed, I'll switch to that.
- **Clarity**: tiny inline script in `head()` guarded by `import.meta.env.PROD`. Project ID injected from a build-time public env var (`VITE_CLARITY_PROJECT_ID`).
- **Google Reviews**: a tiny TanStack server function fetches reviews from Google Places API once per hour (cached via `staleTime`). The API key is stored as a server secret (`GOOGLE_PLACES_API_KEY`) — never exposed to the browser. Renders 3 most-recent reviews as soft cards. If you'd rather skip the API for now, I can hardcode 3-5 reviews you paste in.
- **Testimonials carousel (Home)**: shadcn `Carousel` (already in the project) wrapped in brand styling. Pulls from the same review source or a curated set — your call.
- **TikTok/YouTube embeds**: native iframe with `loading="lazy"` and `title` for a11y. No third-party React libs.
- **Instagram footer icon**: plain anchor with an SVG icon (no embed, no script).

## Files I'll add or change

- `src/routes/__root.tsx` — Clarity script, Footer with ConvertKit + socials.
- `src/routes/index.tsx` — Hero CTA + testimonials carousel.
- `src/routes/about.tsx` — Google Reviews block + Begin Intake button.
- `src/routes/services.tsx` — Per-service Begin Intake buttons + optional reviews block.
- `src/routes/contact.tsx` — Dubsado embed + Calendly button + FAQ accordion.
- `src/routes/media.tsx` — TikTok + YouTube grid.
- `src/components/integrations/CalendlyButton.tsx`
- `src/components/integrations/DubsadoEmbed.tsx`
- `src/components/integrations/NewsletterForm.tsx`
- `src/components/integrations/GoogleReviews.tsx`
- `src/components/integrations/TestimonialsCarousel.tsx`
- `src/components/integrations/SocialIcons.tsx`
- `src/lib/google-reviews.functions.ts` (server fn for the Places API call)
- `.env` additions: `VITE_CLARITY_PROJECT_ID`, `VITE_CALENDLY_URL`, `VITE_DUBSADO_INQUIRY_URL`, `VITE_DUBSADO_INTAKE_URL`, `VITE_CONVERTKIT_FORM_ACTION`, plus secret `GOOGLE_PLACES_API_KEY`.

## Out of scope

- Homepage Instagram feed (explicitly excluded).
- Any third-party widget not on your list.
- Brand voice or copy rewrites — I'll use placeholder microcopy you can edit.
- Replacing the existing transactional contact-form email flow — it stays in place behind the Dubsado embed in case Dubsado is ever swapped out.

## Verification

After implementation: `bun run build`, then Playwright walkthrough of `/`, `/about`, `/services`, `/contact`, `/media` at mobile + desktop, capturing the Calendly popup, the Dubsado embed, the ConvertKit form, the reviews block, the carousel, and confirming Clarity loads in prod build only.

---

**Reply with the IDs/URLs in the "What I need from you" list and I'll build it in a single pass.** If you'd rather hand-curate testimonials/reviews instead of wiring the Google Places API, just say so and skip items 5.
