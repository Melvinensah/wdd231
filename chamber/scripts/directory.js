const url = 'data/members.json'; // Path fixed
const display = document.querySelector("#directory-cards");

// Initialize functions
document.addEventListener("DOMContentLoaded", () => {
    getMembers();
    displayRequiredFooterData();
});


async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const displayMembers = (members) => {
    display.innerHTML = ""; // Clear existing
    members.forEach((member) => {
        let section = document.createElement('section');
        section.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        display.appendChild(section);
    });
};

// Toggle Functionality
document.querySelector("#grid").addEventListener("click", () => {
    display.classList.add("grid-view");
    display.classList.remove("list-view");
});

document.querySelector("#list").addEventListener("click", () => {
    display.classList.add("list-view");
    display.classList.remove("grid-view");
});