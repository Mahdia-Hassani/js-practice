// Student Level:
// Create a function showStudentLevel that takes a student’s name and level and prints: "Khalid is at Intermediate level."
function showStudentLevel(name, level) {
  console.log(name + " is at " + level);
}

showStudentLevel("Mahdia", "Advanced Level");

// Enrollment Confirmation:
// Create a function enrollStudent that takes a student’s name and course, and prints a sentence confirming enrollment.
function enrollStudent(name, course) {
  console.log(name + " has been enrolled in the " + course + " course.");
}

enrollStudent("Ali", "Web design");

// Generate Student ID:
function generateID(name, enrollmentYear) {
  return name.toLowerCase() + enrollmentYear;
}

console.log(generateID("Yasamin", 2026));
console.log(generateID("Ali", 2025));

// Default Parameter:
function defaultPara(a, b = 2) {
  return a + b;
}
console.log(defaultPara(2)); //will use default value
console.log(defaultPara(2, 4));

// 6. Advanced Mini Project — Processing Multiple Students
let students = [
  { name: "Fatima", course: "JavaScript", level: "Intermediate", score: 90 },
  { name: "Ali", course: "HTML", level: "Beginner", score: 70 },
  { name: "Sara", course: "CSS", level: "Advanced", score: 95 },
];

function processStudents(studentArray) {
  for (let i = 0; i < studentArray.length; i++) {
    let student = studentArray[i];

    // Score Evaluation
    if (student.score >= 85) {
      console.log(student.name + " is performing excellently!");
    } else {
      console.log(student.name + " should work on improving their skills.");
    }

    // Display Level
    showStudentLevel(student.name, student.level);

    // Generate Unique ID
    console.log("Student ID: " + generateStudentID(student.name, 2026));
  }
}

processStudents(students);
