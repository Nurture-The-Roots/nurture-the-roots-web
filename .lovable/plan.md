## Plan: Nurture The Roots™ full site rebuild

This is a substantial rebuild on top of the existing site. I'll preserve your current warm editorial design language but extend it with the new framework, copy, and pages from your brief.

### Pages (routes under `src/routes/`)
Keep / refresh: `index.tsx`, `about.tsx`, `services.tsx`, `approach.tsx` (repurpose → **The Framework**), `contact.tsx`, plus existing `testimonials`, `blog`, `media`, `faq`, `disclaimer`, `privacy`, `terms`.

New routes to add:
- `framework.tsx` — The Nurture The Roots™ Framework (four pillars + twelve practices, root-system visual)
- `client-journey.tsx` — Four-phase journey (Rooting / Tending / Strengthening / Integrating)
- `workshops.tsx` — Workshops + The Rooted Fourth Trimester Course (six modules)
- `resources.tsx` — refresh existing route with the 12 resource cards + Signature Reflections

Nav (header + footer) updates to include: Home, About, The Framework, Services, Client Journey, Workshops, Resources, Contact. Legal stays in footer.

### Home page rewrite
- Hero: "Postpartum care begins at the roots." + your subheadline + two CTAs (Book a Consultation / Explore the Framework).
- Opening copy block (fourth trimester as threshold).
- "The Nurture The Roots™ Difference" section.
- "The Four Pillars" as four cards.
- "For Families Who Want More Than Survival" + closing CTA.

### About page rewrite
Replace current Meet Ashlee body with your "A Method Rooted in Lived Experience" copy + the credentials/influences list + "Why This Work Is Different" + "Core Practitioner Commitments" list. Keep the existing Trainings & Certifications grid below.

### Framework page (`framework.tsx`)
- Headline + framework statement.
- Four pillar sections, each with: Core Belief, Description, three Practices with their descriptions.
- Visual: simple CSS root-system / radial diagram with "identity · lineage · relationship · rhythm" at center.

### Services page rewrite
Replace current service list with five service cards (Rooted Postpartum Planning, In-Home / Virtual Support, Newborn Cue + Attunement, Sovereign Family Systems, Integration + Continuity), each with description, "Includes" list, and CTA. Add adaptation note at bottom.

### Client Journey, Workshops, Resources
Build per your spec — phased layouts, module list, resource card grid with "Coming Soon" buttons, Signature Reflections prompts.

### Contact page
Extend current contact form with: Phone, Estimated due date / baby's age, Location, "What kind of support are you seeking?", "How did you hear about Nurture The Roots?". Keep server-function submission flow intact; just add fields. Closing copy block added.

### Visual / design tokens (`src/styles.css`)
Shift palette toward your earthy direction while keeping the calm editorial feel:
- Add tokens: `--sage`, `--moss`, `--cream`, `--clay`, `--cedar`, `--terracotta`, `--ivory`, `--taupe`, `--forest` as OKLCH values.
- Map existing semantic tokens (`--background`, `--primary`, `--accent`, etc.) onto the new palette so all current components shift cohesively.
- Keep serif display + sans body pairing already in place.
- Add subtle botanical/root SVG accents as reusable inline components.

### SEO per route
Each new route gets its own `head()` with unique title, description, og:title/description/url, canonical, and route-appropriate JSON-LD (Service / Course / FAQPage where relevant). Sitemap (`sitemap[.]xml.ts`) updated with the new URLs.

### Footer
Add framework, client-journey, workshops to footer nav. Add IP line: "The Nurture The Roots™ Postpartum Framework and related language are original intellectual property of Nurture The Roots LLC."

### Out of scope (flag, don't build)
- Real downloadable PDFs for the 12 resources — placeholders with "Coming Soon".
- Waitlist signup backend (workshop CTA will route to Contact for now unless you want a dedicated form).
- New hero/botanical photography — I'll reuse existing assets; we can generate new imagery in a follow-up.

### Confirm before I build
1. **Palette shift** — your current site uses blush/cocoa/taupe. Move fully to sage/moss/cedar/terracotta, or keep current warm cream base and just add sage/moss/terracotta as accents? (I recommend the latter to preserve continuity.)
2. **Waitlist** — route Workshops CTA to Contact, or build a separate waitlist form?
3. **Approach page** — replace `/approach` with `/framework` (redirect), or keep both?
