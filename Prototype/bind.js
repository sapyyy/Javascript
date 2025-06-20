// when a function is called without a object reference where you a this keyword is used
// the reference is lost

const user = {
  name: "Saptadeep Ghosh",

  greet() {
    console.log(`Hello Mr/Mrs ${this.name}`);
  },
};

user.greet(); // output: Hello Mr/Mrs Saptadeep Ghosh
let user1 = user.greet;

// this is the copied greet
user1(); // output: Hello Mr/Mrs undefined

// The reference is lost here, which is why we need to bind the object
user1 = user.greet.bind(user);
user1(); // output: Hello Mr/Mrs Saptadeep Ghosh
