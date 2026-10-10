const button = document.getElementById("analyze");

button.addEventListener("click", function () {
  const number = Number(document.getElementById("number").value);

  if (number > 0) {
    console.log("Positive");
  } else if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }

  for (let i = 1; i <= number; i++) {
    console.log(i);
  }

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }

  console.log("Sum: " + sum);

  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }

  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
  }

  for (let i = number; i >= 1; i--) {
    console.log(i);
  }

  let factorial = 1;

  if (number < 0) {
    console.log("Factorial is not possible for negative numbers");
  } else {
    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
    }

    console.log("Factorial: " + factorial);
  }
});
