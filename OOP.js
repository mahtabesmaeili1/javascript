//object
//creating an object
//object is a collection of key value pairs
const circlee = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  //draw is a method which holds some logic others are properties which holds values
  draw: function () {
    console.log("draw");
  },
};
//using dot notation to access
// // // circlee.draw();

//factory function
//if we want to write all the code up in down here with factory function , it will be like this :
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draww");
    },
  };
}
// // // //const circle = createCircle(1);
// // // circle.draw();

//if we use return so we r doing the factory function , if we use this and new  we r doing the constructor function

// constructor function
//this circle down here is an object
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draaw");
  };
}
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function () {
  console.log("draaw");
}
`
);
// const circle = new Circle1(1);
Circle.apply({}, [1, 2, 3]);

Circle.call({}, 1);
//this expression up is exactl the same as down one.
const another = new Circle(1);
