// 1: Create Student information

const Name = "Mahdia";
let age = 17;
let mathematicsMarks = 30;
let englishMarks = 90;
let computerMarks = 40;

console.log("--------Student info----------------");
console.log("Name:", Name);
console.log("Age: ", age);
// 2: Arithmetic Operations

// Total Score:
const totalSubjects = 3;
const maxMarkSuject = 100;

let total = mathematicsMarks + englishMarks + computerMarks;
console.log("Your total Score is: ", total);

// Average Score:
let average = total / 3;
console.log("Your Average Score is: ", average);

// highestPossibleTotal:
const highestPossibleNumber = maxMarkSuject * totalSubjects;
console.log("Your Highest Number is: ", highestPossibleNumber);

// remaining number:
let remainingNumber = highestPossibleNumber - total;
console.log("Remaining Number: " + remainingNumber);

// 3: comparison operators

console.log("Is older than 18: ", age > 18);
console.log(
  "Is the mathematics marks greater than 80: ",
  mathematicsMarks > 80,
);
console.log("Is the English mark equal to 100: ", englishMarks === 100);

console.log("Is the Computer mark different from 50: ", computerMarks !== 50);

console.log("Average: ", average >= 50);

// 4: Conditional statements
let grade;

if (average >= 90 && average <= 100) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else if (average >= 50) {
  grade = "E";
} else {
  console.log("You failed.");
}

console.log("Student Grade: ", grade);
