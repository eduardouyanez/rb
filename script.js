const header = document.getElementById('header');
const menu = document.getElementById('menu');
const topRightMenu = document.getElementById('top-right-menu');
const headerHeight = header.offsetHeight;

// Cambiar fondo del header y menú al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('scrolled');
    menu.classList.add('scrolled');
    topRightMenu.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    menu.classList.remove('scrolled');
    topRightMenu.classList.remove('scrolled');
  }
});

// Menú toggle para pantallas pequeñas
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Mostrar opciones del menú Docentes al hacer click
const docentesMenu = document.getElementById('docentes-menu');
const docentesOptions = document.getElementById('docentes-options');

// Ensure the options of the "Docentes" menu are hidden initially
docentesOptions.classList.add('hidden');

docentesMenu.addEventListener('click', (e) => {
  e.preventDefault();
  docentesOptions.classList.toggle('hidden');
});
