'use strict';

// ES6 enhanched oject literal
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const openingHours = {
  // ES6 Enhanced
  // we can use square bracket to include property
  // we can evaluate value under square bracket
  [workDays[1 - 1]]: {
    open: '10:00',
    close: '23:35',
  },
  [workDays[2 - 1]]: {
    open: '08:00',
    close: '21:00',
  },
  [workDays[3 - 1]]: {
    open: '11:00',
    close: '00:00',
  },
  [workDays[4 - 1]]: {
    open: '09:00',
    close: '22:30',
  },
};
console.log(openingHours);

//
const store = {
  name: 'Desi Kitchen',
  meal: ['Dal Tadka', 'Steamed Rice', 'Mixed Vegetable Sabzi', 'Chapati'],

  //

  // if we want to include openingHours object
  // >> old way...
  openingHours: openingHours,

  // ES6 enhanched object literal

  openingHours,

  // old way to include function in object
  checkAvailable: function ({ breakfastIndex, mealIndex, day }) {
    console.log(
      `${this.breakfast[breakfastIndex]} and ${this.meal[mealIndex]} is available till ${this.openingHours.mon.close} O'clock. It's ${day}, Enjoy Your Meal!!`
    );
  },

  // ES6 enhanched
  displayMeal() {
    console.log('Meal:', this.meal);
  },
};
