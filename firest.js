//Add to Cart Button Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contact-form').reset(); // Reset the form after submission
  } else {
    alert('Please fill in all fields.');
  }
});

// Smooth scroll for "Shop Now" button
document.getElementById('shop-now').addEventListener('click', function() {
  document.querySelector('.collection').scrollIntoView({ behavior: 'smooth' });
});