export function scroll() {
    // Script para restablecer la posición de desplazamiento al recargar la página
    
    // Verifica si hay un fragmento de URL y si coincide con el ID de una sección
    if (window.location.hash && document.querySelector(window.location.hash)) {
        // Desplázate a la sección correspondiente
        document.querySelector(window.location.hash).scrollIntoView();
    } else {
        // Si no hay fragmento de URL o no coincide con ninguna sección, desplázate al inicio
        window.scrollTo(0, 0);
    }
    
    
}