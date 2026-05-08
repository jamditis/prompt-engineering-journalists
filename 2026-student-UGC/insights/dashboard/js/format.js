const numberFmt = new Intl.NumberFormat("en-US");
const dateFmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });

export const fmtNumber = n => numberFmt.format(n);

export function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : dateFmt.format(d);
}

export const fmtPercent = (part, whole) => whole ? `${Math.round((part / whole) * 100)}%` : "0%";

export function truncate(str, n = 200) {
  if (!str) return "";
  return str.length > n ? str.slice(0, n - 1).trimEnd() + "…" : str;
}
