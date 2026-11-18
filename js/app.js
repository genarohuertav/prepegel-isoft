/* ============================================================
   PrepEGEL ISOFT — Lógica de la aplicación
   Estructura alineada a la Guía para el sustentante, diciembre 2026
   ============================================================ */
"use strict";

/* ---------------- Metadatos de áreas ---------------- */
const AREAS = {
  A1: { name: "Área 1 · Análisis de Sistemas de Software", short: "Análisis", color: "#2563eb" },
  A2: { name: "Área 2 · Diseño de Sistemas de Software", short: "Diseño", color: "#d97706" },
  A3: { name: "Área 3 · Desarrollo de Sistemas de Software", short: "Desarrollo", color: "#059669" },
  A4: { name: "Área 4 · Gestión de Proyectos de Software", short: "Gestión", color: "#db2777" },
  LG: { name: "Lenguaje y Comunicación", short: "Lenguaje", color: "#7c3aed" }
};

const SUBAREA_LABELS = {
  "1.1": "Tipos de requerimientos",
  "1.2": "Obtención y validación de requerimientos",
  "1.3": "Documentación de requerimientos",
  "2.1": "Diseño arquitectónico",
  "2.2": "Módulos, componentes y datos",
  "2.3": "Diseño de interfaces",
  "3.1": "Lenguajes de desarrollo",
  "3.2": "Paradigmas de programación",
  "3.3": "Entornos de desarrollo",
  "3.4": "Gestión de datos",
  "3.5": "Plataformas de desarrollo",
  "4.1": "Tiempos, costos, RRHH y riesgo",
  "4.2": "Calidad de software",
  "4.3": "Metodologías de desarrollo",
  "LC": "Comprensión lectora",
  "RI": "Redacción indirecta"
};

const AMBITO_LABELS = { estudio: "Ámbito de estudio", literario: "Ámbito literario", social: "Ámbito de participación social" };
const PROCESO_LABELS = {
  identificacion: "Identificación de información",
  interpretacion: "Interpretación",
  evaluacion: "Evaluación de la forma y el contenido",
  comunicativa: "Dimensión comunicativa",
  gramatical: "Dimensión gramatical y semántica",
  ortografica: "Dimensión ortográfica"
};

/* Estructura del examen según la guía (dic 2026): 203 reactivos */
const EXAM = {
  total: 203,
  subWeights: {
    "1.1": 12, "1.2": 9, "1.3": 10,
    "2.1": 10, "2.2": 16, "2.3": 7,
    "3.1": 10, "3.2": 10, "3.3": 10, "3.4": 9, "3.5": 10,
    "4.1": 8, "4.2": 10, "4.3": 12,
    "LC": 30, "RI": 30
  },
  /* Objetivos dentro de Lenguaje. La guía da los procesos de LC (12/12/6) y los ámbitos de RI (15/15).
     Supuestos propios: LC reparte los ámbitos por igual (10/10/10) y RI reparte las dimensiones por igual. */
  lgTargets: {
    LC: { ambito: { estudio: 10, literario: 10, social: 10 }, proceso: { identificacion: 12, interpretacion: 12, evaluacion: 6 } },
    RI: { ambito: { estudio: 15, social: 15 }, proceso: { comunicativa: 10, gramatical: 10, ortografica: 10 } }
  }
};

function areaOfSub(sub) {
  return sub.startsWith("1.") ? "A1"
    : sub.startsWith("2.") ? "A2"
    : sub.startsWith("3.") ? "A3"
    : sub.startsWith("4.") ? "A4"
    : "LG";
}
const isLG = q => areaOfSub(q.sub) === "LG";

/* ---------------- Banco global ---------------- */
const BANK = [
  ...(window.QB_A1 || []), ...(window.QB_A2 || []),
  ...(window.QB_A3 || []), ...(window.QB_A4 || []),
  ...(window.QB_LANG || []), ...(window.QB_EXTRA || [])
];
const BY_ID = Object.fromEntries(BANK.map(q => [q.id, q]));
const BANK_INDEX = Object.fromEntries(BANK.map((q, i) => [q.id, i]));

/* Multirreactivos: las preguntas con el mismo `grupo` comparten el texto (`base`) de la primera
   del grupo y se presentan juntas, en el orden en que aparecen en el banco. */
const GROUPS = {};
BANK.forEach(q => { if (q.grupo) (GROUPS[q.grupo] = GROUPS[q.grupo] || []).push(q); });
Object.values(GROUPS).forEach(members => {
  const base = members.find(q => q.base)?.base;
  if (base) members.forEach(q => { if (!q.base) q.base = base; });
});

/* ---------------- Preferencias (tiempo por reactivo) ---------------- */
const LS_PREFS = "isoft_prefs_v1";
const DEFAULT_PREFS = { minDis: 2.9, minLG: 2 };
function loadPrefs() {
  try { return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem(LS_PREFS) || "{}") }; }
  catch { return { ...DEFAULT_PREFS }; }
}
function savePrefs(p) { try { localStorage.setItem(LS_PREFS, JSON.stringify(p)); } catch { /* sin almacenamiento */ } }
let prefs = loadPrefs();
const secondsFor = q => (isLG(q) ? prefs.minLG : prefs.minDis) * 60;

/* ---------------- Estado ---------------- */
let session = null;
let tickHandle = null;
let setupMode = null;

const $ = sel => document.querySelector(sel);
const screens = {
  home: $("#screen-home"), setup: $("#screen-setup"),
  quiz: $("#screen-quiz"), results: $("#screen-results"),
  review: $("#screen-review"), flash: $("#screen-flash")
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.hidden = true);
  screens[name].hidden = false;
  window.scrollTo({ top: 0 });
}
$("#progress-track").hidden = true;

/* ---------------- Utilidades ---------------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fmtTime(sec) {
  sec = Math.max(0, Math.ceil(sec));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = String(sec % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${String(m).padStart(2, "0")}:${s}`;
}
function fmtDuration(sec) {
  const min = Math.round(sec / 60);
  const h = Math.floor(min / 60), m = min % 60;
  return h ? `${h} h ${m} min` : `${m} min`;
}
function esc(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function toast(msg) {
  let t = document.createElement("div");
  t.className = "toast-msg";
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 2600);
}
function countBy(list, keyFn) {
  const out = {};
  list.forEach(x => { const k = keyFn(x); out[k] = (out[k] || 0) + 1; });
  return out;
}
/* Etiqueta corta de ámbito y proceso (solo preguntas de Lenguaje que los tengan) */
function lgTags(q) {
  return [q.ambito && AMBITO_LABELS[q.ambito], q.proceso && PROCESO_LABELS[q.proceso]].filter(Boolean);
}

/* ---------------- Persistencia ---------------- */
const LS_ERRORS = "isoft_errors_v1";
const LS_HISTORY = "isoft_history_v1";
function getErrors() {
  try { return new Set(JSON.parse(localStorage.getItem(LS_ERRORS) || "[]")); }
  catch { return new Set(); }
}
function saveErrors(set) {
  try { localStorage.setItem(LS_ERRORS, JSON.stringify([...set].filter(id => BY_ID[id]))); } catch { /* sin almacenamiento */ }
}
function getHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY) || "[]"); } catch { return []; }
}
function pushHistory(entry) {
  const h = getHistory();
  h.unshift(entry);
  try { localStorage.setItem(LS_HISTORY, JSON.stringify(h.slice(0, 8))); } catch { /* sin almacenamiento */ }
}
function refreshHomeStats() {
  const errs = [...getErrors()].filter(id => BY_ID[id]);
  $("#errors-count-tag").textContent =
    errs.length ? `${errs.length} reactivo${errs.length > 1 ? "s" : ""} por repasar` : "Sin errores pendientes";

  const perArea = countBy(BANK, q => areaOfSub(q.sub));
  $("#hero-stats").innerHTML =
    `<span class="stat-chip">${BANK.length} reactivos</span>` +
    Object.entries(AREAS).map(([k, v]) =>
      `<span class="stat-chip" style="background:${v.color}18;color:${v.color}">${v.short}: ${perArea[k] || 0}</span>`
    ).join("");

  const hist = getHistory();
  const box = $("#history-box"), list = $("#history-list");
  if (hist.length) {
    box.hidden = false;
    list.innerHTML = hist.map(h => {
      const d = new Date(h.date);
      return `<li><span>${esc(h.mode)} · ${d.toLocaleDateString("es-MX")} ${d.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" })}</span>
        <strong>${h.correct}/${h.total} (${h.pct}%)</strong></li>`;
    }).join("");
  } else box.hidden = true;
}

/* ---------------- Muestreo ---------------- */

/* Reparto por residuos mayores: enteros que suman `total` en proporción a `weights` */
function largestRemainder(weights, total) {
  const keys = Object.keys(weights);
  const sumW = keys.reduce((s, k) => s + weights[k], 0);
  const out = {};
  if (!sumW || total <= 0) { keys.forEach(k => out[k] = 0); return out; }
  const raw = keys.map(k => ({ k, v: total * weights[k] / sumW }));
  raw.forEach(r => out[r.k] = Math.floor(r.v));
  let left = total - raw.reduce((s, r) => s + out[r.k], 0);
  shuffle(raw).sort((a, b) => (b.v - Math.floor(b.v)) - (a.v - Math.floor(a.v)))
    .forEach(r => { if (left > 0) { out[r.k]++; left--; } });
  return out;
}

/* Cuotas proporcionales a `weights`, sin pasar de `caps`; lo que no cabe se redistribuye */
function apportion(weights, total, caps) {
  const q = {};
  Object.keys(weights).forEach(k => q[k] = 0);
  let left = Math.min(total, Object.keys(weights).reduce((s, k) => s + (caps[k] || 0), 0));
  let active = Object.keys(weights).filter(k => (caps[k] || 0) > 0);
  while (left > 0 && active.length) {
    const share = largestRemainder(Object.fromEntries(active.map(k => [k, weights[k]])), left);
    let assigned = 0;
    active.forEach(k => { const add = Math.min(share[k], caps[k] - q[k]); q[k] += add; assigned += add; });
    left -= assigned;
    active = active.filter(k => q[k] < caps[k]);
    if (!assigned) break;
  }
  return q;
}

/* Une las preguntas de un mismo grupo en una "unidad" (en orden del banco); las sueltas son unidades de 1 */
function toUnits(pool) {
  const units = [], byGroup = new Map();
  pool.forEach(q => {
    if (!q.grupo) { units.push([q]); return; }
    if (!byGroup.has(q.grupo)) { const u = []; byGroup.set(q.grupo, u); units.push(u); }
    byGroup.get(q.grupo).push(q);
  });
  units.forEach(u => u.sort((a, b) => BANK_INDEX[a.id] - BANK_INDEX[b.id]));
  return units;
}

/* Elige unidades hasta llenar `quota`, favoreciendo las que cubren los objetivos de `dims`
   (p. ej. ámbito y proceso). Un grupo que no cabe completo se recorta conservando su orden. */
function pickUnits(units, quota, dims = []) {
  const sel = dims.map(() => ({}));
  const fitOf = q => {
    let s = 0, c = 0;
    dims.forEach((d, i) => {
      const k = q[d.field];
      if (k == null) return;
      c++;
      const t = d.target[k];
      s += t ? (t - (sel[i][k] || 0)) / t : -1;
    });
    return c ? s / c : 0;
  };
  const pool = shuffle(units), chosen = [];
  let remaining = quota;
  while (remaining > 0 && pool.length) {
    let best = -Infinity, bi = 0;
    pool.forEach((u, i) => {
      const f = u.reduce((s, q) => s + fitOf(q), 0) / u.length;
      if (f > best) { best = f; bi = i; }
    });
    let unit = pool.splice(bi, 1)[0];
    if (unit.length > remaining) {
      unit = unit.map((q, i) => ({ q, i, f: fitOf(q) }))
        .sort((a, b) => b.f - a.f).slice(0, remaining)
        .sort((a, b) => a.i - b.i).map(x => x.q);
    }
    unit.forEach(q => dims.forEach((d, i) => { const k = q[d.field]; if (k != null) sel[i][k] = (sel[i][k] || 0) + 1; }));
    chosen.push(...unit);
    remaining -= unit.length;
  }
  return chosen;
}

/* Muestra un examen con las cuotas por subárea dadas (Lenguaje equilibrado por ámbito y proceso) */
function sampleByQuotas(quotas) {
  const bySub = {};
  BANK.forEach(q => (bySub[q.sub] = bySub[q.sub] || []).push(q));
  const out = [];
  Object.entries(quotas).forEach(([sub, n]) => {
    if (!n || !bySub[sub]) return;
    const t = EXAM.lgTargets[sub];
    const dims = t ? [{ field: "ambito", target: t.ambito }, { field: "proceso", target: t.proceso }] : [];
    out.push(...pickUnits(toUnits(bySub[sub]), n, dims));
  });
  return out;
}

const availBySub = () => countBy(BANK, q => q.sub);

/* Simulacro de N reactivos: cuotas por subárea proporcionales a los pesos de la guía */
function sampleSimulacro(total) {
  return sampleByQuotas(apportion(EXAM.subWeights, total, availBySub()));
}

/* Examen real: 203 reactivos con la estructura de la guía, o la misma proporción si el banco no alcanza */
function examPlan() {
  const avail = availBySub();
  let scale = 1, limiting = null;
  Object.entries(EXAM.subWeights).forEach(([sub, w]) => {
    const r = (avail[sub] || 0) / w;
    if (r < scale) { scale = r; limiting = sub; }
  });
  const total = scale >= 1 ? EXAM.total : Math.floor(EXAM.total * scale);
  const quotas = scale >= 1 ? { ...EXAM.subWeights } : apportion(EXAM.subWeights, total, avail);
  const sumQ = Object.values(quotas).reduce((s, n) => s + n, 0);
  const lgN = (quotas.LC || 0) + (quotas.RI || 0);
  return {
    full: scale >= 1, scale, limiting, total: sumQ, quotas,
    seconds: (sumQ - lgN) * prefs.minDis * 60 + lgN * prefs.minLG * 60
  };
}

/* ---------------- Construcción de sesiones ---------------- */
/* Mezcla por unidades (los multirreactivos quedan juntos y en orden).
   sectionOrder: primero la sección disciplinar y al final Lenguaje, como en la aplicación real. */
function makeItems(pool, { sectionOrder = false } = {}) {
  let units = shuffle(toUnits(pool));
  if (sectionOrder) units = [...units.filter(u => !isLG(u[0])), ...units.filter(u => isLG(u[0]))];
  const items = units.flat().map(q => ({ q, order: shuffle([0, 1, 2]), picked: null, locked: false, gpos: 0, glen: 0 }));
  // Posición dentro del grupo, relativa a esta sesión
  for (let i = 0; i < items.length;) {
    const g = items[i].q.grupo;
    let j = i + 1;
    if (g) while (j < items.length && items[j].q.grupo === g) j++;
    if (g && j - i > 1) for (let k = i; k < j; k++) { items[k].gpos = k - i + 1; items[k].glen = j - i; }
    i = j;
  }
  return items;
}

function startSession({ mode, pool, timed, instant, sectionOrder = false }) {
  if (!pool.length) { toast("No hay reactivos disponibles con esos filtros."); return; }
  const items = makeItems(pool, { sectionOrder });
  const totalSecs = items.reduce((s, it) => s + secondsFor(it.q), 0);
  session = {
    mode, timed, instant, items,
    idx: 0,
    deadline: timed ? Date.now() + totalSecs * 1000 : null,
    startedAt: Date.now()
  };
  $("#progress-track").hidden = false;
  updateProgress();
  showScreen("quiz");
  renderQuestion();
  clearInterval(tickHandle);
  tickHandle = setInterval(tick, 250);
  tick();
}

function updateProgress() {
  const done = session.items.filter(i => i.picked !== null).length;
  $("#progress-fill").style.width = `${(done / session.items.length) * 100}%`;
}

/* ---------------- Render del quiz ---------------- */
function current() { return session.items[session.idx]; }

function renderQuestion() {
  const it = current(), q = it.q, area = AREAS[areaOfSub(q.sub)];
  $("#quiz-area-badge").textContent = area.short;
  $("#quiz-area-badge").style.background = area.color + "1f";
  $("#quiz-area-badge").style.color = area.color;
  $("#quiz-sub-badge").textContent = [`${q.sub} · ${SUBAREA_LABELS[q.sub] || ""}`, ...lgTags(q)].join(" · ");
  $("#quiz-counter").textContent = `${session.idx + 1} / ${session.items.length}`;

  const baseEl = $("#quiz-base");
  if (q.base) {
    baseEl.hidden = false;
    const kicker = it.glen ? `<div class="base-kicker">Texto compartido · pregunta ${it.gpos} de ${it.glen}</div>` : "";
    baseEl.innerHTML = kicker + esc(q.base);
  } else baseEl.hidden = true;
  const figEl = $("#quiz-figure");
  if (q.img) {
    figEl.hidden = false;
    figEl.innerHTML = `<img src="${esc(q.img)}" alt="${esc(q.imgAlt || "Diagrama de la pregunta")}" loading="lazy">`;
  } else { figEl.hidden = true; figEl.innerHTML = ""; }
  $("#quiz-stem").textContent = q.stem;

  const optsEl = $("#quiz-options");
  optsEl.innerHTML = "";
  it.order.forEach((origIdx, pos) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-letter">${"ABC"[pos]}</span><span>${esc(q.opts[origIdx])}</span>`;
    btn.disabled = it.locked;
    if (it.locked) {
      if (origIdx === q.ans) btn.classList.add("correct");
      else if (it.picked === origIdx) btn.classList.add("wrong");
    } else if (it.picked === origIdx) btn.classList.add("selected");
    btn.addEventListener("click", () => answer(origIdx));
    optsEl.appendChild(btn);
  });

  const fb = $("#quiz-feedback");
  if (it.locked) {
    fb.hidden = false;
    const good = it.picked === q.ans;
    fb.className = "feedback " + (good ? "good" : "bad");
    $("#feedback-verdict").textContent = good ? "Correcto" : `Incorrecto — la respuesta es: ${"ABC"[it.order.indexOf(q.ans)]}) ${q.opts[q.ans]}`;
    $("#feedback-exp").textContent = q.exp;
  } else fb.hidden = true;

  $("#btn-prev").disabled = session.idx === 0;
  $("#btn-next").textContent = session.idx === session.items.length - 1 ? "Última ›" : "Siguiente →";
}

function answer(origIdx) {
  const it = current();
  if (it.locked) return;
  it.picked = origIdx;
  updateProgress();
  if (session.instant) it.locked = true;
  renderQuestion();
}

/* ---------------- Temporizador ---------------- */
function tick() {
  const pill = $("#quiz-timer");
  if (!session) return;
  if (!session.timed) {
    const elapsed = (Date.now() - session.startedAt) / 1000;
    pill.textContent = fmtTime(elapsed);
    pill.classList.remove("warn"); pill.classList.add("off");
    return;
  }
  const remain = (session.deadline - Date.now()) / 1000;
  pill.textContent = fmtTime(remain);
  pill.classList.toggle("warn", remain <= 30);
  pill.classList.remove("off");
  if (remain <= 0) { finishSession(true); }
}

/* ---------------- Navegación ---------------- */
$("#btn-prev").addEventListener("click", () => {
  if (session.idx > 0) { session.idx--; renderQuestion(); }
});
$("#btn-next").addEventListener("click", () => {
  if (session.idx < session.items.length - 1) { session.idx++; renderQuestion(); }
});
$("#btn-finish").addEventListener("click", openFinishDialog);

document.addEventListener("keydown", e => {
  if (screens.quiz.hidden || !session) return;
  const it = current();
  if (["1", "2", "3"].includes(e.key) && !it.locked) answer(it.order[Number(e.key) - 1]);
  if (e.key === "ArrowRight") $("#btn-next").click();
  if (e.key === "ArrowLeft") $("#btn-prev").click();
});

/* ---------------- Finalizar ---------------- */
function openFinishDialog() {
  const pending = session.items.filter(i => i.picked === null).length;
  $("#finish-summary").textContent = pending
    ? `Tienes ${pending} reactivo${pending > 1 ? "s" : ""} sin contestar. Los sin responder cuentan como incorrectos.`
    : "Has respondido todos los reactivos.";
  $("#finish-overlay").hidden = false;
}
$("#btn-cancel-finish").addEventListener("click", () => { $("#finish-overlay").hidden = true; });
$("#btn-confirm-finish").addEventListener("click", () => { $("#finish-overlay").hidden = true; finishSession(false); });

const MODE_NAMES = { simulacro: "Simulacro", examen: "Examen real", errores: "Repaso errores", practica: "Práctica" };

function finishSession(timeUp) {
  clearInterval(tickHandle);
  const total = session.items.length;
  const correct = session.items.filter(i => i.picked === i.q.ans).length;
  const pct = Math.round((correct / total) * 100);

  // Actualizar banco de errores persistente
  const errSet = getErrors();
  session.items.forEach(i => {
    const ok = i.picked === i.q.ans;
    if (ok) errSet.delete(i.q.id); else errSet.add(i.q.id);
  });
  saveErrors(errSet);
  pushHistory({ date: new Date().toISOString(), mode: MODE_NAMES[session.mode] || "Práctica", correct, total, pct });
  refreshHomeStats();

  if (timeUp) toast("Tiempo agotado — sesión finalizada.");
  renderResults(correct, total, pct);
}

/* ---------------- Resultados ---------------- */
/* Nivel ESTIMADO por porcentaje de aciertos. El Ceneval no usa porcentajes: usa el Índice Ceneval
   (700–1300; ≥1000 Satisfactorio, ≥1150 Sobresaliente). */
const levelOf = pct => pct >= 85 ? "Sobresaliente" : pct >= 60 ? "Satisfactorio" : "Aún no satisfactorio";

function breakdownRow(label, d, color, opacity = 1) {
  const p = Math.round(d.c / d.t * 100);
  return `<div class="breakdown-row">
    <div class="breakdown-label"><span>${label}</span><span>${d.c}/${d.t} · ${p}%</span></div>
    <div class="breakdown-bar"><div class="breakdown-fill" style="width:${p}%;background:${color};opacity:${opacity}"></div></div>
  </div>`;
}

function renderResults(correct, total, pct) {
  $("#progress-track").hidden = true;
  const level = levelOf(pct);
  $("#score-detail").textContent = `Acertaste ${correct} de ${total} reactivos. Nivel estimado: ${level}.`;

  const ringFg = $("#ring-fg");
  const C = 2 * Math.PI * 52;
  setTimeout(() => {
    ringFg.style.strokeDashoffset = C * (1 - pct / 100);
    ringFg.classList.toggle("level-good", pct >= 60);
    ringFg.classList.toggle("level-bad", pct < 60);
  }, 60);
  $("#score-pct").textContent = `${pct}%`;
  const lvlEl = $("#score-level");
  lvlEl.innerHTML = `${esc(level)}<br><small>(estimado)</small>`;
  lvlEl.style.color = pct >= 85 ? "#7c3aed" : pct >= 60 ? "#059669" : "#dc2626";

  // Por área y subárea
  const byArea = {}, bySub = {}, byLg = {};
  const add = (map, k, ok) => { map[k] = map[k] || { c: 0, t: 0 }; map[k].t++; if (ok) map[k].c++; };
  session.items.forEach(i => {
    const q = i.q, ok = i.picked === q.ans;
    add(byArea, areaOfSub(q.sub), ok);
    add(bySub, q.sub, ok);
    if (isLG(q)) {
      if (q.ambito) add(byLg, `${q.sub}|ambito|${q.ambito}`, ok);
      if (q.proceso) add(byLg, `${q.sub}|proceso|${q.proceso}`, ok);
    }
  });

  $("#area-breakdown").innerHTML = Object.entries(byArea).map(([a, d]) =>
    breakdownRow(`${esc(AREAS[a].name)} <span style="opacity:.6">· ${levelOf(Math.round(d.c / d.t * 100))} (est.)</span>`, d, AREAS[a].color)
  ).join("");

  $("#subarea-breakdown").innerHTML = Object.entries(bySub).sort().map(([s, d]) =>
    breakdownRow(`${esc(SUBAREA_LABELS[s] || s)} <span style="opacity:.6">(${s})</span>`, d, AREAS[areaOfSub(s)].color, .75)
  ).join("");

  // Lenguaje: por ámbito y por proceso/dimensión
  const lgCard = $("#lg-breakdown-card");
  const lgKeys = Object.keys(byLg);
  lgCard.hidden = !lgKeys.length;
  if (lgKeys.length) {
    const color = AREAS.LG.color, html = [];
    ["LC", "RI"].forEach(sub => {
      ["ambito", "proceso"].forEach(dim => {
        const keys = lgKeys.filter(k => k.startsWith(`${sub}|${dim}|`));
        if (!keys.length) return;
        const title = `${SUBAREA_LABELS[sub]} · ${dim === "ambito" ? "por ámbito" : sub === "LC" ? "por proceso" : "por dimensión"}`;
        html.push(`<h4 class="breakdown-group">${title}</h4>`);
        const labels = dim === "ambito" ? AMBITO_LABELS : PROCESO_LABELS;
        const order = Object.keys(labels);
        keys.sort((a, b) => order.indexOf(a.split("|")[2]) - order.indexOf(b.split("|")[2]))
          .forEach(k => html.push(breakdownRow(esc(labels[k.split("|")[2]]), byLg[k], color, .75)));
      });
    });
    $("#lg-breakdown").innerHTML = html.join("");
  }

  showScreen("results");
}

/* ---------------- Repaso detallado ---------------- */
let reviewFilter = "all";
function renderReview() {
  const list = $("#review-list");
  const rows = session.items.map((it, n) => ({ it, n }))
    .filter(({ it }) => reviewFilter === "all"
      || (reviewFilter === "wrong" && it.picked !== it.q.ans)
      || (reviewFilter === "right" && it.picked === it.q.ans));

  if (!rows.length) { list.innerHTML = `<div class="card muted">No hay reactivos en este filtro.</div>`; return; }

  list.innerHTML = rows.map(({ it, n }) => {
    const q = it.q, good = it.picked === q.ans, area = AREAS[areaOfSub(q.sub)];
    const optsHtml = it.order.map((orig, pos) => {
      let cls = "review-opt";
      if (orig === q.ans) cls += " opt-correct";
      else if (orig === it.picked) cls += " opt-wrongpick";
      const marks = [];
      if (orig === q.ans) marks.push("✔ Correcta");
      if (orig === it.picked && !good) marks.push("✘ Tu respuesta");
      if (orig === it.picked && good) marks.push("Tu respuesta");
      return `<div class="${cls}"><strong>${"ABC"[pos]})</strong> ${esc(q.opts[orig])}${marks.length ? ` <em style="float:right;font-size:.78rem">— ${marks.join(" · ")}</em>` : ""}</div>`;
    }).join("");
    const tags = lgTags(q).map(t => `<span class="badge badge-sub">${esc(t)}</span>`).join("");
    const baseLabel = it.glen ? `Ver texto compartido (pregunta ${it.gpos} de ${it.glen})` : "Ver texto/caso";
    return `<article class="card review-item">
      <div class="review-head">
        <span class="verdict-pill ${good ? "ok" : "bad"}">${good ? "CORRECTA" : "INCORRECTA"}</span>
        <span class="badge" style="background:${area.color}1f;color:${area.color}">${area.short}</span>
        <span class="badge badge-sub">${q.sub} · ${esc(SUBAREA_LABELS[q.sub] || "")}</span>
        ${tags}
        <span class="muted small">#${n + 1}</span>
      </div>
      ${q.base ? `<details><summary class="muted small" style="cursor:pointer;margin:.3rem 0">${baseLabel}</summary>
        <div class="question-base" style="margin-top:.4rem">${esc(q.base)}</div></details>` : ""}
      ${q.img ? `<img class="q-img" src="${esc(q.img)}" alt="${esc(q.imgAlt || "Diagrama de la pregunta")}" loading="lazy">` : ""}
      <p class="review-stem">${esc(q.stem)}</p>
      ${optsHtml}
      <div class="review-exp"><strong>Explicación:</strong> ${esc(q.exp)}</div>
    </article>`;
  }).join("");
}
$("#review-filter").addEventListener("click", e => {
  const chip = e.target.closest(".chip"); if (!chip) return;
  $("#review-filter").querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  reviewFilter = chip.dataset.filter;
  renderReview();
});
$("#btn-review-all").addEventListener("click", () => { reviewFilter = "all"; renderReview(); showScreen("review"); });
$("#btn-review-back").addEventListener("click", () => showScreen("results"));
$("#btn-new-session").addEventListener("click", goHome);

/* ---------------- Pantalla de configuración ---------------- */
const selectedAreas = new Set(["A1"]);
const selectedSubs = new Set();

function openSetup(mode) {
  setupMode = mode;
  selectedAreas.clear(); selectedSubs.clear();
  $("#toggle-timer").checked = mode !== "practica";
  $("#toggle-instant").checked = mode === "practica";
  $("#input-min-dis").value = prefs.minDis;
  $("#input-min-lg").value = prefs.minLG;
  $("#setup-areas-block").hidden = mode !== "practica";
  $("#setup-length-block").hidden = mode !== "simulacro";
  $("#setup-exam-block").hidden = mode !== "examen";

  if (mode === "simulacro") {
    $("#setup-title").textContent = "Configura tu simulacro";
    renderLengthOptions(80);
  } else if (mode === "examen") {
    $("#setup-title").textContent = "Examen real";
    renderExamInfo();
  } else if (mode === "practica") {
    $("#setup-title").textContent = "Práctica por tema";
    selectedAreas.add("A1");
    renderAreaChecks();
    renderSubChips();
  }
  syncTimeInputs();
  showScreen("setup");
}

function renderExamInfo() {
  const plan = examPlan();
  const lgN = (plan.quotas.LC || 0) + (plan.quotas.RI || 0);
  const head = plan.full
    ? `<p><strong>${plan.total} reactivos</strong> con la estructura de la guía: ${plan.total - lgN} disciplinares y ${lgN} de Lenguaje y Comunicación.</p>`
    : `<p>El banco todavía no alcanza para los 203 reactivos. Se usará un examen de <strong>${plan.total} reactivos</strong>
       con la misma proporción por subárea (${Math.round(plan.scale * 100)} % de la estructura): ${plan.total - lgN} disciplinares y ${lgN} de Lenguaje.
       La subárea que limita es <strong>${esc(plan.limiting)} · ${esc(SUBAREA_LABELS[plan.limiting])}</strong>.</p>`;
  $("#exam-info").innerHTML = head +
    `<p class="muted small">Primero la sección disciplinar y al final Lenguaje, como en la aplicación real.
     Tiempo total con tu configuración: <strong>${fmtDuration(plan.seconds)}</strong>
     (el examen real dura 9 h en dos sesiones de 4.5 h).</p>`;
}

function readTimeInputs() {
  const clamp = v => Math.min(10, Math.max(0.5, Math.round(v * 10) / 10));
  const dis = parseFloat($("#input-min-dis").value), lg = parseFloat($("#input-min-lg").value);
  prefs = {
    minDis: Number.isFinite(dis) ? clamp(dis) : DEFAULT_PREFS.minDis,
    minLG: Number.isFinite(lg) ? clamp(lg) : DEFAULT_PREFS.minLG
  };
}
function syncTimeInputs() {
  const on = $("#toggle-timer").checked;
  $("#input-min-dis").disabled = !on;
  $("#input-min-lg").disabled = !on;
}
$("#toggle-timer").addEventListener("change", syncTimeInputs);
["#input-min-dis", "#input-min-lg"].forEach(sel => $(sel).addEventListener("input", () => {
  readTimeInputs();
  if (setupMode === "examen") renderExamInfo();
}));
$("#btn-time-reset").addEventListener("click", () => {
  $("#input-min-dis").value = DEFAULT_PREFS.minDis;
  $("#input-min-lg").value = DEFAULT_PREFS.minLG;
  readTimeInputs();
  if (setupMode === "examen") renderExamInfo();
});

function renderLengthOptions(defaultLen) {
  const wrap = $("#length-options");
  const options = [[40, "Corto · 40"], [80, "Estándar · 80"], [Infinity, `Completo · ${BANK.length}`]];
  wrap.innerHTML = "";
  options.forEach(([val, label]) => {
    const b = document.createElement("button");
    b.textContent = label;
    b.dataset.len = String(val);
    if (val === defaultLen) b.classList.add("active");
    b.addEventListener("click", () => {
      wrap.querySelectorAll("button").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
    });
    wrap.appendChild(b);
  });
}

function renderAreaChecks() {
  const wrap = $("#area-checks");
  wrap.innerHTML = "";
  Object.entries(AREAS).forEach(([key, meta]) => {
    const label = document.createElement("label");
    label.className = "area-check-item";
    label.innerHTML = `
      <input type="checkbox" value="${key}" ${selectedAreas.has(key) ? "checked" : ""}>
      <span class="area-dot" style="background:${meta.color}"></span>
      <span>${esc(meta.name)}</span>`;
    label.querySelector("input").addEventListener("change", e => {
      e.target.checked ? selectedAreas.add(key) : selectedAreas.delete(key);
      [...selectedSubs].forEach(s => { if (!selectedAreas.has(areaOfSub(s))) selectedSubs.delete(s); });
      renderSubChips();
    });
    wrap.appendChild(label);
  });
}

function renderSubChips() {
  const wrap = $("#subarea-chips");
  const subs = [...new Set(BANK.filter(q => selectedAreas.has(areaOfSub(q.sub))).map(q => q.sub))].sort();
  if (!subs.length) { wrap.innerHTML = `<span class="muted small">Selecciona al menos un área.</span>`; return; }
  wrap.innerHTML = "";
  subs.forEach(s => {
    const chip = document.createElement("button");
    chip.className = "chip" + (selectedSubs.has(s) ? " active" : "");
    chip.textContent = `${s} · ${SUBAREA_LABELS[s]}`;
    chip.addEventListener("click", () => {
      selectedSubs.has(s) ? selectedSubs.delete(s) : selectedSubs.add(s);
      chip.classList.toggle("active");
    });
    wrap.appendChild(chip);
  });
}

$("#btn-start").addEventListener("click", () => {
  readTimeInputs();
  savePrefs(prefs);
  const timed = $("#toggle-timer").checked;
  const instant = $("#toggle-instant").checked;
  let pool = [], sectionOrder = false;

  if (setupMode === "simulacro") {
    const activeBtn = $("#length-options button.active");
    const len = Number(activeBtn?.dataset.len ?? 80);
    pool = len >= BANK.length ? BANK.slice() : sampleSimulacro(len);
  } else if (setupMode === "examen") {
    pool = sampleByQuotas(examPlan().quotas);
    sectionOrder = true;
  } else {
    pool = BANK.filter(q => selectedAreas.has(areaOfSub(q.sub)));
    if (selectedSubs.size) pool = pool.filter(q => selectedSubs.has(q.sub));
  }
  startSession({ mode: setupMode, pool, timed, instant, sectionOrder });
});

/* ---------------- Modos desde inicio ---------------- */
document.querySelectorAll(".mode-card").forEach(card => {
  card.addEventListener("click", () => {
    const mode = card.dataset.mode;
    if (mode === "flash") { startFlashcards(); return; }
    if (mode === "errores") {
      const pool = [...getErrors()].map(id => BY_ID[id]).filter(Boolean);
      if (!pool.length) { toast("¡Excelente! No tienes errores pendientes."); return; }
      startSession({ mode, pool, timed: false, instant: true });
    } else openSetup(mode);
  });
});
$("#btn-setup-back").addEventListener("click", () => { refreshHomeStats(); showScreen("home"); });
function goHome() {
  clearInterval(tickHandle);
  session = null;
  $("#progress-track").hidden = true;
  refreshHomeStats();
  showScreen("home");
}
$("#btn-home").addEventListener("click", goHome);

/* ---------------- Flashcards ---------------- */
const FC_KNOWN_KEY = "isoft_fc_known_v1";
const fcKnown = (() => {
  try { return new Set(JSON.parse(localStorage.getItem(FC_KNOWN_KEY) || "[]")); } catch { return new Set(); }
})();
(window.FLASHCARDS || []).forEach((c, i) => { c.id = "fc-" + i; });
const AREAS_FC = { A1: "A1 · Análisis", A2: "A2 · Diseño", A3: "A3 · Desarrollo", A4: "A4 · Gestión", LG: "Lenguaje" };
let fc = null;

function startFlashcards() {
  fc = null;
  $("#fc-filter").querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.area === "all"));
  $("#fc-only-unknown").checked = false;
  buildFcDeck();
  showScreen("flash");
}

function buildFcDeck() {
  const area = $("#fc-filter .chip.active")?.dataset.area || "all";
  const onlyUnknown = $("#fc-only-unknown").checked;
  let deck = (window.FLASHCARDS || []).filter(c => area === "all" || c.a === area);
  if (onlyUnknown) deck = deck.filter(c => !fcKnown.has(c.id));
  fc = { deck: shuffle(deck), idx: 0, flipped: false, done: false, ok: 0, ko: 0 };
  renderFc();
}

function renderFc() {
  const total = fc.deck.length;
  $("#fc-card-wrap").hidden = false;
  $("#fc-hint").hidden = false;
  if (!total || fc.idx >= total) return renderFcSummary(total);
  const card = fc.deck[fc.idx];
  $("#fc-progress-text").textContent = `${fc.idx + 1} / ${total}`;
  $("#fc-progress-fill").style.width = `${Math.round(fc.idx / total * 100)}%`;
  $("#fc-area-badge").textContent = AREAS_FC[card.a] || card.a;
  $("#fc-counter-known").textContent = `Dominadas: ${fcKnown.size}`;
  $("#fc-card-front-text").textContent = card.f;
  $("#fc-card-back-text").textContent = card.b;
  $("#fc-card").classList.toggle("flipped", fc.flipped);
  $("#fc-hint").textContent = fc.flipped ? "Toca la tarjeta o pulsa ESPACIO para ocultar la respuesta" : "Toca la tarjeta o pulsa ESPACIO para ver la respuesta";
  $("#fc-verdicts").hidden = !fc.flipped;
  $("#fc-done-panel").hidden = true;
}

function renderFcSummary(total) {
  $("#fc-progress-text").textContent = `0 / ${total}`;
  $("#fc-progress-fill").style.width = total ? "100%" : "0%";
  $("#fc-card-wrap").hidden = true;
  $("#fc-hint").hidden = true;
  $("#fc-verdicts").hidden = true;
  const panel = $("#fc-done-panel");
  panel.hidden = false;
  panel.innerHTML = `
    <h3>${total ? "¡Ronda completada!" : "No hay tarjetas pendientes"}</h3>
    <p class="muted">Repasaste ${total} tarjet${total === 1 ? "a" : "as"} · marcaste ${fc.ok} como sabidas y ${fc.ko} por repasar.</p>
    <div style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;margin-top:.8rem">
      <button class="btn btn-primary" id="fc-again-unknown">Repetir no dominadas</button>
      <button class="btn" id="fc-again-all">Otra ronda completa</button>
      <button class="btn" id="fc-go-home2">Inicio</button>
    </div>`;
  $("#fc-again-unknown").addEventListener("click", () => {
    $("#fc-only-unknown").checked = true; resetFcStage(); buildFcDeck();
  });
  $("#fc-again-all").addEventListener("click", () => { resetFcStage(); buildFcDeck(); });
  $("#fc-go-home2").addEventListener("click", goHome);
}
function resetFcStage() {
  fc.done = true;
  $("#fc-card-wrap").hidden = false;
  $("#fc-hint").hidden = false;
  $("#fc-done-panel").hidden = true;
  fc.ok = 0; fc.ko = 0;
}

function fcVerdict(knewIt) {
  if (!fc || !fc.deck.length) return;
  const card = fc.deck[fc.idx];
  if (knewIt) { fcKnown.add(card.id); fc.ok++; }
  else { fcKnown.delete(card.id); fc.ko++; }
  try { localStorage.setItem(FC_KNOWN_KEY, JSON.stringify([...fcKnown])); } catch { /* sin almacenamiento */ }
  fc.flipped = false;
  fc.idx++;
  renderFc();
}

$("#fc-card-wrap").addEventListener("click", () => { if (fc && !$("#fc-card-wrap").hidden) { fc.flipped = !fc.flipped; renderFc(); } });
document.addEventListener("keydown", e => {
  if (screens.flash.hidden || !fc || fc.done) return;
  if (e.code === "Space") { e.preventDefault(); fc.flipped = !fc.flipped; renderFc(); }
});
$("#fc-easy").addEventListener("click", () => fcVerdict(true));
$("#fc-hard").addEventListener("click", () => fcVerdict(false));
$("#fc-exit").addEventListener("click", goHome);
$("#fc-filter").addEventListener("click", e => {
  const chip = e.target.closest(".chip"); if (!chip) return;
  $("#fc-filter").querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  resetFcStage(); buildFcDeck();
});
$("#fc-only-unknown").addEventListener("change", () => { resetFcStage(); buildFcDeck(); });

/* Toast CSS dinámico (evita tocar la hoja principal) */
const st = document.createElement("style");
st.textContent = `.toast-msg{position:fixed;left:50%;bottom:24px;transform:translateX(-50%) translateY(20px);
  background:#1e293b;color:#fff;padding:.7rem 1.2rem;border-radius:12px;font-size:.9rem;opacity:0;
  transition:all .3s ease;z-index:200;box-shadow:0 10px 30px rgba(0,0,0,.25);max-width:90vw;text-align:center}
  .toast-msg.show{opacity:1;transform:translateX(-50%) translateY(0)}`;
document.head.appendChild(st);

/* ---------------- Arranque ---------------- */
refreshHomeStats();
showScreen("home");
