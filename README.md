💻 TP1 — <EquipoDev/>

Trabajo Práctico Grupal 1 · Desarrollo de Sistemas Web Front End · 2026
Institución: IFTS N.º 29
Stack: HTML5 · CSS3 · JavaScript Vanilla
Repositorio: https://github.com/Martina-bistagnino/tp1-frontend-grupal
Deploy: https://tp1-frontend-grupal.vercel.app/

1. Descripción

<EquipoDev/> es un sitio web grupal creado para presentar a cinco integrantes mediante una portada común, perfiles individuales, navegación interna, interacciones JavaScript propias, diseño responsive y una bitácora del proceso.

La propuesta combina una identidad visual compartida con una personalidad propia para cada perfil. El proyecto fue realizado con HTML, CSS y JavaScript sin frameworks ni dependencias externas de ejecución.

El sitio incluye:

portada principal con presentación del equipo;

cinco perfiles individuales;

navegación interna entre páginas y secciones;

una interacción dinámica en la portada y varias interacciones en los perfiles;

breakpoints específicos para 1200 px, 900 px y 400 px, más un ajuste intermedio de 600 px;

criterios de accesibilidad y soporte para prefers-reduced-motion;

bitácora del proceso;

publicación en Vercel.

2. Integrantes

Integrante

Perfil

GitHub

Martina Bistagnino

martina.html

@Martina-bistagnino

Gabriela Dalila Contrera

dalila.html

@DalilaContrera

Jorge Caliz

jorge.html

@JorgeGabrielCaliz

Francisco Luis Bronzi

luis.html

@LuisUnix2100

Martín Roige

martin.html

@TinchoHub

El historial del repositorio registra participación de los cinco integrantes mediante commits propios.

3. Navegación

La navegación fue diseñada para que el sitio pueda recorrerse sin depender del botón Atrás del navegador.

Cada página posee acceso a la portada, al listado del equipo, a secciones internas y a la bitácora. Además, los perfiles están conectados de forma circular:

Martina → Dalila → Jorge → Luis → Martín → Martina

Los enlaces internos y las rutas locales fueron revisados para mantener una navegación consistente.

4. Estructura del proyecto

/
├── index.html
├── bitacora.html
├── martina.html
├── dalila.html
├── jorge.html
├── luis.html
├── martin.html
├── README.md
│
├── css/
│   ├── styles.css
│   ├── perfiles.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── martina.js
│   ├── dalila.js
│   ├── jorge.js
│   ├── luis.js
│   └── martin.js
│
├── img/
│   ├── avatares/
│   │   ├── martina.jpg
│   │   ├── dalila.jpg
│   │   ├── jorge.jpg
│   │   ├── luis.jpg
│   │   ├── martin.jpg
│   │   └── odin.webp
│   │
│   ├── capturas/
│   │   ├── capturaportada.png
│   │   ├── capturaperfilmartina.png
│   │   ├── capturaperfildaly.png
│   │   ├── capturaperfiljorge.png
│   │   ├── capturaperfilluis.png
│   │   └── capturaperfilmartin.png
│   │
│   └── Scorpion_Lair.jpg
│
└── audio/
    └── shao_kahn_laugh.mp3

Organización técnica

styles.css: estilos globales, portada, navegación, bitácora e intro.

perfiles.css: componentes compartidos y estilos específicos de los perfiles.

responsive.css: adaptación general de portada y navegación.

main.js: comportamiento compartido y funciones de la portada.

cada perfil posee su propio archivo JavaScript para separar responsabilidades.

5. Tecnologías utilizadas

HTML5

Se utilizó marcado semántico con elementos como header, main, section, article, nav, footer, button y aside.

También se incorporaron atributos de accesibilidad cuando correspondía, entre ellos:

aria-label
aria-live
aria-atomic
aria-expanded
aria-controls
aria-pressed
aria-hidden
aria-modal

CSS3

Se utilizaron:

variables CSS;

Flexbox y Grid;

clamp();

gradientes y transparencias;

pseudoelementos;

transiciones y animaciones;

:focus-visible;

media queries;

prefers-reduced-motion.

JavaScript Vanilla

No se utilizaron frameworks. JavaScript se emplea para modificar el DOM, administrar estados, ejecutar comandos, cambiar temas, generar selecciones aleatorias, manejar foco y teclado, cargar contenido bajo demanda y responder a preferencias de movimiento.

Git, GitHub y Vercel

Git y GitHub se utilizaron para control de versiones y colaboración. Vercel se utilizó para publicar la versión web del proyecto.

6. Guía de estilos

Tipografías

Las fuentes se incorporaron mediante Google Fonts.

Fuente

Uso principal

Inter

textos generales, navegación e interfaz

Poppins

títulos y destacados

Space Mono

terminales, comandos y etiquetas técnicas

Playfair Display

estética clásica del perfil de Luis

Press Start 2P

identidad retro gamer del perfil de Martín

Paleta global

--bg-main: #080b18;
--bg-secondary: #10152b;
--bg-card: rgba(17, 24, 48, 0.82);
--border: rgba(255, 255, 255, 0.09);
--text-primary: #f8fafc;
--text-secondary: #a8b0c7;
--accent-primary: #6366f1;
--accent-secondary: #22d3ee;
--accent-purple: #a855f7;

Identidad por perfil

Perfil

Paleta principal

Estética

Martina

#080D2C · #31AFE6 · #DF3C5D · #7A18C6

gamer · tecnológica · neón

Dalila

#080B20 · #64D8FF · #9D62FF

espacial · futurista · creativa

Jorge

#050505 · #880808 · #FF6D00 · #FFDE21

cyberpunk · gaming · oscura

Luis

#080B0D · #F4D03F · #48C774 · #3DA5D9

vintage · elegante · tecnológica

Martín

#071015 · #42D9FF · #42E87A · #2188C9

retro gamer · arcade

La iconografía combina caracteres, símbolos, emojis y recursos visuales propios para evitar depender de una biblioteca externa de íconos.

7. Interactividad JavaScript

Portada — js/main.js

La portada incorpora varias funciones dinámicas:

menú mobile: abre y cierra la navegación y actualiza aria-expanded;

hero dinámico: rota mensajes del equipo cada pocos segundos;

intro de bienvenida: presenta los cinco avatares, controla foco y permite cerrar con botón o Escape;

sessionStorage: evita repetir la intro durante la misma sesión;

movimiento reducido: detiene animaciones automáticas cuando el usuario tiene activa la preferencia prefers-reduced-motion.



Martina — js/martina.js

El perfil de Martina utiliza una Terminal 2.0 que funciona como centro interactivo del perfil.

Incluye:

entrada de comandos mediante formulario;

historial de comandos y navegación con flechas ↑ y ↓;

contador de comandos ejecutados;

efecto de escritura progresiva;

secuencia de inicio activada con IntersectionObserver;

comandos about, skills, work, game, study, psychology, photography, travel, design, music, status, theme, random, clear y tip;

navegación automática hacia secciones mediante scrollIntoView();

cambio de tema visual;

modos CAMERA_MODE, TRAVEL_MODE y DESIGN_MODE;

comandos secretos odin, finishhim y fatality;

aparición animada de Odin con mensajes aleatorios y estado ONLINE / SLEEPING;

Music Explorer: actualiza el álbum seleccionado y ofrece enlaces externos a YouTube;

Cinema Explorer: responde a mouse, teclado y toque, actualizando modo, título, descripción y metadatos visuales.

El perfil también respeta prefers-reduced-motion para reducir animaciones y desplazamiento suave cuando corresponde.



Dalila — js/dalila.js

El perfil de Dalila incorpora un Curiosity Explorer con contenido dinámico sobre distintos intereses.

JavaScript actualiza icono, título y descripción, utiliza una transición de entrada y administra el estado activo de los controles mediante aria-pressed.

También posee un Modo Eclipse, que alterna una clase temática en el documento y modifica la apariencia del perfil.



Jorge — js/jorge.js

El perfil de Jorge posee una Cyber Console con comandos relacionados con Python, música, videojuegos y datos aleatorios.

El Modo Inferno modifica la apariencia del perfil y combina cambios visuales con la imagen Scorpion_Lair.jpg y el audio shao_kahn_laugh.mp3. El audio se reproduce únicamente después de una interacción explícita del usuario.



Francisco Luis — js/luis.js

El perfil de Luis utiliza un Vintage Player. Los botones cambian dinámicamente icono, categoría, título y descripción según el contenido elegido.

Incluye una opción aleatoria basada en Math.random() y mantiene sincronizado el estado visual de los botones con aria-pressed.



Martín — js/martin.js

El perfil de Martín presenta MARTIN OS, una consola retro que permite ejecutar comandos como BOOT, STACK, GAMES, PETS, MISSION y SWITCH COLOR.

También incorpora:

secuencia de arranque;

cambio de tema mediante .green-mode;

tarjetas de películas/series con efecto flip;

carga del iframe de YouTube únicamente cuando el usuario solicita ver el trailer;

cierre de otras tarjetas abiertas y eliminación del iframe para detener la reproducción.



8. Accesibilidad

Durante el desarrollo se incorporaron mejoras para que los componentes interactivos no dependan únicamente del mouse.

Entre ellas:

navegación mediante teclado;

indicadores :focus-visible;

estados aria-expanded y aria-pressed;

regiones dinámicas con aria-live y aria-atomic;

textos alternativos en imágenes;

elementos decorativos marcados con aria-hidden cuando corresponde;

skip link en la portada;

control de foco en la intro;

soporte para prefers-reduced-motion.

9. Diseño responsive

La consigna solicita revisar específicamente 1200 px, 900 px y 400 px. El proyecto implementa esos breakpoints y utiliza además un ajuste intermedio de 600 px.

1200 px: ajuste de grillas y espacios para notebooks y pantallas intermedias.

900 px: menú hamburguesa, contenido en menos columnas y reorganización de perfiles.

600 px: controles apilados y adaptación de componentes interactivos.

400 px: reducción de tipografías, paddings, botones y grillas para smartphones pequeños.

El objetivo es evitar desbordes horizontales, contenido superpuesto y controles inaccesibles.

10. Bitácora

El proceso de trabajo se documenta en bitacora.html.

La bitácora registra:

análisis de la consigna;

recolección de información;

arquitectura del proyecto;

desarrollo de portada y perfiles;

responsive;

testing;

documentación y publicación;

problemas encontrados y correcciones realizadas.

Durante el pulido final se registraron, entre otras, correcciones de estructura HTML, eliminación de código obsoleto, ajustes de accesibilidad, limpieza de selectores y validación de JavaScript.

11. Uso de Inteligencia Artificial

La IA se utilizó como asistente técnico y creativo. El equipo mantuvo la autoría mediante revisión, adaptación, prueba y corrección manual de los resultados antes de incorporarlos al proyecto.

Herramientas registradas

Herramienta

Modelo / modalidad registrada

Plan registrado

Uso principal

ChatGPT — OpenAI

GPT-5.6 Sol para revisión técnica y código; generador de imágenes integrado para recursos visuales

Plus en la instancia documentada por Martina

revisión de consigna, HTML/CSS/JS, debugging, accesibilidad, responsive, documentación e imágenes

Gemini — Google

modelo exacto no registrado

gratuito

apoyo en la creación del avatar de Dalila

Claude — Anthropic

modelo exacto no registrado

no registrado

consulta técnica y contraste de alternativas

Cuando el modelo o plan exacto no quedó registrado durante el proceso, se indica de forma explícita en lugar de inventarlo.

Avatares e imágenes

Los avatares se trabajaron a partir de información aportada por cada integrante: colores, intereses, estética deseada y referencias visuales.

Los avatares de Martina, Jorge, Luis y Martín se documentaron como generados mediante las herramientas de imagen integradas en ChatGPT. El avatar de Dalila se documentó como generado con Gemini.

También se generó una caricatura independiente de Odin, el gato incluido en el perfil de Martina. Para esa imagen se utilizó como referencia una ilustración aportada por Martina y se pidió aislar al gato, mantener sus rasgos visuales y conservar la estética gamer/neón del perfil.

Las imágenes resultantes fueron seleccionadas y adaptadas manualmente antes de incorporarse al sitio.

Criterio de uso

La IA se utilizó para:

interpretar requisitos;

proponer estructuras y alternativas;

detectar y explicar errores;

revisar código;

mejorar accesibilidad;

generar propuestas visuales;

ayudar a organizar documentación.

El equipo revisó y modificó manualmente los resultados. La decisión final sobre contenido, diseño y funcionamiento permaneció en el grupo.

12. Publicación y ejecución

Sitio publicado

https://tp1-frontend-grupal.vercel.app/

Ejecución local

El proyecto no requiere instalación de dependencias.

git clone https://github.com/Martina-bistagnino/tp1-frontend-grupal.git
cd tp1-frontend-grupal

Luego puede abrirse index.html directamente o ejecutarse con un servidor local como Live Server.

13. Evolución

Este TP funciona como primera versión del sitio grupal. Como posibles mejoras futuras se consideran:

optimización adicional del peso de imágenes;

persistencia de algunas preferencias visuales con localStorage;

nuevas fuentes externas de contenido cuando el alcance del proyecto lo permita;

mejoras progresivas de accesibilidad y rendimiento;

ampliación de las interacciones sin perder claridad ni usabilidad.

14. Verificación contra la consigna

Requisito

Estado

Repositorio independiente

✅

index.html y perfiles en la raíz

✅

Cinco integrantes enlazados

✅

Navegación interna

✅

Foto o avatar por integrante

✅

Edad y ubicación

✅

Al menos cuatro habilidades por perfil

✅

Tres películas por integrante (lectura literal de la consigna)

⚠️ Revisar si la docente lo exige literalmente

Tres discos / álbumes por integrante

✅

JavaScript en portada

✅

JavaScript propio en cada perfil

✅

CSS propio y Google Fonts

✅

Breakpoints 1200 / 900 / 400 px

✅

Bitácora HTML enlazada

✅

Publicación en Vercel

✅

URL de Vercel documentada

✅

Uso de IA documentado

🟡 Falta confirmar algunos modelos/planes y experiencia previa

Capturas de las funciones JavaScript

🟡 Actualizar las capturas finales para mostrar las interacciones

15. Pendientes antes de entregar

Para cerrar el README sin inventar información quedan dos verificaciones documentales:

reemplazar las capturas generales de los perfiles por capturas donde se vea la interacción JavaScript de cada integrante;

confirmar el modelo, plan y experiencia previa de las herramientas de IA cuando esos datos no quedaron registrados durante el desarrollo.

Estos puntos se dejan visibles hasta contar con la información definitiva del equipo.

Cinco perfiles. Cinco estilos. Un solo equipo.

<EquipoDev/>