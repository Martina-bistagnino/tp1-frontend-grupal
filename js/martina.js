/* ==========================================
   MARTINA TERMINAL 2.0
========================================== */


/* ==========================================
   ELEMENTOS
========================================== */
const odinAssistant =
    document.querySelector(
        "#odinAssistant"
    );


const odinMessage =
    document.querySelector(
        "#odinMessage"
    );


const odinStatus =
    document.querySelector(
        "#odinStatus"
    ); 

const terminal =
    document.querySelector("#martinaTerminal");

const terminalHistory =
    document.querySelector("#terminalHistory");

const terminalForm =
    document.querySelector("#terminalForm");

const terminalInput =
    document.querySelector("#terminalInput");

const terminalButtons =
    document.querySelectorAll(".terminal-button");

const commandCounter =
    document.querySelector("#commandCounter");

const martinaModePanel =
    document.querySelector(
        "#martinaModePanel"
    );


const martinaModeLabel =
    document.querySelector(
        "#martinaModeLabel"
    );


const martinaModeTitle =
    document.querySelector(
        "#martinaModeTitle"
    );


const martinaModeText =
    document.querySelector(
        "#martinaModeText"
    );


/* ==========================================
   MOVIMIENTO REDUCIDO
========================================== */

const martinaReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );



/* ==========================================
   ESTADO
========================================== */

let executedCommands = 0;

let commandHistory = [];

let historyPosition = 0;

let bootExecuted = false;

let currentTheme = 0;



/* ==========================================
   DATOS RANDOM
========================================== */

const randomFacts = [

    "Mi videojuego favorito es Mortal Kombat 🎮.",
    "Tengo un gato llamado Odin 🐈.",
    "Me gusta investigar y profundizar temas nuevos 📚.",
    "La fotografía es uno de mis hobbies 📸.",
    "Me gusta viajar y conocer lugares nuevos ✈️.",
    "Actualmente estoy profundizando en psicología 🧠."

];

/* ==========================================
   ODIN
========================================== */

const odinMessages = [

    "¿Otra vez tocando el CSS? 🐾",

    "Yo no rompí el código. Esta vez.",

    "Compiló. Podés agradecerme después.",

    "Productividad supervisada por Odin.",

    "¿Ya hiciste git push?",

    "Si funciona, no lo toques.",

    "Miau.exe ejecutado correctamente.",

    "Frontend revisado. Podés continuar.",

    "Detecté una humana programando. Vine a supervisar.",

    "No veo errores... sospechoso.",

    "STATUS: Martina programando. Odin observando.",

    "El código está aprobado. Ahora dame comida."

];

/* ==========================================
   RESPUESTAS
========================================== */

const commands = {

    help: `
Comandos disponibles:

about        → quién soy
personal     → cosas que me gustan
skills       → habilidades técnicas
work         → experiencia actual
game         → videojuego favorito
study        → qué me gusta aprender
psychology   → interés actual
photography  → activar CAMERA_MODE
travel       → activar TRAVEL_MODE
design       → activar DESIGN_MODE
music        → abrir Music Explorer
status       → estado del sistema
theme        → cambiar colores
random       → dato aleatorio
clear        → limpiar terminal
tip          → descubrir una pista
    `,


    about: `
Soy estudiante de Desarrollo de Software y trabajo
en el área de Sistemas, combinando desarrollo web,
mantenimiento de aplicaciones y soporte técnico.
    `,


    skills: `
HTML
CSS
JavaScript
Git
GitHub
Responsive Design
UI/UX
    `,


    work: `
Actualmente trabajo en Sistemas realizando tareas
de desarrollo web, mantenimiento y asistencia
tecnológica a usuarios.
    `,

    personal: `
    Fuera del código disfruto la fotografía,
    viajar, estudiar temas nuevos, jugar Mortal Kombat
    y pasar tiempo con Odin 🐈.
`,


    game: `
Mortal Kombat 🎮
    `,


    study: `
Me gusta estudiar, investigar y profundizar
en temas nuevos.
    `,


    psychology: `
Actualmente uno de los temas que estoy
explorando es la psicología 🧠.
    `,


    music: `
Las Pastillas del Abuelo 🎧

Álbumes seleccionados:
Por Colectora
Paradojas
2020
    `,

    photography: `
La fotografía es uno de mis hobbies 📸.

Me gusta su lado visual y creativo,
y la posibilidad de capturar momentos
desde una mirada propia.
    `,


    travel: `
Me gusta viajar y conocer lugares nuevos ✈️.

Disfruto descubrir nuevos ambientes,
experiencias y perspectivas.
    `,


    design: `
El diseño es una de las áreas que más
me interesa combinar con desarrollo web 🎨.

Me gusta trabajar con colores,
composición, interfaces y experiencia de usuario.
    `,


    tip: `
No todas las funciones del sistema
aparecen documentadas...

Tal vez existan módulos ocultos 👀.
    `,

    status: `
FRONTEND    ONLINE
CREATIVITY  ONLINE
LEARNING    ACTIVE
SYSTEM      READY
    `

};



/* ==========================================
   CONTADOR
========================================== */

function updateCommandCounter() {

    executedCommands++;


    if (!commandCounter) {
        return;
    }


    commandCounter.textContent =
        String(executedCommands)
            .padStart(2, "0");

}



/* ==========================================
   SCROLL TERMINAL
========================================== */

function scrollTerminalToBottom() {

    if (!terminalHistory) {
        return;
    }


    terminalHistory.scrollTop =
        terminalHistory.scrollHeight;

}



/* ==========================================
   CREAR ENTRADA
========================================== */

function createHistoryEntry(
    command,
    response,
    type = "normal"
) {

    if (!terminalHistory) {
        return;
    }


    const entry =
        document.createElement("div");


    entry.className =
        "terminal-history__entry";



    if (command) {

        const commandElement =
            document.createElement("p");


        commandElement.className =
            "terminal-history__command";


        commandElement.textContent =
            `martina@perfil:~$ ${command}`;


        entry.appendChild(
            commandElement
        );

    }



    const responseElement =
        document.createElement("p");


    responseElement.className =
        "terminal-history__response";


    if (type === "error") {

        responseElement.classList.add(
            "terminal-history__error"
        );

    }


    if (type === "system") {

        responseElement.classList.add(
            "terminal-history__system"
        );

    }


    if (type === "secret") {

        responseElement.classList.add(
            "terminal-history__secret"
        );

    }


    entry.appendChild(
        responseElement
    );


    terminalHistory.appendChild(
        entry
    );


    return responseElement;

}



/* ==========================================
   TYPEWRITER
========================================== */

async function typeText(
    element,
    text,
    speed = 16
) {

    if (!element) {
        return;
    }


    const cleanText =
        text.trim();


    /*
        Si el usuario prefiere
        movimiento reducido,
        mostramos todo inmediatamente.
    */

    if (
        martinaReducedMotion.matches
    ) {

        element.textContent =
            cleanText;


        scrollTerminalToBottom();

        return;

    }



    element.textContent = "";


    for (
        let index = 0;
        index < cleanText.length;
        index++
    ) {

        element.textContent +=
            cleanText[index];


        scrollTerminalToBottom();


        await new Promise(
            (resolve) => {

                setTimeout(
                    resolve,
                    speed
                );

            }
        );

    }

}



/* ==========================================
   BOTONES ACTIVOS
========================================== */

function updateActiveButton(
    selectedCommand
) {

    terminalButtons.forEach(
        (button) => {

            const isActive =
                button.dataset.command ===
                selectedCommand;


            button.classList.toggle(
                "is-active",
                isActive
            );


            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );

        }
    );

}



/* ==========================================
   RANDOM
========================================== */

function getRandomFact() {

    const randomIndex =
        Math.floor(
            Math.random() *
            randomFacts.length
        );


    return randomFacts[randomIndex];

}
function getRandomOdinMessage() {

    const randomIndex =
        Math.floor(
            Math.random() *
            odinMessages.length
        );


    return odinMessages[
        randomIndex
    ];

}
let odinHideTimeout;


function activateOdin() {

    if (
        !odinAssistant ||
        !odinMessage
    ) {
        return;
    }

if (martinaModePanel) {

    martinaModePanel.hidden = true;

    clearTimeout(
        martinaModeTimeout
    );

}
    /* Cancelamos ocultado anterior */

    clearTimeout(
        odinHideTimeout
    );


    /* Frase aleatoria */

    odinMessage.textContent =
        getRandomOdinMessage();


    /* Estado ONLINE */

    if (odinStatus) {

        odinStatus.textContent =
            "ONLINE";


        odinStatus.classList.add(
            "is-online"
        );

    }


    /*
        Para reiniciar la animación
        incluso si se ejecuta varias veces.
    */

    odinAssistant.hidden = true;


    void odinAssistant.offsetWidth;


    odinAssistant.hidden = false;


    /*
        Después de unos segundos
        vuelve a dormir.
    */

    odinHideTimeout =
        setTimeout(
            () => {

                odinAssistant.hidden =
                    true;


                if (odinStatus) {

                    odinStatus.textContent =
                        "SLEEPING";


                    odinStatus.classList.remove(
                        "is-online"
                    );

                }

            },

            martinaReducedMotion.matches
                ? 3000
                : 5000
        );

}

/* ==========================================
   CAMBIO DE TEMA
========================================== */

function changeMartinaTheme() {

    const themes = [
        "CYAN MODE",
        "PINK MODE",
        "PURPLE MODE"
    ];


    document.body.classList.remove(
        "martina-pink",
        "martina-purple"
    );


    currentTheme++;


    if (currentTheme > 2) {

        currentTheme = 0;

    }


    if (currentTheme === 1) {

        document.body.classList.add(
            "martina-pink"
        );

    }


    if (currentTheme === 2) {

        document.body.classList.add(
            "martina-purple"
        );

    }


    return (
        `Theme changed → ${themes[currentTheme]}`
    );

}



/* ==========================================
   EASTER EGG
========================================== */

function activateFatality() {

    document.body.classList.add(
        "fatality-mode"
    );


    setTimeout(
        () => {

            document.body.classList.remove(
                "fatality-mode"
            );

        },
        martinaReducedMotion.matches
            ? 0
            : 1000
    );


    return `
FATALITY.

Default styles have been defeated.
    `;

}



/* ==========================================
   LIMPIAR TERMINAL
========================================== */

function clearTerminal() {

    if (!terminalHistory) {
        return;
    }


    terminalHistory.innerHTML = "";

}

/* ==========================================
   MODOS VISUALES
========================================== */

const profileModes = {

    photography: {

        label:
            "CAMERA_MODE",

        title:
            "Fotografía 📸",

        text:
            "Capturando creatividad, detalles y nuevas perspectivas."

    },


    travel: {

        label:
            "TRAVEL_MODE",

        title:
            "Explorar ✈️",

        text:
            "Buscando nuevos lugares, experiencias y formas de ver el mundo."

    },


    design: {

        label:
            "DESIGN_MODE",

        title:
            "Diseño 🎨",

        text:
            "Cargando la identidad visual del perfil de Martina."

    }

};


let martinaModeTimeout;


function activateProfileMode(
    mode
) {

    const modeData =
        profileModes[mode];


    if (
        !modeData ||
        !martinaModePanel
    ) {
        return;
    }
if (odinAssistant) {

    odinAssistant.hidden = true;

    clearTimeout(
        odinHideTimeout
    );

}


if (odinStatus) {

    odinStatus.textContent =
        "SLEEPING";

    odinStatus.classList.remove(
        "is-online"
    );

}

    clearTimeout(
        martinaModeTimeout
    );


    martinaModePanel.hidden =
        true;


    martinaModePanel.dataset.mode =
        mode;


    if (martinaModeLabel) {

        martinaModeLabel.textContent =
            modeData.label;

    }


    if (martinaModeTitle) {

        martinaModeTitle.textContent =
            modeData.title;

    }


    if (martinaModeText) {

        martinaModeText.textContent =
            modeData.text;

    }


    /*
        Fuerza el reinicio
        de la animación.
    */

    void martinaModePanel.offsetWidth;


    martinaModePanel.hidden =
        false;


    martinaModeTimeout =
        setTimeout(
            () => {

                martinaModePanel.hidden =
                    true;

            },

            martinaReducedMotion.matches
                ? 3000
                : 5000
        );

}
/* ==========================================
   NAVEGACIÓN DESDE TERMINAL
========================================== */

function goToSection(
    selector
) {

    const section =
        document.querySelector(
            selector
        );


    if (!section) {
        return;
    }


    section.scrollIntoView({

        behavior:
            martinaReducedMotion.matches
                ? "auto"
                : "smooth",

        block: "center"

    });


    section.classList.add(
        "terminal-target"
    );


    setTimeout(
        () => {

            section.classList.remove(
                "terminal-target"
            );

        },

        martinaReducedMotion.matches
            ? 0
            : 1200
    );

}

/* ==========================================
   EJECUTAR COMANDO
========================================== */

async function executeCommand(rawCommand) {

    const command =
        rawCommand
            .trim()
            .toLowerCase();


    if (!command) {
        return;
    }


    commandHistory.push(command);

    historyPosition =
        commandHistory.length;


    updateCommandCounter();

    updateActiveButton(command);


    /* CLEAR */

    if (command === "clear") {

        clearTerminal();

        return;

    }


    /* RANDOM */

    if (command === "random") {

        const output =
            createHistoryEntry(
                command,
                ""
            );


        await typeText(
            output,
            getRandomFact()
        );


        return;

    }


    /* THEME */

    if (command === "theme") {

        const output =
            createHistoryEntry(
                command,
                ""
            );


        await typeText(
            output,
            changeMartinaTheme()
        );


        return;

    }


    /* ======================================
       ODIN
    ====================================== */

    if (command === "odin") {

        const output =
            createHistoryEntry(
                command,
                "",
                "secret"
            );


        await typeText(
            output,
            `
> searching hidden modules...
> feline module detected.

🐈 ODIN.exe

status: ONLINE
role: frontend supervisor
priority: treats
            `,
            18
        );


        activateOdin();

        return;

    }


    /* ======================================
       FATALITY
    ====================================== */

    if (
        command === "finishhim" ||
        command === "fatality"
    ) {

        const output =
            createHistoryEntry(
                command,
                "",
                "secret"
            );


        await typeText(
            output,
            activateFatality(),
            25
        );


        return;

    }


    /* ======================================
       MODOS VISUALES
    ====================================== */

    if (
        command === "photography" ||
        command === "travel" ||
        command === "design"
    ) {

        const output =
            createHistoryEntry(
                command,
                ""
            );


        await typeText(
            output,
            commands[command]
        );


        activateProfileMode(
            command
        );


        return;

    }


    /* ======================================
       MUSIC
    ====================================== */

    if (command === "music") {

        const output =
            createHistoryEntry(
                command,
                ""
            );


        await typeText(
            output,
            `
Opening music.module...

Las Pastillas del Abuelo 🎧

Por Colectora
Paradojas
2020
            `
        );


        goToSection(
            "#martinaMusic"
        );


        return;

    }


    /* ======================================
       SKILLS
    ====================================== */

    if (command === "skills") {

        const output =
            createHistoryEntry(
                command,
                ""
            );


        await typeText(
            output,
            commands.skills
        );


        goToSection(
            "#habilidades"
        );


        return;

    }


    /* ======================================
       ABOUT
    ====================================== */

    if (command === "about") {

        const output =
            createHistoryEntry(
                command,
                ""
            );


        await typeText(
            output,
            commands.about
        );


        goToSection(
            "#sobre-mi"
        );


        return;

    }


    /* ======================================
       COMANDOS NORMALES
    ====================================== */

    if (commands[command]) {

        const output =
            createHistoryEntry(
                command,
                ""
            );


        await typeText(
            output,
            commands[command]
        );


        return;

    }


    /* ======================================
       ERROR
    ====================================== */

    const output =
        createHistoryEntry(
            command,
            "",
            "error"
        );


    await typeText(
        output,
        `Comando no reconocido: "${command}". Escribí "help" para ver los comandos disponibles.`
    );

}



/* ==========================================
   FORMULARIO
========================================== */

terminalForm?.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const command =
            terminalInput.value;


        terminalInput.value = "";


        executeCommand(
            command
        );

    }
);



/* ==========================================
   BOTONES RÁPIDOS
========================================== */

terminalButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                executeCommand(
                    button.dataset.command
                );

            }
        );

    }
);



/* ==========================================
   HISTORIAL ↑ ↓
========================================== */

terminalInput?.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "ArrowUp" &&
            event.key !== "ArrowDown"
        ) {

            return;

        }


        event.preventDefault();


        if (event.key === "ArrowUp") {

            historyPosition =
                Math.max(
                    0,
                    historyPosition - 1
                );

        }


        if (event.key === "ArrowDown") {

            historyPosition =
                Math.min(
                    commandHistory.length,
                    historyPosition + 1
                );

        }


        terminalInput.value =
            commandHistory[
                historyPosition
            ] ?? "";

    }
);



/* ==========================================
   BOOT SEQUENCE
========================================== */

async function bootTerminal() {

    if (
        bootExecuted ||
        !terminalHistory
    ) {

        return;

    }


    bootExecuted = true;

    terminalHistory.innerHTML = "";


    const bootMessages = [

        "initializing martina.exe...",

        "loading frontend.module... OK",

        "loading creativity.module... OK",

        "loading curiosity.module... OK",

        "accessibility.check... OK",

        "system ready."

    ];


    for (
        const message
        of bootMessages
    ) {

        const output =
            createHistoryEntry(
                "",
                "",
                "system"
            );


        await typeText(
            output,
            `> ${message}`,
            14
        );


        if (
            !martinaReducedMotion.matches
        ) {

            await new Promise(
                (resolve) => {

                    setTimeout(
                        resolve,
                        180
                    );

                }
            );

        }

    }


    const welcome =
        createHistoryEntry(
            "",
            "",
            "system"
        );


    await typeText(
        welcome,
        '> escribí "help" para comenzar.'
    );

}



/* ==========================================
   ACTIVAR BOOT AL LLEGAR
========================================== */

if (
    terminal &&
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            bootTerminal();

                            observer.disconnect();

                        }

                    }
                );

            },
            {
                threshold: 0.35
            }
        );


    observer.observe(
        terminal
    );

} else {

    bootTerminal();

}



/* ==========================================
   MUSIC EXPLORER
========================================== */

const musicCards =
    document.querySelectorAll(
        ".music-card"
    );


const nowPlayingAlbum =
    document.querySelector(
        "#nowPlayingAlbum"
    );


const nowPlayingArtist =
    document.querySelector(
        "#nowPlayingArtist"
    );


function exploreAlbum(card) {

    if (!card) {
        return;
    }


    musicCards.forEach(
        (currentCard) => {

            currentCard.classList.remove(
                "is-playing"
            );

        }
    );


    card.classList.add(
        "is-playing"
    );


    if (nowPlayingAlbum) {

        nowPlayingAlbum.textContent =
            card.dataset.album;

    }


    if (nowPlayingArtist) {

        nowPlayingArtist.textContent =
            card.dataset.artist;

    }

}



musicCards.forEach(
    (card) => {

        /* MOUSE */

        card.addEventListener(
            "mouseenter",
            () => {

                exploreAlbum(
                    card
                );

            }
        );


        /* TECLADO */

        card.addEventListener(
            "focus",
            () => {

                exploreAlbum(
                    card
                );

            }
        );


        /* TOUCH / CLICK */

        card.addEventListener(
            "click",
            (event) => {

                /*
                    Si hizo click en YouTube,
                    dejamos funcionar el enlace.
                */

                if (
                    event.target.closest?.(
                        ".music-youtube-button"
                    )
                ) {

                    return;

                }


                exploreAlbum(
                    card
                );

            }
        );

    }
);
/* ==========================================
   CINEMA EXPLORER
========================================== */

const cinemaCards =
    document.querySelectorAll(
        ".cinema-card"
    );


const cinemaScreen =
    document.querySelector(
        "#martinaCinemaScreen"
    );


const cinemaIcon =
    document.querySelector(
        "#cinemaIcon"
    );


const cinemaMode =
    document.querySelector(
        "#cinemaMode"
    );


const cinemaTitle =
    document.querySelector(
        "#cinemaTitle"
    );


const cinemaDescription =
    document.querySelector(
        "#cinemaDescription"
    );


const cinemaFormat =
    document.querySelector(
        "#cinemaFormat"
    );


const cinemaVibe =
    document.querySelector(
        "#cinemaVibe"
    );


const cinemaFocus =
    document.querySelector(
        "#cinemaFocus"
    );



/* ==========================================
   EXPLORAR CINE / SERIES
========================================== */

function exploreCinema(card) {

    if (
        !card ||
        !cinemaScreen
    ) {

        return;

    }


    cinemaCards.forEach(
        (currentCard) => {

            currentCard.classList.remove(
                "is-active"
            );

        }
    );


    card.classList.add(
        "is-active"
    );


    cinemaScreen.dataset.cinemaMode =
        card.dataset.cinema;


    if (cinemaIcon) {

        cinemaIcon.textContent =
            card.dataset.icon;

    }


    if (cinemaMode) {

        cinemaMode.textContent =
            card.dataset.type;

    }


    if (cinemaTitle) {

        cinemaTitle.textContent =
            card.dataset.title;

    }


    if (cinemaDescription) {

        cinemaDescription.textContent =
            card.dataset.description;

    }


    if (cinemaFormat) {

        cinemaFormat.textContent =
            card.dataset.format || "—";

    }


    if (cinemaVibe) {

        cinemaVibe.textContent =
            card.dataset.vibe || "—";

    }


    if (cinemaFocus) {

        cinemaFocus.textContent =
            card.dataset.focus || "—";

    }


    /* Reiniciamos animación */

    cinemaScreen.classList.remove(
        "is-changing"
    );


    void cinemaScreen.offsetWidth;


    cinemaScreen.classList.add(
        "is-changing"
    );

}



/* ==========================================
   EVENTOS
========================================== */

cinemaCards.forEach(
    (card) => {

        /* MOUSE */

        card.addEventListener(
            "mouseenter",
            () => {

                exploreCinema(
                    card
                );

            }
        );


        /* TECLADO */

        card.addEventListener(
            "focus",
            () => {

                exploreCinema(
                    card
                );

            }
        );


        /* CELULAR */

        card.addEventListener(
            "click",
            () => {

                exploreCinema(
                    card
                );

            }
        );

    }
);