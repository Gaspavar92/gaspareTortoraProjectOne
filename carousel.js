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

// Selecting DOM elements in order to create an Instagram images carousel

const instaImages = document.querySelectorAll('.insta-img');
const instaPrevious = document.querySelector('.insta-previous');
const instaNext = document.querySelector('.insta-next');
const instaParent = document.querySelector('.insta-images')

// Writing functions that allow to navigate through the instagram carousel

let counter = 0;

const slide = () => {
    const size = instaImages[0].clientWidth;
    instaParent.style.transform = `translateX(calc(${-size * counter}px - ${20 * counter}px))`
}

instaPrevious.addEventListener('click', () => {
    if (counter == 0) return;
    counter--;
    slide();
});
instaNext.addEventListener('click', () => {
    if (counter >= instaImages.length - 1) return;
    counter++;
    slide();
})

// Moving the parent element to its original position when the carousel images are all displayed

window.addEventListener('resize', (event) => {
    // !event.target.matchMedia('(max-width: 620px)').matches ? instaParent.style.transform = `translateX(0)` : null

    if (!event.target.matchMedia('(max-width: 620px)').matches) {
        instaParent.style.transform = `translateX(0)`;
        counter = 0;
    }
})