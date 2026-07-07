// 1. Course Data Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// 2. Footer Dynamic Content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// 3. Course Rendering Logic
const container = document.getElementById('course-cards');
const totalCreditsDisplay = document.getElementById('total-credits');

function displayCourses(filter = 'All') {
    container.innerHTML = '';
    
    let filtered = courses;
    if (filter === 'CSE') filtered = courses.filter(c => c.subject === 'CSE');
    else if (filter === 'WDD') filtered = courses.filter(c => c.subject === 'WDD');

    filtered.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('card');
        if (course.completed) card.classList.add('completed');
        
        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
        `;
        container.appendChild(card);
    });

    const total = filtered.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsDisplay.textContent = `Total Credits Required: ${total}`;
}

// 4. Event Listeners for Filters
document.querySelector('#all').addEventListener('click', () => displayCourses('All'));
document.querySelector('#cse').addEventListener('click', () => displayCourses('CSE'));
document.querySelector('#wdd').addEventListener('click', () => displayCourses('WDD'));

// Initial Call
displayCourses();