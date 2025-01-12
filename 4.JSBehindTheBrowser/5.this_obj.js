'use strict';
/*
====> 'this' keyword
Most typically, it is used in object methods, 
where 'this' refers to the object that the method is attached to, 
thus allowing the same method to be reused on different objects.

if we use same method for another object, then 'this' refers to 
that another object.
*/

// Example
const human = {
  animal: 'Human',
  sciName: 'Homo Sapiens',

  displaySciName: function () {
    console.log(`The scientific name of ${this.animal} is ${this.sciName}.`);
  },
};
human.displaySciName();

const tiger = {
  animal: 'Tiger',
  sciName: 'Panthera Tigris',
};

// borrowing method of another object
tiger.displaySciName = human.displaySciName;
tiger.displaySciName();

/*
'this' keyword is used in displaySciName method which is located in 'human' object,
but when 'displaySciName' function call for 'tiger' object,
it shows the 'sciName' of 'tiger' object.
Hence, 'this' keyword refers the object that is calling it.
*/
