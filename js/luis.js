/* ==========================================
   VINTAGE PLAYER - FRANCISCO LUIS
========================================== */

const luisButtons =
    document.querySelectorAll(
        ".luis-player-button"
    );


const luisIcon =
    document.querySelector(
        "#luisPlayerIcon"
    );


const luisCategory =
    document.querySelector(
        "#luisPlayerCategory"
    );


const luisTitle =
    document.querySelector(
        "#luisPlayerTitle"
    );


const luisText =
    document.querySelector(
        "#luisPlayerText"
    );



/* ==========================================
   CONTENIDOS
========================================== */

const luisContent = {

    jazz: {

        icon: "🎵",

        category: "MÚSICA",

        title: "Café Jazz",

        text:
            "Disfruto escuchar jazz y música tranquila para crear una atmósfera relajada."

    },


    cine: {

        icon: "🎬",

        category: "CINE",

        title: "Notting Hill",

        text:
            "Una de mis películas favoritas por la química entre sus protagonistas, el humor británico y su música."

    },


    escape: {

        icon: "🧩",

        category: "VIDEOJUEGOS",

        title: "Escape Academy",

        text:
            "Me gustan los juegos de estrategia, los enigmas y especialmente las experiencias de escape rooms."

    },


    gastronomia: {

        icon: "🥩",

        category: "GASTRONOMÍA",

        title: "Asado",

        text:
            "Me gusta cocinar, la gastronomía en general y compartir un buen asado con amigos y familia."

    },


    objetivo: {

        icon: "💻",

        category: "PRÓXIMA META",

        title: "Desarrollo Full-stack",

        text:
            "Quiero seguir desarrollándome en proyectos de gestión y aplicaciones web full-stack."

    }

};



/* ==========================================
   MOSTRAR CONTENIDO
========================================== */

function showLuisContent(option) {

    const selected =
        luisContent[option];


    if (
        !selected ||
        !luisIcon ||
        !luisCategory ||
        !luisTitle ||
        !luisText
    ) {

        return;

    }


    luisIcon.textContent =
        selected.icon;


    luisCategory.textContent =
        selected.category;


    luisTitle.textContent =
        selected.title;


    luisText.textContent =
        selected.text;

}



/* ==========================================
   RANDOM
========================================== */

function showRandomLuisContent() {

    const options =
        Object.keys(luisContent);


    const randomIndex =
        Math.floor(
            Math.random() *
            options.length
        );


    const randomOption =
        options[randomIndex];


    showLuisContent(
        randomOption
    );

}



/* ==========================================
   BOTONES
========================================== */

luisButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const option =
                button.dataset.luis;


            /* Quitar activo */

            luisButtons.forEach(
                (currentButton) => {

                    currentButton
                        .classList
                        .remove("active");

                    currentButton
                        .setAttribute(
                            "aria-pressed",
                            "false"
                        );

                }
            );


            /* Activar seleccionado */

            button
                .classList
                .add("active");

            button
                .setAttribute(
                    "aria-pressed",
                    "true"
                );


            if (option === "random") {

                showRandomLuisContent();

                return;

            }


            showLuisContent(
                option
            );

        }
    );

});