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

about       → quién soy
skills      → habilidades técnicas
work        → experiencia actual
game        → videojuego favorito
study       → qué me gusta aprender
psychology  → interés actual
music       → música
status      → estado del sistema
theme       → cambiar colores
random      → dato aleatorio
clear       → limpiar terminal
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
   EJECUTAR COMANDO
========================================== */

async function executeCommand(
    rawCommand
) {

    const command =
        rawCommand
            .trim()
            .toLowerCase();


    if (!command) {
        return;
    }



    /*
        Guardamos historial
    */

    commandHistory.push(
        command
    );


    historyPosition =
        commandHistory.length;



    /*
        Contador
    */

    updateCommandCounter();


    updateActiveButton(
        command
    );



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

/* ==========================================
   ODIN EASTER EGG
========================================== */

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

    /* EASTER EGG */

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



    /* COMANDOS NORMALES */

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



    /* ERROR */

    const output =
        createHistoryEntry(
            command,
            "",
            "error"
        );


    await typeText(
        output,
        `Comando no reconocido: "${command}". Escribí "help" para ver los comandos disponibles.
        tip: 
Algunas funciones del sistema no aparecen documentadas.

Tal vez haya módulos ocultos... 👀
`,
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

        /*
            Mouse
        */

        card.addEventListener(
            "mouseenter",
            () => {

                exploreAlbum(
                    card
                );

            }
        );


        /*
            Teclado
        */

        card.addEventListener(
            "focus",
            () => {

                exploreAlbum(
                    card
                );

            }
        );


        /*
            Touch / click
        */

        card.addEventListener(
            "click",
            () => {

                exploreAlbum(
                    card
                );

            }
        );

    }
);