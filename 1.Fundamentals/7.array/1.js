const users = ['jack', 'rock', 'john', 'mohan', 'sohan'];
console.log(users);

// accessing the elements of array
console.log(users[2])

// changing the elements of array
users[2] = 'moon';
console.log(users[2]);
// array is defined with const keyword, but it's still mutable
// because, const. keywords only makes primitve data immutable
// and array is not primitve data type


// adding new element
users.push('hunter'); // add new element, end of the array
console.log(users);

users.unshift('thomas'); // add new element, at starting of the array 
console.log(users);

//removing element
users.pop(); // remove last element from the array
console.log(users);

users.shift(); // remove first element 
console.log(users)


// return element located at specific index
const loc = users.at('3');
console.log(loc);

// return index of specific element
users.indexOf('mohan');
console.log(users.indexOf('mohan'));

// return boolean value, if specific element is present or not..
console.log(users.includes('rock'));
console.log(users.includes('horse'));