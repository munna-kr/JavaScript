/*
Object destructuring is a syntax in JavaScript 
that allows us to extract properties from objects 
and assign them to variables in a concise and readable manner

{} is used to destructuring an object
*/
const store = {
  name: 'Desi Kitchen',
  location: 'Near main SBI branch, Smart city, Bihar, India',
  breakfast: ['Aloo-Paratha', 'Masala-Dosa', 'Poori', 'Bhatura'],
  meal: ['Dal-Tadka', 'Steamed-Rice', 'Mixed-Vegetable-Sabzi', 'Chapati'],

  openingHours: {
    mon: {
      open: '10:00',
      close: '23:35',
    },
    tue: {
      open: '08:00',
      close: '21:00',
    },
    wed: {
      open: '11:00',
      close: '00:00',
    },
    fri: {
      open: '09:00',
      close: '22:30',
    },
  },
  checkAvailable: function ({ breakfastIndex, mealIndex, day }) {
    console.log(
      `${this.breakfast[breakfastIndex]} and ${this.meal[mealIndex]} is available till ${this.openingHours.mon.close} O'clock. It's ${day}, Enjoy Your Meal!!`
    );
  },
};

// we have to use "object property" as variable name,
// without caring index, as in object index doesn't matter.
const { name, location, meal } = store;
console.log(name, location, meal);

// if we want to rename variable -> property: newName
const { name: storeName, meal: mealMenu } = store;
console.log(storeName, mealMenu);

// undefined: when there's no property with given variable name in object
const { closingHour } = store;
console.log(closingHour);
// no closingHour property in object: store

// setting defalut value to avoid undefined
// breakfast is present in store, so it won't take default value set to it
const { fruits = 'No fruits', breakfast = [], openingHours } = store;
console.log(fruits, breakfast, openingHours);

// Mutating variable
let a = 10;
let b = 29;

const tempObj = {
  a: 200,
  b: 300,
};
({ a, b } = tempObj);
console.log(a, b);

// Nested objects
const {
  mon: { open: openMon, close: closeMon },
} = openingHours;
console.log(openMon, closeMon);

// passing object to function as argument
store.checkAvailable({
  day: 'Monday',
  breakfastIndex: 2,
  mealIndex: 1,
});
