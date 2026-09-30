let studentName = "  Mahdia  ";
let age = "17";
let score = "87.456";

console.log(studentName.trim());
console.log(studentName.toUpperCase());
console.log(studentName.toLowerCase());
console.log(studentName.length);

// Type Conversion
let numberAge = Number(age);
let numberScore = Number(score);

console.log(numberAge);
console.log(numberScore);

console.log(typeof numberAge);
console.log(typeof numberScore);

// NaN Practice
let result = Number("Hello");

console.log(result);
console.log(typeof result);

// Type Coercion
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);

// Debugging Challenge
let studentName2 = "Sara";

console.log(studentName2);

console.log("Hello");

// Bonus Challenge
console.log("Student: " + studentName.trim().toUpperCase());
console.log("Age: " + numberAge);
console.log("Score: " + numberScore);
