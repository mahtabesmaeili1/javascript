//comment
console.log("Hello World!!");
//node index.js in the terminal also execute the code in the terminal

let firstName = "Mahtab";
console.log(firstName);

let lastName = "Esmaeili";
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const mahtab = "owner";
// mahtab = "sina"; we can not resign the constant
let age = 28;
let isApproved = false;
let last = null;
let selectedColor = null;
selectedColor = "green";
//primitives / value

//reference type : object array functions
let person = {
  personsName: "Sina",
  personsAge: 31,
};
console.log(person);
//dot notation
person.personsName = "John";
console.log(person.personsName);
//bracket notation
person["personsName"] = "Mary";
console.log(person.personsName);

//array
let selectedColors = ["red", "blue"];
console.log(selectedColors);
console.log(selectedColors[0]);
//this way we add one item
selectedColors[2] = "green";
console.log(selectedColors);

selectedColors[3] = 1;
console.log(selectedColors);
console.log(selectedColors.length);
