'use strict';

/*
Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";
*/

function ucFirst(str) {
  if (!str) {
    str = 'Empty string';
  } else {
    str = str[0].toUpperCase() + str.slice(1);
  }
  return str;
}
console.log(ucFirst('coding is awesome..'));
console.log(ucFirst(''));

// ==> "Empty string is not null or undefined.
// ==> it is a valid string with zero characters.
// str === NULL and str === undefined, won't work for empty string.
