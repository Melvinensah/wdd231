const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];


const container = document.querySelector("#course-cards");
const totalCreditsDisplay = document.querySelector("#total-credits");

function displayCourses(filter = "all") {
    container.innerHTML = "";
    let filtered = courses;
    
    if (filter === "wdd") filtered = courses.filter(c => c.subject === "WDD");
    if (filter === "cse") filtered = filtered.filter(c => c.subject === "CSE");

    filtered.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        if (course.completed) card.classList.add("completed");
        
        card.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;
        container.appendChild(card);
    });

    const total = filtered.reduce((sum, c) => sum + c.credits, 0);
    totalCreditsDisplay.textContent = `Total Credits: ${total}`;
}

document.querySelector("#all").addEventListener("click", () => displayCourses("all"));
document.querySelector("#wdd").addEventListener("click", () => displayCourses("wdd"));
document.querySelector("#cse").addEventListener("click", () => displayCourses("cse"));

displayCourses(); // Initial load