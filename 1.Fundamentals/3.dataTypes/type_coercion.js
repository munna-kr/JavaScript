//=========TYPE coercion ======
//--> The process where JavaScript automatically converts
// data types while evaluating an expression.

//--> only implicit conversion

//--1
let number1 = 100;
let string1 = '200';

//==> string + number --> string
let strNum1 = number1 + string1;
console.log(strNum1, typeof strNum1);

//--2
// true: 1, false: 0
let number2 = 10;
let boolean1 = Boolean('hello'); //true
// let boolean2 = true;

//==> number + boolean --> number
let numBool1 = number2 + boolean1;
console.log(numBool1, typeof numBool1);

//--3
let number3 = 20;
let string2 = '10';

// number * string --> number
let strNum2 = number3 * string2;
console.log(strNum2, typeof strNum2);

//--4
//==> boolean + boolean --> number
let boolean3 = true + true;
let boolean4 = false + true;
console.log(boolean3, typeof boolean3);
console.log(boolean4, typeof boolean4);
