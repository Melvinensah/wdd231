document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
document.querySelector("#menu-toggle").addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.toggle('show');
});