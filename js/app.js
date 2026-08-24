/* ============================================================
   PrepEGEL ISOFT — Lógica de la aplicación
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
const AREA_WEIGHTS = { A1: 31, A2: 33, A3: 49, A4: 30, LG: 60 }; // reactivos oficiales del examen

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

function areaOfSub(sub) {
  return sub.startsWith("1.") ? "A1"
    : sub.startsWith("2.") ? "A2"
    : sub.startsWith("3.") ? "A3"
    : sub.startsWith("4.") ? "A4"
    : "LG";
}

/* ---------------- Banco global ---------------- */
const BANK = [
  ...(window.QB_A1 || []), ...(window.QB_A2 || []),
  ...(window.QB_A3 || []), ...(window.QB_A4 || []),
  ...(window.QB_LANG || []), ...(window.QB_EXTRA || [])
];
const BY_ID = Object.fromEntries(BANK.map(q => [q.id, q]));

/* Textos compartidos de comprensión lectora: copia la base al resto del grupo */
const BASE_GROUPS = [
  ["lg-01", "lg-02", "lg-03"],
  ["lg-04", "lg-05", "lg-06"],
  ["lg-07", "lg-08"]
];
BASE_GROUPS.forEach(group => {
  const leader = BY_ID[group[0]];
  if (leader && leader.base) group.slice(1).forEach(id => { const q = BY_ID[id]; if (q) q.base = leader.base; });
});

/* ---------------- Estado ---------------- */
const SECONDS_PER_Q = 120;
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
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
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

/* ---------------- Persistencia ---------------- */
const LS_ERRORS = "isoft_errors_v1";
const LS_HISTORY = "isoft_history_v1";
function getErrors() {
  try { return new Set(JSON.parse(localStorage.getItem(LS_ERRORS) || "[]")); }
  catch { return new Set(); }
}
function saveErrors(set) {
  localStorage.setItem(LS_ERRORS, JSON.stringify([...set].filter(id => BY_ID[id])));
}
function getHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY) || "[]"); } catch { return []; }
}
function pushHistory(entry) {
  const h = getHistory();
  h.unshift(entry);
  localStorage.setItem(LS_HISTORY, JSON.stringify(h.slice(0, 8)));
}
function refreshHomeStats() {
  const errs = [...getErrors()].filter(id => BY_ID[id]);
  $("#errors-count-tag").textContent =
    errs.length ? `${errs.length} reactivo${errs.length > 1 ? "s" : ""} por repasar` : "Sin errores pendientes";

  const perArea = {};
  BANK.forEach(q => perArea[q.sub.startsWith("1.") || q.sub.startsWith("2.") || q.sub.startsWith("3.") || q.sub.startsWith("4.") ? areaOfSub(q.sub) : "LG"] =
    (perArea[areaOfSub(q.sub)] || 0) + 1);
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

/* ---------------- Construcción de sesiones ---------------- */
function makeItems(pool) {
  return shuffle(pool).map(q => ({ q, order: shuffle([0, 1, 2]), picked: null, locked: false }));
}

function sampleWeighted(total) {
  // Distribuye según los pesos oficiales del examen, respetando disponibilidad del banco
  const avail = {};
  BANK.forEach(q => { const a = areaOfSub(q.sub); (avail[a] = avail[a] || []).push(q); });
  const totalW = Object.values(AREA_WEIGHTS).reduce((s, w) => s + w, 0);
  const quotas = {};
  Object.keys(AREAS).forEach(a => quotas[a] = Math.min(avail[a]?.length || 0, Math.floor(total * AREA_WEIGHTS[a] / totalW)));
  let assigned = Object.values(quotas).reduce((s, n) => s + n, 0);
  // Redistribuir sobrante a áreas con disponibilidad
  while (assigned < total) {
    const candidates = Object.keys(AREAS)
      .filter(a => quotas[a] < (avail[a]?.length || 0))
      .sort((x, y) => (AREA_WEIGHTS[y] - quotas[y]) - (AREA_WEIGHTS[x] - quotas[x]));
    if (!candidates.length) break;
    quotas[candidates[0]]++; assigned++;
  }
  let qs = [];
  Object.keys(quotas).forEach(a => qs.push(...shuffle(avail[a]).slice(0, quotas[a])));
  return qs;
}

function startSession({ mode, pool, timed, instant }) {
  if (!pool.length) { toast("No hay reactivos disponibles con esos filtros."); return; }
  session = {
    mode, timed, instant,
    items: makeItems(pool),
    idx: 0,
    deadline: timed ? Date.now() + pool.length * SECONDS_PER_Q * 1000 : null,
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
  $("#quiz-sub-badge").textContent = `${q.sub} · ${SUBAREA_LABELS[q.sub] || ""}`;
  $("#quiz-counter").textContent = `${session.idx + 1} / ${session.items.length}`;

  const baseEl = $("#quiz-base");
  if (q.base) { baseEl.hidden = false; baseEl.textContent = q.base; }
  else baseEl.hidden = true;
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
  if (session.instant) { it.locked = true; renderQuestion(); }
  else renderQuestion();
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
  pushHistory({
    date: new Date().toISOString(),
    mode: session.mode === "simulacro" ? "Simulacro" : session.mode === "errores" ? "Repaso errores" : "Práctica",
    correct, total, pct
  });
  refreshHomeStats();

  if (timeUp) toast("Tiempo agotado — sesión finalizada.");
  renderResults(correct, total, pct);
}

/* ---------------- Resultados ---------------- */
function renderResults(correct, total, pct) {
  $("#progress-track").hidden = true;
  const level = pct >= 85 ? "Sobresaliente" : pct >= 60 ? "Satisfactorio" : "Aún no satisfactorio";
  $("#score-detail").textContent = `Acertaste ${correct} de ${total} reactivos.`;

  const ringFg = $("#ring-fg");
  const C = 2 * Math.PI * 52;
  setTimeout(() => {
    ringFg.style.strokeDashoffset = C * (1 - pct / 100);
    ringFg.classList.toggle("level-good", pct >= 60);
    ringFg.classList.toggle("level-bad", pct < 60);
  }, 60);
  $("#score-pct").textContent = `${pct}%`;
  const lvlEl = $("#score-level");
  lvlEl.textContent = level;
  lvlEl.style.color = pct >= 85 ? "#7c3aed" : pct >= 60 ? "#059669" : "#dc2626";

  // Por área y subárea
  const byArea = {}, bySub = {};
  session.items.forEach(i => {
    const a = areaOfSub(i.q.sub), ok = i.picked === i.q.ans;
    byArea[a] = byArea[a] || { c: 0, t: 0 }; byArea[a].t++; if (ok) byArea[a].c++;
    bySub[i.q.sub] = bySub[i.q.sub] || { c: 0, t: 0 }; bySub[i.q.sub].t++; if (ok) bySub[i.q.sub].c++;
  });

  $("#area-breakdown").innerHTML = Object.entries(byArea).map(([a, d]) => {
    const p = Math.round(d.c / d.t * 100), col = AREAS[a].color;
    return `<div class="breakdown-row">
      <div class="breakdown-label"><span>${esc(AREAS[a].name)}</span><span>${d.c}/${d.t} · ${p}%</span></div>
      <div class="breakdown-bar"><div class="breakdown-fill" style="width:${p}%;background:${col}"></div></div>
    </div>`;
  }).join("");

  $("#subarea-breakdown").innerHTML = Object.entries(bySub).sort().map(([s, d]) => {
    const p = Math.round(d.c / d.t * 100);
    const col = AREAS[areaOfSub(s)].color;
    return `<div class="breakdown-row">
      <div class="breakdown-label"><span>${esc(SUBAREA_LABELS[s] || s)} <span style="opacity:.6">(${s})</span></span><span>${d.c}/${d.t} · ${p}%</span></div>
      <div class="breakdown-bar"><div class="breakdown-fill" style="width:${p}%;background:${col};opacity:.75"></div></div>
    </div>`;
  }).join("");

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
    const posCorrect = it.order.indexOf(q.ans);
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
    return `<article class="card review-item">
      <div class="review-head">
        <span class="verdict-pill ${good ? "ok" : "bad"}">${good ? "CORRECTA" : "INCORRECTA"}</span>
        <span class="badge" style="background:${area.color}1f;color:${area.color}">${area.short}</span>
        <span class="badge badge-sub">${q.sub} · ${esc(SUBAREA_LABELS[q.sub] || "")}</span>
        <span class="muted small">#${n + 1}</span>
      </div>
      ${q.base ? `<details><summary class="muted small" style="cursor:pointer;margin:.3rem 0">Ver texto/caso</summary>
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
  $("#toggle-instant").checked = mode !== "simulacro";

  if (mode === "simulacro") {
    $("#setup-title").textContent = "Configura tu simulacro";
    $("#setup-areas-block").hidden = true;
    $("#setup-length-block").hidden = false;
    renderLengthOptions(80);
  } else if (mode === "practica") {
    $("#setup-title").textContent = "Práctica por tema";
    $("#setup-areas-block").hidden = false;
    $("#setup-length-block").hidden = true;
    selectedAreas.add("A1");
    renderAreaChecks();
    renderSubChips();
  }
  showScreen("setup");
}

function renderLengthOptions(defaultLen) {
  const wrap = $("#length-options");
  const options = [[40, "Corto · 40"], [80, "Estándar · 80"], [Infinity, `Completo · ${BANK.length}`]];
  wrap.innerHTML = "";
  options.forEach(([val, label]) => {
    const b = document.createElement("button");
    b.textContent = label;
    b.dataset.len = String(val);
    if ((val === Infinity && defaultLen === Infinity) || val === defaultLen) b.classList.add("active");
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
  const timed = $("#toggle-timer").checked;
  const instant = $("#toggle-instant").checked;
  let pool = [];

  if (setupMode === "simulacro") {
    const activeBtn = $("#length-options button.active");
    const len = Number(activeBtn?.dataset.len ?? 80);
    pool = len >= BANK.length ? BANK.slice() : sampleWeighted(len);
  } else if (setupMode === "errores") {
    pool = [...getErrors()].map(id => BY_ID[id]).filter(Boolean);
  } else {
    pool = BANK.filter(q => selectedAreas.has(areaOfSub(q.sub)));
    if (selectedSubs.size) pool = pool.filter(q => selectedSubs.has(q.sub));
  }
  startSession({ mode: setupMode, pool, timed, instant });
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
const fcKnown = new Set(JSON.parse(localStorage.getItem(FC_KNOWN_KEY) || "[]"));
(window.FLASHCARDS || []).forEach((c, i) => { c.id = "fc-" + i; });
const AREAS_FC = { A1: "A1 · Análisis", A2: "A2 · Diseño", A3: "A3 · Desarrollo", A4: "A4 · Gestión", LC: "Lenguaje" };
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
  localStorage.setItem(FC_KNOWN_KEY, JSON.stringify([...fcKnown]));
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
