console.log("----- for loops -----");

for (let a = 0; a <= 10; a++) {
    console.log(`This is repetiting task ${a}`);
}


// ==========> for ...of Loop (ES6)
// ==> works with iterable
// ==> arrays, strings, Map, sets

let newLogins = ['jack', 'rohan', 'david', 'peter', 'rahu'];
for (let user of newLogins) {
    console.log(user);
}


// ==========> for...in
// ==> used in: objects

const users = {
    firstName: 'Jack',
    lastName: 'Ryan',
    birthYear: 1999,
    job: 'Technician',
};
for (let item in users) {
    console.log(`${item} :${users[item]}`);
}