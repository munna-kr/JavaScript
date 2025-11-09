//  = = = = > TDZ < = = = =
// ====> Temporal dead zone <====

// ====> Variable <====
//==> on accessing before initializations...
// var : give undefined
// let : cannot access before initializations
// const : cannot access before initializations
console.log(diff); // TDZ for diff variable, give undefined

// console.log(add); // TDZ for add variable, give ReferenceError: cannot access before initialization

// console.log(number); // TDZ for number variable, give ReferenceError

var diff;
let add;
const number = 10;

// ====> Functions <====

// function
console.log(addDecl(1, 4)); // it will return value
function addDecl(a, b) {
  return a + b;
}

// function expression
// console.log(addExp(2, 3)); // give ReferenceError
const addExp = function (a, b) {
  return a + b;
};

// Arrow function
// console.log(addArrow(4, 8)); //give ReferenceError
const addArrow = (a, b) => a + b;

// Bug with var
console.log(!undefined); // it's true
if (!products) deleteAllProducts(); // here, products value become true and deleteProducts will execute and delte all products from cart, however number of product is not zero.
// its reason declaring variable using var is not recommended,
// declare variable with const, if need to change value declare with let
var products = 20;

function deleteAllProducts() {
  console.log('All produts removed!');
}
