# PrepEGEL ISOFT — Actualización a la guía Dic 2026

Simulador web (HTML/CSS/JS puro, sin dependencias ni build) para el EGEL Plus ISOFT del Ceneval.
Se está actualizando a la guía nueva: `docs/guia-dic-2026.pdf`. Rama de trabajo: `actualizacion-guia-dic-2026`.

## Reglas de trabajo

- Trabajar **paso por paso** y **esperar confirmación del usuario entre pasos**.
- **No hacer `git commit` ni `git push` sin preguntar primero.**
- Las preguntas deben ser **originales**: no copiar reactivos ni textos de la guía.
- Formato de pregunta del README (`id`, `sub`, `base` opcional, `stem`, `opts` con 3 opciones, `ans` 0–2, `exp` obligatoria).
- Toda pregunta lleva explicación en `exp`.

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
