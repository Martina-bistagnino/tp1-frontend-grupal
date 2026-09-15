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
const noMercyAudio = new Audio('audio/no_mercy.mp3');

/* ==========================================
   RESPUESTAS
========================================== */


const jorgeCommands = {

    python:
        "python3 -c 'import jorge; jorge.vibe_check()'<br>" +
        "<span style='color: #888;'>[+] Initializing runtime v3.12... <span style='color: #f55; font-weight: bold;'>OK</span></span><br>" +
        "<span style='color: #888;'>[+] Loading modules (creativity, logic, persistence)... <span style='color: #f55; font-weight: bold;'>OK</span></span><br>" +
        ">>> print('Creatividad + lógica + curiosidad')<br>" +
        "<span style='color: #0ff; font-weight: bold;'>Creatividad + lógica + curiosidad</span><br>" +
        "<span style='color: #0f0;'>[Process finished with exit code 0]</span>",

    music:
        "<span style='color: #0ff;'>♪ DECK STATUS: ONLINE [320kbps]</span><br>" +
        "<span style='color: #888;'>EQ: █▇▆▅▄▃▂ ▃▄▅▆▇█ </span><br><br>" +
        "SELECT TRACK:<br>" +
        "▸ <span style='color: #ffa500;'>[01] Band-Maid (Secret My Lips)</span> → <a href='https://www.youtube.com/watch?v=1Vuca7V-5Ec' target='_blank' rel='noopener noreferrer'>[STREAM]</a><br>" +
        "▸ <span style='color: #ff3333;'>[02] Ling Tosite Sigure (Abnormalize)</span> → <a href='https://www.youtube.com/watch?v=DOKM9QWJG3g' target='_blank' rel='noopener noreferrer'>[STREAM]</a><br>" +
        "▸ <span style='color: #990033;'>[03] Lörihen (Presa Fácil)</span> → <a href='https://www.youtube.com/watch?v=vT9Kd0noyJ4' target='_blank' rel='noopener noreferrer'>[STREAM]</a>",

    game:
        "<span style='color: #ffaa00;'>[COIN INSERTED - CREDIT 01/99]</span><br>" +
        "TITLE: D&D: Shadow over Mystara <span style='color: #888;'>(Capcom, 1996)</span><br>" +
        "CLASS: <span style='color: #0ff;'>Mystic / Beat 'em Up Legend</span><br>" +
        "HP/MP: [██████████████████] MAX<br>" +
        "STATUS: Joyita inigualable → <a href='https://www.youtube.com/watch?v=FaKDO9RyzfU' target='_blank' rel='noopener noreferrer'>[VER ARCADE / INTRO]</a>",

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

let currentRenderId = 0;

async function showJorgeOutput(text) {
    if (!jorgeOutput) return;
    const renderId = ++currentRenderId;

    jorgeOutput.innerHTML = "";

    const paragraph = document.createElement("p");
    const prompt = document.createElement("span");
    prompt.textContent = "root@jorge:~$ ";
    paragraph.appendChild(prompt);

    const contentSpan = document.createElement("span");
    paragraph.appendChild(contentSpan);
    jorgeOutput.appendChild(paragraph);

    const temp = document.createElement("div");
    temp.innerHTML = text;

    async function appendNode(source, target) {
        if (source.nodeType === Node.TEXT_NODE) {
            const textVal = source.textContent;
            const textNode = document.createTextNode("");
            target.appendChild(textNode);
            for (const char of textVal) {
                if (renderId !== currentRenderId) return false;
                textNode.nodeValue += char;
                await new Promise((r) => setTimeout(r, 12));
            }
        } else if (source.nodeType === Node.ELEMENT_NODE) {
            const clone = source.cloneNode(false);
            target.appendChild(clone);
            for (const child of source.childNodes) {
                const ok = await appendNode(child, clone);
                if (!ok) return false;
            }
        }
        return true;
    }

    for (const child of temp.childNodes) {
        if (renderId !== currentRenderId) break;
        await appendNode(child, contentSpan);
    }
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
            "🔥 WARNING: OUTWORLD REALM MERGE DETECTED<br>" +
            "> <span style='color: #f55; font-weight: bold;'>FINISH THEM.</span> [INFERNO CORE: 100%]<br>" +
            "> STATUS: Burn everything down."
        );

    } else {

        noMercyAudio.currentTime = 0;
        noMercyAudio.play().catch((e) => console.log("Audio pendiente de interacción:", e));

        showJorgeOutput(
            "❄️ REALM STABILIZED. Returning to Earthrealm..."
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