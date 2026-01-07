// app.js
console.log("App started");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a + b; // BUG (intentional)
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

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

