/* ==========================================
   EXPLORADOR DE INTERESES - DALILA
========================================== */


/* Botones */

const dalilaButtons =
    document.querySelectorAll(
        ".dalila-interest-button"
    );


/* Elementos dinámicos */

const explorerIcon =
    document.querySelector(
        "#dalilaExplorerIcon"
    );

const explorerTitle =
    document.querySelector(
        "#dalilaExplorerTitle"
    );

const explorerText =
    document.querySelector(
        "#dalilaExplorerText"
    );



/* ==========================================
   CONTENIDO
========================================== */

const dalilaInterests = {

    tortugas: {

        icon: "🐢",

        title: "Tortugas",

        text: `
            Las tortugas son uno de los animales
            que más me gustan.
        `

    },


    astronomia: {

        icon: "🔭",

        title: "Astronomía",

        text: `
            Me interesa la astronomía y todo lo
            relacionado con explorar y comprender
            el universo.
        `

    },


    egipto: {

        icon: "🏺",

        title: "Civilizaciones antiguas",

        text: `
            Me interesa conocer la historia de
            antiguas civilizaciones, especialmente
            la cultura y los misterios del antiguo
            Egipto.
        `

    },


    creatividad: {

        icon: "🧶",

        title: "Creatividad",

        text: `
            El dibujo y el tejido de amigurumis
            son dos actividades que me permiten
            desarrollar mi lado creativo.
        `

    }

};



/* ==========================================
   FUNCIÓN MOSTRAR INTERÉS
========================================== */

function showDalilaInterest(interest) {

    if (
        !explorerIcon ||
        !explorerTitle ||
        !explorerText
    ) {

        return;

    }


    const selectedInterest =
        dalilaInterests[interest];


    if (!selectedInterest) {
        return;
    }


    explorerIcon.textContent =
        selectedInterest.icon;


    explorerTitle.textContent =
        selectedInterest.title;


    explorerText.textContent =
        selectedInterest.text.trim();

}



/* ==========================================
   FUNCIÓN RANDOM
========================================== */

function showRandomInterest() {

    const interests =
        Object.keys(dalilaInterests);


    const randomIndex =
        Math.floor(
            Math.random() *
            interests.length
        );


    const randomInterest =
        interests[randomIndex];


    showDalilaInterest(
        randomInterest
    );

}



/* ==========================================
   EVENTOS
========================================== */

dalilaButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const selectedInterest =
                button.dataset.interest;


            /* Quitar activo anterior */

            dalilaButtons.forEach(
                (currentButton) => {

                    currentButton
                        .classList
                        .remove("active");

                }
            );


            /* Activar botón */

            button
                .classList
                .add("active");


            /* RANDOM */

            if (
                selectedInterest === "random"
            ) {

                showRandomInterest();

                return;

            }


            /* Mostrar contenido */

            showDalilaInterest(
                selectedInterest
            );

        }
    );

});