// ===> DIFFERENT WAYS TO CREATE A FUNCTION <===
/*
1️⃣ Function Declaration
 
→ The most common and traditional way to define a function.
✅ Syntax:
*/
function sayHello(name) {
  return `Hello, ${name}!`;
}
/*
📘 Notes:
> Declared with the keyword function followed by a name.
> Can be called before its declaration because it is hoisted.
> Hoisted means it’s loaded into memory during the compilation phase.
> Suitable for defining general-purpose or reusable functions.
*/
// example:
greet(); // ✅ Works due to hoisting
function greet() {
  console.log('Hello!');
}

/*
2️⃣ Function Expression 
*/

/*
3️⃣ Arrow Function
*/
