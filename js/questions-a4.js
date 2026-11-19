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
      "+$30,000: el proyecto va adelantado respecto al plan",
      "−$30,000: el proyecto va atrasado",
      "+$20,000: el avance supera lo planeado"
    ],
    ans: 1,
    exp: "SV = EV − PV = 270,000 − 300,000 = −30,000. SV negativo indica ATRASO (se ha «ganado» menos valor del planeado). Nota: en costo el proyecto va BIEN (CV = EV − AC = +20,000 favorable) — no confundir los dos ejes: +20,000 es la variación de costo, no la de cronograma."
  },
  {
    id: "a4-02", sub: "4.1",
    base: "Reporte EVM: EV = $200,000; AC = $220,000.",
    stem: "La variación de costo (CV) y su interpretación son…",
    opts: [
      "CV = −$20,000: sobrecosto, el trabajo costó más de lo que vale",
      "CV = +$20,000: ahorro, se gastó menos de lo presupuestado",
      "CV = −$20,000: atraso, se avanzó menos de lo planeado"
    ],
    ans: 0,
    exp: "CV = EV − AC = 200k − 220k = −20k → SOBRECOSTO. Regla mnemotécnica: valores NEGATIVOS en CV/SV = mal; positivos = bien. Ojo: un CV negativo habla de COSTO, no de atraso; el atraso lo mide SV = EV − PV. CPI confirmaría: 200/220 ≈ 0.91 < 1."
  },
  {
    id: "a4-03", sub: "4.1",
    base: "El director pregunta qué significa que el proyecto tenga CPI = 0.85.",
    stem: "La interpretación correcta del índice de ejecución del costo es…",
    opts: [
      "Por cada peso gastado se obtiene trabajo valorado en $0.85",
      "El proyecto terminará con solo el 15 % del alcance original",
      "Se ha consumido el 85 % de las reservas de contingencia"
    ],
    ans: 0,
    exp: "CPI = EV / AC. Con CPI = 0.85, por cada $1 gastado se obtienen 85 centavos de trabajo valorizado → ineficiencia de costo. CPI > 1 sería eficiente; CPI = 1 exacto al presupuesto."
  },
  {
    id: "a4-04", sub: "4.1",
    base: "Red del proyecto (duraciones en días):\n· Ruta 1: Inicio→A(5)→B(4)→Fin\n· Ruta 2: Inicio→A(5)→C(3)→Fin\n· Ruta 3: Inicio→D(12)→Fin",
    stem: "Sobre la ruta crítica, ¿cuál afirmación es correcta?",
    opts: [
      "Es Inicio→D→Fin (12 días): la más larga, con holgura cero",
      "Es Inicio→A→B→Fin (9 días): la que tiene más actividades",
      "Es la suma de todas las rutas dividida entre el número de rutas"
    ],
    ans: 0,
    exp: "Se suman las duraciones por ruta: R1 = 5+4 = 9 · R2 = 5+3 = 8 · R3 = 12. La MÁS LARGA en duración es la crítica (12 días), no la que tiene más actividades: determina la duración mínima del proyecto y cualquier retraso en ella retrasa todo; sus actividades tienen HOLGURA CERO."
  },
  {
    id: "a4-05", sub: "4.1",
    base: "Para una tarea se estimó: optimista O = 5 días, más probable M = 10 días, pesimista P = 21 días.",
    stem: "Con la fórmula PERT, la duración esperada es…",
    opts: [
      "(O + 4M + P) / 6 = 66/6 = 11 días",
      "(O + M + P) / 3 = 36/3 = 12 días",
      "(O + 2M + P) / 4 = 46/4 = 11.5 días"
    ],
    ans: 0,
    exp: "PERT pondera: TE = (O + 4M + P) / 6 = (5+40+21)/6 = 66/6 = 11 días. Da peso 4 al escenario más probable e incorpora la incertidumbre de los extremos. El promedio simple (÷3) o pesos distintos de 1-4-1 no son la fórmula PERT."
  },
  {
    id: "a4-06", sub: "4.1",
    base: "En etapa temprana, con requisitos vagos, el estimador usa un modelo paramétrico basado en miles de líneas de código estimadas (KLOC) para predecir esfuerzo-personas-mes.",
    stem: "El modelo descrito es…",
    opts: [
      "COCOMO, que estima esfuerzo a partir del tamaño en KLOC",
      "Planning poker, que promedia cartas de Fibonacci del equipo",
      "Valor ganado, que proyecta el costo final (EAC) desde el CPI"
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
      "Método Delphi, con expertos anónimos por correo",
      "Analogía con la duración de proyectos históricos"
    ],
    ans: 0,
    exp: "PLANNING POKER: revelación SIMULTÁNEA evita anclajes; la discusión de brechas grandes destapa supuestos ocultos y converge en estimación compartida usando números relativos (story points, secuencia de Fibonacci)."
  },
  {
    id: "a4-08", sub: "4.1",
    base: "Un riesgo identificado tiene ALTA probabilidad de ocurrencia e IMPACTO severo en el cronograma (rotación anunciada del arquitecto).",
    stem: "Según la matriz de riesgos, esta combinación exige…",
    opts: [
      "Prioridad máxima: mitigación activa y contingencia documentada",
      "Aceptar el riesgo sin acción porque todo riesgo es inevitable",
      "Monitorearlo pasivamente y actuar solo si llega a ocurrir"
    ],
    ans: 0,
    exp: "Probabilidad alta × impacto alto = zona ROJA: mitigar (acciones que reducen probabilidad/impacto, p. ej., transferencia de conocimiento) + plan de CONTINGENCIA si materializa. Aceptar o solo vigilar sin actuar aplica a riesgos de baja prioridad, no a este."
  },
  {
    id: "a4-09", sub: "4.1",
    base: "Por normativa corporativa, el equipo contrata una póliza que traslada a la aseguradora las pérdidas potenciales por fallas de infraestructura en nube.",
    stem: "La estrategia de respuesta a riesgos aplicada es…",
    opts: [
      "Transferencia: mover el impacto financiero a un tercero",
      "Evitación: eliminar la actividad que genera el riesgo",
      "Mitigación: reducir la probabilidad con acciones propias"
    ],
    ans: 0,
    exp: "TRANSFERIR desplaza el costo del riesgo a terceros (seguros, outsourcing, garantías) sin eliminarlo. EVITAR elimina la causa (no usar nube); MITIGAR reduce probabilidad/impacto con acciones propias."
  },
  {
    id: "a4-10", sub: "4.1",
    base: "Dos desarrolladores senior concentran el único conocimiento del módulo de facturación; uno renunció ayer.",
    stem: "¿Cuál práctica de gestión de recursos humanos mitiga estructuralmente este riesgo?",
    opts: [
      "Documentar, hacer revisiones cruzadas y rotar responsabilidades",
      "Contratar más becarios para cubrir el módulo en vacaciones",
      "Prohibir las renuncias mediante una cláusula en el contrato"
    ],
    ans: 0,
    exp: "El riesgo de «camión atropellado» se mitiga difundiendo conocimiento: documentación viva, pair programming/review cruzados, buses factor ≥ 2 por componente. Becarios no resuelven el punto crítico ni los contratos eliminan rotación."
  },
  {
    id: "a4-30", sub: "4.1",
    base: "Un sistema de nómina para una empresa mediana se estima en 32 KLOC. El equipo es pequeño, conoce bien el dominio y los requisitos son flexibles (modo orgánico de COCOMO básico: E = 2.4 · KLOC^1.05 personas-mes).",
    stem: "El esfuerzo estimado es, aproximadamente…",
    opts: [
      "Unas 38 personas-mes",
      "Unas 77 personas-mes",
      "Unas 91 personas-mes"
    ],
    ans: 2,
    exp: "E = 2.4 · 32^1.05. Primero la potencia: 32^1.05 = 32 · 32^0.05 ≈ 32 · 1.19 ≈ 38.1. Luego 2.4 × 38.1 ≈ 91.3 personas-mes. 77 sale de multiplicar 2.4 × 32 sin aplicar el exponente; 38 es solo la potencia sin el coeficiente. El exponente mayor que 1 refleja deseconomías de escala: duplicar el tamaño más que duplica el esfuerzo."
  },
  {
    id: "a4-31", sub: "4.1",
    base: "Para un proyecto orgánico se calculó E = 100 personas-mes. COCOMO básico da el tiempo de desarrollo con D = 2.5 · E^0.38 meses y el personal promedio con P = E / D.",
    stem: "¿Cuáles son, aproximadamente, la duración y el personal promedio?",
    opts: [
      "D ≈ 14.4 meses y P ≈ 7 personas",
      "D ≈ 25 meses y P ≈ 4 personas",
      "D ≈ 5.8 meses y P ≈ 17 personas"
    ],
    ans: 0,
    exp: "100^0.38 = 10^(2 × 0.38) = 10^0.76 ≈ 5.75; D = 2.5 × 5.75 ≈ 14.4 meses. P = 100 / 14.4 ≈ 6.9, unas 7 personas. Olvidar el coeficiente 2.5 da 5.8 meses (y 17 personas, una cifra irreal); usar raíz cuadrada en lugar del exponente 0.38 da 25 meses. Las personas-mes no se convierten en meses dividiendo entre 12: se reparten a lo largo de D."
  },
  {
    id: "a4-32", sub: "4.1",
    base: "Se desarrollará el software de control de frenado de un tren: hardware nuevo, restricciones de tiempo real muy estrictas, normativa de seguridad rígida y poca experiencia previa del equipo en ese tipo de sistema.",
    stem: "En COCOMO básico, ¿qué modo corresponde y qué implica para la estimación?",
    opts: [
      "Orgánico: coeficientes bajos por ser un equipo pequeño",
      "Semiacoplado: valores intermedios por la mezcla de experiencia",
      "Empotrado: el exponente más alto, con más esfuerzo por KLOC"
    ],
    ans: 2,
    exp: "Modos de COCOMO básico: ORGÁNICO (equipo pequeño y experimentado, requisitos flexibles; E = 2.4·KLOC^1.05), SEMIACOPLADO (situación intermedia; E = 3.0·KLOC^1.12) y EMPOTRADO o embebido (restricciones rígidas de hardware, tiempo real o normativa; E = 3.6·KLOC^1.20). Un exponente mayor significa que el esfuerzo crece más rápido conforme aumenta el tamaño."
  },
  {
    id: "a4-33", sub: "4.1",
    base: "Con COCOMO II se obtuvo un esfuerzo nominal de 80 personas-mes. Después se evaluaron tres multiplicadores de esfuerzo: fiabilidad requerida alta (1.10), equipo muy capaz (0.85) y plazo comprimido (1.14).",
    stem: "El esfuerzo ajustado es, aproximadamente…",
    opts: [
      "Unas 85 personas-mes",
      "Unas 247 personas-mes",
      "Unas 75 personas-mes"
    ],
    ans: 0,
    exp: "En COCOMO II los multiplicadores de esfuerzo se MULTIPLICAN entre sí y luego por el esfuerzo nominal: 1.10 × 0.85 × 1.14 ≈ 1.066; 80 × 1.066 ≈ 85.3 personas-mes. Sumarlos (≈ 3.09) da 247, un error típico; omitir el multiplicador del plazo da unas 75. Un multiplicador mayor que 1 aumenta el esfuerzo y uno menor que 1 lo reduce. Los factores de escala, en cambio, actúan sobre el exponente del tamaño."
  },
  {
    id: "a4-34", sub: "4.1",
    base: "Para estimar un proyecto sin datos históricos, un coordinador envía la especificación a cinco expertos que no se conocen entre sí. Cada uno estima por separado; el coordinador resume las cifras de forma anónima, las devuelve y pide nuevas rondas hasta que las estimaciones convergen.",
    stem: "La técnica descrita es…",
    opts: [
      "El planning poker",
      "La estimación por analogía",
      "El método Delphi"
    ],
    ans: 2,
    exp: "DELPHI: juicio de expertos ANÓNIMO y por RONDAS, guiado por un coordinador que resume y retroalimenta hasta lograr convergencia; el anonimato evita que domine la opinión de mayor jerarquía. La variante Wideband Delphi agrega reuniones para discutir supuestos. El planning poker también busca consenso, pero el equipo vota cara a cara; la analogía se basa en proyectos históricos parecidos, que aquí no existen."
  },
  {
    id: "a4-35", sub: "4.1",
    base: "Antes de aprobar un sistema de reconocimiento de placas vehiculares en tiempo real, el comité pide confirmar si la tecnología disponible, la infraestructura de la empresa y las habilidades del equipo permiten construirlo con el desempeño requerido.",
    stem: "Ese análisis corresponde a la viabilidad…",
    opts: [
      "Económica, que compara costos contra beneficios esperados",
      "Técnica, que valida tecnología, infraestructura y capacidades",
      "Operativa, que valora si los usuarios adoptarán el sistema"
    ],
    ans: 1,
    exp: "VIABILIDAD TÉCNICA: ¿se puede construir con la tecnología, la infraestructura y el personal disponibles, cumpliendo los requisitos de desempeño? De ella salen los riesgos TÉCNICOS (tecnología inmadura, falta de experiencia, hardware insuficiente). La ECONÓMICA analiza costo-beneficio (retorno de inversión, periodo de recuperación) y la OPERATIVA si la organización y los usuarios usarán el sistema. Otras dimensiones habituales son la legal y la de calendario."
  },
  {
    id: "a4-36", sub: "4.1",
    base: "El informe de viabilidad de un portal de citas médicas reporta varios hallazgos.",
    stem: "¿Cuál de ellos pertenece al análisis de viabilidad técnica?",
    opts: [
      "La inversión se recupera en 30 meses con el ahorro en papelería",
      "El personal de recepción rechaza cambiar su forma de agendar",
      "El servidor actual no soporta la concurrencia que se proyecta"
    ],
    ans: 2,
    exp: "La capacidad del servidor frente a la carga prevista es un tema TÉCNICO (infraestructura y desempeño) y debe traducirse en un riesgo técnico o en una inversión en hardware o nube. El periodo de recuperación de la inversión es un hallazgo ECONÓMICO y la resistencia del personal al cambio es OPERATIVA."
  },
  {
    id: "a4-37", sub: "4.1",
    base: "A mitad de un proyecto interno, la empresa cambia de director general. El nuevo directivo duda que el sistema siga alineado con la estrategia y se rumora que retirará el presupuesto.",
    stem: "Según la clasificación clásica (riesgos de proyecto, técnicos o de producto y de negocio), este es un riesgo…",
    opts: [
      "De negocio, porque amenaza la razón de ser del sistema",
      "Técnico, porque compromete la calidad del producto final",
      "De proyecto, porque solo altera el plan y el cronograma"
    ],
    ans: 0,
    exp: "Riesgos de PROYECTO: afectan plan, cronograma o recursos (rotación de personal, retrasos de proveedores). TÉCNICOS o de PRODUCTO: afectan la calidad o el desempeño de lo que se construye (tecnología inmadura, requisitos ambiguos, rendimiento insuficiente). De NEGOCIO: amenazan la viabilidad del sistema para la organización (pérdida de apoyo directivo o de presupuesto, un producto que nadie quiere, cambio de estrategia). Perder al patrocinador es el ejemplo clásico de riesgo de negocio."
  },
  {
    id: "a4-38", sub: "4.1",
    base: "Riesgo R1: probabilidad 0.30, impacto estimado $200,000.\nRiesgo R2: probabilidad 0.70, impacto estimado $60,000.\nRiesgo R3: probabilidad 0.10, impacto estimado $500,000.",
    stem: "Usando la exposición al riesgo (RE = probabilidad × impacto), ¿cuál debe atenderse primero?",
    opts: [
      "R2, porque es el más probable de los tres",
      "R3, porque tiene el mayor impacto posible",
      "R1, porque su exposición es la más alta"
    ],
    ans: 2,
    exp: "RE1 = 0.30 × 200,000 = $60,000; RE2 = 0.70 × 60,000 = $42,000; RE3 = 0.10 × 500,000 = $50,000. R1 tiene la mayor exposición. Ordenar solo por probabilidad o solo por impacto ignora la otra dimensión. La RE también sirve para dimensionar la reserva de contingencia y para decidir si una mitigación vale lo que cuesta: si mitigar cuesta más que la exposición que reduce, no conviene."
  },
  {
    id: "a4-39", sub: "4.1",
    base: "Un proyecto tiene un presupuesto total (BAC) de $500,000. Al corte: EV = $200,000 y AC = $250,000. Se espera que la eficiencia de costo actual se mantenga hasta el final.",
    stem: "La estimación a la conclusión (EAC) es…",
    opts: [
      "$550,000, porque al presupuesto se le suma el sobrecosto actual",
      "$625,000, porque el presupuesto se divide entre el CPI de 0.8",
      "$400,000, porque el presupuesto se multiplica por el CPI de 0.8"
    ],
    ans: 1,
    exp: "CPI = EV / AC = 200,000 / 250,000 = 0.8. Si esa eficiencia continúa (variación típica), EAC = BAC / CPI = 500,000 / 0.8 = $625,000, y la variación a la conclusión es VAC = BAC − EAC = −$125,000. Sumar solo el sobrecosto actual (EAC = AC + BAC − EV = $550,000) se usa cuando la desviación fue ATÍPICA y no se repetirá, que no es el caso. Multiplicar por el CPI reduciría el costo, lo que no tiene sentido con CPI < 1. En la Guía del PMBOK 7 estas métricas forman parte del dominio de desempeño de Medición."
  },
  {
    id: "a4-40", sub: "4.1",
    base: "Un proyecto de 8 desarrolladores va tres semanas atrasado, a un mes de la entrega. El gerente propone sumar 6 programadores nuevos que no conocen el sistema.",
    stem: "Según la ley de Brooks, ¿qué efecto es más probable a corto plazo?",
    opts: [
      "El atraso crece por capacitación y más canales de comunicación",
      "El atraso se reduce en proporción al personal que se agrega",
      "El atraso no cambia, porque los nuevos solo se dedicarán a pruebas"
    ],
    ans: 0,
    exp: "LEY DE BROOKS: «agregar personal a un proyecto de software atrasado lo atrasa más». Los nuevos necesitan inducción (que quita tiempo a los expertos) y los canales de comunicación crecen como n(n−1)/2: de 28 con 8 personas a 91 con 14. Las personas y los meses no son intercambiables. Opciones más sanas: recortar alcance, renegociar la fecha o sumar gente solo en tareas muy separables."
  },

  /* ==================== 4.2 CALIDAD DE SOFTWARE ==================== */
  {
    id: "a4-11", sub: "4.2",
    base: "Tras el release, el equipo logra incorporar cambios normativos fiscales modificando solo dos clases, sin romper módulos ajenos.",
    stem: "Según ISO/IEC 25010:2023, la característica de calidad exhibida es la…",
    opts: [
      "Mantenibilidad (modificabilidad)",
      "Eficiencia de desempeño (uso de recursos)",
      "Compatibilidad (interoperabilidad)"
    ],
    ans: 0,
    exp: "MANTENIBILIDAD: facilidad para MODIFICAR (corregir, mejorar, adaptar) el software con esfuerzo contenido. En ISO/IEC 25010:2023 sus subcaracterísticas son modularidad, reusabilidad, analizabilidad, modificabilidad y capacidad de ser probado. Eficiencia de desempeño habla de recursos/tiempo; compatibilidad, de coexistencia e interoperabilidad."
  },
  {
    id: "a4-12", sub: "4.2",
    base: "Una función con 11 nodos de decisión reporta complejidad ciclomática V(G) = 12.",
    stem: "¿Qué implica este valor para las pruebas unitarias?",
    opts: [
      "Hay 12 caminos independientes: se requieren al menos 12 casos de prueba",
      "Basta 1 prueba, pues la función tiene una sola ruta de ejecución",
      "Hay 12 defectos confirmados pendientes de corrección en la función"
    ],
    ans: 0,
    exp: "V(G) = número de REGIONES del grafo = aristas − nodos + 2 = puntos de decisión + 1. Representa caminos independientes → cota inferior de casos de prueba y umbral de mantenibilidad (valores altos = código difícil de probar/mantener)."
  },
  {
    id: "a4-13", sub: "4.2",
    base: "En un módulo de 40 KLOC se detectaron 120 defectos durante pruebas; en otro de 10 KLOC, 50 defectos.",
    stem: "Usando densidad de defectos, ¿qué módulo presenta mejor calidad interna?",
    opts: [
      "El primero: 3 defectos/KLOC contra 5 del segundo",
      "El segundo: tuvo menos defectos en números absolutos",
      "Ninguno: la métrica exige defectos por hora-hombre"
    ],
    ans: 0,
    exp: "DENSIDAD DE DEFECTOS = defectos / KLOC (normaliza por tamaño). 3 < 5 → el primer módulo tiene mejor calidad interna. Comparar defectos ABSOLUTOS sin normalizar lleva a conclusiones erróneas."
  },
  {
    id: "a4-14", sub: "4.2",
    base: "Antes de codificar, el líder revisa el documento de diseño contra la SRS preguntándose: «¿estamos construyendo correctamente el producto?».",
    stem: "Esa actividad corresponde a la…",
    opts: [
      "Verificación: comprobar el artefacto contra la especificación previa",
      "Validación: comprobar con el cliente que cubre sus necesidades reales",
      "Auditoría de configuración física del producto entregado"
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
      "2 — Gestionado"
    ],
    ans: 0,
    exp: "Niveles CMMI por etapas: 1 Inicial (caótico) · 2 Gestionado (proyectos controlados) · 3 Definido (procesos organizacionales estándar) · 4 Gestionado Cuantitativamente (métricas estadísticas) · 5 OPTIMIZADO (mejora continua innovadora)."
  },
  {
    id: "a4-16", sub: "4.2",
    base: "El área de calidad propone dos líneas: (a) estandarizar plantillas de revisión y capacitación preventiva en procesos; (b) intensificar pruebas y detección de defectos antes del envío.",
    stem: "La línea (a) corresponde a aseguramiento de calidad (SQA) y la (b) a…",
    opts: [
      "Control de calidad (QC): inspeccionar el producto para detectar defectos",
      "Gestión de configuración (CM): controlar versiones y cambios",
      "Ingeniería de requisitos (RE): obtener y validar requisitos"
    ],
    ans: 0,
    exp: "SQA = PREVENCIÓN orientada a PROCESOS (estándares, auditorías, capacitación). QC = DETECCIÓN orientada al PRODUCTO (pruebas, inspecciones). Ambas complementarias dentro de la gestión de calidad."
  },
  {
    id: "a4-17", sub: "4.2",
    base: "Una revisión Fagan convoca moderador, autor, lectores y escribano; se distribuye el artefacto antes, se registra defectos con severidad y se miden tasas para mejorar el proceso.",
    stem: "Este tipo de revisión se caracteriza por ser…",
    opts: [
      "Inspección formal: roles definidos, criterios de entrada y métricas",
      "Walkthrough informal guiado por el autor, sin registro de defectos",
      "Pair programming con rotación diaria de los roles de cada par"
    ],
    ans: 0,
    exp: "INSPECCIÓN (Fagan): la revisión más FORMAL — roles fijos, reunión estructurada, listas de verificación, datos de defectos para retroalimentar el proceso. El walkthrough es informal y lo conduce el autor."
  },
  {
    id: "a4-18", sub: "4.2",
    base: "El tablero de métricas muestra: velocidad media del equipo por sprint (proceso) y acoplamiento medio de clases (producto).",
    stem: "Clasificación correcta de ambas métricas:",
    opts: [
      "Velocidad es de proceso; acoplamiento es de producto",
      "Ambas son métricas de producto, porque se miden sobre el software",
      "Ambas son métricas de proyecto, porque afectan el cronograma"
    ],
    ans: 0,
    exp: "PROCESO: cómo trabaja el equipo (velocidad, lead time, defectos por revisión). PRODUCTO: atributos del artefacto (complejidad, cohesión/acoplamiento, densidad de defectos). PROYECTO: coste/duración/esfuerzo."
  },
  {
    id: "a4-19", sub: "4.2",
    base: "La dirección pregunta si ISO 9001 sirve para certificar el código fuente del ERP.",
    stem: "La respuesta correcta es que ISO 9001…",
    opts: [
      "Certifica el sistema de gestión de calidad, no productos como el código",
      "Define métricas obligatorias de complejidad ciclomática para el código",
      "Equivale automáticamente a tener el nivel 3 de CMMI"
    ],
    ans: 0,
    exp: "ISO 9001 evalúa el SGQ ORGANIZACIONAL: procesos documentados, mejora continua, satisfacción del cliente. No certifica productos ni impone métricas técnicas; tampoco otorga niveles CMMI (son marcos distintos y complementarios)."
  },
  {
    id: "a4-41", sub: "4.2",
    base: "Un trámite gubernamental en línea se rediseña para que lo usen personas con discapacidad visual y adultos mayores: compatibilidad con lector de pantalla, alto contraste, textos simples y ayuda contextual.",
    stem: "Según ISO/IEC 25010:2023, la característica de calidad mejorada es la…",
    opts: [
      "Adecuación funcional",
      "Capacidad de interacción",
      "Eficiencia de desempeño"
    ],
    ans: 1,
    exp: "CAPACIDAD DE INTERACCIÓN (antes «usabilidad»): grado en que distintos usuarios pueden interactuar con el producto de forma eficaz, eficiente y satisfactoria. En la versión 2023 la antigua «accesibilidad» se reparte en inclusividad y asistencia al usuario, y se agregan subcaracterísticas como el compromiso del usuario y la autodescriptividad. La adecuación funcional mide si las funciones son completas y correctas; la eficiencia de desempeño, los tiempos y el uso de recursos."
  },
  {
    id: "a4-42", sub: "4.2",
    base: "Una bomba de infusión hospitalaria debe detenerse y emitir una alarma si detecta una dosis fuera de rango, para evitar daños al paciente, aunque eso interrumpa el tratamiento.",
    stem: "¿Qué característica de calidad, agregada en ISO/IEC 25010:2023, describe este requisito?",
    opts: [
      "Seguridad (security), que protege la información de accesos indebidos",
      "Fiabilidad, que mide la operación libre de fallos durante un periodo",
      "Seguridad física (safety), que evita riesgos a personas y entorno"
    ],
    ans: 2,
    exp: "La SEGURIDAD FÍSICA (safety) es una característica NUEVA en la versión 2023: capacidad del producto de evitar estados en los que se ponga en peligro la vida, la salud, los bienes o el entorno. Incluye subcaracterísticas como restricción operacional, identificación de riesgos, modo a prueba de fallos (fail-safe), advertencia de peligros e integración segura. La seguridad (security) trata de confidencialidad, integridad y control de acceso a la información; la fiabilidad, de operar sin fallos. Aquí el sistema prefiere detenerse (ser menos disponible) para no causar daño."
  },
  {
    id: "a4-43", sub: "4.2",
    base: "El área de calidad busca un documento de la familia SQuaRE que explique qué modelos de calidad existen (de producto, de calidad en uso, de datos), cómo se relacionan y cómo elegirlos para especificar y evaluar requisitos de calidad.",
    stem: "El documento adecuado es…",
    opts: [
      "ISO/IEC 25002:2024, visión general de los modelos",
      "ISO/IEC 25010:2023, modelo de calidad del producto",
      "ISO/IEC/IEEE 29148:2018, ingeniería de requisitos"
    ],
    ans: 0,
    exp: "ISO/IEC 25002:2024 (Quality model overview and usage) presenta los modelos de calidad de SQuaRE y explica cómo usarlos. Los modelos en sí están en otras partes: 25010:2023 (calidad del PRODUCTO), 25019:2023 (calidad EN USO, que en 2011 formaba parte de 25010) y 25012 (calidad de los DATOS). ISO/IEC/IEEE 29148:2018 trata la ingeniería de requisitos en general, no los modelos de calidad."
  },
  {
    id: "a4-44", sub: "4.2",
    base: "Un hospital contrata a una empresa para que le desarrolle su expediente clínico electrónico: el hospital define lo que necesita, evalúa propuestas y firma el contrato; la empresa negocia, entrega el producto y recibe el pago.",
    stem: "Según ISO/IEC/IEEE 12207:2017, esas actividades pertenecen al grupo de procesos…",
    opts: [
      "De acuerdo: adquisición y suministro",
      "De gestión técnica: planificación y control",
      "Técnicos: definición de requisitos"
    ],
    ans: 0,
    exp: "ISO/IEC/IEEE 12207:2017 agrupa los procesos del ciclo de vida del software en cuatro grupos: de ACUERDO (adquisición y suministro: la relación cliente-proveedor), de HABILITACIÓN ORGANIZACIONAL DEL PROYECTO (modelo de ciclo de vida, infraestructura, portafolio, recursos humanos, gestión de calidad, conocimiento), de GESTIÓN TÉCNICA (planificación, evaluación y control, decisiones, riesgos, configuración, información, medición y aseguramiento de calidad) y TÉCNICOS (desde el análisis del negocio y los requisitos hasta la operación, el mantenimiento y el retiro)."
  },
  {
    id: "a4-45", sub: "4.2",
    base: "Una empresa de 9 personas desarrolla software a la medida y quiere demostrar a sus clientes que trabaja con procesos ordenados, pero un modelo como CMMI le resulta demasiado costoso.",
    stem: "¿Qué norma está pensada para su caso y qué procesos cubre su perfil básico?",
    opts: [
      "ISO 9001: sistema de gestión de calidad de toda la organización",
      "ISO/IEC 29110: gestión de proyecto e implementación de software",
      "ISO/IEC 25010: modelo de calidad para el producto de software"
    ],
    ans: 1,
    exp: "ISO/IEC 29110 está dirigida a ENTIDADES MUY PEQUEÑAS (VSE, de hasta 25 personas). Define perfiles graduales (de entrada, básico, intermedio y avanzado); el perfil BÁSICO tiene dos procesos: Gestión del Proyecto (PM) e Implementación del Software (SI), con productos de trabajo concretos. ISO 9001 certifica el sistema de gestión de calidad de cualquier organización y es más general; ISO/IEC 25010 es un modelo de calidad del producto, no un modelo de procesos."
  },
  {
    id: "a4-46", sub: "4.2",
    base: "Una empresa mexicana adopta MoProSoft (base de la norma NMX-I-059-NYCE). El director define el plan estratégico; un gerente administra los recursos y la cartera de proyectos; el líder de proyecto y su equipo construyen el software.",
    stem: "Las tres categorías de procesos de MoProSoft, en el orden de esas responsabilidades, son…",
    opts: [
      "Planeación, Ejecución y Control",
      "Alta Dirección, Gerencia y Operación",
      "Estrategia, Táctica y Soporte técnico"
    ],
    ans: 1,
    exp: "MoProSoft (Modelo de Procesos para la Industria de Software) organiza sus procesos en tres categorías: ALTA DIRECCIÓN (Gestión de Negocio), GERENCIA (Gestión de Procesos, Gestión de Proyectos y Gestión de Recursos) y OPERACIÓN (Administración de Proyectos Específicos y Desarrollo y Mantenimiento de Software). Está pensado para pequeñas y medianas empresas de software."
  },
  {
    id: "a4-47", sub: "4.2",
    base: "En la categoría de Operación de MoProSoft, el líder planea y da seguimiento a un proyecto (Administración de Proyectos Específicos, APE) mientras el equipo analiza, diseña, construye y prueba (Desarrollo y Mantenimiento de Software, DMS).",
    stem: "¿Qué relación guarda esto con ISO/IEC 29110?",
    opts: [
      "Ninguna: 29110 es una norma europea que sustituyó a MoProSoft",
      "29110 solo retoma Alta Dirección y descarta la Operación",
      "MoProSoft fue una base del perfil básico de 29110 (PM y SI)"
    ],
    ans: 2,
    exp: "México, a partir de MoProSoft, fue uno de los principales impulsores de ISO/IEC 29110. Los procesos de OPERACIÓN se corresponden con el perfil básico: APE ≈ Gestión del Proyecto (PM) y DMS ≈ Implementación del Software (SI). Por eso una empresa que trabaja con MoProSoft tiene un camino natural hacia una evaluación en 29110. La 29110 es internacional (ISO/IEC), no europea, y se centra justamente en la operación de proyectos."
  },
  {
    id: "a4-48", sub: "4.2",
    base: "Durante revisiones y pruebas se encontraron 180 defectos. En los primeros 90 días en producción, los usuarios reportaron 20 defectos más.",
    stem: "La eficiencia de eliminación de defectos (DRE) del proceso es…",
    opts: [
      "90 %: 180 de los 200 defectos se eliminaron antes de liberar",
      "11 %: escaparon 20 defectos frente a los 180 encontrados",
      "100 %: todos los defectos conocidos ya fueron corregidos"
    ],
    ans: 0,
    exp: "DRE = E / (E + D), donde E son los defectos hallados ANTES de liberar y D los hallados DESPUÉS: 180 / (180 + 20) = 0.90 = 90 %. Mide qué tan eficaces son las actividades de calidad (revisiones, inspecciones y pruebas) para atrapar defectos antes de que lleguen al usuario. 20 / 180 ≈ 11 % compara cantidades que no forman la proporción correcta, y corregir lo conocido no hace que la DRE sea 100 %."
  },
  {
    id: "a4-49", sub: "4.2",
    base: "En un trimestre, el servicio de pagos tuvo un tiempo medio entre fallas (MTBF) de 495 horas y un tiempo medio de reparación (MTTR) de 5 horas.",
    stem: "Su disponibilidad es…",
    opts: [
      "Aproximadamente 1 %",
      "Aproximadamente 99.9 %",
      "Aproximadamente 99 %"
    ],
    ans: 2,
    exp: "Disponibilidad = MTBF / (MTBF + MTTR) = 495 / (495 + 5) = 495 / 500 = 0.99 = 99 %. El 1 % es la proporción de tiempo FUERA de servicio. Un 99.9 % equivaldría a unas 8.8 horas de caída al año. En ISO/IEC 25010:2023 la disponibilidad es subcaracterística de la FIABILIDAD; para mejorarla se reduce el MTTR (recuperación más rápida) o se aumenta el MTBF (menos fallas)."
  },
  {
    id: "a4-50", sub: "4.2",
    base: "Una empresa clasifica sus costos de calidad del año: (1) capacitación en estándares de codificación; (2) horas de soporte y compensaciones por fallas que sufrieron los clientes en producción.",
    stem: "En el modelo de costo de calidad, (1) y (2) son, respectivamente, costos de…",
    opts: [
      "Evaluación y fallas internas",
      "Prevención y fallas externas",
      "Prevención y evaluación"
    ],
    ans: 1,
    exp: "Costo de calidad: PREVENCIÓN (evitar defectos: capacitación, estándares, planeación de calidad), EVALUACIÓN (detectarlos: revisiones, pruebas, auditorías), FALLAS INTERNAS (corregir defectos hallados antes de entregar: retrabajo, depuración) y FALLAS EXTERNAS (defectos que llegan al cliente: soporte, garantías, compensaciones, daño a la reputación). Las externas son las más caras; por eso invertir en prevención suele reducir el costo total."
  },
  {
    id: "a4-51", sub: "4.2",
    base: "La dirección quiere «mejorar la satisfacción de los clientes con el soporte». El área de calidad formula preguntas como «¿cuánto tarda en resolverse un reporte?» y solo entonces define métricas como el tiempo medio de resolución por severidad.",
    stem: "El enfoque usado para derivar las métricas es…",
    opts: [
      "GQM: meta, luego preguntas y al final las métricas",
      "Benchmarking: comparar contra otras organizaciones",
      "Seis Sigma: reducir la variación con el ciclo DMAIC"
    ],
    ans: 0,
    exp: "GQM (Goal-Question-Metric, de Basili): se parte de una META, se derivan PREGUNTAS que permitan saber si se cumple y, solo después, las MÉTRICAS que responden esas preguntas. Así se evita medir datos que nadie usa. El benchmarking compara el desempeño propio con referentes externos; Seis Sigma es un enfoque estadístico de reducción de variación (DMAIC: definir, medir, analizar, mejorar, controlar)."
  },

  /* ==================== 4.3 METODOLOGÍAS DE DESARROLLO ==================== */
  {
    id: "a4-20", sub: "4.3",
    base: "Durante el sprint surgen discusiones sobre qué feature es más valiosa para el negocio y en qué orden construirse.",
    stem: "En Scrum, la responsabilidad y autoridad final de ese ordenamiento recae en…",
    opts: [
      "El Product Owner, responsable de ordenar el Product Backlog",
      "El Scrum Master, como facilitador neutral del proceso Scrum",
      "Los Developers, que por autogestión deciden qué se construye"
    ],
    ans: 0,
    exp: "PRODUCT OWNER: única persona que ORDENA el Product Backlog por valor (representa a los interesados y al cliente). El Scrum Master facilita y ayuda a eliminar impedimentos SIN decidir prioridades; los Developers deciden el CÓMO del trabajo dentro del sprint."
  },
  {
    id: "a4-21", sub: "4.3",
    base: "Cada día, a la misma hora y en no más de 15 minutos, los Developers se reúnen. Un integrante propone que siempre respondan qué hicieron ayer, qué harán hoy y qué los bloquea, «porque así lo exige Scrum».",
    stem: "Según la Guía de Scrum 2020, el propósito del Daily Scrum es…",
    opts: [
      "Revisar el avance hacia el Objetivo del Sprint y ajustar el plan",
      "Reportar al Product Owner el avance detallado de cada integrante",
      "Renegociar el alcance del sprint con los interesados externos"
    ],
    ans: 0,
    exp: "El Daily Scrum es un evento de 15 minutos PARA los Developers: inspeccionan el progreso hacia el Objetivo del Sprint y adaptan el Sprint Backlog, planificando el trabajo del siguiente día. Desde 2020 la guía NO exige las tres preguntas (ayer, hoy, bloqueos): el equipo elige la estructura y las técnicas que quiera, siempre que se centre en el objetivo y detecte impedimentos. No es una reunión de estatus para el Product Owner ni para la dirección, y el alcance se negocia con el Product Owner, no en este evento."
  },
  {
    id: "a4-22", sub: "4.3",
    base: "Al cierre del sprint, ANTES de la demostración al cliente, el equipo analiza internamente: qué funcionó, qué falló y qué experimentarán para mejorar la colaboración el próximo ciclo.",
    stem: "El evento descrito es la…",
    opts: [
      "Retrospectiva (Sprint Retrospective)",
      "Revisión del sprint (Sprint Review)",
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
      "Integración continua con build nocturno y pruebas automáticas",
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
      "Pair programming: driver (escribe) y navigator (orienta)",
      "Code review asíncrono: autor y revisor por pull request",
      "Mob programming: todo el equipo frente a una sola pantalla"
    ],
    ans: 0,
    exp: "PAIR PROGRAMMING (XP): DRIVER teclea; NAVIGATOR observa estrategia/errores. Beneficios: calidad inmediata, transferencia de conocimiento, menos defectos. Es revisión CONTINUA, no posterior como en un pull request, y participan dos personas, no todo el equipo como en mob programming."
  },
  {
    id: "a4-25", sub: "4.3",
    base: "Un equipo de soporte recibe solicitudes variables todo el día; visualizan columnas (Recibido → En análisis → En curso → Hecho) y limitan «En curso» a 3 tarjetas simultáneas.",
    stem: "El mecanismo central que aplica este equipo Kanban es…",
    opts: [
      "Limitar el trabajo en proceso (WIP) para mantener el flujo",
      "Planificar sprints de dos semanas con un alcance comprometido",
      "Estimar cada solicitud en story points antes de aceptarla"
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
      "SAFe (Scaled Agile Framework)",
      "Modelo en V (verificación y validación)"
    ],
    ans: 0,
    exp: "RUP: fases INICIO (viabilidad) → ELABORACIÓN (arquitectura/riesgos) → CONSTRUCCIÓN (iteraciones de código) → TRANSICIÓN (despliegue); dirigido por CASOS DE USO, centrado en ARQUITECTURA e ITERATIVO-INCREMENTAL."
  },
  {
    id: "a4-27", sub: "4.3",
    base: "Un sistema fiscal debe cumplir requisitos legales publicados, estables y detallados, con multas severas por errores; no se espera cambio de alcance en años.",
    stem: "¿En qué escenario el modelo cascada es defendible?",
    opts: [
      "Cuando los requisitos son claros, estables y conocidos desde el inicio",
      "Cuando los requisitos cambian cada semana según la retroalimentación",
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
      "El análisis explícito de riesgos en cada ciclo, antes de desarrollar",
      "La codificación simultánea de todos los módulos del sistema",
      "La entrega continua a producción sin planificación previa"
    ],
    ans: 0,
    exp: "ESPIRAL: ciclos con cuadrantes objetivos → EVALUACIÓN DE ALTERNATIVAS Y RIESGOS (su firma distintiva) → desarrollar/validar → planificar siguiente iteración. Combina lo iterativo con gestión protagónica del riesgo; apto para proyectos grandes/inciertos."
  },
  {
    id: "a4-29", sub: "4.3",
    base: "El pipeline integra los commits de todo el equipo varias veces al día: compila, ejecuta la suite automática y despliega a staging sin intervención humana cuando todo pasa.",
    stem: "Las prácticas DevOps ilustradas son…",
    opts: [
      "Integración continua (CI) y entrega o despliegue continuo (CD)",
      "Cascada con una única fase de pruebas al final del proyecto",
      "Pruebas manuales exploratorias antes de cada release trimestral"
    ],
    ans: 0,
    exp: "CI: integrar FRECUENTEMENTE con build+tests automáticos que atrapan conflictos/defectos temprano. CD extiende hacia staging/producción de forma AUTOMATIZADA y reproducible — núcleo cultural-técnico de DevOps."
  },
  {
    id: "a4-52", sub: "4.3",
    base: "Según la Guía de Scrum 2020, cada artefacto tiene un compromiso que aporta transparencia y foco para medir el progreso.",
    stem: "¿Qué emparejamiento artefacto–compromiso es correcto?",
    opts: [
      "Product Backlog–Definición de Terminado; Sprint Backlog–Objetivo del Producto; Incremento–Objetivo del Sprint",
      "Product Backlog–Objetivo del Sprint; Sprint Backlog–Definición de Terminado; Incremento–Objetivo del Producto",
      "Product Backlog–Objetivo del Producto; Sprint Backlog–Objetivo del Sprint; Incremento–Definición de Terminado"
    ],
    ans: 2,
    exp: "Scrum 2020 añadió los COMPROMISOS: el Product Backlog se compromete con el OBJETIVO DEL PRODUCTO (Product Goal, meta de largo plazo), el Sprint Backlog con el OBJETIVO DEL SPRINT (Sprint Goal, el porqué del sprint) y el Incremento con la DEFINICIÓN DE TERMINADO (Definition of Done, el estándar de calidad que debe cumplir para considerarse incremento)."
  },
  {
    id: "a4-53", sub: "4.3",
    base: "Un gerente lee la Guía de Scrum 2020 y quiere formar un «equipo de desarrollo» de 14 personas que reciba asignaciones del Scrum Master, separado del Product Owner.",
    stem: "¿Qué afirmación es consistente con la guía de 2020?",
    opts: [
      "Hay un solo Scrum Team autogestionado, normalmente de 10 personas o menos",
      "El Scrum Master asigna las tareas a los Developers al inicio de cada sprint",
      "El equipo de desarrollo es un subequipo independiente del Product Owner"
    ],
    ans: 0,
    exp: "En 2020 desaparece el «equipo de desarrollo» como subequipo: hay UN Scrum Team con tres responsabilidades (Developers, Product Owner y Scrum Master), sin jerarquías ni subequipos. El equipo es AUTOGESTIONADO (decide quién hace qué, cuándo y cómo) y suele tener 10 personas o menos; si crece demasiado, conviene dividirlo en varios Scrum Teams que compartan Objetivo del Producto, Product Backlog y Product Owner. El Scrum Master no asigna tareas: sirve al equipo y a la organización."
  },
  {
    id: "a4-54", sub: "4.3",
    base: "En Sprint Planning el Product Owner propone cómo el producto puede aumentar su valor y todo el Scrum Team colabora para definir el objetivo del sprint.",
    stem: "Según la Guía de Scrum 2020, ¿cuáles son los tres temas de Sprint Planning?",
    opts: [
      "¿Qué hice ayer?, ¿qué haré hoy? y ¿qué me impide avanzar?",
      "¿Por qué es valioso?, ¿qué se puede hacer? y ¿cómo se hará?",
      "¿Qué salió bien?, ¿qué salió mal? y ¿qué vamos a mejorar?"
    ],
    ans: 1,
    exp: "Scrum 2020 agregó un tema a Sprint Planning: 1) ¿POR QUÉ es valioso este sprint? (se define el Objetivo del Sprint), 2) ¿QUÉ se puede terminar? (los Developers seleccionan elementos del Product Backlog) y 3) ¿CÓMO se hará? (se descompone el trabajo, a menudo en tareas de un día o menos). Las tres preguntas personales del Daily dejaron de ser obligatorias en 2020; las de qué salió bien o mal son propias de la Retrospectiva."
  },
  {
    id: "a4-55", sub: "4.3",
    base: "Un equipo trabaja con sprints de un mes y quiere respetar las duraciones máximas (timebox) de la Guía de Scrum 2020.",
    stem: "¿Qué combinación de duraciones máximas es correcta?",
    opts: [
      "Planning 4 h, Daily 30 min, Review 8 h y Retrospectiva 1 h",
      "Planning 2 h, Daily 15 min, Review 2 h y Retrospectiva 4 h",
      "Planning 8 h, Daily 15 min, Review 4 h y Retrospectiva 3 h"
    ],
    ans: 2,
    exp: "Para un sprint de UN MES (la duración máxima de un sprint): Sprint Planning ≤ 8 h, Daily Scrum 15 min, Sprint Review ≤ 4 h y Sprint Retrospective ≤ 3 h. Con sprints más cortos los eventos suelen ser más breves. El Daily dura 15 minutos sin importar el largo del sprint."
  },
  {
    id: "a4-56", sub: "4.3",
    base: "Los Developers terminan a mitad del sprint una funcionalidad que cumple la Definición de Terminado; el cliente la necesita cuanto antes.",
    stem: "Según la Guía de Scrum 2020, ¿qué procede?",
    opts: [
      "Esperar a la Sprint Review, único momento para liberar valor",
      "Puede entregarse ya; la Review no es una puerta de liberación",
      "Liberarla solo si el Scrum Master firma la aprobación formal"
    ],
    ans: 1,
    exp: "Un INCREMENTO existe en cuanto un elemento cumple la Definición de Terminado y puede entregarse a los interesados ANTES de que termine el sprint. La guía aclara que la Sprint Review no debe considerarse una puerta (gate) para liberar valor: es una sesión de trabajo para inspeccionar el resultado y adaptar el Product Backlog. El Scrum Master no aprueba entregas."
  },
  {
    id: "a4-57", sub: "4.3",
    base: "Un equipo pequeño busca un proceso unificado ligero: iterativo, centrado en la arquitectura, guiado por casos de uso y por la reducción temprana de riesgos, con solo el contenido esencial y que pueda extenderse si hace falta. Se publicó como parte del Eclipse Process Framework.",
    stem: "El proceso descrito es…",
    opts: [
      "OpenUP, versión mínima y extensible del proceso unificado",
      "SAFe, marco para escalar la agilidad a todo el portafolio",
      "Crystal Clear, familia ágil centrada solo en las personas"
    ],
    ans: 0,
    exp: "OpenUP (Open Unified Process) es un proceso unificado MÍNIMO, COMPLETO y EXTENSIBLE, derivado de RUP y publicado en el Eclipse Process Framework (EPF). Conserva lo esencial de RUP (iterativo-incremental, guiado por casos de uso, centrado en la arquitectura, enfocado en reducir riesgos pronto) con menos roles y artefactos, y adopta prácticas ágiles. Sus principios: colaborar para alinear intereses, equilibrar prioridades en conflicto, enfocarse pronto en la arquitectura y evolucionar con retroalimentación continua."
  },
  {
    id: "a4-58", sub: "4.3",
    base: "En OpenUP, una desarrolladora dedica unas horas a implementar y probar un cambio pequeño; ese avance forma parte del plan de una iteración de pocas semanas, que a su vez pertenece a una fase del proyecto.",
    stem: "Las tres capas de trabajo de OpenUP, de la más pequeña a la más grande, son…",
    opts: [
      "Tarea, historia de usuario y épica",
      "Micro-incremento, iteración y ciclo de vida",
      "Daily Scrum, sprint y versión del producto"
    ],
    ans: 1,
    exp: "OpenUP organiza el trabajo en tres capas: MICRO-INCREMENTOS (trabajo personal de horas o pocos días, con avance medible), ITERACIONES (normalmente de semanas, con un plan y un incremento demostrable) y el CICLO DE VIDA DEL PROYECTO, dividido en las fases de inicio, elaboración, construcción y transición, cada una con su hito. Historias, épicas y sprints son vocabulario de otros marcos."
  },
  {
    id: "a4-59", sub: "4.3",
    base: "En un proyecto con OpenUP, el equipo ya acordó el alcance y la viabilidad con los interesados. Ahora construye y prueba una arquitectura ejecutable que ataque los riesgos técnicos más graves antes de desarrollar el resto de la funcionalidad.",
    stem: "El equipo se encuentra en la fase de…",
    opts: [
      "Inicio",
      "Elaboración",
      "Construcción"
    ],
    ans: 1,
    exp: "Fases de OpenUP (las mismas de RUP): INICIO (acordar alcance, objetivos y viabilidad), ELABORACIÓN (estabilizar una ARQUITECTURA ejecutable y mitigar los riesgos técnicos principales), CONSTRUCCIÓN (desarrollar el resto de la funcionalidad de forma iterativa) y TRANSICIÓN (validar y desplegar con los usuarios). El hito que cierra la elaboración es la arquitectura del ciclo de vida."
  },
  {
    id: "a4-60", sub: "4.3",
    base: "Un gerente que estudió con la 6.ª edición de la Guía del PMBOK busca en la 7.ª edición (2021) los 49 procesos agrupados en 10 áreas de conocimiento.",
    stem: "¿Cómo se organiza la 7.ª edición?",
    opts: [
      "En 49 procesos, ahora agrupados en 5 dominios ágiles",
      "En 10 áreas de conocimiento con entradas y salidas",
      "En 12 principios de dirección y 8 dominios de desempeño"
    ],
    ans: 2,
    exp: "La Guía del PMBOK 7 (2021) pasó de un enfoque basado en PROCESOS a uno basado en PRINCIPIOS y RESULTADOS: 12 principios (p. ej., ser un administrador diligente, enfocarse en el valor, adaptar en función del contexto, adoptar la adaptabilidad y la resiliencia) y 8 DOMINIOS DE DESEMPEÑO: interesados, equipo, enfoque de desarrollo y ciclo de vida, planificación, trabajo del proyecto, entrega, medición e incertidumbre. Ya no prescribe entradas, herramientas y salidas, y sirve para enfoques predictivos, adaptativos o híbridos."
  },
  {
    id: "a4-61", sub: "4.3",
    base: "En el sistema de una aseguradora, la infraestructura y la migración de datos tienen requisitos fijos y se planean por adelantado, mientras que el portal de clientes se construye en iteraciones con retroalimentación frecuente.",
    stem: "Según el dominio «Enfoque de desarrollo y ciclo de vida» del PMBOK 7, el enfoque es…",
    opts: [
      "Predictivo, porque todo el alcance está fijo desde el inicio",
      "Híbrido, porque combina partes predictivas y adaptativas",
      "Adaptativo, porque todo el trabajo se hace en iteraciones"
    ],
    ans: 1,
    exp: "El PMBOK 7 distingue enfoques PREDICTIVOS (alcance, tiempo y costo definidos al inicio; útiles con requisitos estables), ADAPTATIVOS (iterativos o incrementales, para alta incertidumbre o cambio frecuente) e HÍBRIDOS (combinan ambos según el entregable). Aquí la infraestructura y la migración son predictivas y el portal es adaptativo, por lo que el proyecto es híbrido. Elegir el enfoque según el entregable aplica el principio de adaptar en función del contexto."
  },
  {
    id: "a4-62", sub: "4.3",
    base: "La PMO tenía una plantilla única de 40 documentos para todo proyecto. Para una app interna de tres semanas, el gerente conserva solo el acta de constitución, un backlog y un registro de riesgos, y lo justifica ante la PMO.",
    stem: "¿Qué principio del PMBOK 7 está aplicando?",
    opts: [
      "Adaptar en función del contexto (tailoring)",
      "Navegar en la complejidad del sistema",
      "Ser un administrador diligente y respetuoso"
    ],
    ans: 0,
    exp: "ADAPTAR EN FUNCIÓN DEL CONTEXTO (tailoring): ajustar el enfoque, la gobernanza y los procesos al tamaño, riesgo, criticidad y entorno de cada proyecto en lugar de aplicar todo por igual: tan poco proceso como sea posible, pero tanto como sea necesario. Navegar en la complejidad trata de manejar interacciones y ambigüedad; ser un administrador diligente se refiere a actuar con integridad, cuidado y responsabilidad."
  },
  {
    id: "a4-63", sub: "4.3",
    base: "Un equipo ágil cree que adoptar ISO/IEC/IEEE 12207 lo obligaría a trabajar en cascada, con una fase de requisitos completa antes de diseñar.",
    stem: "¿Qué es correcto sobre ISO/IEC/IEEE 12207?",
    opts: [
      "Exige el modelo en V con documentación al cierre de cada fase",
      "Solo aplica a contratos de gobierno con un proveedor externo",
      "Define procesos, no un ciclo; se adapta a modelos iterativos"
    ],
    ans: 2,
    exp: "ISO/IEC/IEEE 12207 define QUÉ procesos existen en el ciclo de vida del software (propósito, resultados, actividades), no en qué orden ni con qué modelo. Es compatible con cascada, incremental, iterativo o ágil, y contempla expresamente la ADAPTACIÓN (tailoring) de sus procesos a cada organización o proyecto. Se usa en contratos, pero también como referencia interna de procesos."
  },
  {
    id: "a4-64", sub: "4.3",
    base: "En un equipo XP, un desarrollador avisa al cliente que la estimación original era irreal y propone recortar alcance, aunque sabe que la noticia no será bien recibida.",
    stem: "¿Qué valor de XP ejemplifica mejor esa actitud?",
    opts: [
      "Simplicidad",
      "Valentía",
      "Retroalimentación"
    ],
    ans: 1,
    exp: "Los valores de XP son COMUNICACIÓN, SIMPLICIDAD, RETROALIMENTACIÓN, VALENTÍA (coraje) y RESPETO. La VALENTÍA implica decir la verdad sobre el avance y las estimaciones, desechar código que no sirve o refactorizar sin miedo. La simplicidad es hacer lo mínimo que funcione; la retroalimentación, obtener información pronto (pruebas, cliente, entregas cortas)."
  },
  {
    id: "a4-65", sub: "4.3",
    base: "En un modelo de desarrollo, cada fase de definición tiene una fase de prueba asociada: requisitos ↔ pruebas de aceptación, diseño del sistema ↔ pruebas de sistema, diseño de arquitectura ↔ pruebas de integración y diseño de módulos ↔ pruebas unitarias. Los planes de prueba se escriben junto con cada fase de definición.",
    stem: "El modelo descrito es…",
    opts: [
      "Modelo en V",
      "Modelo en espiral",
      "Prototipado evolutivo"
    ],
    ans: 0,
    exp: "MODELO EN V: variante de la cascada que vincula cada nivel de especificación con su nivel de prueba (verificación y validación). Ventaja: los criterios de prueba se definen temprano. Desventaja: sigue siendo secuencial y poco flexible ante cambios. El espiral se centra en el análisis de riesgos en cada ciclo; el prototipado evolutivo refina un sistema parcial con la retroalimentación del usuario."
  }
];
