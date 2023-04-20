const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//this is a old way to do this
// const another = {};
// for (let key in circle) another[key] = circle[key];

//this is also another way to clone an object but not the best

// const another = Object.assign(
//   {
//     color: "yellow",
//   },
//   circle
// );
// console.log(another);

//spread operator
// const another = { ...circle };
const another = { ...circle, color: "pinkk" };
console.log(another);
