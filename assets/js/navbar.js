const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");
const navbar = document.getElementById("navbar");


/* =========================================
   NAVBAR AL HACER SCROLL
========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MENU MOBILE
========================================= */

if (menuToggle && navbarMenu) {

    menuToggle.addEventListener("click", () => {

        navbarMenu.classList.toggle("active");

        const isOpen = navbarMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    const navLinks = navbarMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbarMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}