/*
=======> Short-circuiting <==========
It refers to the behavior of logical operators (&& and ||)
that can "short-circuit" the evaluation of an expression
when the result is already determined by the first operand.
*/

/* ===> Logical OR (||) Short-Circuiting <===

--> The || operator evaluates operands from left to right 
and returns the first truthy value it encounters. 

--> If none of the operands are truthy, it returns the last value.
*/

let value1 = true || 23;
let value2 = 0 || 'hello';
let value3 = 12 || null;
let value4 = undefined || 'code';
let value5 = null || 0 || undefined;
let value6 = null || 0 | '' || 'Hello world' || undefined;
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
console.log(value5);
console.log(value6);

// ==> Default Values
const user = {
  age: 30,
  firsName: '',
  lastName: '',
  nickName: 'CoderGuy',
};
// ==> Getting the first truthy value from a list of variables or expressions
console.log(user.firsName || user.lastName || user.nickName || 'Anonymous');

// ==> Avoiding Error, in case if we dont know specific property belongs to object or not
console.log(user.location || 'Location is not mentioned for this user..');

// ==> Conditional Execution
if (user.age > 20) {
  console.log('you are eligible for this scheme');
}
// above stament can also be written like this
user.age > 20 && console.log('you are eligible for this scheme');
// But, Don’t replace if with || or &&, everywhere

//>>
const isHuman = true;
isHuman && console.log('Scientific name of Human is Homo Sapiens');

/* 
===> Logical AND (&&) Short-Circuiting <===
--> only true if both operands are true
*/
// evaluation stops as soon as the first falsy value is encountered
// if the first operand is truthy, it evaluates the second operand and returns it.

let value10 = 12 && 0 && 20; // 0
let value11 = 'hello' && null; // null
let value12 = 'hello' && 20; // 20
