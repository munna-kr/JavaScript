/*
===> spread operator ...
--> it expands all elements of iterables like: array, set, maps and strings
--> Object is not iterable but, spread operator can be used with it.
*/
const arrNumber = [12, 3, 4, 54, 32, 92, 101];
console.log(...arrNumber);

// creating new array + all elements of another array
const updatedArray = [...arrNumber, 'Hello', 29, 49, 'Good Morning'];
console.log(updatedArray);

/*
the spread operator is actually a bit similar to destructuring,
because it also helps us get elements out of arrays.
Now, the big difference is that spread operator doesn't create new variables.
*/

// copying array / creating swallow copy of an array
const duplicateArrNumber = [...arrNumber];
console.log(duplicateArrNumber);

// combining arrays
const table1 = [12, 24, 36, 48, 60];
const table2 = [72, 84, 96, 108, 120];
const combinedTable = [...table1, ...table2];
console.log(combinedTable);

// adding elements
const nameList = ['jackRyan', 'rahulRockstar', 'wonderBoy', 'alphaMale'];
const updatedList = [...nameList, 'swordGirl', 'KhooniDarinda', 'pyasiAatma'];
console.log(updatedList);

// expanding strings
const user = 'DangerousCoder';
console.log(...user);
// unexpected token
// console.log(`I am ${...user}`);

// ===========> passing arguments in function using spread operator
const prompt = require('prompt-sync')();
const num = [];
for (i = 0; i < 3; i++) {
  num[i] = Number(prompt(`Enter Num${i + 1}: `));
}
// const sum = addingNumber(num[0], num[1], num[2]);
// console.log(`Total Sum: ${sum}`);
// using spread operator
const newSum = addingNumber(...num);
console.log(`Total Sum: ${newSum}`);

function addingNumber(num1, num2, num3) {
  return num1 + num2 + num3;
}

// ===========>> ... with objects
const logins = {
  surveyName: 'coding experience',
  userList: ['jackRyan', 'rahulRockstar', 'wonderBoy', 'alphaMale'],
};
console.log(logins);

// copying object using ... operator and adding some new properties
const newLogins = {
  avgRating: '4.5',
  suerveyDate: '31 December 2024',
  ...logins,
};
console.log(newLogins);
