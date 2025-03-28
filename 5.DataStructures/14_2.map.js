const PromptSync = require('prompt-sync');

//====> Map iteration <====
const productPrices = new Map([
  ['Laptop', 72000],
  ['SmartPhone', 20000],
  ['Tab', 35000],
  ['SmartWatch', 15000],
  ['Monitor', 25000],
]);
console.log(productPrices);

console.log('---converted object-----');

//=======> object to map <=========
const store = {
  name: 'Desi Kitchen',
  location: 'Near main SBI branch, Smart city, Bihar, India',
  breakfast: ['Aloo Paratha', 'Masala Dosa', 'Poori', 'Bhatura'],
  meal: ['Dal Tadka', 'Steamed Rice', 'Mixed Vegetable Sabzi', 'Chapati'],
};

const newStore = new Map(Object.entries(store));
console.log(newStore);

// Example of iteration
// Quiz app
const quiz = new Map([
  ['Question', 'Which one is the Highest Mountain ?'],
  [1, 'Kangchenjunga'],
  [2, 'Mt. Everest'],
  [3, 'Mt. Kilimanjaro'],
  [4, 'Olympus Mons'],
  ['correct', 4],
]);

console.log(quiz.get('Question'));

for (const [key, value] of quiz) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//--> taking input from user
const prompt = require('prompt-sync')();
const userInput = Number(prompt('Choose your answer: '));

if (userInput <= 4 && userInput >= 1) {
  if (userInput === quiz.get('correct')) console.log('Right answer!');
  else console.log('Wrong answer !');
} else console.log('Please choose appropriate option!');

console.log('----array to map----');

//=======> map to array <=========
const arrayQuiz = [...quiz];
console.log(arrayQuiz);

// array of map keys
const arrayKeys = [...quiz.keys()];
console.log(arrayKeys);

// array of map values
const arrayValues = [...quiz.values()];
console.log(arrayValues);

// .entries()
// returns iterable of key-value pairs for each entry in map
console.log(quiz.entries());
