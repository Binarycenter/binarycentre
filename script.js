// Course data
const courses = [
    { name: "Computing", image: "images/computing.jfif" },
    { name: "Computer Programming", image: "images/programming.jpg" },
    { name: "Web Development", image: "images/web dev.jpg" },
    { name: "Networking", image: "images/Computer networking.jpg" },
    { name: "Introduction to Cyber Security", image: "images/Cyber-Security.jpg" },
    { name: "Graphic Design", image: "images/Graphic Design2.jpg" },
    { name: "Digital Marketing", image: "images/digital marketing.jfif" },
    { name: "Software Engineering", image: "images/Software Engineering.jpg" },
    { name: "Artificial Intelligence", image: "images/Artificial-Intelligence.jpg" },
    { name: "Data Science", image: "images/data science2.jpg" }
];

// Rest of your JavaScript code remains the same

// Populate course slider
const courseContainer = document.querySelector('.course-container');
courses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.classList.add('course-item');
    courseElement.innerHTML = `
        <img src="${course.image}" alt="${course.name}">
        <h3>${course.name}</h3>
    `;
    courseElement.addEventListener('click', () => openCourseDetails(course));
    courseContainer.appendChild(courseElement);
});

// Slider functionality
let currentIndex = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < courses.length - 5) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    courseContainer.style.transform = `translateX(-${currentIndex * 20}%)`;
}

// Auto-slide functionality
setInterval(() => {
    if (currentIndex < courses.length - 5) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}, 5000);

// Course details modal (simplified version)
function openCourseDetails(course) {
    alert(`
        Course: ${course.name}
        
        What You Will Learn:
        - Fundamentals of ${course.name}
        - Practical applications
        - Industry-standard tools and techniques
        
        Course Schedule:
        - 12-week program
        - 3 hours per week
        
        Career Pathways:
        - Junior ${course.name} Specialist
        - ${course.name} Analyst
        - Senior ${course.name} Expert
    `);
}