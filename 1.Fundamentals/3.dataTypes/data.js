'use strict';
//====================================//
//==> Data type: kind of value that a variale can hold 

// create a variable and assign a 'string' value
let message = 'Hello';

// re-assigning the value of same variable with 'numeric' value
message = 10;

// Programming languages that allow such things are called dynamically typed
// and JavaScript is dynamically typed programming language (unlike C/C++, which is statically typed)
// no need to specify data type of variable while declaring 

/*
=====> DATATYPES IN JS <=====
---> There are eight basic data types in JS

    ==> Seven primitive data types:
        1. 'number' -----> for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
        2. 'bigint' -----> for integer numbers of arbitrary length.
        3. 'string' -----> for strings. A string may have zero or more characters, there’s no separate single-character type.
        4. 'boolean' ----> for true/false.
        5. 'null' -------> for unknown values – a standalone type that has a single value null.
        6. 'undefined' --> for unassigned values – a standalone type that has a single value undefined.
        7. 'symbol ------> for unique identifiers.

   ==> And one non-primitive data type:
       8. object ---> for more complex data structures.

--> 
*/

// ====> 1. NUMBER <====
let integerNumber = 10;
let floatingNumber = 19.34;
console.log(typeof integerNumber, typeof floatingNumber);

// Infinity : division by zero result in infinity
console.log(19 / 0);

// NaN(Not-a-Number) : computational error result in NaN
let nanVariable = 'Hello' / 20;
console.log(nanVariable);
// Any mathematical operation with NaN results in NaN
// but, NaN**0 gives 1
// as we know in maths, zero as power to any things result in 1
// Nan === Nan (false)


// =====> 2. BIGINT <=====
/*
---> The “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991),
      or less than -(2^53-1) for negatives.
---> integers greater than (2^53-1) can’t be stored at all in the “number” type
such huge numbers are stored using bigint
---> A BigInt value is created by appending n to the end of an integer:
*/
let bigInt = 1234567890123456789012345678901234567890n;

// ====> 3. STRINGS <====

/* In JavaScript, there are 3 types of quotes.
    Double quotes: "Hello".
    Single quotes: 'Hello'.
    Backticks: `Hello`.
   
    There’s practically no difference between single and double quotes in JavaScript.
    Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
*/
console.log(`This is ${10} and this is ${15}`);

// ========> 4. BOOLEAN (logical type) <========
/*
---> The boolean type has only two values: true and false
*/
let isEven = 10 % 2 === 0;
console.log(isEven);

// =========> 5.THE 'null' VALUE <=========
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let ghost = null;
console.log(ghost);

// ========> 6.THE 'undefined' VALUE <======
//---> The meaning of undefined is “value is not assigned”.
//---> If a variable is declared, but not assigned, then its value is undefined:
let score;
console.log(score);

//=====> 7.SYMBOLS and 8.OBJECTS
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever).
// In contrast, objects are used to store collections of data and more complex entities.
// The symbol type is used to create unique identifiers for objects.

// ========> typeof OPERATOR <========
// The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

//A call to typeof x returns a string with the type name:
typeof undefined; // "undefined"

typeof 0; // "number"

typeof 1000n; // "bigint"

typeof true; // "boolean"

typeof 'hello'; // "string"

typeof Symbol('id'); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

console.log(typeof Math);

// The Math object provides mathematical operations

// The typeof null returns "object" due to an early JavaScript error,
// though null is not an object but a special value with its own type.

// The typeof alert returns "function" because alert is a function,
// though functions belong to the object type.
// This behavior, originating from JavaScript's early days, is technically incorrect but often convenient in practice.
