/* PrepEGEL ISOFT — Validación del banco desde la terminal (requiere Node.js).
   Uso, desde la raíz del proyecto:  node tools/validar.js
   Sin Node: abrir tools/validar.html en el navegador (hace la misma revisión). */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const { validarBanco, VALIDAR_BANCOS } = require("./validar-reglas.js");

const raiz = path.join(__dirname, "..");
const leer = f => fs.readFileSync(path.join(raiz, "js", f), "utf8");
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ["questions-a1.js", "questions-a2.js", "questions-a3.js", "questions-a4.js", "questions-lang.js", "questions-extra.js"])
  vm.runInContext(leer(f), ctx, { filename: f });

// Subáreas válidas y pesos: se toman de app.js para no duplicarlos
const app = leer("app.js");
const objeto = nombre => vm.runInNewContext("(" + app.match(new RegExp("const " + nombre + " = (\\{[\\s\\S]*?\\n\\});"))[1] + ")");
const subLabels = objeto("SUBAREA_LABELS");
const pesos = objeto("EXAM").subWeights;

const bancos = {}; VALIDAR_BANCOS.forEach(b => bancos[b] = ctx.window[b]);
const r = validarBanco(bancos, Object.keys(subLabels));
for (const b of VALIDAR_BANCOS) for (const q of (bancos[b] || []))
  if (q && q.img && !fs.existsSync(path.join(raiz, q.img))) r.errores.push(`${q.id}: no existe la imagen ${q.img}`);

console.log(`Total: ${r.total} reactivos\n`);
console.log("Subárea  Preguntas  Peso guía  Nombre");
for (const [k, nombre] of Object.entries(subLabels))
  console.log(`${k.padEnd(8)}${String(r.conteo[k] || 0).padStart(9)}${String(pesos[k] ?? "—").padStart(11)}  ${nombre}`);
console.log(`\nLa correcta es la opción más larga en ${r.masLarga} de ${r.total}.`);
if (r.avisos.length) console.log("\nAvisos:\n  " + r.avisos.join("\n  "));
console.log(r.errores.length ? `\nERRORES (${r.errores.length}):\n  ` + r.errores.join("\n  ") : "\nSin errores.");
process.exitCode = r.errores.length ? 1 : 0;
