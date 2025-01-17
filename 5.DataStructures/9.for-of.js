/*
--> for...of loop introduced in ES6 (ECMAScript 2015)

--> This loop is designed to iterate over iterable objects such as arrays, strings, maps, sets, or any object implementing the iterable protocol

*/
const vegetables = ['potato', 'spinach', 'cabbage', 'pumpkin'];
for (const item of vegetables) console.log(item);

const numbers = [12, 13, 5, 45, 95, 29, [19, 93, 99, 38]];
for (const number of numbers) console.log(number);
console.log('----------------');

// .entries() ::> It returns an iterator object that contains key-value pairs for each element
// .entries() method returns an iterator/array with index-value pairs.
console.log('vegetables..');
for (const [index, item] of vegetables.entries()) {
  console.log(`${index + 1}: ${item}`);
}
