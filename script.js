const header = document.getElementById('header');
const menu = document.getElementById('menu');
const topRightMenu = document.getElementById('top-right-menu');
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const docentesMenu = document.getElementById('docentes-menu');
const docentesSubmenu = document.getElementById('docentes-submenu');
const headerHeight = header.offsetHeight;

// Cambiar fondo del header y menú al hacer scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > headerHeight;
  header.classList.toggle('shadow-md', scrolled);
  header.classList.toggle('scrolled', scrolled);
  menu.classList.toggle('scrolled', scrolled);
  topRightMenu.classList.toggle('scrolled', scrolled);
  if (navbar) {
    navbar.classList.toggle('scrolled', scrolled);
  }
});

// Menú toggle para pantallas pequeñas
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('show');
});

// Mostrar u ocultar el submenú de Docentes
docentesMenu.addEventListener('click', (e) => {
  e.preventDefault();
  if (docentesSubmenu.classList.contains('hidden')) {
    docentesSubmenu.classList.remove('hidden');
    docentesSubmenu.classList.add('visible');
  } else {
    docentesSubmenu.classList.remove('visible');
    docentesSubmenu.classList.add('hidden');
  }
});

// Ocultar el submenú si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!docentesMenu.contains(e.target) && !docentesSubmenu.contains(e.target)) {
    docentesSubmenu.classList.add('hidden');
    docentesSubmenu.classList.remove('visible');
  }
});
