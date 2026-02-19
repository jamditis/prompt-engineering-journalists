# Typography redesign implementation plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace Share Tech Mono body text and Chakra Petch headings with a legible editorial stack: Fraunces (headings), Inter (body), JetBrains Mono (code).

**Architecture:** Config-driven font swap via Tailwind config.js cascades most changes automatically. Remaining work is surgical replacement of `font-mono` → `font-sans` on prose elements across all HTML pages, and updating Google Fonts `<link>` tags.

**Tech Stack:** Tailwind CSS (CDN, config.js), Google Fonts, plain HTML

---

### Task 1: Update config.js

**Files:**
- Modify: `docs/assets/js/config.js`

**Step 1: Replace the entire config**

Open `docs/assets/js/config.js` and replace its contents with:

```js
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                display: ['Fraunces', 'serif'],
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                void: '#0f172a',
                panel: '#1e293b',
                surface: '#334155',
                chrome: '#f1f5f9',
                acid: '#a3e635',
                acidDim: 'rgba(163, 230, 53, 0.12)',
                signal: '#f87171',
                signalDim: 'rgba(248, 113, 113, 0.12)',
                ice: '#67e8f9',
                iceDim: 'rgba(103, 232, 249, 0.12)',
            },
        }
    }
}
```

**Step 2: Commit**

```bash
cd ~/projects/prompt-engineering-journalists
git add docs/assets/js/config.js
git commit -m "refactor: update font stack — Fraunces/Inter/JetBrains Mono"
```

---

### Task 2: Update amditis.css

**Files:**
- Modify: `docs/assets/css/amditis.css`

**Step 1: Add base prose line-height**

After the `::selection` block (around line 12), add:

```css
/* Base prose typography */
p, li {
    line-height: 1.65;
}
```

**Step 2: Update hardcoded Share Tech Mono references**

Find and replace two occurrences of `'Share Tech Mono', monospace`:

- `.accordion-header::after` (around line 107):
  ```css
  font-family: 'JetBrains Mono', monospace;
  ```
- `.copy-btn` (around line 202):
  ```css
  font-family: 'JetBrains Mono', monospace;
  ```

**Step 3: Commit**

```bash
git add docs/assets/css/amditis.css
git commit -m "refactor: update amditis.css for new font stack"
```

---

### Task 3: Update Google Fonts links in all HTML files

**Files to modify** (9 files total):
- `docs/index.html`
- `docs/module-1/index.html`
- `docs/module-2/index.html`
- `docs/module-3/index.html`
- `docs/module-4/index.html`
- `docs/module-5/index.html`
- `docs/templates/quick-reference.html`
- `docs/templates/troubleshooting.html`
- `docs/review.html`

**Step 1: Replace the Google Fonts link in every file**

Find this line (present in all 9 files):
```html
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

Replace with:
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Note: The `<link rel="preconnect">` tags for Google Fonts can stay as-is.

**Step 2: Verify with grep**

After editing, confirm no old font references remain:
```bash
grep -r "Chakra\|Share.Tech" docs/ --include="*.html"
```
Expected: no output.

**Step 3: Commit**

```bash
git add docs/
git commit -m "refactor: update Google Fonts links to new font stack"
```

---

### Task 4: Replace font-mono with font-sans on prose elements

This is the main content change. In all module pages and support pages, `font-mono` is used on paragraph text, list items, and descriptions. These need to become `font-sans` so they render in Inter.

**Rule:** Replace `font-mono` with `font-sans` ONLY on:
- `<p>` tags with prose content (descriptions, explanations, step text)
- `<ul>` and `<li>` tags with prose list items
- `<span>` tags with descriptive text inside paragraphs
- Table cells (`<td>`, `<th>`) with prose content

**Keep `font-mono`** on:
- Any `<code>` or `<pre>` element
- Short all-caps UI labels like `"MODULE 01"`, `"COURSE STATUS: IN DEVELOPMENT"`, `"CLAUDE CODE"`
- Navigation links
- `<span>` inside code blocks
- Any text adjacent to code (inline `code` references in explanations are fine to stay mono)

**Step 1: Process each file**

For each of the 9 HTML files, do a careful find-and-replace. The dominant patterns to change:

```
font-mono text-gray-300          →  font-sans text-gray-300
font-mono text-sm                →  font-sans text-sm
font-mono text-xs text-gray-400  →  font-sans text-xs text-gray-400
text-sm font-mono leading-relaxed → text-sm font-sans leading-relaxed
text-sm font-mono mb-4           →  text-sm font-sans mb-4
```

The patterns to LEAVE as font-mono (examples):
```
text-xs font-mono text-acid      (module number labels like "MODULE 01")
text-xs font-mono text-signal    (labels like "TROUBLESHOOTING")
text-xs font-mono text-gray-300  (short UI status labels)
text-sm font-mono text-acid      (nav breadcrumbs, active module indicator)
font-mono text-sm space-y-2      (inside code block wrappers)
```

**Step 2: Spot-check visually**

Open `docs/module-4/index.html` in a browser (use `python3 -m http.server 8080 --directory docs/` from the repo root). Verify:
- The "CLI WORKFLOWS" h1 renders in Fraunces serif
- Section headers ("Learning objectives", "Key concepts") render in Fraunces
- Paragraph text ("The pipe character `|` sends the output...") renders in Inter — proportional, not monospace
- Code blocks (`<pre><code>`) still render in JetBrains Mono

**Step 3: Commit**

```bash
git add docs/
git commit -m "refactor: replace font-mono with font-sans on prose elements"
```

---

### Task 5: Review all pages and push

**Step 1: Check all module pages in browser**

Using the local server from Task 4, check each page:
- `http://localhost:8080/` — home page
- `http://localhost:8080/module-1/` through `module-5/`
- `http://localhost:8080/templates/quick-reference.html`
- `http://localhost:8080/templates/troubleshooting.html`

On each page, verify:
- Headings use Fraunces (serif letterforms visible)
- Body text uses Inter (proportional, not fixed-width)
- Code blocks and terminal commands use JetBrains Mono
- Short UI labels ("MODULE 01", "ACTIVE", navigation) use JetBrains Mono
- No mixed monospace/proportional within a single paragraph

**Step 2: Push**

```bash
git push origin main
```

GitHub Pages will deploy automatically within ~60 seconds. Verify at the live URL.
