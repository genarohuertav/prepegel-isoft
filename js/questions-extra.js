// Banco EXTRA — Patrones de diseño, arquitectura y modelado con imágenes
// Subáreas: 2.1 Arquitectura · 2.2 Patrones de diseño
window.QB_EXTRA = [
  // ---------- Con imagen: estructuras UML ----------
  {
    id: "ex-01", sub: "2.2", img: "assets/observer-estructura.svg",
    imgAlt: "Diagrama de clases con Sujeto abstracto, interfaz Observador, SujetoConcreto y dos ObservadoresConcretos",
    stem: "¿Qué patrón de diseño GoF corresponde a la estructura de clases mostrada?",
    opts: [
      "Observer, porque define una dependencia uno-a-muchos: al cambiar el estado del Sujeto, todos sus observadores son notificados automáticamente",
      "Strategy, porque el Sujeto delega un algoritmo en objetos intercambiables que implementan una misma interfaz",
      "Mediator, porque centraliza en un objeto la comunicación para que los colegas no se refieran entre sí directamente"
    ],
    ans: 0,
    exp: "Las pistas son el rombo hueco del Sujeto hacia la interfaz Observador (agregación de muchos observadores) y los métodos adjuntar/quitar/notificar. Observer mantiene la dependencia 1-a-N y notifica cambios de estado; Strategy delega UN solo algoritmo y no lleva lista ni notifica."
  },
  {
    id: "ex-02", sub: "2.2", img: "assets/strategy-estructura.svg",
    imgAlt: "Diagrama con Contexto que agrega la interfaz Estrategia implementada por EstrategiaTerrestre, Aerea y Expres",
    stem: "Una app de logística permite cambiar en tiempo de ejecución el algoritmo de cálculo de rutas (terrestre, aéreo o express). El diagrama muestra la solución. ¿Cuál es el principal beneficio que aporta este patrón?",
    opts: [
      "Elimina condicionales masivos y permite añadir nuevos algoritmos sin modificar al Contexto (abierto/cerrado), manteniendo cada variante encapsulada",
      "Garantiza que exista exactamente una instancia del algoritmo durante toda la ejecución de la aplicación",
      "Permite que las clases EstrategiaTerrestre, Aerea y Expres hereden su comportamiento común de la clase Contexto"
    ],
    ans: 0,
    exp: "Strategy encapsula familias de algoritmos intercambiables detrás de una interfaz; el Contexto los usa por composición (agregación). Esto cumple abierto/cerrado: agregar 'EstrategiaDron' solo crea una clase nueva. «Una única instancia del algoritmo» describe Singleton, y la herencia desde el Contexto invierte la relación: las estrategias concretas realizan la interfaz Estrategia, no heredan del Contexto."
  },
  {
    id: "ex-03", sub: "2.2", img: "assets/adapter-estructura.svg",
    imgAlt: "Diagrama con Cliente, interfaz Objetivo, clase Adaptador que envuelve a Adaptado",
    stem: "El sistema debe usar una librería legado de facturación cuya API (metodoEspecifico) no coincide con la interfaz esperada por los clientes (operar). El diagrama ilustra la solución. ¿Qué patrón se aplicó y qué papel juega Adaptador?",
    opts: [
      "Facade: Adaptador expone una interfaz simplificada de todo el subsistema de facturación",
      "Adapter: Adaptador implementa la interfaz Objetivo y traduce internamente las llamadas hacia Adaptado, sin modificar código existente",
      "Proxy: Adaptador controla el acceso a Adaptado añadiendo seguridad y caché transparentes"
    ],
    ans: 1,
    exp: "Adapter hace compatible una interfaz existente e incompatible con la que el cliente espera, mediante envoltura (composición): operar() llama a metodoEspecifico(). Facade simplifica UNA interfaz compleja pero no resuelve incompatibilidad de firmas; Proxy comparte LA MISMA interfaz del sujeto real y su fin es control de acceso/caché."
  },
  {
    id: "ex-04", sub: "2.2", img: "assets/singleton.svg",
    imgAlt: "Clase Singleton con atributo estático privado instancia, constructor privado y método estático getInstance",
    stem: "¿Qué propiedades garantiza el diseño de clase mostrado?",
    opts: [
      "Que exista una única instancia de la clase accesible globalmente, porque el constructor privado impide instanciar desde fuera y getInstance devuelve siempre el mismo objeto",
      "Que cada módulo reciba una copia independiente del objeto, mejorando el aislamiento entre componentes",
      "Que la clase pueda tener muchas subclases que extiendan su comportamiento mediante polimorfismo"
    ],
    ans: 0,
    exp: "Singleton combina: constructor privado (nadie más puede hacer new), campo estático que retiene LA instancia y método estático getInstance() como punto de acceso global con creación perezosa. No favorece la extensión por subclases (de hecho suele sellarse); tampoco entrega copias independientes."
  },

  // ---------- Con imagen: arquitectura ----------
  {
    id: "ex-05", sub: "2.1", img: "assets/mvc-flujo.svg",
    imgAlt: "Ciclo MVC: usuario interactúa con Controlador, Controlador actualiza Modelo, Modelo notifica a Vista, Vista presenta al Usuario",
    stem: "Según el flujo de la arquitectura mostrada, ¿cuál afirmación es correcta?",
    opts: [
      "La Vista consulta directamente al Modelo y le escribe los datos cuando el usuario captura información",
      "El Modelo notifica sus cambios a la Vista para que esta se refresque, mientras que el Controlador interpreta las entradas del usuario y actualiza el Modelo",
      "El Controlador renderiza la interfaz final y se comunica con el Modelo únicamente mediante llamadas HTTP síncronas"
    ],
    ans: 1,
    exp: "En MVC clásico: Vista = presentación pasiva; Controlador = traduce eventos del usuario en operaciones sobre el Modelo; Modelo = estado + reglas y notifica cambios (flecha punteada, patrón observer interno) para que la Vista se actualice. La Vista no escribe datos ni el Controlador renderiza HTML él mismo."
  },
  {
    id: "ex-06", sub: "2.1", img: "assets/capas-arquitectura.svg",
    imgAlt: "Arquitectura en capas: Presentación, Lógica de negocio, Acceso a datos y Base de datos con dependencias unidireccionales",
    stem: "Con la arquitectura en capas ilustrada, la organización decide migrar de SQL Server a PostgreSQL. Según el principio de dependencias unidireccionales del diagrama, ¿dónde debe concentrarse el impacto?",
    opts: [
      "En toda la pila: la Lógica de negocio tendrá que reescribirse porque asume el motor específico",
      "Principalmente en la capa de Acceso a datos, pues es la única que conoce detalles de persistencia; Presentación y Lógica quedan intactas si se respeta su contrato",
      "En ninguna capa, porque cambiar el motor de base de datos es un cambio puramente operativo sin efecto sobre el software"
    ],
    ans: 1,
    exp: "El valor de la separación por capas es justamente ese aislamiento: solo la capa de acceso a datos habla 'SQL del motor' (consultas, dialectos, transacciones). Si las capas superiores dependen solo de abstracciones/contratos (interfaces de repositorio), el cambio de BD no las afecta. En la práctica puede haber ajustes menores, pero el impacto debe quedar confinado."
  },

  // ---------- Con imagen: bases de datos / UML ----------
  {
    id: "ex-07", sub: "2.2", img: "assets/er-cliente-telefonos.svg",
    imgAlt: "Tabla CLIENTE con columna telefonos conteniendo tres números separados por punto y coma, marcada como error",
    stem: "Al revisar el diseño de la tabla CLIENTE mostrada, ¿qué problema de normalización existe y cuál es la corrección adecuada?",
    opts: [
      "Viola 1FN: telefonos es multivaluada; debe crearse una tabla TELEFONO(id_cliente FK, telefono, tipo) con clave primaria compuesta o sustituta",
      "Viola 3FN: nombre depende de id_cliente; debe moverse a una tabla PERSONA separada",
      "No viola forma normal alguna; guardar listas en una celda optimiza lecturas y es práctica recomendada en modelos relacionales normalizados"
    ],
    ans: 0,
    exp: "Primera Forma Normal exige valores atómicos: cada celda un solo valor. Al almacenar '551...;559...;561...' se imposibilita indexar, validar o referenciar teléfonos individuales. La solución canónica es extraer la entidad débil TELEFONO con FK a CLIENTE. La 3FN trata dependencias transitivas, no atomicidad."
  },
  {
    id: "ex-08", sub: "2.2", img: "assets/secuencia-pedido.svg",
    imgAlt: "Diagrama de secuencia: Cliente, :InterfazUI, :ServicioPedidos y :BD intercambiando mensajes hacerPedido, validarYCrear, guardar y retornos punteados",
    stem: "Observa el diagrama de secuencia. ¿Qué representa la flecha DISCONTINUA (punteada) que va de :BD hacia :ServicioPedidos con el texto «ok (id=123)»?",
    opts: [
      "Un mensaje asíncrono que la base de datos emite por eventos de replicación",
      "Un mensaje de retorno: la respuesta que el receptor entrega tras procesar el mensaje previo guardar(pedido)",
      "Una restricción de tiempo (duration constraint) indicando latencia máxima permitida"
    ],
    ans: 1,
    exp: "En UML, las flechas sólidas representan mensajes que inician trabajo; las discontinuas son mensajes de respuesta/retorno que devuelven el control (y opcionalmente un valor) al remitente original del flujo. Los mensajes asíncronos se dibujan con punta de flecha abierta y línea sólida; las restricciones de tiempo van entre llaves {t<2s}."
  },
  {
    id: "ex-09", sub: "2.2", img: "assets/relaciones-uml.svg",
    imgAlt: "Tres paneles numerados: Equipo-Jugador con rombo hueco, Casa-Habitación con rombo lleno, Vehiculo-Auto-Moto con triángulo hueco",
    stem: "Relaciona los tres paneles con el significado correcto de cada notación UML:",
    opts: [
      "1 agregación (todo–parte independiente) · 2 composición (el parte no existe sin el todo) · 3 generalización/herencia",
      "1 composición · 2 agregación · 3 asociación many-to-many",
      "1 dependencia · 2 asociación bidireccional · 3 realización de interfaz"
    ],
    ans: 0,
    exp: "Rombo HUECO en el todo = agregación: las partes pueden vivir sin el conjunto (un jugador existe fuera del equipo). Rombo LLENO = composición: ciclo de vida ligado (la habitación desaparece si se demuele la casa). Triángulo hueco apuntando al padre = generalización: Auto y Moto son Vehiculo."
  },

  // ---------- Escenario → patrón (GoF completos) ----------
  {
    id: "ex-10", sub: "2.2",
    stem: "Un editor gráfico necesita añadir dinámicamente capacidades a los elementos del lienzo: borde sombreado, transparencia o marcos decorativos, combinables y retirables en tiempo de ejecución sin crear una explosión de subclases. ¿Qué patrón aplica?",
    opts: ["Decorator: envuelve el objeto base con capas que añaden responsabilidades, todas compartiendo la misma interfaz", "Composite: organiza los elementos en jerarquías árbol tratando hojas y grupos uniformemente", "Flyweight: comparte el estado intrínseco pesado entre miles de instancias similares"],
    ans: 0,
    exp: "Decorator 'adorna' un objeto añadiendo comportamientos apilables (BordeDecorator(SombraDecorator(Figura))). Composite responde a árboles parte-todo y Flyweight a compartir memoria, no a combinar rasgos opcionales."
  },
  {
    id: "ex-11", sub: "2.2",
    stem: "Un explorador de archivos debe tratar carpetas y archivos de forma uniforme: calcular el tamaño total de cualquier nodo, ya sea un archivo individual o un directorio que contiene otros directorios anidados. ¿Qué patrón modela esta estructura?",
    opts: ["Proxy", "Composite", "Bridge"],
    ans: 1,
    exp: "Composite define la jerarquía árbol donde Componente declara la operación común (tamano()), Archivo es hoja y Carpeta es compuesto que delega recursivamente en sus hijos. El cliente ignora si trabaja con hoja o rama."
  },
  {
    id: "ex-12", sub: "2.2",
    stem: "Un pedido pasa por estados CREADO→PAGADO→ENVIADO→ENTREGADO y su lógica de validación y transición cambia radicalmente según el estado actual. El equipo quiere eliminar los switch gigantes dispersos. ¿Qué patrón propone GoF?",
    opts: ["State: encapsula cada estado en una clase propia con su manejar(contexto) y delega el contexto en el objeto estado actual", "Command: convierte cada transición en un objeto ejecutable para deshacer/rehacer", "Chain of Responsibility: cada estado decide pasar la solicitud al siguiente manejador de la cadena"],
    ans: 0,
    exp: "State modela 'un objeto cuyo comportamiento depende de su estado interno y parece cambiar de clase'. Cada estado concreto implementa las transiciones válidas desde él. Command sirve para parametrizar/ejecutar/deshacer acciones; Chain para filtrar solicitudes por una fila de manejadores."
  },
  {
    id: "ex-13", sub: "2.2",
    stem: "El editor de texto requiere Deshacer/Rehacer robusto y macros reproducibles: cada acción del usuario debe poder guardarse, revertirse y agruparse en cola. ¿Qué patrón lo resuelve?",
    opts: ["Memento, guardando instantáneas completas del documento en pila", "Command, encapsulando cada operación como objeto con ejecutar() y deshacer(), lo que además permite componer macros", "Observer, notificando al historial cada cambio del documento"],
    ans: 1,
    exp: "Command convierte solicitudes en objetos: soporta parametrización, colas, registro histórico, undo/redo y composición (MacroCommand ejecuta varios). Memento solo restaura estado (sin semántica de operación) y consume memoria con snapshots completos."
  },
  {
    id: "ex-14", sub: "2.2",
    stem: "Un framework de exportación de reportes define el esqueleto del proceso: abrirDocumento(), escribirEncabezado(), escribirCuerpo(), escribirPie(), cerrar(). Las variantes PDF/HTML/Excel solo personalizan pasos intermedios y el orden jamás cambia. ¿Qué patrón?",
    opts: ["Template Method: la clase abstracta fija el algoritmo (final) y las subclases sobreescriben los pasos primitivos", "Strategy: cada formato es un algoritmo completo intercambiable en caliente", "Factory Method: cada formato es un producto creado por su fábrica correspondiente"],
    ans: 0,
    exp: "Template Method = herencia + esqueleto fijo con ganchos (hook methods). Si el orden y la secuencia son invariantes y solo varían pasos, es Template Method; Strategy sustituye el ALGORITMO entero mediante composición y Factory Method se centra en la creación de objetos, no en la estructura del proceso."
  },
  {
    id: "ex-15", sub: "2.2",
    stem: "El framework debe permitir que SUBCLASES decidan qué clase de ventana instanciar: la clase base declara crearVentana() y cada plataforma (LinuxDialog, WindowsDialog) la implementa devolviendo su producto. ¿Qué patrón de creación describe esto?",
    opts: ["Abstract Factory, porque produce familias completas de productos relacionados", "Factory Method, porque define un método de creación que las subclases sobreescriben para decidir el producto concreto", "Builder, porque construye el producto paso a paso con un director que controla la secuencia"],
    ans: 1,
    exp: "Factory Method: 'define una interfaz para crear un objeto, pero deja que sean las subclases quienes decidan la clase a instanciar'. Abstract Factory interviene cuando se crean FAMILIAS de productos compatibles juntos (botón+checkbox+menú de un mismo look&feel)."
  },
  {
    id: "ex-16", sub: "2.2",
    stem: "Una suite ofimática multiplataforma necesita garantizar compatibilidad entre productos creados JUNTOS: botones, menús y ventanas de macOS entre sí, y los de Windows entre sí; mezclarlos produce interfaces rotas. ¿Qué patrón de creación aplica?",
    opts: ["Abstract Factory: una fábrica concreta por familia (FabricaMac, FabricaWindows) que crea conjuntos de productos coherentes", "Prototype, clonando los widgets ya inicializados de cada sistema", "Singleton, una única fábrica global por widget individual"],
    ans: 0,
    exp: "Abstract Factory responde a 'familias de objetos relacionados que DEBEN usarse juntos', moviendo la elección de familia a una sola fábrica concreta e imposibilitando mezclas incompatibles. Prototype clona individuos sin garantizar coherencia familiar."
  },
  {
    id: "ex-17", sub: "2.2",
    stem: "Crear objetos ConfiguracionProyecto implica leer múltiples archivos y consultar servicios web (costoso). Se requieren muchas instancias casi idénticas. ¿Qué patrón de creación minimiza ese costo?",
    opts: ["Prototype: se crea un prototipo costoso una vez y el resto se obtiene clonándolo (copia) con posibilidad de ajustes posteriores", "Builder: ensambla el objeto paso a paso separando la construcción de la representación", "Facade: expone una interfaz simple frente al subsistema de configuración"],
    ans: 0,
    exp: "Prototype evita repetir la creación cara mediante clonación (copy constructor / clone()). Builder ayuda cuando la construcción tiene MUCHOS PASOS combinables, no cuando el costo está en obtener los datos iniciales."
  },
  {
    id: "ex-18", sub: "2.2",
    stem: "Sobre una librería de imágenes se desea añadir, de manera transparente al cliente, registro de accesos, caché de resultados y verificación de permisos antes de cargar la imagen remota. ¿Qué patrón estructural es idóneo?",
    opts: ["Adapter, porque la librería tiene una interfaz incompatible", "Decorator, porque añade responsabilidades visibles mediante wrappers apilables", "Proxy, porque proporciona un sustituto CON LA MISMA interfaz del sujeto real que controla su acceso (proxy de protección y de caché)"],
    ans: 2,
    exp: "La clave es la transparencia: el cliente sigue usando Imagen.cargar() sin saberlo. Proxy conserva la interfaz y añade CONTROL inteligente (protección, caché, lazy loading, remoto). Decorator también envuelve con la misma interfaz, pero su propósito es AÑADIR RESPONSABILIDADES funcionales visibles, no controlar/gestionar el acceso al real."
  },
  {
    id: "ex-19", sub: "2.2",
    stem: "Un videojuego dibuja un bosque con 500 000 árboles; cada árbol comparte malla y textura, y solo difiere en posición y escala. ¿Qué patrón estructural evita el colapso de memoria?",
    opts: ["Flyweight: separa estado intrínseco compartido (malla, textura) del extrínseco (posición) pasado en cada uso", "Composite: modela el bosque como árbol jerárquico de vegetación", "Facade: una única llamada dibujarBosque() oculta el motor de render"],
    ans: 0,
    exp: "Flyweight logra millones de objetos compartiendo el estado común inmutable y externalizando lo único por instancia. Composite organiza jerarquías y Facade simplifica interfaces: ninguno ataca el consumo de memoria."
  },
  {
    id: "ex-20", sub: "2.2",
    stem: "El cliente debe recorrer los elementos de una colección personalizada (lista doblemente enlazada, árbol B) SIN conocer su estructura interna ni exponerla, y mantener varios recorridos simultáneos. ¿Qué patrón?",
    opts: ["Iterator: provee un objeto secuencial next()/hasNext() por recorrido, desacoplando el cliente de la representación interna", "Visitor: aplica operaciones a los elementos declarando una visita por tipo", "Mediator: coordina la comunicación entre los elementos de la colección"],
    ans: 0,
    exp: "Iterator extrae la política de recorrido a un objeto independiente, permitiendo múltiples iteradores activos sobre la misma colección y cambiando la estructura interna sin romper clientes. Visitor sirve para añadir OPERACIONES a una estructura estable, no para recorrerla."
  },
  {
    id: "ex-21", sub: "2.2",
    stem: "Un editor colaborativo debe ofrecer puntos de restauración sin exponer ni violar el encapsulamiento del documento (su estado interno no debe ser visible fuera). ¿Qué patrón comportamental lo resuelve?",
    opts: ["Memento: el documento origina mementos opacos; un cuidador los almacena sin poder inspeccionarlos; solo el originador los lee para restaurarse", "Command: registra operaciones inversas para deshacer", "Prototype: clona el documento completo como respaldo público"],
    ans: 0,
    exp: "Memento captura y externaliza el estado del objeto SIN romper encapsulamiento: el snapshot es opaco para terceros (caretaker). Command deshace a nivel de operación inversa (no siempre posible ni exacto); clonar públicamente violaría el requisito de encapsulamiento."
  },
  {
    id: "ex-22", sub: "2.2",
    stem: "En un sistema de mensajería, cada participante chatea con todos los demás; agregar un participante obliga a modificar a los N-1 restantes. ¿Qué patrón centraliza la comunicación para desacoplarlos?",
    opts: ["Observer: los participantes se suscriben a los eventos de los demás", "Mediator: un objeto mediador conoce a todos los colegas y canaliza su interacción, de modo que estos solo se conocen entre sí a través de él", "Facade: una fachada simplifica la API de cada participante"],
    ans: 1,
    exp: "Mediator convierte redes N×(N−1) en estrellas: los colegas solo hablan con el mediador, que concentra la lógica de coordinación (torre de control, chat room). Observer distribuye notificaciones 1-a-muchos pero no elimina el acoplamiento entre pares que se conocen mutuamente."
  },
  {
    id: "ex-23", sub: "2.2",
    stem: "Una mesa de ayuda procesa tickets: primero intenta resolverlos bots de nivel 1; si no procede, nivel 2; luego especialistas; finalmente escalan al arquitecto. El orden puede reconfigurarse. ¿Qué patrón comportamental modela esta cadena?",
    opts: ["Chain of Responsibility: cada manejador decide atender la solicitud o pasarla al siguiente, y la cadena es configurable dinámicamente", "State, porque el ticket avanza por estados hasta resolverse", "Command, encapsulando cada resolución como comando encolable"],
    ans: 0,
    exp: "Chain of Responsibility da a varios objetos oportunidad de manejar la solicitud sin acoplar emisor a receptor; el emisor desconoce quién resolverá. State describe el comportamiento interno según fase, no el despacho entre manejadores alternativos."
  },
  {
    id: "ex-24", sub: "2.2",
    stem: "Una librería de figuras debe soportar N formas × M renderizadores (canvas, SVG, OpenGL) sin explotar en Formas×Renderers subclases, permitiendo variar ambos ejes de forma independiente. ¿Qué patrón estructural?",
    opts: ["Bridge: separa abstracción (Figura) de implementación (Renderer) mediante una referencia de composición, variando ambas jerarquías independientemente", "Adapter, adaptando cada renderer a la interfaz Figura", "Composite, anidando formas dentro de renderizadores"],
    ans: 0,
    exp: "Bridge existe precisamente para dos dimensiones ortogonales de variación: en vez de CirculoCanvas, CuadradoSVG… (M×N clases), compone Figura→renderer (M+N). Adapter resuelve incompatibilidades puntuales, no combinatoria de ejes."
  }
];
