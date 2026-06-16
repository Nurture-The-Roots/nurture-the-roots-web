
# Site-Wide Editorial Refinement

Refine every page of Nurture The Roots™ for emotional spaciousness, clearer hierarchy, and a premium editorial feel — without changing the navigation, the framework, or your written voice. All copy additions will be drafted in your existing warm, grounded, lineage-rooted tone (short connective lines, intros, micro-sections), not new claims or services.

## Global (applies to every page)

- Increase vertical rhythm: larger section padding, consistent max-widths for prose (~65ch).
- Add subtle motif dividers between major sections (hairline rule + small ornamental glyph in terracotta).
- Calmer typographic scale: tighten heading leading, widen body leading, ensure serif H1/H2 + sans body.
- Standardize CTA language sitewide to the three approved phrases:
  - "Begin Your Postpartum Support"
  - "Start Your Fourth Trimester Plan"
  - "Schedule Your First Conversation"
- Footer: add a soft brand anchor line ("Rooted care for the fourth trimester — San Francisco Bay Area") and add spacing between IP, legal, and disclaimer lines.
- Add 1–2 soft warm images per page from the existing `src/assets/` library (hands, home, baby, rhythm — no new photography).

## Page-by-page refinements

**1. Home (`src/routes/index.tsx`)**
- Add a short grounding emotional arc above the hero CTA.
- Insert two soft images for rhythm (one mid-page, one near closing).
- Add a "Services at a Glance" preview (3–5 short tiles linking to /services).
- Add a "Who This Is For" section above Meet Ashlee.
- Strengthen primary CTA copy.
- Keep: Four Pillars, Meet Ashlee, overall flow.

**2. About (`src/routes/about.tsx`)**
- Add a grounding intro line under the hero.
- Expand "My Story" with one additional reflective paragraph (drafted in your voice for your approval).
- Add a warm portrait block (existing asset).
- New micro-section: "What families often say about me" (2–3 short pull-quotes from existing testimonials).
- Reorder for arc: Identity → Origin → Philosophy → Expertise → Invitation.
- More breathing room around Certifications.

**3. Framework (`src/routes/framework.tsx`)**
- Grounding intro paragraph explaining why this framework matters.
- One-line explainer under "At the Center" (Identity · Lineage · Relationship · Rhythm).
- Add a single "What this means for your family" line under each of the Four Pillars.
- Soft motif divider between pillars.
- Closing reflection block before CTA.
- Keep Four Pillars + Twelve Practices intact.

**4. Services (`src/routes/services.tsx`)**
- Grounding intro paragraph above offerings.
- "Who This Is For" section.
- "What to Expect When We Work Together" section (3–4 short beats).
- Soft hairline dividers between offerings.
- One signature line per offering.
- Add 1–2 soft images.

**5. Client Journey (`src/routes/client-journey.tsx`)**
- Grounding intro at top.
- "What This Journey Offers" section.
- Soft dividers between the four phases.
- Closing reflection before CTA.
- 1–2 soft images.

**6. Workshops (`src/routes/workshops.tsx`)**
- Grounding intro.
- "Who These Workshops Are For" section.
- "What You'll Learn" section.
- Short description under each workshop title.
- Closing reflection before waitlist CTA.
- 1–2 soft images.

**7. Resources (`src/routes/resources.tsx`)**
- Grounding intro.
- "How to Use These Resources" + "Who These Are For" sections.
- Expanded one-line descriptions under each of the Twelve Grounded Companions.
- Closing reflection.
- Soft visual rhythm (dividers, spacing).

**8. Contact (`src/routes/contact.tsx`)**
- Grounding intro line above the form.
- Optional single testimonial card alongside form.
- More spacing between sections; keep all form fields and reassurance copy.

**9. Footer (in `__root.tsx` or footer component)**
- Soft brand anchor line at top of footer.
- Increased spacing between IP, legal, disclaimer lines.
- Keep nav, IP, disclaimer, sovereign tone.

## Technical approach

- Edit each route file in `src/routes/` in place; no new routes, no nav changes.
- Reuse existing image assets in `src/assets/` via `ResponsiveImage`; no new image generation unless you ask.
- Introduce a small shared `SectionDivider` component (hairline + terracotta glyph) and a `PullQuote` component in `src/components/` for reuse across pages.
- Spacing/typography tweaks via Tailwind utilities + small additions to `src/styles.css` tokens if needed (no palette change).
- All new microcopy will be added in your voice; if you'd prefer to write any of it yourself, I'll leave clearly marked placeholders.

## Out of scope

- No nav changes, no new pages, no new services or claims.
- No rewriting of your existing copy — only additive connective tissue and structural refinement.
- No new photography or AI-generated imagery unless you request it.

## One confirmation before building

Do you want me to draft the new connective microcopy (intros, "Who This Is For", closing reflections, footer anchor line) in your voice for your review, or leave placeholders for you to fill in?
