let mybutton = document.getElementById("btn-back-to-top");
let isButtonVisible = false; // Para rastrear si el botón está visible

// When the user scrolls down 20px from the top of the document, show/hide the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        if (!isButtonVisible) {
            fadeIn(mybutton); // Mostrar el botón gradualmente
            isButtonVisible = true;
        }
    } else {
        if (isButtonVisible) {
            fadeOut(mybutton); // Ocultar el botón bruscamente
            isButtonVisible = false;
        }
    }
}

// Función para hacer aparecer gradualmente
function fadeIn(element) {
    element.style.display = "block";
    element.style.transition = "opacity 0.5s";
    element.style.opacity = "1";
}

// Función para hacer desaparecer bruscamente
function fadeOut(element) {
    element.style.transition = "opacity 0.5s"; // Aplicar transición
    element.style.opacity = "0";
    setTimeout(function () {
        element.style.display = "none";
    }, 200); // Esperar 200 milisegundos antes de ocultar completamente el botón
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
