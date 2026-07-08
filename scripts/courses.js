const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];
function displayCourses(filter = 'All') {
    const container = document.getElementById('course-cards');
    container.innerHTML = '';
    const filtered = filter === 'All' ? courses : courses.filter(c => c.subject === filter);
    
    filtered.forEach(course => {
        const div = document.createElement('div');
        div.className = course.completed ? 'card completed' : 'card';
        div.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;
        container.appendChild(div);
    });
    
    document.getElementById('total-credits').textContent = 
        `Total Credits: ${filtered.reduce((sum, c) => sum + c.credits, 0)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('all').addEventListener('click', () => displayCourses('All'));
    document.getElementById('cse').addEventListener('click', () => displayCourses('CSE'));
    document.getElementById('wdd').addEventListener('click', () => displayCourses('WDD'));
    displayCourses();
});