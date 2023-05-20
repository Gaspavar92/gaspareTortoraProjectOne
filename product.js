// Selecting all products from the DOM

const products = document.querySelectorAll('.sale-item');
const productDetails = document.querySelector('.product-details');
const productTitle = document.querySelector('.product-title');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');
const productImage = document.querySelector('.product-image');
const quantity = document.querySelector('.quantity');
const addBtn = document.querySelector('.add-btn');
const rmvBtn = document.querySelector('.remove-btn');
const addToCart = document.querySelector('.add-to-cart');

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
    productDetails.classList.remove('open-product');
    productDetails.classList.add('hidden');
    event.target.parentElement.parentElement.removeChild(closeButton);
    quantity.value = 0;
})

addBtn.addEventListener('click', () => {
    quantity.value++;
})
rmvBtn.addEventListener('click', () => {
    quantity.value > 0 ? quantity.value-- : quantity.value = 0;
})

// Updating cart quantity

const cartMessage = document.querySelector('.cart-message');

let total = 0;

const p = document.createElement('p');
p.innerHTML = `You have ${total} item(s) in your cart`;
p.setAttribute('style', 'color:white; margin-left: 20px; font-size: 2rem;')
cartMessage.append(p);

addToCart.addEventListener('click', () => {
    total = total + parseInt(quantity.value);
    p.innerHTML = `You have ${total} item(s) in your cart`;
    productDetails.classList.remove('open-product');
    productDetails.classList.add('hidden');
    quantity.value = 0;
})