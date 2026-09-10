/* ==========================================
   MARTIN OS - CONSOLA RETRO INTERACTIVA
========================================== */
const martinButtons = document.querySelectorAll(".martin-command");
const martinConsole = document.querySelector("#martinConsole");
const martinPage = document.querySelector(".martin-theme");
let bootRunning = false;

/* ==========================================
   RESPUESTAS DE COMANDOS
========================================== */
const martinCommands = {
    stack: [
        "> loading stack...",
        "HTML / CSS / JavaScript",
        "React / Node.js",
        "Python / Django",
        "STATUS: FULLSTACK PATH ACTIVE"
    ],
    games: [
        "> accessing game library...",
        "STARCRAFT detected.",
        "DIABLO detected.",
        "Publisher: Blizzard Entertainment",
        "STATUS: READY TO PLAY"
    ],
    pets: [
        "> scanning pets...",
        "Dogs detected: 3 🐶",
        "Cats detected: 8 🐈",
        "Total companions: 11",
        "STATUS: HOUSE FULL"
    ],
    goal: [
        "> loading mission...",
        "Current job: Logistics",
        "Target career: Software Development",
        "Specialization target: Fullstack",
        "MISSION STATUS: IN PROGRESS 🚀"
    ]
};

/* ==========================================
   UTILIDADES DE CONSOLA
========================================== */
function clearMartinConsole() {
    if (!martinConsole) return;
    martinConsole.innerHTML = "";
}

function createMartinLine(text) {
    const line = document.createElement("p");
    line.textContent = text;
    martinConsole.appendChild(line);
}

function showMartinCommand(command) {
    if (!martinConsole || !martinCommands[command]) return;

    clearMartinConsole();
    martinCommands[command].forEach((line) => {
        createMartinLine(line);
    });
}

/* ==========================================
   SECUENCIA DE BOOT
========================================== */
function bootMartinSystem() {
    if (!martinConsole || bootRunning) return;

    bootRunning = true;
    const bootLines = [
        "MARTIN OS v1.0",
        "Initializing system...",
        "Loading HTML........ OK",
        "Loading CSS......... OK",
        "Loading JavaScript.. OK",
        "Loading React....... OK",
        "Loading Node........ OK",
        "Loading Python...... OK",
        "Loading Django...... OK",
        "Checking resilience. OK",
        "Loading curiosity... OK",
        "FULLSTACK MODE READY.",
        "Welcome, Player 1."
    ];

    clearMartinConsole();
    let lineIndex = 0;

    const interval = setInterval(() => {
        createMartinLine(bootLines[lineIndex]);
        lineIndex++;

        if (lineIndex >= bootLines.length) {
            clearInterval(interval);
            bootRunning = false;
        }
    }, 250);
}

/* ==========================================
   CONMUTACIÓN DE TEMA CROMÁTICO
========================================== */
function toggleMartinTheme() {
    if (!martinPage) return;

    martinPage.classList.toggle("green-mode");
    const greenMode = martinPage.classList.contains("green-mode");

    clearMartinConsole();
    if (greenMode) {
        createMartinLine("> GREEN MODE ENABLED");
        createMartinLine("Retro terminal palette activated.");
    } else {
        createMartinLine("> BLUE MODE ENABLED");
        createMartinLine("Default player palette restored.");
    }
}

/* ==========================================
   EVENT LISTENERS DE LA CONSOLA
========================================== */
martinButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const command = button.dataset.command;

        if (command === "boot") {
            bootMartinSystem();
            return;
        }

        if (command === "theme") {
            toggleMartinTheme();
            return;
        }

        showMartinCommand(command);
    });
});

/* ==========================================
   FLIP CARDS CON VIDEO BAJO DEMANDA (WATCH LIST)
========================================== */
const mediaCards = document.querySelectorAll(".martin-media-card");

mediaCards.forEach((card) => {
    const btnFlip = card.querySelector(".btn-flip");
    const btnClose = card.querySelector(".btn-flip-back");
    const videoWrapper = card.querySelector(".media-video-wrapper");
    const videoSrc = card.getAttribute("data-video");
    const videoTitle = card.getAttribute("data-title") || "Trailer";

    // Girar y cargar video
    btnFlip?.addEventListener("click", (e) => {
        e.stopPropagation();

        // Cerrar y resetear otras tarjetas abiertas
        mediaCards.forEach((otherCard) => {
            if (otherCard !== card && otherCard.classList.contains("is-flipped")) {
                otherCard.classList.remove("is-flipped");

                const otherBtn = otherCard.querySelector(".btn-flip");
                if (otherBtn) {
                    otherBtn.setAttribute("aria-expanded", "false");
                }

                const otherWrapper = otherCard.querySelector(".media-video-wrapper");
                if (otherWrapper) {
                    otherWrapper.innerHTML = "";
                }
            }
        });

        // Inyectar el iframe con título accesible si aún no existe
        if (videoWrapper && !videoWrapper.querySelector("iframe")) {
            videoWrapper.innerHTML = `
                <iframe 
                    src="${videoSrc}?autoplay=1&rel=0" 
                    title="${videoTitle}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        }

        card.classList.add("is-flipped");
        btnFlip.setAttribute("aria-expanded", "true");
    });

    // Cerrar y detener reproducción
    btnClose?.addEventListener("click", (e) => {
        e.stopPropagation();
        card.classList.remove("is-flipped");
        btnFlip?.setAttribute("aria-expanded", "false");

        // Vaciar el wrapper tras la animación para cortar el audio
        setTimeout(() => {
            if (videoWrapper) {
                videoWrapper.innerHTML = "";
            }
        }, 300);
    });
});