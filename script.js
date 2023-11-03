let sliderImages = document.querySelectorAll('.slide'),
arrowRight = document.querySelector('#arrow-right'),
arrowLeft = document.querySelector('#arrow-left'),
current = 0;

// Clear All Images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';                
    }
}

// Init Slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}
// Left Arrow Click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});
startSlide();

// Get references to the main image and small images
const mainImage = document.getElementById('main-image');
const smallImages = document.querySelectorAll('.small-image-sec img');

// Set the first small image as the default (selected)
smallImages[0].classList.add('selected');

// Add a click event listener to each small image
smallImages.forEach((smallImage, index) => {
  smallImage.addEventListener('click', () => {
    // Remove the "selected" class from all small images
    smallImages.forEach((img) => img.classList.remove('selected'));

    // Add the "selected" class to the clicked small image
    smallImage.classList.add('selected');

    // Update the main image's src based on the clicked small image
    mainImage.src = `images/image-product-${index + 1}.jpg`;
  });
});

const quantityNum = document.getElementById('quan-num');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');

incBtn.addEventListener('click', function () {
    quantityNum.innerHTML = parseInt(quantityNum.innerHTML) + 1;
});

decBtn.addEventListener('click', function () {
    quantityNum.innerHTML = parseInt(quantityNum.innerHTML) - 1;
});

const addToCart = document.getElementById('addToCart');
const itemCount = document.getElementById('item');

addToCart.addEventListener('click', function () {
    itemCount.innerHTML = quantityNum.innerHTML;
    
    const calcSec = document.getElementById('calcSec');
    const res = document.getElementById('result');

    res.innerHTML = `$${(125.00 * parseInt(quantityNum.innerHTML)).toFixed(2)}`;
    calcSec.innerHTML = `$125.00 x ${quantityNum.innerHTML}`;
});

const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');

cartIcon.addEventListener('click', function () {
  if (cartDropdown.style.display === 'none') {
    cartDropdown.style.display = 'block';
  } else {
    cartDropdown.style.display = 'none';
  }
});

document.addEventListener('click', function (event) {
  if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {
    cartDropdown.style.display = 'none';
  }
});

const openNavButton = document.getElementById('openNav');
const closeNavButton = document.getElementById('closeNav'); // Add close button reference
const sideNav = document.getElementById('sideNav');

openNavButton.addEventListener('click', () => {
  sideNav.style.width = '250px';
});

// Add event listener for the close button
closeNavButton.addEventListener('click', () => {
  sideNav.style.width = '0';
});

// Add event listener to close the sidebar when clicking outside of it
sideNav.addEventListener('click', (event) => {
  if (event.target === sideNav) {
    sideNav.style.width = '0';
  }
});



