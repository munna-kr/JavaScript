'use strict';

const input = require('prompt-sync')();

console.log('-Calculator for addition-');
console.log('Enter Numbers...(0 to quit)');
const numbers = []; 

let add = 0;
let i = 0;
while (numbers[i] !== '0') {
  i++;
  numbers[i] = input();
  console.log('+');
  add = add + Number(numbers[i]);
}
console.log('Sum = ', add);