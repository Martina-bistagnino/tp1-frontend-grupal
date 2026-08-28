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
   INTERVALO AUTOMÁTICO
========================================== */

if (dynamicText) {

    setInterval(
        changeDynamicMessage,
        3000
    );

}