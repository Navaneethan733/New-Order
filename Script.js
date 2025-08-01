let cartCount = 0;
const cartCounter = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartCounter.textContent = cartCount;
    alert('Added to Cart!');
  });
});
