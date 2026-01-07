// app.js
console.log("Change from Test-1");

//Simple Arithmetic Operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

//Console Logs
console.log("Add:", add(2, 3));
console.log("Sub:", subtract(5, 2));
console.log("Mul:", multiply(3, 4));
console.log("Div:", divide(10, 2));

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};