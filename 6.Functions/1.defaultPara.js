'use strict';

// ==> Default parameters in Function..
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
