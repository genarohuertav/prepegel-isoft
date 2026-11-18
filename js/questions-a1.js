/* PrepEGEL ISOFT — Banco de preguntas
   ÁREA 1: Análisis de Sistemas de Software (31 reactivos oficiales)
   Subáreas: 1.1 Tipos de requerimientos · 1.2 Obtención/análisis/priorización/validación · 1.3 Documentación */
"use strict";

window.QB_A1 = [

  /* ==================== 1.1 TIPOS DE REQUERIMIENTOS ==================== */
  {
    id: "a1-01", sub: "1.1",
    base: "Una aerolínea encarga un sistema de reservas. Entre sus planteamientos está el siguiente: «La consulta de vuelos disponibles debe mostrarse en pantalla en menos de dos segundos».",
    stem: "¿A qué tipo de requerimiento corresponde este planteamiento?",
    opts: [
      "Requerimiento funcional, porque describe una operación del sistema",
      "Requerimiento no funcional de rendimiento, porque establece una medida de desempeño",
      "Restricción de diseño, porque impone la tecnología a utilizar"
    ],
    ans: 1,
    exp: "Es NO FUNCIONAL de rendimiento: no describe qué hace el sistema (función), sino CÓMO debe hacerlo de forma medible (<2 s). Los funcionales describen servicios o comportamientos; las restricciones limitan la solución (tecnología, normas, presupuesto)."
  },
  {
    id: "a1-02", sub: "1.1",
    base: "En el módulo de banca en línea se documenta: «El cliente podrá transferir fondos entre sus propias cuentas registradas».",
    stem: "Este planteamiento es un requerimiento…",
    opts: [
      "Funcional",
      "No funcional",
      "De dominio"
    ],
    ans: 0,
    exp: "Describe un SERVICIO que el sistema debe ofrecer (transferir fondos), que es exactamente lo que define un requerimiento funcional. Los no funcionales hablan de cualidades (rendimiento, seguridad) y los de dominio provienen del área de aplicación (leyes, regulaciones)."
  },
  {
    id: "a1-03", sub: "1.1",
    base: "La dirección de tecnología de una empresa establece: «Por políticas corporativas, todo sistema nuevo deberá utilizar Oracle Database como gestor de base de datos».",
    stem: "¿Cómo se clasifica correctamente este planteamiento?",
    opts: [
      "Restricción (requerimiento impuesto) que limita las soluciones posibles",
      "Requerimiento funcional del subsistema de persistencia",
      "Atributo de calidad de portabilidad"
    ],
    ans: 0,
    exp: "Las RESTRICCIONES son condiciones impuestas que limitan el margen de diseño (tecnología obligatoria, normativas, presupuesto, plazos). No describen comportamiento ni una cualidad medible del producto, sino un límite impuesto por la organización."
  },
  {
    id: "a1-04", sub: "1.1",
    base: "Un banco exige que su portal opere 24 horas al día los 7 días de la semana, con un tiempo máximo anual de inactividad de 8.76 horas (disponibilidad ≥ 99.9 %).",
    stem: "Según ISO/IEC 25010:2023, la subcaracterística de calidad a la que responde esta exigencia es la…",
    opts: [
      "Capacidad de interacción",
      "Disponibilidad",
      "Flexibilidad"
    ],
    ans: 1,
    exp: "La DISPONIBILIDAD (subcaracterística de la Fiabilidad en ISO/IEC 25010:2023) mide la proporción de tiempo en que el sistema está operativo (99.9 % ≈ 8.76 h/año de caída). La capacidad de interacción (antes «usabilidad») se refiere a la facilidad de uso, y la flexibilidad (antes «portabilidad») a adaptar o trasladar el software a otros entornos."
  },
  {
    id: "a1-05", sub: "1.1",
    base: "Para un sistema de reclutamiento se documentaron dos afirmaciones:\n(1) «El reclutador puede registrar candidatos mediante una pantalla sencilla».\n(2) «El campo CURP se valida con una expresión regular y se almacena cifrado con AES-256».",
    stem: "¿Cuál es la distinción correcta entre ambas?",
    opts: [
      "(1) es un requerimiento de usuario y (2) es un requerimiento de sistema",
      "(1) es un requerimiento de sistema y (2) es un requerimiento de usuario",
      "Ambos son requerimientos no funcionales"
    ],
    ans: 0,
    exp: "Los requerimientos de USUARIO son declaraciones abstractas en lenguaje natural para stakeholders; los de SISTEMA detallan con precisión técnica cómo debe comportarse el software (reglas, formatos, cifrado), sirviendo como contrato para los desarrolladores."
  },
  {
    id: "a1-06", sub: "1.1",
    base: "Para el expediente clínico electrónico de un hospital se anota: «El tratamiento de los datos personales de salud deberá cumplir con la normativa vigente de protección de datos en México (LFPDPPP)».",
    stem: "Este planteamiento proviene principalmente de un requerimiento…",
    opts: [
      "De usuario",
      "No funcional genérico",
      "De dominio"
    ],
    ans: 2,
    exp: "Los requerimientos de DOMINO surgen del ámbito de aplicación del sistema (medicina, banca, etc.), como leyes y regulaciones que deben cumplirse sin importar lo que pidan usuarios o desarrolladores."
  },
  {
    id: "a1-07", sub: "1.1",
    base: "Se especifica: «Toda comunicación entre la aplicación móvil y el servidor deberá viajar cifrada mediante TLS 1.3».",
    stem: "Aunque menciona una acción técnica, este requerimiento se clasifica mejor como…",
    opts: [
      "Funcional, porque indica algo que el sistema hace",
      "No funcional de seguridad, porque define un atributo de calidad del producto",
      "De interfaz externa, porque involucra otro sistema"
    ],
    ans: 1,
    exp: "El objetivo real es proteger la información (confidencialidad/integridad): es un atributo de SEGURIDAD, no una función visible para el usuario. Es un ejemplo clásico de requerimiento no funcional disfrazado de acción técnica."
  },
  {
    id: "a1-08", sub: "1.1",
    stem: "¿Cuál de los siguientes requerimientos es el MENOS verificable?",
    opts: [
      "El sistema debe ser fácil de usar para cualquier persona",
      "Un usuario nuevo debe completar el registro en máximo 3 pasos",
      "Al menos el 90 % de los usuarios debe terminar una compra sin ayuda en la prueba de usabilidad"
    ],
    ans: 0,
    exp: "«Fácil de usar» es ambiguo y no cuantificable, por lo que no puede verificarse objetivamente (violencia a la característica de VERIFICABILIDAD). Las otras dos opciones definen métricas concretas que pueden comprobarse con pruebas."
  },
  {
    id: "a1-09", sub: "1.1",
    base: "En la especificación de un ERP aparecen estos dos requerimientos:\n(R7) «Los reportes financieros deben generarse en línea, al momento de solicitarlos».\n(R12) «Por seguridad contable, los reportes financieros solo podrán procesarse en lotes nocturnos».",
    stem: "¿Qué problema de calidad presentan R7 y R12 juntos?",
    opts: [
      "Falta de trazabilidad",
      "Violación de consistencia, pues se contradicen entre sí",
      "Falta de completitud, porque falta un actor"
    ],
    ans: 1,
    exp: "Dos requerimientos son INCONSISTENTES cuando no pueden satisfverse simultáneamente. Aquí uno exige generación inmediata y otro solo nocturna: contradicción directa que debe resolverse mediante negociación con los stakeholders."
  },
  {
    id: "a1-10", sub: "1.1",
    base: "Un cliente solicita: «Quiero que el sistema sea rápido».",
    stem: "El principal problema de este requerimiento es que…",
    opts: [
      "Es ambiguo e impreciso, por lo que no puede validarse ni probarse",
      "Es un requerimiento funcional mal redactado",
      "Es demasiado detallado para un documento de usuario"
    ],
    ans: 0,
    exp: "«Rápido» carece de criterio medible (¿cuánto?, ¿bajo qué carga?). Un buen requerimiento no funcional cuantifica: «el 95 % de las consultas debe responder en ≤ 2 s con 500 usuarios concurrentes»."
  },
  {
    id: "a1-11", sub: "1.1",
    base: "Una empresa pide: «Nuestra aplicación debe poder instalarse tanto en Android como en iOS realizando cambios mínimos en el código».",
    stem: "Según ISO/IEC 25010:2023, la característica de calidad solicitada es la…",
    opts: [
      "Flexibilidad",
      "Mantenibilidad",
      "Fiabilidad"
    ],
    ans: 0,
    exp: "FLEXIBILIDAD (ISO/IEC 25010:2023; en la versión 2011 se llamaba «portabilidad»): capacidad del producto para adaptarse a cambios de entorno o plataforma; incluye adaptabilidad, escalabilidad, instalabilidad y reemplazabilidad. Mantenibilidad se refiere a modificarlo (corregir/mejorar) y fiabilidad a operar sin fallos durante un periodo."
  },

  /* ====== 1.2 OBTENCIÓN, ANÁLISIS, PRIORIZACIÓN Y VALIDACIÓN ====== */
  {
    id: "a1-12", sub: "1.2",
    base: "Un analista necesita entender cómo trabajan realmente los empleados de ventanilla, pues sospecha que describen su proceso de manera idealizada y omiten pasos informales.",
    stem: "La técnica más adecuada para descubrir el proceso real es…",
    opts: [
      "La observación directa del trabajo en sitio",
      "Un cuestionario enviado por correo",
      "El análisis de la documentación existente"
    ],
    ans: 0,
    exp: "La OBSERVACIÓN (etnografía) captura lo que las personas realmente hacen, incluyendo atajos y pasos informales que rara vez reportan en entrevistas o cuestionarios. Es idónea cuando hay diferencia entre el proceso declarado y el ejecutado."
  },
  {
    id: "a1-13", sub: "1.2",
    base: "Los usuarios de un sistema están distribuidos en 12 sucursales del país y se necesitan recoger sus opiniones en poco tiempo y bajo costo.",
    stem: "La técnica de obtención de requerimientos más apropiada es…",
    opts: [
      "Entrevistas individuales en cada sucursal",
      "Un taller JAD presencial de tres días",
      "Un cuestionario aplicado a distancia"
    ],
    ans: 2,
    exp: "Los CUESTIONARIOS alcanzan a muchas personas dispersas geográficamente con bajo costo y rapidez. Las entrevistas dan profundidad pero son costosas por usuario; los talleres requieren reunir a todos en un mismo lugar."
  },
  {
    id: "a1-14", sub: "1.2",
    base: "En una sesión de priorización MoSCoW, el equipo evalúa un requerimiento con la pregunta: «Si no incluimos esto, ¿el sistema pierde su valor para el lanzamiento?».",
    stem: "Ese requerimiento debe clasificarse como…",
    opts: [
      "Should have (debería tener)",
      "Must have (debe tener)",
      "Could have (podría tener)"
    ],
    ans: 1,
    exp: "MUST HAVE: indispensable, sin él el entregable carece de valor. SHOULD HAVE es importante pero admite alternativa temporal; COULD HAVE es deseable si sobra capacidad; WON'T HAVE queda fuera de esta entrega."
  },
  {
    id: "a1-15", sub: "1.2",
    base: "Durante la elicitation surge una función que nadie había solicitado: personalizar el tablero con inteligencia artificial. Si existe, encanta a los usuarios, pero su ausencia no genera quejas.",
    stem: "Según el modelo de Kano, esa función es un atributo…",
    opts: [
      "Básico (debe estar presente)",
      "Lineal (más es mejor)",
      "Atractivo/excitador (delighter)"
    ],
    ans: 2,
    exp: "Kano clasifica: BÁSICOS (su ausencia causa insatisfacción, pero su presencia no se agradece), LINEALES (a más, mayor satisfacción) y ATRACTIVOS/EXCITADORES (sorprenden y deleitan; nadie los espera, así que no se quejan si faltan)."
  },
  {
    id: "a1-16", sub: "1.2",
    stem: "¿Cuál de las siguientes historias de usuario sigue el formato correcto y completo?",
    opts: [
      "Como cajero, quiero registrar un pago en menos de 30 segundos, para reducir filas en ventanilla",
      "El sistema permitirá registrar pagos rápidamente desde la ventana de cobros",
      "Como sistema, quiero validar tarjetas, para cumplir mi trabajo de autorización"
    ],
    ans: 0,
    exp: "Formato: «COMO [rol], QUIERO [acción/meta], PARA [beneficio]». El rol debe ser humano (no «como sistema») y debe expresar el valor obtenido. «El sistema permitirá registrar pagos…» es un requerimiento tradicional sin rol ni beneficio, y «Como sistema, quiero validar tarjetas…» pone al software en el lugar del usuario."
  },
  {
    id: "a1-17", sub: "1.2",
    base: "El equipo construye maquetas en papel de las pantallas y las muestra a usuarios solo para explorar y ajustar los requerimientos de interfaz; después las descartará y desarrollará desde cero.",
    stem: "Este tipo de prototipo se denomina…",
    opts: [
      "Evolutivo, porque mejora hasta convertirse en producto",
      "Desechable de baja fidelidad, porque solo sirve para aprender y luego se abandona",
      "Vertical, porque implementa una capa completa del sistema"
    ],
    ans: 1,
    exp: "Los prototipos DESECHABLES (papel, mockups) se usan únicamente para clarificar y validar requisitos; su código/diseño no llega al producto. Los EVOLUTIVOS sí se refinan hasta volverse el sistema final."
  },
  {
    id: "a1-18", sub: "1.2",
    base: "El analista presenta los casos de uso ante clientes, usuarios y desarrolladores; los asistentes comentan errores, omisiones y malentendidos para corregirlos antes de aprobar la especificación.",
    stem: "Esta actividad corresponde a la VALIDACIÓN de requerimientos mediante…",
    opts: [
      "Un recorrido formal (walkthrough) con stakeholders",
      "Una prueba de aceptación automatizada",
      "Una matriz de trazabilidad"
    ],
    ans: 0,
    exp: "El WALKTHROUGH es una revisión guiada donde el autor recorre el documento y los participantes detectan problemas. La validación confirma que los requisitos describen el sistema que el cliente realmente necesita."
  },
  {
    id: "a1-19", sub: "1.2",
    base: "Ventas exige priorizar reportes, Almacén quiere primero el módulo de inventarios y Dirección pide acelerar ambos; las discusiones por correo no avanzan.",
    stem: "La técnica más efectiva para resolver este conflicto de prioridades es…",
    opts: [
      "Decidir unilateralmente el líder técnico",
      "Convocar un taller conjunto (JAD/workshop) facilitado para negociar consenso",
      "Priorizar alfabéticamente los requerimientos"
    ],
    ans: 1,
    exp: "Los talleres JAD (Joint Application Development) reúnen a los stakeholders en conflicto con un facilitador neutral para negociar y decidir en conjunto, evitando el estancamiento de cadenas de correos o decisiones impuestas."
  },
  {
    id: "a1-20", sub: "1.2",
    base: "Con cuatro requerimientos candidatos, el equipo estimó su valor de negocio y su esfuerzo:\n· A: alto valor / bajo esfuerzo\n· B: alto valor / alto esfuerzo\n· C: bajo valor / bajo esfuerzo\n· D: bajo valor / alto esfuerzo",
    stem: "Siguiendo la matriz valor-esfuerzo, ¿qué requerimiento debe implementarse PRIMERO?",
    opts: [
      "B, porque su impacto justifica todo el esfuerzo",
      "C, porque siempre conviene empezar por lo fácil",
      "A, porque entrega máximo valor con mínimo costo (quick win)"
    ],
    ans: 2,
    exp: "Los «quick wins» (alto valor/bajo esfuerzo) se implementan primero: máxima ganancia, mínimo riesgo. D (bajo/alto) es candidato a descartarse. B requiere planearlo y C puede hacerse como relleno."
  },

  /* ==================== 1.3 DOCUMENTACIÓN ==================== */
  {
    id: "a1-21", sub: "1.3",
    stem: "Sobre la Especificación de Requerimientos de Software (SRS) según ISO/IEC/IEEE 29148:2018, ¿cuál afirmación es CORRECTA?",
    opts: [
      "Incluye diagramas de arquitectura y decisiones de diseño interno",
      "Define de manera completa, consistente y verificable QUÉ debe hacer el sistema, no CÓMO construirlo",
      "Es un documento exclusivamente dirigido a programadores senior"
    ],
    ans: 1,
    exp: "La SRS establece los requerimientos (qué, no cómo): funciones, restricciones y atributos de calidad. El diseño (cómo) pertenece a documentos posteriores. Su audiencia incluye clientes, usuarios y desarrolladores. ISO/IEC/IEEE 29148:2018 reemplazó a IEEE 830 y además distingue las especificaciones de stakeholders (StRS), de sistema (SyRS) y de software (SRS)."
  },
  {
    id: "a1-22", sub: "1.3",
    base: "En el caso de uso «Retirar efectivo», además del flujo normal (insertar tarjeta → NIP → monto → dispensar), se documentó: «3a. Si el NIP es incorrecto en tres intentos, el sistema retiene la tarjeta y notifica al usuario».",
    stem: "El fragmento «3a.» representa un(a)…",
    opts: [
      "Precondición del caso de uso",
      "Flujo alternativo (excepción) respecto al flujo principal",
      "Actor secundario del caso de uso"
    ],
    ans: 1,
    exp: "Los FLUJOS ALTERNATIVOS documentan desviaciones del curso normal: errores del usuario, excepciones del sistema o caminos opcionales. La precondición es lo que debe ser cierto ANTES de iniciar el caso de uso."
  },
  {
    id: "a1-23", sub: "1.3",
    base: "En el caso de uso «Realizar compra» se anotó: «El usuario ha iniciado sesión y tiene artículos en el carrito».",
    stem: "Esta sección del caso de uso se denomina…",
    opts: [
      "Postcondición",
      "Flujo principal",
      "Precondición"
    ],
    ans: 2,
    exp: "La PRECONDICIÓN describe el estado que debe cumplirse antes de ejecutar el caso de uso. La postcondición es el estado garantizado después; el flujo principal es la secuencia exitosa de pasos."
  },
  {
    id: "a1-24", sub: "1.3",
    base: "En el diagrama de casos de uso de un cajero automático, «Retirar efectivo» y «Consultar saldo» SIEMPRE ejecutan internamente «Validar identidad». En cambio, «Imprimir comprobante» solo ocurre si el usuario lo solicita.",
    stem: "Las relaciones correctas son…",
    opts: [
      "«Validar identidad» con include desde ambos casos, e «Imprimir comprobante» con extend",
      "Ambas relaciones son extend porque son opcionales",
      "«Validar identidad» con generalización hacia los actores"
    ],
    ans: 0,
    exp: "INCLUDE: el caso base SIEMPRE incorpora el comportamiento incluido (obligatorio, factoriza conducta común). EXTEND: añade comportamiento OPCIONAL/condicional en puntos de extensión. La generalización aplica a herencia entre actores o casos, no aquí."
  },
  {
    id: "a1-25", sub: "1.3",
    stem: "¿Cuál es el propósito principal de la matriz de trazabilidad de requerimientos?",
    opts: [
      "Estimar el costo total del proyecto a partir de los requerimientos",
      "Vincular cada requerimiento con su origen, su diseño y sus casos de prueba, para verificar cobertura completa",
      "Ordenar los requerimientos por fecha de captura"
    ],
    ans: 1,
    exp: "La matriz de TRAZABILIDAD conecta requerimientos ↔ fuente ↔ diseño ↔ pruebas, permitiendo verificar que todos estén implementados y probados, y evaluando el impacto de cambios. No estima costos ni define prioridades."
  },
  {
    id: "a1-26", sub: "1.3",
    base: "En la SRS de un sistema logístico aparecen términos como «carta porte», «manifiesto de carga» y «consolidado», definidos en un apartado inicial.",
    stem: "Ese apartado corresponde al…",
    opts: [
      "Glosario de términos, para establecer un lenguaje común del dominio",
      "Apéndice de estándares de codificación",
      "Registro de decisiones de arquitectura"
    ],
    ans: 0,
    exp: "El GLOSARIO define los términos del dominio del problema para que clientes y desarrolladores interpreten igual la especificación, reduciendo ambigüedades semánticas."
  },
  {
    id: "a1-27", sub: "1.3",
    stem: "¿Cuál de los siguientes requerimientos está MEJOR redactado?",
    opts: [
      "El sistema manejará usuarios de forma eficiente",
      "Cuando el inventario de un producto baje de 10 unidades, el sistema enviará una alerta al encargado de compras en menos de 5 minutos",
      "Sería bueno contar con alertas cuando algo pase con el stock"
    ],
    ans: 1,
    exp: "Cumple completitud, precisión y verificabilidad: condición clara (stock < 10), acción definida (alerta), destinatario y límite temporal (≤ 5 min). Las otras opciones son vagas y no comprobables."
  },
  {
    id: "a1-28", sub: "1.3",
    stem: "En un proyecto se elaboran DOS documentos de requerimientos: uno para clientes/usuarios y otro para el equipo de desarrollo. ¿Cuál distinción es correcta?",
    opts: [
      "El de usuario usa lenguaje natural y gráficos comprensibles; el de sistema contiene definiciones detalladas y técnicas que servirán como contrato de construcción",
      "Ambos deben contener exactamente el mismo nivel de detalle técnico",
      "El de desarrollo se redacta antes de conocer los requerimientos del cliente"
    ],
    ans: 0,
    exp: "Requerimientos de USUARIO: abstractos, lenguaje natural, orientados a stakeholders. Requerimientos de SISTEMA: precisos, detallados y técnicos (estructuras, protocolos, reglas exactas); derivan de los primeros y guían el desarrollo."
  },
  {
    id: "a1-29", sub: "1.3",
    base: "Para la historia «Como comprador quiero filtrar productos por precio para encontrar ofertas rápido», el equipo acordó: mostrar filtro con rango mínimo-máximo, aplicar resultados en ≤ 2 s y permitir limpiar el filtro.",
    stem: "Ese acuerdo constituye los…",
    opts: [
      "Criterios de aceptación de la historia de usuario",
      "Casos de prueba de integración del sistema",
      "Requerimientos no funcionales globales"
    ],
    ans: 0,
    exp: "Los CRITERIOS DE ACEPTACIÓN definen condiciones testeables que deben cumplirse para considerar terminada la historia (Definition of Done a nivel historia) y suelen expresarse con escenarios Gherkin (dado/cuando/entonces)."
  },
  {
    id: "a1-30", sub: "1.3",
    stem: "¿Cuál es la secuencia correcta de las actividades del proceso de ingeniería de requisitos?",
    opts: [
      "Validación → Elicitación → Especificación → Análisis",
      "Elicitación → Análisis y negociación → Especificación → Validación (seguida de gestión continua)",
      "Especificación → Gestión → Elicitación → Validación"
    ],
    ans: 1,
    exp: "Flujo estándar (Sommerville/Pressman): ELICITAR (descubrir) → ANALIZAR/negociar (refinar, resolver conflictos, priorizar) → ESPECIFICAR (documentar) → VALIDAR (comprobar con stakeholders) → GESTIONAR (control de cambios, trazabilidad) durante todo el proyecto."
  }
];
