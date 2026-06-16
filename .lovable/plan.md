## Goal

Deliver smaller, faster images on mobile without relying on Cloudflare Image Resizing. Each photo gets pre-generated AVIF + WebP + JPEG variants at multiple widths, served via a `<picture>` element so the browser picks the best format and width for the device.

## Why this approach

- Lovable's asset CDN serves originals as-is — no on-the-fly format/width negotiation.
- A server-side transformer (sharp) won't run on the Workers runtime used here.
- Pre-built variants are a one-time cost at design time, then served straight from the CDN with the same speed and caching as today.

## What changes

### 1. Generate variants for every photo

A one-off Node script (`scripts/generate-image-variants.mjs`) using `sharp`:

- Reads every `src/assets/branding-*.jpeg` / hero / portrait original (re-uploaded temporarily, or pulled from the existing CDN URL).
- For each source, emits widths `[480, 768, 1152, 1600]` × formats `[avif, webp, jpeg]` — 12 files per photo.
- Uploads each via `lovable-assets create` and writes a single combined pointer file like `src/assets/branding-62.responsive.json` listing every variant's URL + width + format.

### 2. Add a `<ResponsiveImage>` component

`src/components/ResponsiveImage.tsx` wraps the variants in a `<picture>`:

```tsx
<picture>
  <source type="image/avif" srcSet="…480w, …768w, …1152w, …1600w" sizes={sizes} />
  <source type="image/webp" srcSet="…480w, …768w, …1152w, …1600w" sizes={sizes} />
  <img src="…1152w.jpg" srcSet="…480w, …768w, …1152w, …1600w" sizes={sizes}
       alt={alt} loading={priority ? "eager" : "lazy"}
       fetchPriority={priority ? "high" : "auto"}
       decoding="async" width={…} height={…}
       className={className} />
</picture>
```

Browsers auto-negotiate: Safari picks AVIF/WebP if supported, Chrome on a 320px screen pulls the 480w file, retina desktops pull 1600w.

### 3. Swap every `<img src={someAsset.url}>` for `<ResponsiveImage source={someAssetResponsive} ... />`

Routes touched (one band/portrait each, ~12 sites total):
`index.tsx`, `services.tsx`, `framework.tsx`, `client-journey.tsx`, `workshops.tsx`, `resources.tsx`, `testimonials.tsx`, `about.tsx` (×2), `contact.tsx`, `blog.what-is-a-postpartum-doula.tsx`.

Existing focal points (`object-[center_30%]`), aspect-ratio classes, shadows, and rounded corners pass straight through.

### 4. Keep originals as fallback

Original `.asset.json` files stay in place so anything not migrated keeps working.

## Expected impact

- Mobile payload per photo drops roughly **60–80%** (AVIF at 480w vs original JPEG at full res).
- LCP image gets `fetchPriority="high"` + the smallest-acceptable width preloaded.
- No runtime cost, no extra service, no Cloudflare dependency.

## Out of scope

- SVG icons and the logo (already vector).
- Migrating to Cloudflare Images later — possible additive path if you ever put the domain on a CF zone.

## Open question I'll need answered before running the script

The variant generator needs the original full-resolution files. Two options:

- **(A)** I download each from the current CDN URL (lower quality if the originals were already compressed at upload).
- **(B)** You re-drop the originals into chat so we start from max quality.

I'll proceed with (A) by default unless you say otherwise.
