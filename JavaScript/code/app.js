// Basic Function
function f(a, b) {
  return a + b;
}
console.log(f(4, 4));

// Anonymous Function
var f = function () {
  return "Hello World!";
};

console.log(f());

// IIFE Function
(function (a, b) {
  return console.log(a + b);
})(4, 4);

// Nested Function
function createFunction() {
  function z(a, b) {
    const sum = a + b;
    return sum;
  }
  return z;
}
const f = createFunction();
console.log(f(3, 4)); // 7

// Function Hoisting
function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7

// Closure Function
function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createAdder(3);
console.log(f(4)); // 7

// Arrow Function
const f = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7
