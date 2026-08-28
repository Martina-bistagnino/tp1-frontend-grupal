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



/* ==========================================
   RESPUESTAS
========================================== */

const jorgeCommands = {

    python:
        ">>> print('Creatividad + lógica + curiosidad') → proceso ejecutado correctamente.",

    music:
        "PLAYLIST LOADED: Just Bring It · i'mperfect · Paradigma.",

    game:
        "GAME FOUND: Dungeons & Dragons: Shadow over Mystara 🎮",

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


    paragraph.append(
        document.createTextNode(text)
    );


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