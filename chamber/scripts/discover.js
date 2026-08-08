import { discoverItems } from "../data/discover.mjs";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Discover Cards
    const container = document.getElementById("cards-container");
    if (container) {
        let html = "";
        discoverItems.forEach((item, index) => {
            html += `
                <article class="card card-${index + 1}">
                    <h2>${item.title}</h2>
                    <figure>
                        <img src="${item.photo}" alt="${item.title}" loading="lazy" width="300" height="200">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button class="learn-more-btn">Learn More</button>
                </article>
            `;
        });
        container.innerHTML = html;
    }

    // 2. localStorage Visitor Message Logic
    const visitorText = document.getElementById("visitor-text");
    if (visitorText) {
        const lastVisitKey = "chamber_last_visit";
        const currentTimestamp = Date.now();
        const lastVisit = localStorage.getItem(lastVisitKey);

        if (!lastVisit) {
            visitorText.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const timeDifference = currentTimestamp - Number(lastVisit);
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            if (daysDifference < 1) {
                visitorText.textContent = "Back so soon! Awesome!";
            } else if (daysDifference === 1) {
                visitorText.textContent = "You last visited 1 day ago.";
            } else {
                visitorText.textContent = `You last visited ${daysDifference} days ago.`;
            }
        }

        // Update stored visit timestamp
        localStorage.setItem(lastVisitKey, currentTimestamp);
    }
});