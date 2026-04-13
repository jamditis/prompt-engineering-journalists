# MOOC module time-gating: modules 2, 3, 4

**Date:** 2026-04-13
**Status:** Approved design (v2 post-Copilot review), implemented (PR #43)
**Context:** The course runs on the Knight Center LMS (Moodle), which enforces the real release schedule — modules 2, 3, and 4 unlock on successive Sundays at 5pm ET (EDT). The public site `mooc.amditis.tech` currently shows all four module pages and every cross-page link as live, which doesn't match what a student sees inside the LMS. Students who land on the public site pre-release can read ahead or jump into pages that should still be closed. We need the public site to visually mirror the LMS release schedule: module 2 unlocks Sunday 2026-04-19, module 3 unlocks 2026-04-26, module 4 unlocks 2026-05-03, all at 5:00 PM ET. Module 1 is already live and stays live unconditionally.

---

## Goals

- Every link that points at a locked module page (anywhere on the site) renders from first paint as dimmed, disabled, and labeled with the unlock date — no flash of the unlocked state, no click window before JS is ready.
- Direct navigation to a locked module page (e.g. typing `/module-2/` in the address bar, or visiting a module subpage like `/module-2/slides-video7.html`) shows a locked placeholder instead of the real module content.
- The three unlocks happen automatically at 5:00 PM ET on their scheduled Sundays with no manual intervention, no scheduled GitHub Action, no redeploy, and no Moodle integration.
- The design stays consistent with the existing `acid`/`void`/`panel` color system and the existing lucide icon set.
- Locked state is accessible: `aria-disabled`, a proper accessible label (not just `title`), and keyboard behavior that reliably blocks activation.

## Non-goals

- **This is not a security gate.** Anyone who disables JavaScript, opens the page source, or rewrites their system clock can see the real content. The LMS is the real gate. The public-site gate is a UX mirror, not access control.
- No preview mode, override query param, or staff unlock cookie. Testing happens locally by editing `module-schedule.js` to a past date, reloading, and reverting.
- No live countdown timer on cards. Static "Unlocks Sun 4/19 5pm ET" text is enough.
- No auto-refresh when the unlock moment passes. A student viewing the page at 4:59 PM Sunday will need to reload at 5:00 PM to see the unlocked state.
- No dedicated "coming soon" email capture or reminder signup.
- No re-deploy around release time to flush caches.

## Schedule

All three release moments, pre-computed in UTC so daylight saving time and client timezone settings don't affect parsing:

```js
const MODULE_SCHEDULE = {
  'module-2': '2026-04-19T21:00:00Z',  // Sun Apr 19, 5:00 PM EDT
  'module-3': '2026-04-26T21:00:00Z',  // Sun Apr 26, 5:00 PM EDT
  'module-4': '2026-05-03T21:00:00Z',  // Sun May 3,  5:00 PM EDT
};
```

ET offset is `-04:00` for all three dates (DST runs 2026-03-08 through 2026-11-01). If the course is ever rescheduled past DST end, the UTC string needs to change — the comment is the only thing that tells a reader what local time it corresponds to.

**Single source of truth:** the schedule object lives in exactly one file, `docs/assets/js/module-schedule.js`. No inline duplication, no per-page copies. The file is loaded via a blocking `<script>` tag in `<head>` of every gated page (see Architecture below).

---

## Architecture overview

**Load strategy: synchronous blocking script in `<head>`.** The critical insight — taken from Copilot review of v1 — is that a deferred script means locked cards and nav links paint in their unlocked state briefly, giving users a click window where the gate isn't yet installed. A blocking script in `<head>` runs before `<body>` parses, so the DOM is already annotated with lock classes before first paint.

```
┌────────────────────────────────────────────────────────────┐
│  Every gated page (home, modules, syllabus, concepts, …)  │
│                                                            │
│  <head>                                                    │
│    ... existing CSS link ...                               │
│    <script src="assets/js/module-schedule.js"></script>    │
│    ... no defer, no async — blocks body parsing ...        │
│  </head>                                                   │
│                                                            │
│  module-schedule.js runs in two phases:                    │
│                                                            │
│  Phase 1 — synchronous, pre-body-parse:                    │
│    - Compute which modules are currently locked            │
│    - For each locked module N, add class                   │
│      `mooc-locked-m{N}` to <html>                          │
│    - If the current URL matches /module-[234](/|$)         │
│      and that module is locked, also add                   │
│      `mooc-locked-here` to <html>                          │
│    - Register delegated capturing click + keydown          │
│      listeners on `document` so any activation of a        │
│      locked anchor is default-prevented from the moment    │
│      the element exists in the DOM — no click window       │
│    - Expose window.MOOCSchedule = { isLocked, releaseFor } │
│                                                            │
│  Phase 2 — on DOMContentLoaded:                            │
│    - Find every anchor marked `data-module-card="module-N"`│
│      and if locked, set aria-disabled="true"               │
│    - Find every other anchor matching module-[234]/path,   │
│      and if the target module is locked, add               │
│      .module-locked-link, set aria-disabled, and append    │
│      a visually-hidden "(locked, unlocks …)" span          │
│    - Click/keydown blocking is NOT done here — phase 1's   │
│      delegated handlers already catch activation           │
└────────────────────────────────────────────────────────────┘
```

**CSS-first visual state.** All visual mutations (dim, icon swap, CTA text swap, content hiding on locked module pages) are driven by CSS reacting to the `mooc-locked-m*` and `mooc-locked-here` classes. JavaScript does not mutate card inner HTML. This has three benefits:
- Zero race with `lucide.createIcons()`. The inline call to `lucide.createIcons()` near the bottom of the body replaces `<i data-lucide="…">` elements with `<svg>` by the time any `DOMContentLoaded` handler fires. Trying to swap icons via JS mutation after that point would have to re-run `lucide.createIcons()` or manipulate the rendered SVG. CSS-driven visibility on two pre-rendered icons (the default one + a lock one) sidesteps the problem entirely.
- Zero FOUC. The class is set before body parse, so every locked-state style is active before first paint.
- Reversible at 5:00 PM ET without a reload trick — because the CSS rules are class-gated, flipping the class immediately flips the state. (Students still need to reload to re-run the JS phase-1 check, per the non-goals section. But the rule is that a page loaded AFTER 5:00 PM is correctly unlocked, which is the requirement.)

**Click-blocking strategy: delegated `preventDefault` on click + keydown in phase 1, never `pointer-events: none`.** `pointer-events: none` sounds like the right disable but is the wrong tool for anchors: it doesn't stop keyboard Enter activation, it kills the `cursor: not-allowed` style we want to show, and it prevents `title` tooltip from firing. Instead, phase 1 registers capturing listeners on `document` itself — `document` exists before `<body>` parses, so the handlers are in place from the first moment any anchor is clickable. Each handler walks up from `event.target` to the nearest `<a>`, checks whether the anchor points at a currently-locked module (either by `data-module-card` or by `href`), and calls `preventDefault()` + `stopPropagation()` if so. Keydown is filtered to Enter and Space so Tab focus movement still works.

---

## File inventory

### New files (1)

| Path | Purpose | Approx size |
|------|---------|-------------|
| `docs/assets/js/module-schedule.js` | Schedule constants, `isLocked()` / `releaseFor()` helpers, synchronous class-setter, DOMContentLoaded hook for click/keydown binding, visually-hidden label injection for inline links | ~130 lines |

### Modified files

| Path | Change |
|------|--------|
| `docs/assets/css/amditis.css` | Add CSS for `html.mooc-locked-m{2,3,4}` + `html.mooc-locked-here` states: dim locked cards, swap CTA visibility, swap icon visibility, hide `.module-live-content` containers on locked module pages, style the locked placeholder screen, style inline locked links, provide an `.sr-only` utility if not already present. ~60 lines. |
| `docs/index.html` | Add the sync `<script>` tag in `<head>`; add `data-module-card="module-2"` / `"module-3"` / `"module-4"` to the three card anchors; add the pre-rendered locked-state markup inside each card (second lucide icon with `data-lucide="lock"`, second CTA span containing the unlock date). Touch `lucide.createIcons()` call order if needed. |
| `docs/module-2/index.html`, `docs/module-3/index.html`, `docs/module-4/index.html` | Add the sync `<script>` tag in `<head>`; add `class="module-live-content"` to the module-hero `<section>`, `<main>`, and the prev/next `<footer>`; insert a pre-rendered `<section class="module-locked-screen">` placeholder between the hero section and `<main>` (the flex-column layout on the wrapper div makes this work wherever in the column the placeholder lives, but keeping it near the top of the content area is the cleanest DOM order for reading). |
| `docs/module-2/slides-skills-overview.html`, `docs/module-2/slides-video7.html` | These are self-contained slide decks with their own inline CSS, so they don't share `amditis.css`. Pattern is different: load `module-schedule.js` to get the `mooc-locked-here` class on `<html>`, then a tiny inline script right after checks that class and calls `location.replace('./')` so the user lands on the parent module index's locked placeholder. |
| `docs/module-1/index.html` | Add the sync `<script>` tag only. Module 1 isn't gated, but pages on module 1 link to module 2/3/4 in the header nav — those links need the inline-link treatment. |
| `docs/syllabus/index.html`, `docs/credits/index.html`, `docs/bonus-git-github/index.html`, `docs/bonus-interviews/index.html`, `docs/bonus-oss-etiquette/index.html`, `docs/starter-kit/index.html` | Add sync `<script>` tag. |
| `docs/templates/index.html`, `docs/templates/quick-reference.html`, `docs/templates/troubleshooting.html` | Add sync `<script>` tag. |
| `docs/concepts/index.html` + all 8 concept explainer pages (`concepts/*.html`) | Add sync `<script>` tag. |
| `docs/beat-project/index.html`, `docs/final-project/slides-final-project.html`, `docs/mollick/index.html` | Add sync `<script>` tag only if a grep shows they link any locked module; skip otherwise. |

**Determining the exact list of pages to touch** is done once at implementation time via:
```
grep -RIlE 'href="[^"]*module-[234]/' docs --include='*.html' | sort -u
```
Every file in that list needs the script tag. Currently that grep returns ~29 files.

### Files NOT touched

- `.github/workflows/pages.yml` — existing Pages deploy workflow, unchanged
- `deploy.sh` — existing CF Pages fallback script, unchanged
- `docs/assets/js/config.js`, `copy-code.js`, `ask-ai.js`, `video-tabs.js` — unrelated, unchanged
- Any `.md`, `.docx`, or non-web source file — this is a web-only change

---

## Behaviors

### Surface A — Module page (index or subpage) loaded directly

**Before release:**
1. Browser parses `<head>` and hits the sync `<script>`. The script downloads (tiny, CF-cached), executes synchronously. It reads the schedule, determines module 2 is locked, adds `mooc-locked-m2` to `<html>`. It notices `location.pathname` starts with `/module-2/`, so it also adds `mooc-locked-here` to `<html>`.
2. Browser resumes parsing `<body>`. CSS immediately applies:
   - `html.mooc-locked-here .module-live-content { display: none }` — hides the module hero section, `<main>`, and the prev/next `<footer>` (all three carry the `.module-live-content` marker class).
   - `html.mooc-locked-here section.module-locked-screen { display: flex }` — reveals the pre-rendered locked placeholder and gives it the flex-item layout it needs inside the wrapper column.
3. First paint shows: sticky site header (logo + nav), locked placeholder card centered in the remaining vertical space. Real module content never paints. The skip-link is also hidden via `html.mooc-locked-here .skip-link { display: none }` since its `#main` target is hidden.

**Locked placeholder markup (pre-rendered in each module page):**
```html
<section class="module-locked-screen">
  <div class="max-w-xl mx-auto px-6 py-24 text-center">
    <div class="inline-flex items-center justify-center w-16 h-16 border border-white/10 bg-panel rounded-full mb-6">
      <i data-lucide="lock" class="w-8 h-8 text-acid"></i>
    </div>
    <div class="text-xs text-acid font-mono mb-3">MODULE 02</div>
    <h1 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">This module is locked</h1>
    <p class="font-sans text-gray-300 mb-6">Unlocks Sunday, April 19 at 5:00 PM ET.</p>
    <p class="font-sans text-sm text-gray-400 mb-8">Check back then, or visit your course on the Knight Center LMS.</p>
    <a href="../" class="inline-flex items-center gap-2 text-sm font-mono text-acid hover:underline">
      <span aria-hidden="true">←</span> Back to home
    </a>
  </div>
</section>
```

Each module page hard-codes its own locked placeholder with its own date text, so nothing depends on JS string templating.

**After release:**
- `mooc-locked-here` never added, CSS default (`.module-locked-screen { display: none }`) keeps the placeholder hidden.
- `.module-live-content` is not hidden.
- Page renders exactly as today.

### Surface B — Homepage module cards

The three cards live at `docs/index.html` lines ~212 (module 2), ~230 (module 3), ~248 (module 4).

**HTML changes per card:**
- Add `data-module-card="module-2"` (or 3, 4) to the anchor.
- Inside the existing icon container in the top-right, add a second icon next to the default one:
  ```html
  <i data-lucide="folder-git-2" class="module-icon-default w-6 h-6"></i>
  <i data-lucide="lock" class="module-icon-locked w-6 h-6"></i>
  ```
- Inside the bottom CTA band, add a second span with the locked CTA:
  ```html
  <div class="mt-auto bg-void/50 px-6 py-2 border-t border-white/10 flex justify-between items-center text-xs font-mono text-gray-400 group-hover:text-acid transition-colors">
    <span class="cta-default">Begin module</span>
    <span class="cta-locked">Unlocks Sun 4/19 5pm ET</span>
    <span class="cta-arrow" aria-hidden="true">&rarr;</span>
  </div>
  ```
- Date text per card is hard-coded (module 2 → "Unlocks Sun 4/19 5pm ET", module 3 → "Unlocks Sun 4/26 5pm ET", module 4 → "Unlocks Sun 5/3 5pm ET"). No templating in JS.

**CSS rules:**
```css
/* Hide locked-state elements by default */
.module-icon-locked { display: none; }
.cta-locked { display: none; }

/* When module 2 is locked: cards pointing at module 2 swap state */
html.mooc-locked-m2 a[data-module-card="module-2"] { opacity: 0.4; cursor: not-allowed; }
html.mooc-locked-m2 a[data-module-card="module-2"]:hover { /* neutralize hover */ }
html.mooc-locked-m2 a[data-module-card="module-2"] .module-icon-default,
html.mooc-locked-m2 a[data-module-card="module-2"] .cta-default,
html.mooc-locked-m2 a[data-module-card="module-2"] .cta-arrow { display: none; }
html.mooc-locked-m2 a[data-module-card="module-2"] .module-icon-locked,
html.mooc-locked-m2 a[data-module-card="module-2"] .cta-locked { display: inline-block; }

/* Same pattern for m3 and m4 */
```

**JS responsibility for cards:** bind click + keydown preventDefault handlers when `mooc-locked-m*` is set. No content mutation. No `lucide.createIcons()` re-run. The lucide library runs once at body end and converts both `<i>` tags (default + locked) to `<svg>`, both already in the DOM. CSS just chooses which one to display.

### Surface C — Inline links elsewhere on the site

**On DOMContentLoaded, for each `<a>` matching `/module-[234]/` in its href (using `*=` contains match, not prefix), and NOT carrying `data-module-card`:**
1. If the target module is currently unlocked, skip.
2. Otherwise, add class `module-locked-link`.
3. Set `aria-disabled="true"`.
4. Append a visually-hidden span as the last child of the anchor: `<span class="sr-only"> (locked, unlocks Sunday April 19 at 5:00 PM ET)</span>`. Screen readers announce the locked status; sighted users still see the original link text.
5. Bind click + keydown preventDefault handlers. `Space` and `Enter` both get blocked. `Tab` is unaffected (focus can still move in and out).

**CSS for `.module-locked-link`:**
```css
.module-locked-link {
  opacity: 0.5;
  color: #94a3b8;         /* text-slate-400, readable against void */
  cursor: not-allowed;
  text-decoration: line-through dotted;
}
.module-locked-link:hover,
.module-locked-link:focus { text-decoration: line-through dotted; color: #94a3b8; }
```

Line-through is a strong visual signal that's language-independent and keeps the underlying link text legible. Color is frozen at slate-400, which stays above WCAG AA contrast on `bg-void` (contrast ratio ~7:1 on `#0f172a`).

**Prose text inside the link is left untouched.** If an explainer says "see [Module 3](../module-3/) for RAG patterns," the visible text stays "Module 3" — only styling and the appended sr-only span change. This avoids nonsense sentences and preserves in-page context.

**Skipped cases:**
- Anchors whose href is pure hash (`#something`) with no path separator — these are on-page anchors, not module links.
- Anchors already carrying `data-module-card` — handled by Surface B.
- Anchors pointing at unlocked modules — no changes.

---

## Accessibility

**aria-disabled:** set on every locked anchor (cards and inline links). This is the primary signal to assistive tech that the link is inert.

**Visually-hidden unlock label (`.sr-only`):** every locked anchor has a child span containing `" (locked, unlocks Sunday April 19 at 5:00 PM ET)"` (or the module-appropriate date). Screen readers read the combined accessible name: "Module 3 (locked, unlocks Sunday April 26 at 5 PM ET)". This replaces the v1 reliance on the `title` attribute, which is unreliable across platforms.

The `.sr-only` utility is standard (position absolute, 1x1 px, clip-path inset, overflow hidden). If it doesn't already exist in `amditis.css`, the implementation adds it.

**Focus order unchanged:** locked links stay in the tab order so keyboard users can read the accessible name. Pressing Enter or Space fires the bound handler and is preventDefault'd — no navigation, no visual change beyond the focus ring.

**Icon hiding:** locked-state lock icons get `aria-hidden="true"` (already standard for lucide icons on this site). The accessible name comes from the text, not the icon.

**Color contrast:**
- Locked cards: opacity 0.4 of existing card colors on `bg-void`. I'll screenshot the rendered state and run a contrast check. If the CTA drops below WCAG AA (4.5:1 for small text), raise opacity floor to 0.5 or add a background tint.
- Locked inline links: `#94a3b8` on `#0f172a` ≈ 7:1, safely above AA.
- Locked placeholder screen: same text colors as normal content, no contrast impact.

**Reduced motion:** no animations on the locked state, so `prefers-reduced-motion` is a no-op.

---

## Testing

**Manual verification before deploy (run from a clean git working tree):**

1. Serve locally:
   ```
   cd docs && python3 -m http.server 8000
   ```
2. Visit `http://localhost:8000/module-2/` → expect the locked placeholder. No module content, no hero, no FOUC.
3. Visit `http://localhost:8000/module-2/slides-video7.html` → expect the locked placeholder.
4. Visit `http://localhost:8000/module-3/` and `.../module-4/` → same.
5. Visit `http://localhost:8000/module-1/` → expect normal module content. Header nav shows `[ 02 ]`, `[ 03 ]`, `[ 04 ]` as dimmed/strikethrough with screen-reader-only unlock text.
6. Visit `http://localhost:8000/` → homepage module 2/3/4 cards are dimmed, lock icon replaces the default icon, CTA says "Unlocks Sun 4/19 5pm ET" etc. Click a locked card → nothing happens (no navigation, no URL change). Tab to a locked card and press Enter → nothing happens.
7. Visit `http://localhost:8000/syllabus/` → every inline "Module 2/3/4" link is dimmed and strikethrough. Clicks and Enter presses do nothing.
8. **Unlock simulation:** temporarily edit `docs/assets/js/module-schedule.js` — change `'2026-04-19T21:00:00Z'` to `'2020-01-01T00:00:00Z'`. Hard-reload `http://localhost:8000/module-2/`. Expect the real module 2 content to render. Revert the file.
9. **Screen reader smoke test:** on the homepage, tab through the module cards with ChromeVox or VoiceOver. Each locked card should announce as "Module 2, Custom skills for Claude Code, locked, unlocks Sunday April 19 at 5 PM ET, dimmed, disabled" (or similar, exact wording depends on the reader).
10. **Lighthouse accessibility audit** on `http://localhost:8000/`: expect score unchanged or improved.

**Note on the v1 "DevTools console mutation + location.reload()" test:** that doesn't work. `location.reload()` re-fetches `module-schedule.js`, which resets the schedule object to the file's contents and drops the console mutation. The unlock simulation in step 8 is the correct approach.

**No automated test suite** is added. The site has no existing JS test harness and introducing one for a ~130-line file is overkill. Manual verification is the shipping gate, backed by Copilot review on the PR.

**Cross-browser check:** the JS uses `Date.parse`, `querySelectorAll`, `classList`, `addEventListener`, `dataset`, `location.pathname.match`. All supported in every browser released in the last decade.

---

## Deployment

**One push, one deploy, automatic unlocks.**

1. Implement changes on branch `feat/module-gating`.
2. Push branch, open PR, wait for GitHub Copilot review.
3. Address review comments, get Joe's approval.
4. Merge to `main`.
5. `.github/workflows/pages.yml` fires automatically on merge and deploys `docs/` via the existing GitHub Pages workflow. Runtime ~45–90 seconds.
6. Cloudflare proxy serves the new HTML/JS/CSS within minutes (edge cache TTL is short).

**At each release moment (4/19, 4/26, 5/3 at 5pm ET):** nothing happens on GitHub, nothing happens on Cloudflare, no new deploy. Every student browser just starts returning `false` from `isLocked()` and stops applying the locked state. The unlock is entirely client-side, at zero Actions cost.

**Rollback plan:** if something is broken after merge, `git revert <merge-sha>` and push. One more Pages deploy rolls the site back.

---

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Student has system clock wrong (off by hours or days) | Low | Low | Cosmetic only — Moodle is the real gate. A student with a wrong clock might see the page unlocked early but can't do anything in the LMS. |
| Student has JavaScript disabled | Very low | Medium | The locked placeholder in module page bodies is hidden by default (`.module-locked-screen { display: none }`), so a JS-disabled student sees the real module content. The LMS catches them there. We do not engineer a `<noscript>` fallback. |
| Cloudflare edge cache serves stale HTML after unlock moment | Low | Low | Edge cache TTL for HTML is short (minutes). If someone hits the exact moment with cached HTML, a single refresh resolves it. JS is cached separately but also short TTL, and the schedule is evaluated at load time. |
| Sync script in `<head>` adds latency to every page load | Medium | Low | The file is <5KB gzipped, served from CF edge, blocking time is typically 20–80ms on a warm cache. Worst case first-load over slow 3G is ~300ms. Acceptable trade vs. FOUC on locked links. |
| Sync script has a typo or parse error, entire page freezes mid-parse | Medium | High | The script is ~130 lines, covered by Copilot review on PR. Manual verification step 2 (loading any module page locally) catches any regression before merge. A small `try { ... } catch(e) { console.error(e) }` wrapper around the phase-1 logic prevents a parse error from stopping body parse — if the gate fails, the site still loads (and exposes real content, which is the same state we're in today). |
| Link selector accidentally matches something unrelated | Low | Low | Selectors use the path-with-slash pattern `module-[234]/`. Hash-only anchors are skipped. Pages linking to `module-1/` are unaffected. |
| Forgetting that module 2 has subpages when adding more subpages later | Medium | Medium | Surface A explicitly documents that the URL match uses `/module-[234](\/\|$)`, so new subpages under `/module-2/` are automatically gated as long as they include the sync `<script>` tag. Spec risks-section note: every new file under `docs/module-{2,3,4}/` must include the sync script tag in `<head>`. |
| v1 "inline head guard" approach leaks real content before JS loads | N/A | N/A | Fixed in v2. The sync external script in `<head>` blocks body parse, so the class is set before first paint. |

---

## Implementation sequence

Ordered for easy bisection if something breaks:

1. **Schedule file skeleton.** Create `docs/assets/js/module-schedule.js` with `MODULE_SCHEDULE`, `releaseFor()`, `isLocked()`, and the phase-1 class-setter. No DOM hooks yet. Confirm it runs without error in isolation.
2. **CSS.** Add the locked-state rules to `amditis.css` (`.module-icon-locked`, `.cta-locked`, `.module-locked-link`, `.module-locked-screen`, `html.mooc-locked-m*` and `html.mooc-locked-here` selectors, `.sr-only` utility if absent).
3. **Module page surgery (module 2 only, as a vertical slice).** In `docs/module-2/index.html`: add `<script src="../assets/js/module-schedule.js"></script>` in `<head>`, add `.module-live-content` to the hero `<section>`, `<main>`, and `<footer>`, and insert the pre-rendered `<section class="module-locked-screen">` placeholder between the hero section and `<main>`. Load locally → verify direct URL shows locked placeholder. Edit schedule file to past date → verify real content. Revert. This is the pivot point for the whole design.
4. **Repeat for module 3, module 4, and module 2 subpages.** `module-3/index.html`, `module-4/index.html`, `module-2/slides-skills-overview.html`, `module-2/slides-video7.html`. Same treatment.
5. **Homepage cards.** In `docs/index.html`: add sync script tag, add `data-module-card` attributes to the three locked cards, add the pre-rendered dual-icon + dual-CTA markup. Load homepage locally → verify cards dim correctly. Click each locked card → verify no navigation. Verify module 1 and bonus cards are unaffected.
6. **Phase-2 JS (click handlers).** Extend `module-schedule.js` to bind click/keydown preventDefault on `data-module-card` anchors on DOMContentLoaded.
7. **Inline links.** Extend `module-schedule.js` to find `a[href*="module-N/"]:not([data-module-card])`, add `.module-locked-link`, append sr-only unlock text, bind the same click/keydown handlers.
8. **Bulk script-tag rollout.** Run `grep -RIlE 'href="[^"]*module-[234]/' docs --include='*.html'` to get the full list. For each file in the list (plus all four module page files from steps 3–5, plus `docs/module-1/index.html`), add the sync `<script>` tag in `<head>`. Verify relative path depth per file (subdirectory pages use `../assets/js/module-schedule.js`).
9. **Full manual verification.** Run the Testing checklist end-to-end.
10. **PR.** Push branch, open PR, Copilot review, address comments, merge.

Each step is committable on its own. Steps 1–2 land harmless infrastructure. Step 3 is the smallest vertical slice that proves the approach works. Steps 4–8 extend coverage. Step 9 is the pre-merge gate.

---

## Open questions

None. All design choices were resolved during brainstorming + v2 Copilot review:

- ✅ Direct URL access → locked placeholder replaces content (Surface A)
- ✅ Visual style → dimmed + swap CTA + unlock date (Surface B)
- ✅ Preview mode → none
- ✅ Schedule → UTC timestamps, only modules 2/3/4 gated
- ✅ Approach → sync-blocking script in head + CSS-first visual state
- ✅ Actions usage → zero new scheduled runs, one normal deploy
- ✅ Accessibility → sr-only unlock text, no `pointer-events` hack, click/keydown preventDefault
- ✅ Module subpages → covered via URL regex + same script tag
- ✅ Content outside `<main>` → covered via `.module-live-content` marker class on both hero and `<main>`
- ✅ Icon swap → CSS-driven on pre-rendered dual icons, no `lucide.createIcons()` race

---

## Review history

- **v1 (pre-Copilot):** deferred external script + inline head guard duplicated across 3 module pages. Card visual mutation via JS (icon swap, CTA text rewrite). Inline links disabled via `pointer-events: none` + `title` tooltip.
- **v2 (post-Copilot, this document):** single sync-blocking external script in `<head>` of every gated page, schedule in one file, CSS-first visual state (pre-rendered dual markup), click/keydown preventDefault for disable, `.sr-only` span for accessible unlock label, `.module-live-content` marker class on hero + main, module 2 subpages included, testing procedure corrected.

Copilot findings that were addressed in v2:
1. FOUC / click window on homepage cards & nav → sync script blocks body parse
2. `pointer-events: none` doesn't block keyboard activation → click + keydown preventDefault handlers
3. `title` is not a reliable a11y label → `.sr-only` span with explicit unlock text
4. `html.mooc-locked main { display: none }` misses content outside `<main>` → `.module-live-content` marker on both hero and `<main>`
5. `lucide.createIcons()` already replaced `<i>` with `<svg>` by the time JS runs → CSS-driven dual-icon visibility, no post-load icon mutation
6. Module 2 subpages (`slides-skills-overview.html`, `slides-video7.html`) not in scope → included, URL regex `/module-[234](\/\|$)` catches them
7. `location.reload()` after console mutation doesn't test unlocked path → corrected testing step 8 uses local file edit

---

## References

- Existing site: https://mooc.amditis.tech
- Repo: https://github.com/jamditis/prompt-engineering-journalists
- Prior spec format: `docs/superpowers/specs/2026-04-09-module-4-revision-design.md`
- Existing CSS: `docs/assets/css/amditis.css`
- Existing JS: `docs/assets/js/{config.js, copy-code.js, ask-ai.js, video-tabs.js}`
- Deploy workflow: `.github/workflows/pages.yml`
- Lucide docs (`lucide.createIcons` behavior): https://lucide.dev/guide/packages/lucide
