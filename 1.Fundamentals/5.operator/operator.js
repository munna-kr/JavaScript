'use strict';

// Operators are special symbols used to perform operations on variables and values.
// Example: +, -, *, ==, &&, etc.

// 1 ==> ARITHMETIC OPERATORS
let a = 10,
  b = 2;

a + b; // addition

a - b; // subtraction

a * b; // multiplication

a / b; // division

a ** b; // exponentiation

a % b; // remainder when divided

a++; // increment by 1
// (a = a + 1)

a--; // decrement by 1
// (a = a - 1)

// 2 ==> ASSGNMENT OPERATORS
// =
let x = 9; // assign to 9
x += 10;
x = x + 10;

// -=, *=, /=, %=, **=

// 3 ==> COMPARISON OPERATORS
// ==, ===, !=, !==, <, >, >=, <=

let c = 8;
// equal (loose)
c == '8'; // true
// equal (strict)
c === '8'; // false

// 4 ==> LOGICAL OPERATORS

// && AND : return true if both operand are true
let ab = 10;
ab > 5 && ab === 10; // true
ab < 8 && ab === 10; // false

// || OR : return true if atleast one operand is true
ab > 5 || ab > 20; // true
ab > 12 || ab < 5; // false

// ! NOT: reverse the boolean value

// ===> falsy value
// false, 0, "" (empty string), null, undefined, NaN

// 5==> STRING OPERATOR
// + used to concatenate strings
let fullName = 'jack' + ' ' + 'Ryan';

// 6==> TYPE OPERATORS
// typeof : return type of values
let lastName = 'ryan';
let typeofLastName = typeof lastName; // string type

// 7==> COMMA OPERATOR
// used to evaluate multiple expressions and return the last one
let y = (2 + 3, 5 + 5, 10 + 10); // 20

//--> The comma operator is rarely used in real-world code, except in:
// ->  Some complex inline expressions
// ->  for loops (to update multiple variables at once)
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}
// Here i++, j-- uses the comma operator
// to update two values in one statement.
// -->
console.log((1 + 1, 1 + 2, 4 + 4)); //use comma operator
console.log(1 + 1, 1 + 2, 4 + 4); // normal way

// 8==> TERNARY OPERATOR
// condition ? valueIfTrue : valueIfFalse
let age = 18;
let canVote = age >= 18 ? 'yes' : 'no'; // yes

//
// 9==> Unary OPERATORS
//--> Unary means one operand.
// --> unary plus (+) : convert its operand into number if possible.
console.log(+5); // 5
console.log(+'49'); // 49
console.log(typeof +'49'); // "number"
console.log(+'hello'); // NaN
console.log(+true); // 1
console.log(+false); // 0

// --> unary minus (-) : convert its operand into number and negate it.
console.log(-'5'); // -5
console.log(-'49'); // -49
console.log(-true); // -1
console.log(-false); // -0

// --> increment operator (++) : increase value by 1
// there are two types: prefix and postfix

// prefix: ++z, increment first then use
let z = 5;
console.log(++z); // 6

// postfix: m++, use first then increment
let m = 5;
console.log(m++); // 5
// > commonly used in loops

// --> decrement operator (--) : decrease value by 1
// prefix: --a, decrement first then use
let g = 5;
console.log(--g); // 4
// postfix: a--, use first then decrement
let e = 5;
console.log(e--); // 5

// --> Logical NOT operator (!): reverse the boolean value
console.log(!true); // false
console.log(!false); // true
// Double NOT (!!): convert value to boolean
console.log(!!1); // true
console.log(!!0); // false
console.log(!!'hello'); // true
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

// --> typeof operator: returns the type of its operand
console.log(typeof 42); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"

// --> void operator: evaluates the given expression and then returns undefined
console.log(+undefined); // NaN
console.log(void 0); // undefined
console.log(void (3 + 4)); // undefined
// Common use: to obtain undefined value
let unused = 42;
console.log(unused); // 42
unused = void 0;
console.log(unused); // undefined

// --> delete operator: removes a property from an object
let obj = { name: 'Alice', age: 30 };
console.log(obj.age); // 30
delete obj.age;
console.log(obj.age); // undefined
// -->
// -> cannot delete variables declared with var, let, or const and functions
let f = 10;
console.log(delete f); // false
console.log(f); // 10

//
//10 ==> BigInt operators
// BigInt → for integers beyond safe range of Number ( larger than 2^53 - 1 or less than -(2^53 - 1)
// i.e -9007199254740991 to 9007199254740991 )
// BigInt literals are created by appending 'n'to the end of an integer or
// by calling the BigInt() function.
let bigInt1 = 9007199254740991n; // BigInt literal
let bigInt2 = BigInt(9007199254740991); // BigInt function

// most of the arithmetic operators can be ues with BigInt values
let bigIntSum = bigInt1 + BigInt(10); // BigInt addition
console.log(bigIntSum); // 9007199254741001n

// --> Bigint and number cannot be mixed directly in arithmetic operations
// They must be manually converted to the same type first.
console.log(1n + 3); // TypeError

// ======================
// 11 ==> BITWISE OPERATORS
// ==> performs operations on bit-level

let d = 5 & 3; // 1
// 5: 0101 , 3: 0011
// 0101 & 0011 = 0001

let a1 = 5;
let b1 = 3;
console.log(a1 & b1); // 1 -> 0101 & 0011 = 0001
console.log(a1 | b1); // 7 -> 0101 | 0011 = 0111
console.log(a1 ^ b1); // 6 -> 0101 ^ 0011 = 0110
console.log(~a1); // -6 -> ~0101 = 1010 (in two's complement)
console.log(a1 << 1); // 10 -> 0101 << 1 = 1010
console.log(a1 >> 1); // 2 -> 0101 >> 1 = 0010
console.log(a1 >>> 1); // 2 -> 0101 >>> 1 = 0010

// Note: Bitwise operators convert operands to 32-bit signed integers.
// ======================
