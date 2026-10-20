// Student data
const students = [
  { name: "Ahmad", score: 85 },
  { name: "Sara", score: 92 },
  { name: "Ali", score: 45 },
  { name: "Maryam", score: 78 },
  { name: "Omar", score: 35 },
  { name: "Fatima", score: 95 },
  { name: "Hassan", score: 60 },
  { name: "Zahra", score: 48 },
  { name: "Hamid", score: 70 },
  { name: "Laila", score: 88 },
];

// 1. Display all students
console.log("All Students:");

students.forEach(function (student) {
  console.log(student.name + ": " + student.score);
});

// Display total number of students
console.log("Total Students: " + students.length);

// 2. Filter passing students
const passingStudents = students.filter(function (student) {
  return student.score >= 50;
});

console.log("Passing Students:", passingStudents);

// 3. Filter failing students
const failingStudents = students.filter(function (student) {
  return student.score < 50;
});

console.log("Failing Students:", failingStudents);

// 4. Extract student names
const studentNames = students.map(function (student) {
  return student.name;
});

console.log("Student Names:", studentNames);

// 5. Calculate total score
const totalScore = students.reduce(function (total, student) {
  return total + student.score;
}, 0);

console.log("Total Score: " + totalScore);

// 6. Calculate average score
const averageScore =
  students.reduce(function (total, student) {
    return total + student.score;
  }, 0) / students.length;

console.log("Average Score: " + averageScore);

// 7. Sort students from highest to lowest
const sortedStudents = [...students].sort(function (a, b) {
  return b.score - a.score;
});

console.log("Students Ranked by Score:", sortedStudents);

// 8. Find a student by name
const searchedStudent = students.find(function (student) {
  return student.name === "Sara";
});

console.log("Search Result:", searchedStudent);

// 9. Check if at least one student scored 90 or above
const hasHighAchiever = students.some(function (student) {
  return student.score >= 90;
});

console.log("Has a student scored 90 or above? " + hasHighAchiever);

// 10. Check if all students passed
const allStudentsPassed = students.every(function (student) {
  return student.score >= 50;
});

console.log("Did all students pass? " + allStudentsPassed);

// Challenge 1: Display the top three students
const topThreeStudents = sortedStudents.slice(0, 3);

console.log("Top Three Students:", topThreeStudents);

// Challenge 2: Find the student with the lowest score
const lowestStudent = sortedStudents[sortedStudents.length - 1];

console.log("Student with the Lowest Score:", lowestStudent);
