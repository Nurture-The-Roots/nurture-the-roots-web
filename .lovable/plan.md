## Objective
Restructure the "What Is a Postpartum Doula?" blog post for search visibility by tightening the heading hierarchy around high-intent keywords, adding contextual internal links to the Services page, and rewriting the meta title/description for click-through rate.

## Background
The post currently targets "what is a postpartum doula" (480 monthly volume, KD 28) and "what does a postpartum doula do" (390 monthly volume). The H1 and first H2 are identical, there is no link to `/services`, and the metadata does not include location or a strong value proposition.

## Plan

### 1. Restructure headings for keyword targeting
- **H1**: Keep the primary question but expand it to capture both volume terms  
  `What Is a Postpartum Doula? A Guide to Fourth Trimester Support`
- **H2**: Target the secondary high-volume query directly  
  `What Does a Postpartum Doula Do?`
- **H2**: Capture comparison searches  
  `Postpartum Doula vs. Midwife, Night Nurse, and Nanny`
- **H2**: Anchor local + brand differentiation  
  `Identity-Aligned Postpartum Care in San Francisco`
- **H2**: Capture timing-intent searches  
  `When Should You Hire a Postpartum Doula?`

### 2. Add internal links to `/services`
- In the "What Does a Postpartum Doula Do?" section, link the first mention of "postpartum doula care" to `/services`.
- In the "Identity-Aligned Care" section, add a sentence inviting readers to explore the full offerings, linking to `/services` with anchor text "postpartum services in San Francisco".
- Keep the existing `/approach` and `/contact` links.

### 3. Rewrite meta title and description
- **Title**: `What Is a Postpartum Doula? | San Francisco Bay Area | Nurture The Roots™`  
  (Under 60 chars, includes primary keyword + location + brand.)
- **Description**:  
  `Learn what a postpartum doula does, how she differs from a night nurse or nanny, and why identity-aligned care in San Francisco transforms the fourth trimester.`  
  (Under 160 chars, includes both target keywords, comparison terms, location, and a benefit.)
- Update `og:title` and `og:description` to match.
- Update `headline` in the Article JSON-LD to align with the new H1.

### 4. Minor content adjustments
- In the comparison section, add a brief mention of "postpartum doula cost" or "how much does a postpartum doula cost" as a natural question parents ask (if it fits the voice), since cost is a common related search. Only add if it reads naturally; do not force it.
- Ensure the "fourth trimester" link stays intact.

## Technical Details
- File to edit: `src/routes/blog.what-is-a-postpartum-doula.tsx`
- No new dependencies or routes required.
- Build verification after edits.