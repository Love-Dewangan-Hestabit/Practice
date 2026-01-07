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
