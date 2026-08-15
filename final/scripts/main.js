document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

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

  displayRequiredFooterData();

  const currentLocation = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });
});