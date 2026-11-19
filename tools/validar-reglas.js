/* PrepEGEL ISOFT — Reglas de validación del banco de preguntas.
   Lo usan tools/validar.html (navegador) y tools/validar.js (Node). */
"use strict";

const VALIDAR_BANCOS = ["QB_A1", "QB_A2", "QB_A3", "QB_A4", "QB_LANG", "QB_EXTRA"];
const VALIDAR_AMBITOS = ["estudio", "literario", "social"];
const VALIDAR_PROCESOS = {
  LC: ["identificacion", "interpretacion", "evaluacion"],
  RI: ["comunicativa", "gramatical", "ortografica"]
};

/* bancos: { QB_A1: [...], ... } · subareas: lista de claves válidas (SUBAREA_LABELS de app.js)
   Devuelve { total, conteo, errores, avisos, masLarga } */
function validarBanco(bancos, subareas) {
  const errores = [], avisos = [], conteo = {}, ids = new Set();
  let total = 0, masLarga = 0;

  for (const nombre of VALIDAR_BANCOS) {
    const banco = bancos[nombre];
    if (!Array.isArray(banco)) { errores.push(`${nombre}: el banco no se cargó o no es un arreglo`); continue; }

    banco.forEach((q, i) => {
      total++;
      const donde = `${q && q.id ? q.id : "(sin id)"} [${nombre} #${i + 1}]`;
      if (!q || typeof q !== "object") { errores.push(`${donde}: no es un objeto`); return; }

      if (!q.id) errores.push(`${donde}: falta id`);
      else if (ids.has(q.id)) errores.push(`${donde}: id repetido`);
      else ids.add(q.id);

      if (!subareas.includes(q.sub)) errores.push(`${donde}: subárea inválida «${q.sub}»`);
      else conteo[q.sub] = (conteo[q.sub] || 0) + 1;

      if (!q.stem || !String(q.stem).trim()) errores.push(`${donde}: falta stem`);
      if (!q.exp || !String(q.exp).trim()) errores.push(`${donde}: falta exp`);

      const opts = q.opts;
      if (!Array.isArray(opts) || opts.length !== 3) errores.push(`${donde}: debe tener exactamente 3 opciones`);
      else {
        if (opts.some(o => !String(o).trim())) errores.push(`${donde}: hay una opción vacía`);
        if (new Set(opts).size !== 3) errores.push(`${donde}: hay opciones repetidas`);
        if (Number.isInteger(q.ans) && q.ans >= 0 && q.ans <= 2) {
          const L = opts.map(o => String(o).length), max = Math.max(...L);
          if (L[q.ans] === max && L.filter(x => x === max).length === 1) masLarga++;
        }
      }
      if (!Number.isInteger(q.ans) || q.ans < 0 || q.ans > 2) errores.push(`${donde}: ans debe ser 0, 1 o 2`);

      // Las opciones se mezclan al mostrarse: la explicación no debe nombrarlas por letra
      if (q.exp && /\b(opci[oó]n|inciso|respuesta)\s+[ABC]\b|(^|[.;:]\s*)[ABC]\)\s/.test(q.exp))
        errores.push(`${donde}: exp nombra una opción por letra`);

      if (q.ambito !== undefined && !VALIDAR_AMBITOS.includes(q.ambito))
        errores.push(`${donde}: ámbito inválido «${q.ambito}»`);
      if (q.proceso !== undefined && !(VALIDAR_PROCESOS[q.sub] || []).includes(q.proceso))
        errores.push(`${donde}: proceso «${q.proceso}» no válido para ${q.sub}`);
    });

    // Multirreactivos: el grupo va seguido en el archivo y el texto base solo en la primera
    const visto = new Map();
    banco.forEach((q, i) => {
      if (!q || !q.grupo) return;
      const g = visto.get(q.grupo);
      if (!g) { visto.set(q.grupo, { ultimo: i }); return; }
      if (g.ultimo !== i - 1) errores.push(`${q.id}: el grupo «${q.grupo}» no está seguido en ${nombre}`);
      if (q.base) avisos.push(`${q.id}: tiene base pero no es la primera del grupo «${q.grupo}»`);
      g.ultimo = i;
    });
    for (const [grupo, g] of visto) {
      const primera = banco.find(q => q && q.grupo === grupo);
      if (!primera.base) avisos.push(`${primera.id}: el grupo «${grupo}» no tiene texto base en su primera pregunta`);
    }
  }
  return { total, conteo, errores, avisos, masLarga };
}

if (typeof module !== "undefined") module.exports = { validarBanco, VALIDAR_BANCOS };
