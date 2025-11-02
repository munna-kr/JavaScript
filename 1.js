const users = { name: 'John', age: 30 };
const nums = [1, 2, 3, 4, 5];
console.log(users.hasOwnProperty('age')); // true
console.log(Object.keys(users)); //
console.log(Object.values(users)); // 'john', 30
console.log(Object.entries(users));
console.log(
  Object.fromEntries([
    ['name', 'Jane'],
    ['age', 25],
  ])
);

console.log('merging');
const newUsers = { name: 'Alice', age: 28 };
console.log(Object.assign({ users }, newUsers)); // merging objects

users.class = 'A';
console.log(users);
delete users.class;
console.log(users);
Object.freeze(users);
users.profit = 1000; // This will not work, because the object is frozen
Object.seal(users);
users.group = 'DataAnalyst'; // This will work, because sealing allows modification of existing properties
users.name = 'Doe'; // This will work, because sealing allows modification of existing properties
console.log(users);

Object.preventExtensions(users);
users.country = 'USA'; // This will not work, because the object is not extensible
console.log(users);
console.log(Object.hasOwn(users, 'name')); // this is the new way
console.log(users.hasOwnProperty('name')); // this is the old way
// use the new way, it's introduced in ES2022
