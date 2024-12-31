const header = document.getElementById('header');
const menu = document.getElementById('menu');
const topRightMenu = document.getElementById('top-right-menu');
const navbar = document.getElementById('navbar');
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
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
<<<<<<< HEAD
  menu.classList.toggle('hidden');
  menu.classList.toggle('show');
});

const docentesMenu = document.getElementById('docentes-menu');
const docentesSubmenu = document.getElementById('docentes-submenu');

// Muestra u oculta el submenú al hacer clic en "Docentes"
docentesMenu.addEventListener('click', (e) => {
  e.preventDefault();
  docentesSubmenu.classList.toggle('hidden');
});

// Oculta el submenú al hacer clic fuera de él
document.addEventListener('click', (e) => {
  if (!docentesMenu.contains(e.target) && !docentesSubmenu.contains(e.target)) {
    docentesSubmenu.classList.add('hidden');
  }
=======
  menu.classList.toggle('hidden'); // Remove the "hidden" class to show the menu
  menu.classList.toggle('show'); // Ensure the menu slides down from the top on toggle
>>>>>>> eb5bdbdbc746e4763eb95939bdc31a5cb2bc28f2
});
