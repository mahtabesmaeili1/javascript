//object oriented programming OOP

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;
function getWage(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}
// up here is a normal way
//down there is how object oriented programing works, its like a unite.
let employee = {
  baseSalary: 30_000,
  overTime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overTime * this.rate;
  },
};
