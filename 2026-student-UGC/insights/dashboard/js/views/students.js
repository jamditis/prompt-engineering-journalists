import { getStudents } from "../data.js";
import { anonymize, onAnonChange } from "../anonymize.js";
import { html, mount } from "../dom.js";
import { fmtNumber } from "../format.js";

const state = { role: "", country: "", skill: "", module: "", q: "", selectedId: null };
let students = [];

export async function render() {
  students = await getStudents();
  if (!state.selectedId) state.selectedId = students[0]?.student_id || null;

  const root = document.createElement("section");
  root.className = "view view-students";

  function paint(focusSearch = false) {
    const filtered = applyFilters(students);
    if (!filtered.find(s => s.student_id === state.selectedId)) {
      state.selectedId = filtered[0]?.student_id || null;
    }
    const selected = filtered.find(s => s.student_id === state.selectedId) || filtered[0];

    const tpl = html`
      <header class="view-head">
        <div><span class="kicker">${students.length} students</span><h2>Profiles</h2></div>
        <p class="lede">Click a name to read what they posted across the term.</p>
      </header>
      <div class="filter-row">
        <label>Role <select data-filter="role">
          <option value="">all</option>
          ${distinct(students.map(s => s.role).filter(Boolean)).map(v => html`<option ${state.role === v ? "selected" : ""}>${v}</option>`)}
        </select></label>
        <label>Country <select data-filter="country">
          <option value="">all</option>
          ${distinct(students.map(s => s.country).filter(Boolean)).map(v => html`<option ${state.country === v ? "selected" : ""}>${v}</option>`)}
        </select></label>
        <label>Skill <select data-filter="skill">
          <option value="">all</option>
          <option ${state.skill === "beginner" ? "selected" : ""}>beginner</option>
          <option ${state.skill === "intermediate" ? "selected" : ""}>intermediate</option>
          <option ${state.skill === "advanced" ? "selected" : ""}>advanced</option>
        </select></label>
        <label>Module <select data-filter="module">
          <option value="">all</option>
          <option ${state.module === "m1" ? "selected" : ""}>m1</option>
          <option ${state.module === "m2" ? "selected" : ""}>m2</option>
          <option ${state.module === "m3" ? "selected" : ""}>m3</option>
          <option ${state.module === "m4" ? "selected" : ""}>m4</option>
        </select></label>
        <label>Search <input type="search" data-filter="q" value="${state.q}" placeholder="role, name, theme…"></label>
      </div>
      <p class="muted">${fmtNumber(filtered.length)} of ${fmtNumber(students.length)} students match.</p>
      <div class="two-pane">
        <aside class="student-list" aria-label="Students">
          ${filtered.length
            ? filtered.map(s => html`<button data-student="${s.student_id}" class="${s.student_id === state.selectedId ? "is-active" : ""}">
                <span>${anonymize(s.real_name)}</span>
                <span class="muted tabular">${fmtNumber(s.post_count)}</span>
              </button>`)
            : html`<p class="empty-note">No matches.</p>`}
        </aside>
        <article class="student-detail" aria-live="polite">
          ${renderDetail(selected)}
        </article>
      </div>
    `;

    mount(root, tpl);

    if (focusSearch) {
      const r = root.querySelector('input[data-filter="q"]');
      if (r) {
        r.focus();
        const v = r.value;
        r.setSelectionRange(v.length, v.length);
      }
    }
  }

  root.addEventListener("input", e => {
    const el = e.target.closest("[data-filter]");
    if (!el) return;
    state[el.dataset.filter] = el.value;
    paint(el.matches('input[type="search"]'));
  });

  root.addEventListener("change", e => {
    const el = e.target.closest("select[data-filter]");
    if (!el) return;
    state[el.dataset.filter] = el.value;
    paint(false);
  });

  root.addEventListener("click", e => {
    const li = e.target.closest("[data-student]");
    if (!li) return;
    state.selectedId = li.dataset.student;
    paint(false);
  });

  onAnonChange(() => paint(false));
  paint(false);
  return root;
}

function distinct(arr) {
  return [...new Set(arr)].sort();
}

function applyFilters(arr) {
  const q = state.q.trim().toLowerCase();
  return arr.filter(s => {
    if (state.role && s.role !== state.role) return false;
    if (state.country && s.country !== state.country) return false;
    if (state.skill && s.skill_level !== state.skill) return false;
    if (state.module && !(s.modules_active || []).includes(state.module)) return false;
    if (q) {
      const hay = [anonymize(s.real_name), s.real_name, s.role, s.country, s.org, ...(s.themes || []), ...(s.beat || [])].filter(Boolean).join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderDetail(s) {
  if (!s) return html`<p class="empty-note">Pick a student.</p>`;
  return html`
    <header class="detail-head">
      <h3>${anonymize(s.real_name)}</h3>
      <p class="muted">${s.role || "—"}${s.org ? html` · ${s.org}` : ""}${s.country ? html` · ${s.country}` : ""}</p>
      <p class="muted">${fmtNumber(s.post_count)} posts · ${s.skill_level || "—"} · modules ${(s.modules_active || []).join(", ") || "—"}</p>
    </header>
    ${s.profile_summary ? html`<p>${s.profile_summary}</p>` : html`<p class="empty-note">Profile narrative pending.</p>`}
    ${listBlock("Themes", s.themes)}
    ${listBlock("Beat", s.beat)}
    ${listBlock("Project ideas", s.project_ideas || s.projects)}
    ${listBlock("Tools mentioned", s.tools_mentioned)}
    ${listBlock("Challenges", s.challenges)}
    <p class="muted">Posts: ${(s.post_ids || []).map(id => html`<code>${id}</code> `)}</p>
  `;
}

function listBlock(title, items) {
  if (!items || !items.length) return "";
  return html`<p><strong>${title}:</strong> ${items.join(", ")}</p>`;
}
