'use strict';

// 1
// Guess number
const prompt = require('prompt-sync')();
// console.log("Guess Number between 0 and 10, you have 3 chance.");
// let randomNum = Math.trunc(Math.random() * 11);
// let count = 0;
// while (count < 3) {
//   let num;
//   count++;
//   num = Number(prompt('Enter the number: '));
//   if (num === randomNum) {
//     console.log('WOW! Guess is Right!!!');
//     break;
//   }
//   console.log('Try Again!');
// }

// 2

console.log('Hello world');
console.log('this is the beginning of theory ');

console.log(99 / 0);
console.log(100 / 'tyu');

let big = 1234567890123456789012345678901234567890n;
console.log(big);

const numExp = (num) => num ** 2 + num * num;
console.log(numExp(5));

function numSq(num) {
  return num ** 2;
}

const numMulti = function (num) {
  return num ** 2;
};

console.log(numSq(12));

console.log(numMulti(11));

const arrN = [12, 'hello'];
console.log(arrN);

let car = {
  type: 'car',
  model: 'BMW-EV',
  fuel: 'electric',
  category: ['a1', 'a2', 'b3'],
  // details: function () {
  //   console.log(
  //     `This is ${this.type} of model ${this.model}, It's ${this.fuel} car`
  //   );
  // },
};
// console.log(car.details());

const newCar = { ...car };
const newVehicle = structuredClone(car);
console.log(newCar);

newCar.type = 'new';
newCar.category[1] = 'c1';
console.log(car);
console.log(newCar);
console.log(newVehicle);
newVehicle.category[2] = 'x1';
console.log(newVehicle);
console.log(car);
