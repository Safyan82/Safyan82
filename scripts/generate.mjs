// Generates the SVG cards used in README.md.
// Run nightly by .github/workflows/profile-cards.yml
//
//   GH_TOKEN=<token> node scripts/generate.mjs     # real data
//   node scripts/generate.mjs --mock               # fake data, for previewing the design

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";

// ─── Edit me ──────────────────────────────────────────────────────────────
const CONFIG = {
  login: "Safyan82",
  name: "Muhammad Safyan Jelani",
  host: "safyan@uk",
  tagline: "Full-stack engineer. Production SaaS by day, my own apps by night.",
  status: "shipping",
  flags: [
    { text: "--saas", color: "teal" },
    { text: "--react-native", color: "amber" },
    { text: "--ai-engineering", color: "blue" },
    { text: "--open-source", color: "coral" },
  ],
  // Link buttons under the header (file name: assets/link-<id>.svg)
  links: [
    { id: "linkedin", label: "linkedin", color: "blue" },
    { id: "littlestash", label: "littlestash.co.uk", color: "coral" },
    { id: "prompt-firewall", label: "prompt-firewall", color: "amber" },
    { id: "wfc360", label: "wfc360.com", color: "teal" },
    { id: "email", label: "email", color: "teal" },
  ],
  timeZone: "Europe/London",
};
// ──────────────────────────────────────────────────────────────────────────

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "assets");
const MOCK = process.argv.includes("--mock");
const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;

const C = {
  bg: "#0b0f17",
  panel: "#101725",
  panel2: "#0e1420",
  border: "#1e293b",
  grid: "#131b29",
  text: "#e8edf5",
  sub: "#8b98ad",
  dim: "#4a566b",
  teal: "#3ee0b0",
  amber: "#ffb347",
  blue: "#6ea8ff",
  coral: "#ff7a7a",
};

// ─── Fonts (embedded so text renders the same for every viewer) ───────────
const FONT_FILES = {
  display: "space-grotesk-latin-700-normal.woff",
  body: "space-grotesk-latin-500-normal.woff",
  mono: "jetbrains-mono-latin-400-normal.woff",
  monoBold: "jetbrains-mono-latin-700-normal.woff",
};
const FAMILY = {
  display: ["Grotesk", 700],
  body: ["Grotesk", 500],
  mono: ["JBMono", 400],
  monoBold: ["JBMono", 700],
};
const fonts = {}, fontB64 = {};
for (const [k, f] of Object.entries(FONT_FILES)) {
  const buf = fs.readFileSync(path.join(ROOT, "fonts", f));
  fonts[k] = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
  fontB64[k] = buf.toString("base64");
}
const width = (str, font, size, ls = 0) => fonts[font].getAdvanceWidth(String(str), size) + ls * String(str).length;
const fontCss = (keys) =>
  keys.map((k) => `@font-face{font-family:'${FAMILY[k][0]}';font-weight:${FAMILY[k][1]};src:url(data:font/woff;base64,${fontB64[k]}) format('woff');}`).join("");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fmt = (n) => n.toLocaleString("en-GB");
const r1 = (n) => Math.round(n * 10) / 10;

function text(x, y, str, font, size, fill, extra = "") {
  const [fam, wt] = FAMILY[font];
  return `<text x="${r1(x)}" y="${r1(y)}" font-family="${fam}" font-weight="${wt}" font-size="${size}" fill="${fill}" ${extra}>${esc(str)}</text>`;
}
// Uppercase, letter-spaced mono label
const label = (x, y, str, fill = C.sub, size = 12) => text(x, y, str.toUpperCase(), "mono", size, fill, `letter-spacing="1.6"`);
const labelW = (str, size = 12) => width(str.toUpperCase(), "mono", size, 1.6);

function svg(w, h, fontKeys, body, aria, css = "") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(aria)}">
<style>${fontCss(fontKeys)}${css}</style>
<defs>
<pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="${C.grid}" stroke-width="1"/></pattern>
<linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.teal}" stop-opacity="0.35"/><stop offset="1" stop-color="${C.teal}" stop-opacity="0"/></linearGradient>
</defs>
${body}
</svg>\n`;
}
function frame(w, h) {
  return `<rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="14" fill="${C.bg}" stroke="${C.border}"/>
<rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="14" fill="url(#grid)" opacity="0.9"/>`;
}
function panel(x, y, w, h, accent) {
  let s = `<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="${h}" rx="10" fill="${C.panel}" stroke="${C.border}"/>`;
  if (accent) s += `<rect x="${r1(x)}" y="${y + 14}" width="3" height="${h - 28}" rx="1.5" fill="${accent}"/>`;
  return s;
}
// Section heading:  // TITLE ..................... right text
function heading(W, y, title, right) {
  let s = text(32, y, "//", "monoBold", 13, C.teal) + label(56, y, title, C.text, 13);
  const lw = 56 + labelW(title, 13) + 14;
  const rw = right ? width(right, "mono", 12) : 0;
  s += `<line x1="${r1(lw)}" y1="${y - 4}" x2="${r1(W - 32 - rw - 14)}" y2="${y - 4}" stroke="${C.border}" stroke-dasharray="2 4"/>`;
  if (right) s += text(W - 32 - rw, y, right, "mono", 12, C.sub);
  return s;
}

// ─── Header: terminal window ──────────────────────────────────────────────
function headerSvg() {
  const W = 960, H = 290;
  let b = frame(W, H);
  // title bar
  b += `<path d="M0.5 14.5a14 14 0 0 1 14-14h931a14 14 0 0 1 14 14V44H0.5z" fill="${C.panel2}"/><line x1="0" y1="44" x2="${W}" y2="44" stroke="${C.border}"/>`;
  ["#ff5f57", "#febc2e", "#28c840"].forEach((c, i) => (b += `<circle cx="${26 + i * 20}" cy="22" r="6" fill="${c}"/>`));
  const title = `${CONFIG.host}: ~/profile`;
  b += text(W / 2 - width(title, "mono", 13) / 2, 27, title, "mono", 13, C.sub);
  // status pill
  const st = `status: ${CONFIG.status}`;
  const pw = width(st, "mono", 12) + 38;
  b += `<rect x="${r1(W - 20 - pw)}" y="10" width="${r1(pw)}" height="24" rx="12" fill="${C.teal}" fill-opacity="0.1" stroke="${C.teal}" stroke-opacity="0.4"/>`;
  b += `<circle class="pulse" cx="${r1(W - 20 - pw + 15)}" cy="22" r="4" fill="${C.teal}"/>`;
  b += text(W - 20 - pw + 26, 26, st, "mono", 12, C.teal);

  // editor gutter
  const lines = [92, 150, 196, 246];
  lines.forEach((y, i) => (b += text(30, y, String(i + 1).padStart(2, "0"), "mono", 13, C.dim)));
  b += `<line x1="62" y1="62" x2="62" y2="${H - 24}" stroke="${C.border}"/>`;

  const x = 86;
  b += text(x, 92, "$", "monoBold", 18, C.teal) + text(x + 22, 92, "whoami", "mono", 18, C.text);
  // name + blinking cursor
  let ns = 58;
  while (width(CONFIG.name, "display", ns) > W - x - 80) ns -= 1;
  b += text(x, 150, CONFIG.name, "display", ns, C.text, `letter-spacing="-1"`);
  const nw = width(CONFIG.name, "display", ns, -1);
  b += `<rect class="blink" x="${r1(x + nw + 10)}" y="${150 - ns * 0.72}" width="${r1(ns * 0.42)}" height="${r1(ns * 0.78)}" fill="${C.teal}"/>`;
  // tagline
  b += text(x, 196, CONFIG.tagline, "body", 21, C.sub);
  // flags
  let fx = x;
  for (const f of CONFIG.flags) {
    const w = width(f.text, "mono", 15) + 24;
    b += `<rect x="${r1(fx)}" y="224" width="${r1(w)}" height="32" rx="8" fill="${C[f.color]}" fill-opacity="0.1" stroke="${C[f.color]}" stroke-opacity="0.45"/>`;
    b += text(fx + 12, 245, f.text, "mono", 15, C[f.color]);
    fx += w + 12;
  }
  const css = `.blink{animation:b 1.1s steps(1) infinite}@keyframes b{50%{opacity:0}}.pulse{animation:p 2s ease-in-out infinite}@keyframes p{50%{opacity:.25}}`;
  return svg(W, H, ["display", "body", "mono", "monoBold"], b, `${CONFIG.name} — ${CONFIG.tagline}`, css);
}

// ─── Link buttons ─────────────────────────────────────────────────────────
function linkSvg(l) {
  const H = 44, c = C[l.color];
  const w1 = width(l.label, "monoBold", 15), w2 = l.detail ? width(l.detail, "mono", 13) + 10 : 0;
  const W = Math.ceil(18 + w1 + w2 + 14 + 14 + 16);
  let b = `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="10" fill="${C.bg}" stroke="${c}" stroke-opacity="0.55"/>`;
  b += text(18, 27, l.label, "monoBold", 15, C.text);
  if (l.detail) b += text(18 + w1 + 10, 27, l.detail, "mono", 13, C.sub);
  const ax = W - 30;
  b += `<path d="M${ax} 27l9-9M${ax + 2} 18h7v7" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  return svg(W, H, ["mono", "monoBold"], b, l.label);
}

// ─── Stats: telemetry panels ──────────────────────────────────────────────
function statsSvg(s) {
  const W = 960, P = 32, gap = 16;
  const H = 330;
  let b = frame(W, H);
  b += heading(W, 46, "GitHub telemetry", `synced ${s.updated} · nightly`);

  const pw = (W - 2 * P - 3 * gap) / 4, py = 70, ph = 160;
  const px = (i) => P + i * (pw + gap);
  const value = (x, v, unit, color = C.text) => {
    let o = text(x + 20, py + 84, v, "display", 42, color, `letter-spacing="-1"`);
    if (unit) o += text(x + 20 + width(v, "display", 42, -1) + 6, py + 84, unit, "body", 18, C.sub);
    return o;
  };

  // 1 — last 12 months + weekly sparkline
  b += panel(px(0), py, pw, ph);
  b += label(px(0) + 20, py + 30, "contributions · 12 mo");
  b += value(px(0), fmt(s.lastYear));
  {
    const vals = s.weekly, max = Math.max(1, ...vals);
    const x0 = px(0) + 20, x1 = px(0) + pw - 20, y0 = py + ph - 18, hgt = 34;
    const pts = vals.map((v, i) => [x0 + (i * (x1 - x0)) / (vals.length - 1), y0 - (v / max) * hgt]);
    const line = pts.map((p, i) => `${i ? "L" : "M"}${r1(p[0])} ${r1(p[1])}`).join("");
    b += `<path d="${line}L${x1} ${y0}L${x0} ${y0}z" fill="url(#fade)"/><path d="${line}" fill="none" stroke="${C.teal}" stroke-width="1.8" stroke-linejoin="round"/>`;
  }

  // 2 — current streak + progress vs best
  b += panel(px(1), py, pw, ph);
  b += label(px(1) + 20, py + 30, "current streak");
  b += value(px(1), String(s.currentStreak), s.currentStreak === 1 ? "day" : "days", C.amber);
  {
    const x0 = px(1) + 20, bw = pw - 40, y = py + ph - 44;
    const pct = s.longestStreak ? Math.min(1, s.currentStreak / s.longestStreak) : 0;
    b += `<rect x="${r1(x0)}" y="${y}" width="${r1(bw)}" height="6" rx="3" fill="${C.border}"/>`;
    b += `<rect x="${r1(x0)}" y="${y}" width="${r1(Math.max(6, bw * pct))}" height="6" rx="3" fill="${C.amber}"/>`;
    b += text(x0, y + 26, s.currentStreak ? `since ${s.streakStart}` : "starts today", "mono", 12, C.sub);
    const pr = `best ${s.longestStreak}d`;
    b += text(x0 + bw - width(pr, "mono", 12), y + 26, pr, "mono", 12, C.sub);
  }

  // 3 — longest streak
  b += panel(px(2), py, pw, ph);
  b += label(px(2) + 20, py + 30, "longest streak");
  b += value(px(2), String(s.longestStreak), s.longestStreak === 1 ? "day" : "days");
  {
    // little row of ticks, one per day of the best streak (capped)
    const n = Math.min(s.longestStreak, 40), x0 = px(2) + 20, bw = pw - 40, y = py + ph - 46;
    const step = n > 1 ? bw / n : bw;
    for (let i = 0; i < n; i++) b += `<rect x="${r1(x0 + i * step)}" y="${y}" width="${r1(Math.max(1.5, step - 2))}" height="10" rx="1" fill="${C.text}" fill-opacity="${r1(0.25 + (0.6 * i) / Math.max(1, n))}"/>`;
    b += text(x0, y + 30, s.longestStreak > 40 ? "personal best (scaled)" : "personal best", "mono", 12, C.sub);
  }

  // 4 — all time + per-year bars
  b += panel(px(3), py, pw, ph);
  b += label(px(3) + 20, py + 30, `all-time · since ${s.since}`);
  b += value(px(3), fmt(s.allTime));
  {
    const ys = s.perYear, max = Math.max(1, ...ys.map((y) => y.total));
    const x0 = px(3) + 20, bw = pw - 40, base = py + ph - 30, hgt = 30;
    const slot = bw / ys.length;
    ys.forEach((y, i) => {
      const h = Math.max(2, (y.total / max) * hgt);
      b += `<rect x="${r1(x0 + i * slot + 2)}" y="${r1(base - h)}" width="${r1(slot - 6)}" height="${r1(h)}" rx="2" fill="${C.blue}" fill-opacity="${i === ys.length - 1 ? 1 : 0.55}"/>`;
    });
    b += text(x0, base + 18, String(ys[0].year).slice(2).padStart(3, "'"), "mono", 11, C.dim);
    const last = "'" + String(ys.at(-1).year).slice(2);
    b += text(x0 + bw - width(last, "mono", 11), base + 18, last, "mono", 11, C.dim);
  }

  // Row 2 — compact counters
  const cw = (W - 2 * P - 2 * gap) / 3, cy = 250, ch = 56;
  [
    ["public repos", s.repos, C.teal],
    ["stars earned", s.stars, C.amber],
    ["release downloads", s.downloads, C.coral],
  ].forEach(([l, v, c], i) => {
    const x = P + i * (cw + gap);
    b += panel(x, cy, cw, ch, c);
    b += label(x + 22, cy + 33, l);
    const vs = fmt(v);
    b += text(x + cw - 20 - width(vs, "display", 26), cy + 37, vs, "display", 26, C.text);
  });

  return svg(W, H, ["display", "body", "mono", "monoBold"], b, `GitHub stats for ${CONFIG.login}`);
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// ─── Activity: dot matrix, last 26 weeks ──────────────────────────────────
function activitySvg(weeks) {
  const W = 960, P = 32;
  const cols = weeks.length;
  const gx = P + 64, gw = W - gx - P - 8;
  const pitch = gw / cols;
  const top = 132;
  const H = Math.ceil(top + 7 * pitch + 70);
  const days = weeks.flat().filter(Boolean);
  const total = days.reduce((a, d) => a + d.count, 0);
  const active = days.filter((d) => d.count > 0).length;
  const best = days.reduce((a, d) => (d.count > (a?.count ?? -1) ? d : a), null);

  let b = frame(W, H);
  const bestTxt = best && best.count
    ? `peak ${new Date(best.date + "T00:00:00Z").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" })} · ${best.count}`
    : "";
  b += heading(W, 46, "activity · last 26 weeks", bestTxt);

  const tot = fmt(total);
  b += text(P, 86, tot, "display", 26, C.text);
  b += text(P + width(tot, "display", 26) + 10, 85, `contributions · active ${active} of ${days.length} days`, "mono", 13, C.sub);

  const nz = days.map((d) => d.count).filter((n) => n > 0).sort((a, b) => a - b);
  const q = (p) => nz[Math.min(nz.length - 1, Math.floor(p * nz.length))] ?? 1;
  const th = [q(0.25), q(0.5), q(0.8)];
  const lvl = (n) => (n === 0 ? 0 : n <= th[0] ? 1 : n <= th[1] ? 2 : n <= th[2] ? 3 : 4);
  const maxR = pitch * 0.42;
  const rad = [2, maxR * 0.42, maxR * 0.6, maxR * 0.8, maxR];
  const op = [1, 0.45, 0.65, 0.85, 1];

  ["", "Mon", "", "Wed", "", "Fri", ""].forEach((d, r) => d && (b += text(P, top + r * pitch + pitch / 2 + 4, d, "mono", 12, C.dim)));

  let lastM = null, lastX = -99;
  weeks.forEach((wk, i) => {
    const first = wk.find(Boolean);
    if (!first) return;
    const m = MONTHS[new Date(first.date + "T00:00:00Z").getUTCMonth()];
    const x = gx + i * pitch;
    if (m !== lastM && x - lastX > 44) {
      b += text(x + 2, top - 10, m.toUpperCase(), "mono", 11, C.sub, `letter-spacing="1.2"`);
      lastX = x;
    }
    lastM = m;
    wk.forEach((d, r) => {
      if (!d) return;
      const cx = x + pitch / 2, cy = top + r * pitch + pitch / 2, l = lvl(d.count);
      b += l === 0
        ? `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="2" fill="${C.dim}"/>`
        : `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(rad[l])}" fill="${C.teal}" fill-opacity="${op[l]}"/>`;
    });
  });

  const fy = H - 28;
  b += text(P, fy, `avg ${(total / Math.max(1, days.length)).toFixed(1)} / day`, "mono", 12, C.sub);
  let lx = W - P - 8 - width("more", "mono", 12);
  b += text(lx, fy, "more", "mono", 12, C.sub);
  lx -= 14;
  for (let l = 4; l >= 0; l--) {
    const r = l ? rad[l] * 0.7 : 2;
    lx -= r + 6;
    b += `<circle cx="${r1(lx)}" cy="${fy - 4}" r="${r1(r)}" fill="${l ? C.teal : C.dim}" fill-opacity="${op[l]}"/>`;
    lx -= r;
  }
  b += text(lx - 8 - width("less", "mono", 12), fy, "less", "mono", 12, C.sub);

  return svg(W, H, ["display", "mono"], b, `${total} contributions in the last 26 weeks`);
}

// ─── Data ─────────────────────────────────────────────────────────────────
async function gql(query, variables = {}) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${TOKEN}`, "Content-Type": "application/json", "User-Agent": "profile-cards" },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors || !json.data) throw new Error(JSON.stringify(json.errors || json));
  return json.data;
}

const CAL = `contributionCalendar{ totalContributions weeks{ contributionDays{ date contributionCount } } }`;

async function fetchData() {
  const { user } = await gql(`query($login:String!){ user(login:$login){ createdAt contributionsCollection{ ${CAL} } } }`, { login: CONFIG.login });
  const cal = user.contributionsCollection.contributionCalendar;
  const since = new Date(user.createdAt).getUTCFullYear();
  const nowYear = new Date().getUTCFullYear();

  const parts = [];
  for (let y = since; y <= nowYear; y++) {
    const to = y === nowYear ? new Date().toISOString() : `${y}-12-31T23:59:59Z`;
    parts.push(`y${y}: contributionsCollection(from:"${y}-01-01T00:00:00Z", to:"${to}"){ ${CAL} }`);
  }
  const years = (await gql(`query($login:String!){ user(login:$login){ ${parts.join("\n")} } }`, { login: CONFIG.login })).user;
  const allDays = new Map(), perYear = [];
  for (const [k, v] of Object.entries(years)) {
    perYear.push({ year: +k.slice(1), total: v.contributionCalendar.totalContributions });
    for (const w of v.contributionCalendar.weeks) for (const d of w.contributionDays) allDays.set(d.date, d.contributionCount);
  }

  let repos = 0, stars = 0, downloads = 0, after = null;
  do {
    const { user: u } = await gql(
      `query($login:String!,$after:String){ user(login:$login){ repositories(first:100, after:$after, ownerAffiliations:OWNER, privacy:PUBLIC){
        totalCount pageInfo{ hasNextPage endCursor }
        nodes{ stargazerCount releases(first:25){ nodes{ releaseAssets(first:25){ nodes{ downloadCount } } } } } } } }`,
      { login: CONFIG.login, after }
    );
    const r = u.repositories;
    repos = r.totalCount;
    for (const n of r.nodes) {
      stars += n.stargazerCount;
      for (const rel of n.releases.nodes) for (const a of rel.releaseAssets.nodes) downloads += a.downloadCount;
    }
    after = r.pageInfo.hasNextPage ? r.pageInfo.endCursor : null;
  } while (after);

  return {
    lastYear: cal.totalContributions,
    weeks: cal.weeks.map((w) => w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))),
    allDays, perYear, since, repos, stars, downloads,
    allTime: perYear.reduce((a, y) => a + y.total, 0),
  };
}

function mockData() {
  const allDays = new Map(), today = new Date();
  let seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 2200; i >= 0; i--) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - i);
    const on = i < 34 || rnd() < 0.62;
    allDays.set(d.toISOString().slice(0, 10), on ? Math.floor(rnd() * rnd() * 40) + 1 : 0);
  }
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - 364 - start.getUTCDay());
  const weeks = [];
  for (let d = new Date(start); d <= today; d.setUTCDate(d.getUTCDate() + 1)) {
    if (d.getUTCDay() === 0) weeks.push([]);
    const k = d.toISOString().slice(0, 10);
    weeks.at(-1).push({ date: k, count: allDays.get(k) ?? 0 });
  }
  const perYear = [];
  for (const [k, v] of allDays) {
    const y = +k.slice(0, 4);
    const e = perYear.find((p) => p.year === y) || (perYear.push({ year: y, total: 0 }), perYear.at(-1));
    e.total += v;
  }
  return {
    lastYear: weeks.flat().reduce((a, d) => a + d.count, 0),
    weeks, allDays, perYear, since: perYear[0].year, repos: 24, stars: 2, downloads: 0,
    allTime: perYear.reduce((a, y) => a + y.total, 0),
  };
}

function streaks(allDays, todayKey) {
  const keys = [...allDays.keys()].filter((k) => k <= todayKey).sort();
  let longest = 0, run = 0, prev = null;
  for (const k of keys) {
    const contiguous = prev !== null && Date.parse(k) - Date.parse(prev) === 86400000;
    run = allDays.get(k) > 0 ? (contiguous ? run + 1 : 1) : 0;
    longest = Math.max(longest, run);
    prev = k;
  }
  // Today doesn't break the streak until it's over
  let i = keys.length - 1;
  if (keys[i] === todayKey && !allDays.get(todayKey)) i--;
  let current = 0, startKey = null;
  for (; i >= 0 && allDays.get(keys[i]) > 0; i--) {
    if (startKey && Date.parse(startKey) - Date.parse(keys[i]) !== 86400000) break;
    current++;
    startKey = keys[i];
  }
  return { current, longest, startKey };
}

// Full Sun–Sat columns so rows line up with weekdays
function lastWeeks(weeks, n) {
  return weeks.slice(-n).map((w) => {
    const col = Array(7).fill(null);
    for (const d of w) col[new Date(d.date + "T00:00:00Z").getUTCDay()] = d;
    return col;
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────
if (!MOCK && !TOKEN) throw new Error("Set GH_TOKEN, or run with --mock");
const data = MOCK ? mockData() : await fetchData();
const todayKey = new Date().toLocaleDateString("en-CA", { timeZone: CONFIG.timeZone });
const st = streaks(data.allDays, todayKey);
const dm = (k) => new Date(k + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });

const stats = {
  lastYear: data.lastYear,
  weekly: data.weeks.map((w) => w.reduce((a, d) => a + d.count, 0)),
  currentStreak: st.current,
  streakStart: st.startKey ? dm(st.startKey) : "",
  longestStreak: st.longest,
  allTime: data.allTime,
  perYear: data.perYear.sort((a, b) => a.year - b.year),
  since: data.since,
  repos: data.repos,
  stars: data.stars,
  downloads: data.downloads,
  updated: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: CONFIG.timeZone }),
};

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "header.svg"), headerSvg());
for (const l of CONFIG.links) fs.writeFileSync(path.join(OUT, `link-${l.id}.svg`), linkSvg(l));
fs.writeFileSync(path.join(OUT, "stats.svg"), statsSvg(stats));
fs.writeFileSync(path.join(OUT, "activity.svg"), activitySvg(lastWeeks(data.weeks, 26)));
const { weekly, perYear, ...log } = stats;
console.log("Cards written to assets/", log);
