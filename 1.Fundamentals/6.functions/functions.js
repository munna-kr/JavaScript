// ==> FUNCTION
// ==> block of codes, that is designed to perform specific task
// ==> define once use many times...
// ==> DRY: Don't Repeat Yourself

// 1- Function declaration
function sum(a, b) {
    return a + b;
};
const addingTwoNum = sum(18, 29);
console.log(addingTwoNum);

// 2- Function expression
const mulitple = function (a, b) {
    return a * b;
};
const multiTwoNum = mulitple(18, 10);
console.log(multiTwoNum);

// 3- Arrow function
//one liner
const square = (num) => num * num;
console.log(square(12));
