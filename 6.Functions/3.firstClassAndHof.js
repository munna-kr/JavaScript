// ============================================
// ⚡ QUICK REVISION: FIRST-CLASS & HIGHER-ORDER FUNCTIONS
// ============================================

/*
 🔹 FIRST-CLASS FUNCTIONS
-------------------------
> First-Class Functions is a concept in JavaScript, 
not a special syntax or built-in feature.

> Functions in JS are treated like values:
- Can be assigned, passed, returned, or stored.
- Because of this behavior, JavaScript allows higher-order functions, callbacks, and functional programming patterns.
*/

// 1️⃣ Assign to variable
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Alice')); // "Hello, Alice!"

// 2️⃣ Pass as argument
function run(fn, val) {
  return fn(val);
}
const double = (x) => x * 2;
console.log(run(double, 5)); // 10

// 3️⃣ Return from another function
function multiplier(m) {
  return (n) => n * m;
}
const triple = multiplier(3);
console.log(triple(10)); // 30

// 4️⃣ Store inside objects or arrays
const mathOps = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
};
console.log(mathOps.add(4, 6)); // 10

/*
✅ Quick Recap:
- JS functions = first-class citizens.
- Can be passed, stored, or returned.
- Enables functional programming.
*/

// ============================================
// 🔹 HIGHER-ORDER FUNCTIONS (HOFs)
// ============================================
// A function that:
// - Takes another function as argument, OR
// - Returns another function.

// 1️⃣ Takes a function (callback)
function processArray(arr, fn) {
  const result = [];
  for (let item of arr) result.push(fn(item));
  return result;
}
console.log(processArray([1, 2, 3], (n) => n * 2)); // [2, 4, 6]

// 2️⃣ Returns a function
function greet(greeting) {
  return (name) => `${greeting}, ${name}!`;
}
const sayHi = greet('Hi');
console.log(sayHi('Bob')); // "Hi, Bob!"

// 3️⃣ Built-in HOFs: map(), filter(), reduce()
const nums = [1, 2, 3, 4, 5];
console.log(nums.map((n) => n * 2)); // [2, 4, 6, 8, 10]
console.log(nums.filter((n) => n % 2)); // [1, 3, 5]
console.log(nums.reduce((a, b) => a + b, 0)); // 15

// 4️⃣ Decorator Example — add logging
function withLogging(fn) {
  return (...args) => {
    console.log('Args:', args);
    const res = fn(...args);
    console.log('Result:', res);
    return res;
  };
}
const add = (a, b) => a + b;
const addLog = withLogging(add);
addLog(2, 5);

// 5️⃣ Function composition
const compose = (f, g) => (x) => f(g(x));
const addOne = (x) => x + 1;
const timesTwo = (x) => x * 2;
const addOneThenDouble = compose(timesTwo, addOne);
console.log(addOneThenDouble(5)); // 12

/*
✅ Quick Recap:
- HOFs take or return functions.
- Common HOFs: map, filter, reduce.
- Useful for callbacks, composition, async code.
*/

// ============================================
// ⚡ FINAL TAKEAWAYS
// ============================================
/*
1️⃣ FIRST-CLASS FUNCTIONS
   - Functions are treated as values.
   - Can be assigned, passed, returned, and stored.

2️⃣ HIGHER-ORDER FUNCTIONS
   - Accept or return other functions.
   - Core of functional programming in JS.

3️⃣ BUILT-IN HOFs
   - map(), filter(), reduce(), forEach(), find(), sort()

4️⃣ BENEFITS
   - Code reusability
   - Abstraction & composability
   - More declarative, expressive code
   - Easier testing & debugging

💡 Summary:
Functions are first-class in JS — that’s what makes higher-order
functions and functional programming patterns possible.
*/
