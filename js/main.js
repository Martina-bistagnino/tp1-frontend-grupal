/* ==========================================
   ELEMENTOS DEL DOM
========================================== */

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const navLinks = document.querySelectorAll(".nav__link");



/* ==========================================
   MENÚ MOBILE
========================================== */

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        /* Abrimos o cerramos el menú */

        mainNav.classList.toggle("active");


        /* Comprobamos si quedó abierto */

        const menuIsOpen =
            mainNav.classList.contains("active");


        /* Actualizamos accesibilidad */

        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen
        );


        /* Clase visual para animar el botón */

        menuToggle.classList.toggle(
            "active",
            menuIsOpen
        );

    });

}



/* ==========================================
   CERRAR MENÚ AL HACER CLICK EN UN LINK
========================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (!mainNav || !menuToggle) {
            return;
        }


        mainNav.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* ==========================================
   CERRAR MENÚ CON ESCAPE
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
        return;
    }


    if (!mainNav || !menuToggle) {
        return;
    }


    mainNav.classList.remove("active");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

});



/* ==========================================
   CERRAR MENÚ SI VOLVEMOS A DESKTOP
========================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        if (!mainNav || !menuToggle) {
            return;
        }


        mainNav.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});



/* ==========================================
   TEXTO DINÁMICO DEL HERO
========================================== */

const dynamicText =
    document.querySelector("#dynamicText");


/*
    Frases que se van mostrando
    automáticamente en la portada.
*/

const dynamicMessages = [

    "HTML · CSS · JavaScript",

    "5 perfiles · 1 equipo",

    "Diseño · Código · Colaboración",

    "Aprender · Crear · Compartir"

];


let currentMessage = 0;



/* ==========================================
   CAMBIAR FRASE
========================================== */

function changeDynamicMessage() {

    /*
        Si el elemento no existe,
        detenemos la función.
    */

    if (!dynamicText) {
        return;
    }


    /*
        Hacemos desaparecer suavemente
        el texto anterior.
    */

    dynamicText.classList.add("fade-out");


    /*
        Esperamos un poco antes de
        cambiar el contenido.
    */

    setTimeout(() => {

        /*
            Pasamos al siguiente mensaje.
        */

        currentMessage++;


        /*
            Si llegamos al final del array,
            volvemos al principio.
        */

        if (currentMessage >= dynamicMessages.length) {

            currentMessage = 0;

        }


        /*
            Actualizamos el contenido.
        */

        dynamicText.textContent =
            dynamicMessages[currentMessage];


        /*
            Volvemos a mostrarlo.
        */

        dynamicText.classList.remove("fade-out");

    }, 300);

}



/* ==========================================
   PREFERENCIAS DE MOVIMIENTO
========================================== */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


let dynamicTextInterval;


/* ==========================================
   INICIAR TEXTO DINÁMICO
========================================== */

function startDynamicMessages() {

    if (
        !dynamicText ||
        reducedMotion.matches
    ) {
        return;
    }


    dynamicTextInterval =
        setInterval(
            changeDynamicMessage,
            3000
        );

}


/* ==========================================
   DETENER TEXTO DINÁMICO
========================================== */

function stopDynamicMessages() {

    if (!dynamicTextInterval) {
        return;
    }


    clearInterval(
        dynamicTextInterval
    );


    dynamicTextInterval = null;

}


/* Iniciamos si está permitido */

startDynamicMessages();


/* Si el usuario cambia la preferencia
   mientras la página está abierta */

reducedMotion.addEventListener(
    "change",
    () => {

        if (reducedMotion.matches) {

            stopDynamicMessages();

            dynamicText.classList.remove(
                "fade-out"
            );

            dynamicText.textContent =
                dynamicMessages[0];

        } else {

            startDynamicMessages();

        }

    }
);
/* ==========================================
   INTRO DE BIENVENIDA
========================================== */

const welcomeOverlay =
    document.querySelector(
        "#welcomeOverlay"
    );


const welcomeEnter =
    document.querySelector(
        "#welcomeEnter"
    );


/*
    Verificamos si la intro ya se mostró
    durante esta sesión.
*/

let introWasSeen = false;


try {

    introWasSeen =
        sessionStorage.getItem(
            "equipoDevIntroSeen"
        ) === "true";

} catch (error) {

    introWasSeen = false;

}



/* ==========================================
   MOSTRAR INTRO
========================================== */

function showWelcomeIntro() {

    if (
        !welcomeOverlay ||
        introWasSeen
    ) {
        return;
    }


    welcomeOverlay.hidden = false;


    document.body.classList.add(
        "intro-open"
    );


    /*
        Llevamos el foco al botón
        después de mostrar el diálogo.
    */

    requestAnimationFrame(() => {

        welcomeEnter?.focus();

    });

}



/* ==========================================
   CERRAR INTRO
========================================== */

function closeWelcomeIntro() {

    if (!welcomeOverlay) {
        return;
    }


    welcomeOverlay.hidden = true;


    document.body.classList.remove(
        "intro-open"
    );


    try {

        sessionStorage.setItem(
            "equipoDevIntroSeen",
            "true"
        );

    } catch (error) {

        /* Si sessionStorage no está disponible,
           simplemente continuamos. */

    }


    /*
        Dejamos el foco en el contenido principal.
    */

    const mainContent =
        document.querySelector(
            "#mainContent"
        );


    if (mainContent) {

        mainContent.setAttribute(
            "tabindex",
            "-1"
        );

        mainContent.focus();

    }

}



/* ==========================================
   EVENTO BOTÓN
========================================== */

welcomeEnter?.addEventListener(
    "click",
    closeWelcomeIntro
);



/* ==========================================
   ESCAPE + CONTROL DE FOCO
========================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !welcomeOverlay ||
            welcomeOverlay.hidden
        ) {
            return;
        }


        /*
            Escape cierra la intro.
        */

        if (event.key === "Escape") {

            closeWelcomeIntro();

            return;

        }


        /*
            Como el diálogo tiene un solo
            elemento interactivo, mantenemos
            el foco en ese botón.
        */

        if (event.key === "Tab") {

            event.preventDefault();

            welcomeEnter?.focus();

        }

    }
);



/* Mostrar al cargar */

showWelcomeIntro();