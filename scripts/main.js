// ---Responsive Navigation Toggle ---
function initializeMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}
const YearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();

if (YearElement) {
    YearElement.textContent = currentYear;
}

const updateElement = document.getElementById("lastModified");
const lastUpdated = document.lastModified;

if (updateElement){
    updateElement.textContent = "last modified   " + lastUpdated; 
}

document.getElementById('menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

