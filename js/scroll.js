export function scroll() {
    // Script para restablecer la posición de desplazamiento al recargar la página

    // Función para restablecer la posición de desplazamiento al principio de la página
    function resetScrollPosition() {
        window.scrollTo(0, 0);
    }

    // Función para restablecer la posición de desplazamiento al principio de la sección
    function resetScrollSection() {
        document.querySelector(window.location.hash).scrollIntoView();
    }

    // Evento beforeunload que se dispara antes de recargar la página
    window.addEventListener("beforeunload", resetScrollSection);
    
    // Verifica si hay un fragmento de URL y si coincide con el ID de una sección
    if (window.location.hash && document.querySelector(window.location.hash)) {
        // Desplázate a la sección correspondiente
        resetScrollSection();
    } else {
        // Si no hay fragmento de URL o no coincide con ninguna sección, desplázate al inicio
        resetScrollPosition();
    }
   
}