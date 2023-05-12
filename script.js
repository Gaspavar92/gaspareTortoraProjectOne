// Selecting DOM elements to create mobile nav menu

const burgerMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Defining function to open mobile menu

const openMenu = () => {
    mobileMenu.classList.toggle('show');
    burgerMenu.classList.toggle('is-active');
}
burgerMenu.addEventListener('click', openMenu)


