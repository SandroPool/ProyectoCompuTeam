// demo version de moviles
document.addEventListener('DOMContentLoaded', function () {
    let elementos = document.getElementById('mobile-demo');
    M.Sidenav.init(elementos, {});
});

// Animación para el dropdown de hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    let elementos = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elementos, {});
});

// Animación de Slide
document.addEventListener('DOMContentLoaded', function() {
    let elementos = document.querySelectorAll('.slider');
    M.Slider.init(elementos, {});
});

// Animación de selection
document.addEventListener('DOMContentLoaded', function () {
    let elementos = document.querySelectorAll('select')
    M.FormSelect.init(elementos, {});
});

// Obtenemos el año para el footer
let year = new Date();
let message = '© '+year.getFullYear()+' Copyright  Sandro Castro Paredes';
document.getElementById('copy').innerHTML  = message;
