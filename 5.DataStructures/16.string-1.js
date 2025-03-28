'use strict';

/*
=====> STRING: Part 1 <=====
--> Textual data stored as strings
--> Strings can be enclosed within either single quotes, double quotes or backticks.
--> Single and double quotes are essentially the same.
*/

//
const str = 'Hello Coder';

// ==> Backticks <==
// --> it allows a string to span multiple lines:
const poem = `>>
Twinkle Twinkle little star!
How i wonder what you are ?
up above the world so high
Like a diamond in the sky
<<`;
// --> it allows to embed any expression into the string, by wrapping it in ${…}
const backticks = `Sum of 4 + 5 = ${4 + 5}`;

// ==> special characters <==
//
// --> \n : newline character
// --> \n is single character
// -> we can create multiline strings in single quotes using \n
const newlineChr = 'Look!\nWe are coding\nIt is good';

// --> \t Tab
const tabStr = `>>
Dear friend,
\t I hope this letter find you healthy and Happy.
I am writing this letter to express my .....`;

// --> Quotes, we need to add \ before < " ' ` > to add them in string
// \' \" \`
const quotes = `>>
I am \"Double Quotes\" 
I am \'single-quotes\'
I am \`Backticks\`
<<`;

// ===> Length:- string.length <===
// --> it gives total number of character in a string
// --> it's numeric property not function. so length() is not correct
const poemLength = poem.length;
// console.log('Name'.length);

// ===> Immutable <===
// --> strings are read only, so we can't change character of strings
let readOnly = 'back';
// readOnly[0] = 'h'; // gives error
//
// But we can assign a new value to same variable
readOnly = 'hack';

// ===> INDEX OF <===
// --> indexOf(subString, position)
// --> parameter position is optional
// --> if no parameter is passed to indexof(), it return -1
// --> By default it's value is 0
const word = 'incomprehensibilities';
console.log(word.indexOf('i'));
//
console.log(word.indexOf('i', 2));
// --> optional parameter 'position' means start searching the first occurence of parameter 'subString',
// from index 'position' of given string.
// here, ('i', 2) means : start searching first occurence of 'i' after the index 2 of string and,
// from index 2 in 'incomprehensibilities' means , at 'c' and,
// first occurence of 'i' after 'c' is at index 12
//
// --> Lastindexof(subString) : return index of last occurence of subString
// --> it's reverse of indexof()
console.log('---');
console.log(word.lastIndexOf('i'));
console.log(word.lastIndexOf('i', 2));
// start searching 'i' in reverse order from index 2
// (before index 2, the first occurence of 'i' is at index 0)

// Example:
const sentence = 'Hello guyz, this is the coding things';
let userString = sentence;
const target = 'i';
console.log(`${userString}. \ncontains: '${target}'`);
for (let i = 0; i <= userString.lastIndexOf(target); i++) {
  if (i === userString.indexOf(target, i)) {
    console.log(`at index ${userString.indexOf(target, i)}`);
  }
}

// ====> SLICE method <====
// --> The slice(index) method extracts a section of a string and returns it as a new string,
// without modifying the original.
// ( [index, optional_index) )
// index is inclusive and optional_index is exclusive
const newSentence = 'The quick brown fox jumps over a lazy dog';
console.log(newSentence.slice(4));
console.log(newSentence.slice(4, 9));
//
// --> extracting first and last word of a string
console.log(newSentence.slice(0, newSentence.indexOf(' ')));
console.log(newSentence.slice(newSentence.lastIndexOf(' ') + 1));
