import { getOverview } from "../data.js";
import { html, mount } from "../dom.js";
import { fmtNumber, fmtDate } from "../format.js";

export async function render() {
  const o = await getOverview();
  const root = document.createElement("section");
  root.className = "view view-overview";

  const start = fmtDate(o.date_range?.start);
  const end = fmtDate(o.date_range?.end);
  const lede = `${fmtNumber(o.total_students)} students from ${o.countries} countries posted ${fmtNumber(o.total_posts)} times across ${o.modules_covered.length} modules between ${start} and ${end}.`;

  const tpl = html`
    <header class="view-head">
      <div>
        <span class="kicker">at a glance</span>
        <h2>Cohort overview</h2>
      </div>
      <p class="lede">${lede}</p>
    </header>

    <div class="numbers-row">
      ${numberCell("Posts", o.total_posts)}
      ${numberCell("Students", o.total_students)}
      ${numberCell("Countries", o.countries)}
      ${numberCell("Languages", o.languages)}
    </div>

    <div class="grid-2">
      <section>
        <h3>Posting timeline</h3>
        <div class="timeline-bars">${timelineBars(o.posting_timeline || [])}</div>
      </section>
      <section>
        <h3>Top discussions</h3>
        ${barList(o.top_discussions || [], it => it.subject || it.discussion_subject || "(untitled)", it => it.post_count)}
      </section>
    </div>

    <hr>

    <div class="grid-2">
      <section>
        <h3>Roles</h3>
        ${barList(topN(o.roles, 10), it => it.role, it => it.count)}
      </section>
      <section>
        <h3>Countries</h3>
        ${barList(topN(o.countries_breakdown, 10), it => it.country, it => it.count)}
      </section>
    </div>

    <hr>

    <div class="grid-2">
      <section>
        <h3>Skill levels</h3>
        ${barList(o.skill_levels || [], it => it.level, it => it.count)}
      </section>
      <section>
        <h3>Sentiments</h3>
        <p class="chip-row">${(o.sentiments || []).map(s => chip(s.sentiment, s.count))}</p>
        <h3 style="margin-top: var(--space-6)">Languages</h3>
        <p class="chip-row">${(o.languages_breakdown || []).map(l => chip(l.language, l.count))}</p>
      </section>
    </div>

    <hr>

    <section>
      <h3>Top tools mentioned</h3>
      ${barList(topN(o.top_tools, 10), it => it.tool, it => it.count)}
    </section>

    <section style="margin-top: var(--space-6)">
      <h3>Top themes across the cohort</h3>
      ${barList(topN(o.top_themes, 10), it => it.theme_id || it.label, it => it.count)}
    </section>
  `;

  mount(root, tpl);
  return root;
}

function numberCell(label, value) {
  return html`<div><div class="figure tabular">${fmtNumber(value)}</div><div class="figure-label">${label}</div></div>`;
}

function chip(label, count) {
  return html`<span class="chip">${label}<span class="chip-count">${fmtNumber(count)}</span></span> `;
}

function topN(arr, n) {
  return [...(arr || [])].sort((a, b) => (b.count || 0) - (a.count || 0)).slice(0, n);
}

function barList(items, getLabel, getCount) {
  if (!items.length) return html`<p class="empty-note">No data yet.</p>`;
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

function timelineBars(points) {
  if (!points.length) return html`<p class="empty-note">No timeline data.</p>`;
  const max = Math.max(...points.map(p => p.count), 1);
  return html`${points.map(p => {
    const h = ((p.count / max) * 80).toFixed(0);
    return html`<span class="tl-bar" title="${p.week}: ${p.count} posts" style="height:${h}px"></span>`;
  })}`;
}
