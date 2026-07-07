const courses = [ /* ... your array from the prompt ... */ ];

const container = document.getElementById('course-cards');
const totalCreditsDisplay = document.getElementById('total-credits');

function displayCourses(filter = 'All') {
    container.innerHTML = '';
    let filtered = courses;
    
    if (filter === 'CSE') filtered = courses.filter(c => c.subject === 'CSE');
    if (filter === 'WDD') filtered = courses.filter(c => c.subject === 'WDD');

    filtered.forEach(course => {
        const card = document.createElement('div');
        card.className = course.completed ? 'completed' : 'incomplete';
        card.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;
        container.appendChild(card);
    });

    const total = filtered.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsDisplay.textContent = `Total Credits: ${total}`;
}

document.querySelectorAll('.filter-buttons button').forEach(btn => {
    btn.addEventListener('click', (e) => displayCourses(e.target.id.toUpperCase()));
});

displayCourses();