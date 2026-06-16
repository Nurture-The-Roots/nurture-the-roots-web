## What's wrong today

Four images are reused across multiple pages, which is what's making the site feel repetitive:

| Image | Used on |
|---|---|
| `baby-foot-massage-wide` | Resources (hero) + Client Journey (supporting) ← screenshot IMG_3750/3751 |
| `ashlee-baby-laughing` | About + Testimonials |
| `ashlee-baby-closeup` | About + Testimonials |
| `ashlee-burping-baby` | Contact + About |

And the bedside-swaddle shot (IMG_3752) on the Home mid-band feels heavy — it's a strong portrait but lands at an awkward moment between Home sections.

## Proposed swap map (every section gets a unique image)

Drawing from the curated `1.17AshleeBrandShoot_*` uploads we agreed on plus the existing `Branding_photos-*` library, every section ends up with its own image and no duplicates.

| Page / Section | New image | Why |
|---|---|---|
| Home — mid band (replaces bedside-swaddle) | `1.17AshleeBrandShoot_0077` (tender hold) | Softer, more relational; better rhythm between hero and closing |
| Home — closing | keep `ashlee-baby-chair-portrait` | Already a strong closing note |
| About — relational mid (replaces `ashlee-burping-baby`) | `1.17AshleeBrandShoot_0106` (relational detail) | Quieter supporting moment, frees burping shot for Contact |
| About — closing portrait (replaces `ashlee-baby-laughing`) | `1.17AshleeBrandShoot_0086` (Ashlee portrait) | About page deserves the strongest practitioner portrait |
| About — final (replaces `ashlee-baby-closeup`) | keep walking shot or `branding-60` | Frees closeup for Testimonials |
| Services — supporting | keep `baby-changing-table` | Working well |
| Approach — three pillars | keep `approach-1/2/3` | Working well |
| Client Journey — supporting (replaces `baby-foot-massage-wide`) | `1.17AshleeBrandShoot_0079` (feeding moment) | Better fits "journey / care in motion" |
| Testimonials — hero | `ashlee-baby-laughing` (now unique here) | Warm, joyful — sets the right tone for testimonials |
| Testimonials — supporting | `ashlee-baby-closeup` (now unique here) | Intimate close to the section |
| Resources — hero (replaces foot-massage) | `branding-54` (editorial still) | Quieter, library-like — fits "resources" better than a body shot |
| Contact — hero | `ashlee-burping-baby` (now unique here) | Warm relational shot suits a contact page |
| Framework | keep `ashlee-playmat-tending` | Working well |

End state: zero duplicate images across pages, and each placement picked for tone-fit rather than availability.

## Responsive variants

Each newly-placed `1.17AshleeBrandShoot_*` upload gets:
- Uploaded once via `lovable-assets create` → base `.asset.json`
- Mobile crop (3:4, widths 480/768) and desktop crop (16:9 or 4:5, widths 1152/1600) generated with ImageMagick + cwebp + avifenc
- Assembled into a `.responsive.json` matching the existing `ResponsiveImage` schema, with `mobileSource` art-direction support added to the component
- Hero placements use `priority`; supporting placements stay lazy

## Files touched

`src/components/ResponsiveImage.tsx` (add `mobileSource` prop), `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/client-journey.tsx`, `src/routes/testimonials.tsx`, `src/routes/resources.tsx`, `src/routes/contact.tsx`. Removes any `.asset.json` / `.responsive.json` pointers that become unreferenced.

## Verification

`bun run build`, then Playwright screenshots of `/`, `/about`, `/client-journey`, `/testimonials`, `/resources`, `/contact` at 375px and 1440px to confirm crops land correctly and no section repeats an image.

## Out of scope

Copy, layout, typography — image swaps only.

---

**Want me to proceed with this map, or adjust any specific swap before I implement?** (E.g., if you'd rather keep the bedside-swaddle on Home and move it elsewhere, or pick a different Resources hero, tell me and I'll revise.)
