export async function initSpotlights() {
    const spotlightsContainer = document.querySelector("#spotlights-container");
    const membersJSONURL = "data/members.json";

    try {
        const response = await fetch(membersJSONURL);
        if (!response.ok) throw new Error("Failed to load members data");
        const members = await response.json();

        const qualifiedMembers = members.filter(member => member.membershipLevel >= 2);
        const selectedMembers = getRandomItems(qualifiedMembers, 2);

        displaySpotlights(selectedMembers, spotlightsContainer);
    } catch (error) {
        console.error("Error loading spotlights:", error);
        if (spotlightsContainer) {
            spotlightsContainer.innerHTML = "<p>Featured spotlights currently unavailable.</p>";
        }
    }
}

function getRandomItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySpotlights(members, container) {
    if (!container) return;
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><em>${member.membershipTitle || 'Gold Member'}</em></p>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        container.appendChild(card);
    });
}