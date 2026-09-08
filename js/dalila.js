/* ==========================================
   EXPLORADOR DE INTERESES - DALILA
========================================== */


/* ==========================================
   BOTONES
========================================== */

const dalilaButtons =
    document.querySelectorAll(
        ".dalila-interest-button"
    );


/* ==========================================
   ELEMENTOS DINÁMICOS
========================================== */

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

    },


    random: {

        icon: "👑",

        title: "¿Sabías que...?",

        text: `
            Cleopatra vivió más cerca de la llegada
            del ser humano a la Luna que de la
            construcción de las pirámides de Giza.
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
   EVENTOS
========================================== */

const explorerBox =
    document.querySelector(
        ".dalila-explorer__content"
    );


function updateWithFade(callback) {

    if (explorerBox) {

        explorerBox.classList.add(
            "fading"
        );

    }


    setTimeout(() => {

        callback();


        if (explorerBox) {

            explorerBox.classList.remove(
                "fading"
            );

        }

    }, 220);

}


/* ==========================================
   BOTONES DE INTERESES
========================================== */

dalilaButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const selectedInterest =
                    button.dataset.interest;


                /* ------------------------------
                   ACTUALIZAR ESTADO ARIA
                ------------------------------ */

                dalilaButtons.forEach(
                    (currentButton) => {

                        currentButton
                            .classList
                            .remove(
                                "active"
                            );


                        currentButton
                            .setAttribute(
                                "aria-pressed",
                                "false"
                            );

                    }
                );


                button
                    .classList
                    .add(
                        "active"
                    );


                button
                    .setAttribute(
                        "aria-pressed",
                        "true"
                    );


                /* ------------------------------
                   MOSTRAR CONTENIDO
                ------------------------------ */

                updateWithFade(
                    () =>
                        showDalilaInterest(
                            selectedInterest
                        )
                );

            }
        );

    }
);


/* ==========================================
   TOGGLE MODO ECLIPSE
========================================== */

const eclipseToggle =
    document.querySelector(
        "#dalilaEclipseToggle"
    );


if (eclipseToggle) {

    eclipseToggle.addEventListener(
        "click",
        () => {

            document
                .body
                .classList
                .toggle(
                    "eclipse-mode"
                );


            const active =
                document
                    .body
                    .classList
                    .contains(
                        "eclipse-mode"
                    );


            eclipseToggle.textContent =
                active
                    ? "🌕 Modo Noche"
                    : "🌘 Modo Eclipse";


            /* Actualizar estado ARIA */

            eclipseToggle.setAttribute(
                "aria-pressed",
                active
            );

        }
    );

}