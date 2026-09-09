# 💻 Trabajo Práctico Grupal 1: Desarrollo Frontend

**Materia:** Desarrollo de Sistemas Web Front End 2026  
**Institución:** IFTS N.º 29  
**Equipo:** `<EquipoDev/>`

---

## 📝 1. Descripción del Proyecto
Este repositorio contiene el código fuente del primer trabajo práctico grupal del ciclo 2026. El propósito del sitio es presentarnos como equipo de desarrolladores mediante un proyecto colaborativo que consta de una portada principal (`index.html`), una bitácora de proceso (`bitacora.html`) y páginas de perfil individuales para cada integrante (`martina.html`, `dalila.html`, `jorge.html`, `luis.html`, `martin.html`).

El proyecto fue maquetado con un enfoque *mobile-first*, garantizando diseño adaptable sin desbordes, marcado semántico, accesibilidad básica e interacciones dinámicas con JavaScript Vanilla personalizadas para cada perfil.

---

## 👥 2. Integrantes y Roles

| Integrante | Perfil del Proyecto | GitHub | Rol / Enfoque |
| :--- | :--- | :--- | :--- |
| **Martina Bistagnino** | [Perfil 01](./martina.html) | [@Martina-bistagnino](https://github.com/Martina-bistagnino) | UI/UX & Desarrollo Web |
| **Gabriela Dalila Contrera** | [Perfil 02](./dalila.html) | [@DalilaContrera](https://github.com/DalilaContrera) | Desarrollo de Software & Creatividad |
| **Jorge Caliz** | [Perfil 03](./jorge.html) | [@JorgeGabrielCaliz](https://github.com/JorgeGabrielCaliz) | Python & Game Development |
| **Francisco Luis Bronzi** | [Perfil 04](./luis.html) | [@LuisUnix2100](https://github.com/LuisUnix2100) | Infraestructura & Web |
| **Martín Roige** | [Perfil 05](./martin.html) | [@TinchoHub](https://github.com/TinchoHub) | WebApps & Fullstack |

---

## 🛠️ 3. Tecnologías Utilizadas

* **HTML5 Semántico:** Estructuración con etiquetas `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` y atributos de accesibilidad (`aria-label`, `aria-live`, `aria-expanded`, `aria-controls`).
* **CSS3 Moderno:** 
  * Variables CSS (`:root` y scopes por temática de perfil).
  * Maquetación con Flexbox y CSS Grid.
  * Animaciones y transiciones suaves (`transform`, `opacity`, *glowing effects*).
* **JavaScript (Vanilla):** Lógica nativa para navegación, manipulación del DOM y consolas interactivas sin dependencias externas.
* **Git y GitHub:** Control de versiones, ramas y flujo colaborativo.
* **Vercel:** Despliegue y hosting continuo del sitio estático.

---

## 📂 4. Estructura de Archivos y Carpetas

<pre><code>
/
├── index.html          # Portada principal del equipo
├── bitacora.html       # Registro del proceso de desarrollo
├── martina.html        # Perfil individual 01
├── dalila.html         # Perfil individual 02
├── jorge.html          # Perfil individual 03
├── luis.html           # Perfil individual 04
├── martin.html         # Perfil individual 05
├── README.md           # Documentación obligatoria del proyecto
│
├── css/
│   ├── styles.css      # Estilos base, reset, header, footer y portada
│   ├── perfiles.css    # Temáticas y layouts de los 5 perfiles
│   └── responsive.css  # Media queries y breakpoints globales (1200px, 900px, 600px, 400px)
│
├── js/
│   ├── main.js         # Menú hamburguesa mobile y rotador dinámico del Hero
│   ├── martina.js      # Consola interactiva de Martina
│   ├── dalila.js       # Explorador de curiosidades de Dalila
│   ├── jorge.js        # Consola cyber y modo Inferno de Jorge
│   ├── luis.js         # Reproductor vintage de Luis
│   └── martin.js       # Sistema Martin OS retro de Martín
│
└── img/
    ├── avatares/       # Avatares de integrantes (martina.jpg, dalila.jpg, etc.)
    └── capturas/       # Capturas de pantalla de la interactividad
</code></pre>

---

## 🎨 5. Guía de Estilos

### Tipografías (Google Fonts)
* **General e Interfaces:** `Inter` (cuerpo de texto legible) y `Poppins` (titulares y destacados).
* **Tecnología / Consolas:** `Space Mono` (código, etiquetas meta, terminales).
* **Temática Clásica (Luis):** `Playfair Display` (serif elegante para títulos y citas).
* **Temática 8-Bit (Martín):** `Press Start 2P` (estética arcade retro).

### Paleta Hexadecimal Global (`styles.css`)
* **Fondo Principal (`--bg-main`):** `#080b18`
* **Fondo Secundario (`--bg-secondary`):** `#10152b`
* **Fondo de Tarjetas (`--bg-card`):** `rgba(17, 24, 48, 0.82)`
* **Borde General (`--border`):** `rgba(255, 255, 255, 0.09)`
* **Texto Principal (`--text-primary`):** `#f8fafc`
* **Texto Secundario (`--text-secondary`):** `#a8b0c7`
* **Acento Primario (`--accent-primary`):** `#6366f1` (Indigo)
* **Acento Secundario (`--accent-secondary`):** `#22d3ee` (Cyan)
* **Acento Púrpura (`--accent-purple`):** `#a855f7` (Purple)

### Paletas Específicas por Perfil (`perfiles.css`)
* **Martina (`.martina-theme`):** Primario `#31afe6`, Secundario `#df3c5d`, Base `#080d2c`.
* **Dalila (`.dalila-theme`):** Primario `#64d8ff`, Secundario `#9d62ff`, Base `#080b20`.
* **Jorge (`.jorge-theme`):** Primario `#ff6d00`, Secundario `#880808`, Amarillo `#ffde21`, Base `#050505`.
* **Luis (`.luis-theme`):** Dorado `#f4d03f`, Verde `#48c774`, Azul `#3da5d9`, Base `#080b0d`.
* **Martín (`.martin-theme`):** Cian `#42d9ff`, Verde Neón `#42e87a`, Azul `#2188c9`, Base `#071015`.

### Iconografía y Elementos Visuales
Se combinaron caracteres ASCII técnicos (`</>`, `{ }`, `0101`, `PY`, `FLB`, `8BIT`) junto con emojis nativos (`🎬`, `🎧`, `🎵`, `🎮`, `🐶`, `☕`, `🐉`) para reducir el peso de carga y evitar dependencias de librerías externas.

---

## ⚡ 6. Interactividad Dinámica con JavaScript

### 1. Portada Global (`js/main.js`)
* **Menú Mobile Responsive:** Control del evento click sobre `#menuToggle` para alternar la visibilidad de `.nav` y su animación.
* **Hero Dinámico:** Rotación temporizada de texto sobre `#dynamicText` con transición de desvanecimiento (`fade-out`).

![Captura Portada](img/capturas/capturaportada.png)

### 2. Perfil de Martina (`js/martina.js`)
* **Terminal Interactiva:** Botones con atributo `data-terminal` que inyectan respuestas sobre código, creatividad y hobbies dentro de `#terminalOutput`.

![Perfil de Martina](img/capturas/capturaperfilmartina.png)

### 3. Perfil de Dalila (`js/dalila.js`)

* **Curiosity Explorer:** menú interactivo con opciones identificadas mediante `data-interest`. Al seleccionar una opción, JavaScript actualiza dinámicamente el ícono, título y descripción de la sección (`#dalilaExplorerIcon`, `#dalilaExplorerTitle` y `#dalilaExplorerText`). La información presenta diferentes intereses relacionados con astronomía, tortugas y creatividad.

* **Uso de IA:** se utilizaron ChatGPT y Claude Code, ambos con planes gratuitos, principalmente como herramientas de asistencia para verificar código HTML, CSS y JavaScript, proponer modificaciones y ayudar en la creación de avatares. También se utilizaron como apoyo para explorar estilos visuales y seleccionar paletas de colores para el perfil.

* **Revisión y adaptación:** las sugerencias generadas por IA fueron revisadas y adaptadas por el equipo antes de incorporarlas al proyecto. Se realizaron pruebas para comprobar que el código funcionara correctamente y que los cambios mantuvieran la estética y estructura definida para el perfil.

![Perfil de Dalila](img/capturas/capturaperfildaly.png)

### 4. Perfil de Jorge (`js/jorge.js`)

* **Cyber Console & Modo Inferno:** Procesador de comandos interactivo que escribe registros dinámicos en `#jorgeConsoleOutput` y conmuta la clase `.inferno-mode` en la página, alterando las variables CSS, aplicando un fondo estático de la guarida de Scorpion (Scorpion_Lair.jpg) y disparando efectos multimedia (reproducción de audio de Shao Kahn y destello visual al activarse).

![Perfil de Jorge](img/capturas/capturaperfiljorge.png)

### 5. Perfil de Luis (`js/luis.js`)
* **Vintage Player:** Botonera interactiva con `data-luis` que actualiza la carátula, categoría, título y descripción dentro de `#luisPlayerDisplay`.
* **Accesibilidad (A11y) y Atributos ARIA (Completado):**
  * **Región Dinámica Accesible:** Implementación de `aria-live="polite"` en `#luisPlayerDisplay` para anunciar en tiempo real y sin interrupciones los cambios de categoría a usuarios de lectores de pantalla.
  * **Controles y Estados Interactivos:** Incorporación de `aria-controls="luisPlayerDisplay"` y alternancia dinámica de estado mediante `aria-pressed="true|false"` en todos los botones del reproductor sincronizados vía JavaScript.
  * **Navegación Semántica y Accesible:** Menú mobile accesible con `aria-label`, `aria-expanded` y `aria-controls`, y marcado semántico de paginación entre integrantes mediante `<nav class="profile-navigation" aria-label="Navegación entre perfiles">`.
  * **Etiquetado y Ocultamiento Decorativo:** Enlaces de retorno al inicio con `aria-label="Volver al inicio"` (header y footer) y elementos puramente estéticos del hero protegidos con `aria-hidden="true"`.

![Perfil de Luis](img/capturas/capturaperfilluis.png)

### 6. Perfil de Martín (`js/martin.js`)
* **Retro System Console:** Consola interactiva con estética *arcade/retro terminal* (`MARTIN OS v1.0`) que procesa comandos mediante botones con `data-command`. Actualiza en tiempo real el contenido en `#martinConsole` (con soporte accesible vía `aria-live="polite"` y `aria-atomic="true"`) y permite conmutar dinámicamente el tema visual activando la clase `.green-mode`.
* **Optimización de Rendimiento y Multimedia:**
  * Implementación de carga diferida (`loading="lazy"`) y supresión de atributos obsoletos en los reproductores de YouTube embebidos, evitando bloqueos en la carga inicial y mejorando el score en métricas web.
  * Incorporación de atributos explícitos de proporción y tamaño en la imagen de avatar para prevenir saltos de diseño (*Cumulative Layout Shift* - CLS).
* **Accesibilidad (A11y) y Navegación por Teclado:**
  * Indicador de foco personalizado (`:focus-visible`) estilizado con estética neón/glow difuminado y bordes redondeados, garantizando un recorrido nítido y sin solapamientos en enlaces y botones interactivos.
  * Corrección de la maquetación en enlaces de tarjetas para ceñir el área activa al texto y evitar áreas de foco desproporcionadas.
  * Incorporación de `scroll-padding-top` en el documento base para evitar que el header fijo tape los encabezados al saltar entre secciones internas (`#sobre-mi`, `#habilidades`, `#interactivo`, etc.).
  * Navegación semántica e inclusiva con `<nav aria-label="Navegación entre perfiles">` y atributos contextuales en enlaces externos y decoraciones.
* **Diseño Responsivo Reforzado:**
  * Adaptación fluida de la sección musical (`.martin-track`), reorganizando la disposición de elementos en pantalla completa a columnas verticales en móviles sin desbordes horizontales.
  * Ajuste en el menú desplegable mobile (`responsive.css`) ampliando la altura máxima admisible para albergar la totalidad de enlaces del perfil sin recortes.

![Perfil de Martín](img/capturas/capturaperfilmartin.png)

---

## 📱 7. Diseño Adaptable y Breakpoints

El diseño utiliza CSS Grid y Flexbox de forma adaptativa, implementando las directivas solicitadas en la consigna:

* **Breakpoint 1200px (Desktop / Laptop):** Reorganización de grillas de 4 columnas a 3 columnas (`.skills-grid`, `.martin-stack-grid`) y ajuste de márgenes en el hero.
* **Breakpoint 900px (Tablet):** Activación del botón de menú hamburguesa, conversión del Hero a columna simple y colapso de grillas a 2 columnas.
* **Breakpoint 600px:** Grillas de cards e intereses a 1 columna.
* **Breakpoint 400px (Mobile Estrecho):** Adaptación fluida sin desbordes horizontales, apilamiento de controles interactivos al 100% de ancho y escalado tipográfico con `clamp()`.

---

## 🚀 8. Publicación

El proyecto se encuentra desplegado y accesible públicamente a través de **Vercel**:

🌐 **URL de Producción:** [https://tp1-frontend-grupal.vercel.app/](https://tp1-frontend-grupal.vercel.app/)

---

## 📈 9. Sección de Evolución

Propuestas proyectadas para futuras etapas del proyecto:
1. **Persistencia de Datos:** Almacenamiento local (`localStorage`) para recordar el último tema seleccionado en perfiles con modo alternativo (Jorge y Martín).
2. **Consumo de APIs Externas:** Reemplazo de datos estáticos de música y películas por consultas en tiempo real a APIs públicas (ej. OMDb API, Spotify Web API).
3. **Optimización de Animaciones:** Incorporación de *Intersection Observer* para activar animaciones de entrada a medida que el usuario hace scroll.
4. **Formulario de Contacto:** Inclusión de validación en tiempo real con JavaScript en una sección común del equipo.

---

## 🤖 10. Uso de IA y Criterio de Privacidad (Autoría)

* **Herramientas y Modelos:** Se utilizaron modelos de lenguaje (ChatGPT de OpenAI y Claude de Anthropic) en sus planes gratuitos para consulta técnica y asistencia en redacción. Para la generación de los avatares se utilizó además **Gemini** (Google, plan gratuito) y **ChatGPT Plus** (OpenAI, plan pago).
* **Experiencia previa del equipo:** los integrantes cuentan con distintos niveles de experiencia previa en el uso de herramientas de IA generativa — algunos ya las habían utilizado en trabajos anteriores, mientras que para otros fue una de las primeras veces aplicándolas a un proyecto de código.
* **Asistencia Técnica:**
  * Estructuración inicial de plantillas semánticas en HTML5 y atributos ARIA de accesibilidad.
  * Optimización de variables CSS y reglas de especificidad en los selectores temáticos.
  * Debugging de lógica en event listeners para los módulos interactivos en JavaScript Vanilla.
* **Avatares y Recursos Gráficos:** Las imágenes de avatares fueron tratadas y optimizadas para web en formato `.jpg`/`.webp`, priorizando una identidad visual uniforme.
  * Los avatares de **Martina Bistagnino, Jorge Caliz, Francisco Luis Bronzi y Martín Roige** se generaron con **ChatGPT Plus** (plan pago), a cargo de Martina Bistagnino, con un criterio visual de estilo **cyberpunk** aplicado como fondo/ambientación en los cuatro casos.
  * El avatar de **Gabriela Dalila Contrera** se generó con **Gemini** (plan gratuito), proporcionando como referencia una foto propia, una foto de su mascota y la imagen de estilo del avatar de Martina, solicitando un resultado visual similar.
* **Criterio de Validación y Autoría:** Cada sugerencia producida por herramientas de IA fue revisada, modificada y probada individualmente por el equipo. El código CSS, la arquitectura de archivos y la lógica de interacción final reflejan decisiones y desarrollo propio de los integrantes del grupo.
