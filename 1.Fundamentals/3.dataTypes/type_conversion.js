// --- TYPE  conversion / Type casting ---
// >> conversion of data from one data type to another
// >> both implicit and explciit

//-- 1
let num1 = 20;
let num2 = '10';

// num2 is string and num1 is number,
// and both variable will be concatenated as string
// and not added as arithmetic by compiler.
const sum1 = num1 + num2;

// converting variable value into integer: using pareseInt
num2 = parseInt(num2);
// num2 = parseInt(num2, 10);

// now both variable is integer type
// compiler will add as arithmetic
const sum2 = num1 + num2;

console.log(sum1);
console.log(sum2);

//====> Implicit
// in above example, compiler automatically converts num1 into string type,
// this type of conversion is called implicit conversion..

//-- 2
let variable1 = '12';
let variable2 = 20;

//====> Explicit
// converting variable1 (which is string type) into another data type,
// manually using function/operator.
// this type of conversion is called explicit type conversion

// string to number conversion
let variableNum = Number(variable1);
const add = variableNum + variable2;
console.log(add);

//================ ALL EXAMPLES BELOW IS FROM EXPLICIT CONVERSION ==========
//-- 3
let c = '22.12';
console.log(typeof c, c);

//===> parseFloat
let d = parseFloat(c);
console.log(typeof d, d);

//-- 4
let number1 = 102;
let number2 = 200;
console.log(typeof number1, typeof number2);

//==> number to string

//-- using String()
number1 = String(number1);
console.log(typeof number1);

//-- using .toString()
number2 = number2.toString();
console.log(typeof number2);

//-- 5
let var1 = 0;
let var2 = 'hello';
console.log(typeof var1, typeof var2);

//===> anytype to boolean
var1 = Boolean(var1);
var2 = Boolean(var2);
console.log(typeof var1);

console.log(var2);

// --6
let var3 = '400';

//===> sring to number using increment(+) operator
var3 = +var3;
console.log(typeof var3);
