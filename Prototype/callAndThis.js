// this refer to the current object in Js
// when in browser it will return the window, and when in Node it will return null or {}

// call method is used to manually set the this when calling a function
const user1 = { name: "Saptadeep Ghosh" };
function sayHello() {
  console.log(`Hello my name is ${this.name}`);
}
sayHello(); // output : the result is undefined
sayHello.call(user1); // output : Hello my name is Saptadeep Ghosh
