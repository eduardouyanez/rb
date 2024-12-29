const header = document.getElementById('header');
const menu = document.getElementById('menu');
const topRightMenu = document.getElementById('top-right-menu');
const navbar = document.getElementById('navbar');
const headerHeight = header.offsetHeight;

// Cambiar fondo del header y menú al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('shadow-md', 'scrolled'); // Add shadow-d when scrolled
    menu.classList.add('scrolled');
    topRightMenu.classList.add('scrolled');
    if (navbar) {
      navbar.classList.add('scrolled'); // Add shadow when scrolled
    }
  } else {
    header.classList.remove('shadow-md', 'scrolled'); // Remove shadow-d when not scrolled
    menu.classList.remove('scrolled');
    topRightMenu.classList.remove('scrolled');
    if (navbar) {
      navbar.classList.remove('scrolled'); // Remove shadow when not scrolled
    }
  }
});

// Menú toggle para pantallas pequeñas
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
