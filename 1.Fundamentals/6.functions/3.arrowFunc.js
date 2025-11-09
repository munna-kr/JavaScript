/*
===========================================
🧠 JavaScript Notes — Arrow Functions (Complete)
===========================================

Arrow functions provide a concise way to write small functions.
They are great for short, simple logic — and they handle `this`
differently than normal functions.
*/

/*
------------------------------------------------
🔹 1. Basic Syntax
------------------------------------------------
let func = (arg1, arg2, ..., argN) => expression;
Equivalent to:
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
*/

let sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5

// One parameter — parentheses optional
let double = (n) => n * 2;
console.log(double(4)); // 8

// No parameters — use empty parentheses
let sayHi = () => console.log('Hello!');
sayHi();

/*
------------------------------------------------
🔹 2. Multiline Arrow Functions
------------------------------------------------
Use curly braces `{}` for multiple statements and add `return` explicitly.
*/

let complexSum = (a, b) => {
  let result = a + b;
  return result;
};
console.log(complexSum(5, 7)); // 12

/*
------------------------------------------------
🔹 3. Arrow Functions Have No "this"
------------------------------------------------
Arrow functions do not have their own `this`. They use the `this`
value from their surrounding lexical scope.
*/

let group = {
  title: 'Developers',
  members: ['Alice', 'Bob', 'Charlie'],
  showList() {
    this.members.forEach((member) => console.log(this.title + ': ' + member));
  },
};
group.showList();
/*
If we used a normal function inside forEach, `this` would be undefined.
Arrow functions fix that by inheriting `this` from the outer scope.
*/

/*
------------------------------------------------
🔹 4. Arrow Functions Can’t Be Used with "new"
------------------------------------------------
Arrow functions don’t have `this`, so they can’t be used as constructors.
*/

const User = (name) => {
  this.name = name;
};
// new User("John"); // ❌ Error: User is not a constructor

/*
------------------------------------------------
🔹 5. Arrow Functions vs bind(this)
------------------------------------------------
Arrow functions are like using .bind(this) automatically.
They don’t rebind `this` when called.
*/

/*
------------------------------------------------
🔹 6. Arrow Functions Have No "arguments"
------------------------------------------------
They don’t have their own `arguments` object.
Use rest parameters instead: (...args)
*/

function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function greet(name) {
  console.log('Hello, ' + name);
}

let greetLater = defer(greet, 2000);
greetLater('Alice'); // "Hello, Alice" after 2s

/*
------------------------------------------------
✅ 7. Summary
------------------------------------------------
Arrow functions:
  ✔ Don’t have their own `this`
  ✔ Don’t have their own `arguments`
  ✔ Can’t be called with `new`
  ✔ Don’t have `super`
  ✔ Are great for short, context-free functions

💡 Use them when:
  - You want concise, readable one-liners
  - You need lexical `this` (inherit from parent)
  - You’re writing callbacks or array methods

Avoid them when:
  - You need your own `this` (object methods, constructors)
  - You need access to `arguments`
------------------------------------------------
*/

/*
================================================
🎯 PRACTICE TASKS — Arrow Functions
================================================
*/

// ✅ Task 1: Convert to Arrow Function
// Convert the below regular function into an arrow function.
function square(num) {
  return num * num;
}
// 👉 Your answer:
const squareArrow = (num) => num * num;
console.log(squareArrow(5)); // 25

// ✅ Task 2: Use arrow function with setTimeout
setTimeout(() => console.log('Executed after 1 second'), 1000);

// ✅ Task 3: Arrow Function with Array Methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// ✅ Task 4: Lexical `this` demo
const user = {
  name: 'Sam',
  showNameDelayed() {
    setTimeout(() => {
      console.log('User name:', this.name);
    }, 1000);
  },
};
user.showNameDelayed(); // "User name: Sam"

// ✅ Task 5: Write a multiline arrow function
const fullName = (first, last) => {
  let complete = `${first} ${last}`;
  return complete.toUpperCase();
};
console.log(fullName('Ada', 'Lovelace')); // "ADA LOVELACE"

// ✅ Task 6: Rest parameter in arrow functions
const addAll = (...nums) => nums.reduce((sum, n) => sum + n, 0);
console.log(addAll(1, 2, 3, 4, 5)); // 15

// ✅ Task 7: Arrow function as callback
let students = ['John', 'Jane', 'Mark'];
students.forEach((s) => console.log('Student:', s));

// ✅ Task 8: Conditional arrow function
const checkAge = (age) => (age >= 18 ? 'Adult' : 'Minor');
console.log(checkAge(20)); // "Adult"

// ✅ Task 9: Arrow function returning object
const createUser = (name, age) => ({ name, age });
console.log(createUser('Eve', 22)); // { name: 'Eve', age: 22 }

// ✅ Task 10: Challenge
// Create an arrow function `calculate` that takes (a, b, operation)
// and performs add, subtract, multiply, or divide based on the operation string.
const calculate = (a, b, operation) => {
  switch (operation) {
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
console.log(calculate(10, 5, 'mul')); // 50

/*
================================================
✅ End of Notes
================================================
💡 Tip: Keep practicing by rewriting normal functions into arrow functions
and testing behavior with `this` inside objects.
*/
