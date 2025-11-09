/*
===============================================================================
🧠 JavaScript — Functions Master Notes
===============================================================================

This single-file reference contains concise revision notes and runnable examples
for:
  1) Function Definitions (declarations)
  2) Function Expressions
  3) Arrow Functions (basic + advanced)
  4) Practical examples and practice tasks

Save this as: functions-master-notes.js

All explanatory text is in multiline comments /* */
// so you can run the file safely.

/* ===========================================================================
   SECTION 1 — Function Definitions (Declarations)
   =========================================================================== */

/*
A function definition (declaration) describes what a function does and how it
behaves when called.

Syntax:
  function functionName(parameters) {
    // code
    return value; // optional
  }
*/

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Alice')); // "Hello, Alice!"

/* Key parts:
   - function keyword
   - function name
   - parameters
   - function body
   - optional return
*/

/* ===========================================================================
   SECTION 2 — Function Expressions
   =========================================================================== */

/*
Function Expression: a function created as part of an expression, often
assigned to a variable. Created only when execution reaches that line (not
hoisted like declarations).
*/

// Example: anonymous function expression assigned to a const
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5

/* Differences: Declaration vs Expression
   - Declaration: hoisted, available before definition
   - Expression: created at runtime when interpreter reaches it
*/

// Conditional creation example using expression
let welcome;
let age = 20; // try changing to 16 and test
if (age < 18) {
  welcome = function () {
    console.log('Hello!');
  };
} else {
  welcome = function () {
    console.log('Greetings!');
  };
}
welcome();

/* ===========================================================================
   SECTION 3 — Arrow Functions (Basics + Advanced)
   =========================================================================== */

/*
Arrow functions provide a concise syntax and different behavior for `this`.

Basic:
  let func = (a, b) => a + b; // implicit return for single expression

Rules:
  - Omit parentheses for 1 parameter: x => x * 2
  - Use () for zero or multiple params: () => 42, (a, b) => a + b
  - Use { } for multiline bodies and explicit return
  - Arrow functions have no own `this`, `arguments`, `super`, or `new.target`
*/

// Basic examples
const sumArrow = (a, b) => a + b;
console.log(sumArrow(4, 6)); // 10

const double = (n) => n * 2;
console.log(double(5)); // 10

const sayHi = () => console.log('Hello!');
sayHi();

// Multiline arrow function
const complexSum = (a, b) => {
  const res = a + b;
  return res;
};
console.log(complexSum(7, 8)); // 15

/* Arrow functions and `this` (lexical `this`):
   Arrow functions inherit `this` from the surrounding scope — useful for
   callbacks where we want to retain the outer `this` value.
*/

const group = {
  title: 'Developers',
  members: ['Alice', 'Bob', 'Charlie'],
  showList() {
    this.members.forEach((member) => console.log(this.title + ': ' + member));
  },
};
group.showList();

/* Arrow functions cannot be used as constructors (no `new`).
   They also don't have their own `arguments` object — use rest params.
*/

// Example: rest params in arrow function
const addAll = (...nums) => nums.reduce((s, n) => s + n, 0);
console.log(addAll(1, 2, 3, 4, 5)); // 15

/* ===========================================================================
   SECTION 4 — Quick Comparison Cheat Sheet
   =========================================================================== */

/*
| Feature              | Function Declaration | Function Expression        | Arrow Function
|----------------------|----------------------|----------------------------|------------------
| Syntax               | function f() {}      | let f = function() {}     | let f = () => {}
| Hoisted?             | Yes                  | No                         | No
| Own `this`           | Yes                  | Yes                        | No (lexical)
| Own `arguments`      | Yes                  | Yes                        | No
| Can be constructor   | Yes (with new)       | Yes (if not arrow)         | No
*/

/* ===========================================================================
   SECTION 5 — Practical Examples & Patterns
   =========================================================================== */

// Callback example using function expression
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// usage with anonymous function expressions
// Uncomment to test in browser environment
// ask("Do you agree?", function() { alert("You agreed."); }, function() { alert("You canceled."); });

// Same with arrow functions (concise)
// ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled."));

// Currying example (returns function)
const curryAdd = (a) => (b) => a + b;
const add5 = curryAdd(5);
console.log(add5(10)); // 15

/* ===========================================================================
   SECTION 6 — Practice Tasks (with answers)
   =========================================================================== */

// Task 1: Convert to arrow function
function square(num) {
  return num * num;
}
const squareArrow = (num) => num * num;
console.log(squareArrow(6)); // 36

// Task 2: Use arrow function with setTimeout
setTimeout(() => console.log('Executed after 1 second (timeout)'), 1000);

// Task 3: Map and arrow
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2,4,6,8]

// Task 4: Lexical `this` demo
const person = {
  name: 'Sam',
  showNameDelayed() {
    setTimeout(() => console.log('Name:', this.name), 500);
  },
};
person.showNameDelayed();

// Task 5: Multiline arrow
const fullname = (first, last) => {
  const f = `${first} ${last}`;
  return f.toUpperCase();
};
console.log(fullname('Alan', 'Turing'));

// Task 6: Arrow returning object
const createUser = (name, age) => ({ name, age });
console.log(createUser('Eve', 22));

// Task 7: Calculate function (arrow)
const calculate = (a, b, op) => {
  switch (op) {
    case 'add':
      return a + b;
    case 'sub':
      return a - b;
    case 'mul':
      return a * b;
    case 'div':
      return b !== 0 ? a / b : 'Error: divide by zero';
    default:
      return 'Unknown operation';
  }
};
console.log(calculate(12, 3, 'div'));

/* ===========================================================================
   SECTION 7 — Notes & Tips
   =========================================================================== */

/*
- Prefer function declarations for general-purpose, named functions.
- Use function expressions when creating functions conditionally or when
  treating them as values (callbacks, event handlers, etc.).
- Use arrow functions for short callbacks and when you need lexical `this`.
- Avoid arrow functions for object methods where you need your own `this`.

Keep this file in your study folder and run snippets in Node/browser console
to experiment. Happy learning! 🚀
*/

// End
