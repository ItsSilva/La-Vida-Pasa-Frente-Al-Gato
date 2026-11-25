# La vida pasa frente al Gato

## README para construir y publicar la crónica web

**Versión del encargo: 24 de noviembre de 2026.** Este documento está dirigido a Codex. Debe permitir construir el sitio, comprobarlo, subir el código a GitHub y publicarlo en Vercel cuando el usuario entregue este README junto con sus materiales.

El resultado será una publicación editorial de una sola página, en español, con la crónica completa y fotografías propias del Parque del Gato de Cali. La referencia es *Sol de medio día*, de Ciudad Vaga. La petición visual más reciente es explícita: **alternar fotografías a izquierda y derecha en escritorio, acompañadas por el texto**, para dar movimiento al recorrido. En móvil, conservar una lectura vertical cómoda.

La condición principal es innegociable: **el título, la autoría y los 32 párrafos deben reproducir exactamente la versión del Google Doc.** Diseñar y programar no autoriza a reescribir, corregir, resumir, completar ni reorganizar la crónica.

## 1. Entregables y alcance

Al ejecutar este proyecto, entregar:

1. Sitio completo y adaptable, con fotografías reales de `imgs` y texto íntegro.
2. Repositorio de GitHub con código, recursos necesarios, archivo de dependencias y comprobación de fidelidad textual.
3. Proyecto de Vercel conectado al repositorio, con despliegue de producción accesible por enlace.
4. Evidencia de comprobación del contenido, distribución en escritorio y móvil, carga de imágenes y funcionamiento de la URL publicada.
5. Informe final breve con URL del sitio, URL del repositorio y commit publicado.

La implementación debe avanzar hasta la publicación solicitada. Resolver decisiones ordinarias de diseño y programación con este README. Las pestañas abiertas de GitHub y Vercel pueden servir para operar las cuentas disponibles, pero su existencia no demuestra que una CLI esté autenticada. Utilizar las conexiones disponibles y comprobar sus destinos antes de crear o vincular proyectos.

Si una autenticación o la elección entre varias cuentas realmente impide publicar, completar primero el sitio y sus comprobaciones, y pedir únicamente el dato o acceso que falta. No presentar un prototipo incompleto como entrega terminada.

## 2. Materiales y fuente del texto

| Material | Función y prioridad |
| --- | --- |
| [Google Doc de la crónica](https://docs.google.com/document/d/1elCAREWdZUGKGtZ_vqoU58kEQnI7Oo9hlWi9qYRrGbc/edit?usp=sharing) | Fuente editorial principal. Documento llamado `CronicaSofiaJuanParqueGatosFinal`. |
| Copia estructurada del anexo A | Transcripción completa de la versión leída el 24 de noviembre de 2026. Permite implementar sin depender de una consulta a Google Docs en cada visita. |
| `Entrega Final Cronica/imgs` | Fotografías editadas que deben alimentar el sitio. |
| `Entrega Final Cronica/raw imgs` | Originales sin editar. Excluirlos de los recursos de producción. |
| Word `CronicaSofiaJuanParqueGatosFinal` | Archivo mostrado en la captura de la carpeta. Comprobar su extensión real si se utiliza. No sustituir con él una versión distinta del Google Doc. |
| [Sol de medio día](https://ciudadvaga.univalle.edu.co/sol-de-medio-dia/) y capturas aportadas | Referencia de composición editorial. Sus textos, fotografías y marca no son recursos de este sitio. |

La carpeta de fotografías editadas se entregará al ejecutar el proyecto. Al redactar este README se vio su nombre en una captura, **no su inventario**. Por eso no se prescriben nombres de archivos supuestamente existentes. Los papeles visuales descritos más adelante se asignarán a archivos reales después de abrirlos.

### Datos confirmados de la crónica

- Título: `La vida pasa frente al Gato`.
- Autoría: `Ana Sofía González (A00399398) y Juan Sebastián Silva (A00398807)`.
- Cuerpo: **32 párrafos**, aproximadamente **2.111 palabras**, contadas separando por espacios.
- Intervenciones del Gato en cursiva: **p09, p26 y p31**.
- Primer párrafo: comienza con `Un rato antes había salido de una cita psicológica en el oeste de Cali.`
- Último párrafo: termina con `Por la mañana habrá que sacar a Hannah.`
- Esta versión no incluye una sección de fuentes al final ni comienza con la frase sobre mirarles el culo a las gatas.

### Prioridad ante versiones diferentes

Leer el Google Doc completo al iniciar, si está disponible, y compararlo con el anexo. Si no ha cambiado, utilizar la copia del anexo. Si el documento contiene cambios editoriales posteriores inequívocos, conservar esa nueva versión completa, registrar la actualización y regenerar la referencia de comprobación desde ella. No mezclar párrafos de versiones distintas.

Si Google Docs no se puede consultar, el anexo permite trabajar con la última versión verificada. Informar qué versión se usó. Si el Word adjunto discrepa y no es posible establecer cuál es posterior, avanzar con el diseño y resolver esa discrepancia antes de publicar el texto. No reconstruir contenido de memoria ni del historial del chat.

## 3. Lectura de la referencia y decisiones de adaptación

### Lo observado

La lectura de [Sol de medio día](https://ciudadvaga.univalle.edu.co/sol-de-medio-dia/) permite identificar título, autoría, fecha, entrada destacada, epígrafe, divisiones por lugar y hora, relato continuo y fotografías intercaladas. Su desplazamiento por Cali enlaza observación personal, encuentro y memoria.

Las capturas aportadas por el usuario permiten precisar su presentación:

| Elemento visible en las capturas | Efecto de composición |
| --- | --- |
| Cabecera gris, identidad editorial y navegación | Presenta el medio antes del artículo. |
| Portada dividida aproximadamente en dos mitades | Fotografía a la izquierda; panel negro con título y datos a la derecha. |
| Título con serif y alto contraste | Da jerarquía literaria a la apertura. |
| Entrada grande y centrada, con pequeños adornos naranjas | Introduce una pausa antes del cuerpo. |
| Prosa con tipografía sin serif, alineada a la izquierda | Facilita la lectura de párrafos extensos. |
| Fondo blanco y márgenes amplios | Separa claramente texto y entorno. |
| Fotografías verticales, algunas alineadas al margen izquierdo | Interrumpen el bloque de lectura sin ocupar toda la pantalla. |
| Créditos discretos y pie negro de gran tamaño | Identifican las imágenes y cierran la publicación. |

**Alcance de esta observación:** la inspección directa del sitio recibió un bloqueo del servidor. Las capturas sí permiten analizar el aspecto visible. No se obtuvieron las reglas CSS originales, sus fuentes exactas ni su comportamiento móvil. Los valores y familias tipográficas siguientes son decisiones propuestas para este proyecto, no mediciones del sitio de referencia.

### Adaptación para nuestra crónica

Conservar la combinación de portada fotográfica, contraste negro/blanco, jerarquía tipográfica, amplios espacios y lectura continua. Introducir la alternancia izquierda/derecha solicitada, con bloques de texto y fotografía que mantengan una relación clara.

La identidad será la de **La vida pasa frente al Gato**. La cabecera universitaria, logotipos, redes, menús y pie de Ciudad Vaga pertenecen al medio de referencia. Este proyecto tiene una sola crónica; su estructura no necesita simular una revista con secciones vacías.

El documento actual ya contiene su apertura, sus pausas y su cierre. El primer párrafo puede recibir un tratamiento de entrada destacada, pero debe aparecer una sola vez. No crear un resumen introductorio, epígrafe, horarios, títulos de capítulos ni citas decorativas ajenas al documento.

## 4. Intención narrativa que debe sostener el diseño

Este apartado guía la composición. **No debe aparecer como texto añadido en la página.**

El relato avanza desde el cansancio del narrador hacia el paseo con Majo, la curiosidad por las esculturas, los juicios sobre otras personas y el conocimiento parcial de una situación dolorosa. Al final, el narrador reconoce los límites de lo que sabe y reflexiona sobre cómo un mismo sitio puede significar cosas distintas para cada persona.

La amistad con Majo transmite confianza y descanso. Evitar una dirección visual que los presente como pareja: corazones, lenguaje de cita romántica, retratos enfrentados o textos promocionales sobre su relación. No añadir información privada de versiones anteriores ni del contexto de escritura.

Las tres intervenciones del Gato son una voz imaginada por el narrador. Su diferenciación tipográfica debe bastar para reconocerlas. No convertirlas en una entrevista factual, un personaje animado o un asistente que habla al usuario.

La reflexión de esta versión reconoce que la importancia cambia según quien vive la experiencia. Evitar imponerle, mediante frases nuevas o eslóganes, una tesis más absoluta sobre que nada importa. El final escrito ya produce el contraste entre una pérdida y la vida cotidiana.

La propuesta y la reacción de las muchachas dependen de la continuidad de la lectura. Los párrafos p16–p23 deben permanecer juntos, sin carruseles, imágenes intercaladas ni recursos que anticipen el desenlace. p20 conserva su brevedad como párrafo independiente. El tramo p30–p32 termina la experiencia sin una frase explicativa posterior.

## 5. Dirección visual propuesta

### 5.1. Portada

- Composición en dos columnas en escritorio: fotografía del Gato a la izquierda y panel negro a la derecha.
- En el panel, presentar el título completo y debajo la autoría exacta, incluidos los códigos académicos. Permitir saltos visuales de línea mediante CSS sin modificar la cadena de texto.
- El título debe ser texto HTML seleccionable, no parte de una imagen.
- Utilizar una fotografía editada de `imgs` que permita reconocer la escultura. Priorizar la cara, los bigotes y la cola si el encuadre disponible los muestra.
- La altura es flexible. Como referencia inicial, un mínimo de 520 px en escritorio y espacio suficiente para que el título nunca se corte. No imponer una altura fija que oculte contenido al ampliar la letra.
- En móvil, título y autoría primero y fotografía después. El encabezado no debe consumir varias pantallas antes de comenzar la lectura.
- No añadir fecha de publicación, fecha de visita, categoría o redes sociales que no hayan sido suministradas.

### 5.2. Tipografía y color

| Uso | Propuesta inicial |
| --- | --- |
| Título | Playfair Display, peso 600–700, 52–76 px en escritorio y 36–46 px en móvil, interlineado 1,08–1,16. |
| Prosa | Montserrat, peso 400, 19–20 px en escritorio y 17–18 px en móvil, interlineado 1,75–1,9. |
| Entrada p01 | Playfair Display, 25–30 px en escritorio y 21–24 px en móvil. Centrada si resulta cómoda en el ancho disponible. |
| Voz del Gato | Playfair Display en cursiva, 24–28 px en escritorio y 21–23 px en móvil. |
| Autoría y controles | Montserrat, 14–16 px, con contraste y espacio suficientes. |
| Fondo del cuerpo | Blanco `#FFFFFF`. |
| Texto principal | Casi negro `#171717`. |
| Panel de portada y pie | Negro `#080808`, con texto claro. |
| Detalles decorativos | Bronce `#9A6140` y azul oscuro `#274B8B`, usados con moderación. |

Estas familias son propuestas de parecido visual, no una identificación de las fuentes de Ciudad Vaga. Incluir archivos de fuente y licencias válidas dentro del proyecto cuando sea posible. Usar `font-display: swap` y respaldos `Georgia, serif` y `Arial, sans-serif`. Conservar cursivas reales de la familia elegida.

Comprobar el contraste de los colores finalmente usados. Las fotos editadas establecen la atmósfera de noche. No aplicarles filtros, cambios de color, desenfoques o conversiones a blanco y negro para forzar una paleta uniforme.

### 5.3. Anchos y ritmo

- Contenedor de los bloques con fotografía: máximo aproximado de **1.180–1.240 px**.
- Texto sin fotografía: columna centrada de **64–70 caracteres** aproximadamente por línea.
- Bloque con fotografía: imagen en torno al 40 % y texto en torno al 60 %, con separación de 40–64 px. Mantener una columna textual suficiente; si se estrecha demasiado, apilar.
- Márgenes de pantalla: 24–40 px en escritorio y 20–24 px en móvil. En 320 px, ajustar para conservar el espacio de lectura.
- Separación entre párrafos: 1,2–1,5 em. Entre escenas visuales: 64–96 px en escritorio y 40–56 px en móvil.
- Prosa alineada a la izquierda, sin justificación completa, sin columnas de periódico y sin dividir un párrafo entre dos contenedores.
- Mantener las fotografías rectangulares, sin marcos de tarjetas, sombras pesadas o esquinas excesivamente redondeadas.
- Usar aire y cambios de disposición como pausas. Evitar repetir adornos entre todos los párrafos.

### 5.4. Voz del Gato

Conservar p09, p26 y p31 en su lugar original, en cursiva y con una leve sangría o separación lateral. Se puede usar una línea fina de acento, pero el bloque debe integrarse en la lectura.

Renderizarlos como párrafos con `<em>`. No añadir comillas, un encabezado que diga «El Gato dice», una firma ni una repetición de su texto. Tampoco trasladarlos a una barra lateral que altere el orden de lectura en móvil o con lector de pantalla.

## 6. Distribución de fotografías a izquierda y derecha

La alternancia se aplica a **bloques completos**. La foto ocupa un lado y los párrafos contiguos el otro. Un bloque puede contener excepcionalmente dos imágenes relacionadas si hay material suficiente y las proporciones funcionan. No usar columnas independientes en las que el lector deba adivinar qué texto sigue.

Los nombres de escenas de esta tabla son identificadores de implementación; **no son subtítulos para insertar en la crónica**.

| Bloque | Párrafos, en orden | Fotografía en escritorio | Material a buscar en `imgs` | Criterio editorial |
| --- | --- | --- | --- | --- |
| Portada | Título y autoría | Izquierda; panel de título a la derecha | Vista reconocible del Gato | Presentar el lugar antes del recorrido. |
| Apertura | p01–p03 | Sin foto lateral | — | Dar espacio al motivo de la salida y a la amistad. p01 puede destacarse sin repetirse. |
| Recorrido | p04–p06 | **Izquierda**, texto a la derecha | No hay gato, Gachuza u otras esculturas correctamente identificadas | Relacionar la observación de las obras con fotografías concretas. |
| Monumento | p07–p09 | **Derecha**, texto a la izquierda | Otra vista del Gato o detalle de bigotes y cola | Acompañar el descubrimiento del recorrido invertido y la primera voz del Gato. |
| Parque habitado | p10–p13 | **Izquierda**, texto a la derecha | Sendero, árboles, río o borde de la vía | Dar contexto espacial a la observación de las personas. |
| La historia que cuentan | p14–p23 | Sin fotografías intercaladas | — | Mantener el avance del relato policial y su desenlace. |
| Lo que alcanzamos a ver | p24–p26 | **Derecha**, texto a la izquierda | Vista distinta del monumento, si existe | Sostener la segunda intervención del Gato sin añadir dramatización. |
| El mismo lugar | p27–p29 | **Izquierda**, texto a la derecha | Vista amplia o tramo del sendero bajo la iluminación nocturna | Acompañar la reflexión sobre memoria y lugar. |
| Cierre | p30–p32 | Sin foto lateral | — | Terminar con la última voz del Gato y la frase de Hannah. |

### Reglas de colocación

1. Mantener en el DOM la secuencia p01, p02, …, p32. Una matriz de bloques puede asignar intervalos e imágenes, pero no copiar el texto a mano dentro de cada componente.
2. En cada bloque, colocar primero el contenedor de texto y luego la figura en el DOM. Cambiar su posición visual con áreas de CSS Grid. En móvil se leerá el texto del bloque y después su fotografía, antes del bloque siguiente.
3. A partir de unos **1.024 px**, utilizar la composición lateral cuando la columna de texto conserve suficiente anchura. Por debajo, pasar a una columna. Comprobar tabletas y ajustar el punto de cambio según el resultado real.
4. La fotografía nunca debe flotar entre líneas del párrafo. Tampoco usar posición absoluta sobre el texto, alturas forzadas o desplazamientos negativos para simular la alternancia.
5. Las fotos verticales conservan su proporción; las horizontales pueden ocupar todo el ancho de la columna de imagen. Evitar cortar esculturas, rostros o detalles relevantes. Usar `height: auto` en el cuerpo.
6. La portada puede tener un recorte moderado si existe margen real en la fotografía. Si no, conservar el encuadre completo y adaptar el contenedor.
7. Si falta la foto prevista, usar otra del mismo lugar que no induzca a error. Si una toma es redundante o de baja calidad, justificar su exclusión en el inventario. No duplicar una imagen varias veces para rellenar huecos.
8. Los espacios alrededor de una foto más corta que su texto son aceptables. No estirar la imagen hasta igualar artificialmente la altura del bloque.

### Base CSS para la alternancia

Adaptar al proyecto, conservando el mismo comportamiento. Los atributos y clases son de implementación, no texto visible.

```css
.scene {
  width: min(100% - 3rem, 76rem);
  margin-inline: auto;
  display: grid;
  grid-template-areas: "copy" "photo";
  gap: 2rem;
  align-items: start;
}
.scene__copy { grid-area: copy; min-width: 0; }
.scene__photo { grid-area: photo; margin: 0; min-width: 0; }
.scene__photo img { display: block; width: 100%; height: auto; }
@media (min-width: 64rem) {
  .scene { gap: clamp(2.5rem, 4vw, 4rem); }
  .scene--photo-left {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    grid-template-areas: "photo copy";
  }
  .scene--photo-right {
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    grid-template-areas: "copy photo";
  }
}
```

## 7. Tratamiento de las imágenes

### Inventario previo

Abrir todas las imágenes editadas y registrar en `docs/imagenes.md`:

- Nombre y ruta original dentro de `imgs`.
- Dimensiones, orientación y peso.
- Descripción visual objetiva y nombre de la obra solo cuando sea verificable.
- Bloque al que se asignará y función de la imagen.
- Ruta de la copia utilizada en el proyecto y texto alternativo.
- Motivo si se descarta una toma redundante, dañada o ajena al recorrido.

Asignar roles semánticos como `portada`, `recorrido` o `monumento` únicamente después de observar los archivos. Estos roles no son nombres de imágenes proporcionadas por el usuario.

### Edición y publicación

Preservar los archivos entregados. Copiar los seleccionados a `src/assets/cronica/`, con nombres de archivo sencillos si hace falta, y mantener la correspondencia con el original. Admitir derivados de menor resolución o formatos web para reducir peso, conservando el aspecto de la edición del usuario.

Usar recursos locales. No descargar fotos de Ciudad Vaga, Google Maps, bancos de imágenes ni generar escenas del parque. Las capturas del sitio de referencia sirven para diseñar y no se publican como parte de la crónica.

La carpeta puede contener fotos del parque, no necesariamente del acontecimiento relatado. Una toma de una persona de espaldas no debe etiquetarse como la joven que lloraba ni como otra protagonista sin evidencia. Una vista del sendero puede situar al lector sin fingir ser prueba de la propuesta, de la conversación con los policías o de la ruptura.

El usuario indica que tomó las fotografías. Incorporar un crédito global discreto: **Fotografías: Juan Sebastián Silva**, utilizando el nombre que aparece en la autoría del documento. Ubicarlo en el pie editorial, fuera del cuerpo original. No atribuir las fotos a Ciudad Vaga ni a los autores de su artículo.

### Rendimiento

- Generar tamaños apropiados para móvil, columna lateral y portada, sin ampliar por encima de la resolución original.
- Incluir dimensiones o proporción para reservar el espacio antes de cargar.
- La foto de portada se carga con prioridad; las posteriores pueden usar carga diferida.
- Definir `srcset` y `sizes` coherentes con una columna lateral de aproximadamente el 40 % del contenedor en escritorio y casi todo el ancho útil en móvil.
- Preferir WebP o AVIF con respaldo compatible. Revisar especialmente luces azules, sombras y detalle de las esculturas después de comprimir.
- Objetivo orientativo: portada móvil por debajo de 400 KB y fotografías de cuerpo habitualmente entre 150 y 400 KB, ajustando según detalle y calidad. No deteriorar una imagen para cumplir una cifra arbitraria.
- No precargar toda la colección ni distribuir por error la carpeta de originales.

## 8. Implementación técnica

### Stack recomendado

Para un proyecto nuevo, usar **Astro con salida estática, TypeScript y CSS**. El contenido estará en HTML desde la respuesta inicial y será legible sin JavaScript. No se requiere backend, base de datos ni un CMS para esta entrega.

La documentación oficial indica que Astro genera sitios estáticos por defecto y que este caso se despliega en Vercel sin un adaptador de renderizado en servidor. Consultar las versiones estables y requisitos de Node al crear el proyecto y registrar las versiones instaladas en el archivo de dependencias. Si ya existe un proyecto compatible, conservar su stack y cumplir los mismos requisitos de salida estática y fidelidad.

Referencias técnicas: [Astro en Vercel](https://docs.astro.build/en/guides/deploy/vercel/), [configuración de Astro](https://docs.astro.build/en/reference/configuration-reference/), [comandos de desarrollo y construcción](https://docs.astro.build/en/reference/cli-reference/).

### Organización propuesta

| Ruta | Responsabilidad |
| --- | --- |
| `README.md` | Este encargo, conservado como referencia. |
| `src/content/cronica.json` | Datos del anexo A, sin edición manual de la prosa. |
| `src/data/layout.ts` | Secuencia de bloques, intervalos de párrafos e imágenes asignadas. |
| `src/assets/cronica/` | Copias de las fotografías editadas seleccionadas. |
| `src/components/ChronicleParagraph.astro` | Renderizado literal de un párrafo y su voz. |
| `src/components/PhotoFigure.astro` | Imagen adaptable con dimensiones y texto alternativo. |
| `src/components/StoryScene.astro` | Relación de columnas e imagen a izquierda o derecha. |
| `src/pages/index.astro` | Página única y orden completo del artículo. |
| `src/styles/global.css` | Tipografía, espacios, estados de foco, móvil e impresión. |
| `public/` | Favicon y otros recursos que deban copiarse sin procesamiento. |
| `scripts/verify-content.mjs` | Comprobación literal de datos y HTML renderizado. |
| `docs/imagenes.md` | Inventario, selección y correspondencia de fotografías. |
| `docs/entrega.md` | Comprobaciones realizadas, destinos y commit final. |
| `package.json` y archivo de bloqueo | Dependencias y comandos reproducibles. |

Conservar separadas las decisiones de distribución y las cadenas de texto. `layout.ts` debe referenciar identificadores, no contener versiones copiadas o abreviadas de los párrafos.

### Semántica del documento

Utilizar `lang="es"`, UTF-8, un `main`, un único `article` con `id="cronica"` y un solo `h1`. Marcar el título con `data-story-title`, la autoría con `data-story-byline` y cada párrafo con `data-story-paragraph="p01"`, etc.

El contenido de cada párrafo debe provenir de `text`. Escaparlo como texto normal del framework. No usar interpretadores Markdown que cambien signos, motores de corrección tipográfica ni HTML construido a partir de cadenas sin escape.

Ejemplo de renderizado en Astro:

```astro
---
const { paragraph } = Astro.props;
---
<p data-story-paragraph={paragraph.id} data-voice={paragraph.voice} class:list={["story-paragraph", { "story-paragraph--gato": paragraph.voice === "gato" }]}>{paragraph.voice === "gato" ? <em>{paragraph.text}</em> : paragraph.text}</p>
```

Mantener el contenido textual del nodo exacto: no introducir espacios o saltos de plantilla alrededor de la expresión. El cambio de línea visible por el ancho del navegador es automático y no modifica el texto.

Los metadatos de buscadores pueden usar el título exacto, los nombres de autor del documento y una imagen real del proyecto. Si se necesita una descripción, utilizar un fragmento literal contiguo de la crónica, sin escribir un resumen nuevo. Configurar la URL canónica y la imagen social con el dominio real una vez conocido. No inventar una fecha de publicación.

### Recursos fotográficos en Astro

Mantener las fotos en `src/assets/cronica/` permite procesarlas durante la construcción. Los archivos de `public/` se copian sin esa optimización. Los componentes `Image` o `Picture` de `astro:assets` permiten generar variantes, declarar dimensiones y servir tamaños adecuados. Ver [documentación oficial de imágenes](https://docs.astro.build/en/guides/images/).

### Interacciones

La acción principal es leer mediante desplazamiento vertical natural. Se admite un enlace de salto al contenido y un enlace al inicio en el pie. Si se añade indicador de progreso, será discreto, sin tapar texto y sin ser necesario para navegar.

Mantener todo el relato visible sin controles «Leer más», pestañas, paginación o animaciones que deban completarse. No usar desplazamiento horizontal, reproducción de audio, efectos de máquina de escribir, parallax obligatorio ni transiciones que oculten párrafos. La alternancia de columnas ya aporta dinamismo.

Si se agrega alguna transición, debe respetar `prefers-reduced-motion`. La versión sin JavaScript conserva título, autoría, prosa e imágenes. Los detalles decorativos no deben anunciarse como contenido con lectores de pantalla.

## 9. Protocolo de fidelidad textual

### Qué debe permanecer idéntico

- Título completo, mayúsculas, tilde y autoría, incluidos los códigos entre paréntesis.
- Los 32 párrafos y su orden.
- Todas las palabras, signos, espacios internos, guillemets, rayas, acentos y nombres.
- La existencia del párrafo breve p20 y de las tres intervenciones en cursiva.
- Formulaciones que puedan parecer corregibles, como `vestida con un vestido`. La tarea no es una revisión de estilo.

No añadir una nueva conclusión, entrevistas, aclaraciones históricas ni bibliografía al cuerpo. No actualizar automáticamente las referencias temporales de la crónica. No duplicar fragmentos como destacados decorativos ni extraer una frase para ponerla antes de su aparición original.

Se permite cambiar el diseño, el tamaño de letra, los márgenes, los saltos de línea visuales y la ubicación de las imágenes. Los créditos fotográficos y enlaces de interfaz se mantienen fuera del texto original, identificados como elementos editoriales.

### Conversión de Google Docs al anexo

La extracción conservó el texto de cada párrafo. Solo se retiró el carácter LF (`\n`) que cierra cada párrafo en la respuesta de Google Docs y el separador de formato VT (`\u000b`) que precede al LF del último párrafo. El límite entre párrafos queda representado por los objetos del arreglo. No se normalizaron palabras, puntuación, tildes ni espacios internos.

El hash se calcula sobre esta estructura serializada con `JSON.stringify`, codificada en UTF-8:

```js
[
  source.title,
  source.byline,
  source.paragraphs.map(p => [p.id, p.voice, p.text])
]
```

**SHA-256 esperado para el anexo A:**

```text
7024736cc98dd50c84512e600aae345d8da0ada256dc5438ba6c73b05f44d9a0
```

El hash protege la copia de referencia contra cambios silenciosos. Comparar además esa copia con los nodos reales de la página. Comprobar únicamente el archivo JSON no demuestra que la página renderice todos los párrafos.

No cambiar el hash esperado para hacer pasar un fallo de implementación. Solo una actualización comprobada de la fuente editorial permite regenerarlo y documentar una nueva versión.

## 10. Comprobaciones antes de entregar

### Contenido y distribución

- Ejecutar la comprobación del anexo B contra el sitio local construido y contra la URL publicada.
- Confirmar visualmente las tres cursivas y que p20 siga separado.
- Verificar que el título y la autoría aparezcan completos, sin recortes, elipsis ni modificaciones.
- Revisar la sucesión lateral de los cinco bloques: **izquierda → derecha → izquierda → derecha → izquierda**. La portada se evalúa por separado.
- Comprobar que en móvil se mantenga el orden de los 32 párrafos y que cada imagen quede asociada a su bloque.
- Revisar que el final de la crónica sea p32. Los créditos y enlaces posteriores deben ser claramente un pie editorial.

### Pantallas y accesibilidad

Comprobar al menos 320, 390, 768, 1.024 y 1.440 px de ancho. Revisar también el aumento de texto o zoom al 200 %, navegación con teclado, foco visible y ausencia de desplazamiento horizontal.

Revisar la portada, un bloque de foto izquierda, uno de foto derecha, el tramo de los policías, una voz del Gato y el cierre. Las capturas de validación son evidencia interna del proyecto, no imágenes para colocar en la publicación.

Todas las imágenes informativas tendrán texto alternativo veraz. Los botones, si existen, tendrán nombre accesible y un área de interacción cómoda. No depender solo del color para distinguir las voces. Incluir estilos de impresión que conserven todo el relato en una columna legible.

### Carga y producción

- Construcción sin errores y recursos sin respuestas 404.
- Fotografías nítidas, proporcionadas y sin saltos fuertes durante la carga.
- Sitio legible sin JavaScript y sin conexión activa del visitante con Google Docs.
- Fuentes con respaldo funcional si no llegan a cargar.
- Ausencia de rutas locales del computador, imágenes temporales y marcadores pendientes.
- Una revisión de rendimiento móvil puede ayudar a detectar imágenes excesivas. Registrar los resultados medidos, sin inventar puntuaciones.

## 11. Flujo de trabajo para GitHub y Vercel

### Paso 1. Preparar los insumos

Leer este README y la fuente completa. Localizar `Entrega Final Cronica/imgs`, abrir las fotos y crear el inventario. Verificar si ya existe un repositorio del proyecto antes de inicializar otro. Conservar archivos ajenos y cambios del usuario.

Copiar el JSON del anexo A a `src/content/cronica.json` mediante extracción programática, no reescritura manual. Implementar el verificador desde el inicio para que la composición se construya sobre una referencia estable.

### Paso 2. Implementar y comprobar localmente

Crear la portada, los bloques alternados, las voces del Gato y el pie. Aplicar el diseño móvil. Configurar estos comandos, adaptando solo la herramienta si ya existe otro stack:

| Comando del proyecto | Resultado esperado |
| --- | --- |
| `npm run dev` | Servidor de desarrollo. |
| `npm run build` | Construcción estática en `dist`. |
| `npm run preview` | Revisión local de lo construido. |
| `npm run verify:source` | Hash y estructura del texto, sin navegador. |
| `npm run verify:content -- http://127.0.0.1:4321` | Fidelidad del HTML del servidor local. Ajustar el puerto real si cambia. |

La salida estática y el directorio `dist` se describen en la [guía oficial de despliegue de Astro](https://docs.astro.build/en/guides/deploy/). Fijar dependencias con su archivo de bloqueo y utilizar una versión de Node compatible tanto localmente como en Vercel.

### Paso 3. Versionar en GitHub

Usar la cuenta y el repositorio que correspondan al proyecto. Si no existe uno y no se indicó otro nombre, crear `la-vida-pasa-frente-al-gato`, privado por defecto, sin sobrescribir un repositorio existente con el mismo nombre. Registrar la visibilidad elegida.

Incluir código, fuentes de texto, imágenes editadas seleccionadas, licencias de tipografías, comprobaciones y documentación mínima. Excluir `node_modules`, archivos de autenticación, `.env`, `.vercel`, resultados de construcción, `raw imgs`, documentos de trabajo y capturas de referencia que no sean parte del sitio. La fuente canónica JSON sí pertenece al proyecto.

Crear un commit descriptivo y subirlo. Comprobar que el repositorio remoto contiene ese commit. No reescribir historial, modificar otros repositorios ni sustituir una rama ajena al proyecto.

### Paso 4. Conectar y publicar en Vercel

Preferir la integración de GitHub con Vercel para que los cambios futuros del proyecto se desplieguen desde el repositorio. Seleccionar la cuenta o equipo correcto y crear o reutilizar únicamente el proyecto de esta crónica.

Configuración prevista:

| Opción | Valor |
| --- | --- |
| Framework | Astro, con salida estática. |
| Directorio raíz | La carpeta que contiene el `package.json` de la web. |
| Comando de construcción | `npm run build`. |
| Directorio de salida | `dist`, salvo configuración explícita equivalente. |
| Rama de producción | La rama principal real del repositorio; normalmente `main`. |
| Variables de aplicación | Ninguna necesaria para servir texto e imágenes locales. |
| Dominio | Dominio de producción gratuito asignado al proyecto en Vercel. |

La [guía oficial de Astro para Vercel](https://docs.astro.build/en/guides/deploy/vercel/) describe la importación del repositorio y la detección del framework. Vercel puede construir las actualizaciones de las ramas conectadas. Evitar un segundo sistema de despliegue innecesario.

Si se utiliza la CLI, comprobar la identidad autenticada y el proyecto vinculado antes de publicar. Consultar la ayuda de la versión instalada para las opciones vigentes. Usar un despliegue previo para revisar y después publicar la versión de producción solicitada. Ver [documentación de despliegues](https://vercel.com/docs/deployments) y [CLI de Vercel](https://vercel.com/docs/cli).

El usuario ha pedido que la implementación y la publicación se resuelvan automáticamente cuando entregue este encargo a Codex. Avanzar con esas acciones dentro de este proyecto. Si aparece un bloqueo real de autenticación, destino ambiguo o un servicio de pago necesario, resolver o comunicar ese punto concreto; no inventar credenciales ni contratar servicios adicionales.

### Paso 5. Verificar el sitio publicado

Esperar a que el despliegue termine correctamente y abrir la URL de producción. Confirmar acceso de un visitante sin iniciar sesión, carga de imágenes, disposición lateral, móvil y fidelidad de los 32 párrafos. El acceso público debe corresponder a este sitio, sin modificar la protección de otros proyectos.

Ejecutar el verificador con la URL real. Confirmar que el commit publicado corresponde al código comprobado. Si hay una corrección, repetir las comprobaciones afectadas y verificar el nuevo despliegue.

Entregar la URL de producción, no una pantalla del panel de Vercel ni únicamente un enlace de vista previa. Dejar constancia en `docs/entrega.md` del repositorio, proyecto, dominio, commit, versión de la fuente editorial y resultados de comprobación. No guardar credenciales en ese informe.

## 12. Criterios de aceptación

- [ ] La página presenta `La vida pasa frente al Gato` y la autoría exacta del documento.
- [ ] Se muestran los 32 párrafos originales, una sola vez y en orden.
- [ ] El hash de la fuente y la comparación con el HTML publicado pasan.
- [ ] p09, p26 y p31 conservan la cursiva y su posición narrativa.
- [ ] La portada combina fotografía a la izquierda y panel negro en escritorio.
- [ ] Los cinco bloques laterales alternan izquierda, derecha, izquierda, derecha e izquierda.
- [ ] En móvil se apilan sin alterar la lectura ni generar desplazamiento horizontal.
- [ ] Las fotografías proceden de `imgs`, mantienen su edición y tienen un crédito propio.
- [ ] No aparecen textos, logos o fotografías de Ciudad Vaga como contenido del proyecto.
- [ ] La escena de los policías y el cierre se leen sin interrupciones añadidas.
- [ ] El sitio funciona sin JavaScript y no consulta Google Docs desde el navegador del visitante.
- [ ] El repositorio contiene todo lo necesario para reproducir la construcción.
- [ ] Vercel sirve la versión final en una URL pública que se abrió y comprobó.
- [ ] La entrega identifica la URL del sitio, repositorio y commit publicado.

## Anexo A. Copia íntegra y estructurada del texto

Extraer **solo el JSON del bloque siguiente** a `src/content/cronica.json`. Los campos de procedencia son metadatos de trabajo. Publicar únicamente `title`, `byline` y el contenido de `paragraphs`, con la presentación indicada. Los identificadores y el campo `voice` no son texto visible.

<!-- CANONICAL_CHRONICLE_START -->

```json
{
  "schemaVersion": 1,
  "sourceUrl": "https://docs.google.com/document/d/1elCAREWdZUGKGtZ_vqoU58kEQnI7Oo9hlWi9qYRrGbc/edit?usp=sharing",
  "sourceDocumentTitle": "CronicaSofiaJuanParqueGatosFinal",
  "capturedOn": "2026-11-24",
  "title": "La vida pasa frente al Gato",
  "byline": "Ana Sofía González (A00399398) y Juan Sebastián Silva (A00398807)",
  "paragraphs": [
    {
      "id": "p01",
      "voice": "narrador",
      "text": "Un rato antes había salido de una cita psicológica en el oeste de Cali. El día había sido complicado y todavía tenía esa sensación de estar pendiente de alguien más: de cómo se encontraba, de si había descansado o de qué podía pasarle mientras yo intentaba resolver mis propias cosas. Estaba saliendo con esa persona, aunque no éramos pareja, pero la preocupación ya se sentía como si existiera un compromiso. Nadie me había pedido que estuviera siempre disponible. Aun así, me sentía culpable cuando dejaba de estarlo."
    },
    {
      "id": "p02",
      "voice": "narrador",
      "text": "Le escribí a Majo para salir un rato. Ella también había tenido un día pesado en el trabajo y necesitaba despejar la mente. Con ella podía hablar de lo que me pasaba o distraerme con cualquier bobada, y no había que dar muchas explicaciones para ninguna de las dos cosas. Cuando llegué a su casa, conversamos un rato con Valeria, una amiga de los dos que ya se estaba yendo. Después salimos caminando hacia el Parque del Gato."
    },
    {
      "id": "p03",
      "voice": "narrador",
      "text": "Majo vivía cerca y había ido muchas veces con Hannah, su perrita, pero siempre en las mañanas. Esa noche también estaba descubriendo el lugar de otra manera. A veces basta con cambiar la hora para que un sitio que uno conoce se sienta distinto."
    },
    {
      "id": "p04",
      "voice": "narrador",
      "text": "Casi no había vendedores. Me llamó la atención porque esperaba encontrar el movimiento que suele haber en otros lugares emblemáticos de Cali. Vimos un puesto de comida y, cerca, una muchacha recogiendo un mantel. Más adelante, casi a mitad del recorrido, alguien guardaba los productos hechos a mano que había estado vendiendo. Todo daba la impresión de que la jornada estaba terminando, mientras nosotros apenas empezábamos el paseo."
    },
    {
      "id": "p05",
      "voice": "narrador",
      "text": "Nos detuvimos frente a Fogata, la gata que habían elegido por votación como novia oficial del Gato. A los dos nos pareció una elección bastante discutible. Había otras que nos llamaban mucho más la atención. Gachuza, por ejemplo, roja y llena de clavos, tenía algo que hacía que uno se quedara mirándola. También estaba No hay gato, blanca, con nombres de animales y referencias bíblicas escritos por todo el cuerpo. Había pulgas, lechuzas y mosquitos. La obra jugaba con la idea de que el gato no aparecía en la Biblia, como si se hubiera quedado por fuera de esa historia. Hasta una pulga tenía su pasaje."
    },
    {
      "id": "p06",
      "voice": "narrador",
      "text": "El Gato, claro, no tenía mucho que decir en nuestra discusión sobre sus gustos. Los caleños habían escogido a su novia y nosotros, que llevábamos apenas unos minutos en el parque, ya estábamos convencidos de que le vendría mejor otra."
    },
    {
      "id": "p07",
      "voice": "narrador",
      "text": "Cuando llegamos al monumento entendimos qué estaba pasando. Habíamos comenzado el recorrido por el final. Las espaldas que habíamos estado viendo tenían una explicación bastante sencilla. Me dio risa pensar en la seguridad con la que habíamos confiado en nuestra orientación."
    },
    {
      "id": "p08",
      "voice": "narrador",
      "text": "Arriba, los bigotes del Gato se enroscaban formando dos espirales y un pájaro descansaba sobre su cola. La luz azul se reflejaba en el bronce. Llevaba allí desde el 3 de julio de 1996, treinta años recibiendo visitantes, incluso a quienes llegábamos por el lado equivocado. Me puse a imaginar qué pensaría de nuestras opiniones y de lo fácil que nos había resultado decidir quién debía acompañarlo, cuando esa figura iba a permanecer allí mucho después de que nosotros nos fuéramos."
    },
    {
      "id": "p09",
      "voice": "gato",
      "text": "Me escogieron una novia y todavía vienen a decirme que había mejores opciones. Les basta una vuelta por el paseo. Después se van juntos, separados, a veces sin terminar lo que estaban hablando. A mí me dejan aquí, con la elegida. Nadie espera mi respuesta."
    },
    {
      "id": "p10",
      "voice": "narrador",
      "text": "Frente al monumento había un hombre que nos pareció extranjero. Vestía de manera casual, pero con cierta torpeza, como si alguien le hubiera explicado cómo vestirse en Cali y él hubiera seguido las indicaciones demasiado literalmente. Lo acompañaba una mujer negra, muy hermosa, que le iba hablando del parque. Supusimos que era su guía. Alcanzamos a escuchar parte de lo que decía, que también estaba en los carteles, y enseguida pensamos que al pobre turista le estaban tomando el pelo. Bastó escuchar un pedacito para juzgar toda la visita."
    },
    {
      "id": "p11",
      "voice": "narrador",
      "text": "Allí también había una historia que me habría gustado conocer mejor. Las cenizas de Hernando Tejada, Tejadita, quedaron en el monumento. El escultor terminó acompañando a su obra y a la ciudad a la que se la había regalado. Alguien que ya no estaba seguía siendo parte de aquello que estábamos mirando."
    },
    {
      "id": "p12",
      "voice": "narrador",
      "text": "La aparición del turista nos sacó un poco de las esculturas y empezamos a fijarnos más en la gente. Yo esperaba ver personas mayores, así que me sorprendió encontrar varias parejas jóvenes, cada una a cierta distancia de las otras. Hablaban bajito, con una calma que desde afuera podía parecer poca emoción. Pensé que apenas se estaban conociendo, aunque también era posible que llevaran años juntos y simplemente hubieran tenido un día largo, como nosotros."
    },
    {
      "id": "p13",
      "voice": "narrador",
      "text": "Se escuchaba el río. Los árboles hacían que el aire se sintiera más fresco, a pesar de los carros que pasaban cerca. Había algo en el lugar que permitía conversar sin afán, escuchar al otro y no tener que llenar cada silencio. Pensé que el parque servía justamente para eso, para detenerse un rato y hacerse preguntas que no siempre tienen una respuesta inmediata. Majo y yo habíamos salido a descansar y terminamos observando cómo los demás también parecían estar haciéndolo."
    },
    {
      "id": "p14",
      "voice": "narrador",
      "text": "De regreso, cerca del puesto de comida, vimos a una muchacha sola debajo de un poste. Tendría unos veinte años. Lloraba despacio, intentando no hacer mucho ruido. Era uno de esos llantos que parecen llevar rato, de esos en los que el cuerpo ya se ve cansado, pero las lágrimas siguen saliendo. Majo reconoció a la mujer que habíamos visto antes recogiendo el mantel. Habíamos pasado junto a ella sin detenernos. Ahora, todo lo que yo venía pensando sobre el parque tenía que dejar espacio para lo que estaba pasando allí."
    },
    {
      "id": "p15",
      "voice": "narrador",
      "text": "Cerca estaban dos policías, un hombre y una mujer. Se encontraban lo suficientemente apartados como para no invadirla, pero hablaban mientras miraban hacia donde estaba ella. Por un momento parecían dos vecinas mayores conversando desde el patio de sus casas, incluso se inclinaban un poco hacia adelante. La curiosidad nos ganó. La idea de acercarnos fue mía; a Majo le daba pena, pero al final el chisme, o tal vez el morbo, pudo más."
    },
    {
      "id": "p16",
      "voice": "narrador",
      "text": "La oficial estaba de espaldas. Apenas escuchó mi voz, se volteó y se enderezó. Su compañero hizo lo mismo. Sacaron pecho y recuperaron una seriedad que hacía un segundo no tenían. Les pregunté si la muchacha estaba bien, con toda la preocupación de un ciudadano ejemplar. Dijeron que sí y, para nuestra suerte —la de los buenos ciudadanos curiosos—, siguieron contándonos lo que había pasado."
    },
    {
      "id": "p17",
      "voice": "narrador",
      "text": "La joven había llegado bastante antes. Había sacado un mantel, comida y algunas cosas para pintar. Según el oficial, lo había organizado todo muy bonito, tanto que ellos se turnaban para pasar cerca y mirar. Después llegó otra muchacha, vestida con un vestido. Se saludaron con un beso y se pusieron a hablar, cantar, comer y pintar. Ver parejas en el parque era algo común; lo que les había llamado la atención era el cuidado con el que la primera había preparado el encuentro."
    },
    {
      "id": "p18",
      "voice": "narrador",
      "text": "La oficial llevaba la historia y su compañero iba agregando detalles. Durante una de sus rondas, él alcanzó a ver la pintura de la joven. Allí había escrito una pregunta para la muchacha del vestido: le estaba proponiendo que fueran novias. Por eso le había avisado a su compañera que se acercaran. Los dos se rieron al recordar el momento. Nosotros ya estábamos pendientes de cómo terminaba todo."
    },
    {
      "id": "p19",
      "voice": "narrador",
      "text": "Llegó el momento de mostrar las pinturas. La muchacha del vestido enseñó la suya primero. Los policías no alcanzaron a ver qué había dibujado, pero sí recordaban la reacción de la otra. Se puso tan feliz que se lanzó a darle un beso. Dijeron que parecía una película. Con ese comienzo, ellos también querían saber cómo reaccionaría cuando apareciera la propuesta."
    },
    {
      "id": "p20",
      "voice": "narrador",
      "text": "Entonces la joven mostró su pintura."
    },
    {
      "id": "p21",
      "voice": "narrador",
      "text": "La muchacha del vestido se levantó de golpe y empezó a hablar. Desde donde estaban, los policías no lograron escuchar qué decía. Vieron cómo a la otra se le iba borrando la sonrisa, hasta que comenzó a llorar. Hubo un momento en que las dos se quedaron mirándose. Me imaginé ese silencio incómodo, de esos que para quien está mirando duran apenas un instante, pero para quienes lo viven parecen interminables. Después, la muchacha del vestido recogió sus cosas y se fue. Los oficiales tampoco alcanzaron a ver si se marchó llorando."
    },
    {
      "id": "p22",
      "voice": "narrador",
      "text": "La otra se quedó allí. Lloró durante un buen rato, guardó todo en el bolso y volvió a quedarse sola. En algún momento de ese después habíamos llegado nosotros, ocupados en mirar las gatas y decidir cuál merecía ser la novia. También a esa historia habíamos llegado por el final."
    },
    {
      "id": "p23",
      "voice": "narrador",
      "text": "Los policías ya habían terminado de contar. Seguíamos sin saber qué palabras se habían dicho entre las dos mujeres ni qué había pasado antes de esa noche. Solo teníamos una propuesta, una salida apresurada y una muchacha llorando. Y con eso ya estábamos intentando entender una relación entera."
    },
    {
      "id": "p24",
      "voice": "narrador",
      "text": "Se me vino a la cabeza una frase: «ahora son dos desconocidos que se conocen muy bien». Pensé en lo raro que debe ser saber tantas cosas de alguien y, de repente, quedarse sin un lugar desde el cual preguntarle cómo está. También pensé en lo difícil que me resulta aceptar que la cercanía puede significar algo distinto para cada persona. Había llegado al parque cansado de sentirme responsable de la vida de alguien más y, sin querer, estaba mirando una escena que conectaba con lo que me pasaba a mí."
    },
    {
      "id": "p25",
      "voice": "narrador",
      "text": "El Gato seguía en su lugar. Desde donde yo estaba, me lo imaginé escuchándonos sacar conclusiones con la misma seguridad con la que habíamos criticado su noviazgo."
    },
    {
      "id": "p26",
      "voice": "gato",
      "text": "Ustedes llegaron cuando ella estaba guardando. Dentro de un rato también se irán y se llevarán la parte que alcanzaron a ver. Para contarla les bastarán unos minutos. Ella tendrá que volver a pasar por aquí con el recuerdo entero. Yo llevo treinta años mirando cómo un mismo lugar les pesa de maneras tan distintas."
    },
    {
      "id": "p27",
      "voice": "narrador",
      "text": "El puesto de comida seguía allí. También el poste, los árboles y el río. Hasta ese momento habían sido parte de un paseo tranquilo, pero después de conocer lo que había ocurrido, todo se sentía diferente. Para nosotros, el parque había sido un lugar agradable; para ella, quizá se había convertido en un sitio al que le costaría volver. No había cambiado nada físicamente, pero de alguna manera ya no era el mismo."
    },
    {
      "id": "p28",
      "voice": "narrador",
      "text": "Pensé que tal vez las cosas no tienen una importancia fija, como si fueran iguales para todos, sin importar quién las viva. Para los policías y para nosotros, lo ocurrido podía quedarse en un chisme de esa noche. Para aquellas muchachas, en cambio, podía convertirse en un recuerdo doloroso que durara años. Los carros seguían pasando, las otras parejas continuaban conversando y la vida alrededor no se detenía. Había espacio para que alguien sintiera que todo se le acababa mientras otra persona apenas comenzaba su noche."
    },
    {
      "id": "p29",
      "voice": "narrador",
      "text": "Tal vez algún día ella regresaría y le dolería un poco menos. Quizá otro recuerdo ocuparía ese mismo lugar, o tal vez tendría que pasar mucho tiempo antes de poder mirarlo sin pensar en aquella pintura. Nosotros también terminaríamos olvidando algunos detalles. De hecho, puede que ya se me estén escapando mientras intento escribirlos. Esta crónica guarda lo que alcanzamos a saber, incluida nuestra curiosidad, que no fue precisamente la más generosa. La vida de aquellas mujeres continuó por caminos a los que estas páginas no alcanzan."
    },
    {
      "id": "p30",
      "voice": "narrador",
      "text": "La quietud del Gato me hizo pensar en todo el tiempo que yo quería explicar a partir de una sola noche. Quería encontrarle sentido a cada cosa. Él, en cambio, llevaba tres décadas viendo llegadas y despedidas. La presencia de su creador se había quedado en unas cenizas y, aun así, el parque seguía llenándose de personas que venían a buscar algo propio."
    },
    {
      "id": "p31",
      "voice": "gato",
      "text": "Alguna mañana volverá a haber alguien aquí sin saber lo que pasó esta noche. Se detendrá donde ella estuvo y tendrá sus propias razones para quedarse. Así se me van llenando los días. Ustedes recuerdan una tarde, un beso, una respuesta. Yo me quedo viendo cómo vuelve a ocuparse el sitio."
    },
    {
      "id": "p32",
      "voice": "narrador",
      "text": "Al escribir esto me acordé de una anotación de Kafka, en la que dejó una declaración de guerra junto a una tarde de natación. Pensé en cómo podría ser una versión para este paseo: esta noche a una muchacha se le terminó un futuro. Por la mañana habrá que sacar a Hannah."
    }
  ]
}
```

<!-- CANONICAL_CHRONICLE_END -->

## Anexo B. Verificación ejecutable del texto

Guardar el bloque siguiente como `scripts/verify-content.mjs`. La comprobación de fuente usa módulos incluidos en Node. La comprobación del HTML requiere Playwright como dependencia de desarrollo y su navegador Chromium instalado en el entorno de validación. No enviar Playwright al navegador del visitante ni instalar sus navegadores durante la construcción de Vercel.

Configurar `verify:source` como `node scripts/verify-content.mjs --source-only` y `verify:content` como `node scripts/verify-content.mjs`. Ejecutar primero la construcción y un servidor local para la comprobación del HTML. El mismo comando acepta la URL publicada como argumento.

El control compara caracteres de los nodos reales, sin `.trim()`, corrección de tildes ni normalización de espacios en los párrafos. También revisa orden, cantidad, las tres voces y ausencia de prosa adicional dentro del artículo. La revisión visual sigue siendo necesaria para comprobar composición, imágenes y legibilidad.

```js
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = JSON.parse(
  await readFile(resolve('src/content/cronica.json'), 'utf8')
);
const expectedHash =
  '7024736cc98dd50c84512e600aae345d8da0ada256dc5438ba6c73b05f44d9a0';
const expectedIds = Array.from(
  { length: 32 }, (_, i) => `p${String(i + 1).padStart(2, '0')}`
);
const expectedVoices = ['p09', 'p26', 'p31'];
assert.equal(source.paragraphs.length, 32, 'Cantidad de párrafos');
assert.deepEqual(source.paragraphs.map(p => p.id), expectedIds, 'Orden de párrafos');
assert.deepEqual(
  source.paragraphs.filter(p => p.voice === 'gato').map(p => p.id),
  expectedVoices,
  'Intervenciones del Gato'
);
const payload = JSON.stringify([
  source.title,
  source.byline,
  source.paragraphs.map(p => [p.id, p.voice, p.text])
]);
const actualHash = createHash('sha256').update(payload, 'utf8').digest('hex');
assert.equal(actualHash, expectedHash, 'La fuente canónica fue modificada');
console.log('Fuente íntegra: 32 párrafos y SHA-256 correcto.');

if (process.argv.includes('--source-only')) process.exit(0);

const target = process.argv[2] ?? 'http://127.0.0.1:4321';
assert.ok(/^https?:\/\//u.test(target), 'Indicar una URL HTTP o HTTPS');
const { chromium } = await import('playwright');
const browser = await chromium.launch();

try {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 1440, height: 1000 }
  });
  const page = await context.newPage();
  const response = await page.goto(target, { waitUntil: 'load' });
  assert.ok(response?.ok(), 'La página no respondió correctamente');

  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    assert.equal(await page.locator('#cronica').count(), 1, 'Artículo único');
    assert.equal(await page.locator('h1').count(), 1, 'Un solo título h1');
    assert.equal(
      await page.locator('[data-story-paragraph]').count(), 32,
      'Párrafos ausentes o duplicados'
    );

    const actual = await page.locator('#cronica').evaluate(root => {
      const titles = root.querySelectorAll('[data-story-title]');
      const bylines = root.querySelectorAll('[data-story-byline]');
      const paragraphs = [...root.querySelectorAll('[data-story-paragraph]')];
      const copy = root.cloneNode(true);
      copy.querySelectorAll(
        '[data-story-title], [data-story-byline], [data-story-paragraph], figure'
      ).forEach(el => el.remove());

      return {
        titleCount: titles.length,
        bylineCount: bylines.length,
        title: titles[0]?.textContent,
        byline: bylines[0]?.textContent,
        paragraphs: paragraphs.map(el => {
          const emphasis = el.querySelector('em');
          const style = getComputedStyle(emphasis ?? el);
          return {
            id: el.getAttribute('data-story-paragraph'),
            voice: el.getAttribute('data-voice'),
            text: el.textContent,
            emphasisCount: el.querySelectorAll('em').length,
            italic: style.fontStyle === 'italic',
            displayed: el.getClientRects().length > 0 &&
              getComputedStyle(el).visibility !== 'hidden' &&
              getComputedStyle(el).display !== 'none'
          };
        }),
        // Aquí solo se comprueba espacio estructural sobrante.
        // El texto de los párrafos se compara sin trim ni normalización.
        extraText: copy.textContent.trim(),
        horizontalOverflow:
          document.documentElement.scrollWidth > window.innerWidth + 1
      };
    });

    assert.equal(actual.titleCount, 1, 'Título único dentro del artículo');
    assert.equal(actual.bylineCount, 1, 'Autoría única dentro del artículo');
    assert.equal(actual.title, source.title, 'Título alterado');
    assert.equal(actual.byline, source.byline, 'Autoría alterada');
    assert.equal(actual.paragraphs.length, source.paragraphs.length);
    assert.equal(actual.extraText, '', 'Texto adicional dentro del artículo');
    assert.equal(actual.horizontalOverflow, false, `Desbordamiento a ${width}px`);

    for (let i = 0; i < source.paragraphs.length; i++) {
      const expected = source.paragraphs[i];
      const rendered = actual.paragraphs[i];
      const label = `${expected.id} a ${width}px`;
      assert.equal(rendered.id, expected.id, `Orden incorrecto: ${label}`);
      assert.equal(rendered.voice, expected.voice, `Voz incorrecta: ${label}`);
      assert.equal(rendered.text, expected.text, `Texto alterado: ${label}`);
      assert.equal(rendered.displayed, true, `Párrafo oculto: ${label}`);
      assert.equal(
        rendered.emphasisCount, expected.voice === 'gato' ? 1 : 0,
        `Énfasis incorrecto: ${label}`
      );
      assert.equal(
        rendered.italic, expected.voice === 'gato',
        `Cursiva incorrecta: ${label}`
      );
    }
    console.log(`HTML íntegro a ${width}px, con JavaScript del sitio desactivado.`);
  }
} finally {
  await browser.close();
}
```

## Instrucción inicial para Codex

> Implementa y publica este proyecto siguiendo el README completo. Usa el texto literal del Google Doc y la copia estructurada verificada, sin modificar su escritura. Revisa las fotografías editadas de `Entrega Final Cronica/imgs` y distribúyelas en los bloques alternados a izquierda y derecha indicados. Conserva la lectura continua en móvil. Construye el sitio, comprueba el texto y la presentación, sube el proyecto a mi GitHub y publícalo en mi Vercel usando los accesos disponibles. Resuelve las decisiones ordinarias con este documento y entrega la URL de producción, el repositorio y el commit comprobado. Si un acceso indispensable falta, deja terminado todo lo que puedas y señala exactamente ese bloqueo.
