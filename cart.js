// Opening cart menu

const cartButton = document.querySelector('.cart');
const cartMenu = document.querySelector('.cart-menu');
const closeBtn = document.querySelector('.close-btn');
const header = document.querySelector('header');

const openCart = () => {
    cartMenu.setAttribute('style', 'margin-top: 250px')
    header.setAttribute('style', 'margin-top: 250px')
}

const closeCart = () => {
    cartMenu.setAttribute('style', 'margin-top: 0')
    header.setAttribute('style', 'margin-top: 0')
}

cartButton.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);

// Updating cart quantity

const cartMessage = document.querySelector('.cart-message');

let total = 0;

const p = document.createElement('p');
p.innerHTML = `You have ${total} item(s) in your cart`;
p.setAttribute('style', 'color:white; margin-left: 20px; font-size: 2rem;')
cartMessage.append(p);