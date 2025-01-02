const header = document.getElementById('header');
const menu = document.getElementById('menu');
const topRightMenu = document.getElementById('top-right-menu');
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const docentesMenu = document.getElementById('docentes-menu');
const docentesSubmenu = document.getElementById('docentes-submenu');
const apoderadosMenu = document.getElementById('apoderados-menu');
const apoderadosSubmenu = document.getElementById('apoderados-submenu');
const headerHeight = header.offsetHeight;
const menuLogo = document.getElementById('menu-logo');

// Cambiar fondo del header y menú al hacer scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > headerHeight;
  const isMobile = window.innerWidth <= 768;
  
  if (!isMobile) {
    header.classList.toggle('shadow-md', scrolled);
    header.classList.toggle('scrolled', scrolled);
    if (navbar) {
      navbar.classList.toggle('scrolled', scrolled);
    }
  } else {
    if (scrolled) {
      menuLogo.classList.add('scrolled');
    } else {
      menuLogo.classList.remove('scrolled');
    }
  }
  
  menu.classList.toggle('scrolled', scrolled);
  topRightMenu.classList.toggle('scrolled', scrolled);
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

// Mostrar u ocultar el submenú de Apoderados
apoderadosMenu.addEventListener('click', (e) => {
  e.preventDefault();
  if (apoderadosSubmenu.classList.contains('hidden')) {
    apoderadosSubmenu.classList.remove('hidden');
    apoderadosSubmenu.classList.add('visible');
  } else {
    apoderadosSubmenu.classList.remove('visible');
    apoderadosSubmenu.classList.add('hidden');
  }
});

// Ocultar el submenú si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!docentesMenu.contains(e.target) && !docentesSubmenu.contains(e.target)) {
    docentesSubmenu.classList.add('hidden');
    docentesSubmenu.classList.remove('visible');
  }
  if (!apoderadosMenu.contains(e.target) && !apoderadosSubmenu.contains(e.target)) {
    apoderadosSubmenu.classList.add('hidden');
    apoderadosSubmenu.classList.remove('visible');
  }
});
