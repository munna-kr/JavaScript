//=====> DESTRUCTURING ARRAY <======
// method of unpacking value from an array or an object in to separate variables
// in other words, breaking a complex data structue down into a smaller data structure like variable
// iterable only..
const basket = {
  fruits: ['apple', 'orange', 'cherry', 'mango'],
  vegetables: ['potato', 'spinach', 'cabbage', 'pumpkin'],
};

// destructuring
let [main, secondary] = basket.fruits;
// first two elements of frutis  will assigned to main and secondary respectively 
console.log(main, secondary);

//====> varible switching
// before
console.log(main, secondary);
let temp = main;
main = secondary;
secondary = main;
//after
console.log(main, secondary);

// ====> VARIABLE SWITCHING using destructure..
let [newMain, newSecondary] = basket.vegetables;
console.log(newMain, newSecondary);

//switching
[newMain, newSecondary] = [newSecondary, newMain];
console.log(newMain, newSecondary);

// skipping value:
const [fruit0, , fruit2] = basket.fruits;
console.log(fruit0, fruit2);

// DEFAULT VALUE: assign default value, if element is undefined
const numbers = [12, 14, 11];
const [a = 1, b = 1, c = 1, d = 1, e = 1] = numbers;
// there are only 3 elements in 'numbers' 
// hence.. a, b, c will assign respectively and d, e will be set to default value
console.log(a, b, c, d, e);

// rest operator : collect remaining elements, by skipping mentioned one
const [first, second, ...rest] = basket.fruits;
console.log(rest);

// ==> mixed destructuring
const report = [40, 58, 77, ['x', 'y', 'z']];
const [p, q, r, s] = report;
// varibale s is array here
console.log(p, q, r, s);

// destructuring nested array
const [i, j, k, [l, m, n]] = report;
console.log(i, j, k, l, m, n);

// return multiple values from a function using destructure
const kitchen = {
  fruits: ['apple', 'orange', 'cherry', 'mango'],
  vegetables: ['potato', 'spinach', 'cabbage', 'pumpkin'],

  cook: function (startIndex, mainIndex) {
    return [this.vegetables[startIndex], this.fruits[mainIndex]];
  },
};

const cookItem = kitchen.cook(0, 2); // cook function is returning an array
let [newFruit, newVegetable] = cookItem;
console.log(newFruit, newVegetable);
