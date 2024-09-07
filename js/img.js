export const loader = () => {
  const images = document.querySelectorAll('.lazy-image');

  // Función para cargar la imagen
  const loadImage = (image) => {
    const src = image.getAttribute('data-src');
    const loader = image.previousElementSibling; // Loader relacionado

    if (src) {
      image.src = src; // Asignamos el src para que la imagen comience a cargarse

      // Cuando la imagen termina de cargar
      image.onload = () => {
        image.style.display = 'block'; // Mostramos la imagen
        loader.remove(); // Quitamos el loader
      };

      // Si ocurre algún error al cargar la imagen
      image.onerror = () => {
        loader.remove(); // Quitamos el loader aunque haya error
        image.style.display = 'none'; // Mantenemos oculta la imagen fallida
      };
    }
  };

  // Configuramos el IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        loadImage(image); // Cargar la imagen cuando es visible
        observer.unobserve(image); // Dejar de observarla una vez cargada
      }
    });
  });

  // Observamos todas las imágenes
  images.forEach(image => {
    observer.observe(image);
  });
}
