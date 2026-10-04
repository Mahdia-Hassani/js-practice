// Student age check
let studentAge = 18;

if (studentAge >= 18) {
  console.log("student can register");
} else {
  console.log("student is too young to register.");
}

// test scores and Grade Assingment
let test1 = 85;
let test2 = 92;

let totalsocre = test1 + test2;

let grade;

if (totalsocre >= 180) {
  grade = "A";
} else if (totalsocre >= 150) {
  grade = "B";
} else if (totalsocre >= 120) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log("Grade:", grade);

// Update complete Credits
let completedCredits = 90;
completedCredits += 3;
console.log("Update Credits:", completedCredits);

// Student ID check (Even or Odd)
let studentID = 12345;
console.log("Student ID is", studentID % 2 === 0) ? "Even" : "Odd";

// Quick status using Ternary
let loggedIn = false;
let status = loggedIn ? "Active" : "Guest";
console.log("Status:", status);

// Access Validation
let hasSubmitted = true;
let score = 95;

if (loggedIn && hasSubmitted) {
  if (score >= 90) {
    console.log("Grade: A");
  } else {
    console.log("Grade below A");
  }
} else if (!hasSubmitted) {
  console.log("please complete your home work");
}

// Switch statement for user Roles
let useRole = "student";

switch (useRole) {
  case "admin":
    console.log("welcome Admin");
    break;

  case "student":
    console.log("Welcome Student");
    break;

  case "Guest":
    console.log("Welcome Guest");
    break;

  default:
    console.log("Unknown role.");
}
