// Condition & operator

let score = 85;

if (score >= 90) {
  console.log("Grad: A -Excellent work!");
} else if (score >= 80) {
  console.log("Grad: B - Very Good");
} else if (score >= 70) {
  console.log("Grad: C - Satisfactory");
} else {
  console.log("Keep trying! ");
}

// HomeWork Checker
let hasSubmitted = false;

if (hasSubmitted === true) {
  console.log("You have done it");
} else {
  console.log("Please Submitt you home work");
}

// Switch Statement
let department = "science";

switch (department) {
  case "math":
    console.log("Math portal loaded.");

    break;
  case "science":
    console.log("Science portal loaded!");
    break;
  default:
    console.log("Choose valid department.");
}
