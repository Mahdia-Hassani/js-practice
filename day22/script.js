const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  const age = Number(document.getElementById("age").value);
  const student = document.getElementById("student").checked;
  const senior = document.getElementById("senior").checked;

  let price;

  if (age < 13) {
    price = 5;
  } else if (age >= 13 && age < 60) {
    price = 10;
  } else {
    price = 7;
  }

  if (student && age >= 13 && age < 60) {
    price = price * 0.8;
  } else if (senior || age >= 60) {
    price = price * 0.8;
  }

  document.getElementById("result").textContent = "Ticket price: $" + price;

  console.log(age);
  console.log(student);
  console.log(senior);
  console.log(price);
});
