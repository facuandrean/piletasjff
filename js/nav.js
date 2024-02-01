export function nav() {
    const $navDesktop = document.querySelector('.nav-desktop');
    const $navMobile = document.querySelector('.nav-mobile');

    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

    desktopMediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
            $navDesktop.classList.remove('none');
            $navMobile.classList.add('none');
        } else {
            $navDesktop.classList.add('none');
            $navMobile.classList.remove('none');
        }
    })

    if (window.innerWidth >= 1024) {
        $navDesktop.classList.remove('none');
        $navMobile.classList.add('none');
    } else {
        $navDesktop.classList.add('none');
        $navMobile.classList.remove('none');
    }
    
}