const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-bar-menu');


menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
