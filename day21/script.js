// Task 1 - Age Checker
const checkAge = document.getElementById("checkAge");

checkAge.addEventListener("click", function () {
  const age = Number(document.getElementById("age").value);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult.";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor.";
  }

  console.log(age);
});

// Task 2 Number checker

const checkNumber = document.getElementById("checkNumber");

checkNumber.addEventListener("click", function () {
  const number = Number(document.getElementById("number").value);
  if (number > 0) {
    document.getElementById("numberResult").textContent = "Positive number";
  } else if (number < 0) {
    document.getElementById("numberResult").textContent = "Negative number";
  } else {
    document.getElementById("numberResult").textContent = "Zero";
  }

  console.log(number);
});

// task 3 Grade checker

const checkGrade = document.getElementById("checkGrade");

checkGrade.addEventListener("click", function () {
  const score = Number(document.getElementById("score").value);
  let grade;

  if (score < 0 || score > 100) {
    grade = "Invalid score";
  } else if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  document.getElementById("gradeResult").textContent = grade;
  console.log(grade);
});

// task 4 Even or odd

const checkEvenOdd = document.getElementById("checkEvenOdd");

checkEvenOdd.addEventListener("click", function () {
  const number = Number(document.getElementById("evenOddNumber").value);

  if (number % 2 === 0) {
    document.getElementById("evenOddResult").textContent = "Even";
  } else {
    document.getElementById("evenOddResult").textContent = "Odd";
  }

  console.log(number);
});

// task 5 login operator

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "12345") {
    document.getElementById("loginResult").textContent = "Login successful";
  } else {
    document.getElementById("loginResult").textContent =
      "Invalid username or password";
  }

  console.log(username);
});

// task 6 ternary operator

const checkTernary = document.getElementById("checkTernary");

checkTernary.addEventListener("click", function () {
  const age = Number(document.getElementById("ternaryAge").value);

  const result = age >= 18 ? "Adult" : "Minor";

  document.getElementById("ternaryResult").textContent = result;
  console.log(result);
});

// task 7 Access checker

const checkAccess = document.getElementById("checkAccess");

checkAccess.addEventListener("click", function () {
  const age = Number(document.getElementById("accessAge").value);
  const hasID = document.getElementById("hasID").checked;

  if (age >= 18 && hasID) {
    document.getElementById("accessResult").textContent = "Access granted";
  } else {
    document.getElementById("accessResult").textContent = "Access denied";
  }

  console.log(age);
  console.log(hasID);
});

// Challange Student Result checker

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const score = Number(document.getElementById("studentScore").value);

  let grade;
  let status;

  if (score < 0 || score > 100) {
    grade = "Invalid score";
    status = "Invalid";
  } else if (score >= 90) {
    grade = "A";
    status = "Passed";
  } else if (score >= 80) {
    grade = "B";
    status = "Passed";
  } else if (score >= 70) {
    grade = "C";
    status = "Passed";
  } else if (score >= 60) {
    grade = "D";
    status = "Passed";
  } else {
    grade = "F";
    status = "Failed";
  }

  document.getElementById("studentResult").textContent =
    "Student: " +
    studentName +
    " | Score: " +
    score +
    " | Grade: " +
    grade +
    " | Status: " +
    status;

  console.log(studentName);
  console.log(score);
  console.log(grade);
  console.log(status);
});
