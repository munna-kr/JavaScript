/*
===============================================================================
🧠 JavaScript — Function Basics (Topic-wise Revision Notes)
===============================================================================
Compact, runnable notes for quick revision of JavaScript Function Basics.
*/
/*
==> FUNCTION <== 
==> it is reusuable block of codes, that is designed to perform specific task

==> Define once use many times...
==> DRY: Don't Repeat Yourself
*/

/* ===========================================================================
1️⃣ Function Declaration
--------------------------------------------------------------------------- */
// A function is declared using the `function` keyword, followed by the name,
// parentheses (for parameters), and a body in curly braces.

function showMessage() {
  alert('Hello everyone!');
}
showMessage(); // Executes the function body.

// Functions help avoid code duplication. You can call them anywhere instead
// of repeating logic.

/* ===========================================================================
2️⃣ Local Variables
--------------------------------------------------------------------------- */
// Variables declared inside a function are local to that function.
// They are not accessible outside.

function localExample() {
  let message = "Hello, I'm JavaScript!";
  alert(message);
}
localExample();
// alert(message); // ❌ Error: message is not defined.

/* ===========================================================================
3️⃣ Outer and Global Variables
--------------------------------------------------------------------------- */
// Functions can access variables defined outside them (outer scope).
// If a local variable with the same name exists, it shadows the outer one.

let userName = 'John';
function showUser() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showUser(); // “Hello, John”

// Shadowing example:
let person = 'John';
function greetPerson() {
  let person = 'Bob';
  alert('Hello, ' + person); // Bob
}
greetPerson();
alert(person); // John — outer variable unchanged.

// Variables declared outside functions are global. Minimize global usage.

/* ===========================================================================
4️⃣ Parameters
--------------------------------------------------------------------------- */
// Functions can accept inputs called parameters. Values passed at call time
// are arguments.

function showMessage(from, text) {
  alert(from + ': ' + text);
}
showMessage('Ann', 'Hello!');

// Parameters receive copies of values. Changing primitives inside the function
// does not affect the outer variable.

/* ===========================================================================
5️⃣ Default Parameter Values
--------------------------------------------------------------------------- */
// Parameters default to `undefined` if no argument is provided.
// You can assign default values.

function greet(from, text = 'no text given') {
  alert(from + ': ' + text);
}
greet('Ann'); // “Ann: no text given”

// Default expressions only evaluate when the argument is missing or undefined.
// Older methods (pre-ES6):
function legacyDefault(text) {
  if (text === undefined) {
    text = 'no text given';
  }
  alert(text);
}

// Or via logical OR (⚠️ may override falsy values):
// text = text || 'no text given';

// Modern alternative using nullish coalescing:
function greetModern(text) {
  text = text ?? 'Guest';
  alert(text);
}

/* ===========================================================================
6️⃣ Returning a Value
--------------------------------------------------------------------------- */
// Functions return results using `return`.
// Once `return` runs, execution stops.

function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert(result); // 3

// Example with conditional returns:
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

// If no return value provided, the function returns `undefined`.
function doNothing() {}
console.log(doNothing()); // undefined

// ⚠️ Don’t insert newline after return — it causes automatic semicolon insertion.
// Wrong:
// return
//   (a + b); // returns undefined
// Correct:
// return (a + b);

/* ===========================================================================
7️⃣ Naming a Function
--------------------------------------------------------------------------- */
// Function names should clearly describe their action.
// Common prefixes:
//   show… – displays something
//   get… – returns a value
//   calc… – performs a calculation
//   create… – builds something
//   check… – verifies and returns a boolean

function getAge() {
  return 25;
}
function showMessageBox() {
  alert('Hello');
}
function calcSum(a, b) {
  return a + b;
}
function checkPermission(role) {
  return role === 'admin';
}

// Good functions do one thing. Avoid mixing unrelated logic.

/* ===========================================================================
8️⃣ Functions as Comments (Readability)
--------------------------------------------------------------------------- */
// Functions improve code readability and structure.
// Example:
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) alert(i);
  }
}

// Splitting logic into smaller named functions improves clarity.

/* ===========================================================================
9️⃣ Summary / Best Practices
--------------------------------------------------------------------------- */
// ✅ Function declaration syntax: function name(params) { … }
// ✅ Parameters copy values passed during call.
// ✅ Local variables are accessible only inside the function.
// ✅ Functions can access outer variables, but not vice versa.
// ✅ If no return, function yields undefined.
// ✅ Use parameters and locals; avoid modifying outer variables unnecessarily.
// ✅ Use clear, action-oriented naming (show, get, calc, check, etc.).
// ✅ Keep functions small, focused, and single-purpose.

// ✅ Example recap:
function exampleSummary(a, b = 5) {
  let sum = a + b;
  return sum;
}
console.log(exampleSummary(3)); // 8

/* ===========================================================================
END — Function Basics Revision Notes
============================================================================ */
