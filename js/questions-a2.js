/* PrepEGEL ISOFT — Banco de preguntas
   ÁREA 2: Diseño de Sistemas de Software (33 reactivos oficiales)
   Subáreas: 2.1 Diseño arquitectónico · 2.2 Módulos, componentes y datos · 2.3 Interfaces */
"use strict";

window.QB_A2 = [

  /* ==================== 2.1 DISEÑO ARQUITECTÓNICO ==================== */
  {
    id: "a2-01", sub: "2.1",
    base: "Un corporativo tiene sucursales en todo el país. El gerente busca implementar consultas remotas desde su oficina y manejar elementos de fragmentación y réplica de los almacenes de datos.",
    stem: "¿Qué arquitectura permite al sistema informático ser autónomo en cada sitio y cumplir los requerimientos indicados?",
    opts: [
      "Distribuida",
      "Cliente-servidor",
      "En capas"
    ],
    ans: 0,
    exp: "La arquitectura DISTRIBUIDA (con BD fragmentadas y replicadas) da autonomía a cada sitio manteniendo coherencia global. Cliente-servidor centraliza el servicio; las capas organizan responsabilidades internas, no sitios autónomos."
  },
  {
    id: "a2-02", sub: "2.1",
    base: "Se planeó desarrollar un software multimedia para la promoción turística de una localidad. La información debe estar estructurada y ser modificable, pero lo más relevante es la interfaz con el usuario, considerando que es posible migrar eventualmente a diferentes plataformas.",
    stem: "¿Qué arquitectura se requiere en este caso?",
    opts: [
      "Basada en componentes",
      "Modelo-vista-controlador (MVC)",
      "Orientada a objetos"
    ],
    ans: 1,
    exp: "Cuando la INTERFAZ domina y se requiere separar presentación (vista), lógica (controlador) y datos (modelo) para facilitar cambios y portabilidad, MVC es la respuesta. «Orientada a objetos» es un paradigma, no una arquitectura de aplicación."
  },
  {
    id: "a2-03", sub: "2.1",
    base: "Un sistema universitario está organizado en capa de presentación, capa de lógica de negocio y capa de acceso a datos. El equipo anuncia que migrará de PostgreSQL a otro gestor.",
    stem: "¿Cuál es la principal ventaja de la arquitectura en capas en este escenario?",
    opts: [
      "El cambio solo impacta la capa de acceso a datos sin afectar la presentación ni la lógica",
      "Elimina la necesidad de pruebas de integración",
      "Garantiza mayor velocidad de respuesta en todas las operaciones"
    ],
    ans: 0,
    exp: "El valor de las CAPAS es la separación de responsabilidades: los cambios quedan contenidos en una capa si las interfaces entre capas se respetan. No elimina pruebas ni garantiza rendimiento por sí sola."
  },
  {
    id: "a2-04", sub: "2.1",
    base: "Una plataforma de comercio electrónico con millones de usuarios decide descomponer su monolito en servicios pequeños e independientes (catálogo, pagos, envíos), cada uno desplegable por separado.",
    stem: "¿Cuál trade-off caracteriza esta decisión de microservicios?",
    opts: [
      "Permite escalar y desplegar cada servicio independientemente, pero aumenta la complejidad operativa (monitoreo, red, consistencia)",
      "Reduce drásticamente todos los costos sin contrapartidas técnicas",
      "Simplifica el modelo transaccional al eliminar las bases de datos distribuidas"
    ],
    ans: 0,
    exp: "MICROSERVICIOS: escalado independiente, despliegues ágiles y tolerancia a fallos parciales… a cambio de complejidad de operación, comunicación por red, consistencia eventual y gobernanza DevOps madura."
  },
  {
    id: "a2-05", sub: "2.1",
    base: "En una aplicación web de tres niveles, el usuario pregunta dónde reside la lógica de negocio (reglas de crédito, cálculos fiscales).",
    stem: "En la arquitectura cliente-servidor de tres capas, esa lógica se ubica…",
    opts: [
      "En el navegador del cliente para responder al instante",
      "En la capa intermedia (servidor de aplicación), entre presentación y datos",
      "Repartida indistintamente en todas las capas sin criterio"
    ],
    ans: 1,
    exp: "En 3-tier: PRESENTACIÓN (cliente), LÓGICA DE NEGOCIO (servidor de aplicación/capa intermedia) y DATOS (BD). Centralizar reglas en la capa intermedia evita duplicación y protege la lógica crítica del cliente."
  },
  {
    id: "a2-06", sub: "2.1",
    base: "Una app necesita que, cuando cambie el inventario, se disparen automáticamente actualizaciones al catálogo web, al sistema de facturación y a las notificaciones push, sin acoplar directamente esos módulos.",
    stem: "El estilo arquitectónico que mejor resuelve este escenario es…",
    opts: [
      "Orientado a eventos con publicación/suscripción",
      "Monolítico modular",
      "Pipes and filters"
    ],
    ans: 0,
    exp: "En ORIENTADA A EVENTOS, los productores publican eventos y los consumidores se suscriben: módulos totalmente desacoplados que reaccionan asincrónicamente. Pipes-and-filters procesa flujos secuenciales; el monolito acopla los módulos en un despliegue único."
  },
  {
    id: "a2-07", sub: "2.1",
    base: "Una startup de 5 desarrolladores debe lanzar un MVP en tres meses con requisitos aún inestables.",
    stem: "¿Cuál elección arquitectónica es la más razonable para iniciar?",
    opts: [
      "Microservices con malla de servicios desde el día uno",
      "Arquitectura orientada a microfrontends con múltiples equipos",
      "Monolito modular bien estructurado, que pueda evolucionar después"
    ],
    ans: 2,
    exp: "Con equipos pequeños y requisitos volátiles, un MONOLITO MODULAR maximiza velocidad y simplicidad; la modularidad interna deja abierta la extracción futura a servicios. Microservicios prematuros impondrían sobrecosto operativo injustificado."
  },
  {
    id: "a2-08", sub: "2.1",
    base: "Según el modelo «4+1» de Kruchten, existe una vista cuya función es integrar y validar a las otras cuatro mediante casos de uso.",
    stem: "Esa vista es la de…",
    opts: [
      "Escenarios (casos de uso)",
      "Desarrollo (organización del código)",
      "Física (despliegue)"
    ],
    ans: 0,
    exp: "Las «4» vistas son lógica (funcionalidad), procesos (concurrencia), desarrollo (organización software) y física/despliegue (hardware); el «+1» son los ESCENARIOS o casos de uso, que validan y atan todas las vistas."
  },
  {
    id: "a2-09", sub: "2.1",
    base: "Antes de comprometerse con una arquitectura, un equipo evalúa puntos donde decisiones afectan simultáneamente a dos atributos de calidad (p. ej., seguridad vs usabilidad), identificando riesgos y sensibilidades.",
    stem: "El método de evaluación arquitectónica descrito es…",
    opts: [
      "ATAM (Architecture Tradeoff Analysis Method)",
      "COCOMO II",
      "Planning poker"
    ],
    ans: 0,
    exp: "ATAM evalúa arquitecturas frente a escenarios de calidad, detectando TRADE-OFFS (decisiones que benefician un atributo y perjudican otro), puntos de sensibilidad y riesgos. COCOMO estima esfuerzo y planning poker estima historias."
  },
  {
    id: "a2-10", sub: "2.1",
    base: "Un pipeline de análisis de datos procesa registros en etapas encadenadas: extracción → limpieza → transformación → carga, donde la salida de cada etapa alimenta a la siguiente.",
    stem: "El estilo arquitectónico representado es…",
    opts: [
      "Repositorio centralizado",
      "Pipes and filters (tuberías y filtros)",
      "Peer-to-peer"
    ],
    ans: 1,
    exp: "PIPES AND FILTERS: componentes (filtros) que transforman datos conectados por conductos (pipes); ideal para transformaciones secuenciales (ETL, compiladores, streaming). Repositorio implica compartir un almacén central, no flujo lineal."
  },
  {
    id: "a2-11", sub: "2.1",
    base: "Varias herramientas de un IDE (editor, depurador, analizador) trabajan sobre un almacén central del proyecto; los cambios hechos por unas son visibles para las demás.",
    stem: "Este patrón corresponde al estilo…",
    opts: [
      "Basado en repositorio (centro de datos compartido)",
      "Cliente-servidor de dos niveles",
      "Capas rígidas con comunicación solo adyacente"
    ],
    ans: 0,
    exp: "En el estilo REPOSITORIO, componentes independientes comparten un almacén central de datos (IDE, sistemas CAD, BD activas). La comunicación ocurre a través del estado compartido, no por llamadas directas ni tuberías."
  },

  /* ============ 2.2 MÓDULOS, COMPONENTES Y DATOS ============ */
  {
    id: "a2-12", sub: "2.2",
    stem: "Al diseñar módulos, ¿cuál combinación describe el objetivo de calidad clásico?",
    opts: [
      "Alta cohesión dentro del módulo y bajo acoplamiento entre módulos",
      "Baja cohesión para repartir responsabilidades y alto acoplamiento para comunicarlas",
      "Cohesión y acoplamiento altos siempre, porque más interacciones implican mejor diseño"
    ],
    ans: 0,
    exp: "COHESIÓN alta = cada módulo concentra UNA responsabilidad clara; ACOPLAMIENTO bajo = dependencias mínimas entre módulos. Esto facilita entender, probar, reutilizar y cambiar el software sin efecto dominó."
  },
  {
    id: "a2-13", sub: "2.2",
    base: "Una aplicación necesita garantizar que exista una única instancia del objeto de configuración global, accesible desde cualquier punto del programa.",
    stem: "El patrón de creación apropiado es…",
    opts: [
      "Factory Method",
      "Singleton",
      "Builder"
    ],
    ans: 1,
    exp: "SINGLETON restringe a UNA instancia una clase y provee un punto de acceso global (configuraciones, pools de conexión, loggers). Factory delega la creación a subclases; Builder construye objetos complejos paso a paso."
  },
  {
    id: "a2-14", sub: "2.2",
    base: "Un sistema de paquetería soporta múltiples estrategias de envío (terrestre, aérea, exprés) que deben poder intercambiarse en tiempo de ejecución sin modificar el código del proceso de checkout.",
    stem: "El patrón de comportamiento indicado es…",
    opts: [
      "Strategy (estrategia)",
      "Observer",
      "Adapter"
    ],
    ans: 0,
    exp: "STRATEGY encapsula familias de ALGORITMOS intercambiables detrás de una interfaz común; el contexto los usa polimórficamente. Observer notifica cambios; Adapter adapta interfaces incompatibles."
  },
  {
    id: "a2-15", sub: "2.2",
    base: "En un tablero de monitoreo, cuando cambia el estado del servidor, varios widgets (gráficas, alertas, bitácora) deben actualizarse automáticamente.",
    stem: "El patrón que modela esta relación uno-a-muchos es…",
    opts: [
      "Observer (observador)",
      "Facade (fachada)",
      "Decorator"
    ],
    ans: 0,
    exp: "OBSERVER define suscripción: el sujeto notifica a sus observadores ante cambios (base de MVC, eventos, reactive). Facade simplifica subsistemas; Decorator añade responsabilidades dinámicamente."
  },
  {
    id: "a2-16", sub: "2.2",
    base: "El nuevo sistema debe usar una librería legada de impresión fiscal cuya interfaz no coincide con lo esperado por el resto de la aplicación.",
    stem: "Para integrarla sin reescribirla, el patrón adecuado es…",
    opts: [
      "Adapter (adaptador)",
      "Prototype",
      "Command"
    ],
    ans: 0,
    exp: "ADAPTER convierte la interfaz de una clase existente en otra que los clientes esperan, actuando como traductor entre sistemas incompatibles — solución estándar para integrar código legado."
  },
  {
    id: "a2-17", sub: "2.2",
    base: "Para generar un reporte PDF configurable, el equipo necesita ensamblar el objeto paso a paso: encabezado, tablas, gráficas y pie, con distintas combinaciones según el cliente.",
    stem: "El patrón de creación más apropiado es…",
    opts: [
      "Builder (constructor)",
      "Singleton",
      "State (estado)"
    ],
    ans: 0,
    exp: "BUILDER separa la CONSTRUCCIÓN de objetos complejos de su representación, permitiendo crear variantes paso a paso con el mismo proceso. State es de comportamiento (máquina de estados); Singleton no construye nada."
  },
  {
    id: "a2-18", sub: "2.2",
    base: "La clase GestorPedido calcula totales, guarda en la base de datos, envía correos y registra en el log. Los cambios en cualquier parte rompen las demás funciones.",
    stem: "Aplicando SOLID, el problema principal viola el principio de…",
    opts: [
      "Responsabilidad única (SRP)",
      "Sustitución de Liskov (LSP)",
      "Segregación de interfaces (ISP)"
    ],
    ans: 0,
    exp: "SRP: una clase debe tener UNA sola razón para cambiar. Aquí conviven cálculo, persistencia, mensajería y logging: hay que dividir en clases cohesionadas. LSP trata herencia sustituible e ISP interfaces pequeñas."
  },
  {
    id: "a2-19", sub: "2.2",
    base: "Cada vez que llega un nuevo tipo de descuento, el desarrollador modifica el método calcularTotal() agregando otro if. Los bugs reaparecen en casos ya probados.",
    stem: "El principio SOLID cuyo cumplimiento evitaría este problema es…",
    opts: [
      "Abierto-cerrado (OCP): abierto a extensión, cerrado a modificación",
      "Inversión de dependencias (DIP)",
      "Responsabilidad única (SRP)"
    ],
    ans: 0,
    exp: "OCP exige extender el comportamiento NUEVAS clases/estrategias (polimorfismo) sin tocar código probado. Con una interfaz Descuento y clases nuevas por tipo, calcularTotal() no volvería a modificarse."
  },
  {
    id: "a2-20", sub: "2.2",
    base: "Los módulos de alto nivel (ServicioFacturacion) instancian directamente clases concretas de bajo nivel (MySQLRepository), dificultando pruebas y migraciones.",
    stem: "La recomendación del principio de inversión de dependencias (DIP) es…",
    opts: [
      "Depender de abstracciones (interfaces) y no de implementaciones concretas",
      "Hacer que los módulos bajos invoquen a los altos directamente",
      "Eliminar las interfaces para reducir archivos"
    ],
    ans: 0,
    exp: "DIP: tanto módulos altos como bajos deben depender de ABSTRACCIONES. ServicioFacturacion usa la interfaz RepositorioPedidos; MySQL u otra implementación se inyecta — habilita pruebas con dobles y cambio de tecnología."
  },
  {
    id: "a2-21", sub: "2.2",
    base: "En un diagrama de clases UML, la clase Motor está unida a Automovil con un rombo RELLENO del lado de Automovil.",
    stem: "Esta relación indica que…",
    opts: [
      "Motor forma parte de Automovil con composición: su ciclo de vida depende del todo",
      "Automovil agrega Motores que existen independientemente (rombo vacío)",
      "Automovil hereda de Motor"
    ],
    ans: 0,
    exp: "Rombo RELLENO = COMPOSICIÓN (el parte no vive sin el todo: al destruirse Automovil, muere su Motor). Rombo VACÍO = AGREGACIÓN (relación «todo-parte» pero con vida independiente, p. ej., Curso–Alumno). Herencia se dibuja con triángulo."
  },
  {
    id: "a2-22", sub: "2.2",
    base: "Entre las clases Pedido y Producto aparece la multiplicidad «1..*» junto al extremo de Producto.",
    stem: "La lectura correcta es…",
    opts: [
      "Un pedido se relaciona con uno o muchos productos",
      "Muchos pedidos corresponden exactamente a un producto",
      "La relación es opcional y puede no existir"
    ],
    ans: 0,
    exp: "La multiplicidad junto a PRODUCTO describe cuántos productos puede tener UN pedido: «1..*» = uno o muchos. «0..*» sería cero o más (opcional); «1» exactamente uno."
  },
  {
    id: "a2-23", sub: "2.2",
    base: "Del diagrama E-R se obtiene la relación muchos-a-muchos entre Alumno y Curso («inscripción», con atributo fecha).",
    stem: "Al convertirlo a modelo relacional, la práctica correcta es…",
    opts: [
      "Crear una tabla Inscripcion(id_alumno, id_curso, fecha) con claves foráneas a ambas entidades",
      "Agregar el atributo fecha como columna en la tabla Alumno",
      "Fusionar Alumno y Curso en una sola tabla repetida"
    ],
    ans: 0,
    exp: "Toda relación N:M se materializa como TABLA INTERMEDIA (junction) cuyas FK apuntan a las PK de ambas entidades; los atributos propios de la relación (fecha) viven ahí. Guardarla en Alumno causaría redundancia y anomalías."
  },
  {
    id: "a2-24", sub: "2.2",
    base: "En la tabla CLIENTE(id_cliente, nombre, telefonos) la columna telefonos almacena valores como «555-1234, 555-5678, cel: 044...».",
    stem: "¿Qué incumplimiento de normalización presenta este diseño?",
    opts: [
      "Viola la primera forma normal (1FN) por almacenar grupos repetitivos/valores no atómicos",
      "Viola únicamente la tercera forma normal por dependencia transitiva",
      "Está correctamente normalizado; solo falta un índice"
    ],
    ans: 0,
    exp: "1FN exige valores ATÓMICOS y sin grupos repetitivos. La solución: tabla aparte TELEFONO(id_telefono, id_cliente, numero, tipo) referenciada por FK — eliminando la lista embebida."
  },
  {
    id: "a2-25", sub: "2.2",
    base: "Tabla VENTA(id_venta, fecha, id_producto, nombre_producto, precio_producto). Se observa que nombre_producto y precio_producto dependen únicamente de id_producto y no de id_venta.",
    stem: "Esta estructura no cumple la segunda forma normal (2FN) porque…",
    opts: [
      "Existen atributos no clave con dependencia parcial respecto a parte de la llave primaria",
      "Existen dependencias transitivas de atributos no clave entre sí",
      "La llave primaria contiene valores nulos"
    ],
    ans: 0,
    exp: "2FN: sin dependencias PARCIALES (atributos que dependen solo de una parte de una llave compuesta). Aquí (id_venta + id_producto) es llave, pero los datos del producto dependen solo de id_producto → extraer tabla PRODUCTO(id_producto, nombre, precio)."
  },
  {
    id: "a2-26", sub: "2.2",
    base: "Tabla CLIENTE(id_cliente, nombre, id_ciudad, nombre_ciudad). nombre_ciudad queda determinado por id_ciudad, no por el cliente.",
    stem: "Para llevarla a tercera forma normal (3FN) se debe…",
    opts: [
      "Crear CIUDAD(id_ciudad, nombre_ciudad) y dejar en CLIENTE solo id_ciudad como foránea",
      "Concatenar ciudad al nombre del cliente en una sola columna",
      "Eliminar la columna id_ciudad y repetir el nombre de la ciudad en cada fila"
    ],
    ans: 0,
    exp: "3FN prohíbe dependencias TRANSITIVAS: atributo no clave (nombre_ciudad) que depende de otro no clave (id_ciudad) y no de la PK. Solución: extraer entidad Ciudad y referenciarla por FK, eliminando redundancia y anomalías de actualización."
  },
  {
    id: "a2-27", sub: "2.2",
    base: "Un catálogo de ropa maneja productos con atributos muy variables (talla, color, material, impermeable, conectividad...) que cambian constantemente entre líneas y temporadas.",
    stem: "¿Qué base de datos NO relacional se ajusta mejor y por qué?",
    opts: [
      "Documental (p. ej., MongoDB), porque cada producto se representa como documento JSON flexible sin esquema rígido",
      "Clave-valor (p. ej., Redis), porque indexa textos largos mejor que SQL",
      "Relacional normalizada, porque las formas normales resuelven la variabilidad de atributos"
    ],
    ans: 0,
    exp: "Las BD DOCUMENTALES guardan documentos JSON autocontenidos con esquemas flexibles: perfecto para catálogos heterogéneos y cambiantes. Clave-valor solo recupera blobs por llave (ideal caché). Relacional exigiría alterar tablas constantemente."
  },

  /* ==================== 2.3 DISEÑO DE INTERFACES ==================== */
  {
    id: "a2-28", sub: "2.3",
    base: "Durante la carga de un archivo grande, la interfaz muestra una barra de progreso con porcentaje y tiempo estimado restante.",
    stem: "¿A qué heurística de Nielsen responde directamente esta decisión?",
    opts: [
      "Visibilidad del estado del sistema",
      "Estética y diseño minimalista",
      "Atajos para usuarios expertos"
    ],
    ans: 0,
    exp: "VISIBILIDAD DEL ESTADO DEL SISTEMA (#1 de Nielsen): mantener al usuario informado con retroalimentación apropiada y en tiempo real (barras de progreso, indicadores, confirmaciones) reduce incertidumbre y ansiedad."
  },
  {
    id: "a2-29", sub: "2.3",
    base: "En toda la aplicación, guardar usa el mismo icono de disquete azul y la misma ubicación en pantalla, mientras eliminar usa consistentemente el icono de bascura rojo.",
    stem: "La heurística aplicada es…",
    opts: [
      "Consistencia y estándares",
      "Control y libertad del usuario",
      "Reconocer antes que recordar"
    ],
    ans: 0,
    exp: "CONSISTENCIA Y ESTÁNDARES: seguir convenciones de plataforma y mantener uniformidad interna (colores, iconos, posiciones) evita que el usuario tenga que reinterpretar significados en cada pantalla."
  },
  {
    id: "a2-30", sub: "2.3",
    base: "El botón «Pagar» permanece deshabilitado hasta que el formulario cumple sus validaciones, y los campos muestran formato de ejemplo («AAAA-MM-DD») antes de escribir.",
    stem: "Ambas decisiones ilustran la heurística de…",
    opts: [
      "Prevención de errores",
      "Recuperación de errores",
      "Flexibilidad y eficiencia de uso"
    ],
    ans: 0,
    exp: "PREVENCIÓN DE ERRORES: diseñar para que el error NO ocurra (deshabilitar acciones inválidas, restricciones de entrada, formatos sugeridos). Recuperarse de errores actúa DESPUÉS (mensajes claros, deshacer)."
  },
  {
    id: "a2-31", sub: "2.3",
    base: "Al eliminar un proyecto, el sistema pide confirmación y ofrece «Deshacer» durante 30 segundos después de ejecutar la acción, mostrando además un mensaje claro de qué ocurrió.",
    stem: "El conjunto de decisiones corresponde principalmente a…",
    opts: [
      "Ayudar a reconocer, diagnosticar y recuperarse de errores",
      "Minimizar la carga de memoria del usuario",
      "Uso de lenguaje de los usuarios"
    ],
    ans: 0,
    exp: "Cuando el error ya es posible o ocurrió, la heurística exige mensajes explícitos del problema y caminos de recuperación (deshacer, corregir). Confirmación + undo + mensaje diagnóstico = recuperación robusta de errores."
  },
  {
    id: "a2-32", sub: "2.3",
    base: "En fases tempranas del diseño, el equipo elabora bocetos en papel y wireframes simples que muestra a usuarios para validar conceptos de navegación antes de invertir en desarrollo.",
    stem: "Sobre estos prototipos de BAJA fidelidad, ¿cuál afirmación es correcta?",
    opts: [
      "Son rápidos y baratos, ideales para explorar y descartar ideas temprano, aunque no capturan detalles visuales finales",
      "Deben implementarse con el framework definitivo para medir rendimiento real",
      "Solo sirven para presentarlo a inversionistas, nunca a usuarios"
    ],
    ans: 0,
    exp: "La baja fidelidad (papel/wireframe) optimiza VELOCIDAD y COSTO de iteración conceptual: se descarta lo que falla sin apego emocional ni gasto técnico. Los detalles finos y métricas de rendimiento llegan con prototipos de alta fidelidad."
  },
  {
    id: "a2-33", sub: "2.3",
    base: "Para cumplir WCAG, el equipo eleva el contraste texto/fondo a 4.5:1, añade texto alternativo a imágenes y garantiza navegación completa por teclado.",
    stem: "El objetivo transversal de estas prácticas es la…",
    opts: [
      "Accesibilidad para personas con discapacidad visual o motriz",
      "Internacionalización del contenido",
      "Optimización SEO del producto"
    ],
    ans: 0,
    exp: "Contraste suficiente, alt-text y navegabilidad por teclado son lineamientos WCAG de ACCESIBILIDAD (perceptible, operable). Internacionalización traduce idiomas/formatos; SEO posiciona en buscadores."
  },
  {
    id: "a2-34", sub: "2.3",
    base: "Para evaluar la nueva app de boletos, se pide a participantes: «Compra un boleto de CDMX a Guadalajara para el viernes próximo usando tu tarjeta de crédito», observando dónde fallan y midiendo tiempos.",
    stem: "Esta técnica de prueba de usabilidad se basa en…",
    opts: [
      "Escenarios de tarea realistas asignados a usuarios representativos",
      "Inspección formal del código fuente",
      "Encuestas de satisfacción posteriores al lanzamiento"
    ],
    ans: 0,
    exp: "Los ESCENARIOS DE TAREA (task scenarios) convierten objetivos de usuario en misiones concretas y realistas; observar completación, errores y tiempos revela problemas reales de usabilidad antes del lanzamiento."
  }
];
