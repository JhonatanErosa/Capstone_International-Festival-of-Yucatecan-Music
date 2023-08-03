const line1 = document.querySelector('.line1-menu');
const line2 = document.querySelector('.line2-menu');
const line3 = document.querySelector('.line3-menu');
const containerMenu = document.querySelector('.navItems');
const menuItems = document.querySelectorAll('.navItems a');

function animateBars() {
  line1.classList.toggle('activeline1-menu');
  line2.classList.toggle('activeline2-menu');
  line3.classList.toggle('activeline3-menu');

  containerMenu.classList.toggle('navItems-active');
}

document.querySelector('.hamburger-menu').addEventListener('click', animateBars);

menuItems.forEach((element) => {
  element.addEventListener('click', () => {
    containerMenu.classList.remove('navItems-active');
    line1.classList.remove('activeline1-menu');
    line2.classList.remove('activeline2-menu');
    line3.classList.remove('activeline3-menu');
  });
});
