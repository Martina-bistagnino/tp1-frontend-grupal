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
            Las tortugas son uno de los animales que más me gustan.
            Son animales tranquilos, resistentes y pacientes,
             y algunas especies pueden recorrer enormes distancias
              guiándose por el campo magnético de la Tierra.
            ¡Una brújula incorporada!
        `

    },


    astronomia: {

        icon: "🔭",

        title: "Astronomía",

        text: `
            Me interesa la astronomía y todo lo
            relacionado con explorar y comprender
            el universo.
            La astronomía me resulta fascinante porque mirar el cielo es,
             de alguna manera, mirar hacia el pasado. 
             La luz de las estrellas tarda años, siglos o incluso miles de años
              en llegar hasta nosotros. ✨
        `

    },


    egipto: {

        icon: "🏺",

        title: "Civilizaciones antiguas",

        text: `
           Me interesa conocer la historia de
            antiguas civilizaciones, especialmente
            la cultura y los misterios del antiguo
            Egipto. Siempre me llamó la atención
            cómo una civilización de hace miles de
            años pudo desarrollar conocimientos de
            astronomía, medicina y arquitectura que
            todavía hoy nos sorprenden.
        `

    },


    creatividad: {

        icon: "🧶",

        title: "Creatividad",

        text: `
           Dibujar y tejer amigurumis son dos
            formas de convertir un poco de
            imaginación en algo real. Me gusta
            crear personajes y pequeñas historias
            con mis propias manos, y mientras lo
            hago puedo olvidarme un rato de todo
            y simplemente disfrutar el momento.


        `

    },


    random: {

        icon: "👑",

        title: "¿Sabías que...?",

        text: `
           ¿Y si te dijera que Cleopatra vivió
            más cerca de nuestro tiempo que del
            momento en que se construyeron las
            grandes pirámides de Giza? Aunque
            ambas cosas pertenecen al antiguo
            Egipto, las separan miles de años.
            De hecho, Cleopatra vivió alrededor
            de 2.500 años después de la construcción
            de las pirámides y menos de 2.000 años
            antes de que el ser humano llegara a
            la Luna. 🚀🏺

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

updateWithFade(() => {

    if (selectedInterest === "carmelucha") {

        activateCarmelucha();

        return;

    }

    showDalilaInterest(
        selectedInterest
    );

});

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

/* ==========================================
   CARMELUCHA - ASISTENTE
========================================== */

const carmeluchaAssistant =
    document.querySelector("#carmeluchaAssistant");

const carmeluchaMessage =
    document.querySelector("#carmeluchaMessage");


const carmeluchaMessages = [

     "Guau. Código limpio y corazón contento.",

    "Antes de hacer git push, revisá todo dos veces. Más vale prevenir que perseguir una pelota que se fue demasiado lejos.",

    "Los nombres de variables claros son como los buenos paseos: sabés exactamente a dónde te llevan.",

    "Un commit a la vez. No hace falta querer atrapar todas las pelotas juntas.",

    "¿Algo no funciona? Probá de nuevo. Yo tampoco abandonaba hasta conseguir la pelota.",

    "Si llevás mucho tiempo programando, hacé una pausa. Hasta yo sé que una buena siesta ayuda a pensar mejor.",

    "Los errores también enseñan. Yo aprendí a fuerza de intentos... y alguna que otra travesura.",

    "Tranquila, el proyecto está bajo vigilancia. Yo me encargo de los intrusos y vos del código.",

    "No tengas miedo de equivocarte. Hasta la mejor perrita alguna vez persiguió su propia cola.",

    "Cuando no sepas qué hacer, levantate, estirá las piernas y volvé. A veces la solución aparece después de un buen paseo."

];


let carmeluchaHideTimeout;


function getRandomCarmeluchaMessage() {

    const randomIndex =
        Math.floor(
            Math.random() * carmeluchaMessages.length
        );

    return carmeluchaMessages[randomIndex];

}


function activateCarmelucha() {

    if (!carmeluchaAssistant || !carmeluchaMessage) {
        return;
    }

    clearTimeout(carmeluchaHideTimeout);

    carmeluchaMessage.textContent =
        getRandomCarmeluchaMessage();

    /* Reinicia la animación de entrada */

    carmeluchaAssistant.hidden = true;

    void carmeluchaAssistant.offsetWidth;

    carmeluchaAssistant.hidden = false;

    /* Se oculta sola después de unos segundos */

    carmeluchaHideTimeout = setTimeout(() => {

        carmeluchaAssistant.hidden = true;

    }, 6000);

}