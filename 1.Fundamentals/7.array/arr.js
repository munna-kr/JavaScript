// ==> ARRAY
// ==> An array is a special variable that can store multiple values in a single variable.
// ==> we can store different data type value in the same array (unlike C/C++)

const mixArray = [12, 13, 'hello', 10.12, true]
console.log(mixArray);

//--
const users = ['jack', 'rock', 'john', 'mohan', 'sohan'];
console.log(users);

// accessing the elements of array
console.log(users[2]);

// changing the elements of array
users[2] = 'moon';
console.log(users[2]);
// array is defined with const keyword, but it's still mutable
// because, 'const' keywords only makes primitve data immutable
// and array is not primitve data type

// adding new element
users.push('hunter'); // end of the array
users.unshift('thomas'); // starting of the array

//removing element
users.pop(); // remove last element 
users.shift(); // remove first element

users.length; // total elements of an array

users.reverse() // reverse array

// return element located at specific index
const loc = users.at('3');

// return index of specific element
users.indexOf('mohan');

// return boolean value, if specific element is present or not..
console.log(users.includes('rock'));
console.log(users.includes('horse'));
