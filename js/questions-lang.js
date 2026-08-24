/* PrepEGEL ISOFT — Banco de preguntas
   SECCIÓN TRANSVERSAL: Lenguaje y Comunicación (60 reactivos oficiales)
   Comprensión Lectora (estudio/literario/participación social) + Redacción Indirecta */
"use strict";

window.QB_LANG = [

  /* ========== COMPRENSIÓN LECTORA — Texto A (ámbito de estudio) ========== */
  {
    id: "lg-01", sub: "LC",
    base: "TEXTO PARA las preguntas lg-01, lg-02 y lg-03\n\nReseña del estudio «Teletrabajo híbrido y productividad en empresas tecnológicas mexicanas»\n\nEl estudio siguió durante dieciocho meses a 480 desarrolladores de seis empresas de Guadalajara, comparando indicadores de desempeño antes y después de adoptar esquemas híbridos. Los autores reportan que 68 % de los participantes mantuvo o aumentó su productividad medida en entregas completadas por sprint, mientras que 21 % mostró descensos atribuibles principalmente a condiciones inadecuadas del espacio doméstico y no a la modalidad en sí. Contrario a la creencia empresarial de que la supervisión presencial garantiza resultados, los hallazgos sugieren que la claridad de los objetivos y la madurez de los canales de comunicación pesan más que el lugar físico desde el cual se trabaja. No obstante, los propios investigadores advierten una limitación relevante: la muestra proviene de empresas grandes con infraestructura digital consolidada, por lo que los resultados podrían no generalizarse a pymes.",
    stem: "(Pregunta 1 · Identificación) ¿Qué porcentaje de participantes mostró DESCENSOS de productividad?",
    opts: [
      "21 %",
      "68 %",
      "48 %"
    ],
    ans: 0,
    exp: "Dato explícito del texto: «21 % mostró descensos». El 68 % corresponde a quienes mantuvieron o AUMENTARON productividad; 480 es el número de participantes (no un porcentaje)."
  },
  {
    id: "lg-02", sub: "LC",
    base: null,
    stem: "(Pregunta 2 · Interpretación) ¿Cuál es la idea central del texto?",
    opts: [
      "El teletrabajo siempre aumenta la productividad de los desarrolladores",
      "La supervisión presencial es indispensable para garantizar resultados",
      "La modalidad de trabajo importa menos que la claridad de objetivos y la calidad de la comunicación; el entorno físico influye pero no determina"
    ],
    ans: 2,
    exp: "El eje argumentativo: «la claridad de objetivos y la madurez de los canales pesan más que el lugar físico», matizado con los descensos por malas condiciones domésticas. A contradice los datos (21 % bajó); B es justamente la creencia que el estudio refuta."
  },
  {
    id: "lg-03", sub: "LC",
    base: null,
    stem: "(Pregunta 3 · Evaluación) ¿Cuál situación ilustra MEJOR la advertencia de los autores sobre la generalización de resultados?",
    opts: [
      "Una pyme de ocho personas sin infraestructura digital consolidada podría obtener resultados distintos a los del estudio",
      "Las seis empresas grandes de Guadalajara deberían abandonar el esquema híbrido inmediatamente",
      "Los 480 desarrolladores encuestados mintieron deliberadamente sobre su desempeño"
    ],
    ans: 0,
    exp: "La limitación declarada: muestra solo de empresas GRANDES con infraestructura consolidada → los resultados quizá NO apliquen a pymes. La opción A reproduce exactamente ese límite; B y C introducen conclusiones que el texto no sostiene."
  },

  /* ========== COMPRENSIÓN LECTORA — Texto B (ámbito literario) ========== */
  {
    id: "lg-04", sub: "LC",
    base: "TEXTO PARA las preguntas lg-04, lg-05 y lg-06\n\nEl reloj de la estación\n\nDon Aurelio llegaba puntual a la estación, aunque ya ningún tren se detenía allí. Abría su paraguas negro —lloviera o no— y esperaba en el andén, mirando el reloj de la fachada que llevaba diez años marcando las cuatro y cuarto. Los niños del pueblo le gritaban que los trenes ya no venían, y él respondía que los trenes no se van: se quedan guardados en la memoria de quienes los esperan. Una mañana el reloj volvió a avanzar: alguien había subido a darle cuerda. Don Aurelio sonrió, cerró su paraguas y, por primera vez en una década, se fue a casa antes de las cinco.",
    stem: "(Pregunta 1 · Identificación) ¿Qué hacía don Aurelio cada tarde según el relato?",
    opts: [
      "Esperaba un tren en el andén con su paraguas abierto",
      "Reparaba el reloj de la fachada de la estación",
      "Regañaba a los niños del pueblo"
    ],
    ans: 0,
    exp: "Dato textual: llegaba a la estación, abría el paraguas y ESPERABA en el andén. Darle cuerda al reloj fue «alguien» una sola mañana (no él), y con los niños solo conversaba."
  },
  {
    id: "lg-05", sub: "LC",
    base: null,
    stem: "(Pregunta 2 · Interpretación) La frase «los trenes no se van: se quedan guardados en la memoria de quienes los esperan» significa que…",
    opts: [
      "Los ferrocarriles planean restablecer el servicio pronto",
      "Su espera mantiene vivo un vínculo afectivo con el pasado, más allá del transporte real",
      "Los trenes antiguos se conservan en museos del pueblo"
    ],
    ans: 1,
    exp: "Es una METÁFORA: lo que don Aurelio custodia no son locomotoras sino recuerdos y significados; esperar le da continuidad a esa parte de su vida. Las otras lecturas toman la frase literalmente, traicionando el tono literario."
  },
  {
    id: "lg-06", sub: "LC",
    base: null,
    stem: "(Pregunta 3 · Evaluación) ¿Por qué el autor incluye que el reloj llevaba DIEZ años marcando las cuatro y cuarto?",
    opts: [
      "Para documentar la falla técnica de los relojes públicos de la época",
      "Porque simboliza el tiempo detenido de don Aurelio; cuando el reloj vuelve a avanzar, él puede soltar la espera",
      "Para explicar que don Aurelio nunca supo leer la hora correctamente"
    ],
    ans: 1,
    exp: "El reloj parado ES don Aurelio: tiempo congelado en un ritual de espera. Su «cuerda» coincide con la liberación del protagonista («cerró su paraguas... se fue antes de las cinco»). Es recurso simbólico, no dato técnico ni anécdota menor."
  },

  /* ==== COMPRENSIÓN LECTORA — Texto C (participación social) ==== */
  {
    id: "lg-07", sub: "LC",
    base: "TEXTO PARA las preguntas lg-07 y lg-08\n\nConvocatoria: Becas de certificación tecnológica 2026\n\nLa Fundación Digital MX ofrece 200 becas para cursos de programación y análisis de datos con duración de seis meses. Podrán postularse personas mayores de 18 años que hayan concluido el bachillerato y cuyo ingreso familiar mensual no supere tres salarios mínimos. El registro cierra el 30 de septiembre a las 18:00 horas y requiere: solicitud en línea, carta de motivos de una cuartilla y comprobante de estudios. Las personas seleccionadas recibirán, además del curso gratuito, una mensualidad de apoyo de $3,500 pesos condicionada a acreditar al menos el 80 % de asistencia.",
    stem: "(Pregunta 1 · Identificación) ¿Qué documentos exige el registro a la convocatoria?",
    opts: [
      "Solicitud en línea, carta de motivos y comprobante de estudios",
      "Comprobante de ingresos, cartas de recomendación y CURP",
      "Título profesional, acta de nacimiento y constancia fiscal"
    ],
    ans: 0,
    exp: "Enumeración literal del texto: solicitud EN LÍNEA + carta de motivos (una cuartilla) + comprobante de estudios. El ingreso familiar es un REQUISITO (no un documento); título profesional no se pide (basta bachillerato)."
  },
  {
    id: "lg-08", sub: "LC",
    base: null,
    stem: "(Pregunta 2 · Interpretación) Según la convocatoria, la mensualidad de apoyo de $3,500 se otorga…",
    opts: [
      "A todas las personas inscritas desde el primer día del curso",
      "Solo al finalizar el curso como premio único",
      "Condicionada a acreditar al menos 80 % de asistencia durante el curso"
    ],
    ans: 2,
    exp: "El texto precisa: mensualidad CONDICIONADA a ≥ 80 % de asistencia — es decir, se recibe mes a mes SOLO si se cumple el umbral. No es automática por inscribirse ni un pago único final."
  },

  /* ========== REDACCIÓN INDIRECTA — Ortográfica ========== */
  {
    id: "lg-09", sub: "RI",
    stem: "¿Cuál oración está escrita CORRECTAMENTE?",
    opts: [
      "Tambien estudiaron para el examen de certificación.",
      "También estudiaron para el examen de certificación.",
      "Tambíen estudiaron para el examen de certificación."
    ],
    ans: 1,
    exp: "«También» lleva tilde en la vocal cerrada tónica (palabra llana terminada en -n → acentúa la última sílaba: tam-bi-ÉN). «Tambien» omite la tilde obligatoria; «tambíen» la coloca en la sílaba incorrecta."
  },
  {
    id: "lg-10", sub: "RI",
    stem: "¿Cuál oración usa correctamente el homófono SI/SÍ?",
    opts: [
      "Sí apruebas el EGEL, obtendrás tu testimonio.",
      "Si apruebas el EGEL, obtendrás tu testimonio.",
      "Sí apruebas el EGEL, obtendras tu testimonio."
    ],
    ans: 1,
    exp: "«SI» sin tilde introduce CONDICIÓN (si pasa esto, entonces aquello). «SÍ» con tilde es afirmación. Además «obtendrás» requiere tilde diacrítica — la opción C acumula dos faltas."
  },
  {
    id: "lg-11", sub: "RI",
    stem: "Complete: «No ___ terminado la migración de la base de datos». La forma correcta es…",
    opts: [
      "a ver",
      "haber",
      "aver"
    ],
    ans: 1,
    exp: "HABER (verbo auxiliar) construye tiempos compuestos: «no HABER terminado». «A ver» (= vamos a mirar/comprobar: «a ver cómo queda») y «aver» (colonia marina) son palabras distintas. Confusión homófona clásica."
  },
  {
    id: "lg-12", sub: "RI",
    stem: "¿Cuál oración presenta la puntuación CORRECTA?",
    opts: [
      "El sistema es rápido, pero consume mucha memoria.",
      "El sistema es rápido pero consume mucha memoria.",
      "El sistema es rápido; pero consume mucha memoria."
    ],
    ans: 0,
    exp: "Ante «pero» que une dos proposiciones contrapuestas se escribe COMMA previa (regla normativa). Omitirla (B) deja la adversativa sin pausa requerida; combinar punto y coma + pero (C) duplica incorrectamente la separación."
  },
  {
    id: "lg-13", sub: "RI",
    stem: "¿Cuál opción está correctamente puntuada?",
    opts: [
      "Al terminar el proyecto, presentamos resultados, métricas y lecciones aprendidas.",
      "Al terminar el proyecto presentamos, resultados métricas y, lecciones aprendidas.",
      "Al terminar, el proyecto presentamos resultados métricas y lecciones, aprendidas."
    ],
    ans: 0,
    exp: "Coma inicial tras el complemento circunstancial («Al terminar el proyecto,») + comas ENUMERATIVAS entre elementos de la lista. Las demás opciones fragmentan sintagmas inseparables («resultados, métricas y, lecciones»)."
  },

  /* ===== REDACCIÓN INDIRECTA — Gramatical y semántica ===== */
  {
    id: "lg-14", sub: "RI",
    stem: "¿Cuál oración presenta concordancia CORRECTA?",
    opts: [
      "Los módulos del sistema está desactualizados.",
      "Los módulos del sistema están desactualizados.",
      "Los módulos del sistema están desactualizado."
    ],
    ans: 1,
    exp: "Concordancia plural completa: módulos (sustantivo plural) → ESTÁN (verbo plural) → DESACTUALIZADOS (participio plural masculino). A rompe verbo-sujeto; C rombe adjetivo-sustantivo."
  },
  {
    id: "lg-15", sub: "RI",
    stem: "¿Cuál versión evita la referencia ambigua del pronombre?",
    opts: [
      "Cuando el analista habló con el cliente, él estaba molesto.",
      "El cliente estaba molesto cuando el analista lo contactó.",
      "Estaba molesto cuando habló con él, el analista."
    ],
    ans: 1,
    exp: "En A, «él» puede referirse al analista O al cliente (ambigüedad anafórica). B explicita quién estaba molesto y quién contactó. C es además agramatical (sujeto omitido sin contexto). Regla: todo pronombre debe tener UN único antecedente claro."
  },
  {
    id: "lg-16", sub: "RI",
    stem: "Complete: «El equipo cumplió con el alcance pactado; ___, el cliente solicitó cambios adicionales fuera de contrato».",
    opts: [
      "por lo tanto",
      "sin embargo",
      "es decir"
    ],
    ans: 1,
    exp: "Relación CONTRASATIVA: cumplimiento pactado vs petición adicional → «sin embargo». «Por lo tanto» marca conclusión/causalidad (incorrecto aquí); «es decir» reformula/explica lo mismo."
  },
  {
    id: "lg-17", sub: "RI",
    stem: "¿Cuál opción elimina la redundancia sin perder sentido?",
    opts: [
      "Subió hacia arriba el archivo al servidor principal.",
      "Subió el archivo al servidor principal.",
      "Subir para arriba el archivo al servidor principal."
    ],
    ans: 1,
    exp: "«SUBIR» ya implica movimiento hacia arriba: «hacia arriba/para arriba» sobran (redundancia pleonástica). La economía expresiva conserva el sentido completo eliminando el exceso."
  },
  {
    id: "lg-18", sub: "RI",
    stem: "¿Cuál oración tiene coherencia léxica correcta (sin cacofonía ni mezcla de registros)?",
    opts: [
      "El informe anual será enviado próximamente a todos los accionistas.",
      "El reporte corporativo será mandado ya luego a los socios capitalinos, o sea, tipo formal.",
      "Vamos a ir informando conforme vayamos viendo cómo va yendo el asunto del informe."
    ],
    ans: 0,
    exp: "Registro FORMAL uniforme, léxico preciso y sin cacofonías. B mezcla registro formal con coloquial («ya luego», «tipo») y relleno vacío («o sea»); C encadena verbos pronominales redundantes («vayamos viendo... va yendo») típico de habla descuidada."
  },

  /* ===== REDACCIÓN INDIRECTA — Dimensión comunicativa ===== */
  {
    id: "lg-19", sub: "RI",
    base: "Objetivo comunicativo: solicitar POR CORREO a servicios escolares la constancia de egreso necesaria para registrarse al EGEL.",
    stem: "¿Cuál mensaje cumple mejor el objetivo comunicativo con registro formal adecuado?",
    opts: [
      "Oigan, necesito YA mi papelito de egreso, súper urgente, ¡gracias de antemano!",
      "Estimados señores: Por medio del presente, me permito solicitar a ustedes se sirvan emitir la constancia de término de estudios a nombre del que subscribe, en virtud de resultar indispensable para efecto de registro ante el examen de egreso correspondiente. Sin otro particular, quedo de ustedes.",
      "Buen día. Soy egresado de la licenciatura en Ingeniería de Software (matrícula 2019xxxx). Solicito amablemente me emitan la constancia de egreso, requisito para mi registro al EGEL Plus. Adjunto copia de credencial y comprobante de estudios. Agradezco su atención y quedo atento(a) a cualquier dato adicional. Atentamente, [nombre y teléfono]."
    ],
    ans: 2,
    exp: "C logra TODO: saludo apropiado, identificación clara (quién pide), PETICIÓN específica y motivada, documentos adjuntos, cortesía y cierre con datos de contacto. A viola registro formal; B cae en fórmulas arcaicas y burocráticas («el que suscribe», «sin otro particular») sin identificarse siquiera — formalismo hueco también falla la dimensión comunicativa."
  },
  {
    id: "lg-20", sub: "RI",
    base: "Objetivo comunicativo: AVISO institucional para usuarios del sistema — informar mantenimiento programado con los datos mínimos indispensables.",
    stem: "¿Cuál aviso comunica mejor la información esencial sin ambigüedad?",
    opts: [
      "Pronto habrá mantenimiento del sistema; estén pendientes de más información.",
      "AVISO: El sistema no estará disponible el sábado 12 de septiembre de 22:00 a 02:00 horas por mantenimiento programado. Guarde su trabajo antes de las 22:00. Agradecemos su comprensión.",
      "Debido a circunstancias ajenas a nuestro control, el servicio podría eventualmente presentar interrupciones en algún momento próximo sin fecha definida."
    ],
    ans: 1,
    exp: "Un aviso eficaz responde QUÉ, CUÁNDO, POR QUÉ y QUÉ debe hacer el usuario: fecha exacta, horario, causa, acción preventiva. A carece de datos verificables; B cumple todos los elementos con instrucción clara. C genera incertidumbre total (sin fecha ni causa concreta), lo opuesto a comunicar."
  }
];
