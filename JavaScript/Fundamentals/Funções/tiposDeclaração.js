// function declaration
function sum(a, b) {
  return a + b;
}


// function expression
const subtract = function (a, b) {
  return a - b;
};


// named function expression
const multiply = function multiply(a, b) {
  return a * b;
};


// anonymous function expression  
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};


// arrow function
const multiply = (a, b) => a * b;