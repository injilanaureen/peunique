// Initialize WOW.js for scroll animations
new WOW().init();

// Select the hamburger menu button and the nav element
const navButton = document.querySelector('.nav_button');
const nav = document.querySelector('header nav');

// Add a click event to the button
navButton.addEventListener('click', () => {
    // Toggle the "show" class on the nav
    nav.classList.toggle('show');
});
