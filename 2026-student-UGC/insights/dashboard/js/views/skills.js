import { getStudents, getOverview } from "../data.js";
import { html, mount } from "../dom.js";
import { fmtNumber, fmtPercent } from "../format.js";

export async function render() {
  const [students, overview] = await Promise.all([getStudents(), getOverview()]);
  const total = students.length;
  const levels = ["beginner", "intermediate", "advanced"];
  const counts = levels.map(l => students.filter(s => s.skill_level === l).length);

  const themesByLevel = {};
  for (const lvl of levels) {
    const subset = students.filter(s => s.skill_level === lvl);
    const tally = {};
    for (const s of subset) for (const t of (s.themes || [])) tally[t] = (tally[t] || 0) + 1;
    themesByLevel[lvl] = Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 8);
  }

  const root = document.createElement("section");
  root.className = "view view-skills";

  const tpl = html`
    <header class="view-head">
      <div><span class="kicker">skill mix</span><h2>What students bring in</h2></div>
      <p class="lede">Skill level reflects what each student demonstrated in posts, not their overall career.</p>
    </header>

    <section class="stack-bar">
      ${levels.map((l, i) => html`<span class="seg ${l}" style="flex:${counts[i] || 0.001}" title="${l}: ${counts[i]} (${fmtPercent(counts[i], total)})"></span>`)}
    </section>
    <ul class="legend">
      ${levels.map((l, i) => html`<li><span class="dot ${l}"></span>${l} <span class="muted tabular">${fmtNumber(counts[i])} · ${fmtPercent(counts[i], total)}</span></li>`)}
    </ul>

    <hr>

    <section>
      <h3>Top tools across the cohort</h3>
      ${barList((overview.top_tools || []).slice(0, 12), it => it.tool || it.label, it => it.count)}
    </section>

    <hr>

    <section class="grid-3">
      ${levels.map((l, i) => html`
        <div>
          <h3>${l}</h3>
          <p class="muted">Top themes (${fmtNumber(counts[i])} students)</p>
          ${themesByLevel[l].length
            ? html`<ul class="bar-list">${themesByLevel[l].map(([t, c]) => barRow(t, c, themesByLevel[l][0][1]))}</ul>`
            : html`<p class="empty-note">No themes coded for this group.</p>`}
        </div>
      `)}
    </section>
  `;

  mount(root, tpl);
  return root;
}

function barList(items, getLabel, getCount) {
  if (!items.length) return html`<p class="empty-note">No data.</p>`;
  const max = Math.max(...items.map(getCount), 1);
  return html`<ul class="bar-list">${items.map(it => barRow(getLabel(it), getCount(it), max))}</ul>`;
}

function barRow(label, count, max) {
  const pct = ((count / max) * 100).toFixed(1);
  return html`<li>
    <span class="bar-label">${label}</span>
    <span class="bar-count tabular">${fmtNumber(count)}</span>
    <span class="bar-track"><span class="bar-fill" style="width:${pct}%"></span></span>
  </li>`;
}
