// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('El portafolio interactivo se ha cargado correctamente.');

    // Configuración del Intersection Observer
    const observerOptions = {
        root: null, // usa el viewport como contenedor
        rootMargin: '0px',
        threshold: 0.15 // 15% del elemento debe ser visible para activarse
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en la vista
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Dejamos de observar el elemento para que la animación solo ocurra la primera vez
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos con la clase "reveal"
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });
});
