/*
===============================================================================
🧠 FUNCTIONS REVISION MASTER — Single-file Quick Reference (Do NOT edit originals)
===============================================================================
This consolidated revision file combines topic-wise notes and runnable examples
from three existing study files (Function basics, Function expressions/declarations,
and Arrow functions). It is a separate file so the originals remain unchanged.

Save as: functions-revision-master.js

Structure:
  1. Function Declaration (basics, hoisting)
  2. Local / Outer / Global variables
  3. Parameters / Defaults
  4. Returning values & early return
  5. Function Expressions vs Declarations
  6. Arrow Functions (basic + advanced)
  7. Quick examples & common patterns
  8. Small practice tasks

Everything is commented and contains short runnable snippets.
===============================================================================
*/

/* ===========================================================================
1) FUNCTION DECLARATION (BASICS & HOISTING)
--------------------------------------------------------------------------- */
// Declaration syntax: function name(params) { /* body */ }
function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello('World'));

// Hoisting: function declarations are available before they appear in code.
greet(); // works because of hoisting
function greet() {
  console.log('Hello from hoisted function');
}

/* ===========================================================================
2) LOCAL, OUTER (ENCLOSED) & GLOBAL VARIABLES
--------------------------------------------------------------------------- */
// Local variables: visible only inside function
function localExample() {
  let msg = 'Local message';
  console.log(msg);
}
localExample();
// console.log(msg); // ReferenceError if uncommented

// Outer variables: functions can read/modify variables from outer scope
let outer = 'outer value';
function readOuter() {
  console.log('Read outer:', outer);
}
readOuter();

// Shadowing: a local variable with same name hides the outer one
let person = 'Alice';
function shadowDemo() {
  let person = 'Bob';
  console.log('Inside:', person); // Bob
}
shadowDemo();
console.log('Outside:', person); // Alice

/* ===========================================================================
3) PARAMETERS & ARGUMENTS
--------------------------------------------------------------------------- */
// Parameters are placeholders in function definition; arguments are actual values.
function showMessage(from, text) {
  console.log(from + ': ' + text);
}
showMessage('Ann', 'Hi!');

// Primitives are passed by value (copy); objects are passed by reference (the
// reference copy allows modification of object properties)
function modifyPrimitive(x) {
  x = x + 1;
}
let a = 1;
modifyPrimitive(a);
console.log('primitive after:', a); // 1

function modifyObject(obj) {
  obj.name = 'Changed';
}
let o = { name: 'Original' };
modifyObject(o);
console.log('object after:', o); // { name: 'Changed' }

/* ===========================================================================
4) DEFAULT PARAMETERS
--------------------------------------------------------------------------- */
// Default values used when argument omitted or explicitly undefined
function greet(from, text = 'no text given') {
  console.log(`${from}: ${text}`);
}
greet('Ann'); // Ann: no text given

// Default expression evaluated only when parameter missing
function defaultEvaluator(a = expensive()) {
  return a;
}
function expensive() {
  console.log('Expensive evaluated');
  return 42;
}
defaultEvaluator(10); // no expensive log
defaultEvaluator(); // expensive evaluated, returns 42

// Modern nullish coalescing for safer defaults
function greetModern(name) {
  name = name ?? 'Guest';
  console.log(name);
}
greetModern('Sam');
greetModern(null);

/* ===========================================================================
5) RETURNING VALUES & EARLY RETURN
--------------------------------------------------------------------------- */
function sum(a, b) {
  return a + b;
}
console.log('sum:', sum(2, 3));

// Early return / guard clauses
function showMovie(age) {
  if (!checkAge(age)) return; // early exit
  console.log('Showing movie');
}
function checkAge(age) {
  return age >= 18 || confirm('Parent permission?');
}

// No return => undefined
function nothing() {}
console.log(nothing()); // undefined

/* ===========================================================================
6) FUNCTION EXPRESSIONS VS DECLARATIONS
--------------------------------------------------------------------------- */
// Declaration (hoisted): function f() {}
function declared() {
  console.log('declared');
}
// Expression (created at runtime): const f = function() {}
const expressed = function () {
  console.log('expressed');
};
expressed();

// Use expression when you need conditional creation or to pass as value
let flag = true;
let worker;
if (flag) {
  worker = function () {
    console.log('worker A');
  };
} else {
  worker = function () {
    console.log('worker B');
  };
}
worker();

/* ===========================================================================
7) ARROW FUNCTIONS — SYNTAX & BEHAVIOR
--------------------------------------------------------------------------- */
// Basic arrow syntax
const add = (x, y) => x + y;
console.log('add:', add(4, 5));

// Single parameter parentheses optional
const double = (n) => n * 2;
console.log('double:', double(6));

// No params: use ()
const sayHi = () => console.log('Hi!');
sayHi();

// Multiline arrow needs braces and explicit return
const complex = (a, b) => {
  const r = a + b;
  return r * 2;
};
console.log('complex:', complex(2, 3));

// Arrow functions have NO own `this` or `arguments` and cannot be used as constructors
const obj = {
  name: 'Sam',
  show() {
    // arrow uses parent's `this` — good for callbacks
    setTimeout(() => console.log('Name:', this.name), 200);
  },
};
obj.show();

// Example where arrow prevents `this` loss
let group = {
  title: 'Team',
  members: ['A', 'B'],
  show() {
    this.members.forEach((m) => console.log(this.title + ': ' + m));
  },
};
group.show();

/* ===========================================================================
8) PRACTICAL PATTERNS & EXAMPLES
--------------------------------------------------------------------------- */
// Callback example
function ask(question, yes, no) {
  // In a browser you might use confirm(); here we'll simulate with true
  const answer = true; // simulate
  if (answer) yes();
  else no();
}
ask(
  'Agree?',
  () => console.log('Agreed'),
  () => console.log('Canceled')
);

// Currying
const curryAdd = (a) => (b) => a + b;
console.log('curryAdd 5+3:', curryAdd(5)(3));

// Memoize (simple)
const memoize = (fn) => {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const res = fn(...args);
    cache.set(key, res);
    return res;
  };
};
const slow = (n) => {
  let s = 0;
  for (let i = 0; i < n; i++) s += i;
  return s;
};
const fast = memoize(slow);
console.log('memoized:', fast(1000));
console.log('memoized cached:', fast(1000));

/* ===========================================================================
9) QUICK PRACTICE TASKS (SHORT)
--------------------------------------------------------------------------- */
// 1. Convert to arrow: function square(n){return n*n;}
const square = (n) => n * n;
console.log('square 4:', square(4));

// 2. Arrow + setTimeout
setTimeout(() => console.log('timeout demo'), 300);

// 3. Map doubled
console.log([1, 2, 3].map((x) => x * 2));

// 4. Return object from arrow: use parentheses
const make = (n) => ({ value: n });
console.log('make:', make(7));

// 5. Calculate (challenge)
const calculate = (a, b, op) =>
  op === 'add'
    ? a + b
    : op === 'sub'
    ? a - b
    : op === 'mul'
    ? a * b
    : op === 'div'
    ? b !== 0
      ? a / b
      : null
    : null;
console.log('calc 6*7:', calculate(6, 7, 'mul'));

/* ===========================================================================
10) BEST PRACTICES (ONE-LINERS)
--------------------------------------------------------------------------- */
// - Keep functions small and single-purpose.
// - Prefer named declarations for main logic; use expressions for callbacks.
// - Use defaults and ?? for safe parameter handling.
// - Use arrow functions for concise callbacks and lexical `this`.
// - Avoid global variables; prefer module scope / closures.

/* ===========================================================================
END — Functions Revision Master
============================================================================ */
