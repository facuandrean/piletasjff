export function scrollSpy() {
    const sections = document.querySelectorAll(".section");
    const navbarLinks = document.querySelectorAll(".nav-desktop a");

    window.addEventListener("scroll", e => {
        let current = "";
    
        sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= window.innerHeight * 0.1) {
            current = section.getAttribute("id");
          }
        });
    
        navbarLinks.forEach(link => {
            link.classList.remove("section-active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add('section-active');
            } else {
                link.classList.remove('section-active');
            }
        });
    });
}