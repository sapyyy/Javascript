// class is just syntactical sugar?

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello user : ${this.name}`);
  }
}

const user1 = new User("Papi");
user1.greet(); // output : Hello user : Papi

// what class is hiding behind is:

// constructor in class which does the same thing
function User1(name) {
  this.name = name;
}

// setting the greet into the User1 funciton's prototype
User1.prototype.greet = function () {
  console.log(`Hello user : ${this.name}`);
};

const user2 = new User1("Mitsua");
user2.greet(); // output : Hello user : Mitsua

// so there is nothing like class in Js, it is just a hidden function
console.log(typeof User); // Output: function
