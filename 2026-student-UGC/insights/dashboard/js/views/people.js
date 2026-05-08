import { getStudents } from "../data.js";
import { anonymize, onAnonChange } from "../anonymize.js";
import { html, mount } from "../dom.js";
import { fmtNumber } from "../format.js";

const DIMS = [
  { key: "role", label: "Roles" },
  { key: "country", label: "Countries" },
  { key: "org", label: "Organizations" },
];

export async function render() {
  const students = await getStudents();
  const root = document.createElement("section");
  root.className = "view view-people";

  let activeKey = "role";

  function paint() {
    const tpl = html`
      <header class="view-head">
        <div><span class="kicker">${students.length} students</span><h2>Who's in the room</h2></div>
        <p class="lede">Confidence tags show whether the value was stated outright or inferred from context.</p>
      </header>
      <nav class="subtabs" role="tablist">
        ${DIMS.map(d => html`<button role="tab" data-dim="${d.key}" aria-selected="${d.key === activeKey ? "true" : "false"}">${d.label}</button>`)}
      </nav>
      <div class="dim-body">${dimBody(students, activeKey)}</div>
    `;
    mount(root, tpl);
  }

  root.addEventListener("click", e => {
    const tab = e.target.closest(".subtabs button");
    if (!tab) return;
    activeKey = tab.dataset.dim;
    paint();
  });

  const unsubscribe = onAnonChange(paint);
  paint();
  return { node: root, cleanup: unsubscribe };
}

function dimBody(students, key) {
  const buckets = new Map();
  for (const s of students) {
    const value = s[key];
    if (!value) continue;
    if (!buckets.has(value)) buckets.set(value, []);
    buckets.get(value).push(s);
  }
  const sorted = [...buckets.entries()].sort((a, b) => b[1].length - a[1].length);
  if (!sorted.length) return html`<p class="empty-note">No values for ${key} yet.</p>`;
  return html`${sorted.map(([value, group]) => {
    const conf = dominantConfidence(group, `${key}_confidence`);
    return html`
      <details class="dim-row">
        <summary>
          <span class="bar-label">${value} <span class="confidence-tag ${conf}">${conf}</span></span>
          <span class="bar-count tabular">${fmtNumber(group.length)}</span>
        </summary>
        <ul class="dim-students">
          ${group.map(s => html`<li>${anonymize(s.real_name)} <span class="muted">· ${s.post_count} posts · ${s.skill_level || "—"}</span></li>`)}
        </ul>
      </details>
    `;
  })}`;
}

function dominantConfidence(group, key) {
  const counts = group.reduce((acc, s) => {
    const c = s[key] || "unknown";
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}
