'use strict';

const flight = 'B8IN';

const jack = {
  name: 'Jack Ryan',
  passport: 19303993,
};

// function...
function checkIn(flight, passsenger) {
  flight = 'AF09';
  passsenger.name = 'Mr. ' + passsenger.name;

  if (passsenger.passport === 19303993) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport');
  }
}
checkIn(flight, jack);
console.log(flight);
console.log(jack);
