document.addEventListener("DOMContentLoaded", () => {
    // 1. Set current timestamp on form load if hidden field exists
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // 2. Modal Dialog Functionality
    const modalButtons = document.querySelectorAll(".modal-btn");
    modalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) modal.showModal();
        });
    });

    const closeButtons = document.querySelectorAll(".close-modal");
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            if (modal) modal.close();
        });
    });
});