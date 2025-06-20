// JavaScript searches for methods and vars in prototype

// Object User
const User = {
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

// Constructor to assign name into the User Object
function setName(name) {
  this.name = name;
}

// copying User 'greet' in the setName's property
setName.prototype.greet = User.greet;

// now just creating a new object can call setName.greet();
const obj = new setName("Saptadeep");
obj.greet();
