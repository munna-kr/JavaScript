const PromptSync = require('prompt-sync');

const newKitchen = {
  name: 'Desi-Kitchen',
  breakfast: ['Aloo-Paratha', 'Masala-Dosa', 'Poori', 'Bhatura'],
  meal: ['Dal Tadka', 'Steamed Rice', 'Mixed Vegetable Sabzi', 'Chapati'],
  timings: {
    mon: {
      open: '08:00 AM',
      close: '09:00 PM',
    },
  },
  //-
  checkAvailability: function ({ breakfastIndex, mealIndex }) {
    console.log(
      `Kitchen open at: ${this.timings.mon.open}. ${this.breakfast[breakfastIndex]} will available till 09:00 PM, ${this.meal[mealIndex]} will available till 03:00 PM. Kitchen close at ${this.timings.mon.close}`
    );
  },
};

const paraNew = {
  breakfastIndex: 1,
  mealIndex: 2,
};

newKitchen.checkAvailability(paraNew);

function adding(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

// console.log(adding(12, 11, 10, 20));

const input = require('prompt-sync')();
const tables = [];
for (let i = 0; i < 5; i++) {
  tables[i] = Number(input(`Enter Number${[i + 1]}: `));
}
console.log(tables);

console.log(adding(tables));
