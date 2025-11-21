'use strict';
//-->
const words = ' photosynthesis process ';
const method1 = words.charAt(1); // character
const method2 = words.charCodeAt(0); // unicode of character
const method3 = words.at(1); // character, supports -ve indexing
const method4 = words.codePointAt(0); //

const method5 = words.toLowerCase();
const method6 = words.toUpperCase();

const method7 = words.slice(-4); // last four character
const method8 = words.slice(1, 5); // [1, 5)
const method9 = words.substring(1, 7); // doesn't support -ve indices

const method10 = words.trim(); // remove white space both ends of the string
const method11 = words.trimEnd();
const method12 = words.trimStart();

const method13 = words.indexOf('s', 6);
const method14 = words.lastIndexOf('s');
const method15 = words.includes('o'); // boolean
const method16 = words.startsWith('p'); // boolean
const method17 = words.endsWith('s'); //boolean

const method18 = words.replace('o', 'a');
const method19 = words.replaceAll('o', 'a');
const method20 = words.split(' ');
const method21 = words.padStart(30, '*');
const method22 = words.padEnd(30, '*');

const method23 = words.repeat(2);
