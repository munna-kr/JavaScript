/*
                JAVASCRIPT ARRAY STRUCTURE
       ────────────────────────────────────────────

   let arr = [10, 20, 30];

   Internally, the array is actually an OBJECT:

   {
     "0": 10,
     "1": 20,
     "2": 30,
     length: 3,
     __proto__: Array.prototype   ← Methods live here
   }

   PROTOTYPE CHAIN (Where methods come from):

       arr
        │
        └── __proto__ → Array.prototype
                            │
                            └── __proto__ → Object.prototype
                                                    │
                                                    └── null

   ARR CONTAINS:
   ✔ Indexed keys (0,1,2,...)
   ✔ length property
   ✔ __proto__ link (to Array.prototype)

   ARRAY DOES NOT CONTAIN ITS METHODS DIRECTLY.
   Methods live in Array.prototype.

   Example:
   arr.push(40);
   push() is looked up from Array.prototype through __proto__ link.
*/

// proof that array does not contain methods directly,
// methdods live in Array.prototype
const arr1 = [2, 4, 6, 8, 10];
arr1.push(12);
console.log(arr1.hasOwnProperty('push')); // false
console.log(Array.prototype.hasOwnProperty('push')); // true

// Proof that __proto__ points to Array.prototype
console.log(arr1.__proto__ === Array.prototype); // true

// Accessing length property from prototype chain
console.log(arr1.__proto__.length); // 0 as Array.prototype is not an array, so no elements in it
console.log(arr1.length); // 5

// Viewing Array.prototype
console.log(Array.prototype); // shows all array methods

// creating custom method on Array.prototype
Array.prototype.greet = function () {
  return 'Hello this is customized method';
};
console.log(array1.greet());
