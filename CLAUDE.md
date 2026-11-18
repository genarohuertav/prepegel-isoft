# PrepEGEL ISOFT — Actualización a la guía Dic 2026

Simulador web (HTML/CSS/JS puro, sin dependencias ni build) para el EGEL Plus ISOFT del Ceneval.
Se está actualizando a la guía nueva: `docs/guia-dic-2026.pdf`. Rama de trabajo: `actualizacion-guia-dic-2026`.

## Reglas de trabajo

- Trabajar **paso por paso** y **esperar confirmación del usuario entre pasos**.
- **No hacer `git commit` ni `git push` sin preguntar primero.**
- Las preguntas deben ser **originales**: no copiar reactivos ni textos de la guía.
- Formato de pregunta del README (`id`, `sub`, `base` opcional, `stem`, `opts` con 3 opciones, `ans` 0–2, `exp` obligatoria).
- Toda pregunta lleva explicación en `exp`.
- **Regla permanente para preguntas nuevas:** las 3 opciones deben tener un largo parecido y la correcta
  no debe ser siempre la más larga ni la más detallada. (En el banco original la correcta era la más
  larga en 157 de 179 reactivos; ese rebalanceo es un paso aparte, después del paso 4.)
- No citar ni presentar reactivos como "oficiales" del Ceneval.
- Normas: usar ISO/IEC/IEEE 29148:2018 (no IEEE 830) e ISO/IEC 25010:2023 / 25002:2024 con su nomenclatura actual.

## Decisiones de diseño (paso 2)

1. Simulacro muestreado **por subárea** con los pesos de la guía; en Lenguaje, por **ámbito y proceso**.
2. Tiempo por reactivo configurable. Por defecto **2.9 min** en la parte disciplinar y **2 min** en Lenguaje.
   Modo **"Examen real"**: respeta la estructura de 203 reactivos (o su proporción si el banco no alcanza).
3. Multirreactivos: campo `grupo` en cada pregunta (p. ej. `grupo: "lc-t01"`). Las preguntas del mismo
   grupo salen juntas y en orden. El texto (`base`) va solo en la primera del grupo y se comparte.
   El orden dentro del grupo lo da el orden en el archivo. No existe `BASE_GROUPS`.
4. Preguntas de Lenguaje: campos opcionales `ambito` y `proceso`, mostrados en el desglose de resultados.
   - `ambito`: `"estudio" | "literario" | "social"`.
   - `proceso` (LC): `"identificacion" | "interpretacion" | "evaluacion"`;
     (RI): `"comunicativa" | "gramatical" | "ortografica"`.
5. Clave única del área de Lenguaje: `LG` (preguntas y flashcards). Subáreas: `LC` y `RI`.
6. Niveles de desempeño: porcentajes marcados como **estimados**; la pantalla explica que el Ceneval usa el
   Índice Ceneval 700–1300 con cortes en 1000 (Satisfactorio) y 1150 (Sobresaliente).

## Datos de la guía Dic 2026 (verificados en el PDF)

- 203 reactivos: 143 disciplinares (A1=31, A2=33, A3=49, A4=30) + 60 de Lenguaje y Comunicación.
- Incluye 15 % de reactivos piloto (no califican). Opción múltiple con 3 opciones + multirreactivos.
- 9 h en 2 sesiones de 4.5 h. Sesión 1 (8:30–13:00): disciplinar, parte 1. Sesión 2: disciplinar, parte 2 (14:30–17:00) + Lenguaje (17:00–19:00).
  - Ritmo implícito: 7 h / 143 disciplinares ≈ 2.9 min por reactivo; 2 h / 60 de Lenguaje = 2 min por reactivo.
- Pesos por subárea: 1.1=12, 1.2=9, 1.3=10, 2.1=10, 2.2=16, 2.3=7, 3.1=10, 3.2=10, 3.3=10, 3.4=9, 3.5=10, 4.1=8, 4.2=10, 4.3=12.
- Lenguaje y Comunicación:
  - Comprensión lectora (30): ámbitos estudio (reseña académica, artículo de investigación), literario (cuento, ensayo literario) y participación social (convocatoria, nota informativa). Procesos: identificación (12), interpretación (12), evaluación de la forma y el contenido (6).
  - Redacción indirecta (30): ámbitos estudio (15) y participación social (15). Dimensiones: comunicativa (registro y género: artículo de divulgación, protocolo de investigación, reseña, editorial, convocatoria, carta de exposición de motivos), gramatical-semántica (concordancia nominal y verbal, correferencia, elipsis, sinonimia contextual, marcadores textuales) y ortográfica (grafías, puntuación, acentuación).
- Multirreactivos: un estímulo con varias preguntas, sobre todo en comprensión lectora.
- Calificación: Índice Ceneval de 700 a 1300; Satisfactorio ≥ 1000, Sobresaliente ≥ 1150 (por área, por sección y global).
- Formatos de reactivo de opción múltiple: cuestionamiento directo, completamiento y ordenamiento.

## Prioridades (actualizado)

- **La Sección Disciplinar es la prioridad**: es la que decide si se aprueba.
- Lenguaje y Comunicación solo influye para el Sobresaliente global; basta con Satisfactorio en esa
  sección. Su ampliación grande (paso 3) se **pospone al final del proyecto**, con una meta modesta.
- Orden de trabajo: bug del teclado → correcciones de explicaciones → paso 4 por área (A3, A4, A1, A2),
  con revisión del usuario al terminar cada área → pasos 5, 6, 7 → rebalanceo de opciones → paso 3.
- Meta del paso 4: unas **2 veces el peso de la guía** en cada subárea, **sin crecer la 2.2**.
  Empezar por las más débiles: 3.3, 3.1, 3.5, 4.3, 1.1, 3.2 y 4.2.
- Temas prioritarios del paso 4 (descriptores): fragmentación y replicación; NoSQL (columnar, grafos, CAP);
  paradigmas lógico y funcional aplicados; móviles y embebidos; documentación de pruebas; PMBOK 7;
  Scrum 2020; COCOMO con cálculos; viabilidad y tipos de riesgo; ISO/IEC/IEEE 29148; ISO/IEC 25010:2023;
  4+1; ATAM; heurísticas de Nielsen.
- Las explicaciones (`exp`) **nunca** deben nombrar opciones por letra (A, B, C): las opciones se mezclan al
  mostrarse. Hay que referirse a ellas por su contenido.

## Plan

1. **Inventario**: leer el PDF, README.md, js/app.js y todos los js/questions-*.js. Hacer una tabla de cobertura por subárea (banco contra guía) y listar los temas de los descriptores y la bibliografía que no tienen preguntas (p. ej. NoSQL, fragmentación y replicación, paradigmas lógico y funcional, móviles y embebidos, ISO/IEC 25002:2024, 29148:2018, PMBOK 7, Scrum 2020, COCOMO, 4+1, ATAM, heurísticas de Nielsen).
2. **app.js**: muestreo del simulacro por subárea, subáreas nuevas de Lenguaje, soporte de multirreactivos y tiempo por reactivo configurable.
3. **Lenguaje y Comunicación**: ampliar el banco a unas 60–90 preguntas con textos originales.
4. **Parte disciplinar**: cubrir los huecos por subárea.
5. **Flashcards** de los temas nuevos.
6. **Textos**: actualizar index.html y el README con la versión de la guía Dic 2026.
7. **Script de validación** del banco (ids únicos, `ans` entre 0 y 2, 3 opciones, subárea válida).

## Estructura del proyecto

- `index.html` — pantallas (inicio, configuración, quiz, resultados, repaso, flashcards).
- `js/app.js` — lógica (modos, timer, muestreo, resultados, persistencia en localStorage).
- `js/questions-a1.js` … `questions-a4.js`, `questions-lang.js`, `questions-extra.js` — bancos (`window.QB_*`).
- `js/flashcards.js` — mazo (`window.FLASHCARDS`, campos `a`, `f`, `b`).
- `assets/` — diagramas SVG usados por `img` en las preguntas.
