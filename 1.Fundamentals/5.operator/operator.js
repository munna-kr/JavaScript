'use strict'

// Operators are special symbols used to perform operations on variables and values.
// Example: +, -, *, ==, &&, etc.

// 1 ==> ARITHMETIC OPERATORS
let a = 10, b = 2;

a + b;  // addition

a - b;  // subtraction

a * b;  // multiplication

a / b;  // division

a ** b; // exponentiation

a % b; // remainder when divided

a++ // increment by 1
// (a = a + 1)

a-- // decrement by 1
// (a = a - 1)


// 2 ==> ASSGNMENT OPERATORS
// =
let x = 9; // assign to 9
x += 10;
x = x + 10;

// -=, *=, /=, %=, **=


// 3 ==> COMPARISON OPERATORS

let c = 8;

// equal (loose)
c == '8'; // true

// equal (strict)
c === '8' // false

// !=, !==, <, >, >=, <=


// 4 ==> LOGICAL OPERATORS

// && AND : return true if both operand are true 
let ab = 10
ab > 5 && ab === 10; // true
ab < 8 && ab === 10 // false

// || OR : return true if atleast one operand is true
ab > 5 || ab > 20; // true
ab > 12 || ab < 5; // false 

// ! NOT: reverse the value 


// ===> falsy value
// false, 0, "" (empty string), null, undefined, NaN



// 5==> STRING OPERATOR
// + used to concatenate strings 
let fullName = 'jack' + " " + 'Ryan';


// 6==> TYPE OPERATORS
// typeof : return type of values
let lastName = 'ryan';
let typeofLastName = typeof lastName // string type

// ======================
// ==> BITWISE OPERATORS 
// ==> performs operations on bit-level 

let d = 5 & 3 // 1
// 5: 0101 , 3: 0011
// 0101 & 0011 = 0001
