const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const container = document.getElementById('course-cards');
const totalCreditsDisplay = document.getElementById('total-credits');

function displayCourses(filter = 'All') {
    container.innerHTML = '';
    let filtered = courses;
    if (filter === 'CSE') filtered = courses.filter(c => c.subject === 'CSE');
    if (filter === 'WDD') filtered = courses.filter(c => c.subject === 'WDD');

    filtered.forEach(course => {
        const card = document.createElement('div');
        card.className = `card ${course.completed ? 'completed' : 'incomplete'}`;
        card.innerHTML = `<h3>${course.subject} ${course.number}</h3><p>${course.title}</p>`;
        container.appendChild(card);
    });

    totalCreditsDisplay.textContent = `Total Credits: ${filtered.reduce((sum, c) => sum + c.credits, 0)}`;
}

document.getElementById('menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

document.querySelectorAll('.filter-buttons button').forEach(btn => {
    btn.addEventListener('click', (e) => displayCourses(e.target.id.toUpperCase()));
});

displayCourses();