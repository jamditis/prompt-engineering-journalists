import { initAnonymize } from "./anonymize.js";
import { mount, html } from "./dom.js";

const VIEWS = {
  overview: "./views/overview.js",
  themes: "./views/themes.js",
  people: "./views/people.js",
  skills: "./views/skills.js",
  forums: "./views/forums.js",
  students: "./views/students.js",
  quotes: "./views/quotes.js",
  search: "./views/search.js",
};

const outlet = document.getElementById("view-outlet");
const navLinks = [...document.querySelectorAll(".primary-nav a")];
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("primary-nav");

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

async function render() {
  const hash = window.location.hash.replace(/^#\//, "") || "overview";
  const path = VIEWS[hash] || VIEWS.overview;
  navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#/${hash}`));
  mount(outlet, html`<p class="loading">Loading…</p>`);
  try {
    const mod = await import(path);
    const node = await mod.render();
    outlet.replaceChildren(node);
  } catch (err) {
    console.error(err);
    mount(outlet, html`<p class="error">Could not load this view: ${err.message}</p>`);
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", async () => {
  await initAnonymize();
  if (!window.location.hash) window.location.hash = "#/overview";
  render();
});
