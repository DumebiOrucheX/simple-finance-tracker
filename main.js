// main.js
// Handles navigation and page switching for the finance tracker

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            pages.forEach(page => {
                page.style.display = page.id === target ? 'block' : 'none';
            });
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
