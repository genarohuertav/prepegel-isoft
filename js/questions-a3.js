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
    exp: "El JOIN relaciona tablas por la clave común (c.id_cliente = p.id_cliente) combinando columnas de ambas. La consulta con «WHERE id_pedido IS NOT NULL» usa una columna que CLIENTE no tiene, y «FROM cliente, pedido GROUP BY nombre» combina todas las filas sin condición (producto cartesiano) y agrupa sin función de agregación."
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
  },

  /* ============ AMPLIACIÓN GUÍA DIC 2026 · 3.1 LENGUAJES DE DESARROLLO ============ */
  {
    id: "a3-43", sub: "3.1",
    base: "En C:\n\nint x = 10;\nint *p = &x;\n*p = 25;\nprintf(\"%d\", x);",
    stem: "¿Qué imprime el programa?",
    opts: [
      "10, porque p recibió una copia del valor de x y no la variable",
      "25, porque p guarda la dirección de x y *p modifica su valor",
      "Una dirección de memoria, porque x quedó apuntando hacia p"
    ],
    ans: 1,
    exp: "&x obtiene la DIRECCIÓN de x y p la almacena. *p desreferencia el puntero: accede a la variable apuntada, así que asignar 25 a *p cambia x. Un puntero no es una copia del valor, y x sigue siendo un int, no un puntero."
  },
  {
    id: "a3-44", sub: "3.1",
    base: "Un servicio escrito en C ejecuta en cada petición: char *buf = malloc(4096); procesa los datos y regresa sin llamar a free(buf). Tras varios días, el proceso ocupa varios GB de memoria.",
    stem: "¿Cuál es la causa del problema?",
    opts: [
      "Un desbordamiento de pila por declarar demasiadas variables locales",
      "Un error de tipos que el compilador debió detectar al compilar",
      "Una fuga de memoria: lo reservado con malloc nunca se libera"
    ],
    ans: 2,
    exp: "En C la memoria dinámica (montículo o heap) se gestiona a mano: cada malloc necesita su free. Si no se libera, cada petición deja 4 KB ocupados y el consumo crece sin límite (fuga de memoria). La pila guarda variables locales y se libera sola al salir de la función; no es un error de tipos."
  },
  {
    id: "a3-45", sub: "3.1",
    base: "En JavaScript:\n\nconsole.log(\"5\" + 3);\nconsole.log(\"5\" - 3);",
    stem: "¿Qué se imprime y qué característica del lenguaje lo explica?",
    opts: [
      "«53» y 2: tipado débil con conversión implícita según el operador",
      "8 y 2: JavaScript convierte siempre las cadenas a números",
      "Error de tipos en ambas líneas, porque JS tiene tipado fuerte"
    ],
    ans: 0,
    exp: "JavaScript es de tipado DÉBIL y dinámico: convierte tipos de forma implícita (coerción). Con +, si un operando es cadena, concatena (\"5\" + 3 = \"53\"); con -, solo tiene sentido numérico y convierte \"5\" a 5 (5 - 3 = 2). No marca error de tipos."
  },
  {
    id: "a3-46", sub: "3.1",
    base: "Un equipo migra su front-end de JavaScript a TypeScript. Declara function total(precio: number, cantidad: number) y, en otro archivo, alguien escribe total(\"100\", 2).",
    stem: "¿Cuándo se detecta el error y por qué?",
    opts: [
      "Al ejecutar en el navegador, porque TypeScript se interpreta directo",
      "Al compilar a JavaScript, por la verificación estática de tipos",
      "Nunca, porque las anotaciones de TypeScript son solo comentarios"
    ],
    ans: 1,
    exp: "TypeScript añade tipado ESTÁTICO a JavaScript: el compilador (tsc) revisa los tipos antes de generar el JavaScript y rechaza pasar un string donde se espera number. El navegador no ejecuta TypeScript, sino el JavaScript resultante; y las anotaciones sí se verifican, no son comentarios."
  },
  {
    id: "a3-47", sub: "3.1",
    base: "En un sitio web clásico, un script PHP consulta la base de datos para armar la página y un script JavaScript valida el formulario mientras el usuario escribe.",
    stem: "¿Dónde se ejecuta cada lenguaje?",
    opts: [
      "Ambos en el navegador, pero PHP solo después de enviar el formulario",
      "PHP en el navegador y JavaScript en el servidor de base de datos",
      "PHP en el servidor al atender la petición; JavaScript en el navegador"
    ],
    ans: 2,
    exp: "PHP es un lenguaje del LADO DEL SERVIDOR: se ejecuta al recibir la petición y envía HTML ya generado. JavaScript en el navegador (lado del cliente) reacciona a lo que hace el usuario sin recargar. JavaScript también puede correr en el servidor con Node.js, pero en este escenario valida en el cliente."
  },
  {
    id: "a3-48", sub: "3.1",
    base: "En Java, la clase Cuenta declara protected double saldo; la clase CuentaAhorro, ubicada en OTRO paquete, extiende a Cuenta.",
    stem: "¿Desde dónde puede accederse directamente a saldo?",
    opts: [
      "Solo desde la propia clase Cuenta, igual que si fuera private",
      "Desde Cuenta, las clases de su paquete y subclases como CuentaAhorro",
      "Desde cualquier clase del proyecto, igual que si fuera public"
    ],
    ans: 1,
    exp: "protected permite el acceso desde la misma clase, desde las clases del mismo paquete y desde las subclases aunque estén en otro paquete. private lo limita a la clase; public lo abre a todas; sin modificador (package-private) solo al paquete."
  },
  {
    id: "a3-49", sub: "3.1",
    base: "class Contador {\n  static int total = 0;\n  Contador() { total++; }\n}\nSe crean tres objetos: new Contador() tres veces.",
    stem: "¿Cuánto vale Contador.total al final y por qué?",
    opts: [
      "3, porque total es de clase y lo comparten todas las instancias",
      "1, porque cada objeto tiene su propia copia del atributo total",
      "0, porque un atributo static no puede modificarse en el constructor"
    ],
    ans: 0,
    exp: "Un atributo static pertenece a la CLASE, no a cada objeto: existe una sola copia compartida. Cada constructor la incrementa, así que tras tres objetos vale 3. Los atributos de instancia (sin static) sí tienen una copia por objeto; static no significa constante (eso sería final)."
  },
  {
    id: "a3-50", sub: "3.1",
    base: "void duplicar(int n) { n = n * 2; }\n...\nint a = 5;\nduplicar(a);\nSystem.out.println(a);",
    stem: "¿Qué imprime este código Java?",
    opts: [
      "10, porque Java pasa todas las variables por referencia",
      "Error de compilación, porque un parámetro no se puede reasignar",
      "5, porque el int se pasa por valor y solo cambia la copia local"
    ],
    ans: 2,
    exp: "Java pasa los argumentos POR VALOR. Con tipos primitivos (int) el método recibe una copia: cambiar n no afecta a a. Con objetos se copia la referencia, por eso un método sí puede modificar el contenido de un arreglo, pero no la variable original. Reasignar un parámetro es válido."
  },
  {
    id: "a3-51", sub: "3.1",
    base: "Un servidor de impresión compartido debe atender los trabajos exactamente en el orden en que llegan.",
    stem: "¿Qué estructura de datos es la adecuada?",
    opts: [
      "Una pila, que atiende primero el último trabajo que llegó",
      "Una cola, que atiende primero el trabajo que llegó antes",
      "Un árbol binario, que ordena los trabajos según su tamaño"
    ],
    ans: 1,
    exp: "La COLA es FIFO (primero en entrar, primero en salir): encolar al final y atender al frente respeta el orden de llegada. La pila es LIFO (útil para deshacer o para llamadas a funciones) y el árbol ordena por una clave, no por llegada."
  },
  {
    id: "a3-52", sub: "3.1",
    base: "Una aplicación inserta y elimina elementos con mucha frecuencia al INICIO de una colección grande y casi nunca accede a un elemento por su posición.",
    stem: "¿Qué estructura conviene y por qué?",
    opts: [
      "Arreglo, porque acceder por índice cuesta O(1)",
      "Tabla hash, porque conserva el orden de inserción",
      "Lista enlazada, porque insertar al inicio es O(1)"
    ],
    ans: 2,
    exp: "En una LISTA ENLAZADA insertar o borrar al inicio solo reasigna referencias: O(1). En un arreglo hay que desplazar todos los elementos: O(n). Su ventaja (acceso por índice O(1)) no sirve aquí porque casi no se usa. Una tabla hash no está pensada para mantener un orden."
  },
  {
    id: "a3-53", sub: "3.1",
    base: "Se almacenan 1,000,000 de claves en un árbol binario de búsqueda BALANCEADO.",
    stem: "¿Cuántas comparaciones se necesitan, aproximadamente, para encontrar una clave en el peor caso?",
    opts: [
      "Unas 20, porque la altura del árbol crece como log₂ n",
      "Unas 1,000, porque se recorre la raíz cuadrada de n",
      "Hasta 1,000,000, porque se compara con cada nodo"
    ],
    ans: 0,
    exp: "En un árbol balanceado cada comparación descarta la mitad de los nodos restantes: la búsqueda es O(log n). log₂(1,000,000) ≈ 20. Recorrer todos los nodos (O(n)) solo ocurre si el árbol degenera en una lista, por ejemplo al insertar claves ya ordenadas sin balancear."
  },
  {
    id: "a3-54", sub: "3.1",
    base: "function cuenta(n) {\n  return cuenta(n - 1) + 1;\n}\ncuenta(5);",
    stem: "¿Qué ocurre al ejecutar la función?",
    opts: [
      "Devuelve 5, porque se detiene sola al llegar a 0",
      "Desborda la pila: falta un caso base que detenga la recursión",
      "Devuelve 0, porque la resta anula la suma en cada llamada"
    ],
    ans: 1,
    exp: "Toda función recursiva necesita un CASO BASE (p. ej., if (n === 0) return 0) que corte las llamadas. Sin él, cuenta se invoca indefinidamente, cada llamada ocupa un marco en la pila de ejecución y el programa termina con desbordamiento de pila (stack overflow)."
  },

  /* ============ AMPLIACIÓN GUÍA DIC 2026 · 3.2 PARADIGMAS DE PROGRAMACIÓN ============ */
  {
    id: "a3-55", sub: "3.2",
    base: "Base de conocimiento en Prolog:\n\nprogenitor(rosa, luis).\nprogenitor(rosa, ana).\nprogenitor(luis, pedro).\nhermano(X, Y) :- progenitor(P, X), progenitor(P, Y), X \\= Y.\n\nConsulta: ?- hermano(ana, Z).",
    stem: "¿Qué responde Prolog?",
    opts: [
      "Z = luis",
      "Z = pedro",
      "Z = rosa"
    ],
    ans: 0,
    exp: "Prolog unifica X = ana y busca un progenitor de ana: P = rosa. Después busca otro hijo de rosa (progenitor(rosa, Y)) distinto de ana: Y = luis, que se liga a Z. pedro es hijo de luis (sobrino de ana) y rosa es la madre."
  },
  {
    id: "a3-56", sub: "3.2",
    base: "ancestro(X, Y) :- progenitor(X, Y).\nancestro(X, Y) :- progenitor(X, Z), ancestro(Z, Y).\n\nHechos: progenitor(rosa, luis). progenitor(luis, pedro).\nConsulta: ?- ancestro(rosa, pedro).",
    stem: "¿Cuál es el resultado y cómo se obtiene?",
    opts: [
      "false, porque no existe el hecho progenitor(rosa, pedro)",
      "true, porque Prolog da por cierto todo lo no declarado",
      "true, al aplicar la regla recursiva con Z = luis"
    ],
    ans: 2,
    exp: "La primera regla falla (no hay progenitor(rosa, pedro)). Por backtracking, Prolog prueba la segunda: progenitor(rosa, Z) da Z = luis, y ancestro(luis, pedro) se cumple por la primera regla. La recursión permite deducir relaciones que no están escritas como hechos."
  },
  {
    id: "a3-57", sub: "3.2",
    base: "Una base de conocimiento en Prolog solo contiene hechos sobre la familia de Rosa. Se consulta ?- progenitor(marta, X). y el intérprete responde false.",
    stem: "¿Cómo debe interpretarse esa respuesta?",
    opts: [
      "Que no puede demostrarse con los hechos dados (mundo cerrado)",
      "Que Marta no tiene hijos en la realidad, pues Prolog lo verificó",
      "Que la consulta tiene un error de sintaxis y no se ejecutó"
    ],
    ans: 0,
    exp: "Prolog trabaja con el SUPUESTO DE MUNDO CERRADO y la negación por falla: lo que no puede deducir de su base de conocimiento lo responde como false. No significa que sea falso en la realidad, sino que no hay hechos ni reglas que lo prueben. Un error de sintaxis produciría un mensaje de error, no false."
  },
  {
    id: "a3-58", sub: "3.2",
    base: "En Haskell:\n\nmap (*2) (filter even [1..6])",
    stem: "¿Cuál es el resultado de evaluar la expresión?",
    opts: [
      "[2,4,6,8,10,12]",
      "[2,6,10]",
      "[4,8,12]"
    ],
    ans: 2,
    exp: "Se evalúa de adentro hacia afuera: filter even [1..6] conserva los pares, [2,4,6]; luego map (*2) duplica cada uno: [4,8,12]. Duplicar todos los números daría [2,4,…,12], y [2,6,10] serían los impares duplicados."
  },
  {
    id: "a3-59", sub: "3.2",
    base: "En Haskell:\n\nfoldr (\\x acc -> x + acc) 0 [3, 5, 7]",
    stem: "¿Qué valor produce y qué hace foldr?",
    opts: [
      "[3, 8, 15], porque devuelve las sumas parciales de la lista",
      "15, porque reduce la lista combinando cada elemento con el acumulador",
      "0, porque el acumulador inicial es inmutable y no puede cambiar"
    ],
    ans: 1,
    exp: "foldr es una función de orden superior que REDUCE (pliega) una lista a un valor: 3 + (5 + (7 + 0)) = 15. Las sumas parciales las da scanl. La inmutabilidad no impide el cálculo: cada paso produce un valor nuevo en lugar de modificar uno existente."
  },
  {
    id: "a3-60", sub: "3.2",
    base: "longitud :: [a] -> Int\nlongitud []     = 0\nlongitud (_:xs) = 1 + longitud xs",
    stem: "¿Qué técnicas del paradigma funcional se aplican?",
    opts: [
      "Un ciclo con una variable contadora que se va modificando",
      "Coincidencia de patrones y recursión sobre la estructura",
      "Herencia y polimorfismo de subtipos aplicados a listas"
    ],
    ans: 1,
    exp: "Cada ecuación se elige por COINCIDENCIA DE PATRONES: [] es la lista vacía (caso base) y (_:xs) separa la cabeza del resto. La función se llama a sí misma con xs (recursión) en lugar de usar un ciclo con una variable mutable. No hay clases ni herencia."
  },
  {
    id: "a3-61", sub: "3.2",
    base: "En Haskell, take 3 [10, 20 ..] devuelve [10,20,30], aunque [10, 20 ..] describe una lista infinita.",
    stem: "¿Qué característica del lenguaje lo hace posible?",
    opts: [
      "La recolección de basura libera la lista antes de que crezca",
      "El tipado estático limita la lista a los elementos pedidos",
      "La evaluación perezosa calcula solo los elementos que se piden"
    ],
    ans: 2,
    exp: "Haskell usa EVALUACIÓN PEREZOSA (lazy): una expresión se calcula solo cuando su valor se necesita. take 3 pide tres elementos y la lista infinita nunca se genera completa. Con evaluación estricta, construir la lista no terminaría nunca."
  },
  {
    id: "a3-62", sub: "3.2",
    base: "suma :: Int -> Int -> Int\nsuma x y = x + y\n\nincrementa = suma 1",
    stem: "¿Qué es incrementa?",
    opts: [
      "Una función que recibe un Int y le suma 1",
      "Un error, porque a suma le falta un argumento",
      "El número 1, porque y vale 0 por omisión"
    ],
    ans: 0,
    exp: "En Haskell las funciones están CURRIFICADAS: suma recibe un argumento y devuelve otra función que espera el segundo. Aplicar solo el 1 (aplicación parcial) produce una función nueva: incrementa 5 da 6. No hay valores por omisión ni error."
  },
  {
    id: "a3-63", sub: "3.2",
    base: "Un equipo quiere cachear resultados de cálculos y ejecutarlos en paralelo sin bloqueos. Para lograrlo, exige que las funciones del módulo de cálculo sean PURAS.",
    stem: "¿Qué propiedad de las funciones puras hace seguras ambas optimizaciones?",
    opts: [
      "Encapsulamiento: el estado queda oculto dentro de objetos con métodos de acceso",
      "Transparencia referencial: misma entrada, mismo resultado, sin efectos secundarios",
      "Enlace dinámico: la implementación se elige en tiempo de ejecución según el tipo"
    ],
    ans: 1,
    exp: "Con TRANSPARENCIA REFERENCIAL una llamada puede sustituirse por su resultado: si la entrada es la misma, el resultado también, y no se modifica estado compartido. Por eso se puede cachear (memoización) y ejecutar en paralelo sin condiciones de carrera. Encapsulamiento y enlace dinámico son conceptos de la POO."
  },
  {
    id: "a3-64", sub: "3.2",
    base: "La clase Calculadora tiene sumar(int, int) y sumar(double, double). La subclase CalculadoraCientifica redefine el método toString() heredado de Object.",
    stem: "¿Qué mecanismos se usan, respectivamente?",
    opts: [
      "Sobrescritura en ambos casos, porque los métodos se llaman igual",
      "Sobrecarga en toString() y sobrescritura en los dos métodos sumar",
      "Sobrecarga en los métodos sumar y sobrescritura en toString()"
    ],
    ans: 2,
    exp: "SOBRECARGA (overloading): varios métodos con el mismo nombre y distintos parámetros en la misma clase; se elige al compilar. SOBRESCRITURA (overriding): una subclase redefine un método heredado con la misma firma; se elige en tiempo de ejecución (polimorfismo)."
  },
  {
    id: "a3-65", sub: "3.2",
    base: "Un analista compara dos soluciones: (1) un ciclo que recorre la lista de empleados y acumula los que ganan más de 20,000; (2) SELECT * FROM empleado WHERE sueldo > 20000;",
    stem: "¿Qué diferencia de paradigma muestran?",
    opts: [
      "(1) es imperativa (cómo obtenerlo) y (2) declarativa (qué se quiere)",
      "(1) es declarativa y (2) imperativa, porque SQL describe los pasos",
      "Ambas son imperativas, porque las dos recorren la tabla fila por fila"
    ],
    ans: 0,
    exp: "La versión IMPERATIVA indica paso a paso cómo recorrer y acumular. SQL es DECLARATIVO: describe el resultado deseado y el gestor de base de datos decide cómo obtenerlo (índices, orden de recorrido). La programación lógica y la funcional también son declarativas."
  },

  /* ============ AMPLIACIÓN GUÍA DIC 2026 · 3.3 ENTORNOS DE DESARROLLO ============ */
  {
    id: "a3-66", sub: "3.3",
    base: "Un tester documenta: «CP-014. Precondición: usuario registrado. Pasos: 1) abrir el inicio de sesión, 2) capturar correo y contraseña válidos, 3) pulsar Entrar. Datos: ana@ejemplo.mx / Clave#2026. ________: se muestra el tablero principal en menos de 3 s.»",
    stem: "¿Qué elemento del caso de prueba falta en el espacio?",
    opts: [
      "Criterio de entrada",
      "Resultado esperado",
      "Severidad del defecto"
    ],
    ans: 1,
    exp: "Un caso de prueba documenta identificador, precondiciones, pasos, datos de entrada y RESULTADO ESPERADO; al ejecutarlo se compara con el resultado obtenido para decidir si pasa o falla. Los criterios de entrada pertenecen al plan de pruebas y la severidad, al reporte de defectos."
  },
  {
    id: "a3-67", sub: "3.3",
    base: "Antes de iniciar las pruebas del sistema, la líder de calidad redacta un documento con el alcance, los elementos que se probarán y los excluidos, el enfoque, los recursos, el calendario, los riesgos y los criterios de inicio y terminación.",
    stem: "Según ISO/IEC/IEEE 29119-3, ¿qué documento de pruebas es?",
    opts: [
      "El reporte de incidentes",
      "La especificación de casos",
      "El plan de pruebas"
    ],
    ans: 2,
    exp: "El PLAN DE PRUEBAS define qué se probará, cómo, con qué recursos, cuándo y con qué criterios se empieza y se termina. La especificación de casos detalla cada prueba (pasos, datos, resultado esperado) y el reporte de incidentes registra los fallos encontrados."
  },
  {
    id: "a3-68", sub: "3.3",
    base: "Durante la ejecución un caso falla. El tester registra: identificador, versión probada, pasos para reproducir, resultado esperado frente al obtenido, severidad, captura de pantalla y estado (abierto).",
    stem: "Este registro corresponde a…",
    opts: [
      "Un reporte de incidente o defecto",
      "Un plan maestro de pruebas",
      "Un acta de aceptación del cliente"
    ],
    ans: 0,
    exp: "El REPORTE DE INCIDENTE (o defecto) permite a desarrollo reproducir y corregir el fallo, y a calidad darle seguimiento por estado y severidad. Los pasos para reproducir y la comparación esperado/obtenido son sus elementos clave."
  },
  {
    id: "a3-69", sub: "3.3",
    base: "Un campo «edad» acepta valores enteros de 18 a 65, inclusive.",
    stem: "Con análisis de valores límite, ¿qué conjunto de datos de prueba es el más adecuado?",
    opts: [
      "20, 30, 40 y 50",
      "0, -1, 100 y 1000",
      "17, 18, 65 y 66"
    ],
    ans: 2,
    exp: "Los errores suelen aparecer en las FRONTERAS (p. ej., usar < en vez de <=). El análisis de valores límite prueba cada límite y el valor justo afuera: 17 (inválido), 18 (válido), 65 (válido) y 66 (inválido). Los valores intermedios o muy alejados no revisan las fronteras."
  },
  {
    id: "a3-70", sub: "3.3",
    base: "Para el mismo campo «edad» (18 a 65), el equipo define tres clases: menores de 18, de 18 a 65 y mayores de 65, y elige un valor representativo de cada una.",
    stem: "¿Qué técnica de prueba de caja negra aplicó?",
    opts: [
      "Partición de equivalencia",
      "Cobertura de decisiones",
      "Prueba de mutación"
    ],
    ans: 0,
    exp: "La PARTICIÓN DE EQUIVALENCIA divide las entradas en clases que el sistema debería tratar igual y prueba un representativo de cada una, reduciendo el número de casos. La cobertura de decisiones es de caja blanca (mira el código) y la prueba de mutación evalúa la calidad de la suite de pruebas."
  },
  {
    id: "a3-71", sub: "3.3",
    base: "@Test\nvoid calculaIva() {\n  assertEquals(116.0, factura.totalConIva(100.0), 0.001);\n}",
    stem: "¿Qué hace esta prueba de JUnit?",
    opts: [
      "Verifica que totalConIva devuelva 116.0 para un subtotal de 100.0",
      "Mide el tiempo de respuesta de totalConIva con muchos usuarios",
      "Revisa que la pantalla muestre el total con el formato correcto"
    ],
    ans: 0,
    exp: "Es una PRUEBA UNITARIA: ejecuta un método aislado y compara (assertEquals) el valor esperado, 116.0, con el obtenido, con una tolerancia de 0.001 por ser double. Si no coinciden, la prueba falla. No mide rendimiento ni revisa la interfaz."
  },
  {
    id: "a3-72", sub: "3.3",
    base: "La clase ServicioPagos llama a una pasarela bancaria externa. En las pruebas unitarias, el equipo sustituye la pasarela por un objeto simulado que siempre responde «aprobado» y registra si fue invocado.",
    stem: "¿Qué se está usando y con qué propósito?",
    opts: [
      "Un perfilador, para medir la memoria que usa el servicio",
      "Un mock, para aislar la unidad de su dependencia externa",
      "Un depurador remoto, para inspeccionar la pasarela real"
    ],
    ans: 1,
    exp: "Un MOCK (o doble de prueba) reemplaza una dependencia real que es lenta, costosa o impredecible. Así la prueba unitaria evalúa solo ServicioPagos, siempre da el mismo resultado y además permite verificar que la pasarela se haya llamado."
  },
  {
    id: "a3-73", sub: "3.3",
    base: "if (monto > 1000) { descuento = 0.1; }\ntotal = monto - monto * descuento;\n\nCon una sola prueba (monto = 1500) se ejecutan todas las líneas.",
    stem: "¿Qué cobertura se logra con esa única prueba?",
    opts: [
      "100 % de sentencias y 100 % de ramas",
      "100 % de sentencias, pero 50 % de ramas",
      "50 % de sentencias y 100 % de ramas"
    ],
    ans: 1,
    exp: "Con 1500 se ejecutan todas las SENTENCIAS (100 %), pero el if solo se evalúa como verdadero: la rama falsa (monto ≤ 1000) nunca se prueba, así que la cobertura de RAMAS es 50 %. Por eso la cobertura de ramas es un criterio más exigente que la de sentencias."
  },
  {
    id: "a3-74", sub: "3.3",
    base: "Tras corregir un error en el cálculo de impuestos, el equipo vuelve a ejecutar automáticamente toda la suite de pruebas existente para confirmar que no se dañó nada que antes funcionaba.",
    stem: "¿Qué tipo de prueba realiza?",
    opts: [
      "Prueba de regresión",
      "Prueba de aceptación",
      "Prueba de humo"
    ],
    ans: 0,
    exp: "La prueba de REGRESIÓN verifica que un cambio no rompió funcionalidad existente; por eso conviene automatizarla. La de aceptación la valida el cliente contra sus criterios, y la de humo es una revisión rápida de que lo esencial arranca."
  },
  {
    id: "a3-75", sub: "3.3",
    base: "Dos proyectos Python en la misma computadora necesitan versiones distintas de la librería requests. Al instalar la versión de uno, el otro deja de funcionar.",
    stem: "¿Cuál es la solución estándar?",
    opts: [
      "Instalar ambas versiones en el Python global y elegir una al ejecutar",
      "Copiar el código de requests dentro de cada proyecto y modificarlo",
      "Un entorno virtual (venv) por proyecto con su lista de dependencias"
    ],
    ans: 2,
    exp: "Un ENTORNO VIRTUAL aísla las librerías de cada proyecto. Con un archivo de dependencias versionado (requirements.txt o pyproject) cualquiera puede recrear el mismo entorno. El Python global admite una sola versión por paquete, y copiar librerías complica las actualizaciones de seguridad."
  },
  {
    id: "a3-76", sub: "3.3",
    base: "Una aplicación funciona en la laptop del desarrollador, pero falla en el servidor de pruebas por diferencias en la versión del sistema operativo y de las librerías instaladas.",
    stem: "¿Qué herramienta resuelve el problema de raíz?",
    opts: [
      "Un depurador con puntos de ruptura en el servidor de pruebas",
      "Un linter que unifique el estilo del código en ambos equipos",
      "Un contenedor (p. ej., Docker) con la app y sus dependencias"
    ],
    ans: 2,
    exp: "Un CONTENEDOR empaqueta la aplicación con su entorno (librerías, configuración, versión de runtime) en una imagen que se ejecuta igual en cualquier máquina con el motor de contenedores. Elimina el «en mi máquina sí funciona». El depurador ayuda a encontrar el fallo, pero no evita las diferencias de entorno."
  },
  {
    id: "a3-77", sub: "3.3",
    base: "Un commit con un error ya se subió a la rama main compartida y varios compañeros ya lo descargaron.",
    stem: "¿Cómo debe deshacerse el cambio sin reescribir la historia compartida?",
    opts: [
      "Con git revert, que crea un commit nuevo que anula el cambio",
      "Con git reset --hard al commit anterior y luego git push --force",
      "Borrando la rama main y creándola de nuevo desde una copia local"
    ],
    ans: 0,
    exp: "git REVERT agrega un commit que invierte los cambios: la historia se conserva y los demás solo hacen pull. reset más push --force reescribe la historia publicada y desincroniza a quien ya descargó el commit; borrar la rama es aún más riesgoso."
  },
  {
    id: "a3-78", sub: "3.3",
    base: "Un equipo quiere detectar, antes de desplegar, posibles inyecciones SQL y contraseñas escritas en el código, revisando el código fuente sin ejecutar la aplicación.",
    stem: "¿Qué tipo de herramienta de validación necesita?",
    opts: [
      "Una prueba de carga con miles de usuarios virtuales",
      "Un análisis estático de seguridad del código (SAST)",
      "Un perfilador de rendimiento en tiempo de ejecución"
    ],
    ans: 1,
    exp: "El ANÁLISIS ESTÁTICO (SAST) revisa el código fuente sin ejecutarlo y detecta patrones inseguros: concatenar entradas en sentencias SQL, credenciales en el código, etc. Las pruebas de carga y los perfiladores son dinámicos (requieren ejecutar) y miden rendimiento, no vulnerabilidades."
  },

  /* ============ AMPLIACIÓN GUÍA DIC 2026 · 3.4 GESTIÓN DE DATOS ============ */
  {
    id: "a3-79", sub: "3.4",
    base: "Una cadena con sucursales en Monterrey, CDMX y Mérida divide la tabla CLIENTE para que cada sitio guarde solo las filas de los clientes de su región. Todos los sitios conservan las mismas columnas.",
    stem: "¿Qué tipo de fragmentación se aplicó?",
    opts: [
      "Vertical",
      "Mixta",
      "Horizontal"
    ],
    ans: 2,
    exp: "La fragmentación HORIZONTAL reparte FILAS según una condición (aquí, la región) y cada fragmento conserva todas las columnas; la tabla se reconstruye con UNION. La vertical reparte COLUMNAS y la mixta combina ambas."
  },
  {
    id: "a3-80", sub: "3.4",
    base: "En un hospital, la tabla PACIENTE se divide en dos sitios: (id, nombre, teléfono) en recepción y (id, diagnóstico, tratamiento) en el área clínica. Ambos fragmentos conservan la columna id.",
    stem: "¿Por qué los dos fragmentos verticales deben conservar id?",
    opts: [
      "Para reconstruir la tabla original con un JOIN por la clave",
      "Para que cada sitio ordene sus registros alfabéticamente",
      "Porque ninguna tabla puede existir sin clave autonumérica"
    ],
    ans: 0,
    exp: "En la fragmentación VERTICAL cada fragmento lleva un subconjunto de columnas MÁS la clave primaria. Así la tabla completa se recupera con un JOIN por id (condición de reconstrucción). Además, el diseño separa los datos clínicos sensibles de los administrativos."
  },
  {
    id: "a3-81", sub: "3.4",
    base: "Al validar un diseño de fragmentación horizontal, el administrador revisa que cada fila quede en algún fragmento, que la unión de los fragmentos reproduzca la tabla y que ninguna fila quede repetida en dos fragmentos.",
    stem: "¿Cómo se llaman esas tres condiciones de corrección?",
    opts: [
      "Atomicidad, consistencia y aislamiento",
      "Disponibilidad, tolerancia y escalabilidad",
      "Completitud, reconstrucción y disyunción"
    ],
    ans: 2,
    exp: "Una fragmentación correcta cumple COMPLETITUD (ningún dato se pierde), RECONSTRUCCIÓN (se puede recuperar la relación original) y DISYUNCIÓN (en la horizontal, ninguna fila está en dos fragmentos). Atomicidad, consistencia y aislamiento son propiedades ACID de las transacciones."
  },
  {
    id: "a3-82", sub: "3.4",
    base: "Un sistema de pagos replica su base de datos en un segundo centro de datos. La regla de negocio dice que no puede perderse ninguna transacción ya confirmada aunque el sitio principal falle de golpe.",
    stem: "¿Qué replicación cumple la regla y qué costo implica?",
    opts: [
      "Asíncrona: confirma de inmediato y copia después, sin costo extra",
      "Síncrona: cada escritura espera a la réplica, con más latencia",
      "Ninguna: basta con un respaldo completo al terminar cada día"
    ],
    ans: 1,
    exp: "En la replicación SÍNCRONA una transacción se confirma solo cuando la réplica también la tiene: si el principal cae, no se pierde nada, a cambio de mayor latencia en cada escritura. La asíncrona es más rápida, pero puede perder las últimas transacciones no copiadas; un respaldo diario perdería todo el día."
  },
  {
    id: "a3-83", sub: "3.4",
    base: "Una app de inventario permite escribir en tres sitios a la vez (replicación multimaestro). Dos sucursales modifican la existencia del mismo producto casi al mismo tiempo.",
    stem: "¿Qué problema propio de este esquema debe resolverse?",
    opts: [
      "Los conflictos de actualización, con una política de resolución",
      "Que las sucursales secundarias no puedan leer ningún dato",
      "Que la clave primaria se pierda al copiar filas entre sitios"
    ],
    ans: 0,
    exp: "En MULTIMAESTRO cualquier sitio acepta escrituras, así que dos cambios simultáneos al mismo dato pueden chocar. Se necesita detectarlos y resolverlos (última escritura gana, prioridad por sitio, fusión o revisión manual). En maestro-esclavo el problema no existe porque solo escribe el maestro."
  },
  {
    id: "a3-84", sub: "3.4",
    base: "Durante una falla de red, los nodos de una base de datos distribuida quedan incomunicados entre sí. El sistema decide seguir respondiendo en todos los nodos, aunque algunos entreguen datos desactualizados.",
    stem: "Según el teorema CAP, ¿qué propiedad sacrificó durante la partición?",
    opts: [
      "La disponibilidad",
      "La consistencia",
      "La tolerancia a particiones"
    ],
    ans: 1,
    exp: "El teorema CAP indica que, ante una PARTICIÓN de red, un sistema distribuido debe elegir entre CONSISTENCIA (todos ven el mismo dato) y DISPONIBILIDAD (todos responden). Este sistema siguió respondiendo (eligió disponibilidad) y sacrificó la consistencia. La tolerancia a particiones no es opcional en un sistema distribuido."
  },
  {
    id: "a3-85", sub: "3.4",
    base: "Una plataforma de IoT recibe millones de lecturas de sensores por hora. Las consultas típicas agregan pocas columnas (temperatura y fecha) sobre volúmenes enormes de filas.",
    stem: "¿Qué modelo NoSQL se ajusta mejor?",
    opts: [
      "Columnar, por su escritura masiva y lectura por columnas",
      "De grafos, porque relaciona cada sensor con sus vecinos",
      "Clave-valor, porque cada lectura tiene un identificador"
    ],
    ans: 0,
    exp: "Las bases COLUMNARES o de familias de columnas (p. ej., Cassandra) están optimizadas para escrituras masivas distribuidas y para leer solo las columnas necesarias, ideal para series de tiempo. Grafos sirve para recorrer relaciones; clave-valor, para buscar por clave, no para agregar millones de registros."
  },
  {
    id: "a3-86", sub: "3.4",
    base: "Una red social necesita responder en tiempo real consultas como «amigos de mis amigos que compraron el mismo libro que yo», recorriendo relaciones de varios niveles.",
    stem: "¿Qué tipo de base de datos es la más adecuada?",
    opts: [
      "Orientada a grafos, como Neo4j",
      "Documental, como MongoDB",
      "Clave-valor, como Redis"
    ],
    ans: 0,
    exp: "Una base ORIENTADA A GRAFOS guarda nodos y aristas explícitas y recorre relaciones de varios saltos sin JOINs costosos; su lenguaje de consulta (p. ej., Cypher) expresa patrones de caminos. En documental o clave-valor habría que reconstruir las relaciones en la aplicación."
  },
  {
    id: "a3-87", sub: "3.4",
    base: "En MongoDB, la colección pedidos tiene documentos como:\n{ cliente: \"Ana\", total: 750, estado: \"pagado\" }",
    stem: "¿Qué consulta obtiene los pedidos pagados con total mayor que 500?",
    opts: [
      "SELECT * FROM pedidos WHERE estado = 'pagado' AND total > 500",
      "db.pedidos.find({ estado: \"pagado\" }).total > 500",
      "db.pedidos.find({ estado: \"pagado\", total: { $gt: 500 } })"
    ],
    ans: 2,
    exp: "En MongoDB se consulta con find y un documento filtro: los campos se combinan como condiciones Y, y los operadores de comparación usan el prefijo $ ($gt = mayor que, $lt = menor que). SELECT es SQL relacional, y comparar el resultado de find con > no filtra documentos."
  },
  {
    id: "a3-88", sub: "3.4",
    base: "Un catálogo en una base NoSQL distribuida acepta que, tras actualizar un precio, algunos usuarios vean el precio anterior durante unos segundos, a cambio de alta disponibilidad y escalabilidad.",
    stem: "¿Qué modelo de consistencia describe esta decisión?",
    opts: [
      "ACID con aislamiento serializable",
      "BASE con consistencia eventual",
      "Bloqueo estricto en dos fases"
    ],
    ans: 1,
    exp: "BASE (Basically Available, Soft state, Eventually consistent) prioriza la disponibilidad: las réplicas convergen al mismo valor con el tiempo (consistencia EVENTUAL). ACID con aislamiento serializable y el bloqueo en dos fases garantizan consistencia inmediata, a costa de disponibilidad y latencia."
  },

  /* ============ AMPLIACIÓN GUÍA DIC 2026 · 3.5 PLATAFORMAS DE DESARROLLO ============ */
  {
    id: "a3-89", sub: "3.5",
    base: "Una startup con dos desarrolladores web debe lanzar en tres meses una app para Android e iOS con formularios, listas y uso básico de la cámara. El rendimiento gráfico no es crítico.",
    stem: "¿Qué enfoque conviene más?",
    opts: [
      "Dos apps nativas separadas, una en Kotlin y otra en Swift",
      "Un framework multiplataforma como Flutter o React Native",
      "Un firmware embebido distinto para cada modelo de teléfono"
    ],
    ans: 1,
    exp: "Un framework MULTIPLATAFORMA genera apps para Android e iOS desde un solo código, con acceso a la cámara mediante complementos. Con un equipo pequeño y poco tiempo, reduce costo y plazo. Las apps nativas convienen cuando se requiere máximo rendimiento o APIs muy específicas, a cambio de mantener dos bases de código."
  },
  {
    id: "a3-90", sub: "3.5",
    base: "En una app Android, el usuario llena un formulario largo, recibe una llamada y, al volver, los datos se perdieron porque el sistema destruyó la actividad para liberar memoria.",
    stem: "¿Qué debe hacer el desarrollador?",
    opts: [
      "Impedir que el sistema operativo pause la app mientras haya datos capturados",
      "Guardar el estado en los métodos del ciclo de vida y restaurarlo al volver",
      "Pedir de nuevo todos los datos al usuario cada vez que la actividad se reanude"
    ],
    ans: 1,
    exp: "El sistema operativo móvil controla el CICLO DE VIDA: puede pausar o destruir una actividad en cualquier momento. La app debe guardar el estado (p. ej., en onPause/onSaveInstanceState o en un ViewModel) y restaurarlo. Una app no puede impedir que el sistema la pause."
  },
  {
    id: "a3-91", sub: "3.5",
    base: "Una app móvil necesita la ubicación del usuario solo cuando este pulsa «Buscar sucursal cercana».",
    stem: "¿Cuál es la práctica correcta de permisos en Android e iOS?",
    opts: [
      "Solicitar el permiso en tiempo de ejecución, justo cuando se necesita",
      "Pedir todos los permisos al instalar la app, aunque no se usen todavía",
      "Leer la ubicación sin pedir permiso, porque es un dato no confidencial"
    ],
    ans: 0,
    exp: "Las plataformas móviles actuales usan PERMISOS EN TIEMPO DE EJECUCIÓN para datos sensibles como la ubicación: se piden en el momento en que se usan, explicando para qué, y el usuario puede negarlos. La app debe funcionar aunque los niegue. La ubicación sí es un dato personal protegido."
  },
  {
    id: "a3-92", sub: "3.5",
    base: "Una app para levantar encuestas se usa en comunidades sin cobertura celular; las respuestas deben llegar al servidor en cuanto haya señal.",
    stem: "¿Qué estrategia de diseño se requiere?",
    opts: [
      "Bloquear la captura hasta que el teléfono detecte una red disponible",
      "Guardar localmente (p. ej., SQLite) y sincronizar al recuperar la red",
      "Enviar cada respuesta por SMS en lugar de usar el servidor central"
    ],
    ans: 1,
    exp: "El enfoque OFFLINE-FIRST guarda los datos en el dispositivo (SQLite u otro almacenamiento local) y los sincroniza en segundo plano cuando hay conexión, con reintentos y manejo de conflictos. Bloquear la captura vuelve inútil la app en campo."
  },
  {
    id: "a3-93", sub: "3.5",
    base: "Una app móvil revisa cada minuto, con un proceso en segundo plano, si hay mensajes nuevos en el servidor. Los usuarios reportan que agota la batería.",
    stem: "¿Qué alternativa es la más adecuada?",
    opts: [
      "Reducir el intervalo de consulta a cada 30 segundos",
      "Mantener la pantalla encendida para evitar la suspensión",
      "Recibir notificaciones push en lugar de consultar"
    ],
    ans: 2,
    exp: "Consultar periódicamente (polling) despierta la radio y el procesador aunque no haya novedades. Con NOTIFICACIONES PUSH el servidor avisa solo cuando hay un mensaje y el sistema operativo agrupa las entregas, lo que ahorra batería. Consultar más seguido o impedir la suspensión empeora el consumo."
  },
  {
    id: "a3-94", sub: "3.5",
    base: "El controlador de bolsas de aire de un automóvil debe activarlas en menos de 30 ms tras detectar un impacto; responder tarde equivale a no responder.",
    stem: "¿Cómo se clasifica este sistema embebido?",
    opts: [
      "De tiempo real blando: un retraso solo degrada la calidad",
      "De tiempo real duro: incumplir el plazo es una falla total",
      "De procesamiento por lotes: atiende eventos acumulados"
    ],
    ans: 1,
    exp: "En TIEMPO REAL DURO cumplir el plazo es parte de que el resultado sea correcto: un retraso es una falla, a veces con riesgo para la vida. En tiempo real BLANDO (p. ej., reproducir video) un retraso ocasional solo degrada la calidad. El procesamiento por lotes no tiene plazos estrictos."
  },
  {
    id: "a3-95", sub: "3.5",
    base: "Un microcontrolador debe reaccionar al botón de paro de emergencia mientras ejecuta otras tareas, sin revisar el botón en cada vuelta del ciclo principal.",
    stem: "¿Qué mecanismo es el adecuado?",
    opts: [
      "Sondear (polling) el estado del botón una vez por segundo",
      "Crear un hilo de Java que espere a que se pulse el botón",
      "Una interrupción de hardware asociada al pin del botón"
    ],
    ans: 2,
    exp: "Una INTERRUPCIÓN detiene la tarea en curso y ejecuta de inmediato su rutina de atención (ISR) cuando el pin cambia; la respuesta es rápida y no gasta ciclos revisando. El sondeo cada segundo puede tardar demasiado, y en un microcontrolador típico no hay una JVM disponible."
  },
  {
    id: "a3-96", sub: "3.5",
    base: "En un dispositivo médico con un sistema operativo de tiempo real (RTOS) conviven tres tareas: control de la bomba de insulina, actualización de la pantalla y registro de eventos en memoria.",
    stem: "¿Cómo deben asignarse las prioridades en el planificador?",
    opts: [
      "Igual prioridad para todas, con turnos iguales de CPU",
      "La prioridad más alta a la pantalla, que el usuario observa",
      "La prioridad más alta al control de la bomba, la tarea crítica"
    ],
    ans: 2,
    exp: "Un RTOS usa planificación EXPULSIVA POR PRIORIDADES: la tarea crítica para la seguridad (dosificación) debe poder interrumpir a las demás y cumplir su plazo. La pantalla y el registro toleran retrasos. Con turnos iguales, la tarea crítica podría esperar a las secundarias."
  },
  {
    id: "a3-97", sub: "3.5",
    base: "El firmware de una estación meteorológica remota a veces se queda colgado y nadie puede ir a reiniciarla físicamente.",
    stem: "¿Qué mecanismo la reinicia de forma automática si el software deja de responder?",
    opts: [
      "Un temporizador watchdog que el programa debe reiniciar periódicamente",
      "Un recolector de basura que libere la memoria ocupada cada hora",
      "Un cargador de arranque que descargue firmware nuevo por la red"
    ],
    ans: 0,
    exp: "El WATCHDOG es un temporizador de hardware que el programa sano «alimenta» (reinicia) periódicamente. Si el firmware se cuelga y deja de hacerlo, el temporizador se agota y reinicia el microcontrolador. Es un mecanismo básico de confiabilidad en sistemas embebidos desatendidos."
  },
  {
    id: "a3-98", sub: "3.5",
    base: "Un equipo programa en una PC x86 el firmware de un microcontrolador ARM con 32 KB de RAM y sin sistema operativo.",
    stem: "¿Qué combinación de lenguaje y herramienta es la habitual?",
    opts: [
      "Python con su intérprete completo, ejecutado desde la PC",
      "C con un compilador cruzado que genera código para ARM",
      "Java con una JVM estándar instalada en el microcontrolador"
    ],
    ans: 1,
    exp: "En embebidos con pocos recursos se usa C (o C++) por su control directo del hardware y su bajo consumo de memoria. Como se compila en una arquitectura (x86) para otra (ARM), se usa un COMPILADOR CRUZADO. Un intérprete de Python completo o una JVM estándar no caben en 32 KB."
  },
  {
    id: "a3-99", sub: "3.5",
    base: "Un portal de noticias necesita que los buscadores indexen bien cada artículo y que la primera carga sea rápida, incluso en teléfonos lentos.",
    stem: "¿Qué enfoque de renderizado conviene?",
    opts: [
      "Una SPA que arme todo el contenido en el navegador",
      "Renderizado en el servidor (SSR) o páginas pregeneradas",
      "Una aplicación de escritorio distribuida con instalador"
    ],
    ans: 1,
    exp: "Con SSR o generación estática, el servidor entrega HTML ya armado: el contenido se ve antes y los buscadores lo indexan sin ejecutar JavaScript. Una SPA pura descarga primero el JavaScript y construye la página en el cliente, lo que retrasa la primera carga y puede afectar la indexación."
  },
  {
    id: "a3-100", sub: "3.5",
    base: "Una API REST recibe una petición con un token VÁLIDO de un usuario con rol «consulta» que intenta borrar un registro, acción reservada a administradores.",
    stem: "¿Qué código de estado HTTP debe responder?",
    opts: [
      "401 Unauthorized",
      "404 Not Found",
      "403 Forbidden"
    ],
    ans: 2,
    exp: "403 Forbidden: el servidor sabe quién es el usuario (autenticado), pero no tiene PERMISO para esa acción (autorización). 401 indica que falta la autenticación o que no es válida, y 404 que el recurso no existe."
  }
];
