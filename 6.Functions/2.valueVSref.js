//==> How passing argument works: VALUE VS REFERENCE
/*
Whenever, something passed into a function.
It's either 'passed By value' or 'passed By reference'.
depending on what type of data it is

==> passed By value (number, string, Boolean, etc)
when a primitve value is passed into function,
a copy of that value is sent to function.
so, changing inside the function does not affect
the original. 

==> passed By reference (array, object)
when a non primitve value is passed into function,
Javascript sends a reference (address) to the same 
memory location.
so, changing inside the function, change 
the original also. 
*/

//--> passed By value
// example
function changevalue(value) {
  value = 'Hello';
}
let msg = 'Bye';

changevalue(msg);
console.log(msg);

//--> passed By reference
// example
const person = {
  name: 'Jack',
};
function changeName(user) {
  user.name = 'David';
}
changeName(person); // change in original
console.log(person);

// --- more examples
// 1...
const group = 'young-Mind'; // primitive (string)

const user = {
  name: 'Jack',
  age: 20,
  idNo: '12fd3',
}; // non primitive (object)

// function to verify ID of user....
function verify(clan, person) {
  if (person.age < 18) {
    person.idNo = 'rejected';
    clan = 'Teen-Wing';
    console.log(
      `${person.name} is minor, IDNo.:${person.idNo}, New group:${clan}`
    );
  } else {
    person.idNo = 'accepted';
    clan = 'Youth-wing';
    console.log(
      `${person.name} is adult, IDNo.:${person.idNo}, New group:${clan}`
    );
  }
}

verify(group, user);
console.log(user.idNo); // changes in original object
console.log(group); // no changes in original variable group

// 2...
// function...
const flight = 'B8IN'; // primitive value: string

const jack = {
  name: 'Jack Ryan',
  passport: 19303993,
}; // non primitve : object

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
console.log(flight); // no changes
console.log(jack); // changes in original value
