// ==> slice :
// > no change in original array
// > return shallow copy

// > array.slice(startIndex-includeValue, endIndex-excludeValue)

// - startIndex >= endIndex : empty array []

// no index: return just shallow copy of array (all elements)
const a = [1, 2, 3, 4, 5, 6];
console.log(a.slice()); //-> [1, 2, 3, 4, 5]

// value at index -> (include, exclude)
console.log(a.slice(2, 4)); // [3, 4]

const b = [2, 4, 6, 8, 10];
// negative index : (-index)
console.log(b.slice(-1)); // just last value - [10]
console.log(b.slice(2, -2)); // [6]
console.log(b.slice(-4, -1)); // [4, 6, 8]

// empty array : as -1 > -4
console.log(b.slice(-1, -4));

// ==> splice :
// > mutates the original array
// > return the array of removed elements
// >
// > array.splice(index-deleting start , deleteCount, e1, e2, e3...)
// > if deletCount is -ve , then it will be treated as 0 means nothing to remove.
//   hence, empty array [] will return

// const one = a.splice(2); // [3, 4, 5, 6, 7, 8, 9]
// deleting begins at index 2
// original array: [1, 2 ....deleted....]

// const two = a.splice(1, 4); // [2, 3, 4, 5]
// deleting begins at index 1
// original array: [1,...deleted..., 6, 7, 8, 9]

// const three = a.splice(2, 4, 10, 20, 30, 40); // [3, 4, 5, 6]
// original array: [1, 2, 10, 20, 30, 40, 7, 8, 9]

// const neg1 = a.splice(-1); //  [9]
// const neg2 = a.splice(-3); // [7, 8, 9]

const neg3 = a.splice(-1, -4); // []
// as delete count is negative,
// it will be treated as 0, means no item to removed

//////////////
// ==> at() in array
const c = [1, 2, 3, 4, 5];
console.log(c.at(1)); // 2
console.log(c.at(-1)); // last element : 5

//////////////
const transactions = [100, 200, 340, -220, 100, -300, -20];
console.log('----Transactions----');

// ==> forEach(callbackFn(element, index, array){..})
// > order of parameters must be same..
transactions.forEach(function (transactions) {
  if (transactions < 0) {
    console.log('Withdraw:', transactions);
  } else if (transactions > 0) {
    console.log('Deposit:', transactions);
  }
});
