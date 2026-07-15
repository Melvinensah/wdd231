const url = 'data/members.json';
const display = document.querySelector("#directory-cards");

// Auto-fill Footer Date
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
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
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid-view");
    display.classList.remove("list-view");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list-view");
    display.classList.remove("grid-view");
});

getMembers();