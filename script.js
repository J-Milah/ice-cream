// JavaScript for mobile menu and carousel functionality

// Mobile menu toggle
const nav = document.querySelector('nav ul');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('header').appendChild(menuToggle);

// Add event listener for toggling the mobile menu
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close the menu when clicking on a link (useful on mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Swipe functionality for carousel (for mobile)
let startX;
let rotationAngle = 0; // Track the rotation angle manually
const carouselBox = document.querySelector('.carousel .box');

// Check if the carousel exists to avoid errors
if (carouselBox) {
    carouselBox.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carouselBox.addEventListener('touchmove', (e) => {
        const moveX = e.touches[0].clientX;
        const distance = startX - moveX;

        if (distance > 50) {
            // Swipe left: rotate carousel to the next image
            rotateCarousel('next');
            startX = moveX; // Reset start position to avoid multiple triggers
        } else if (distance < -50) {
            // Swipe right: rotate carousel to the previous image
            rotateCarousel('prev');
            startX = moveX;
        }
    });
}

// Rotate the carousel by adjusting the rotation angle
function rotateCarousel(direction) {
    if (direction === 'next') {
        rotationAngle -= 45; // Rotate 45 degrees for each swipe
    } else if (direction === 'prev') {
        rotationAngle += 45; // Rotate back
    }

    // Apply the new rotation to the carousel
    carouselBox.style.transform = `perspective(1000px) rotateY(${rotationAngle}deg)`;
}

// Window resize handler to reset the menu on larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active'); // Close the mobile menu on larger screens
    }
});
