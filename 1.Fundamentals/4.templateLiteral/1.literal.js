// ============================================
// ⚡ QUICK REVISION: LITERALS IN JAVASCRIPT
// ============================================
// A "literal" is a fixed value written directly in code.
// It represents data itself — not a variable or expression.
//
// 🧠 Concept:
// Literals are direct values like numbers, strings, booleans, arrays, objects, etc.
// They are the most basic building blocks of JavaScript data.

// --------------------------------------------
// 🔹 NUMBER LITERALS
// --------------------------------------------
let count = 10; // integer literal
let pi = 3.14159; // floating-point literal
let negative = -5; // negative number
console.log(count, pi, negative); // 10 3.14159 -5

// --------------------------------------------
// 🔹 STRING LITERALS
// --------------------------------------------
let name = 'Alice';
let msg = 'Hello World';
let template = `Hi, ${name}!`; // template literal using backticks
console.log(name, msg, template); // Alice Hello World Hi, Alice!

// --------------------------------------------
// 🔹 BOOLEAN LITERALS
// --------------------------------------------
let isOnline = true;
let isAdmin = false;
console.log(isOnline, isAdmin); // true false

// --------------------------------------------
// 🔹 NULL & UNDEFINED LITERALS
// --------------------------------------------
let empty = null; // null literal (intentional empty value)
let notDefined; // undefined literal (default value)
console.log(empty, notDefined); // null undefined

// --------------------------------------------
// 🔹 OBJECT LITERAL
// --------------------------------------------
const user = {
  name: 'Bob',
  age: 25,
  active: true,
};
console.log(user.name, user.age); // Bob 25

// --------------------------------------------
// 🔹 ARRAY LITERAL
// --------------------------------------------
const colors = ['red', 'green', 'blue'];
console.log(colors[0]); // red

// --------------------------------------------
// 🔹 REGULAR EXPRESSION (RegExp) LITERAL
// --------------------------------------------
const pattern = /hello/gi; // matches "hello" globally, case-insensitive
console.log('Hello World'.match(pattern)); // ["Hello"]

// --------------------------------------------
// 🔹 TEMPLATE LITERAL (STRING INTERPOLATION)
// --------------------------------------------
const language = 'JavaScript';
const sentence = `We are learning ${language} literals.`;
console.log(sentence); // We are learning JavaScript literals.

// --------------------------------------------
// ⚡ DIFFERENCE EXAMPLE
// --------------------------------------------
let x = 5; // 5 is a number literal
let y = x + 10; // (x + 10) is an expression using literals
console.log(y); // 15

// --------------------------------------------
// ✅ QUICK SUMMARY
// --------------------------------------------
/*
🧩 A literal is a direct, hard-coded value in JavaScript.
They define data without computation or variables.

| Type          | Example                 |
|----------------|-------------------------|
| Number         | 42, 3.14, -10          |
| String         | "Hello", 'World'       |
| Boolean        | true, false            |
| Null           | null                   |
| Undefined      | undefined              |
| Object         | { name: "Bob" }        |
| Array          | [1, 2, 3]              |
| RegExp         | /abc/g                 |
| Template       | `Hi, ${name}`          |

💡 In short:
Literals = direct values in code (fixed data, not computed).
------------------------------------------------------------
*/
