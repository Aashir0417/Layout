const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close the menu when clicking outside the menu area
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.remove('active');
  }
});
