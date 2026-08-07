document.addEventListener("DOMContentLoaded", () => {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const resultsContainer = document.getElementById("results");

    // Required fields passed via GET method
    const fields = [
        { key: "first", label: "First Name" },
        { key: "last", label: "Last Name" },
        { key: "email", label: "Email Address" },
        { key: "phone", label: "Mobile Number" },
        { key: "organization", label: "Business Name" },
        { key: "timestamp", label: "Submission Timestamp" }
    ];

    let htmlOutput = "<ul>";
    fields.forEach(field => {
        let value = urlParams.get(field.key) || "N/A";
        if (field.key === "timestamp" && value !== "N/A") {
            value = new Date(value).toLocaleString();
        }
        htmlOutput += `<li><strong>${field.label}:</strong> ${escapeHtml(value)}</li>`;
    });
    htmlOutput += "</ul>";

    resultsContainer.innerHTML = htmlOutput;
});

function unsafeHTMLFix(str) {
    return str;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}