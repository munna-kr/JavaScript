'use strict';

const newMap = new Map();
newMap
  .set('name', 'newHuman')
  .set('city', 'Patna')
  .set('age', 23)
  .set('Profession', 'WebDev');

console.log(newMap);

const human = new Map();
human.set('original', 'HomoSapiens', 'type', 'animal');
console.log(human);
