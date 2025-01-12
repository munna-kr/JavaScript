// SCOPE
/*
==> Scoping : How our program's variables are organised and accessed.
"where do variables live ?" or "Where can we access a certain variable,
and where not ?"

==> Scope: Space or enviroment in which a certain variable is declared (variable environments in case of functions). 

==> Lexical scoping: Scoping is controlled by placement of function and blocks in the code

==> Scope of a variable: Region of our code where a certain variable can be accessed 

==> Types of Scope:
1. Global scope
2. Function scope
3. Block scope
4. Module scope
==> 
*/

// ==> Global scope: variables declared outside of any function or block belong to the global scope
// --> it is accessible from anywhere in the code
const globalVar = 'I am global variable';

function displayVar() {
  console.log(globalVar); // accessible here
}
displayVar();

/*
==> Function scope: variable declared inside a function
--> accessible inside the function only, not outside
--> also known as local scope
*/
function userName() {
  const message = "I'm inside the function";
}

console.log(message); // not accessible here

/*
==> Block scope: variable are accessible only inside block, however this 
only applies to  let and const variable.
--> Functions are also block scoped (only in strict mode)
*/
if (1) {
  const job = 'I am Astronaut';
}
console.log(job); // not accessible here
