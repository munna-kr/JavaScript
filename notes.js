//--->
// destructuring of array [...]
const arrayNew = [13, 11, 12, 10];
let [array1, array2] = arrayNew;

// switcihing
[array1, array2] = [array2, array1];

// skipping and default values
const [array3, , array4, array5, array6 = 99] = arrayNew;

// mixed destructring
const mixedArray = [11, 12, ['x', 'y', 'z']];
let [mixed1, mixed2, [mx1, mx2, , x3]] = mixedArray;

//-->
const objectNew = {
  users: ['coder1', 'coder2'],
  books: ['JavaScript', 'Python'],
};
// destructring of object {...}
const { users, books } = objectNew;

// renaming
const { users: newGroup } = objectNew;

// --> spread operator ...iterable
const spreadArray1 = [...arrayNew];
const spreadArray2 = [...arrayNew, 100, 'Code', ['new']];

// --> rest operator
const numbers = [12, 34, 'x', 'y', 'z'];
const [num1, num2, ...str] = numbers;

const args = [12, 34, 28, 10, 11];
// passing arguments to function
function adding(...numbers) {
  let totalSum = 0;
  for (let num of numbers) totalSum += num;
  return totalSum;
}
adding(12, 22, 32, 42, 52);
adding(11, 10, 30);

// rest as optional arguments
function orderFood(main, ...optional) {
  /* code here */
}

// --> short-circuit
// OR,
// I'm true if any operand is true
const value = true || false; //true
const value2 = '' || null || 20; //20
// AND,
// I'm true only if both operands are true
const value10 = 12 && 0 && 20; // 0
const value11 = 'hello' && null; // null
const value12 = 'hello' && 20; // 20

// --> nullish coalescing operator
// if left-hand operand is null or undefined:
// ...yes --> return right-hand operand
// ...no  --> return left-hand operand
let balance = 0;
const checking = balance || 100;
console.log(checking);
// but my balance is zero...!! 😢
// nullish coalescing: let me fix
const checkingBal = balance ?? 100;
console.log(checkingBal);

// --> SETS : no duplicate value
const idNo = new Set([1112, 9109, 2290]);
// method
idNo.add(1111);
idNo.delete(1112);
idNo.has(9109); //return boolean
idNo.clear(); // all value deleted
// property
idNo.size;

// iterating
// for...of
for (const id of idNo);
// forEach()
idNo.forEach((id) => {
  /*...*/
});

// --> Maps
const myMap = new Map();
//
myMap.set('location', 'INDIA');
myMap
  .set('Known Language', ['Hindi', 'Sanskrit'])
  .set('Profession', 'WebDev')
  .set('nothing');

myMap.get('location');
myMap.has('Profession');
myMap.delete('location');
myMap.keys(); // return all keys
myMap.values();
myMap.clear();
// etnries()
// Returns an iterator of [key, value] in the Map.
const keyValue = myMap.entries();
for (const pair of keyValue) console.log(pair);
