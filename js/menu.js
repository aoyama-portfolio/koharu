document.addEventListener("DOMContentLoaded", function () {
/* ここから記述します。 */
const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburgerMenu')
const navi = document.querySelector('.header__menu')
const mask = document.querySelector('.menu__mask')

hamburgerMenu.addEventListener('click', () => {
    navi.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
    mask.classList.toggle('active')
})

if (mask) {
    mask.addEventListener('click', () => {
      navi.classList.remove('active');
      hamburgerMenu.classList.remove('active');
      mask.classList.remove('active');
    });
  }
});
