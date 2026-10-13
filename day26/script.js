// store student scores in an array
const studentScore = [100, 90, 80, 70, 60, 50];

// add new socre with push()
studentScore.push(40);
console.log(studentScore);

// check exixtence with includes()
console.log(studentScore.includes(30)); // return false becasue 30 is not excits in array.

//display all socres using a loop
for (let i = 0; i < studentScore.length; i++) {
  console.log(studentScore[i]);
}

//Remove last score with pop()
studentScore.pop();
console.log(studentScore);

// find index with indexof()
console.log(studentScore.indexOf(12)); // -1 because it could not found this number.

//task for the student
const fruit = ["apple", "banana", "cherry", "mongo"];
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit.length - 1);
console.log(fruit.length);

// Quick Practice 2: Modify an Array
const studentName = ["Ali", "Mahdia", "Sara"];

//add one student to the end using push()
studentName.push("Zahra");
console.log(studentName);

//add one sutdent to the beginning using unshift()
studentName.unshift("Maryam");
console.log(studentName);

// remove the last student using pop()
studentName.pop();
console.log(studentName);

//Search and loop
const student = ["sara", "zahra", "mahdia", "omid"];

//check if the maryam included
console.log(student.includes("Maryam")); //false
//find the index of "Omid"
console.log(student.indexOf("omid")); // 3

for (let i = 0; i < student.length; i++) {
  console.log(student[i]);
}
