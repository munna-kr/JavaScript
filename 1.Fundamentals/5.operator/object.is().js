'use strict';

// ====> Object.is(); <=====
/*
> Object.is() is built-in static method.
> it checks if two values are the same.
> introduced in ES6(2015).
> similar to ===, 
but handles NaN and signed zeros(+0 -0) differently.

> return true if both values are same, otherwise false.
*/

// --> COMPARISON RULES:

// 1. Both are undefined -> true
let winner;
let looser;
console.log(Object.is(winner, looser)); //true

//
// 2. Both are null -> true
console.log(Object.is(null, null));

//
// 3. Both are true or both are false -> true
console.log(Object.is(true, true));

//
// 4.Both are strings with the same characters in the same order ->true
console.log(Object.is('Hello', 'Hello'));

//
// 5.Both are the same object reference (same memory) -> true.
// value inside the object is not checked
const obj1 = { id: '738D' };
const obj2 = { id: '738D' };
const obj3 = obj1;
console.log(Object.is(obj1, obj2)); //false
console.log(Object.is(obj1, obj3)); // true

//
// 6. Both are BigInts with the same numeric value -> true
console.log(Object.is(9876543210n, 9876543210n)); //

//
// 7. Both are Symbols referring to the same symbol value ->true

//
/* 8.Both are numbers and:
> both +0
> both -0
> both NaN
> or both have the same numeric value and are not NaN -> true
*/
console.log(Object.is(12, 12)); //true
console.log(Object.is(98 % 2, 0)); //true
console.log(Object.is(+0, -0)); //false
console.log(Object.is(+0, +0)); //true
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(NaN, 0 / 0)); //true
