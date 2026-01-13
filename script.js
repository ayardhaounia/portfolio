// Smooth Scrolling for Navigation Links
document.querySelectorAll('.menu a').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

const this_year =String(new Date().getFullYear())
