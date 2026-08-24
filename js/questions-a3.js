/* PrepEGEL ISOFT — Banco de preguntas
   ÁREA 3: Desarrollo de Sistemas de Software (49 reactivos oficiales — área más grande)
   Subáreas: 3.1 Lenguajes · 3.2 Paradigmas · 3.3 Entornos · 3.4 Gestión de datos · 3.5 Plataformas */
"use strict";

window.QB_A3 = [

  /* ==================== 3.1 LENGUAJES DE DESARROLLO ==================== */
  {
    id: "a3-01", sub: "3.1",
    base: "Un equipo compila su programa Java y obtiene archivos .class que se ejecutan sobre la JVM en Windows, Linux y macOS sin recompilar.",
    stem: "¿Qué modelo de ejecución describe este comportamiento?",
    opts: [
      "Compilación a código nativo específico de cada sistema operativo",
      "Compilación a código intermedio (bytecode) interpretado/JIT por una máquina virtual",
      "Interpretación directa del código fuente línea por línea"
    ],
    ans: 1,
    exp: "Java compila a BYTECODE neutral; la JVM lo ejecuta (interpretando o con JIT). Esto habilita «write once, run anywhere»: el mismo .class corre en cualquier plataforma con JVM instalada."
  },
  {
    id: "a3-02", sub: "3.1",
    base: "En Python un desarrollador escribe:\n\ndef suma(a, b):\n    return a + b\nsuma(2, \"3\")",
    stem: "El error de tipos aparecerá…",
    opts: [
      "Al compilar, antes de ejecutar",
      "En tiempo de ejecución, porque Python asigna y verifica tipos dinámicamente",
      "Nunca, porque Python convierte automáticamente enteros a cadenas"
    ],
    ans: 1,
    exp: "Python es de TIPADO DINÁMICO: los tipos se resuelven en ejecución, así que errores de tipo emergen al correr (TypeError), no antes. Además es de tipado FUERTE: «2\" + 3» no concatena mágicamente como en JavaScript."
  },
  {
    id: "a3-03", sub: "3.1",
    base: "El equipo discute lenguajes para un sistema financiero crítico y prioriza detectar errores de tipo durante la compilación, no en producción.",
    stem: "La característica que deben buscar es…",
    opts: [
      "Tipado estático, donde las variables tienen tipo definido en tiempo de compilación",
      "Tipado dinámico con inferencia total en ejecución",
      "Ausencia de tipos mediante uso exclusivo de cadenas"
    ],
    ans: 0,
    exp: "TIPADO ESTÁTICO (Java, C#, C++, TypeScript): el compilador verifica tipos ANTES de ejecutar, atrapando mismatches temprano. El dinámico (Python, JS, Ruby) los descubre en runtime."
  },
  {
    id: "a3-04", sub: "3.1",
    base: "Una variable declarada dentro del cuerpo de una función en Java necesita ser consultada desde otra función distinta.",
    stem: "¿Qué ocurre según las reglas de alcance (scope)?",
    opts: [
      "Es accesible porque toda variable es global por defecto",
      "No es accesible: su alcance es local a la función donde fue declarada",
      "Será accesible únicamente si ambas funciones están en el mismo archivo"
    ],
    ans: 1,
    exp: "Las variables LOCALES viven solo dentro de su bloque/función (y mientras esta ejecuta). Para compartir valores se usan parámetros/retornos, atributos de clase o variables globales/de instancia según el diseño."
  },
  {
    id: "a3-05", sub: "3.1",
    base: "Se implementa la funcionalidad «deshacer» de un editor: la última acción realizada debe ser la primera en revertirse.",
    stem: "La estructura de datos adecuada es una…",
    opts: [
      "Cola (FIFO)",
      "Pila (LIFO)",
      "Lista doblemente ligada ordenada alfabéticamente"
    ],
    ans: 1,
    exp: "PILA = LIFO (Last In, First Out): push/pop en el tope — exactamente el patrón de undo. La COLA es FIFO (primero en llegar, primero atendido) para turnos/buffers."
  },
  {
    id: "a3-06", sub: "3.1",
    base: "Para buscar usuarios por nombre de usuario en un sistema con millones de registros, el equipo quiere acceso promedio prácticamente inmediato por clave.",
    stem: "La estructura ideal y su complejidad promedio son…",
    opts: [
      "Tabla hash — O(1) en búsqueda por clave",
      "Arreglo lineal desordenado — O(n)",
      "Lista ligada simple — O(n log n)"
    ],
    ans: 0,
    exp: "Las TABLAS HASH aplican una función hash a la clave y acceden directo al depósito: O(1) promedio. Arreglos/listas requieren recorridos O(n); árboles balanceados dan O(log n)."
  },
  {
    id: "a3-07", sub: "3.1",
    base: "function factorial(n):\n    si n <= 1: regresa 1\n    regresa n * factorial(n - 1)",
    stem: "Esta técnica de resolución se denomina recursividad y funciona porque…",
    opts: [
      "La función se invoca a sí misma con un problema más pequeño hasta llegar a un caso base",
      "El compilador duplica el código en memoria para cada llamada",
      "Se ejecuta siempre en tiempo constante independiente de n"
    ],
    ans: 0,
    exp: "RECURSIVIDAD: la función se llama a sí misma reduciendo el problema hacia el CASO BASE (n ≤ 1 → 1), que detiene la cadena. Sin caso base habría desbordamiento de pila; el costo aquí es O(n) llamadas."
  },
  {
    id: "a3-08", sub: "3.1",
    base: "En un programa, una función recibe un arreglo (objeto) y modifica sus elementos internamente; fuera de la función, el arreglo original quedó modificado.",
    stem: "Esto ocurre porque…",
    opts: [
      "Los objetos/arreglos se pasan por referencia: ambos nombres apuntan a la misma estructura en memoria",
      "Los arreglos siempre se copian completos al pasarlos como argumento",
      "Java clona automáticamente todo argumento de entrada"
    ],
    ans: 0,
    exp: "Cuando se pasa una REFERENCIA al objeto, la función opera sobre la MISMA memoria: los cambios son visibles afuera (efecto lateral). Los primitivos (int, double) se copian por valor en la mayoría de lenguajes."

  },

  /* ==================== 3.2 PARADIGMAS DE PROGRAMACIÓN ==================== */
  {
    id: "a3-09", sub: "3.2",
    base: "En la clase CuentaBancaria, saldo es privado y solo puede leerse/modificarse mediante métodos depositar(), retirar() y getSaldo() que validan las reglas de negocio.",
    stem: "El principio orientado a objetos aplicado es…",
    opts: [
      "Encapsulamiento: ocultar el estado interno y exponer operaciones controladas",
      "Herencia múltiple con delegación automática",
      "Polimorfismo paramétrico"
    ],
    ans: 0,
    exp: "ENCAPSULAMIENTO: atributos privados + interfaz pública de métodos protegen la invariante (saldo nunca negativo) contra manipulación directa, centralizando validaciones."
  },
  {
    id: "a3-10", sub: "3.2",
    base: "class Gerente extends Empleado — Gerente hereda nombre, RFC y calcularSueldo(), añadiendo bonoGerencial().",
    stem: "La relación y beneficio principal ilustrados son…",
    opts: [
      "Herencia: reutilización de estructura y comportamiento de una clase base en clases derivadas",
      "Composición: Gerente contiene varios Empleados internos",
      "Sobrecarga de operadores"
    ],
    ans: 0,
    exp: "HERENCIA («es-un»): Gerente ES un Empleado especializado; hereda atributos/métodos evitando duplicación y permite polimorfismo. Composición sería «tiene-un» (Gerente tiene una Cuenta)."
  },
  {
    id: "a3-11", sub: "3.2",
    base: "Figura f = new Circulo(5);\ndouble a = f.area();\nSi f = new Cuadrado(4), la MISMA instrucción devuelve otro cálculo correcto.",
    stem: "La propiedad POO demostrada es…",
    opts: [
      "Polimorfismo: una misma llamada ejecuta la implementación de la clase concreta (sobrescritura)",
      "Abstracción pura sin clases concretas",
      "Encapsulamiento de constructores"
    ],
    ans: 0,
    exp: "POLIMORFISMO: referencias de tipo Figura invocan area() resuelto DINÁMICAMENTE a la implementación de Circulo/Cuadrado (method overriding). Permite código genérico que funciona con nuevas subclases."
  },
  {
    id: "a3-12", sub: "3.2",
    base: "abstract class Figura { abstract double area(); } — no pueden instanciarse Figuras directamente; cada subclase está obligada a definir area().",
    stem: "El mecanismo descrito corresponde a…",
    opts: [
      "Abstracción mediante clases abstractas con métodos sin implementación",
      "Interfaces marcadoras con reflexión",
      "Sobrecarga de métodos estáticos"
    ],
    ans: 0,
    exp: "La ABSTRACCIÓN captura lo esencial definiendo CONTRATOS incompletos (clase abstracta/interface): obliga a las especializaciones a proveer implementación, permitiendo programar contra conceptos generales."
  },
  {
    id: "a3-13", sub: "3.2",
    base: "En un proyecto Haskell, el analista destaca dos funciones:\ncuadrado x = x * x\nsumarCuadrados xs = sum (map cuadrado xs)\nnunca hay variables modificadas ni impresiones dentro de ellas.",
    stem: "Las características funcionales exhibidas son…",
    opts: [
      "Funciones puras (sin efectos secundarios) y funciones de orden superior (map recibe una función)",
      "Mutación controlada de estado y punteros explícitos",
      "Clases abstractas con métodos virtuales puros"
    ],
    ans: 0,
    exp: "Programación FUNCIONAL: funciones PURAS (mismo input → mismo output, cero efectos colaterales) y ORDEN SUPERIOR (tomar/devolver funciones: map, filter, compose). La inmutabilidad elimina estados compartidos problemáticos."
  },
  {
    id: "a3-14", sub: "3.2",
    base: "El equipo funcional explica: «no modificamos estructuras existentes; cada transformación produce una lista nueva».",
    stem: "Este principio fundamental del paradigma funcional se llama…",
    opts: [
      "Inmutabilidad de datos",
      "Encapsulamiento defensivo",
      "Normalización estructural"
    ],
    ans: 0,
    exp: "INMUTABILIDAD: los valores no cambian tras crearse; las operaciones devuelven NUEVAS estructuras. Elimina efectos laterales, simplifica concurrencia y razonamiento, y facilita memoización."
  },
  {
    id: "a3-15", sub: "3.2",
    base: "Base de conocimiento Prolog:\npadre(juan, maria).\nabuelo(X, Z) :- padre(X, Y), padre(Y, Z).\nConsulta: ?- abuelo(juan, Z).",
    stem: "¿Qué característica del paradigma lógico se ilustra?",
    opts: [
      "Se declaran hechos y reglas; un motor de inferencia deduce las respuestas (programación declarativa)",
      "El programador escribe paso a paso el algoritmo con bucles y contadores",
      "Los objetos intercambian mensajes asincrónicos"
    ],
    ans: 0,
    exp: "PROLOG/LÓGICO: se declara QUÉ es verdadero (hechos) y reglas de derivación; el motor unifica y retrocede (backtracking) para responder consultas. No se programa el CÓMO iterativo — es declarativo puro."
  },
  {
    id: "a3-16", sub: "3.2",
    base: "button.addEventListener(\"click\", () => { enviarFormulario(); });",
    stem: "El estilo de programación representado es…",
    opts: [
      "Orientado a eventos: el flujo lo determinan sucesos externos manejados por callbacks/handlers",
      "Lógico con unificación de términos",
      "Estructurado con ciclo determinista main→fin"
    ],
    ans: 0,
    exp: "ORIENTADA A EVENTOS: el programa registra manejadores y espera sucesos (clicks, teclas, red); el flujo depende del orden en que lleguen. Base de GUIs, web y sistemas reactivos."
  },
  {
    id: "a3-17", sub: "3.2",
    base: "Fragmento A: for i=0..n { total = total + precio[i] }\nFragmento B: total = sum(precios)\nFragmento C: abuelo(X,Z) :- padre(X,Y), padre(Y,Z)",
    stem: "Asignación correcta de paradigmas:",
    opts: [
      "A imperativo/estructurado · B funcional · C lógico",
      "A funcional · B orientado a eventos · C imperativo",
      "A lógico · B imperativo · C funcional"
    ],
    ans: 0,
    exp: "A usa bucle y variable MUTABLE acumuladora (imperativo); B declara el resultado con una operación de alto nivel sin estado (funcional); C declara hechos/reglas para inferir (lógico). Reconocer fragmentos por rasgos es reactivo frecuente."
  },

  /* ==================== 3.3 ENTORNOS DE DESARROLLO ==================== */
  {
    id: "a3-18", sub: "3.3",
    stem: "¿Cuál es la ventaja central de usar un IDE integrado (como IntelliJ, Visual Studio o Eclipse) frente a editor + herramientas sueltas?",
    opts: [
      "Integra edición, compilación, depuración y navegación de código en un entorno coherente, elevando la productividad",
      "Garantiza software libre de defectos al momento de compilar",
      "Sustituye la necesidad de pruebas y control de versiones"
    ],
    ans: 0,
    exp: "El IDE INTEGRA editor inteligente (autocompletado/refactor), compilador, DEBUGGER gráfico, navegación y plugins: menos fricción entre tareas. Ninguna herramienta garantiza ausencia de defectos ni sustituye pruebas/Git."
  },
  {
    id: "a3-19", sub: "3.3",
    base: "Ante un bug intermitente, la desarrolladora coloca un punto de ruptura en la línea 87, ejecuta en modo debug e inspecciona el valor de variables locales en ese instante.",
    stem: "La herramienta y técnica utilizadas son…",
    opts: [
      "Depurador (debugger) con breakpoints e inspección de estado en tiempo de ejecución",
      "Analizador estático con reporte post-compilación",
      "Perfilador de rendimiento con muestreo de CPU"
    ],
    ans: 0,
    exp: "El DEBUGGER ejecuta controladamente: BREAKPOINTS pausan en puntos exactos para examinar variables, pila de llamadas y flujo (análisis DINÁMICO). El análisis estático revisa código SIN ejecutarlo."
  },
  {
    id: "a3-20", sub: "3.3",
    base: "Un desarrollador crea la rama feature/pagos para trabajar tres días sin afectar la línea principal; al terminar, integra sus commits de vuelta.",
    stem: "Las operaciones Git implicadas, en orden, son…",
    opts: [
      "git branch/checkout → commits → git merge (o pull request) a la rama principal",
      "git clone → git tag → git revert diario",
      "git init remoto → fork → stash permanente"
    ],
    ans: 0,
    exp: "Flujo estándar: crear/cambiar a RAMA (aislamiento), hacer COMMITS incrementales, luego MERGE (o PR aprobado) reintegra cambios. Tags marcan versiones; stash guarda temporalmente trabajo no committeado."
  },
  {
    id: "a3-21", sub: "3.3",
    base: "Ana y Beto modificaron las mismas líneas de config.js en ramas distintas; Git detiene el merge marcando <<<<<<< HEAD ======= >>>>>>> feature.",
    stem: "¿Qué ocurrió y cómo se resuelve?",
    opts: [
      "Conflicto de fusión: debe editarse el archivo conservando/combinando el contenido correcto y confirmar el merge",
      "Corrupción del repositorio: hay que clonar de nuevo desde cero",
      "Error de sintaxis previo: basta compilar para que Git continúe solo"
    ],
    ans: 0,
    exp: "CONFLICTO de merge: cambios simultáneos solapados que Git no puede reconciliar automáticamente. Se editan los marcadores eligiendo la versión final, se hace git add y se completa la fusión."
  },
  {
    id: "a3-22", sub: "3.3",
    base: "SonarQube analiza el repositorio SIN ejecutar el programa y reporta: variables sin usar, métodos de 300 líneas y posibles NullPointerException.",
    stem: "Esta herramienta realiza análisis…",
    opts: [
      "Estático del código fuente, detectando patrones problemáticos antes de ejecutar",
      "Dinámico basado en cobertura de pruebas",
      "De rendimiento con instrumentación en caliente"
    ],
    ans: 0,
    exp: "ANÁLISIS ESTÁTICO: inspecciona el código sin ejecución (code smells, vulnerabilidades, complejidad). El dinámico observa el programa corriendo (tests, profilers). Ambos se complementan en calidad."
  },
  {
    id: "a3-23", sub: "3.3",
    base: "Antes de cada commit, el linter marca comillas inconsistentes, indentación irregular y variables renombradas mal escritas (usrNm vs userName).",
    stem: "El valor principal del linter en el flujo de trabajo es…",
    opts: [
      "Aplicar estilo consistente y detectar errores comunes de forma temprana y automatizada",
      "Reemplazar la fase de pruebas unitarias",
      "Generar documentación API automáticamente"
    ],
    ans: 0,
    exp: "Los LINTERS imponen convenciones de estilo y atrapan errores triviales ANTES de revisión/pruebas, ahorrando tiempo de code review y bugs superficiales. No sustituyen pruebas ni generan docs (eso es otro toolset)."
  },
  {
    id: "a3-24", sub: "3.3",
    base: "Con un comando único, Maven descarga dependencias, compila módulos, ejecuta tests y empaqueta el JAR reproducible.",
    stem: "La categoría de herramienta y beneficio ilustrados son…",
    opts: [
      "Automatización de build: procesos repetibles y estandarizados para todos los desarrolladores",
      "Control de versiones distribuido con historial inmutable",
      "Orquestación de contenedores con escalado automático"
    ],
    ans: 0,
    exp: "Herramientas de BUILD (Maven, Gradle, npm scripts, Make) AUTOMATIZAN dependencias+compilación+pruebas+empaquetado: builds reproducibles independientes del entorno personal de cada developer."
  },

  /* ==================== 3.4 GESTIÓN DE DATOS ==================== */
  {
    id: "a3-25", sub: "3.4",
    base: "Tablas: CLIENTE(id_cliente, nombre) y PEDIDO(id_pedido, id_cliente, total). Se requiere listar nombre del cliente junto al total de cada pedido realizado.",
    stem: "La consulta SQL correcta es…",
    opts: [
      "SELECT c.nombre, p.total FROM cliente c JOIN pedido p ON c.id_cliente = p.id_cliente;",
      "SELECT nombre, total FROM cliente WHERE id_pedido IS NOT NULL;",
      "SELECT * FROM cliente, pedido GROUP BY nombre;"
    ],
    ans: 0,
    exp: "El JOIN relaciona tablas por la clave común (c.id_cliente = p.id_cliente) combinando columnas de ambas. Las opciones B/C mezclan columnas inexistentes o producen producto cartesiano sin criterio."
  },
  {
    id: "a3-26", sub: "3.4",
    base: "Se necesita las ciudades con MÁS DE 10 pedidos. Un junior escribió: SELECT ciudad FROM pedido WHERE COUNT(*) > 10 GROUP BY ciudad; y obtuvo error.",
    stem: "¿Cuál es el problema?",
    opts: [
      "COUNT(*) es agregación: la condición sobre grupos debe ir en HAVING, no en WHERE",
      "GROUP BY debe escribirse antes del SELECT",
      "COUNT no existe en SQL estándar"
    ],
    ans: 0,
    exp: "WHERE filtra FILAS antes de agrupar; HAVING filtra GRUPOS tras la agregación: SELECT ciudad FROM pedido GROUP BY ciudad HAVING COUNT(*) > 10. Es el error clásico WHERE-vs-HAVING."
  },
  {
    id: "a3-27", sub: "3.4",
    base: "Sentencias del script: CREATE TABLE ... ; ALTER TABLE ... ; INSERT INTO ... ; UPDATE ... ; DELETE ...",
    stem: "¿Cuál clasificación es correcta?",
    opts: [
      "CREATE/ALTER son DDL (estructura); INSERT/UPDATE/DELETE son DML (datos)",
      "Todas son DCL porque modifican permisos",
      "CREATE es DML y UPDATE es DDL"
    ],
    ans: 0,
    exp: "DDL (Data Definition Language) define ESTRUCTURA: CREATE, ALTER, DROP, TRUNCATE. DML (Data Manipulation) opera DATOS: SELECT, INSERT, UPDATE, DELETE. DCL gestiona permisos (GRANT/REVOKE)."
  },
  {
    id: "a3-28", sub: "3.4",
    base: "Tras crear un índice sobre columna email, las búsquedas por email bajaron de 900 ms a 8 ms, pero los INSERT nocturnos masivos tardan más.",
    stem: "¿Por qué ocurre el costo adicional en inserciones?",
    opts: [
      "Cada INSERT/UPDATE debe mantener también actualizada la estructura del índice",
      "El índice bloquea permanentemente la tabla contra escrituras",
      "El índice duplica físicamente todas las filas de la tabla"
    ],
    ans: 0,
    exp: "ÍNDICES aceleran lecturas (búsqueda ordenada/hash vs escaneo completo) pero cada escritura debe actualizar el índice además de la tabla: trade-off lectura vs escritura/almacenamiento. Se indexan columnas muy consultadas."
  },
  {
    id: "a3-29", sub: "3.4",
    base: "Transferencia bancaria: debito(cuentaA, 500); credito(cuentaB, 500); Si falla la segunda instrucción por caída del servidor, la primera se revierte y ninguna cuenta queda alterada.",
    stem: "La propiedad ACID garantizada es…",
    opts: [
      "Atomicidad: la transacción se ejecuta completa o nada (rollback)",
      "Durabilidad: los datos sobreviven cortes eléctricos",
      "Aislamiento: ninguna transacción ve estados intermedios de otras"
    ],
    ans: 0,
    exp: "ATOMICIDAD = «todo o nada»: ante fallo, ROLLBACK deja la BD como si nada hubiera ocurrido. Durabilidad persiste lo CONFIRMADO; aislamiento evita interferencia entre transacciones concurrentes; consistencia mantiene reglas."
  },
  {
    id: "a3-30", sub: "3.4",
    base: "Al intentar insertar PEDIDO(id_pedido=101, id_cliente=9999) siendo que no existe cliente 9999, la BD rechaza la operación.",
    stem: "El mecanismo que actuó es…",
    opts: [
      "Integridad referencial mediante la clave foránea id_cliente → CLIENTE(id_cliente)",
      "Un trigger de auditoría configurado por el DBA",
      "La restricción UNIQUE sobre id_pedido"
    ],
    ans: 0,
    exp: "FOREIGN KEY impone integridad REFERENCIAL: no pueden existir hijos (pedidos) apuntando a padres inexistentes (clientes). UNIQUE evita duplicados en la propia columna, no relaciones huérfanas."
  },
  {
    id: "a3-31", sub: "3.4",
    base: "Se crea vista_vendedores AS SELECT id, nombre, zona FROM empleado WHERE puesto='vendedor'; y solo se otorga permiso de consulta a esa vista, no a la tabla completa.",
    stem: "¿Qué beneficios aporta la vista en este escenario?",
    opts: [
      "Simplifica el acceso (oculta joins/filtros) y restringe visibilidad de columnas/filas (seguridad)",
      "Crea una copia física independiente que acelera todos los reportes",
      "Elimina la necesidad de índices en la tabla original"
    ],
    ans: 0,
    exp: "Una VIEW es una consulta almacenada: ABSTRAE complejidad para el usuario y actúa como capa de SEGURIDAD exponiendo solo columnas/filas autorizadas. Generalmente NO almacena datos (salvo vistas materializadas)."
  },
  {
    id: "a3-32", sub: "3.4",
    base: "Un portal guarda la sesión de cada usuario activo en Redis con TTL de 30 minutos; las lecturas superan 100k ops/s con latencia < 1 ms.",
    stem: "El modelo NoSQL elegido y su justificación son…",
    opts: [
      "Clave-valor, ideal para lookups ultrarrápidos por clave con datos simples y expirables",
      "Orientada a grafos, porque modela amistades entre sesiones",
      "Documental, porque Redis serializa JSON comprimido por diseño"
    ],
    ans: 0,
    exp: "Redis = CLAVE-VALOR en memoria: acceso O(1) por llave, perfecto para caché, sesiones y contadores. Grafos modelan relaciones transitables; documentales guardan JSON consultable pero no buscan esa latencia extrema."
  },
  {
    id: "a3-33", sub: "3.4",
    base: "Un servicio recibe payloads como: { \"cliente\": { \"id\": 12, \"tags\": [\"vip\", \"mayoreo\"] }, \"total\": 350.50 }",
    stem: "Este formato de dato se clasifica como…",
    opts: [
      "Semiestructurado: autocontenido, jerárquico y flexible sin esquema rígido (JSON/XML)",
      "Estructurado clásico de tabla relacional",
      "No estructurado binario como video o audio"
    ],
    ans: 0,
    exp: "SEMIESTRUCTURADO (JSON, XML, YAML): tiene organización interna etiquetada pero esquema flexible/extensible por documento. Estructurado = esquemas fijos (tablas); no estructurado = blobs sin semántica interna (multimedia)."
  },
  {
    id: "a3-34", sub: "3.4",
    base: "La lógica de cálculo de nómina reside en un procedimiento almacenado dentro de la base; las aplicaciones solo lo invocan pasando parámetros.",
    stem: "Una ventaja genuina de esta decisión es…",
    opts: [
      "Menos tráfico de red (viajan parámetros/resultados, no sentencias) y lógica centralizada reutilizable por cualquier aplicación",
      "Permite versionar la lógica con Git igual que el código front-end",
      "Garantiza portabilidad total del procedimiento entre Oracle, SQL Server y PostgreSQL sin cambios"
    ],
    ans: 0,
    exp: "STORED PROCEDURES: ejecutan cerca de los datos → menos round-trips, plan precompilado, seguridad granular y UNA sola fuente de verdad para la lógica compartida. Su sintaxis suele ser propietaria (poca portabilidad) y no viven en Git del app."
  },

  /* ==================== 3.5 PLATAFORMAS DE DESARROLLO ==================== */
  {
    id: "a3-35", sub: "3.5",
    base: "El equipo valida formularios con JavaScript en el navegador. El líder exige repetir TODAS las validaciones en el servidor.",
    stem: "La razón técnica correcta es que…",
    opts: [
      "La validación del cliente mejora la experiencia, pero puede eludirse (desactivar JS, peticiones directas); el servidor es la barrera de seguridad definitiva",
      "JavaScript no puede comparar cadenas, solo números",
      "Duplicar validaciones reduce el tamaño de la base de datos"
    ],
    ans: 0,
    exp: "«Never trust the client»: cualquier validación client-side es manipulable (devtools, curl, proxies). Client-side = UX fluida; SERVER-side = integridad y SEGURIDAD reales. Son complementarias, nunca excluyentes."
  },
  {
    id: "a3-36", sub: "3.5",
    base: "API REST de pedidos: GET /pedidos/5 repetido 10 veces no altera datos; PUT /pedidos/5 repetido deja el mismo resultado; POST /pedidos crea uno nuevo cada vez.",
    stem: "Sobre idempotencia HTTP, la afirmación correcta es…",
    opts: [
      "GET y PUT son idempotentes; POST no lo es porque cada llamada genera un nuevo recurso",
      "POST es idempotente si se envía JSON bien formado",
      "Todos los verbos son idempotentes si el servidor responde 200"
    ],
    ans: 0,
    exp: "IDEMPOTENTE = repetir la llamada no cambia el efecto neto: GET, PUT, DELETE sí; POST NO (crea recurso nuevo por invocación). Por eso reintentos automáticos son seguros con GET/PUT/DELETE y riesgosos con POST."
  },
  {
    id: "a3-37", sub: "3.5",
    base: "Una app de campo para inspectores necesita cámara profesional, GPS en segundo plano continuo, funcionamiento offline total y máximo rendimiento gráfico.",
    stem: "La plataforma más adecuada y su justificación:",
    opts: [
      "Nativa (Kotlin/Swift): acceso pleno a hardware/sensores, APIs del SO y mejor rendimiento sin capa puente",
      "Web responsiva: cualquier navegador moderno ya expone todos esos sensores offline",
      "CLI multiplataforma en Go compilada por dispositivo"
    ],
    ans: 0,
    exp: "APPS NATIVAS maximizan hardware (cámara, sensores, notificaciones), rendimiento y modo offline profundo al usar SDKs directos del SO. Las híbridas/web sacrifican parte de eso por portabilidad — trade-off central del desarrollo móvil."
  },
  {
    id: "a3-38", sub: "3.5",
    base: "El firmware de una lavadora industrial controla válvulas y motor leyendo sensores; debe reaccionar a la señal de sobrecalentamiento dentro de milisegundos garantizados, con apenas 256 KB de memoria.",
    stem: "El tipo de plataforma descrita y su restricción dominante son…",
    opts: [
      "Sistemas embebidos: recursos mínimos (memoria/energía) y requisitos de tiempo real determinista",
      "Computo en la nube serverless con escalado elástico",
      "Aplicación web progresiva con service workers"
    ],
    ans: 0,
    exp: "EMBEDDED: software grabado en hardware dedicado con memoria/energía limitadas y a menudo deadlines de TIEMPO REAL (respuesta garantizada, no solo rápida). La nube ofrece elasticidad opuesta a esas restricciones."
  },
  {
    id: "a3-39", sub: "3.5",
    base: "El mismo sitio muestra menú horizontal en escritorio (>992px), hamburguesa en tablet (≥768px) y tarjetas apiladas a una columna en teléfono (<576px).",
    stem: "La técnica de diseño responsable aplicada combina…",
    opts: [
      "Media queries CSS con grid/flexbox fluido que reorganiza el layout según el ancho del viewport",
      "Detección del modelo exacto de dispositivo con JavaScript propietario",
      "Publicar sitios separados por modelo de teléfono"
    ],
    ans: 0,
    exp: "RESPONSIVE DESIGN: media queries ajustan estilos por breakpoint de viewport; grids/flexbox fluyen y se reacomodan. Se diseña UNA vez para rangos de tamaños, no por modelos específicos."
  },
  {
    id: "a3-40", sub: "3.5",
    base: "En una planta sin internet estable, el punto de venta debe operar localmente, imprimir tickets en impresora USB y sincronizar cuando haya conexión.",
    stem: "La plataforma más apropiada es una aplicación…",
    opts: [
      "De escritorio instalada localmente, con acceso directo a periféricos y tolerancia a desconexiones",
      "Web SPA que confía en el caché del navegador indefinidamente",
      "Serverless cuya lógica corre en funciones remotas"
    ],
    ans: 0,
    exp: "DESKTOP: corre en la máquina local → funciona sin red, acceso nativo a impresoras/periféricos y datos locales sincronizables. Web/serverless dependen de conectividad para su núcleo operativo."
  },
  {
    id: "a3-41", sub: "3.5",
    base: "Una PWA permite instalarla desde el navegador al inicio del teléfono, abrirse en ventana propia y seguir mostrando el último contenido sin conexión gracias a sus service workers.",
    stem: "Las tecnologías/estrategias habilitantes de una PWA incluyen…",
    opts: [
      "Manifest (instalabilidad/apariencia) + Service Workers (caché y offline) + HTTPS obligatorio",
      "Applets de Java firmados digitalmente",
      "Compilación cruzada a binario ARM nativo"
    ],
    ans: 0,
    exp: "PWA = web app con MANIFEST (ícono, nombre, standalone), SERVICE WORKERS (proxy de red: caché offline, push) servida bajo HTTPS. Combina alcance web + experiencia tipo app nativa."
  },
  {
    id: "a3-42", sub: "3.5",
    base: "Un SaaS educativo enfrenta picos: 200 usuarios diarios, pero 15,000 concurrentes cada inicio de semestre durante 48 horas.",
    stem: "El atributo de la nube pública que resuelve directamente este patrón es…",
    opts: [
      "Elasticidad: escalar recursos automáticamente ante demanda y liberarlos después, pagando por uso",
      "Redundancia geográfica de centros de datos",
      "Aislamiento físico de servidores dedicados"
    ],
    ans: 0,
    exp: "ELASTICIDAD/autoscaling: infraestructura crece y decrece con la demanda real → absorbe picos sin sobreprovisionar permanentemente (modelo capex→opex). Redundancia habla de disponibilidad ante desastres, no de picos."
  }
];
