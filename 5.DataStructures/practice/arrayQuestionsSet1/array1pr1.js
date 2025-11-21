/*
# JavaScript Data Structures Practice Questions
 
## 1. Arrays

**Example Data:**

const numbers = [5, 3, 9, 1, 5, 7, 0];
const numsA = [1, 2, 3, 4];
const numsB = [3, 4, 5, 6];
const fruits = ["apple", "banana", "cherry", "banana", "apple"];
const nested = [1, [2, [3, [4]]]];

**Practice Questions:**

* Reverse `numbers` without using `.reverse()`
* Sort `numbers` ascending and descending
* Remove duplicates from `fruits`
* Count frequency of each element in `fruits`
* Find max and min values in `numbers`
* Find sum of all elements using `.reduce()`
* Create a new array with each element * 2 (use `.map()`)
* Filter even numbers using `.filter()`
* Check if all elements are greater than 0 (use `.every()`)
* Check if any element is greater than 5 (use `.some()`)
* Find first number greater than 4 (use `.find()`)
* Find index of first number greater than 4 (use `.findIndex()`)
* Flatten `nested` completely → `[1,2,3,4]`
* Join all fruits into a string separated by commas
* Merge `numsA` and `numsB` and remove duplicates
* Get intersection of `numsA` and `numsB`
* Rotate `numbers` array by 2 steps
* Split array into chunks of size 2
* Replace all 5’s with 0
* Find average of all numbers
* Get last 3 elements of `numbers` using `.slice()`
* Insert `100` after 9 using `.splice()`
* Convert array → object of index: value pairs
* Create a copy using spread operator
* Shuffle array randomly
*/
const numbers = [5, 3, 9, 1, 5, 7, 0];
const numsA = [1, 2, 3, 4];
const numsB = [3, 4, 5, 6];
const fruits = ['apple', 'banana', 'cherry', 'banana', 'apple'];
const nested = [1, [2, [3, [4]]]];

// 1 - * Reverse `numbers` without using `.reverse()`
// --> 1st method
function reverseArray(arr) {
  const reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const newNum = arr[arr.length - 1 - i];
    reversedArray.push(newNum);
  }
  return reversedArray;
}
const reversedNumber = reverseArray(numbers);
console.log('Q1 Reversed Numbers: ', reversedNumber);

// --> 2nd method
// function reverseArray(arr) {
//   const reversedArray = [];
//   for (let i in arr) {
//     reversedArray.unshift(arr[i]);
//   }
//   return reversedArray;
// }
// const revArr = reverseArray(numbers);
// console.log(revArr);
// console.log(numbers);

///
///

// 2 - * Sort `numbers` ascending and descending
const ascendingNumbers = Array.from(numbers); // creating shallow copy
const descendingNumbers = Array.from(numbers);
console.log(
  'Q2 ascending order: ',
  ascendingNumbers.sort((a, b) => a - b)
);
console.log(
  'descending order: ',
  descendingNumbers.sort((a, b) => b - a)
);

// 3 - * Remove duplicates from `fruits`
function noDuplicate(arr) {
  const unique = [];
  for (i of arr) {
    if (!unique.includes(i)) unique.push(i);
  }
  return unique;
}
const noDuplicateFruits = noDuplicate(fruits);
console.log('Q3', noDuplicateFruits);

// 4 - * Count frequency of each element in `fruits`
// --> 1st method
function countElement(arr) {
  const count = {}; // empty object
  // looping each element in array
  for (let value of arr) {
    // checking if value exist in object or not
    if (count[value]) {
      // yes -> ++
      count[value]++;
    } else {
      // No -> 1
      count[value] = 1;
    }
  }
  return count;
}
const fruitsCount = countElement(fruits);
console.log('Q4', fruitsCount);

// --> 2nd method
const frequency = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {}); // array.reduce(acc, curr)=>{}, {};
// the 2nd {} this make acc as an empty object
console.log('using .reduce()->', frequency);

/* <accumulator> acc
accumulator is not always an empty object {}.
Its initial value depends on what we give to reduce()

[].reduce(callback, 0); // acc starts as 0
[].reduce(cb, {});      // acc starts as {}
[].reduce(cb, []);      // acc starts as []
[].reduce(cb, "hi");    // acc starts as "hi"
*/

// 5 - * Find max and min values in `numbers`
// const numbers = [5, 3, 9, 1, 5, 7];

// for maximum
function maxNumber(arr) {
  let max = 0;
  for (let i in arr) {
    if (arr[i] > max) {
      max = arr[i];
    } else continue;
  }
  return max;
}
console.log('Q5 Maximum in numbers: ', maxNumber(numbers));

// for minimum
function minNumber(arr) {
  let min = arr.length;
  for (let i in arr) {
    if (arr[i] < min) {
      min = arr[i];
    } else continue;
  }
  return min;
}
console.log('Q5 Minimum in numbers: ', minNumber(numbers));

// 6 - * Find sum of all elements using `.reduce()`
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Q6 Sum of all elements of numbers: = ', sum);

// 7 - * Create a new array with each element * 2 (use `.map()`)
const numberX2 = numbers.map((value) => value * 2);
console.log('Q7 Multiple of 2:', numberX2);

// 8 - * Filter even numbers using `.filter()`
// const numsA = [1, 2, 3, 4];
const evenNumber = numsA.filter((value) => value % 2 === 0);
console.log('Q8 Even Number:', evenNumber);

// 9 - * Check if all elements are greater than 0 (use `.every()`)
const allGreaterThanZero = numbers.every((value) => value > 0);
console.log('Q9:', allGreaterThanZero);

// 10 - * Find first number greater than 4 (use `.find()`)
const firstGreaterThan4 = numsB.find((value) => value > 4);
console.log('Q10', firstGreaterThan4);

// 11 - * Find index of first number greater than 4 (use `.findIndex()`)
// const numsB = [3, 4, 5, 6];
const indexOf_firstGreaterThan4 = numsB.findIndex((value) => value > 4);
console.log('Q11', indexOf_firstGreaterThan4);

// 12 - * Flatten `nested` completely → `[1,2,3,4]`
// const nested = [1, [2, [3, [4]]]];
const flatenNested = nested.flat(Infinity); //flattens all level (deep nesting)
console.log('Q12', flatenNested);

// 13 - * Join all fruits into a string separated by commas
// const fruits = ["apple", "banana", "cherry", "banana", "apple"];
const strFruits = fruits.join(',');
console.log('Q13', strFruits);

// 14 - * Merge `numsA` and `numsB` and remove duplicates
function mergeArray(arr1, arr2) {
  const mergeArr = [];
  for (let value of arr1) {
    if (!mergeArr.includes(value)) mergeArr.push(value);
  }
  for (let value of arr2) {
    if (!mergeArr.includes(value)) mergeArr.push(value);
  }
  return mergeArr;
}
// const numsA = [1, 2, 3, 4];
// const numsB = [3, 4, 5, 6];
const aXb = mergeArray(numsA, numsB);
console.log('Q14', aXb);

// 15 - * Get intersection of `numsA` and `numsB`
function arrIntersection(arr1, arr2) {
  const inArray = [];
  for (let value of arr1) {
    if (arr2.includes(value)) inArray.push(value);
  }
  return inArray;
}
const common = arrIntersection(numsA, numsB);
console.log('Q15', common);

// 16 - * Rotate `numbers` array by 2 steps
// rotating numbers by left side
function rotateArray(arr, step, side) {
  const arrCopy = [...arr]; // preserving original array

  // Left rotation
  if (side === 'l' || side === 'L') {
    for (let i = 0; i < step; i++) {
      const removingFirst = arrCopy.shift();
      arrCopy.push(removingFirst);
    }
  } // Right rotation
  else if (side === 'R' || side === 'r') {
    for (let i = 0; i < step; i++) {
      const removingLast = arrCopy.pop();
      arrCopy.unshift(removingLast);
    }
  }
  return arrCopy;
}
console.log('Q16', rotateArray(numbers, 2, 'l'));

// 17 - * Split array into chunks of size 2
const chunkArray = [];
for (let i = 0; i < numbers.length; i += 2) {
  chunkArray.push(numbers.slice(i, i + 2));
}
console.log('Q17', chunkArray);

// 18 - * Replace all 5’s with 0
// const numbers = [5, 3, 9, 1, 5, 7, 0];
function replaceElement(arr, target, replaceValue) {
  const newArr = arr.map((v) => (v === target ? replaceValue : v));
  return newArr;
}
console.log('Q18', replaceElement(numbers, 5, 0));
// no change in original array

// 19 - * Find average of all numbers
const numbersAvg = numbers.reduce((acc, v) => acc + v) / numbers.length;
console.log('Q19', numbersAvg);

// 20 - * Get last 3 elements of `numbers` using `.slice()`
const last3 = numbers.slice(-3);
console.log('Q20', last3);

// 21 - * Insert `100` after 9 using `.splice()`
const insert100 = numbers.splice(3, numbers.length - 3, 100);
console.log('Q21', numbers);

// 22 - * Convert array → object of index: value pairs
const objFromArr = {};
numbers.forEach((v, i) => {
  objFromArr[i] = v;
});
console.log('Q22', objFromArr);

// 23 - * Create a copy using spread operator
const copyNumbers = [...numbers];
console.log('Q23', copyNumbers);

// 24 - * Shuffle array randomly
console.log(numbers);
const randomIndex = Math.floor(Math.random() * numbers.length);
console.log('Q24', numbers[randomIndex]);
console.log(randomIndex);
