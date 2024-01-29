export function formFS() {
    const d = document;
    
    const $form = d.querySelector('.contact-form'), $inputs = d.querySelectorAll('.contact-form [required]');
    
    $inputs.forEach((input) => {
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error', 'none');
        input.insertAdjacentElement('afterend', $span);
    });

    document.addEventListener('keyup', (e) => {

        if (e.target.matches('.contact-form [required]')) {

            let $input = e.target, pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);

                // si el valor del input no cumple con la expresión regular, se ejecuta ?, pero si cumple, se ejecuta :
                return !regex.exec($input.value) 
                    ? d.getElementById($input.name).classList.add('is-active') 
                    : d.getElementById($input.name).classList.remove('is-active');
                
            }
    
            if (!pattern) {
                // si el input value es exactamente igual a nada, muestra el mensaje de error, sino no lo muestres.
                return $input.value === "" 
                    ? d.getElementById($input.name).classList.add('is-active') 
                    : d.getElementById($input.name).classList.remove('is-active');
            }

        }
    });

    document.addEventListener('submit', (e) => {
        e.preventDefault();

        const $loader = d.querySelector('.contact-form-loader'), $response = d.querySelector('.contact-form-response');

        $loader.classList.remove('none');

        fetch("https://formsubmit.co/ajax/juaneze2.0@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => { 
            $loader.classList.add('none');
            $response.classList.remove('none');
            $response.innerHTML = `<p>El mensaje ha sido enviado con éxito</p>`;
            $form.reset(); 
        })
        .catch(err => {
            let message = err.statusText || 'Ocurrió un error al enviar, intenta nuevamente.';
            $response.innerHTML = `<p>Error: ${err.status}: ${message}</p>`;
        })
        .finally(() => setTimeout(() => {
            $loader.classList.add('none')
            $response.classList.add('none');
            $response.innerHTML = "";
        }, 5000))

    })
}