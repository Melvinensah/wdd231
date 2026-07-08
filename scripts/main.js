document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isExpanded = navMenu.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Footer Info
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});