'use strict';
//=====================> MEMORY MANAGEMENT <===========================//
/*
===> Memory management in JavaScript involves the allocation of memory to store data and the subsequent release of that memory when it is no longer needed. 

===> Every value we create in JS goes through a memory lifecycle

1️⃣[Allocate memory] ===>  2️⃣[Use memory]  ===> 3️⃣[Release memory]


====> Allocation: When variables, objects, or functions are created, memory is allocated.

====> Usage: Memory is utilized while the data is being accessed or processed.

====> Deallocation: Memory is released when the data is no longer needed

*/

// whenever we assign a value to a new variable, the engine automatically allocates(reserves) a piece of memory to store the value
let newVariable = 10;

// while code is running, the value is written, read and updated in the allocated piece of memory
newVariable = 20;

// when no longer needed, the value is deleted from the memory to free up resources. The released memory is used for new variable
//////////////////////////////////////////////////////////////////////////////

/*
=============> TYPES OF MEMORY <==============
====> Stack Memory: Used for static data (e.g., primitive values and function calls).
--->Memory is automatically allocated and deallocated when the function execution completes.

====> Heap Memory:
Used for dynamic data (e.g., objects, arrays).
Memory management here is more complex and handled by the garbage collector.

*/
// let number2 = 10;

// console.log(number2);

// let number4 = number2;
// number4 = 129;
// console.log(number2);

// objects are not really copied, when we pass them to a function,
// but instead we only pass the reference and so it is still the same object in the heap

let human = {
  age: 17,
  category: 'teenager',

  action: ['eat', 'walk', 'sleep', 'logical thinking'],
};
console.log('original object', human);

const newHuman = human; // it won't create new object
newHuman.age = 10; // value will upadte in object 'human'
console.log('updated one value', human);

// copying using spread operator
const newPerson = { ...human }; // new object crated, with default value of old object.
console.log(
  'copied object using spread operator with value of old object',
  newPerson
);

// new value will only update in new copied object
newPerson.age = 30;
newPerson.category = 'adult';

// when we update value for array inside the object, it got updated in old object too.
// that's called shallow copy
// in shallow copy, only first layer is copied, so any nested value is not copied
newPerson.action.push('run');
console.log('copied object with updated new value', newPerson);

// Deep copy/clone
const humanClone = structuredClone(human); // whole object is copied to new object
console.log(humanClone);

// updating value in newly cloned object won't update in old object
humanClone.action.push('mutation', 'powerful');
console.log('old object after performing deep clone', human);
console.log('newly cloned object of old object', humanClone);
