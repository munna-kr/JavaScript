// ====> Advanced Object <====
// recap...
const users = { user1: 'jack', user2: 'David' };

console.log(users.user1); // dot notation
console.log(users['user2']); // bracket notation

/*
===> Object Methods <===
1. Object.keys() - returns array of keys
2. Object.values() - returns array of values
3. Object.entries() - returns array of key-value pairs
4. Object.fromEntries() - converts array pairs to object
*/

//example
const person = {
  name: 'Damon Salvatore',
  city: 'Mystic Falls',
  age: 170,
};

// 1. Object.keys()
console.log(Object.keys(person));

// 2. Object.values()
console.log(Object.values(person));

// 3. Object.entries()
console.log(Object.entries(person));

// 4. Object.fromEntries()
const students = [
  ['jack', 1403],
  ['david', 9302],
  ['rock', 3890],
];
const studentObj = Object.fromEntries(students);
console.log(studentObj);
