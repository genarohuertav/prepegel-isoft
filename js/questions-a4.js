/* PrepEGEL ISOFT — Banco de preguntas
   ÁREA 4: Gestión de Proyectos de Software (30 reactivos oficiales)
   Subáreas: 4.1 Tiempos, costos, RRHH y riesgo · 4.2 Calidad de software · 4.3 Metodologías */
"use strict";

window.QB_A4 = [

  /* ====== 4.1 GESTIÓN DE TIEMPOS, COSTOS, RRHH Y RIESGO ====== */
  {
    id: "a4-01", sub: "4.1",
    base: "En un proyecto con valor ganado, al corte del mes se reporta:\nValor planeado (PV) = $300,000\nValor ganado (EV) = $270,000\nCosto real (AC) = $250,000",
    stem: "La variación del cronograma (SV) es…",
    opts: [
      "+$30,000: el proyecto va adelantado",
      "−$30,000: el proyecto va atrasado respecto al plan",
      "$0: el proyecto va exactamente en tiempo"
    ],
    ans: 1,
    exp: "SV = EV − PV = 270,000 − 300,000 = −30,000. SV negativo indica ATRASO (se ha «ganado» menos valor del planeado). Nota: en costo el proyecto va BIEN (CV = EV − AC = +20,000 favorable) — no confundir los dos ejes."
  },
  {
    id: "a4-02", sub: "4.1",
    base: "Reporte EVM: EV = $200,000; AC = $220,000.",
    stem: "La variación de costo (CV) y su interpretación son…",
    opts: [
      "CV = −$20,000: sobrecosto; cada trabajo vale menos de lo que costó hacerlo",
      "CV = +$20,000: ahorro frente al presupuesto",
      "CV = $20,000: exactamente el margen proyectado"
    ],
    ans: 0,
    exp: "CV = EV − AC = 200k − 220k = −20k → SOBRECOSTO. Regla mnemotécnica: valores NEGATIVOS en CV/SV = mal (retraso/desfase); positivos = bien. CPI confirmaría: 200/220 ≈ 0.91 < 1."
  },
  {
    id: "a4-03", sub: "4.1",
    base: "El director pregunta qué significa que el proyecto tenga CPI = 0.85.",
    stem: "La interpretación correcta del índice de ejecución del costo es…",
    opts: [
      "Por cada peso gastado solo se produce trabajo valorado en $0.85; eficiencia deficiente",
      "El proyecto terminará con 15 % del alcance original",
      "Se han gastado 85 % de las reservas de contingencia"
    ],
    ans: 0,
    exp: "CPI = EV / AC. Con CPI = 0.85, por cada $1 gastado se obtienen 85 centavos de trabajo valorizado → ineficiencia de costo. CPI > 1 sería eficiente; CPI = 1 exacto al presupuesto."
  },
  {
    id: "a4-04", sub: "4.1",
    base: "Red del proyecto (duraciones en días):\n· Ruta 1: Inicio→A(5)→B(4)→Fin\n· Ruta 2: Inicio→A(5)→C(3)→Fin\n· Ruta 3: Inicio→D(12)→Fin",
    stem: "Sobre la ruta crítica, ¿cuál afirmación es correcta?",
    opts: [
      "Es Inicio→D→Fin (12 días): es la más larga, define la duración mínima del proyecto y sus tareas tienen holgura cero",
      "Es la suma de todas las actividades dividida entre el número de rutas",
      "Es siempre la ruta con más actividades sin importar sus duraciones"
    ],
    ans: 0,
    exp: "Se suman las duraciones por ruta: R1 = 5+4 = 9 · R2 = 5+3 = 8 · R3 = 12. La MÁS LARGA es la crítica (12 días): determina la duración mínima del proyecto y cualquier retraso en ella retrasa todo; sus actividades tienen HOLGURA CERO."
  },
  {
    id: "a4-05", sub: "4.1",
    base: "Para una tarea se estimó: optimista O = 5 días, más probable M = 10 días, pesimista P = 21 días.",
    stem: "Con la fórmula PERT, la duración esperada es…",
    opts: [
      "(O + 4M + P) / 6 = (5 + 40 + 21)/6 = 11 días",
      "(O + M + P) / 3 = 12 días",
      "P − O = 16 días de holgura total"
    ],
    ans: 0,
    exp: "PERT pondera: TE = (O + 4M + P) / 6 = (5+40+21)/6 = 66/6 = 11 días. Da más peso al escenario probable e incorpora incertidumbre de extremos."
  },
  {
    id: "a4-06", sub: "4.1",
    base: "En etapa temprana, con requisitos vagos, el estimador usa un modelo paramétrico basado en miles de líneas de código estimadas (KLOC) para predecir esfuerzo-personas-mes.",
    stem: "El modelo descrito es…",
    opts: [
      "COCOMO, que estima esfuerzo/costo/duración a partir del tamaño del software",
      "Planning poker, que promedia cartas de Fibonacci",
      "Valor ganado, que proyecta EAC desde CPI"
    ],
    ans: 0,
    exp: "COCOMO (I/II): modelos PARAMÉTRICOS clásicos — esfuerzo = a·(KLOC)^b ajustado por factores; útil temprano con tamaño estimable. Planning poker es ágil-colaborativo por historia; EAC pertenece a EVM."
  },
  {
    id: "a4-07", sub: "4.1",
    base: "En refinamiento del backlog, el equipo juega cartas: cada desarrollador revela simultáneamente una carta (1, 2, 3, 5, 8...); ante diferencias grandes, discuten y vuelven a votar.",
    stem: "Esta técnica de estimación colaborativa se llama…",
    opts: [
      "Planning poker (estimación relativa por consenso)",
      "Método Delphi anónimo por correo",
      "Analogía con proyectos históricos"
    ],
    ans: 0,
    exp: "PLANNING POKER: revelación SIMULTÁNEA evita anclajes; la discusión de brechas grandes destapa supuestos ocultos y converge en estimación compartida usando números relativos (story points, secuencia de Fibonacci)."
  },
  {
    id: "a4-08", sub: "4.1",
    base: "Un riesgo identificado tiene ALTA probabilidad de ocurrencia e IMPACTO severo en el cronograma (rotación anunciada del arquitecto).",
    stem: "Según la matriz de riesgos, esta combinación exige…",
    opts: [
      "Prioridad máxima: planear mitigación activa y contingencia documentada",
      "Aceptar el riesgo sin acción porque todo riesgo es inevitable",
      "Transferirlo al cliente mediante cláusula contractual"
    ],
    ans: 0,
    exp: "Probabilidad alta × impacto alto = zona ROJA: mitigar (acciones que reducen probabilidad/impacto, p. ej., transferencia de conocimiento) + plan de CONTINGENCIA si materializa. Aceptar solo aplica a riesgos triviales."
  },
  {
    id: "a4-09", sub: "4.1",
    base: "Por normativa corporativa, el equipo contrata una póliza que traslada a la aseguradora las pérdidas potenciales por fallas de infraestructura en nube.",
    stem: "La estrategia de respuesta a riesgos aplicada es…",
    opts: [
      "Transferencia: mover el impacto financiero a un tercero",
      "Evitación: eliminar la actividad que genera el riesgo",
      "Mitigación: reducir la probabilidad del evento"
    ],
    ans: 0,
    exp: "TRANSFERIR desplaza el costo del riesgo a terceros (seguros, outsourcing, garantías) sin eliminarlo. EVITAR elimina la causa (no usar nube); MITIGAR reduce probabilidad/impacto con acciones propias."
  },
  {
    id: "a4-10", sub: "4.1",
    base: "Dos desarrolladores senior concentran el único conocimiento del módulo de facturación; uno renunció ayer.",
    stem: "¿Cuál práctica de gestión de recursos humanos mitiga estructuralmente este riesgo?",
    opts: [
      "Documentación técnica actualizada, revisiones cruzadas de código y rotación intencional de responsabilidades",
      "Contratar a más becarios para cubrir vacaciones",
      "Prohibir formalmente las renuncias mediante contrato"
    ],
    ans: 0,
    exp: "El riesgo de «camión atropellado» se mitiga difundiendo conocimiento: documentación viva, pair programming/review cruzados, buses factor ≥ 2 por componente. Becarios no resuelven el punto crítico ni los contratos eliminan rotación."
  },

  /* ==================== 4.2 CALIDAD DE SOFTWARE ==================== */
  {
    id: "a4-11", sub: "4.2",
    base: "Tras el release, el equipo logra incorporar cambios normativos fiscales modificando solo dos clases, sin romper módulos ajenos.",
    stem: "Según ISO/IEC 25010:2023, la característica de calidad exhibida es la…",
    opts: [
      "Mantenibilidad (modificabilidad)",
      "Eficiencia de desempeño",
      "Compatibilidad"
    ],
    ans: 0,
    exp: "MANTENIBILIDAD: facilidad para MODIFICAR (corregir, mejorar, adaptar) el software con esfuerzo contenido. En ISO/IEC 25010:2023 sus subcaracterísticas son modularidad, reusabilidad, analizabilidad, modificabilidad y capacidad de ser probado. Eficiencia de desempeño habla de recursos/tiempo; compatibilidad, de coexistencia e interoperabilidad."
  },
  {
    id: "a4-12", sub: "4.2",
    base: "Una función con 11 nodos de decisión reporta complejidad ciclomática V(G) = 12.",
    stem: "¿Qué implica este valor para las pruebas unitarias?",
    opts: [
      "Existen 12 caminos linealmente independientes: se necesitan al menos 12 casos de prueba para cobertura básica de decisiones",
      "Solo se requiere 1 prueba pues hay una sola ruta de ejecución",
      "Indica 12 defectos confirmados pendientes de corrección"
    ],
    ans: 0,
    exp: "V(G) = número de REGIONES del grafo = aristas − nodos + 2 = puntos de decisión + 1. Representa caminos independientes → cota inferior de casos de prueba y umbral de mantenibilidad (valores altos = código difícil de probar/mantener)."
  },
  {
    id: "a4-13", sub: "4.2",
    base: "En un módulo de 40 KLOC se detectaron 120 defectos durante pruebas; en otro de 10 KLOC, 50 defectos.",
    stem: "Usando densidad de defectos, ¿qué módulo presenta mejor calidad interna?",
    opts: [
      "El primero: 120/40 = 3 defectos/KLOC, menor densidad que 50/10 = 5",
      "El segundo: tuvo menos defectos absolutos",
      "Son incomparables porque la métrica exige defectos/hora-hombre"
    ],
    ans: 0,
    exp: "DENSIIDAD DE DEFECTOS = defectos / KLOC (normaliza por tamaño). 3 < 5 → el primer módulo es «más denso en calidad». Comparar defectos ABSOLUTOS sin normalizar lleva a conclusiones erróneas."
  },
  {
    id: "a4-14", sub: "4.2",
    base: "Antes de codificar, el líder revisa el documento de diseño contra la SRS preguntándose: «¿estamos construyendo correctamente el producto?».",
    stem: "Esa actividad corresponde a la…",
    opts: [
      "Verificación: comprobar que los artefactos cumplen los requerimientos/specs de la fase previa",
      "Validación: comprobar con el cliente que satisface necesidades reales de uso",
      "Auditoría de configuración física"
    ],
    ans: 0,
    exp: "VERIFICACIÓN = «¿construimos el producto CORRECTAMENTE?» (contra especificaciones, fase a fase: revisar diseño vs SRS). VALIDACIÓN = «¿construimos el producto CORRECTO?» (necesidades reales del usuario, p. ej., UAT)."
  },
  {
    id: "a4-15", sub: "4.2",
    base: "Una organización mide cuantitativamente sus procesos, gestiona estadísticamente su desempeño y mejora continua basada en datos.",
    stem: "Corresponde al nivel CMMI…",
    opts: [
      "5 — Optimizado",
      "3 — Definido",
      "1 — Inicial"
    ],
    ans: 0,
    exp: "Niveles CMMI por etapas: 1 Inicial (caótico) · 2 Gestionado (proyectos controlados) · 3 Definido (procesos organizacionales estándar) · 4 Gestionado Cuantitativamente (métricas estadísticas) · 5 OPTIMIZADO (mejora continua innovadora)."
  },
  {
    id: "a4-16", sub: "4.2",
    base: "El área de calidad propone dos líneas: (a) estandarizar plantillas de revisión y capacitación preventiva en procesos; (b) intensificar pruebas y detección de defectos antes del envío.",
    stem: "La línea (a) corresponde a aseguramiento de calidad (SQA) y la (b) a…",
    opts: [
      "Control de calidad (QC): inspección del producto para detectar defectos",
      "Gestión de configuración (CM)",
      "Ingeniería de requisitos (RE)"
    ],
    ans: 0,
    exp: "SQA = PREVENCIÓN orientada a PROCESOS (estándares, auditorías, capacitación). QC = DETECCIÓN orientada al PRODUCTO (pruebas, inspecciones). Ambas complementarias dentro de la gestión de calidad."
  },
  {
    id: "a4-17", sub: "4.2",
    base: "Una revisión Fagan convoca moderador, autor, lectores y escribano; se distribuye el artefacto antes, se registra defectos con severidad y se miden tasas para mejorar el proceso.",
    stem: "Este tipo de revisión se caracteriza por ser…",
    opts: [
      "Inspección formal con roles definidos, criterios de entrada/salida y recolección de métricas",
      "Walkthrough informal guiado por el autor sin registro",
      "Pair programming con rotación diaria de roles"
    ],
    ans: 0,
    exp: "INSPECCIÓN (Fagan): la revisión más FORMAL — roles fijos, reunión estructurada, listas de verificación, datos de defectos para retroalimentar el proceso. El walkthrough es informal y lo conduce el autor."
  },
  {
    id: "a4-18", sub: "4.2",
    base: "El tablero de métricas muestra: velocidad media del equipo por sprint (proceso) y acoplamiento medio de clases (producto).",
    stem: "Clasificación correcta de ambas métricas:",
    opts: [
      "Velocidad = métrica de proceso; acoplamiento = métrica de producto",
      "Ambas son métricas de producto",
      "Ambas son métricas de proyecto (cronograma)"
    ],
    ans: 0,
    exp: "PROCESO: cómo trabaja el equipo (velocidad, lead time, defectos por revisión). PRODUCTO: atributos del artefacto (complejidad, cohesión/acoplamiento, densidad de defectos). PROYECTO: coste/duración/esfuerzo."
  },
  {
    id: "a4-19", sub: "4.2",
    base: "La dirección pregunta si ISO 9001 sirve para certificar el código fuente del ERP.",
    stem: "La respuesta correcta es que ISO 9001…",
    opts: [
      "Certifica el SISTEMA DE GESTIÓN DE LA CALIDAD de la organización (procesos), no productos específicos como el código",
      "Define métricas obligatorias de complejidad ciclomática",
      "Es equivalente a CMMI nivel 3 automáticamente"
    ],
    ans: 0,
    exp: "ISO 9001 evalúa el SGQ ORGANIZACIONAL: procesos documentados, mejora continua, satisfacción del cliente. No certifica productos ni impone métricas técnicas; tampoco otorga niveles CMMI (son marcos distintos y complementarios)."
  },

  /* ==================== 4.3 METODOLOGÍAS DE DESARROLLO ==================== */
  {
    id: "a4-20", sub: "4.3",
    base: "Durante el sprint surgen discusiones sobre qué feature es más valiosa para el negocio y en qué orden construirse.",
    stem: "En Scrum, la responsabilidad y autoridad final de ese ordenamiento recae en…",
    opts: [
      "El Product Owner, dueño del Product Backlog y maximizador del valor",
      "El Scrum Master, como facilitador neutral del proceso",
      "El equipo de desarrollo por autorganización absoluta"
    ],
    ans: 0,
    exp: "PRODUCT OWNER: única persona que ORDENA el backlog por valor (representa stakeholders/cliente). Scrum Master facilita y remueve impedimentos SIN decidir prioridades; el Developers autoorganiza el CÓMO dentro del sprint."
  },
  {
    id: "a4-21", sub: "4.3",
    base: "Reunión diaria de pie, máximo 15 minutos: cada integrante explica qué hizo, qué hará y si algo le bloquea.",
    stem: "El propósito genuino del Daily Scrum es…",
    opts: [
      "Sincronizar el plan del día e identificar impedimentos — es una reunion de planificación del Developers, no de estatus para el jefe",
      "Reportar avance detallado al Product Owner para renovar el sprint",
      "Renegociar el alcance del sprint con stakeholders externos"
    ],
    ans: 0,
    exp: "Daily Scrum: INSPECCIÓN diaria hacia la Sprint Goal + adaptación del plan de 24 h, PARA el equipo (no para dirección). Los impedimentos se gestionan aparte con el Scrum Master; el estatus formal sale del Sprint Review."
  },
  {
    id: "a4-22", sub: "4.3",
    base: "Al cierre del sprint, ANTES de la demostración al cliente, el equipo analiza internamente: qué funcionó, qué falló y qué experimentarán para mejorar la colaboración el próximo ciclo.",
    stem: "El evento descrito es la…",
    opts: [
      "Retrospectiva (Sprint Retrospective)",
      "Revisión (Sprint Review)",
      "Planificación (Sprint Planning)"
    ],
    ans: 0,
    exp: "RETROSPECTIVA: el equipo examina SU PROCESO de trabajo (personas, herramientas, interacciones) y compromete mejoras. REVIEW: inspecciona el PRODUCTO increment con stakeholders. Orden típico: Review → Retro → Planning."
  },
  {
    id: "a4-23", sub: "4.3",
    base: "En XP, el programador escribe primero una prueba automatizada que FALLA, después el código mínimo que la hace pasar, y finalmente limpia el diseño sin cambiar comportamiento.",
    stem: "El ciclo descrito es…",
    opts: [
      "TDD (Test-Driven Development): rojo → verde → refactorizar",
      "Integración continua con build nocturno",
      "Refactorización dirigida por métricas de SonarQube"
    ],
    ans: 0,
    exp: "TDD invierte el orden tradicional: PRUEBA primero (rojo), código mínimo (verde), REFACTOR limpiando con red de seguridad. Produce suites completos y diseño desacoplado como subproducto."
  },
  {
    id: "a4-24", sub: "4.3",
    base: "Dos desarrolladores comparten una estación: uno escribe código mientras el otro revisa en tiempo real, piensa casos límite y proponen alternativas; alternan roles cada cierto tiempo.",
    stem: "La práctica XP y sus roles corresponden a…",
    opts: [
      "Pair programming: driver (escribe) y navigator (orienta), con revisión continua incorporada",
      "Code review asincrónico por pull request",
      "Mob programming exclusivo de Kanban"
    ],
    ans: 0,
    exp: "PAIR PROGRAMMING (XP): DRIVER teclea; NAVIGATOR observa estrategia/errores. Beneficios: calidad inmediata, transferencia de conocimiento, menos defectos. Es revisión CONTINUA, no postera."
  },
  {
    id: "a4-25", sub: "4.3",
    base: "Un equipo de soporte recibe solicitudes variables todo el día; visualizan columnas (Recibido → En análisis → En curso → Hecho) y limitan «En curso» a 3 tarjetas simultáneas.",
    stem: "El mecanismo central que aplica este equipo Kanban es…",
    opts: [
      "Limitar el trabajo en proceso (WIP) para exponer cuellos y mantener flujo continuo",
      "Planificar sprints de dos semanas con compromiso fijo",
      "Estimar todo con story points antes de aceptarlo"
    ],
    ans: 0,
    exp: "KANBAN: flujo CONTINUO (sin iteraciones fijas) donde LIMITAR WIP fuerza terminar antes de empezar, revelando cuellos de botella. Sprint planning/story points pertenecen a Scrum."
  },
  {
    id: "a4-26", sub: "4.3",
    base: "Un marco divide el ciclo de vida en cuatro fases secuenciales con iteraciones internas: concepción/inicio → elaboración → construcción → transición, gobernado por casos de uso y arquitectura.",
    stem: "El marco descrito es…",
    opts: [
      "RUP (Rational Unified Process)",
      "Scrum escalado (SAFe)",
      "Modelo en V"
    ],
    ans: 0,
    exp: "RUP: fases INICIO (viabilidad) → ELABORACIÓN (arquitectura/riesgos) → CONSTRUCCIÓN (iteraciones de código) → TRANSICIÓN (despliegue); dirigido por CASOS DE USO, centrado en ARQUITECTURA e ITERATIVO-INCREMENTAL."
  },
  {
    id: "a4-27", sub: "4.3",
    base: "Un sistema fiscal debe cumplir requisitos legales publicados, estables y detallados, con multas severas por errores; no se espera cambio de alcance en años.",
    stem: "¿En qué escenario el modelo cascada es defendible?",
    opts: [
      "Cuando los requisitos son claros, estables, conocidos desde el inicio y la tecnología madura",
      "Cuando los requisitos cambian semanalmente según feedback de usuarios",
      "Cuando no existe ningún documento de especificación disponible"
    ],
    ans: 0,
    exp: "CASCADA brilla con REQUISITOS ESTABLES Y CONOCIDOS, dominio regulado y tecnología madura: fases documentadas secuencialmente (req→diseño→impl→pruebas→operación). Con incertidumbre/alto cambio, los enfoques iterativos superan ampliamente."
  },
  {
    id: "a4-28", sub: "4.3",
    base: "En cada vuelta del modelo, el equipo pasa por determinación de objetivos, análisis de ALTERNATIVAS Y RIESGOS, desarrollo y planificación de la siguiente vuelta.",
    stem: "La fase distintiva que define al modelo de espiral (Boehm) es…",
    opts: [
      "El análisis explícito de riesgos en cada ciclo antes de invertir en desarrollo",
      "La codificación simultánea de todos los módulos",
      "La entrega continua sin planificación alguna"
    ],
    ans: 0,
    exp: "ESPIRAL: ciclos con cuadrantes objetivos → EVALUACIÓN DE ALTERNATIVAS Y RIESGOS (su firma distintiva) → desarrollar/validar → planificar siguiente iteración. Combina lo iterativo con gestión protagónica del riesgo; apto para proyectos grandes/inciertos."
  },
  {
    id: "a4-29", sub: "4.3",
    base: "El pipeline integra los commits de todo el equipo varias veces al día: compila, ejecuta la suite automática y despliega a staging sin intervención humana cuando todo pasa.",
    stem: "Las prácticas DevOps ilustradas son…",
    opts: [
      "Integración continua (CI) + entrega/despliegue continuo (CD): feedback rápido y releases repetibles",
      "Waterfall con fase única de pruebas al final",
      "Manual testing exploratorio antes de cada release trimestral"
    ],
    ans: 0,
    exp: "CI: integrar FRECUENTEMENTE con build+tests automáticos que atrapan conflictos/defectos temprano. CD extiende hacia staging/producción de forma AUTOMATIZADA y reproducible — núcleo cultural-técnico de DevOps."
  }
];
