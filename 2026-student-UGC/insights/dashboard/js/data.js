const cache = new Map();

async function load(name) {
  if (cache.has(name)) return cache.get(name);
  const res = await fetch(`./data/${name}.json?v=1`);
  if (!res.ok) throw new Error(`Failed to load ${name}.json: ${res.status}`);
  const data = await res.json();
  cache.set(name, data);
  return data;
}

export const getOverview = () => load("overview");
export const getThemes = () => load("themes");
export const getForums = () => load("forums");
export const getStudents = () => load("students");
export const getQuotes = () => load("quotes");
export const getNameMap = () => load("name_map");
export const getSearchDocs = () => load("search-docs");
