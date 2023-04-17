console.log("hello world");
//object
//creating an object
//object is a collection of key value pairs
const circle = {
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
circle.draw();
