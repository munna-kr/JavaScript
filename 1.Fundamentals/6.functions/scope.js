//===> SCOPE <===
// 1 - Local variables
// Variables declared inside a function (e.g., let message = …;)
// are accessible only within that function.
// They are called local variables.

function userName() {
  const message = "I'm inside the function";
}
// trying to access the variable outside the function
// throw an error
// console.log(message); // not accessible here

// 2 - Global variables
// Variables declared outside of any function are called global variables.
// They are accessible from anywhere in the code.
// if a variable with same name inside the function, it will override the global variable
let globalVar = 'I am global variable';
console.log(globalVar);

// variable inside the function, with same name
function displayVar() {
  let globalVar = 'Global-inside function';
  console.log(globalVar); // it will override the global variable that is outside the function
}
displayVar(); // "Global-inside function" will be printed

// 3 - Block scope
// Variables declared inside a block {...}
// are accessible only within that block.

if (1) {
  const job = 'I am Astronaut';
}
// trying to access the variable outside the block
// throw an error
// console.log(job); // not accessible here
