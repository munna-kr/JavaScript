'use strict';

/*
==============> MAPS <===============
==> the Map object is a collection of key-value pairs where keys can be of any data type

==> A key in the Map may only occur once; it is unique in the Map's collection.
*/

// 1. creating a map
const myMap = new Map();

// 2. set(key)
// adds or updates an entry in map with a specified key and a value.
myMap.set('Name', 'CoderGuy');

myMap
  .set('location', 'INDIA')
  .set('Known_Language', ['Hindi', 'Sanskrit', 'Tamil', 'Bengali', 'English'])
  .set('Profession', 'WebDev')
  .set(true, 'Member of Org.')
  .set('nothing');

// 3. get(key)
// returns a specified element from this map or undefined if the key can't be found in the map object
console.log(myMap.get('Name'));

// 4. has(key)
// return true if an element with the specified key exists in the Map object; otherwise false.
console.log(myMap.has('location'));

// 5. delete(key)
// removes the specified element from map by key.
myMap.delete('location');

// 6. map.size
// returns the total number of key in the map
console.log(myMap.size);

// 7. keys()
// Returns an iterator of all keys in the Map.
console.log(myMap.keys());

// 8. values()
// Returns an iterator of all values in the Map.
console.log(myMap.values());

// 7. etnries()
// Returns an iterator of [key, value] in the Map.
const keyValue = myMap.entries();
for (const pair of keyValue) console.log(pair);

// 8. clear()
// remove all elements from map
myMap.clear();

console.log(myMap.size);

console.log('----Example-----');

//
const example = new Map();
example
  .set('name', 'newHuman')
  .set('city', 'Patna')
  .set('age', 23)
  .set('Profession', 'WebDev');

console.log(example);

//
const human = new Map();
human
  .set('sciName', 'HomoSapiens')
  .set('category', 'Living-Things')
  .set('origin', 'Earth')
  .set('property', ['walking', 'Speaking', 'Thinking'])
  .set('model', example);

console.log(human.keys('category'));
console.log(human.get('sciName'));

//====> object as map key
human.set(['abc', 'xyz', 'mno'], 'FavBook: System_Programming');
console.log(human.get(['abc', 'xyz', 'mno']));
// ['abc', 'xyz', 'mno'] in get() is not same object to what we put in set(['abc', 'xyz', 'mno']), even though we wrote both as same but inn heap both are different.
// that's why, when we do: console.log(human.get(['abc', 'xyz', 'mno'])); we got undefined

// we need to pass array, ater declaring to get same object

const commonGuys = ['abc', 'xyz', 'mno'];
human.set(commonGuys, 'FavBook: System-Programming');

console.log(human.get(commonGuys));
