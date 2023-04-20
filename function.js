//default value of variable in js is undefined
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
greet("mahtab", "esmaeili");
//function means behaviours

//arrow function
let add = (num1, num2) => num1 + num2;
let result = add(7, 11);
console.log(result);

let heeeyy = (user) => {
  console.log("Hello " + user);
  return 1;
};
console.log(heeeyy("sina"));
