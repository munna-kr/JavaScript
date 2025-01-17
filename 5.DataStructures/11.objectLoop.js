'use strict';

/*
--> LOOP OVER OBJECT 
*/

// for...of

const store = {
  name: 'Desi Kitchen',
  location: 'Near main SBI branch, Smart city, Bihar, India',
  breakfast: ['Aloo Paratha', 'Masala Dosa', 'Poori', 'Bhatura'],
  meal: ['Dal Tadka', 'Steamed Rice', 'Mixed Vegetable Sabzi', 'Chapati'],
};

// Property names
for (const item of Object.keys(store)) console.log(item);

// Object.keys() creates an array
const storeKeys = Object.keys(store);
console.log(storeKeys);
for (const key of storeKeys) console.log(key);

//Property values
const storeKeyValues = Object.values(store);
for (const values of storeKeyValues) console.log(values);

//
for (const value of Object.values(store.breakfast)) {
  console.log(`we have ${value}`);
}

// Loop over entire objecs: object.entries()
// array will be created and properties Name and properties values of object will be elements of newly created array
const keyValues = Object.entries(store);
for (const element of keyValues) console.log(element);
