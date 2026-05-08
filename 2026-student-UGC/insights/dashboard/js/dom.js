const ESCAPE_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export function escape(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ESCAPE_MAP[c]);
}

export function raw(value) {
  return { __safe: true, value: String(value ?? "") };
}

export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) {
    out += renderValue(values[i]);
    out += strings[i + 1];
  }
  return raw(out);
}

function renderValue(v) {
  if (v == null || v === false) return "";
  if (Array.isArray(v)) return v.map(renderValue).join("");
  if (typeof v === "object" && v.__safe) return v.value;
  return escape(v);
}

export function mount(element, content) {
  const markup = typeof content === "object" && content?.__safe ? content.value : escape(content);
  const range = document.createRange();
  range.selectNode(document.body);
  const fragment = range.createContextualFragment(markup);
  element.replaceChildren(fragment);
}
