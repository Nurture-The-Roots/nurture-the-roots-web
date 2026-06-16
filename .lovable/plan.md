## Problem

Both home-page photo bands (the family consultation photo I just added, and the existing Ashlee tender‑hold band lower on the page) are wrapped in containers that force a tall portrait aspect ratio on mobile (`aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]`) and use `object-cover`. The source photos are wide landscape, so on a phone the wrapper is much taller than the photo would naturally be — `object-cover` zooms in and slices people off the left/right edges.

## Fix

Match the wrapper's aspect ratio to the photo's true landscape shape on mobile, so the whole frame is visible without zooming/cropping. Keep the cinematic 21:9 letterbox feel only on desktop, where the wider viewport gives enough horizontal room to crop sides safely.

In `src/routes/index.tsx`, update the two image-band wrappers:

- New consultation band (the one added in the previous turn).
- Existing "relational presence" band below the testimonials carousel (`homeBandImg`).

Change the wrapper classes from:

```text
aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9]
```

to:

```text
aspect-[3/2] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]
```

`3/2` matches the natural shape of the source photos, so on mobile and small tablets the entire scene — all three adults and the baby — fits in the frame with no horizontal cropping. From `md:` up, the existing wider letterbox crops stay, with `object-position` tuned so faces remain in frame.

For the consultation band, also relax the object-position from `object-[center_35%]` to `object-center` so the desktop letterbox doesn't push the right‑hand parent out of frame.

## Out of scope

- No changes to the source photos, no new uploads, no crop variants.
- No layout changes outside the two image bands on the home page.
- Other pages using these assets are untouched.
