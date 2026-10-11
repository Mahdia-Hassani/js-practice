function showWelcomeMessage() {
  console.log("Welcome to Javascript Functions!");
}

showWelcomeMessage();
showWelcomeMessage();

// parameters & argument

function greetSudent(name) {
  console.log("Hello," + name);
}

greetSudent("Mahdia");

// function with one parameters

function checkPassing(score) {
  if (score > 60) {
    console.log("Passed!");
  } else {
    console.log("Failed.");
  }
}

checkPassing(75);
checkPassing(30);

// functione with multiple parameters

function addnumber(a, b) {
  const sum = a + b;
  console.log("sum:" + sum);
}

addnumber(5, 6);

// Practice
function studentInfo(name, score) {
  console.log(name + " Score: " + score);
}

function rectangleArea(width, heigt) {
  console.log("Area: " + width * heigt);
}

studentInfo("Mahdia", 100);
rectangleArea(8, 8);

// we have three types of functions | functione Declaretion | Arrow Function | Function of Expression
// 1: Function Declaretion

function functionName() {
  console.log("This is Function Declaretion");
}

// 2: Expression:

const ExpressionFunction = function () {
  console.log("This is Expression function");
};

// 3: Arrow Function

const ArrowFunction = (a, b) => console.log("This is Arrow Functions");

// Here we call or invoke the functions
functionName();
ExpressionFunction();
ArrowFunction();

// Store the Return Value

function multiply(x, y) {
  return x * y;
}
