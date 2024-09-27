// Detectar el scroll para aplicar la clase .nav-scroll
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) { // Si el scroll supera los 50px
        nav.classList.add('nav-scroll'); // Añade la clase .nav-scroll
    } else {
        nav.classList.remove('nav-scroll'); // Quita la clase .nav-scroll
    }
});
