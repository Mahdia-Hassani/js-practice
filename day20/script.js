// Your Tasks
// Student ID List:
// Use a for loop to print IDs from 1 to 10.
// If the ID is divisible by 2, print: "Even ID".
// Registration Seats:
// You have 5 seats available.
// Use a while loop to register students until seats are full.
// Print:
// "Student X registered"
// "Seats remaining: Y"
// Welcome Message:
// Use a do...while loop to greet students at least once.
// Favorite Clubs:
// Create an array of 5 clubs.
// Loop through them and print: "Student likes the [Club Name] club."
// If the club is Drama, add: "Special interest club!"
// Score Calculation & Grading:
// Create an array of scores.
// Use a loop + conditional logic to assign:
// Score ≥ 90 → Grade A
// Score ≥ 80 → Grade B
// Score ≥ 70 → Grade C
// Below 70 → Needs Improvement
// Advanced Access Validation:
// Each student has: isLoggedIn, hasSubmitted, score, userRole.
// Use conditionals + switch to validate access and show role messages.

// 1. Student ID List
for (let studentID = 1; studentID <= 10; studentID++) {
  if (studentID % 2 === 0) {
    console.log("Student ID:", studentID, "- Even ID");
  } else {
    console.log("Student ID:", studentID);
  }
}

// 2. Registration Seats
let seatsRemaining = 5;
let studentNumber = 1;

while (seatsRemaining > 0) {
  console.log("Student " + studentNumber + " registered");
  seatsRemaining--;
  console.log("Seats remaining:", seatsRemaining);
  studentNumber++;
}

// 3. Welcome Message
let greeted = false;
do {
  console.log("🎉 Welcome to the Student Portal!");
  greeted = true;
} while (!greeted);

// 4. Favorite Clubs
let clubs = ["Robotics", "Drama", "Science", "Math", "Art"];

for (let i = 0; i < clubs.length; i++) {
  if (clubs[i] === "Drama") {
    console.log(
      "Student likes the " + clubs[i] + " club. Special interest club!",
    );
  } else {
    console.log("Student likes the " + clubs[i] + " club.");
  }
}

// 5. Score Calculation & Grading
let studentScores = [95, 82, 76, 64, 89];

for (let i = 0; i < studentScores.length; i++) {
  let grade;

  if (studentScores[i] >= 90) {
    grade = "Grade A";
  } else if (studentScores[i] >= 80) {
    grade = "Grade B";
  } else if (studentScores[i] >= 70) {
    grade = "Grade C";
  } else {
    grade = "Needs Improvement";
  }

  console.log(
    "Student " + (i + 1) + " Score: " + studentScores[i] + " → " + grade,
  );
}

// 6. Advanced Access Validation
let students = [
  {
    name: "Amina",
    score: 95,
    isLoggedIn: true,
    hasSubmitted: true,
    userRole: "student",
  },
  {
    name: "Ali",
    score: 82,
    isLoggedIn: true,
    hasSubmitted: false,
    userRole: "student",
  },
  {
    name: "AdminUser",
    score: 100,
    isLoggedIn: true,
    hasSubmitted: true,
    userRole: "admin",
  },
];

for (let i = 0; i < students.length; i++) {
  let s = students[i];

  if (s.isLoggedIn && s.hasSubmitted) {
    if (s.score >= 90) {
      console.log(s.name + " → Grade: A");
    }
  } else if (!s.hasSubmitted) {
    console.log(s.name + " → Please submit your assignment.");
  }

  switch (s.userRole) {
    case "admin":
      console.log(s.name + " → Welcome Admin! Full access granted.");
      break;
    case "student":
      console.log(s.name + " → Welcome Student! Check your dashboard.");
      break;
    case "guest":
      console.log(s.name + " → Welcome Guest! Please log in.");
      break;
    default:
      console.log(s.name + " → Role not recognized.");
  }
}
