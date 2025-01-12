'use strict';
//////////////////////////////////////////////////////
/*
In non–strict mode, this is always a reference to an object. 
In strict mode, it can be any value
*/
//////////////////////////////////////////////////////
console.log(this); // refers to windows / global

/*
====> for regular function
The value of 'this' depends on how the function is called. 
Think about 'this' as a hidden parameter of a function
*/

function regularFunction() {
  console.log(this);
}
regularFunction();
/* 
====> Arrow function don't have its own 'this'
it inherit 'this' from the parent scope
in below arrow fucntion 'this' keyword refers to global object
*/
const arrowFunction = () => {
  console.log(this);
};
arrowFunction();

// here, 'this' ponits to function: 'arrowInside'
// and here it's value is undefined.
function arrowInside() {
  const arrow1 = () => console.log(this);
  arrow1();
}
arrowInside();

function hello() {
  return this;
}
console.log(hello());
