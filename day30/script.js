// 1: Create Customer info
const customerName = "Ali";
const customerAge = 17;
let availableBalance = 1000;

// 2: Display the Resturant Menu
console.log("Item Number | Food Item | Price");
console.log("---------------------------------");
console.log("1           | Burger    | $10");
console.log("2           | Pizza     | $15");
console.log("3           | Sandwich  | $8");
console.log("4           | Pasta     | $12");
console.log("5           | Exit      | $0");
console.log("---------------------------------");

// Select a food item using switch

let choice = 2;

switch (choice) {
  case 1:
    console.log("You selected Burger. Price: $10");
    break;
  case 2:
    console.log("You selected Pizza. Price: $15");
    break;

  case 3:
    console.log("You selected Sandwich. Price: 8$ ");
    break;

  case 4:
    console.log("You selected Pasta. Price: $12");
    break;

  default:
    console.log("You selected Exit. Thank you!");
}
