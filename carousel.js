// Selecting elements on the DOM to create carousel

const carouselImages = document.querySelectorAll('.carousel-image');
const activeCarousel = document.querySelector('.active');

const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

// Adding event listeners in order to change carousel image on button click

let index = 0;

previousButton.addEventListener('click', function() { 
    carouselImages[index].classList.remove('active')
    //This is a very handy formula that I found online; I made sure I fully understood what it does before applying it. I had already created my carousel at this point, and I was just looking to improve it.
    index = (index - 1 + carouselImages.length) % carouselImages.length;
    carouselImages[index].classList.add('active')

});

nextButton.addEventListener('click', function() {
    carouselImages[index].classList.remove('active')
    index = (index + 1) % carouselImages.length;
    carouselImages[index].classList.add('active')
})

console.log(carouselImages)