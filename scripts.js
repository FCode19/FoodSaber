document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    scrollToTopBtn.addEventListener("click", function () {
        // Desplázate suavemente hacia arriba al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Cerrar el menú
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show');
        });
    });

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});
