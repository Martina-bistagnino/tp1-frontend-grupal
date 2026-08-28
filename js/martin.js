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