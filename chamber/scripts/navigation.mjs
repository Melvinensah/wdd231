export function initNavigation() {
    const menuButton = document.querySelector("#menu-button");
    const menuLinks = document.querySelector("#menu-links");

    if (menuButton && menuLinks) {
        menuButton.addEventListener("click", () => {
            menuLinks.classList.toggle("show");
            menuButton.textContent = menuLinks.classList.contains("show") ? "✕" : "☰";
        });
    }
}