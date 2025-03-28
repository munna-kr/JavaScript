/*
===> REST OPERATOR <====
--> It gather/pack the "rest" of the elements or arguments into a single array or object. 
--> It's represented by three dots (...) like spread operator 
--> it does opposite of spread operator
*/

const numbers = [12, 34, 3, 4, 55, 20, 10];

// Spread because, its right side of = operator
const newNumbers = [48, 190, 489, 439, ...numbers];

// Rest because, its left side of = operator
const [...newPacked] = [48, 10, 11, 30, 78, 34];

//
const store = {
  name: 'Desi Kitchen',
  location: 'Near main SBI branch, Smart city, Bihar, India',
  breakfast: ['Aloo Paratha', 'Masala Dosa', 'Poori', 'Bhatura'],
  meal: [
    'Dal Tadka',
    'Steamed Rice',
    'Mixed Vegetable Sabzi',
    'Chapati',
    'Pulav',
    'DesiGheeWalaChapati',
  ],
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
    thu: {
      open: '08:30',
      close: '23:00',
    },
    fri: {
      open: '09:00',
      close: '22:30',
    },
    sat: {
      open: '08:00',
      close: '23:00',
    },
  },
};

// rest operator won't collect the mentioned elements and skip element
const [item1, , item2, ...newMenu] = store.meal;
console.log(item1, item2);
console.log(newMenu);

// The rest operator must always appear as the last parameter in function definitions or destructuring.
// const[item3, ...notList, item4,]=store.breakfast // --> error

//===========> OBJECTS <===========
const { sat, ...weekDays } = store.openingHours;
console.log(weekDays);

//===========> Function <==========
// The rest operator can collect all remaining arguments
// passed to a function into an array.
function add(...numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = +numbers[i];
  }
  return sum;
}
console.log(add(12, 10, 30));
console.log(add(12, 34, 12, 3, 4, 5));
console.log(add(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22));

// declaring one argument as mandatory and rest as optional
function orderFood(main, ...optional) {
  console.log('main:', main);
  console.log('optional:', optional);
}
orderFood('Chapati', 'Aloo Paratha', 'Masala Dosa', 'Poori', 'Bhatura');
