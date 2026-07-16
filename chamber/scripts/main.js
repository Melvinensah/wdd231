document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Responsive Hamburger Interaction ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Initialize aria-expanded for accessibility
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Toggle the CSS class
        navMenu.classList.toggle('active');
        
        // Update accessibility attribute
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // --- 2. Footer Data Function ---
    displayRequiredFooterData();
});

function displayRequiredFooterData() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
}