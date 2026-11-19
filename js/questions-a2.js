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
  {
    id: "a2-35", sub: "2.1",
    base: "Para el sistema de inscripciones de una universidad se redacta: «Durante la semana de inscripciones, 2 000 alumnos envían al mismo tiempo su solicitud de horario; el módulo de inscripción las registra todas y el 95 % recibe confirmación en menos de 3 segundos».",
    stem: "En el modelo de seis partes de un escenario de atributo de calidad, «el 95 % recibe confirmación en menos de 3 segundos» corresponde a…",
    opts: [
      "El estímulo del escenario",
      "La medida de la respuesta",
      "El entorno de operación"
    ],
    ans: 1,
    exp: "Un escenario de atributo de calidad tiene seis partes: FUENTE (los alumnos), ESTÍMULO (el envío simultáneo de solicitudes), ENTORNO (la semana de inscripciones, con carga pico), ARTEFACTO (el módulo de inscripción), RESPUESTA (registrar y confirmar) y MEDIDA DE LA RESPUESTA (95 % en menos de 3 s). La medida es lo que vuelve verificable el requerimiento arquitectónico: sin ella, «debe ser rápido» no se puede comprobar."
  },
  {
    id: "a2-36", sub: "2.1",
    stem: "Al revisar los requerimientos de una plataforma de telemedicina, el arquitecto busca los arquitectónicamente significativos, es decir, los que condicionan la estructura del sistema. ¿Cuál lo es?",
    opts: [
      "Que el botón de agendar cita use el azul del logotipo institucional",
      "Que las videoconsultas sigan operando si cae un centro de datos",
      "Que el formulario de registro pida también la fecha de nacimiento"
    ],
    ans: 1,
    exp: "Un requerimiento ARQUITECTÓNICAMENTE SIGNIFICATIVO (ASR) tiene un efecto profundo en la arquitectura: exigir continuidad ante la caída de un centro de datos obliga a decisiones estructurales como redundancia geográfica, replicación y balanceo de carga. El color de un botón y un campo más en un formulario se resuelven dentro de un solo componente sin cambiar la estructura. Los ASR suelen venir de atributos de calidad y conviene expresarlos como escenarios medibles."
  },
  {
    id: "a2-37", sub: "2.1",
    base: "En un sistema de despacho de ambulancias, el servidor principal envía cada segundo una señal al monitor. Si faltan tres señales seguidas, toma el control un servidor de respaldo que ya procesaba las mismas entradas en paralelo.",
    stem: "¿Qué atributo de calidad atienden estas tácticas y cómo se llaman?",
    opts: [
      "Rendimiento, con introducción de concurrencia y caché de datos",
      "Seguridad, con detección de intrusos y autorización de actores",
      "Disponibilidad, con latido (heartbeat) y redundancia activa"
    ],
    ans: 2,
    exp: "Las TÁCTICAS son decisiones de diseño que controlan la respuesta de un atributo de calidad. Las de DISPONIBILIDAD se agrupan en detectar fallas (latido o heartbeat, ping/eco), recuperarse de ellas (redundancia activa o pasiva, repuesto) y prevenirlas. Un respaldo que ya procesa las mismas entradas es redundancia ACTIVA: la conmutación es casi inmediata. La concurrencia y la caché son tácticas de rendimiento; la detección de intrusos y la autorización, de seguridad."
  },
  {
    id: "a2-38", sub: "2.1",
    stem: "Relaciona cada táctica con el atributo de calidad que favorece principalmente: 1) guardar copias de los datos más consultados en una caché; 2) autenticar y autorizar a los actores; 3) colocar un intermediario entre dos módulos para reducir su acoplamiento.",
    opts: [
      "1 usabilidad · 2 disponibilidad · 3 rendimiento",
      "1 rendimiento · 2 seguridad · 3 modificabilidad",
      "1 modificabilidad · 2 seguridad · 3 usabilidad"
    ],
    ans: 1,
    exp: "La caché es una táctica de RENDIMIENTO (gestionar recursos): acerca los datos y reduce tiempos de acceso y carga. Autenticar y autorizar actores es una táctica de SEGURIDAD (resistir ataques). Un intermediario (una interfaz, un broker o una fachada) es una táctica de MODIFICABILIDAD: los cambios de un módulo ya no se propagan al otro. Saber qué atributo atiende cada táctica ayuda a justificar decisiones y a ver trade-offs: la caché, por ejemplo, agrega el problema de mantener los datos consistentes."
  },
  {
    id: "a2-39", sub: "2.1",
    base: "Un arquitecto documenta un sistema de control escolar con el modelo 4+1 de Kruchten y tiene cuatro inquietudes: 1) las clases y abstracciones clave del dominio (Alumno, Grupo, Calificación); 2) los procesos e hilos que atienden solicitudes en paralelo y cómo se sincronizan; 3) la organización del código en paquetes, bibliotecas y subsistemas por equipo; 4) los servidores donde se instala cada parte y la red que los une.",
    stem: "¿Qué vista corresponde a cada inquietud?",
    opts: [
      "1 desarrollo · 2 física · 3 lógica · 4 procesos",
      "1 lógica · 2 física · 3 procesos · 4 desarrollo",
      "1 lógica · 2 procesos · 3 desarrollo · 4 física"
    ],
    ans: 2,
    exp: "Vista LÓGICA: la funcionalidad que el sistema da al usuario (clases, objetos, sus relaciones). Vista de PROCESOS: concurrencia, procesos e hilos, sincronización, rendimiento y escalabilidad. Vista de DESARROLLO (o de implementación): organización estática del software en módulos, paquetes y capas, pensada para programadores y gestión de configuración. Vista FÍSICA (o de despliegue): cómo se asigna el software a los nodos de hardware y a la red. El «+1», los escenarios, une y valida las cuatro."
  },
  {
    id: "a2-40", sub: "2.1",
    base: "En una evaluación ATAM, el equipo arma una estructura que parte de «utilidad», se divide en atributos de calidad (rendimiento, seguridad…), después en refinamientos y termina en escenarios concretos calificados por su importancia para el negocio y su dificultad técnica (alta, media, baja).",
    stem: "¿Cómo se llama esta estructura y para qué sirve?",
    opts: [
      "Estructura de desglose del trabajo: divide el proyecto para estimar",
      "Árbol de utilidad: prioriza qué escenarios de calidad analizar",
      "Árbol de decisión: calcula el valor esperado de cada alternativa"
    ],
    ans: 1,
    exp: "En ATAM, el ÁRBOL DE UTILIDAD convierte las metas de negocio en escenarios de atributos de calidad concretos y los califica por importancia y dificultad; los que salen altos en ambas se analizan primero contra los enfoques arquitectónicos, para hallar riesgos, no-riesgos, puntos de sensibilidad y puntos de compromiso (trade-offs). La estructura de desglose del trabajo es de gestión de proyectos, y el árbol de decisión se usa para calcular el valor monetario esperado al analizar riesgos."
  },
  {
    id: "a2-41", sub: "2.1",
    base: "Con el enfoque Views and Beyond del SEI, un equipo prepara tres vistas: una muestra la descomposición del código en módulos y sus dependencias de uso; otra, los servicios en ejecución y los conectores por los que se comunican; la tercera, en qué servidores y contenedores se despliega cada servicio.",
    stem: "¿A qué tipo de vista pertenece cada una, en ese orden?",
    opts: [
      "Módulo · componente y conector · asignación",
      "Asignación · módulo · componente y conector",
      "Componente y conector · asignación · módulo"
    ],
    ans: 0,
    exp: "Views and Beyond agrupa las vistas en tres tipos: de MÓDULO (unidades de implementación estáticas: descomposición, usos, capas, generalización), de COMPONENTE Y CONECTOR (elementos en ejecución y cómo interactúan: servicios, clientes, colas) y de ASIGNACIÓN (relación del software con su entorno: despliegue, implementación, asignación de trabajo). El «Beyond» es la documentación que va más allá de las vistas: la guía de vistas, la relación entre ellas y la justificación de las decisiones."
  },
  {
    id: "a2-42", sub: "2.1",
    base: "Con el modelo C4, un equipo documenta una app de reservas. Ya tiene el diagrama de contexto, que muestra el sistema como una sola caja junto a sus usuarios y los sistemas externos (pasarela de pago, servicio de correo).",
    stem: "¿Qué muestra el siguiente nivel, el diagrama de contenedores?",
    opts: [
      "Las clases y métodos de cada módulo, como un diagrama de clases",
      "Las aplicaciones y almacenes de datos desplegables y cómo se comunican",
      "El calendario de entregas de cada equipo y quién responde por cada pieza"
    ],
    ans: 1,
    exp: "C4 tiene cuatro niveles de acercamiento: CONTEXTO (el sistema, las personas y los sistemas externos), CONTENEDORES (unidades que se ejecutan o despliegan por separado, como la app web, la app móvil, la API y la base de datos, con los protocolos entre ellas), COMPONENTES (las partes internas de un contenedor) y CÓDIGO (clases; es opcional). Un «contenedor» de C4 no es por fuerza un contenedor Docker. Las clases están en el cuarto nivel, y un calendario de entregas es gestión, no arquitectura."
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
    exp: "OCP exige extender el comportamiento con NUEVAS clases/estrategias (polimorfismo) sin tocar código probado. Con una interfaz Descuento y clases nuevas por tipo, calcularTotal() no volvería a modificarse."
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
  {
    id: "a2-51", sub: "2.2",
    base: "En una escuela, cada profesor da asesoría de una sola materia, y para cada materia un alumno tiene un solo asesor. La tabla ASESORIA(alumno, materia, profesor) tiene llave primaria (alumno, materia) y, además, se cumple profesor → materia.",
    stem: "¿Qué forma normal no cumple la tabla y por qué?",
    opts: [
      "La 1FN, porque la llave primaria está compuesta por dos columnas",
      "La FNBC, porque profesor determina materia sin ser superllave",
      "La 2FN, porque profesor depende de solo una parte de la llave"
    ],
    ans: 1,
    exp: "La FNBC (Boyce-Codd) exige que todo determinante sea superllave. La tabla sí está en 3FN, porque materia, el atributo determinado, forma parte de una llave candidata; pero profesor no es superllave y determina materia, así que viola la FNBC. La anomalía: si un profesor cambia de materia hay que actualizar varias filas. Se descompone en PROFESOR(profesor, materia) y ASESORIA(alumno, profesor). Una llave compuesta no viola la 1FN, y profesor depende de toda la llave (alumno, materia), no de una parte, así que no hay dependencia parcial."
  },
  {
    id: "a2-52", sub: "2.2",
    base: "El módulo Arranque() abre la conexión a la base de datos, limpia la carpeta de temporales, carga el idioma de la interfaz y pone en cero los contadores de estadísticas. Lo único que esas tareas tienen en común es que se ejecutan al iniciar la app.",
    stem: "¿Qué tipo de cohesión presenta el módulo y qué tan deseable es?",
    opts: [
      "Funcional; es el mejor tipo, porque todo sirve a un solo fin",
      "Temporal; es débil, porque agrupa tareas solo por su momento",
      "Secuencial; la salida de cada tarea es la entrada de la otra"
    ],
    ans: 1,
    exp: "De peor a mejor, los tipos de cohesión son: coincidental, lógica, temporal, procedimental, comunicacional, secuencial y funcional. La TEMPORAL agrupa elementos porque se ejecutan en el mismo momento (al iniciar, al cerrar), no porque estén relacionados; cambiar una tarea obliga a tocar un módulo lleno de responsabilidades ajenas. La funcional exige que todo contribuya a una sola tarea bien definida, y la secuencial, que la salida de un paso alimente al siguiente; aquí las tareas son independientes. Conviene que cada tarea viva en su propio módulo y que Arranque() solo las invoque."
  },
  {
    id: "a2-53", sub: "2.2",
    base: "La función imprimirReporte(datos, modo) recibe en modo un indicador: 1 para PDF, 2 para pantalla y 3 para enviar por correo. Según ese valor, la función decide internamente qué lógica ejecutar.",
    stem: "¿Qué tipo de acoplamiento hay entre quien llama y la función?",
    opts: [
      "De datos, porque solo se pasan los parámetros simples necesarios",
      "De contenido, porque el llamador modifica el código interno",
      "De control, porque se pasa una bandera que dirige su lógica"
    ],
    ans: 2,
    exp: "De peor a mejor, los tipos de acoplamiento son: de contenido, común (datos globales), externo, de control, estampado (se pasa una estructura completa) y de datos. En el de CONTROL un módulo pasa un indicador que decide el flujo interno del otro, de modo que el llamador «sabe» cómo funciona por dentro. Se mejora separando funciones (imprimirPDF, mostrar, enviarCorreo) o con polimorfismo (Strategy). El de datos sería pasar solo lo que la función procesa, sin dirigirla; el de contenido, que un módulo lea o cambie directamente el interior de otro."
  },
  {
    id: "a2-54", sub: "2.2",
    base: "Un blog guarda sus publicaciones en una base documental. Cada publicación casi siempre se muestra con sus comentarios (unas cuantas decenas), que nunca se consultan por separado. Los autores, en cambio, tienen un perfil propio que editan y que aparece en muchas pantallas.",
    stem: "¿Qué modelo de documentos es más adecuado?",
    opts: [
      "Incrustar los comentarios y referenciar al autor por su id",
      "Incrustar el perfil completo del autor en cada publicación",
      "Guardar los comentarios aparte y unirlos con $lookup al leer"
    ],
    ans: 0,
    exp: "En una base documental se modela según los patrones de acceso: lo que se lee junto se guarda junto. Los comentarios son pocos, se leen siempre con la publicación y no tienen vida propia, así que conviene INCRUSTARLOS (una sola lectura). El autor es un dato compartido que cambia, así que conviene REFERENCIARLO por su id; si se incrustara, al editar el perfil habría que actualizar cada publicación, con duplicación e inconsistencias. Guardar los comentarios aparte y unirlos en cada lectura imita el modelo relacional y pierde la ventaja. Si los comentarios fueran miles, sí convendría referenciarlos, para no rebasar el tamaño máximo del documento."
  },
  {
    id: "a2-55", sub: "2.2",
    base: "Una cadena de farmacias con sitios en Monterrey, Guadalajara y Mérida diseña su base de datos distribuida. Cada sucursal registra y consulta casi solo sus propias ventas; el catálogo de medicamentos cambia una vez por semana y todas las sucursales lo consultan a cada momento.",
    stem: "¿Qué diseño de fragmentación y replicación conviene?",
    opts: [
      "Fragmentar VENTAS por columnas y dejar el catálogo solo en el sitio central",
      "Replicar VENTAS completa en los tres sitios y fragmentar el catálogo por región",
      "Fragmentar VENTAS por sucursal (filas) y replicar el catálogo en cada sitio"
    ],
    ans: 2,
    exp: "Al diseñar la distribución, cada dato se ubica donde más se usa. VENTAS: cada sitio usa sus propias filas, así que conviene la fragmentación HORIZONTAL por sucursal, con acceso local y sin tráfico entre sitios. CATÁLOGO: se lee mucho en todos lados y casi no cambia, así que conviene REPLICARLO en cada sitio para consultarlo localmente; propagar la actualización semanal cuesta poco. Replicar las ventas multiplicaría las escrituras y la sincronización, y dejar el catálogo en un solo sitio haría que cada consulta viajara por la red y dependiera de ese sitio."
  },
  {
    id: "a2-56", sub: "2.2",
    base: "Un equipo necesita dos diagramas UML de su sistema de citas médicas. El primero debe mostrar las piezas reemplazables del software (Agenda, Notificaciones, Pagos) con las interfaces que ofrecen y las que requieren. El segundo, en qué servidores y dispositivos se instalan los archivos ejecutables (citas.war, app.apk) y cómo se conectan.",
    stem: "¿Qué diagramas son, en ese orden?",
    opts: [
      "De despliegue y de componentes",
      "De componentes y de despliegue",
      "De paquetes y de secuencia"
    ],
    ans: 1,
    exp: "El diagrama de COMPONENTES muestra partes modulares y reemplazables con sus interfaces provistas (notación de «bola») y requeridas (notación de «socket»), y las dependencias entre ellas. El diagrama de DESPLIEGUE muestra NODOS (dispositivos y entornos de ejecución, como un servidor de aplicaciones o un teléfono), los ARTEFACTOS instalados en ellos (.war, .apk, .jar) y las rutas de comunicación (p. ej., «HTTPS»). El de paquetes agrupa elementos del modelo y el de secuencia muestra mensajes en el tiempo."
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
    base: "En toda la aplicación, guardar usa el mismo icono de disquete azul y la misma ubicación en pantalla, mientras eliminar usa consistentemente el icono de basura rojo.",
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
  },
  {
    id: "a2-43", sub: "2.3",
    base: "Una app de finanzas personales mostraba «Error: MOV_GASTO violó la restricción FK_CAT». Tras un rediseño, el mensaje dice «Elige una categoría para este gasto» y los gastos se agrupan en «sobres», como los usuarios lo hacían antes en papel.",
    stem: "¿Qué heurística de Nielsen guía principalmente el rediseño?",
    opts: [
      "Prevención de errores antes de que ocurran",
      "Correspondencia entre el sistema y el mundo real",
      "Estética y diseño minimalista de la pantalla"
    ],
    ans: 1,
    exp: "CORRESPONDENCIA ENTRE EL SISTEMA Y EL MUNDO REAL: hablar el lenguaje del usuario, con palabras, conceptos y convenciones que ya conoce y en un orden natural, en lugar de términos internos como tablas o llaves foráneas. La metáfora de los «sobres» aprovecha un modelo mental familiar. No es prevención de errores, porque el cambio no impide el error, solo lo expresa en términos del usuario; y el minimalismo trata de quitar información irrelevante."
  },
  {
    id: "a2-44", sub: "2.3",
    base: "En un asistente de cinco pasos para contratar una póliza, el usuario puede volver al paso anterior sin perder lo capturado y tiene siempre a la vista un botón «Salir» que guarda un borrador.",
    stem: "¿Qué heurística atiende este diseño?",
    opts: [
      "Ayuda y documentación para el usuario",
      "Flexibilidad y eficiencia de uso",
      "Control y libertad del usuario"
    ],
    ans: 2,
    exp: "CONTROL Y LIBERTAD DEL USUARIO: las personas a menudo eligen una acción por error o cambian de opinión, y necesitan una «salida de emergencia» bien marcada para abandonar el estado no deseado sin un trámite largo: regresar, cancelar, salir, deshacer y rehacer. Aquí no hay un error que diagnosticar, solo la libertad de moverse. Flexibilidad y eficiencia trata de atajos para expertos; ayuda y documentación, de información de apoyo."
  },
  {
    id: "a2-45", sub: "2.3",
    base: "En la versión anterior de un sistema de farmacia, el capturista tecleaba de memoria la clave de cada medicamento. La nueva versión sugiere coincidencias mientras escribe, con nombre, presentación y foto, y muestra una lista de los últimos productos vendidos.",
    stem: "¿Qué heurística se aplicó?",
    opts: [
      "Reconocer en lugar de recordar",
      "Consistencia y estándares",
      "Visibilidad del estado del sistema"
    ],
    ans: 0,
    exp: "RECONOCER EN LUGAR DE RECORDAR: reducir la carga de memoria haciendo visibles los elementos, las acciones y las opciones; el usuario no debería tener que recordar datos de una pantalla a otra. Las sugerencias al escribir y la lista de recientes convierten un acto de memoria en uno de reconocimiento. Consistencia y estándares trata de convenciones uniformes, y visibilidad del estado, de informar qué está pasando."
  },
  {
    id: "a2-46", sub: "2.3",
    stem: "Relaciona cada decisión de diseño con la heurística de Nielsen que aplica: 1) atajos de teclado y plantillas personalizables que los expertos usan y los novatos pueden ignorar; 2) quitar de la pantalla de pago los anuncios y textos que no ayudan a pagar; 3) un buscador de preguntas frecuentes con pasos concretos para cada tarea.",
    opts: [
      "1 diseño minimalista · 2 ayuda y documentación · 3 flexibilidad y eficiencia",
      "1 ayuda y documentación · 2 flexibilidad y eficiencia · 3 diseño minimalista",
      "1 flexibilidad y eficiencia · 2 diseño minimalista · 3 ayuda y documentación"
    ],
    ans: 2,
    exp: "FLEXIBILIDAD Y EFICIENCIA DE USO: aceleradores que el novato no nota y que agilizan al experto (atajos, personalización). ESTÉTICA Y DISEÑO MINIMALISTA: cada elemento de información que sobra compite con el relevante y le resta visibilidad. AYUDA Y DOCUMENTACIÓN: lo ideal es no necesitarla, pero si se ofrece debe ser fácil de buscar, centrada en la tarea y con pasos concretos."
  },
  {
    id: "a2-47", sub: "2.3",
    base: "Después de validar la navegación con bocetos en papel, un equipo prepara una prueba para medir tiempos de compra y la reacción de los usuarios a la apariencia final: colores, tipografía, microinteracciones y datos realistas.",
    stem: "¿Qué prototipo conviene y qué desventaja tiene?",
    opts: [
      "Uno de baja fidelidad; no permite observar a usuarios reales",
      "Uno de alta fidelidad; cuesta más hacerlo y cambiarlo es más lento",
      "Uno de papel; obliga a programar antes la base de datos final"
    ],
    ans: 1,
    exp: "Un prototipo de ALTA FIDELIDAD (interactivo en una herramienta de diseño, o ya en código) se parece al producto final en aspecto y comportamiento: sirve para evaluar detalles visuales, flujos con datos realistas y tiempos de tarea, y como especificación para desarrollo. Sus desventajas son el mayor costo y tiempo, y que los usuarios tienden a opinar de la estética más que del fondo. Los prototipos de baja fidelidad también se prueban con usuarios (para conceptos y navegación), y uno de papel no requiere programar nada."
  },
  {
    id: "a2-48", sub: "2.3",
    base: "Un asistente de voz de un banco recibe frases como «quiero mandarle 500 pesos a mi hermana» o «transfiere 500 a Laura». El diseño define la acción TransferirDinero, una lista de frases de ejemplo y los datos variables monto y destinatario.",
    stem: "En el diseño de interfaces de voz, ¿cómo se llaman esos tres elementos, en ese orden?",
    opts: [
      "Intent, utterances y slots",
      "Slot, intents y utterances",
      "Utterance, slots e intents"
    ],
    ans: 0,
    exp: "El INTENT (intención) es lo que el usuario quiere lograr (TransferirDinero). Las UTTERANCES (enunciados) son las distintas frases con que puede pedirlo; sirven para entrenar el reconocimiento. Los SLOTS (ranuras o entidades) son los parámetros variables que el sistema extrae de la frase ({monto}, {destinatario}). Si falta un slot obligatorio, el asistente lo pregunta («¿A quién se lo envío?»), y en operaciones delicadas debe confirmar antes de ejecutar."
  },
  {
    id: "a2-49", sub: "2.3",
    base: "Un analista escribe este caso de prueba para el formulario de registro: «Verificar que el registro funcione bien». El líder de pruebas lo regresa por incompleto.",
    stem: "¿Qué debe incluir un caso de prueba de interfaz para que cualquiera pueda reproducirlo?",
    opts: [
      "Solo el nombre de la pantalla, el responsable y la fecha de ejecución",
      "Precondiciones, pasos, datos de entrada y resultado esperado en pantalla",
      "La opinión de un usuario sobre el diseño visual y una nota del 1 al 5"
    ],
    ans: 1,
    exp: "Un caso de prueba de interfaz debe dar el mismo resultado sin importar quién lo ejecute. Lleva identificador, PRECONDICIONES (p. ej., usuario no registrado), PASOS concretos (capturar el correo y una contraseña de 5 caracteres, pulsar «Registrar»), DATOS de entrada y RESULTADO ESPERADO (aparece «La contraseña debe tener al menos 8 caracteres» y no se envía el formulario). Al ejecutarlo se anota el resultado obtenido para compararlo. La opinión subjetiva corresponde a pruebas de usabilidad o encuestas, no a un caso de prueba."
  },
  {
    id: "a2-50", sub: "2.3",
    base: "Para una prueba de usabilidad de la app de una biblioteca, un borrador de escenario dice: «Haz clic en el menú Servicios, elige Renovar préstamo y pulsa el botón verde Confirmar».",
    stem: "¿Cuál es el principal defecto de este escenario de tarea?",
    opts: [
      "Es demasiado realista, y un escenario debe ser abstracto para no sesgar al usuario",
      "No pide al usuario calificar la app, que es el único dato útil de toda la prueba",
      "Revela los pasos y etiquetas, así que no mide si el usuario sabría hallarlos"
    ],
    ans: 2,
    exp: "Un buen ESCENARIO DE TAREA es realista, da contexto y una meta («Tu libro vence mañana y aún no lo terminas; consigue más días para leerlo») sin decir cómo lograrla ni usar las palabras de la interfaz. Si se dictan los pasos, la prueba deja de medir qué tan fácil es encontrar la función. También debe tener un final claro, para saber si se completó y medir éxito, tiempo y errores. El realismo se busca, no se evita, y la satisfacción es una métrica más, no la única."
  }
];
