'use strict';

// ==> Default parameters in Function..
//--> if a value is not provided (or is undefined),
//    the defalut value is used.
const bookings = [];

function booking(
  flightNum,
  numPassengers = 1, // default is 1
  price = 199 * numPassengers
) {
  //
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
}
booking('BE02');
booking('JH20', 2, 500);
booking('JS09', undefined, 100); // triggered default value using udefined..

//==> using function as default value
//example 1
function randomNum() {
  return Math.floor(Math.random() * 10);
}

function show(num = randomNum()) {
  console.log(num);
}
show(12);

// example 2
function message() {
  return 'Day';
}

function greeting(time = message()) {
  const greet = `Good ${time} guyz!`;
  console.log(greet);
}

greeting();
greeting('Morning');
