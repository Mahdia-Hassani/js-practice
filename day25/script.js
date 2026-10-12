// task 1:

function greetStudent() {
  console.log("Welcome to JS class.");
}

greetStudent();

// task 2:

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(15, 16));

// task 3:

function squareNumber(number) {
  return number * number;
}

console.log(squareNumber(5));

// task 4:

function calculateTotal(price, quantity = 1) {
  return price * quantity;
}

console.log(calculateTotal(4)); // quantity is set to 1 by default
console.log(calculateTotal(12, 13));

// task 5:

function introduceStudent(name, course = "MERN Stack") {
  console.log(name + " " + course);
}

introduceStudent("Mahdia");
introduceStudent("Mahdia", "JavaScript");

// task 6:

function withReturn() {
  return 5;
}

function withLog() {
  console.log(5);
}

console.log(withReturn() + 5); // returns 10
console.log(withLog() + 5); // prints 5 and then NaN

// task 7:

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

console.log(multiplyNumbers(4, 5));

// task 8:

const SquareNumber = (number) => number ** 2;

console.log(SquareNumber(6));

// task 9:

const isEven = (number) => number % 2 === 0;

console.log(isEven(7));

// task 10:

const courseName = "JS HomeWork";

function displayCourse() {
  console.log(courseName);
}

displayCourse();

// task 11:

function myFunction() {
  let localCourse = "JavaScript Basics";
  console.log(localCourse); // Works inside the function
}

myFunction();

// console.log(localCourse); // ReferenceError: localCourse is not defined

// task 12:

if (true) {
  let message = "Inside the block";
  const count = 3;
  var cars = "Cars";

  console.log(message);
  console.log(count);
  console.log(cars);
}

// task 13:

// let and const are block-scoped.
// var can be accessed outside this block.

console.log(cars);

// console.log(message); // ReferenceError
// console.log(count); // ReferenceError

// task 14 and 15:

function outerFunction() {
  let message = "Hello from outer function";

  function innerFunction() {
    console.log(message);
  }

  innerFunction();
}

outerFunction();

// task 16:

let globalMessage = "Global scope";

function outerFunction2() {
  let outerMessage = "Outer function scope";

  function innerFunction2() {
    let innerMessage = "Inner function scope";

    console.log(globalMessage);
    console.log(outerMessage);
    console.log(innerMessage);
  }

  innerFunction2();
}

outerFunction2();

// task 17, 18 and 19:

let score = 90;

function showScore() {
  let score = 50;

  console.log(score); // 50
}

showScore();

console.log(score); // 90

// task 20, 21 and 22:

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// task 23:

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2

console.log(counterB()); // 1
console.log(counterB()); // 2

console.log(counterA()); // 3
console.log(counterB()); // 3
