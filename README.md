# PrepEGEL ISOFT

Simulador web para preparar el **EGEL Plus en Ingeniería de Software (EGEL Plus ISOFT)** del Ceneval.
Hecho con HTML + CSS + JavaScript puros — sin dependencias, sin build. Funciona en celular y computadora.

## Características

- **155+ reactivos tipo examen** (3 opciones de respuesta, basados en casos) organizados según la estructura oficial:
  - Área 1 · Análisis de Sistemas de Software (30)
  - Área 2 · Diseño de Sistemas de Software (58, incluye patrones de diseño con diagramas UML)
  - Área 3 · Desarrollo de Sistemas de Software (42)
  - Área 4 · Gestión de Proyectos de Software (29)
  - Lenguaje y Comunicación (20)
- **Preguntas con diagramas**: UML de patrones (Observer, Strategy, Adapter, Singleton), arquitectura MVC y en capas, diagrama de secuencia, normalización y relaciones UML — dibujados en SVG (`assets/`).
- **Flashcards** (~91 tarjetas): definiciones clave por área, fórmulas EVM/PERT/ciclomática, SOLID, patrones problema→solución y ortografía LC. Con filtro por área, "solo no dominadas" y progreso guardado.
- **3 modos**: Simulacro completo (muestreo ponderado según los pesos oficiales del examen), Práctica por área/subárea y Repaso de errores persistentes.
- **Cronómetro** configurable: 2 minutos por reactivo (ritmo del examen real).
- **Retroalimentación inmediata opcional** y **resumen final** con explicación detallada de cada reactivo.
- Desglose de resultados por área y subárea; historial de intentos (localStorage).
- Atajos de teclado: `1·2·3` responden, `←/→` navegan.

## Publicarlo en GitHub Pages (2 minutos)

1. Crea un repositorio nuevo en GitHub (p. ej. `prepegel-isoft`).
2. Sube TODO el contenido de esta carpeta `app/` a la raíz del repositorio:

   ```bash
   cd app
   git init
   git add .
   git commit -m "Simulador EGEL Plus ISOFT"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/prepegel-isoft.git
   git push -u origin main
   ```

3. En el repositorio: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. En 1–2 minutos tu app estará en:
   `https://TU_USUARIO.github.io/prepegel-isoft/`

> Tip: ábrela en el celular y usa "Agregar a pantalla de inicio" para usarla como app.

## Estudiar localmente

Abre `index.html` directamente en el navegador, o mejor:

```bash
cd app && python3 -m http.server 8080
# → http://localhost:8080
```

## Estructura

```
app/
├── index.html          # Pantallas: inicio, configuración, quiz, resultados, repaso, flashcards
├── css/style.css       # Diseño responsivo mobile-first
├── assets/             # Diagramas SVG (patrones UML, MVC, capas, secuencia…)
└── js/
    ├── app.js                  # Lógica: modos, timer, resultados, flashcards, persistencia
    ├── questions-a1.js         # Banco Área 1 · Análisis
    ├── questions-a2.js         # Banco Área 2 · Diseño
    ├── questions-a3.js         # Banco Área 3 · Desarrollo
    ├── questions-a4.js         # Banco Área 4 · Gestión
    ├── questions-lang.js       # Banco Lenguaje y Comunicación
    ├── questions-extra.js      # Patrones de diseño y arquitectura (con imágenes)
    └── flashcards.js           # Mazo de tarjetas de repaso
tools/
├── validar.html        # Validación del banco en el navegador (no requiere instalar nada)
├── validar.js          # La misma validación desde la terminal (requiere Node.js)
└── validar-reglas.js   # Reglas compartidas por ambos
```

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
