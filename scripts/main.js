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