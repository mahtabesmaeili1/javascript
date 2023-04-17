//object oriented programming OOP
//1-Encapsulation
let baseSalary = 30_000;
let overTime = 10;
let rate = 20;
function getWage(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}
// up here is a normal way
//down there is how object oriented programing works, its like a unite and has no params , so its best and easy to use and maintain and reduce the compexity and increase reusability.
let employee = {
  baseSalary: 30_000,
  overTime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overTime * this.rate;
  },
};

//2-abstraction (hide the details and complexity and when it change doesnt effect much in the whole , simpler interface / reduce the impact of the change.)

//3-inheritance (eliminate redundant code (in yani code haye ezafi ra hazf konid))
//4-poly morphism (means many form  ( refactor ugly switch / case statement))
