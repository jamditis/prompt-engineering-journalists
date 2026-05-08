import { getThemes, getQuotes } from "../data.js";
import { anonymize } from "../anonymize.js";
import { html, mount } from "../dom.js";
import { fmtNumber } from "../format.js";

export async function render() {
  const [themes, quotes] = await Promise.all([getThemes(), getQuotes()]);
  const quotesByPost = new Map();
  for (const q of quotes) {
    if (!quotesByPost.has(q.post_id)) quotesByPost.set(q.post_id, []);
    quotesByPost.get(q.post_id).push(q);
  }
  const sorted = [...themes].sort((a, b) => (b.member_count || 0) - (a.member_count || 0));

  const root = document.createElement("section");
  root.className = "view view-themes";

  const tpl = html`
    <header class="view-head">
      <div><span class="kicker">${themes.length} themes</span><h2>What students talked about</h2></div>
      <p class="lede">Canonical themes were coded for explicitly. Emergent themes surfaced after the fact, after clustering free-form labels across all 912 posts.</p>
    </header>
    <div class="theme-list">${sorted.map(t => themeCard(t, quotesByPost))}</div>
  `;
  mount(root, tpl);

  root.addEventListener("click", e => {
    const btn = e.target.closest(".theme-toggle");
    if (!btn) return;
    const card = btn.closest(".theme-card");
    const expanded = card.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(expanded));
    btn.textContent = expanded ? "Hide" : "Read";
  });

  return root;
}

function themeCard(t, quotesByPost) {
  const tag = t.is_emergent ? "emergent" : "canonical";
  const samples = pickSamples(t, quotesByPost).slice(0, 3);
  const description = t.description || "";
  const summary = t.ai_summary || "";
  const empty = !description && !summary && samples.length === 0;

  return html`
    <article class="theme-card">
      <header class="theme-head">
        <div>
          <h3>${t.label}</h3>
          <p class="muted">${tag} · ${t.theme_id}</p>
        </div>
        <div class="tabular">${fmtNumber(t.member_count || 0)} <span class="muted">posts</span></div>
        <button class="theme-toggle" aria-expanded="false">Read</button>
      </header>
      <div class="theme-body">
        ${description ? html`<p>${description}</p>` : ""}
        ${summary ? html`<p>${summary}</p>` : ""}
        ${samples.map(quoteBlock)}
        ${empty ? html`<p class="empty-note">No description or sample quotes for this theme yet.</p>` : ""}
      </div>
    </article>
  `;
}

function pickSamples(theme, quotesByPost) {
  const out = [];
  for (const pid of theme.sample_quote_ids || []) {
    const quotes = quotesByPost.get(pid) || [];
    const onTopic = quotes.find(q => q.topic === theme.theme_id);
    if (onTopic) { out.push(onTopic); continue; }
    if (quotes[0]) out.push(quotes[0]);
  }
  return out;
}

function quoteBlock(q) {
  return html`<blockquote class="quote">
    ${q.text}
    <span class="attribution">${anonymize(q.author_name) || "anonymous"} — ${q.forum_slug}</span>
  </blockquote>`;
}
