// ==> advance array concept <==

//-----> Methods <----
/*
array.method(function(valueOfArray, indexOfArray){--content--})

array.method((value, index)=>--content--)
*/

//--examples
const arrNew = [12, 20, 10, 11, 15, 25, 9, 18, 17, 21];
const arr = [12, 20, 10];

//--> TRANSFORMING ARRAYS <--
//--> 1
//  .map()
//  Transforms each element and returns a new array
const arrDouble = arr.map((value) => value * 2); //[24, 40, 20]

//--> 2
// .filter()
//- fliter elements based on condition
const arrEven = arrNew.filter((value) => value % 2 === 0); // [12, 20, 10, 18]
const multiThree = arrNew.filter((value) => value % 3 === 0);
const lrgThn10 = arrNew.filter((value) => value > 10);

//--> 3
// .reduce()
// Reduces an array to a single value (sum, average, object, etc.)
const totalSum = arr.reduce((acc, curr) => acc + curr, 0);

//--> 4
// .flat([depth])
// it creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// depth is optional, default depth is 1
// .flat() deos not change the original array.
// it return a new one.
// if the array is not nested, .flat() has no effect .

const nestedArr = [10, 20, [40], [[50]], [[[60]]]];

const flatArr = nestedArr.flat(2);
const flatArr2 = nestedArr.flat(3);

// flattens all levels (deep nesting)
const flatInf = nestedArr.flat(Infinity);

//--> 5
//.flatmap().flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// combination of .map() followed by .flat(1)
const names = ['Jack', 'David'];
const namesChar = names.flatMap((words) => words.split(''));

// ======> SEARCHING ARRAY <=========

//--> includes()
//--> indexOf()
//--> lastIndexOf()
//--> find()
//--> findIndex()
//--> some()
//--> every()

//example:
const numbers = [12, 20, 30, 20, 12, 70, 80, 12];

//===>
// works on: primitives
// condition based: No

// 1--> includes() - check if elements an exists
// returns: true/false
console.log(numbers.includes(80)); // true

// 2--> indexOf() - return index of an element (fist occurrence)
// returns index if found
// return -1 , if not found
console.log(numbers.indexOf(20)); // 1

// searching from a specific index
console.log(numbers.indexOf(12, 5)); // 7

// 3--> lastIndexOf() - return last index of an element
// returns index if found
// return -1 , if not found
console.log(numbers.lastIndexOf(20)); // 3

// 4--> find() - find first element matching a condition
// returns: element/undefined(if element not found)
// works on: Any
// condition based: yes
console.log(numbers.find((value) => value > 30)); // 70

// 5--> findIndex() - find index of first match
// return: index/-1
console.log(numbers.findIndex((value) => value > 30)); //5

// 6--> some() - check if any element match condition
// return: true/false
// works on: Any
// condition based: yes
console.log(numbers.some((value) => value > 80)); //false

// 7--> every() - check if all elements satisfy a condition
// rerurn: true/false
// works on: Any
// condition based: yes
console.log(numbers.every((value) => value < 100)); //true

//--> slice() : returns a shallow copy of a portion of an array into a new array object
// it does not modify the original array.
// syntax: array.slice(start, end)
// start, end : optional

const arrSlice = [10, 20, 30, 40, 50, 60];
const sliceNew = arrSlice.slice(2, 5);
arrSlice.slice(); // copy entire array
arrSlice.slice(2); // from index 1 to end

console.log(sliceNew);

/*
//========> MODIFYING ARRAYS <=========
1. splice()
2. reverse()
3. push()
4. pop()
5. unshift()
6. shift()
*/

/*
1 splice() : add/remove/replace anywhere
change original: yes

syntax:
array.splice(startIndex, deleteCount, item1, item2, ...)

startIndex: the index to start modifying the array
deleteCount: how many elements to remove, from startIndex
item1.. : optional elements to insert at startIndex (replace deleted items)

*/
// -- Remove elements
const spliceArr1 = [2, 4, 6, 8, 10, 12];
spliceArr1.splice(1, 3);
console.log(spliceArr1);

// -- Add elements
const spliceArr2 = [10, 20, 15, 30];
spliceArr2.splice(1, 0, 33, 44, 55);
console.log(spliceArr2);

// -- Replace elements
const spliceArr3 = [3, 6, 9, 12, 15, 18, 21];
spliceArr3.splice(2, 4, 39, 49, 59, 69, 79);
console.log(spliceArr3);

/*


/*
======> Ordering <=====
1 sort() : sorting the elements of array
By default: sort in ascending order
change original: yes
syntax: 
array.sort([compareFunction])
compareFunction: (optional)

*/
// for strings: sort works as lexicographilly
// for number, we have to specify compareFuntion
const sortArr = ['c', 'a', 'e', 'b'];
sortArr.sort();
console.log(sortArr);

//--> ascending
const sortArr2 = [3, 9, 1, 0, 13, 2, 4];
sortArr2.sort((a, b) => a - b);
console.log(sortArr2);

//--> descendig
const sortArr3 = [3, 9, 1, 0, 13, 2, 4];
sortArr3.sort((a, b) => b - a);
console.log(sortArr3);

// 2 reverse() : reverse array
// change original: yes
syntax: array.reverse();
const revArr = [2, 4, 5, 6, 9];
revArr.reverse();
console.log(revArr);

// ----> Creation Helpers <----
/*
1 Array.from()
2 Array.of()
*/
// 1 Array.from() : creates a new array from an array-like or iterable object
// syntax: Array.from(object, mapFunction, thisValue)
// mapFunction, thisValue : optional

const str = 'Hello';
const arrFromStr = Array.from(str); // ['H', 'e', 'l', 'l', 'o']

const set = new Set([10, 20, 30]);
const arrFromSet = Array.from(set); // [10, 20, 30]

// 2 Array.of() : creates a new array instance from a variable number of arguments
// syntax: Array.of(element0, element1, ...)
const arrOf = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
const arrOfStr = Array.of('a', 'b', 'c'); // ['a', 'b', 'c']
