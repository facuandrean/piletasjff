export function btnNav() {
   
    const $ul = document.querySelector('.nav-mobile ul');

    document.addEventListener('click', (e) => {
        
        let $btn = document.querySelector('.hamburger' || '.hamburger *');

        if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
            
            if ($btn.classList.contains('is-active')) {
                // está con la x activada, por ende se tiene que desactivar

                $btn.classList.remove('is-active');
                $ul.classList.remove('is-active');
                
            } else {
                // está con la x desactivada, por ende se tiene que activar
                
                $btn.classList.add('is-active');
                $ul.classList.add('is-active');
   
            }

        } 

        if (e.target.matches('.nav-mobile ul a')) {
            $btn.classList.remove('is-active');
            $ul.classList.remove('is-active');
        }

    });
}