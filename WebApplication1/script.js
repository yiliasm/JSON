// Student data array in JSON format
const students = [
    {
        fullName: "Emily Johnson",
        studentID: "S789012",
        age: 20,
        major: "Data Science",
        gpa: 3.92,
        enrolled: true,
        courses: ["NLP", "Machine Learning", "Web Programming"],
        contact: {
            email: "emily.john@example.com",
            phone: "555-9xx-6543"
        }
    },
    {
        fullName: "Omar Khalid",
        studentID: "S456789",
        age: 22,
        major: "Cybersecurity",
        gpa: 3.75,
        enrolled: true,
        courses: ["Network Security", "Forensics", "Cryptography"],
        contact: {
            email: "omar.khalid@example.com",
            phone: "555-1xx-7890"
        }
    },
    {
        fullName: "Michael Smith",
        studentID: "S123456",
        age: 21,
        major: "Software Engineering",
        gpa: 3.85,
        enrolled: false,
        courses: ["OOP", "Algorithms", "Databases"],
        contact: {
            email: "michael@example.com",
            phone: "555-4xx-3210"
        }
    }
];

// Function to render students in HTML
function displayStudents() {
    const outputDiv = document.getElementById("output");
    let html = "";

    students.forEach(student => {
        html += `
      <div class="student-card">
        <p><strong>Name:</strong> ${student.fullName}</p>
        <p><strong>Student ID:</strong> ${student.studentID}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Major:</strong> ${student.major}</p>
        <p><strong>GPA:</strong> ${student.gpa.toFixed(2)}</p>
        <p><strong>Enrolled:</strong> ${student.enrolled ? "Yes" : "No"}</p>
        <p><strong>Courses:</strong> ${student.courses.join(", ")}</p>
        <p><strong>Email:</strong> <a href="mailto:${student.contact.email}">${student.contact.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${student.contact.phone}">${student.contact.phone}</a></p>
      </div>
    `;
    });

    outputDiv.innerHTML = html;
}

// Call the function when the page loads
displayStudents();