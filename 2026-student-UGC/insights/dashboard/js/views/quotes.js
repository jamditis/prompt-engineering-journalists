import { getQuotes } from "../data.js";
import { anonymize, onAnonChange } from "../anonymize.js";
import { html, mount } from "../dom.js";
import { fmtNumber } from "../format.js";

const state = { strength: "high", topic: "", language: "", sentiment: "", forum: "", q: "" };
let quotes = [];

export async function render() {
  quotes = await getQuotes();
  const root = document.createElement("section");
  root.className = "view view-quotes";

  function paint(focusSearch = false) {
    const filtered = filter(quotes);
    const tpl = html`
      <header class="view-head">
        <div><span class="kicker">${fmtNumber(quotes.length)} verbatim lines</span><h2>Quote bank</h2></div>
        <p class="lede">Verbatim. We don't smooth grammar or paraphrase. Click "copy" to grab the line plus a permalink as a footnote.</p>
      </header>
      <div class="filter-row">
        <label>Strength <select data-f="strength">
          <option value="">any</option>
          <option ${state.strength === "high" ? "selected" : ""}>high</option>
          <option ${state.strength === "medium" ? "selected" : ""}>medium</option>
        </select></label>
        <label>Theme <select data-f="topic">
          <option value="">all</option>
          ${distinct(quotes.map(q => q.topic)).map(v => html`<option ${state.topic === v ? "selected" : ""}>${v}</option>`)}
        </select></label>
        <label>Language <select data-f="language">
          <option value="">all</option>
          ${distinct(quotes.map(q => q.language)).map(v => html`<option ${state.language === v ? "selected" : ""}>${v}</option>`)}
        </select></label>
        <label>Sentiment <select data-f="sentiment">
          <option value="">all</option>
          ${distinct(quotes.map(q => q.sentiment)).map(v => html`<option ${state.sentiment === v ? "selected" : ""}>${v}</option>`)}
        </select></label>
        <label>Forum <select data-f="forum">
          <option value="">all</option>
          ${distinct(quotes.map(q => q.forum_slug)).map(v => html`<option ${state.forum === v ? "selected" : ""}>${v}</option>`)}
        </select></label>
        <label>Search <input type="search" data-f="q" value="${state.q}" placeholder="any words"></label>
      </div>
      <p class="muted">${fmtNumber(filtered.length)} of ${fmtNumber(quotes.length)} quotes match.</p>
      <div class="quote-list">
        ${filtered.length
          ? filtered.slice(0, 200).map(q => html`
              <blockquote class="quote">
                ${q.text}
                <span class="attribution">
                  ${anonymize(q.author_name) || "anonymous"} — ${q.forum_slug} · ${q.language || "?"} · ${q.sentiment || ""}
                  <button class="copy-btn" data-text="${q.text}" data-link="${q.permalink || ""}">copy</button>
                </span>
              </blockquote>
            `)
          : html`<p class="empty-note">No matches.</p>`}
        ${filtered.length > 200 ? html`<p class="muted">Showing the first 200 — refine the filters to see more.</p>` : ""}
      </div>
    `;
    mount(root, tpl);

    if (focusSearch) {
      const r = root.querySelector('input[data-f="q"]');
      if (r) { r.focus(); r.setSelectionRange(r.value.length, r.value.length); }
    }
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

  root.addEventListener("click", e => {
    const btn = e.target.closest(".copy-btn");
    if (!btn) return;
    const text = btn.dataset.text;
    const link = btn.dataset.link;
    navigator.clipboard.writeText(`${text}${link ? `\n— ${link}` : ""}`).then(() => {
      btn.textContent = "copied";
      setTimeout(() => btn.textContent = "copy", 1200);
    });
  });

  onAnonChange(() => paint(false));
  paint(false);
  return root;
}

function distinct(arr) {
  return [...new Set(arr.filter(Boolean))].sort();
}

function filter(arr) {
  const q = state.q.trim().toLowerCase();
  return arr.filter(it => {
    if (state.strength && it.strength !== state.strength) return false;
    if (state.topic && it.topic !== state.topic) return false;
    if (state.language && it.language !== state.language) return false;
    if (state.sentiment && it.sentiment !== state.sentiment) return false;
    if (state.forum && it.forum_slug !== state.forum) return false;
    if (q && !it.text.toLowerCase().includes(q)) return false;
    return true;
  });
}
