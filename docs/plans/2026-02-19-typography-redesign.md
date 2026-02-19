# Typography redesign

**Date:** 2026-02-19
**Status:** Approved

## Problem

The current font stack uses Share Tech Mono as body text across all course pages. Monospace fonts are designed for code, not prose — fixed-width spacing, no kerning, mechanical rhythm. Every paragraph of course content reads like a terminal log. Chakra Petch (the heading font) also has poor legibility at small sizes due to its geometric letterform cuts.

## Design

### Font roles

| Role | Font | Used for |
|------|------|----------|
| `font-hero` | Fraunces (serif, variable) | Hero h1 text only — "ESCAPE THE CHAT WINDOW", "CLI WORKFLOWS" banners |
| `font-display` | Chakra Petch (unchanged) | Section headers, card titles, UI labels, nav |
| `font-sans` | Inter | All prose body text — paragraphs, lists, descriptions, learning objectives |
| `font-mono` | JetBrains Mono | Code blocks, terminal commands, short UI strings like "MODULE 01" |

### Google Fonts

Remove: `Chakra+Petch`, `Share+Tech+Mono`
Add: `Fraunces` (ital,opsz,wght 300/400/700), `Inter` (wght 400/500/600/700), `JetBrains+Mono` (wght 400/500)
Keep: `Chakra+Petch` (used for `font-display` — still loaded)

### Color adjustments

- `void` background: `#111827` → `#0f172a` (cooler, reduces gray-brown cast)
- Reserve `text-acid` for interactive elements and decorative accents only — not applied to body text

### Base typography (amditis.css)

Add to `amditis.css`:
```css
p, li, td, th {
    line-height: 1.65;
    font-size: 1rem;
}
```

Update hardcoded `Share Tech Mono` references in accordion and copy-btn to use `JetBrains Mono`.

### Hero h1 treatment

Fraunces is designed for mixed case. Since hero text is ALL CAPS, add `tracking-wide` on hero h1 elements to compensate.

## Files affected

- `docs/assets/js/config.js` — add `hero: ['Fraunces', 'serif']`, remap `sans` to Inter, remap `mono` to JetBrains Mono, update `void` color
- `docs/assets/css/amditis.css` — base body line-height/size, replace Share Tech Mono references
- `docs/index.html` — Google Fonts link, body class, `font-mono` → `font-sans` on prose, hero h1 `font-hero`
- `docs/module-1/index.html` through `docs/module-5/index.html` — same as above for each
- `docs/templates/quick-reference.html` — Google Fonts link, font classes
- `docs/templates/troubleshooting.html` — Google Fonts link, font classes
- `docs/review.html` — Google Fonts link, font classes

## What doesn't change

- Color palette (acid/ice/signal/void/panel/surface) except `void` tweak
- Card/panel/border layout
- Code block styling
- Chakra Petch in `font-display` role
