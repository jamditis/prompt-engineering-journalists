import { getForums, getQuotes } from "../data.js";
import { anonymize } from "../anonymize.js";
import { html, mount } from "../dom.js";
import { fmtNumber } from "../format.js";

const SECTION_ORDER = [
  "course-ops",
  "m1-discussion", "m1-exercise",
  "m2-discussion", "m2-exercise",
  "m3-discussion", "m3-exercise",
  "m4-discussion", "m4-exercise",
  "final-project",
];
const SECTION_LABELS = {
  "course-ops": "Course operations",
  "m1-discussion": "Module 1 — discussion",
  "m1-exercise": "Module 1 — weekly exercise",
  "m2-discussion": "Module 2 — discussion",
  "m2-exercise": "Module 2 — weekly exercise",
  "m3-discussion": "Module 3 — discussion",
  "m3-exercise": "Module 3 — weekly exercise",
  "m4-discussion": "Module 4 — discussion",
  "m4-exercise": "Module 4 — weekly exercise",
  "final-project": "Final project",
};

function sectionKey(forum) {
  const cat = forum.forum_category || "other";
  if (cat === "course-ops" || cat === "final-project") return cat;
  const m = (forum.forum_slug || "").match(/^(m\d)-/);
  const mod = m ? m[1] : "m?";
  if (cat === "module-discussion") return `${mod}-discussion`;
  if (cat === "weekly-exercise") return `${mod}-exercise`;
  return cat;
}

export async function render() {
  const [forums, quotes] = await Promise.all([getForums(), getQuotes()]);
  const quoteById = groupQuotesByPost(quotes);
  const grouped = new Map();
  for (const f of forums) {
    const key = sectionKey(f);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(f);
  }

  const orderedKeys = [...SECTION_ORDER, ...[...grouped.keys()].filter(k => !SECTION_ORDER.includes(k))];

  const root = document.createElement("section");
  root.className = "view view-forums";

  const tpl = html`
    <header class="view-head">
      <div><span class="kicker">${forums.length} forums</span><h2>Where the talking happened</h2></div>
      <p class="lede">Forums are grouped by week. Narrative summaries are added in a later pass — until then, structural rollups and standout quotes show what each forum was about.</p>
    </header>
    ${orderedKeys.filter(c => grouped.has(c)).map(c => html`
      <h3 class="category-head">${SECTION_LABELS[c] || c}</h3>
      <div class="forum-grid">
        ${grouped.get(c).map(f => forumCard(f, quoteById))}
      </div>
    `)}
  `;

  mount(root, tpl);
  return root;
}

function groupQuotesByPost(quotes) {
  const map = new Map();
  for (const q of quotes) {
    if (!map.has(q.post_id)) map.set(q.post_id, []);
    map.get(q.post_id).push(q);
  }
  return map;
}

function forumCard(f, quoteById) {
  const standouts = (f.standout_quote_ids || [])
    .flatMap(id => quoteById.get(id) || [])
    .slice(0, 2);
  return html`
    <article class="forum-card">
      <header>
        <h4>${f.forum_name}</h4>
        <span class="muted tabular">${fmtNumber(f.post_count)} posts</span>
      </header>
      ${f.narrative ? html`<p>${f.narrative}</p>` : html`<p class="empty-note">Narrative pending.</p>`}
      ${pillBlock("Top themes", f.top_themes)}
      ${pillBlock("Top tools", f.top_tools)}
      ${pillBlock("Top challenges", f.top_challenges)}
      ${standouts.length ? html`<div class="standouts">${standouts.map(quoteBlock)}</div>` : ""}
    </article>
  `;
}

function pillBlock(title, items) {
  if (!items || !items.length) return "";
  return html`<div class="pill-block">
    <span class="pill-title">${title}</span>
    ${items.slice(0, 5).map(it => html`<span class="chip">${pillLabel(it)}${it && it.count != null ? html`<span class="chip-count">${fmtNumber(it.count)}</span>` : ""}</span> `)}
  </div>`;
}

function pillLabel(it) {
  if (typeof it === "string") return it;
  if (!it) return "";
  return it.label || it.theme_id || it.tool || it.challenge || it.role || it.country || "";
}

function quoteBlock(q) {
  return html`<blockquote class="quote">
    ${q.text}
    <span class="attribution">${anonymize(q.author_name) || "anonymous"}</span>
  </blockquote>`;
}
