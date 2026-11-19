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
      "Funcional, porque describe una operación que el sistema realiza",
      "No funcional de rendimiento, porque fija un tiempo máximo de respuesta",
      "Restricción de diseño, porque impone la tecnología que debe usarse"
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
      "Restricción impuesta que limita las soluciones posibles",
      "Requerimiento funcional del subsistema de persistencia de datos",
      "Atributo de calidad de flexibilidad entre plataformas"
    ],
    ans: 0,
    exp: "Las RESTRICCIONES son condiciones impuestas que limitan el margen de diseño (tecnología obligatoria, normativas, presupuesto, plazos). No describen comportamiento (funcional) ni una cualidad medible del producto como la flexibilidad (llamada «portabilidad» antes de ISO/IEC 25010:2023), sino un límite impuesto por la organización."
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
      "Funcional",
      "De dominio"
    ],
    ans: 2,
    exp: "Los requerimientos de DOMINIO surgen del ámbito de aplicación del sistema (medicina, banca, etc.), como leyes y regulaciones que deben cumplirse sin importar lo que pidan usuarios o desarrolladores. No describe un servicio que el sistema ofrezca (funcional) ni algo que pida un usuario. En la clasificación de Sommerville, estas exigencias legales también se cuentan entre los requerimientos no funcionales externos (legislativos); su origen es el dominio."
  },
  {
    id: "a1-07", sub: "1.1",
    base: "Se especifica: «Toda comunicación entre la aplicación móvil y el servidor deberá viajar cifrada mediante TLS 1.3».",
    stem: "Aunque menciona una acción técnica, este requerimiento se clasifica mejor como…",
    opts: [
      "Funcional, porque indica una acción que el sistema ejecuta",
      "No funcional de seguridad, porque protege la información en tránsito",
      "De interfaz externa, porque el servidor es otro sistema distinto"
    ],
    ans: 1,
    exp: "El objetivo real es proteger la información (confidencialidad/integridad): es un atributo de SEGURIDAD, no una función visible para el usuario. Es un ejemplo clásico de requerimiento no funcional disfrazado de acción técnica. El servidor es parte del mismo sistema, no un sistema externo."
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
    exp: "«Fácil de usar» es ambiguo y no cuantificable, por lo que no puede verificarse objetivamente (violación de la característica de VERIFICABILIDAD). Las otras dos opciones definen métricas concretas que pueden comprobarse con pruebas."
  },
  {
    id: "a1-09", sub: "1.1",
    base: "En la especificación de un ERP aparecen estos dos requerimientos:\n(R7) «Los reportes financieros deben generarse en línea, al momento de solicitarlos».\n(R12) «Por seguridad contable, los reportes financieros solo podrán procesarse en lotes nocturnos».",
    stem: "¿Qué problema de calidad presentan R7 y R12 juntos?",
    opts: [
      "Falta de trazabilidad hacia el origen de cada requerimiento",
      "Inconsistencia: R7 y R12 se contradicen y no pueden cumplirse juntos",
      "Falta de completitud, porque no se indica el actor que los pide"
    ],
    ans: 1,
    exp: "Dos requerimientos son INCONSISTENTES cuando no pueden satisfacerse simultáneamente. Aquí uno exige generación inmediata y otro solo nocturna: contradicción directa que debe resolverse mediante negociación con los stakeholders."
  },
  {
    id: "a1-10", sub: "1.1",
    base: "Un cliente solicita: «Quiero que el sistema sea rápido».",
    stem: "El principal problema de este requerimiento es que…",
    opts: [
      "Es ambiguo: no tiene una medida con la que pueda validarse ni probarse",
      "Es un requerimiento funcional que solo está mal redactado",
      "Es demasiado detallado para un documento dirigido al usuario"
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
  {
    id: "a1-31", sub: "1.1",
    base: "En la especificación de una tienda en línea aparece: «El sistema mostrará al cliente sus pedidos recientes en la pantalla de inicio».",
    stem: "Según ISO/IEC/IEEE 29148:2018, ¿qué característica de un buen requerimiento individual incumple principalmente?",
    opts: [
      "Factible, porque no se puede programar con la tecnología actual",
      "Correcto, porque contradice una regla del negocio de la tienda",
      "No ambiguo, porque «recientes» admite varias interpretaciones"
    ],
    ans: 2,
    exp: "Un requerimiento NO AMBIGUO solo puede interpretarse de una manera. «Recientes» puede significar los últimos 5 pedidos, los del último mes o los que aún no se entregan. Se corrige precisando: «mostrará los 10 pedidos más recientes de los últimos 90 días, ordenados por fecha descendente». Nada indica que sea imposible de construir ni que contradiga una regla del negocio."
  },
  {
    id: "a1-32", sub: "1.1",
    base: "Para una app de reparto se pide: «La app deberá calcular la ruta óptima global entre 5,000 puntos de entrega en menos de 10 milisegundos, en teléfonos de gama baja y sin conexión a internet». Se cuenta con tres meses y dos desarrolladores.",
    stem: "¿Qué característica de un buen requerimiento (ISO/IEC/IEEE 29148:2018) se ve comprometida?",
    opts: [
      "Factible: no puede cumplirse con las restricciones dadas",
      "Singular: mezcla varias funciones en una misma oración",
      "Necesario: no aporta valor a ningún interesado del sistema"
    ],
    ans: 0,
    exp: "FACTIBLE: el requerimiento puede lograrse con la tecnología, el presupuesto, el plazo y un riesgo aceptable. Encontrar la ruta óptima entre miles de puntos es un problema NP-difícil; exigirla en 10 ms, sin conexión y en hardware limitado es irreal. Se negocia una alternativa: una ruta aproximada, un tiempo mayor o el cálculo en un servidor. El requerimiento sí es necesario para el negocio y expresa una sola capacidad."
  },
  {
    id: "a1-33", sub: "1.1",
    base: "La SRS de un sistema de facturación dice: «El sistema calculará el IVA aplicando una tasa general del 15 %». La ley vigente para esas operaciones establece el 16 %.",
    stem: "Según ISO/IEC/IEEE 29148:2018, el defecto principal del requerimiento es que no es…",
    opts: [
      "Verificable, porque no puede probarse con un caso de prueba",
      "Correcto, porque no refleja con exactitud la necesidad real",
      "Completo, porque omite el formato de salida de la factura"
    ],
    ans: 1,
    exp: "CORRECTO: el requerimiento representa con exactitud la necesidad o la regla de su fuente (aquí, la ley fiscal). Es perfectamente verificable (se puede probar que calcula el 15 %), pero verifica algo equivocado. Por eso son esenciales la validación con expertos del dominio y la trazabilidad hacia la fuente. El formato de salida sería otro requerimiento."
  },
  {
    id: "a1-34", sub: "1.1",
    base: "En una SRS se lee: «El usuario podrá exportar el reporte de ventas en los formatos [POR DEFINIR]». El documento ya se envió para aprobación.",
    stem: "¿Qué característica de calidad del requerimiento incumple?",
    opts: [
      "No ambiguo, porque usa un término técnico sin definir",
      "Factible, porque exportar reportes requiere otra herramienta",
      "Completo, porque deja pendiente información necesaria"
    ],
    ans: 2,
    exp: "COMPLETO: el requerimiento no necesita más información para entenderse, construirse y probarse. Un «por definir» (TBD) indica que falta información; si se tolera de forma temporal, debe registrarse con un responsable y una fecha para resolverlo antes de fijar la línea base. No es ambiguo (lo que dice no admite varias lecturas) ni infactible."
  },
  {
    id: "a1-35", sub: "1.1",
    base: "Un requerimiento dice: «El sistema validará el RFC del cliente, generará la factura en PDF y la enviará por correo electrónico al cliente y al contador».",
    stem: "Según ISO/IEC/IEEE 29148:2018, ¿qué conviene hacer con él?",
    opts: [
      "Dividirlo, porque no es singular: expresa varias capacidades",
      "Eliminarlo, porque no es necesario para ningún interesado",
      "Volverlo más general para que tenga una sola interpretación"
    ],
    ans: 0,
    exp: "SINGULAR: cada requerimiento expresa UNA sola capacidad, característica o restricción. Al unir validar, generar y enviar, no se puede aprobar, rastrear ni probar cada parte por separado (¿qué pasa si dos se cumplen y una no?). Se separa en tres requerimientos, cada uno con su identificador. Hacerlo más general aumentaría la ambigüedad en lugar de reducirla."
  },
  {
    id: "a1-36", sub: "1.1",
    base: "El revisor ya comprobó cada requerimiento por separado. Ahora evalúa la especificación COMPLETA para ver si el conjunto de requerimientos, como un todo, es adecuado.",
    stem: "Según ISO/IEC/IEEE 29148:2018, ¿qué características se aplican al CONJUNTO de requerimientos?",
    opts: [
      "Singular, necesario, correcto, apropiado y conforme",
      "Completo, consistente, factible, comprensible y validable",
      "Modular, reutilizable, analizable, modificable y comprobable"
    ],
    ans: 1,
    exp: "ISO/IEC/IEEE 29148:2018 distingue las características del requerimiento INDIVIDUAL (necesario, apropiado, no ambiguo, completo, singular, factible, verificable, correcto y conforme) de las del CONJUNTO: COMPLETO (no falta nada), CONSISTENTE (sin contradicciones ni duplicados), FACTIBLE (todo junto puede lograrse dentro de las restricciones), COMPRENSIBLE (se entiende qué se espera del sistema) y VALIDABLE (se puede comprobar que satisface la necesidad). Modularidad, reusabilidad, analizabilidad y modificabilidad son subcaracterísticas de la mantenibilidad en ISO/IEC 25010."
  },
  {
    id: "a1-37", sub: "1.1",
    base: "Requerimiento original: «El sistema deberá ser seguro y responder rápidamente, en la medida de lo posible».",
    stem: "¿Cuál es la mejor reescritura según las recomendaciones de ISO/IEC/IEEE 29148:2018?",
    opts: [
      "El sistema deberá ser muy seguro y responder tan rápido como pueda",
      "El sistema deberá usar seguridad robusta y un tiempo de respuesta adecuado",
      "El sistema deberá bloquear la cuenta tras 5 intentos fallidos en 10 minutos"
    ],
    ans: 2,
    exp: "La reescritura útil es VERIFICABLE y SINGULAR: tiene una condición y un umbral medibles (5 intentos en 10 minutos). La norma recomienda evitar términos vagos o sin límite («seguro», «rápido», «robusto», «adecuado», «en la medida de lo posible», «etc.», «y/o»), porque no se pueden probar y abren huecos contractuales. La rapidez va en otro requerimiento con su propio umbral, por ejemplo: «el 95 % de las búsquedas responderá en 2 s o menos con 300 usuarios concurrentes»."
  },
  {
    id: "a1-38", sub: "1.1",
    base: "El área de arquitectura agrega a la especificación: «Ningún método tendrá una complejidad ciclomática mayor que 10 y el código duplicado no superará el 3 % del total».",
    stem: "Este planteamiento es un requerimiento de…",
    opts: [
      "Calidad interna, medida sobre el código y no en ejecución",
      "Calidad externa, medida al ejecutar el sistema con usuarios",
      "Calidad en uso, medida por la satisfacción de los usuarios"
    ],
    ans: 0,
    exp: "La CALIDAD INTERNA se mide sobre artefactos estáticos (código, diseño) sin ejecutar el sistema: complejidad, acoplamiento, duplicación, tamaño de los módulos. Suele apoyar la mantenibilidad. La calidad EXTERNA se observa al ejecutarlo (tiempo de respuesta, fallas) y la calidad EN USO, en el contexto real de los usuarios (eficacia, eficiencia, satisfacción, ausencia de riesgo). La interna influye en la externa y esta, en la calidad en uso."
  },
  {
    id: "a1-39", sub: "1.1",
    base: "Requerimientos de calidad de un sistema de pagos:\n(1) «El 99 % de las transacciones se completará sin error durante la prueba de carga de 24 horas».\n(2) «Cada módulo dependerá como máximo de otros tres módulos».",
    stem: "¿Cómo se clasifican estos requerimientos?",
    opts: [
      "(1) de calidad interna y (2) de calidad externa",
      "(1) de calidad externa y (2) de calidad interna",
      "Ambos son de calidad en uso del producto"
    ],
    ans: 1,
    exp: "(1) se mide EJECUTANDO el sistema (prueba de carga): calidad EXTERNA, en este caso de fiabilidad. (2) se mide analizando la estructura del código sin ejecutarlo: calidad INTERNA, ligada a la modularidad y la mantenibilidad. La calidad en uso se mide con usuarios reales en su contexto (eficacia, eficiencia, satisfacción)."
  },
  {
    id: "a1-40", sub: "1.1",
    base: "El acta del proyecto indica: «El sistema deberá estar en producción antes del 31 de marzo, con un presupuesto máximo de $900,000 y un equipo de cuatro personas, siguiendo la metodología institucional de la universidad».",
    stem: "Estos planteamientos se clasifican como…",
    opts: [
      "Requerimientos funcionales del sistema de la universidad",
      "Requerimientos no funcionales de rendimiento del producto",
      "Restricciones administrativas que limitan el desarrollo"
    ],
    ans: 2,
    exp: "Las RESTRICCIONES ADMINISTRATIVAS (también llamadas de proyecto u organizacionales) vienen de la organización y limitan el desarrollo: plazos, presupuesto, personal, metodología o estándares institucionales. No describen lo que hace el sistema (funcional) ni una cualidad medible del producto en ejecución (no funcional). Se documentan porque condicionan el alcance y las decisiones de diseño, y son entradas clave para la estimación y el estudio de viabilidad."
  },
  {
    id: "a1-41", sub: "1.1",
    base: "(1) «Por contrato, el sistema se desarrollará en Java 21 y usará PostgreSQL».\n(2) «Cada entrega deberá aprobarla el comité de la dependencia y documentarse con la plantilla oficial».",
    stem: "¿Cuál es la clasificación correcta?",
    opts: [
      "(1) restricción de diseño o técnica y (2) restricción administrativa",
      "(1) restricción administrativa y (2) requerimiento funcional",
      "(1) requerimiento funcional y (2) restricción de diseño o técnica"
    ],
    ans: 0,
    exp: "(1) limita la SOLUCIÓN técnica (lenguaje y gestor de base de datos impuestos): es una restricción de DISEÑO o de implementación. (2) limita el PROCESO del proyecto (aprobaciones, formato de los documentos): es una restricción ADMINISTRATIVA. Ninguna describe un servicio que el sistema ofrece a sus usuarios, así que no son requerimientos funcionales."
  },
  {
    id: "a1-42", sub: "1.1",
    base: "Para un sistema contable se especifica: «El sistema enviará cada factura al proveedor autorizado de certificación en formato XML CFDI 4.0 mediante su servicio web, y almacenará el folio fiscal que este devuelva».",
    stem: "Además de describir una función, ¿qué tipo de requerimiento es principalmente?",
    opts: [
      "De calidad interna sobre la estructura del código",
      "De interfaz externa con otro sistema",
      "Restricción administrativa del proyecto"
    ],
    ans: 1,
    exp: "Los requerimientos de INTERFAZ EXTERNA describen cómo se comunica el sistema con otros sistemas, dispositivos o usuarios: formato de los datos (XML CFDI 4.0), protocolo (servicio web) y datos que se intercambian (folio fiscal). ISO/IEC/IEEE 29148:2018 les dedica una sección propia en la SRS. No mide el código (calidad interna) ni limita el proceso del proyecto (restricción administrativa)."
  },
  {
    id: "a1-43", sub: "1.1",
    base: "En el documento de visión de una aseguradora se lee: «Reducir en 30 % el tiempo promedio de atención de siniestros durante el primer año de operación del sistema».",
    stem: "Según la clasificación por niveles (negocio, usuario, sistema), este es un requerimiento…",
    opts: [
      "De sistema, porque fija un valor numérico que se debe probar",
      "De usuario, porque describe una tarea que el ajustador realiza",
      "De negocio, porque expresa un objetivo de la organización"
    ],
    ans: 2,
    exp: "Los requerimientos de NEGOCIO expresan objetivos de la organización, es decir, por qué se construye el sistema: reducir costos o tiempos, aumentar ingresos. Los de USUARIO describen tareas que los usuarios deben poder hacer (p. ej., registrar un siniestro desde el celular) y los de SISTEMA detallan el comportamiento del software. Tener un número no lo vuelve de sistema: la meta del 30 % se mide en la operación del negocio, no con una prueba del software."
  },

  /* ====== 1.2 OBTENCIÓN, ANÁLISIS, PRIORIZACIÓN Y VALIDACIÓN ====== */
  {
    id: "a1-12", sub: "1.2",
    base: "Un analista necesita entender cómo trabajan realmente los empleados de ventanilla, pues sospecha que describen su proceso de manera idealizada y omiten pasos informales.",
    stem: "La técnica más adecuada para descubrir el proceso real es…",
    opts: [
      "La observación directa del trabajo en sitio",
      "Un cuestionario enviado por correo a los empleados",
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
    base: "Durante la obtención de requerimientos surge una función que nadie había solicitado: personalizar el tablero con inteligencia artificial. Si existe, encanta a los usuarios, pero su ausencia no genera quejas.",
    stem: "Según el modelo de Kano, esa función es un atributo…",
    opts: [
      "Básico (debe estar presente)",
      "Lineal o de desempeño (más es mejor)",
      "Atractivo/excitador (delighter)"
    ],
    ans: 2,
    exp: "Kano clasifica: BÁSICOS (su ausencia causa insatisfacción, pero su presencia no se agradece), LINEALES (a más, mayor satisfacción) y ATRACTIVOS/EXCITADORES (sorprenden y deleitan; nadie los espera, así que no se quejan si faltan)."
  },
  {
    id: "a1-16", sub: "1.2",
    stem: "¿Cuál de las siguientes historias de usuario sigue el formato correcto y completo?",
    opts: [
      "Como cajero, quiero registrar un pago en 30 segundos, para reducir filas",
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
      "Evolutivo, porque se refina hasta convertirse en el producto final",
      "Desechable de baja fidelidad: solo sirve para aprender y se abandona",
      "Vertical, porque implementa completa una funcionalidad del sistema"
    ],
    ans: 1,
    exp: "Los prototipos DESECHABLES (papel, mockups) se usan únicamente para clarificar y validar requisitos; su código/diseño no llega al producto. Los EVOLUTIVOS sí se refinan hasta volverse el sistema final. Un prototipo VERTICAL implementa a fondo una funcionalidad (todas sus capas), cosa que una maqueta en papel no hace."
  },
  {
    id: "a1-18", sub: "1.2",
    base: "El analista presenta los casos de uso ante clientes, usuarios y desarrolladores; los asistentes comentan errores, omisiones y malentendidos para corregirlos antes de aprobar la especificación.",
    stem: "Esta actividad corresponde a la VALIDACIÓN de requerimientos mediante…",
    opts: [
      "Una revisión guiada (walkthrough) con stakeholders",
      "Una prueba de aceptación automatizada",
      "Una matriz de trazabilidad hacia las pruebas"
    ],
    ans: 0,
    exp: "El WALKTHROUGH es una revisión guiada e informal: el autor recorre el documento y los participantes señalan errores, omisiones y malentendidos. La validación confirma que los requisitos describen el sistema que el cliente realmente necesita. Una prueba de aceptación se ejecuta sobre el software ya construido, y la matriz de trazabilidad vincula artefactos, pero ninguna de las dos reúne a los interesados para revisar la especificación."
  },
  {
    id: "a1-19", sub: "1.2",
    base: "Ventas exige priorizar reportes, Almacén quiere primero el módulo de inventarios y Dirección pide acelerar ambos; las discusiones por correo no avanzan.",
    stem: "La técnica más efectiva para resolver este conflicto de prioridades es…",
    opts: [
      "Que el líder técnico decida unilateralmente las prioridades",
      "Un taller conjunto (JAD) facilitado para negociar consenso",
      "Priorizar los requerimientos en orden alfabético de su nombre"
    ],
    ans: 1,
    exp: "Los talleres JAD (Joint Application Development) reúnen a los stakeholders en conflicto con un facilitador neutral para negociar y decidir en conjunto, evitando el estancamiento de cadenas de correos o decisiones impuestas."
  },
  {
    id: "a1-20", sub: "1.2",
    base: "Con cuatro requerimientos candidatos, el equipo estimó su valor de negocio y su esfuerzo:\n· A: alto valor / bajo esfuerzo\n· B: alto valor / alto esfuerzo\n· C: bajo valor / bajo esfuerzo\n· D: bajo valor / alto esfuerzo",
    stem: "Siguiendo la matriz valor-esfuerzo, ¿qué requerimiento debe implementarse PRIMERO?",
    opts: [
      "B, porque su alto impacto justifica todo el esfuerzo",
      "C, porque siempre conviene empezar por lo más fácil",
      "A, porque da el máximo valor con el mínimo esfuerzo"
    ],
    ans: 2,
    exp: "Los «quick wins» (alto valor/bajo esfuerzo) se implementan primero: máxima ganancia, mínimo riesgo. D (bajo/alto) es candidato a descartarse. B requiere planearlo y C puede hacerse como relleno."
  },
  {
    id: "a1-44", sub: "1.2",
    base: "Para priorizar 5 requerimientos, el equipo compara cada par con una escala de 1 a 9 (de «igual de importante» a «extremadamente más importante»), calcula los pesos con la matriz resultante y obtiene una razón de consistencia (CR) de 0.21.",
    stem: "En el Proceso Analítico Jerárquico (AHP), ¿qué procede?",
    opts: [
      "Revisar los juicios, porque un CR mayor que 0.10 indica incoherencia",
      "Aceptar los pesos, porque un CR menor que 0.50 se considera aceptable",
      "Agregar requerimientos, porque el CR solo es válido con 10 elementos"
    ],
    ans: 0,
    exp: "AHP (Saaty) compara los elementos POR PARES con la escala de 1 a 9; con n elementos se hacen n(n−1)/2 comparaciones (10 para 5 requerimientos). De la matriz se obtienen los pesos relativos y una razón de consistencia: si CR > 0.10, los juicios son incoherentes (p. ej., A > B y B > C, pero C > A) y deben revisarse. Su ventaja es la precisión; su desventaja, que el número de comparaciones crece rápido con la cantidad de elementos."
  },
  {
    id: "a1-45", sub: "1.2",
    base: "Tres interesados reparten 100 puntos cada uno entre tres requerimientos:\n· Ventas: R1 = 50, R2 = 30, R3 = 20\n· Finanzas: R1 = 10, R2 = 60, R3 = 30\n· Operación: R1 = 30, R2 = 20, R3 = 50",
    stem: "Con la votación de 100 puntos, ¿cuál es el orden de prioridad?",
    opts: [
      "R1, R3 y R2, porque Ventas dio el mayor puntaje individual",
      "R2 (110), R3 (100) y R1 (90), según la suma de los puntos",
      "R3, R2 y R1, porque Operación es el área más afectada"
    ],
    ans: 1,
    exp: "En la VOTACIÓN DE 100 PUNTOS (cumulative voting o «método de los 100 dólares») cada interesado reparte un presupuesto fijo y se SUMAN los puntos: R1 = 50 + 10 + 30 = 90; R2 = 30 + 60 + 20 = 110; R3 = 20 + 30 + 50 = 100. Es sencilla y obliga a renunciar a algo, pero puede manipularse (cargar todos los puntos al favorito) y conviene usarla con pocos elementos. A diferencia de AHP, no compara por pares."
  },
  {
    id: "a1-46", sub: "1.2",
    base: "Una historia del backlog dice: «Como administradora, quiero gestionar toda la nómina de la empresa para pagar a tiempo». El equipo estima que le tomaría unos tres meses.",
    stem: "Según INVEST, ¿qué problema tiene y qué conviene hacer?",
    opts: [
      "No es negociable; hay que fijar todos los detalles por contrato",
      "No es valiosa; hay que reescribirla desde el punto de vista técnico",
      "No es pequeña; hay que dividirla para que quepa en un sprint"
    ],
    ans: 2,
    exp: "INVEST: Independiente, Negociable, Valiosa, Estimable, pequeña (Small) y Testeable. Una historia de meses es una ÉPICA: se divide (por pasos del flujo, reglas de negocio, tipos de empleado, etc.) en historias que el equipo pueda terminar en un sprint. Sí aporta valor y es negociable; fijar todo por contrato iría contra la negociación, y reescribirla en términos técnicos le quitaría valor para el usuario."
  },
  {
    id: "a1-47", sub: "1.2",
    base: "El equipo pega en la pared, de izquierda a derecha, las actividades del usuario en el orden en que las realiza (buscar producto → comparar → pagar → rastrear envío). Debajo de cada una coloca historias ordenadas por importancia y traza líneas horizontales para definir entregas.",
    stem: "La técnica y el propósito de las líneas horizontales son…",
    opts: [
      "User story mapping; cada franja define una entrega o versión",
      "Tablero Kanban; cada franja limita el trabajo en proceso",
      "Mapa de empatía; cada franja agrupa lo que el usuario siente"
    ],
    ans: 0,
    exp: "USER STORY MAPPING (Jeff Patton): la «columna vertebral» (backbone) muestra las actividades del usuario en orden narrativo; debajo, las historias se ordenan verticalmente por prioridad. Las líneas horizontales cortan FRANJAS de entrega: la primera suele ser el producto mínimo viable o «esqueleto andante», que recorre todo el flujo de forma básica. Evita el backlog plano, que pierde la visión del recorrido completo del usuario."
  },
  {
    id: "a1-48", sub: "1.2",
    base: "Conteo de puntos de función (pesos de complejidad media):\n· 6 entradas externas (EI, peso 4)\n· 4 salidas externas (EO, peso 5)\n· 3 consultas externas (EQ, peso 4)\n· 2 archivos lógicos internos (ILF, peso 10)\n· 1 archivo de interfaz externa (EIF, peso 7)\nLa suma de los 14 factores de ajuste (TDI) es 40, y VAF = 0.65 + 0.01 × TDI.",
    stem: "¿Cuántos puntos de función ajustados se obtienen, aproximadamente?",
    opts: [
      "Unos 83 puntos de función",
      "Unos 87 puntos de función",
      "Unos 54 puntos de función"
    ],
    ans: 1,
    exp: "Sin ajustar: 6×4 + 4×5 + 3×4 + 2×10 + 1×7 = 24 + 20 + 12 + 20 + 7 = 83 PF. Factor de ajuste: VAF = 0.65 + 0.01 × 40 = 1.05. Ajustados: 83 × 1.05 ≈ 87 PF. 83 omite el ajuste y 54 usa solo 0.65 sin sumar el TDI. Los puntos de función miden el tamaño FUNCIONAL desde la visión del usuario, sin depender del lenguaje; después se convierten en esfuerzo con datos históricos (horas por PF) o en KLOC para COCOMO. En la versión actual del método de IFPUG el ajuste es opcional."
  },
  {
    id: "a1-49", sub: "1.2",
    base: "Un sistema de nómina guarda y actualiza su catálogo de empleados. Además, solo consulta, sin modificarlo, el catálogo de centros de costo que mantiene el ERP de contabilidad.",
    stem: "En el análisis de puntos de función, esos dos grupos de datos se clasifican como…",
    opts: [
      "Empleados = EIF y centros de costo = ILF",
      "Ambos son entradas externas (EI)",
      "Empleados = ILF y centros de costo = EIF"
    ],
    ans: 2,
    exp: "Un ARCHIVO LÓGICO INTERNO (ILF) es un grupo de datos que la aplicación MANTIENE (crea, actualiza, borra) dentro de su frontera: el catálogo de empleados. Un ARCHIVO DE INTERFAZ EXTERNA (EIF) es un grupo de datos que la aplicación solo REFERENCIA y que mantiene otra aplicación: los centros de costo del ERP. Las entradas externas (EI) son transacciones, no grupos de datos; por ejemplo, la pantalla de alta de un empleado."
  },
  {
    id: "a1-50", sub: "1.2",
    base: "Puntos de casos de uso (Karner):\n· Actores: 2 simples (peso 1) y 2 complejos (peso 3)\n· Casos de uso: 5 simples (peso 5), 4 medios (peso 10) y 1 complejo (peso 15)\n· Factor técnico TCF = 1.0 y factor ambiental ECF = 0.9\nUCP = (UAW + UUCW) × TCF × ECF",
    stem: "¿Cuántos puntos de casos de uso resultan y qué esfuerzo implican a 20 horas por punto?",
    opts: [
      "Unos 79 UCP, cerca de 1,580 horas",
      "Unos 88 UCP, cerca de 1,760 horas",
      "Unos 72 UCP, cerca de 1,440 horas"
    ],
    ans: 0,
    exp: "UAW (actores) = 2×1 + 2×3 = 8. UUCW (casos de uso) = 5×5 + 4×10 + 1×15 = 80. UUCP = 8 + 80 = 88. UCP = 88 × 1.0 × 0.9 ≈ 79.2. Esfuerzo ≈ 79.2 × 20 ≈ 1,584 horas. 88 omite los factores y 72 olvida sumar los actores. Los casos de uso se clasifican por número de transacciones (simple ≤ 3, medio 4 a 7, complejo > 7); las 20 horas por UCP son la propuesta original de Karner y conviene calibrarlas con datos propios."
  },
  {
    id: "a1-51", sub: "1.2",
    base: "Un portal universitario tiene más de 200 páginas y los alumnos no encuentran los trámites. El equipo UX entrega tarjetas con los nombres de los contenidos a 15 alumnos y les pide agruparlas y ponerle nombre a cada grupo como les parezca lógico.",
    stem: "El método de investigación UX aplicado y su propósito son…",
    opts: [
      "Prueba A/B, para comparar dos diseños con tráfico real",
      "Card sorting abierto, para descubrir su modelo mental",
      "Encuesta de satisfacción, para medir la experiencia actual"
    ],
    ans: 1,
    exp: "CARD SORTING: los usuarios agrupan tarjetas de contenido. En el ABIERTO también crean y nombran las categorías (revela su modelo mental); en el CERRADO acomodan las tarjetas en categorías predefinidas (valida una estructura). Sirve para diseñar la ARQUITECTURA DE INFORMACIÓN y los menús, y después suele validarse con tree testing. Una prueba A/B compara variantes ya construidas y una encuesta mide opiniones, no cómo organizan los usuarios la información."
  },
  {
    id: "a1-52", sub: "1.2",
    base: "Con un prototipo navegable, una facilitadora pide a cinco usuarios representativos realizar tareas concretas (p. ej., «renueva tu credencial») mientras dicen en voz alta lo que piensan; ella observa sin ayudar y anota dónde se atoran.",
    stem: "Este método es…",
    opts: [
      "Un grupo focal, que reúne opiniones de usuarios en conversación",
      "Una entrevista estructurada, con preguntas cerradas y fijas",
      "Una prueba de usabilidad con protocolo de pensar en voz alta"
    ],
    ans: 2,
    exp: "PRUEBA DE USABILIDAD: usuarios reales realizan TAREAS con el producto o un prototipo mientras se observa su comportamiento; con el protocolo de PENSAR EN VOZ ALTA (think-aloud) expresan sus expectativas y dudas. Según Nielsen, unos 5 usuarios por ronda descubren la mayoría de los problemas, y conviene hacer varias rondas cortas. Un grupo focal recoge OPINIONES (lo que la gente dice, no lo que hace) y una entrevista estructurada no observa el uso real del producto."
  },

  /* ==================== 1.3 DOCUMENTACIÓN ==================== */
  {
    id: "a1-21", sub: "1.3",
    stem: "Sobre la Especificación de Requerimientos de Software (SRS) según ISO/IEC/IEEE 29148:2018, ¿cuál afirmación es CORRECTA?",
    opts: [
      "Incluye diagramas de arquitectura y decisiones de diseño interno",
      "Define de forma verificable QUÉ debe hacer el sistema, no CÓMO",
      "Está dirigida exclusivamente a los programadores senior del equipo"
    ],
    ans: 1,
    exp: "La SRS establece los requerimientos (qué, no cómo): funciones, restricciones y atributos de calidad. El diseño (cómo) pertenece a documentos posteriores. Su audiencia incluye clientes, usuarios y desarrolladores. ISO/IEC/IEEE 29148:2018 reemplazó a IEEE 830 y además distingue las especificaciones de stakeholders (StRS), de sistema (SyRS) y de software (SRS)."
  },
  {
    id: "a1-22", sub: "1.3",
    base: "En el caso de uso «Retirar efectivo», además del flujo normal (insertar tarjeta → NIP → monto → dispensar), se documentó: «3a. Si el NIP es incorrecto en tres intentos, el sistema retiene la tarjeta y notifica al usuario».",
    stem: "El fragmento «3a.» representa un(a)…",
    opts: [
      "Precondición del caso de uso «Retirar efectivo»",
      "Flujo alternativo (excepción) respecto al flujo principal",
      "Actor secundario que participa en este caso de uso"
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
      "«Validar identidad» con include desde ambos, e «Imprimir comprobante» con extend",
      "Ambas con extend, porque las dos se ejecutan solo cuando el usuario lo pide",
      "«Validar identidad» como generalización de los dos casos de uso"
    ],
    ans: 0,
    exp: "INCLUDE: el caso base SIEMPRE incorpora el comportamiento incluido (obligatorio, factoriza conducta común). EXTEND: añade comportamiento OPCIONAL/condicional en puntos de extensión. La generalización aplica a herencia entre actores o casos, no aquí."
  },
  {
    id: "a1-25", sub: "1.3",
    stem: "¿Cuál es el propósito principal de la matriz de trazabilidad de requerimientos?",
    opts: [
      "Estimar el costo total del proyecto a partir de los requerimientos",
      "Vincular cada requerimiento con su origen, su diseño y sus casos de prueba",
      "Ordenar los requerimientos por la fecha en que fueron capturados"
    ],
    ans: 1,
    exp: "La matriz de TRAZABILIDAD conecta requerimientos ↔ fuente ↔ diseño ↔ pruebas, permitiendo verificar que todos estén implementados y probados, y evaluando el impacto de cambios. No estima costos ni define prioridades."
  },
  {
    id: "a1-26", sub: "1.3",
    base: "En la SRS de un sistema logístico aparecen términos como «carta porte», «manifiesto de carga» y «consolidado», definidos en un apartado inicial.",
    stem: "Ese apartado corresponde al…",
    opts: [
      "Glosario de términos, con el lenguaje común del dominio",
      "Apéndice de estándares de codificación del equipo",
      "Registro de decisiones de arquitectura del sistema"
    ],
    ans: 0,
    exp: "El GLOSARIO define los términos del dominio del problema para que clientes y desarrolladores interpreten igual la especificación, reduciendo ambigüedades semánticas."
  },
  {
    id: "a1-27", sub: "1.3",
    stem: "¿Cuál de los siguientes requerimientos está MEJOR redactado?",
    opts: [
      "El sistema manejará a los usuarios y sus inventarios de forma eficiente y oportuna en todo momento",
      "Si el stock de un producto baja de 10 unidades, el sistema alertará a compras en menos de 5 minutos",
      "Sería bueno contar con alertas automáticas cuando pase algo importante con el stock de los productos"
    ],
    ans: 1,
    exp: "Cumple completitud, precisión y verificabilidad: condición clara (stock < 10), acción definida (alerta), destinatario (compras) y límite temporal (≤ 5 min). Las otras opciones son largas pero vagas: «eficiente y oportuna» o «algo importante» no se pueden comprobar."
  },
  {
    id: "a1-28", sub: "1.3",
    stem: "En un proyecto se elaboran DOS documentos de requerimientos: uno para clientes/usuarios y otro para el equipo de desarrollo. ¿Cuál distinción es correcta?",
    opts: [
      "El de usuario usa lenguaje natural; el de sistema es técnico y sirve de contrato",
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
      "Casos de prueba de integración entre módulos del sistema",
      "Requerimientos no funcionales globales del sistema"
    ],
    ans: 0,
    exp: "Los CRITERIOS DE ACEPTACIÓN son condiciones verificables específicas de cada historia que deben cumplirse para aceptarla, y suelen expresarse con escenarios Gherkin (dado/cuando/entonces). No son lo mismo que la Definición de Terminado (Definition of Done): esa es un estándar común que se aplica a todo el Incremento, sin importar la historia."
  },
  {
    id: "a1-30", sub: "1.3",
    stem: "¿Cuál es la secuencia correcta de las actividades del proceso de ingeniería de requisitos?",
    opts: [
      "Validación → Elicitación → Especificación → Análisis",
      "Elicitación → Análisis → Especificación → Validación",
      "Especificación → Gestión → Elicitación → Validación"
    ],
    ans: 1,
    exp: "Flujo estándar (Sommerville/Pressman): ELICITAR (descubrir) → ANALIZAR/negociar (refinar, resolver conflictos, priorizar) → ESPECIFICAR (documentar) → VALIDAR (comprobar con stakeholders) → GESTIONAR (control de cambios, trazabilidad) durante todo el proyecto."
  },
  {
    id: "a1-53", sub: "1.3",
    base: "En el diagrama de requerimientos SysML de un dron de reparto se relacionan tres elementos: el requerimiento «Autonomía ≥ 40 min», el bloque «Batería LiPo 6S», que lo cumple, y el caso de prueba «Vuelo continuo con carga de 2 kg», que lo comprueba.",
    stem: "¿Qué estereotipos de relación corresponden al bloque y al caso de prueba?",
    opts: [
      "«satisfy» para el bloque y «verify» para el caso de prueba",
      "«verify» para el bloque y «satisfy» para el caso de prueba",
      "«deriveReqt» para el bloque y «refine» para el caso de prueba"
    ],
    ans: 0,
    exp: "En SysML, «satisfy» indica que un elemento de diseño (un bloque) CUMPLE el requerimiento; «verify», que un caso de prueba lo COMPRUEBA; «deriveReqt», que un requerimiento se DERIVA de otro (p. ej., la capacidad de la batería derivada de la autonomía); «refine», que otro elemento (como un caso de uso) lo detalla; y «trace» es una relación general de rastreo. Así, el diagrama de requerimientos da trazabilidad dentro del propio modelo."
  },
  {
    id: "a1-54", sub: "1.3",
    base: "Una empresa diseña una incubadora neonatal con sensores, actuadores, firmware y una app. Necesita modelar requerimientos, estructura física, ecuaciones de desempeño térmico y comportamiento, integrando hardware y software.",
    stem: "¿Qué lenguaje de modelado es más adecuado y qué aporta frente a UML?",
    opts: [
      "BPMN, porque modela procesos de negocio con compuertas",
      "SysML, que agrega diagramas de requerimientos y paramétricos",
      "UML puro, porque su diagrama de clases cubre el hardware"
    ],
    ans: 1,
    exp: "SysML es un perfil de UML para INGENIERÍA DE SISTEMAS (hardware, software, personas y procesos). Reutiliza y adapta diagramas de UML (bloques en lugar de clases: diagrama de definición de bloques y diagrama interno de bloques) y agrega dos propios: el diagrama de REQUERIMIENTOS y el PARAMÉTRICO (restricciones y ecuaciones de desempeño). Tiene nueve diagramas en total. BPMN modela procesos de negocio, no sistemas físicos."
  },
  {
    id: "a1-55", sub: "1.3",
    base: "Con Casos de Uso 2.0, el caso «Comprar boletos» tiene un flujo básico y varios alternativos (pagar con tarjeta, pagar con monedero, asiento no disponible). El equipo toma el flujo básico con pago con tarjeta, junto con sus casos de prueba, y lo planea para la siguiente iteración.",
    stem: "Esa unidad de trabajo se llama…",
    opts: [
      "Escenario de excepción del caso de uso",
      "Épica del Product Backlog",
      "Rebanada (slice) de caso de uso"
    ],
    ans: 2,
    exp: "En CASOS DE USO 2.0 (Jacobson, Spence y Bittner) un caso de uso se describe con una narrativa breve y se divide en REBANADAS (use-case slices): una o más HISTORIAS del caso de uso (recorridos por sus flujos) junto con sus CASOS DE PRUEBA, que aportan valor claro y caben en una iteración. Las rebanadas entran al backlog como las historias de usuario, pero conservan la visión completa que da el caso de uso. Una épica es una historia demasiado grande, y un escenario de excepción es solo un flujo alternativo."
  },
  {
    id: "a1-56", sub: "1.3",
    base: "Un equipo que usa Casos de Uso 2.0 ya implementó y probó el flujo básico de «Abrir cuenta», que funciona de inicio a fin, pero aún faltan los flujos alternativos que el negocio necesita para liberar.",
    stem: "¿En qué estado se encuentra el caso de uso?",
    opts: [
      "Historia más simple cumplida",
      "Estructura de historias entendida",
      "Todas las historias cumplidas"
    ],
    ans: 0,
    exp: "Casos de Uso 2.0 define estados para seguir el avance de cada caso de uso: meta establecida → estructura de historias entendida → historia más simple cumplida → suficientes historias cumplidas (ya se puede liberar) → todas las historias cumplidas. Aquí ya funciona el camino más simple de punta a punta, pero aún no hay suficientes historias para liberar. Las rebanadas tienen sus propios estados: delimitada, preparada, analizada, implementada y verificada."
  },
  {
    id: "a1-57", sub: "1.3",
    base: "Tras la revisión final, el cliente y el líder del proyecto firman la versión 1.0 de la SRS. A partir de ese momento, cualquier modificación debe solicitarse formalmente y aprobarse antes de aplicarse.",
    stem: "La versión 1.0 aprobada constituye…",
    opts: [
      "Un borrador de trabajo que el equipo ajusta libremente",
      "La línea base de requerimientos del proyecto",
      "El registro de lecciones aprendidas del proyecto"
    ],
    ans: 1,
    exp: "La LÍNEA BASE es el conjunto de requerimientos revisado y APROBADO que sirve de referencia para planear, estimar, diseñar y probar. Solo cambia mediante el CONTROL DE CAMBIOS formal, y cada cambio aprobado genera una nueva versión. Sin línea base no hay forma de distinguir un cambio de alcance de una aclaración, lo que facilita el crecimiento descontrolado del alcance (scope creep)."
  },
  {
    id: "a1-58", sub: "1.3",
    base: "Con la SRS ya en línea base, el área de ventas solicita que el sistema acepte pagos en dólares además de pesos.",
    stem: "Según un proceso de control de cambios, ¿qué debe hacerse antes de aprobar o rechazar la solicitud?",
    opts: [
      "Implementarla de inmediato y documentarla al cierre del sprint",
      "Rechazarla, porque la línea base ya no admite modificaciones",
      "Analizar su impacto en diseño, código, pruebas, costo y plazo"
    ],
    ans: 2,
    exp: "CONTROL DE CAMBIOS: 1) se registra la solicitud; 2) se ANALIZA EL IMPACTO (con la matriz de trazabilidad se ubican los requerimientos, componentes y pruebas afectados, y se estiman costo, plazo y riesgos); 3) un comité de control de cambios (CCB) o el responsable designado la aprueba, rechaza o pospone; 4) si se aprueba, se actualiza la línea base con una nueva versión y se avisa a los afectados. La línea base sí admite cambios, pero controlados."
  },
  {
    id: "a1-59", sub: "1.3",
    base: "Un auditor pregunta dos cosas sobre el requerimiento RF-27: (1) ¿qué interesado o documento lo originó? y (2) ¿qué componentes y casos de prueba lo implementan y verifican?",
    stem: "Cada pregunta se responde, respectivamente, con trazabilidad…",
    opts: [
      "Hacia atrás (al origen) y hacia adelante (al diseño y las pruebas)",
      "Hacia adelante (al origen) y hacia atrás (al diseño y las pruebas)",
      "Horizontal entre requerimientos y vertical entre interesados"
    ],
    ans: 0,
    exp: "La trazabilidad HACIA ATRÁS liga cada requerimiento con su ORIGEN (interesado, norma, objetivo de negocio, entrevista) y permite justificarlo o detectar requerimientos sin dueño. La trazabilidad HACIA ADELANTE lo liga con lo que se deriva de él (diseño, código, casos de prueba) y permite comprobar la cobertura y analizar el impacto de un cambio. Juntas forman la trazabilidad bidireccional."
  },
  {
    id: "a1-60", sub: "1.3",
    base: "En la herramienta de gestión de requerimientos, cada requerimiento registra identificador, origen, prioridad, versión y un campo que pasa por los valores «propuesto → aprobado → implementado → verificado» (o «rechazado» o «diferido»).",
    stem: "Ese campo y su utilidad principal son…",
    opts: [
      "La prioridad, que ordena el backlog por su valor",
      "El estado, que permite dar seguimiento al avance",
      "La versión, que identifica cada cambio aprobado"
    ],
    ans: 1,
    exp: "Los ATRIBUTOS de un requerimiento (identificador único, origen, prioridad, responsable, versión, ESTADO, entre otros) forman parte de la administración de requerimientos. El ESTADO permite saber en cualquier momento cuántos requerimientos están aprobados, implementados o verificados, y así medir el avance real del proyecto. La prioridad ordena el trabajo y la versión registra la historia de cambios, pero ninguna describe ese ciclo."
  },
  {
    id: "a1-61", sub: "1.3",
    base: "En un proyecto de gobierno, los cambios a la línea base los decide un grupo formado por el patrocinador, el líder del proyecto, el arquitecto y un representante de los usuarios, que se reúne cada semana para evaluar las solicitudes.",
    stem: "Ese grupo es el…",
    opts: [
      "Equipo de aseguramiento de calidad (SQA)",
      "Comité directivo de la cartera de proyectos",
      "Comité de control de cambios (CCB)"
    ],
    ans: 2,
    exp: "El COMITÉ DE CONTROL DE CAMBIOS (CCB, Change Control Board) evalúa las solicitudes de cambio con su análisis de impacto y decide si se aprueban, se rechazan o se posponen. Reúne a quienes conocen el negocio, el costo y la parte técnica. SQA vigila que se sigan los procesos, pero no decide el alcance; el comité de cartera prioriza proyectos completos, no cambios a una especificación."
  },
  {
    id: "a1-62", sub: "1.3",
    base: "Antes de definir el sistema, el analista elabora un documento que describe, en términos del negocio, las necesidades de los interesados: objetivos de la organización, procesos actuales, escenarios de operación y restricciones.",
    stem: "Según ISO/IEC/IEEE 29148:2018, ese documento es la…",
    opts: [
      "StRS: especificación de requerimientos de los interesados",
      "SyRS: especificación de requerimientos del sistema",
      "SRS: especificación de requerimientos del software"
    ],
    ans: 0,
    exp: "ISO/IEC/IEEE 29148:2018 describe tres especificaciones: la StRS (de los INTERESADOS o del negocio: necesidades, contexto, conceptos de operación), la SyRS (del SISTEMA completo, que puede incluir hardware, software y personas) y la SRS (del SOFTWARE: requerimientos funcionales, de desempeño, de interfaz y restricciones). Cada una se deriva de la anterior y debe poder rastrearse hacia ella."
  }
];
