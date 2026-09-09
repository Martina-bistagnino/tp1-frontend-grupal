/* ==========================================
   MARTIN OS
========================================== */

const martinButtons =
    document.querySelectorAll(
        ".martin-command"
    );


const martinConsole =
    document.querySelector(
        "#martinConsole"
    );


const martinPage =
    document.querySelector(
        ".martin-theme"
    );


let bootRunning = false;



/* ==========================================
   RESPUESTAS
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
   LIMPIAR CONSOLA
========================================== */

function clearMartinConsole() {

    if (!martinConsole) {
        return;
    }


    martinConsole.innerHTML = "";

}



/* ==========================================
   CREAR LÍNEA
========================================== */

function createMartinLine(text) {

    const line =
        document.createElement("p");


    line.textContent =
        text;


    martinConsole.appendChild(
        line
    );

}



/* ==========================================
   MOSTRAR COMANDO
========================================== */

function showMartinCommand(command) {

    if (
        !martinConsole ||
        !martinCommands[command]
    ) {

        return;

    }


    clearMartinConsole();


    martinCommands[command]
        .forEach((line) => {

            createMartinLine(
                line
            );

        });

}



/* ==========================================
   ANIMACIÓN BOOT
========================================== */

function bootMartinSystem() {

    if (
        !martinConsole ||
        bootRunning
    ) {

        return;

    }


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


    const interval =
        setInterval(() => {

            createMartinLine(
                bootLines[lineIndex]
            );


            lineIndex++;


            if (
                lineIndex >=
                bootLines.length
            ) {

                clearInterval(
                    interval
                );


                bootRunning = false;

            }

        }, 250);

}



/* ==========================================
   CAMBIO DE COLOR
========================================== */

function toggleMartinTheme() {

    if (!martinPage) {
        return;
    }


    martinPage
        .classList
        .toggle(
            "green-mode"
        );


    const greenMode =
        martinPage
            .classList
            .contains(
                "green-mode"
            );


    clearMartinConsole();


    if (greenMode) {

        createMartinLine(
            "> GREEN MODE ENABLED"
        );

        createMartinLine(
            "Retro terminal palette activated."
        );

    } else {

        createMartinLine(
            "> BLUE MODE ENABLED"
        );

        createMartinLine(
            "Default player palette restored."
        );

    }

}



/* ==========================================
   EVENTOS
========================================== */

martinButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const command =
                button.dataset.command;


            if (command === "boot") {

                bootMartinSystem();

                return;

            }


            if (command === "theme") {

                toggleMartinTheme();

                return;

            }


            showMartinCommand(
                command
            );

        }
    );

});

// ============================================================
// FLIP CARDS CON VIDEO BAJO DEMANDA (Watch List)
// ============================================================
document.querySelectorAll('.martin-media-card').forEach(card => {
    const btnFlip = card.querySelector('.btn-flip');
    const btnClose = card.querySelector('.btn-flip-back');
    const videoWrapper = card.querySelector('.media-video-wrapper');
    const videoSrc = card.getAttribute('data-video');

    // Girar y cargar video
    btnFlip?.addEventListener('click', (e) => {
        e.stopPropagation();

        // Cerrar otras tarjetas abiertas
        document.querySelectorAll('.martin-media-card.is-flipped').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('is-flipped');
                const otherWrapper = otherCard.querySelector('.media-video-wrapper');
                if (otherWrapper) otherWrapper.innerHTML = '';
            }
        });

        // Insertar el iframe solo al voltear (autoplay activado con mute o sonido estándar)
        if (videoWrapper && !videoWrapper.querySelector('iframe')) {
            videoWrapper.innerHTML = `
                <iframe 
                    src="${videoSrc}?autoplay=1&rel=0" 
                    title="Trailer" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        }

        card.classList.add('is-flipped');
    });

    // Cerrar y detener reproducción
    btnClose?.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('is-flipped');
        
        // Vaciar el wrapper para cortar el audio del video
        setTimeout(() => {
            if (videoWrapper) videoWrapper.innerHTML = '';
        }, 300);
    });
});