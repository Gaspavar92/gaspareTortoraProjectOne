// Hide carousel images when screen size is less than 960px

// const screenSize960 = window.matchMedia("(max-width: 960px)");

const carouselImages = document.querySelectorAll('.carousel-image');
const activeCarousel = document.querySelector('.active');

const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

// Adding event listeners in order to change carousel image on button click

let index = 0;

previousButton.addEventListener('click', function() {
    if (index > 0) {
        carouselImages[index].classList.remove('active')
        index -= 1;
        carouselImages[index].classList.add('active')
    }
})

nextButton.addEventListener('click', function() {
    if (index < 2) {
        carouselImages[index].classList.remove('active')
        index += 1;
        carouselImages[index].classList.add('active')
    }
})

