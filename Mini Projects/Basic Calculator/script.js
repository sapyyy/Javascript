"use script";

// storing the elements inside a variable first
const cursor = document.querySelector(".cursor");
const ac = document.querySelector(".ac");
const plusMinus = document.querySelector(".plus-minus");

// operators
const percentage = document.querySelector(".percentage");
const division = document.querySelector(".division");
const multiply = document.querySelector(".multiply");
const substraction = document.querySelector(".substraction");
const addition = document.querySelector(".addition");
const equals = document.querySelector(".equals");

// operands
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");

// circles
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");

// assignment
// storing the expression in an array
let expression = [99];
// storing the operators in set
const operators = new Set(["/", "*", "-", "+", "=", "%"]);
// storing all the names of the operator for easier access
const opName = {
  division: "/",
  multiply: "*",
  substraction: "-",
  addition: "+",
  equals: "=",
  percentage: "%",
};
// storing all the names of the numbers for easier access
const numName = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
  dot: ".",
};

// functions
const addOperators = function (e) {
  let curString = cursor.innerHTML;
  const lastEle = expression.at(-1);

  // checking if the lastEle is not undefined and not an operator
  if (lastEle && !operators.has(lastEle)) {
    // get the className
    const clsName = e.target.className.split(" ")[0];

    // get the corresponding operator
    const operator = opName[clsName];

    // add the operator to the previous expression
    curString += operator;

    // show that in display
    cursor.innerHTML = curString;

    // finally push that into the expression array
    expression.push(operator);
  }
};

const addOperands = function (e) {
  let curString = cursor.innerHTML;
  const lastEle = expression.at(-1);

  // get the class name
  const clsName = e.target.className.split(" ")[0];

  // get the corresponding operator
  const operand = numName[clsName];

  // add the operator to the previous expression
  curString += operand;

  // show that in display
  cursor.innerHTML = curString;

  // finally push that into the expression array
  expression.push(operand);
};

const changeColors = function (e) {
  // get the color name
  const colorName = e.target.className.split(" ").at(-1);

  //   check if the color is already applied and return if it is
  if (colorName == division.classList[1]) {
    return;
  }

  // storing in the variables to loop through them
  const colors = ["red", "green", "yellow"];
  const variables = [
    percentage,
    division,
    multiply,
    substraction,
    addition,
    equals,
  ];

  variables.forEach((element) => {
    // remove every colors from every variables
    colors.forEach((color) => {
      element.classList.remove(color);
    });

    // then add the required one
    element.classList.add(colorName);
  });
};

// events
ac.addEventListener("click", () => {
  cursor.innerHTML = "";
  expression = [];
});

// operator events
percentage.addEventListener("click", addOperators);
division.addEventListener("click", addOperators);
multiply.addEventListener("click", addOperators);
substraction.addEventListener("click", addOperators);
addition.addEventListener("click", addOperators);

// operand events
one.addEventListener("click", addOperands);
two.addEventListener("click", addOperands);
three.addEventListener("click", addOperands);
four.addEventListener("click", addOperands);
five.addEventListener("click", addOperands);
six.addEventListener("click", addOperands);
seven.addEventListener("click", addOperands);
eight.addEventListener("click", addOperands);
nine.addEventListener("click", addOperands);
zero.addEventListener("click", addOperands);
dot.addEventListener("click", addOperands);

// equals event
equals.addEventListener("click", (e) => {
  const result = eval(expression.join(""));
  cursor.innerHTML = result;
});

// plusMinus event
plusMinus.addEventListener("click", (e) => {
  const curExpression = eval(expression.join(""));
  const result = eval(-curExpression);
  cursor.innerHTML = result;
  expression = [];
  expression.push(result);
});

// events to change color
circle1.addEventListener("click", changeColors);
circle2.addEventListener("click", changeColors);
circle3.addEventListener("click", changeColors);
