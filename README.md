# PrepEGEL ISOFT

Simulador web para preparar el **EGEL Plus en Ingeniería de Software (EGEL Plus ISOFT)** del Ceneval,
alineado a la *Guía para el Sustentante* de **diciembre 2026**.
Hecho con HTML + CSS + JavaScript puros — sin dependencias, sin build. Funciona en celular y computadora.

## El examen (guía de diciembre 2026)

- **203 reactivos**: 143 de la sección disciplinar (Área 1 = 31, Área 2 = 33, Área 3 = 49, Área 4 = 30)
  y 60 de Lenguaje y Comunicación (30 de comprensión lectora y 30 de redacción indirecta).
- Incluye un **15 % de reactivos piloto**, que no cuentan para la calificación.
- Opción múltiple con **3 opciones** y multirreactivos (un texto o caso con varias preguntas).
- **9 h en 2 sesiones de 4.5 h**: la parte disciplinar ocupa unas 7 h (≈ 2.9 min por reactivo) y Lenguaje 2 h
  (2 min por reactivo).
- Calificación con el Índice Ceneval (700–1300): Satisfactorio desde 1000 y Sobresaliente desde 1150.

## Características

- **320 reactivos originales** (3 opciones, basados en casos, todos con explicación), por subárea de la guía:
  - Área 1 · Análisis de Sistemas de Software (62)
  - Área 2 · Diseño de Sistemas de Software (73, incluye patrones y arquitectura con diagramas)
  - Área 3 · Desarrollo de Sistemas de Software (100)
  - Área 4 · Gestión de Proyectos de Software (65)
  - Lenguaje y Comunicación (20)
- **Preguntas con diagramas**: UML de patrones (Observer, Strategy, Adapter, Singleton), arquitectura MVC y en
  capas, diagrama de secuencia, entidad-relación y relaciones UML, dibujados en SVG (`assets/`).
- **Flashcards** (137 tarjetas): definiciones clave por área, normas (ISO/IEC/IEEE 29148, ISO/IEC 25010:2023,
  25002, 12207, 29110, MoProSoft), PMBOK 7, Scrum 2020, fórmulas (COCOMO, puntos de función, EVM, DRE,
  disponibilidad), arquitectura (4+1, ATAM, C4, tácticas), heurísticas de Nielsen, bases de datos distribuidas,
  patrones y ortografía. Con filtro por área, «solo no dominadas» y progreso guardado.
- **Modos**:
  - **Simulacro**: muestreo proporcional a los pesos por subárea de la guía (40, 80 o todo el banco).
  - **Examen real**: las 143 preguntas disciplinares con los pesos de la guía (unas 7 h), o los 203 reactivos
    con Lenguaje al final si se desactiva «Solo sección disciplinar».
  - **Práctica por tema** (área y subárea), **Repaso de errores** y **Flashcards**.
- **Solo sección disciplinar** (activada por defecto en Simulacro y Examen real): deja fuera Lenguaje y
  Comunicación. Desactivada, se incluye Lenguaje con sus pesos por ámbito y proceso.
- **Cronómetro** configurable por reactivo: 2.9 min en la parte disciplinar y 2 min en Lenguaje por defecto.
- **Retroalimentación inmediata opcional** y **resumen final** con la explicación de cada reactivo.
- Desglose de resultados por área, subárea y (en Lenguaje) ámbito y proceso; nivel de desempeño estimado;
  historial de intentos (localStorage).
- Atajos de teclado: `1·2·3` responden, `←/→` navegan.

## Publicarlo en GitHub Pages

1. Sube el contenido de la raíz de este repositorio (donde está `index.html`) a GitHub.
2. En el repositorio: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
3. En 1–2 minutos la app estará en `https://TU_USUARIO.github.io/prepegel-isoft/`.

Antes de publicar, cambia el parámetro `?v=AAAA-MM-DD` de **todas** las etiquetas `<script>` y `<link>` de
`index.html` a la fecha de la publicación, para que los navegadores no usen la copia en caché.

> Tip: ábrela en el celular y usa «Agregar a pantalla de inicio» para usarla como app.

## Estudiar localmente

Abre `index.html` directamente en el navegador (doble clic). No necesita servidor ni instalar nada.

## Estructura

```
index.html              # Pantallas: inicio, configuración, quiz, resultados, repaso, flashcards
css/style.css           # Diseño responsivo mobile-first
assets/                 # Diagramas SVG (patrones UML, MVC, capas, secuencia…)
docs/guia-dic-2026.pdf  # Guía para el sustentante usada como referencia
js/
├── app.js              # Lógica: modos, timer, muestreo, resultados, flashcards, persistencia
├── questions-a1.js     # Banco Área 1 · Análisis
├── questions-a2.js     # Banco Área 2 · Diseño
├── questions-a3.js     # Banco Área 3 · Desarrollo
├── questions-a4.js     # Banco Área 4 · Gestión
├── questions-lang.js   # Banco Lenguaje y Comunicación
├── questions-extra.js  # Patrones de diseño y arquitectura (con imágenes)
└── flashcards.js       # Mazo de tarjetas de repaso
tools/
├── validar.html        # Validación del banco en el navegador (no requiere instalar nada)
├── validar.js          # La misma validación desde la terminal (requiere Node.js)
└── validar-reglas.js   # Reglas compartidas por ambos
```

## Banco de preguntas

### Agregar más preguntas

Agrega objetos al arreglo del archivo del área correspondiente:

```js
{
  id: "a3-43",            // único
  sub: "3.4",             // subárea (ver SUBAREA_LABELS en app.js)
  base: "Texto/caso...",  // opcional
  stem: "Pregunta...",
  opts: ["Opción A", "Opción B", "Opción C"],
  ans: 1,                 // índice de la correcta (0-2)
  exp: "Explicación..."   // se muestra en feedback y repaso
}
```

Las opciones se mezclan aleatoriamente en cada sesión; `ans` siempre apunta a la opción original.

### Validar el banco

Después de agregar o cambiar preguntas, revisa el banco:

- **En el navegador (sin instalar nada):** abre `tools/validar.html` con doble clic. Muestra el conteo por
  subárea junto al peso de la guía y la lista de errores. Tras editar un archivo, pulsa «Volver a validar».
- **En la terminal (si tienes Node.js):** desde la raíz del proyecto, `node tools/validar.js`. Termina con
  código 1 si hay errores.

Revisa: ids únicos, exactamente 3 opciones distintas, `ans` entre 0 y 2, subárea válida, `stem` y `exp`
presentes, que `exp` no nombre opciones por letra, que existan las imágenes de `img`, `ambito` y `proceso`
válidos en Lenguaje, y que cada multirreactivo (`grupo`) vaya seguido con su `base` solo en la primera.

## Aviso

Material de estudio original elaborado a partir de la estructura y temario de la *Guía para el Sustentante* oficial (EGEL Plus ISOFT, Ceneval). No es material oficial del Ceneval ni reproduce reactivos del examen.
