// Selecting all products from the DOM

const products = document.querySelectorAll('.sale-item');
const productDetails = document.querySelector('.product-details');
const productTitle = document.querySelector('.product-title');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');
const productImage = document.querySelector('.product-image');

const closeButton = document.createElement('button');
closeButton.classList.add('close-button');
closeButton.innerHTML = '<i class="fa-sharp fa-solid fa-circle-xmark">';

products.forEach(item => item.addEventListener('click', (event) => {
    productDetails.classList.add('open-product');
    productDetails.classList.remove('hidden');
    // event.currentTarget.querySelector('.sale-image').attributes['src'].textContent
    productImage.attributes['src'].textContent = `${event.currentTarget.querySelector('.sale-image').attributes['src'].textContent}`;
    productImage.attributes['alt'].textContent = `${event.currentTarget.querySelector('.sale-image').attributes['alt'].textContent}`;

    productTitle.textContent = `${event.currentTarget.querySelector('.sale-title').textContent}`
    productDescription.textContent = `${event.currentTarget.querySelector('.sale-image').attributes['alt'].textContent}`
    productPrice.innerHTML = `Price: ${event.currentTarget.querySelector('.sale-price').innerHTML}`

    productDetails.append(closeButton);
}));

closeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.parentElement.parentElement.classList.remove('open-product');
    event.target.parentElement.parentElement.classList.add('hidden');
    event.target.parentElement.parentElement.removeChild(closeButton);
})