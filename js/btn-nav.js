export function btnNav() {
   
    const $header = document.querySelector('.header');
    const $navMobile = document.querySelector('.nav-mobile ul');
    const $ul = document.querySelector('.nav-mobile ul');
    let $btn = document.querySelector('.hamburger' || '.hamburger *');

    document.addEventListener('click', (e) => {
        
        const scrollPosition = window.scrollY;

        if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
            
            if ($btn.classList.contains('is-active')) {
                // está con la x activada, por ende se tiene que desactivar

                $btn.classList.remove('is-active');
                $ul.classList.remove('is-active');

                if (scrollPosition !== 0) {
                    $header.classList.remove('transparent');
                    $header.style.backgroundColor = '#ffba01';
                    $navMobile.classList.remove('transparent');
                    $navMobile.style.backgroundColor = '#ffba01d7';
                } else {
                    $header.classList.add('transparent');
                    $header.style.backgroundColor = 'transparent';
                    $navMobile.classList.add('transparent');
                    $navMobile.style.backgroundColor = 'transparent';
                }

                
            } else {
                // está con la x desactivada, por ende se tiene que activar
                
                $btn.classList.add('is-active');
                $ul.classList.add('is-active');

                $header.classList.remove('transparent');
                $header.style.backgroundColor = '#ffba01';
                $navMobile.classList.remove('transparent');
                $navMobile.style.backgroundColor = '#ffba01d7';

            }

        }

        if (e.target.matches('.nav-mobile ul a')) {
            $btn.classList.remove('is-active');
            $ul.classList.remove('is-active');
        }

        if (!e.target.matches('.nav-mobile ul a') 
            && !e.target.matches('.hamburger') 
            && !e.target.matches('.hamburger *')) {
            $btn.classList.remove('is-active');
            $ul.classList.remove('is-active');
        }


    });

    window.addEventListener('scroll', (e) => {

        const scrollPosition = window.scrollY;

        if (scrollPosition === 0 && $btn.classList.contains('is-active')) {

            $header.classList.remove('transparent');
            $header.style.backgroundColor = '#ffba01';
            $navMobile.classList.remove('transparent');
            $navMobile.style.backgroundColor = '#ffba01d7';

        }

    })
}