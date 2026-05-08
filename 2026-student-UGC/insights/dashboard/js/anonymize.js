import { getNameMap } from "./data.js";

const STORAGE_KEY = "ugc-dashboard:show-real-names";
let showReal = false;
let nameMap = {};
const listeners = new Set();

export async function initAnonymize() {
  nameMap = await getNameMap();
  showReal = localStorage.getItem(STORAGE_KEY) === "1";
  applyBodyAttr();
  const toggle = document.getElementById("anon-toggle");
  toggle.checked = showReal;
  toggle.addEventListener("change", () => {
    showReal = toggle.checked;
    localStorage.setItem(STORAGE_KEY, showReal ? "1" : "0");
    applyBodyAttr();
    listeners.forEach(fn => fn());
  });
}

function applyBodyAttr() {
  document.body.dataset.anon = showReal ? "off" : "on";
}

export function anonymize(realName) {
  if (!realName) return realName;
  if (showReal) return realName;
  return nameMap[realName] || realName;
}

export function onAnonChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export const isAnonymized = () => !showReal;
