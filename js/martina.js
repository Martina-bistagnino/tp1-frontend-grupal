/* ==========================================
   TERMINAL INTERACTIVA - MARTINA
========================================== */


/* Seleccionamos todos los botones */

const terminalButtons =
    document.querySelectorAll(".terminal-button");


/* Seleccionamos el lugar donde aparecerá
   la respuesta */

const terminalOutput =
    document.querySelector("#terminalOutput");



/* ==========================================
   CONTENIDOS
========================================== */

const terminalContent = {

    codigo: `
        Mi lado técnico:
        HTML · CSS · JavaScript · Git · GitHub ·
        Responsive Design · UI/UX.
    `,

    creatividad: `
        Me interesa combinar tecnología,
        diseño, fotografía y creatividad para
        construir experiencias visuales.
    `,

    personal: `
        Fuera del código disfruto la fotografía,
        viajar, estudiar temas nuevos, jugar Mortal
        Kombat y pasar tiempo con Odin 🐈.
    `,

    random: [
        "Mi videojuego favorito es Mortal Kombat 🎮.",
        "Tengo un gato llamado Odin 🐈.",
        "Me gusta investigar y profundizar temas nuevos 📚.",
        "Me interesa especialmente el desarrollo frontend 💻.",
        "La fotografía es uno de mis hobbies 📸."
    ]

};



/* ==========================================
   MOSTRAR RESPUESTA
========================================== */

function showTerminalContent(option) {

    if (!terminalOutput) {
        return;
    }


    let text;



    /* Si seleccionaron RANDOM */

    if (option === "random") {

        const randomIndex =
            Math.floor(
                Math.random() *
                terminalContent.random.length
            );


        text =
            terminalContent.random[randomIndex];

    } else {

        text =
            terminalContent[option];

    }



    /* Limpiamos salida anterior */

    terminalOutput.innerHTML = "";



    /* Creamos símbolo > */

    const symbol =
        document.createElement("span");

    symbol.textContent = ">";



    /* Creamos texto */

    const paragraph =
        document.createElement("p");

    paragraph.textContent =
        text.trim();



    /* Insertamos contenido */

    terminalOutput.appendChild(symbol);

    terminalOutput.appendChild(paragraph);

}



/* ==========================================
   EVENTOS
========================================== */

terminalButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedOption =
            button.dataset.terminal;


        showTerminalContent(
            selectedOption
        );

    });

});