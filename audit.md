# Texas Fire Sprinklers Site Audit
**Date:** 2026-04-15
**Site audited:** http://localhost:3001 (built from `/site`, mirrors texasfiresprinklers.vercel.app)
**Viewports tested:** Desktop 1280px, Mobile 375px

---

## Page-by-Page Findings

### / (Home)
- **Desktop:** No issues. Layout, images, and content render correctly. Footer contains SCR-G-3451926.
- **Mobile:** Company name "E&R Ibukun LLC" is hidden next to the logo (class `hidden sm:block`). At 375px only the logo image shows in the header — no text branding. The hamburger menu itself works correctly.
- **Both:** The "Learn More About Our Process" link includes a `&rarr;` right-arrow character (`→`) as visible button text. Arrow glyphs in link text are a minor accessibility/style concern.

### /services
- **Desktop:** No issues. All four service sections render with images and content. Footer contains SCR-G-3451926.
- **Mobile:** No issues. Single-column layout works correctly.

### /about-us
- **Desktop:** No issues. Mission, leadership, license badge, and differentiators render correctly. Footer contains SCR-G-3451926.
- **Mobile:** No issues.

### /our-process
- **Desktop:** No issues. Four-step process with alternating image layout renders correctly. Footer contains SCR-G-3451926.
- **Mobile:** No issues.

### /contact-us
- **Desktop:** No issues. Contact info and booking form sections render correctly. Footer contains SCR-G-3451926.
- **Mobile:** No issues.

### /privacy-policy
- **Desktop:** No issues. Content renders with effective date April 15, 2026. Footer contains SCR-G-3451926.
- **Mobile:** No issues.

### /terms-of-service
- **Desktop:** No issues. Content renders with effective date April 15, 2026. Footer contains SCR-G-3451926.
- **Mobile:** No issues.

---

## Footer SCR-G-3451926 Check
Present on all 7 pages. Text: "Texas State Fire Sprinkler Contractor Registration No. SCR-G-3451926, Texas Department of Insurance, State Fire Marshal's Office"

---

## Codebase Grep Findings

### Em Dashes (`—`)
None found in source files. Clean.

### Placeholder text (`[`, TODO, PLACEHOLDER, Lorem)
None found in source files. Clean.

---

## Style Rule Violations

### Hyphens used as separators in hours text (not between numbers or compound words)
The project CLAUDE.md prohibits hyphens in sentences; hyphens are only allowed as compound-word hyphens or between numbers. The following instances use hyphens as range separators in a way that is borderline — "Mon-Fri" and "Sat-Sun" are abbreviation ranges, and "7:00am - 5:00pm" uses spaces around the hyphen.

| File | Line | Text |
|------|------|------|
| `components/Footer.tsx` | 51 | `Mon-Fri: 7:00am - 5:00pm` / `Sat-Sun: Closed` |
| `app/contact-us/page.tsx` | 177 | `Monday - Friday: 7:00am - 5:00pm` |

Recommendation: Replace "Monday - Friday" with "Monday through Friday" and "7:00am - 5:00pm" with "7:00am to 5:00pm". For the footer abbreviations "Mon-Fri" and "Sat-Sun", either spell out or use "Mon through Fri".

### Hyphen as separator in OG image alt text
| File | Line | Text |
|------|------|------|
| `app/layout.tsx` | 24 | `alt: "E&R Ibukun LLC - Fire Protection Services in Texas"` |

Recommendation: Change to `"E&R Ibukun LLC Fire Protection Services in Texas"` (drop the hyphen separator).

### Right arrow glyph in link text
| File | Line | Text |
|------|------|------|
| `app/page.tsx` | 363 | `Learn More About Our Process &rarr;` |

Recommendation: Remove the `&rarr;` or replace it with a visually hidden icon so the accessible link name does not include a glyph character.

---

## Summary

| Category | Count |
|----------|-------|
| Layout issues | 1 (mobile logo text hidden at 375px) |
| Broken images | 0 |
| Text overflow | 0 |
| Placeholder text | 0 |
| Missing content | 0 |
| Footer SCR-G-3451926 | Present on all 7 pages |
| Em dashes in source | 0 |
| Style rule violations | 4 (hyphens in hours + OG alt + arrow glyph) |
