import { getSearchDocs } from "../data.js";
import { anonymize } from "../anonymize.js";
import { html, mount, raw, escape } from "../dom.js";
import { fmtNumber, truncate } from "../format.js";

let idx = null;
let docsById = null;
const state = { q: "", forum: "", language: "" };

export async function render() {
  const root = document.createElement("section");
  root.className = "view view-search";

  function paint(focusSearch = false) {
    const tpl = html`
      <header class="view-head">
        <div><span class="kicker">912 posts</span><h2>Full-text search</h2></div>
        <p class="lede">Searches every post. The first time you open this view, the index takes a moment to build.</p>
      </header>
      <div class="filter-row">
        <label>Search <input type="search" data-f="q" value="${state.q}" placeholder="claude code, transcription, público…"></label>
        <label>Forum <select data-f="forum">
          <option value="">all</option>${forumOptions()}
        </select></label>
        <label>Language <select data-f="language">
          <option value="">all</option>${langOptions()}
        </select></label>
      </div>
      <p class="muted index-status">${idx ? html`${fmtNumber(docsById.size)} posts indexed.` : "Loading index…"}</p>
      <div class="search-results">${results()}</div>
    `;
    mount(root, tpl);
    if (focusSearch) {
      const input = root.querySelector('input[data-f="q"]');
      if (input) { input.focus(); input.setSelectionRange(state.q.length, state.q.length); }
    }
  }

  function forumOptions() {
    if (!docsById) return "";
    const forums = [...new Set([...docsById.values()].map(d => d.forum_slug).filter(Boolean))].sort();
    return html`${forums.map(v => html`<option ${state.forum === v ? "selected" : ""}>${v}</option>`)}`;
  }
  function langOptions() {
    if (!docsById) return "";
    const langs = [...new Set([...docsById.values()].map(d => d.language).filter(Boolean))].sort();
    return html`${langs.map(v => html`<option ${state.language === v ? "selected" : ""}>${v}</option>`)}`;
  }

  function results() {
    if (!idx) return "";
    if (!state.q.trim()) return html`<p class="empty-note">Type a query above.</p>`;
    let hits;
    try {
      hits = idx.search(state.q, { combineWith: "AND" });
    } catch (err) {
      return html`<p class="empty-note">Search error: ${err.message}</p>`;
    }
    if (state.forum) hits = hits.filter(h => h.forum_slug === state.forum);
    if (state.language) hits = hits.filter(h => h.language === state.language);
    if (!hits.length) return html`<p class="empty-note">No matches for "${state.q}".</p>`;
    return html`
      <p class="muted">${fmtNumber(hits.length)} matches</p>
      ${hits.slice(0, 60).map(h => {
        const doc = docsById.get(h.id);
        return html`
          <article class="search-hit">
            <header>
              <strong>${anonymize(doc.author_name) || "anonymous"}</strong>
              <span class="muted"> · ${doc.forum_slug} · ${doc.language || "?"} · ${doc.posted_at?.slice(0, 10) || ""}</span>
            </header>
            <p>${raw(highlight(truncate(doc.text, 360), state.q))}</p>
            ${doc.permalink ? html`<p class="muted"><a href="${doc.permalink}" target="_blank" rel="noreferrer">permalink</a></p>` : ""}
          </article>
        `;
      })}
      ${hits.length > 60 ? html`<p class="muted">Showing first 60 of ${fmtNumber(hits.length)} — narrow the query.</p>` : ""}
    `;
  }

  root.addEventListener("input", e => {
    const el = e.target.closest("[data-f]");
    if (!el) return;
    state[el.dataset.f] = el.value;
    paint(el.matches('input[type="search"]'));
  });

  root.addEventListener("change", e => {
    const el = e.target.closest("select[data-f]");
    if (!el) return;
    state[el.dataset.f] = el.value;
    paint(false);
  });

  paint(false);
  buildIndex().then(() => paint(false)).catch(err => {
    console.error(err);
    const status = root.querySelector(".index-status");
    if (status) status.textContent = "Could not build search index — see console.";
  });

  return root;
}

async function buildIndex() {
  if (idx) return;
  const mod = await import("https://esm.sh/minisearch@6.3.0");
  const MiniSearch = mod.default || mod.MiniSearch;
  const docs = await getSearchDocs();
  docsById = new Map(docs.map(d => [d.id, d]));
  idx = new MiniSearch({
    fields: ["text", "author_name", "forum_name", "discussion_subject"],
    storeFields: ["id", "author_name", "forum_slug", "forum_name", "language", "posted_at", "permalink", "discussion_subject"],
    searchOptions: { boost: { text: 2, discussion_subject: 1.5 }, fuzzy: 0.15, prefix: true },
  });
  idx.addAll(docs);
}

function highlight(text, q) {
  const safe = escape(text);
  if (!q) return safe;
  const terms = q.trim().split(/\s+/).filter(t => t.length > 1);
  let out = safe;
  for (const t of terms) {
    const re = new RegExp(`(${escapeReg(t)})`, "ig");
    out = out.replace(re, "<mark>$1</mark>");
  }
  return out;
}

function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
