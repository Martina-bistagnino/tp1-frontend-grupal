/* ==========================================
   CYBER CONSOLE - JORGE
========================================== */

const jorgeButtons =
    document.querySelectorAll(
        ".jorge-console-button"
    );

const jorgeOutput =
    document.querySelector(
        "#jorgeConsoleOutput"
    );

const jorgePage =
    document.querySelector(
        ".jorge-theme"
    );

const infernoAudio = new Audio('audio/shao_kahn_laugh.mp3');

/* ==========================================
   RESPUESTAS
========================================== */

const jorgeCommands = {

    python:
        ">>> print('Creatividad + lógica + curiosidad') → proceso ejecutado correctamente.",

    music:
        "PLAYLIST LOADED:<br>" +
        "• Band-Maid (Secret My Lips): <a href='https://www.youtube.com/watch?v=1Vuca7V-5Ec' target='_blank'>[Reproducir en YouTube]</a><br>" +
        "• Ling Tosite Sigure (Abnormalize): <a href='https://www.youtube.com/watch?v=DOKM9QWJG3g' target='_blank'>[Reproducir en YouTube]</a><br>" +
        "• Lörihen (Presa Facil): <a href='https://www.youtube.com/watch?v=vT9Kd0noyJ4' target='_blank'>[Reproducir en YouTube]</a>",

    game:
        ">> CARGANDO ROM: D&D: Shadow over Mystara...<br>" +
        ">> Género: Beat 'em up / Rol fantástico (Capcom, 1996).<br>" +
        ">> Estado: Joyita inigualable. <a href='https://www.youtube.com/watch?v=FaKDO9RyzfU' target='_blank'>[Ver Intro / Arcade]</a>",

};

const randomJorgeFacts = [

    "Soy instructor de artes marciales 🥋.",

    "Practiqué acrobacia 🤸.",

    "Tengo facilidad para aprender instrumentos musicales 🎸.",

    "Me gusta jugar rol de mesa 🎲.",

    "El desarrollo de videojuegos es una de las áreas que más me interesan 🎮.",

    "Probablemente esté sobrepensando este mensaje."
];

/* ==========================================
   MOSTRAR TEXTO
========================================== */

function showJorgeOutput(text) {

    if (!jorgeOutput) {
        return;
    }

    jorgeOutput.innerHTML = "";


    const paragraph =
        document.createElement("p");

    const prompt =
        document.createElement("span");

    prompt.textContent =
        "root@jorge:~$ ";   

    paragraph.appendChild(prompt);

    const contentSpan = document.createElement("span");
    contentSpan.innerHTML = text;
    paragraph.appendChild(contentSpan);
    
    jorgeOutput.appendChild(paragraph);

}

/* ==========================================
   RANDOM
========================================== */

function showRandomJorgeFact() {

    const index =
        Math.floor(
            Math.random() *
            randomJorgeFacts.length
        );

    showJorgeOutput(
        randomJorgeFacts[index]
    );

}

/* ==========================================
   INFERNO MODE
========================================== */

function toggleInfernoMode() {

    if (!jorgePage) {
        return;
    }

    jorgePage
        .classList
        .toggle(
            "inferno-mode"
        );

    const active =
        jorgePage
            .classList
            .contains(
                "inferno-mode"
            );

    if (active) {

        infernoAudio.currentTime = 0;
        infernoAudio.play().catch((e) => console.log("Audio pendiente de interacción:", e));

        jorgePage.classList.add("inferno-flash");
        setTimeout(() => {
            jorgePage.classList.remove("inferno-flash");
        }, 300);

        showJorgeOutput(
            "INFERNO MODE ACTIVATED 🔥"
        );

    } else {

        showJorgeOutput(
            "INFERNO MODE DISABLED."
        );

    }

}

/* ==========================================
   EVENTOS
========================================== */

jorgeButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const command =
                button.dataset.command;

            if (command === "random") {

                showRandomJorgeFact();

                return;

            }

            if (command === "inferno") {

                toggleInfernoMode();

                return;

            }

            if (
                jorgeCommands[command]
            ) {

                showJorgeOutput(
                    jorgeCommands[command]
                );

            }

        }
    );

});