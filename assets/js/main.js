/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

const elementosAnimados = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-up"
);


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementosAnimados.forEach(elemento => {

    observer.observe(elemento);

});