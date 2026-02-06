// Simple cart counter
let cartCount = 0;
const cartButton = document.querySelector('.search-cart button');
const addButtons = document.querySelectorAll('.product-card button');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartButton.textContent = `Cart (${cartCount})`;
        alert('Added to cart!');
    });
});