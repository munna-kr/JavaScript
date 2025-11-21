//=====> ALL ABOUT CLOSURE <======
/*
✅ Lifetime of a Variable Inside a Function

When a variable is created inside a function, its life normally looks like this:

1. Function starts → variable is created
- When the function begins running, JavaScript allocates memory for that variable.

2. Function ends → variable is destroyed
- As soon as the function finishes executing, all its local variables disappear.

This is the normal case,
But, there's something....

> If an inner function uses a variable, the variable stays alive longer,
even after the outer function(main) finishes.
- The variable lives as long as the inner function is still referenced.
- And, this exception is the existence of closure

==> What's closure 
- A function always remembers the variables from the place where it was created.
- Even if that original place (the outer function) has finished running, the inner function can still access those variables.
This remembered set of variables is called a closure.

==> why it's called closure ?
-----------------------------
✔ 1. Because, When a function is created inside another function,
the inner function captures (or closes over) the variables around it (outer variables).

It “closes” the environment so it can still use those variables later.
-----------------------------

------------------------------
✔ 2. The variable scope becomes closed and preserved.

- Even after the outer function finishes, the variables do not disappear.
They remain closed inside the inner function’s memory.

So the function + the preserved environment = closure.
-------------------------------

-------------------------------
3. The function encloses (wraps) its surrounding state

Think of a closure as a package:
function + its surrounding variables = closure

The inner function encloses the state it depends on.
*/
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counting = outer();
// outer() execution finished
// but still variable of outer(): count is accessible
counting(); // accessing
// value is getting updated on each call
counting();
counting();
//--> A closure make sure that a function doesn't loose connection to variables, that existed at the function's bithplace
// example
function world() {
  let homeTown = 'My home';

  function person() {
    console.log(homeTown);
  }
  return person;
}
const user = world();
user(); // still acceess to variable homeTown

// ==> A closure is like a backpack...
/* 
When the inner function is created, 
it gets a backpack.
The backpack contains all the variables from the outer function.
Even when the outer function is gone, 
the backpack stays.
*/

// ==> Key Takeaways
/*
> Closures allow functions to access variables from their creation context even after that context has finished executing.

> A closure preserves the variable environment of the function's birthplace, enabling persistent state.

> Closures happen automatically in JavaScript and are not manually created.

*/
