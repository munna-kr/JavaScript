// ==> OBJECT
// ==> an object is a collection of key-value pairs
// ==> value can be of different data types: strings, numbers, arrays, functions, even objects.
// ==> 
// ==> [...] for array and {...} for object

const users = {
  firstName: 'Jack',
  lastName: 'Ryan',
  birthYear: 1999,
  job: 'Technician',
  friends: ['rohan', 'rock', 'peter', 'thomas'],
  hasDrivingLic: true,
  hasPassport: false,
  tempLocation: 'Tokyo',
  nationality: 'Indian',

  //method
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    const summary = `${this.firstName} is a ${this.job}, he is ${this.age
      } years old, he has ${this.hasDrivingLic ? 'a' : 'no'
      } Driving License, he is from ${this.location}.`;
    return summary;
  },
};

//// dot vs bracket notation for accessing object properties

// dot notation
console.log(users.firstName);

// bracket notation
// ==> use in for...in Loop to iterate 'value'
console.log(users['firstName']);

// const enteredValue = prompt("What do you want to know? firstName, lastname, birthYear, job, friends, hasDrivingLic, hasPassport, nationaltiy");

// if (users[enteredValue]) {
//     console.log(`${enteredValue}: ${users[enteredValue]}`);
// }
// else {
//     console.log("Please choose a option from: firstName, lastname, birthYear, job, friends, hasDrivingLic, hasPassport, nationaltiy")
// }

// adding new porperties in object
users.location = 'India';
users.instagram = 'techjack';
console.log(users);

/////////// method; property of object as function
console.log(users.calcAge());
console.log(users.getSummary());

// deleting property from object
delete users.tempLocation;

console.log(users);
