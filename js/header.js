export function header() {

    const $header = document.querySelector('.header');
    const $navMobile = document.querySelector('.nav-mobile ul');
    const $headerBlur = document.querySelector('.header-blur');

    // Agrega la clase 'transparent' al cargar la página
    $header.classList.add('transparent');
    $navMobile.classList.add('transparent');

    const scrollY = window.scrollY;

    if (scrollY != 0) {
        $header.classList.remove('transparent');
        $header.style.backgroundColor = '#ffba01';
        $navMobile.classList.remove('transparent');
        $navMobile.style.backgroundColor = '#ffba01d7';
        $headerBlur.style.opacity = "0";
    } 

    // Función para cambiar el estilo del encabezado al desplazarse
    window.addEventListener('scroll', (e) => {

        const scrollPosition = window.scrollY;

        // Determina la altura a partir de la cual se cambia el color del encabezado
        const changeColorHeight = 5; // Ajusta según sea necesario

        if (scrollPosition > changeColorHeight) {
            $header.classList.remove('transparent');
            $header.style.backgroundColor = '#ffba01';
            $navMobile.classList.remove('transparent');
            $navMobile.style.backgroundColor = '#ffba01d7';
            $headerBlur.style.opacity = "0";
        } else {
            $header.classList.add('transparent');
            $header.style.backgroundColor = 'transparent';
            $navMobile.classList.add('transparent');
            $navMobile.style.backgroundColor = 'transparent';
            $headerBlur.style.opacity = "1";
        }

    });

}