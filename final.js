// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

//slider
let currentIndex = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    const slides = document.getElementsByClassName('slide');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatic slide change after 5 seconds
setInterval(nextSlide, 5000);

//darkMode functionality
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }