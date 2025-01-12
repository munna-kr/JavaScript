// Logical Assignment Operators 
// it combine logical operators (||, &&, ??) with assignment.

/*
x ||= y; // Logical OR assignment
x &&= y; // Logical AND assignment
x ??= y; // Nullish Coalescing assignment
*/

const store1 = {
    storeName: 'Coffee Cafe',
    customerNumbers: 40,
    owenerName: 'Dangerous-Man',
};

const store2 = {
    storeName: 'Desi Chai',
    // customerNumbers: 90,
    location: 'India',
};

// Logical OR assignment (||=)
// store1.owenerName = store1.owenerName || 'Not available';
// store2.owenerName = store2.owenerName || 'Not available';

// we can write above code as ..
store1.owenerName ||= 'Not available'
store2.owenerName ||= 'Not available'

console.log(store1.owenerName);
console.log(store2.owenerName);

// Logical AND assignment (&&=)
// Assigns a value to the variable only if the current value is truthy.
let num = 10;
num &&= 20;
console.log(num);

// store1.customerNumbers = store1.customerNumbers && 30;
// store2.customerNumbers = store2.customerNumbers && 49

//
store1.customerNumbers &&= 30;
store2.customerNumbers &&= 50;

console.log(store1.customerNumbers);
console.log(store2.customerNumbers);

// Nullish Coalescing Assignment (??=)
let count = 0;
let score = undefined;

// count = count ?? 20;
count ??= 20;
console.log(count);

// score = score ?? 30;
score ??= 30;
console.log(score);