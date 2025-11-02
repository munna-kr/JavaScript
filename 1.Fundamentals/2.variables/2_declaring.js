// let, const, var

// var: it's earlier style of declaring varibale in JavaScript
// const: use to declare variable, which is immutable.

// let: use to declre variable, which is mutable.
// ==> Block-scoped (only accessible within the block {})
// ==> Can be updated but not re-declared in the same scope
// ==>
var topic = 'Area of circle';
console.log(topic);

const PI = 3.14;

let radius = 3;
let area = PI * radius ** 2;
console.log(area);

//================= Let
// let: block scoped
// -- 1
{
  let number = 10;
}
// console.log(number); // ReferenceError
// Accessing the variable before its declaration causes a ReferenceError

// -- 2
{
  let abc = 123;
}
let abc = 111;
console.log(abc); // output: 111, ther's not any relation between both variable 'abc',
// both are different

// let : can be updated
//       can't be redeclared in same scope
// -- 3
let user = 'jack';
user = 'smith';

// let user = 'john'; // SyntaxError

//=============== constant
//==> Just like let, const is block-scoped,
//==> only available inside the {} where it's declared.

//==> must assign a value when declaring a const variable.
// const valueX; // SyntaxError
const valueY = 190;

//==> Cannot Be Reassigned
const valueZ = 200;
// valueZ = 300; // TypeError: assignment to constant variable.

//==> Objects and Arrays declared with 'const' keyword, can Be Modified:
// becaue they are not primitive data type
// and 'const' only make immutable to primitve data type
