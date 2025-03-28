'use strict';

/*



Advanced String Challenges


Convert a string into title case (capitalize first letter of every word).
Truncate a string if it exceeds a certain length and add "..." at the end.
Find the most frequently occurring character in a string.
Extract numbers from a string and return them as an array.
Encode a string using a simple Caesar cipher.
Count the number of words in a string.
Check if two strings are anagrams of each other.
Convert a camelCase string into a sentence with spaces.
*/

// ==> Intermediate level questions for strings..

// 1. Reverse a string without using built-in functions.
function reverse(str) {
  let revStr = [];
  for (let i = 1; i <= str.length; i++) {
    revStr.push(str.at(-i));
  }
  return (revStr = revStr.join(''));
}
console.log(reverse('I am Reversed'));
//
//
//

// 2. Check if a string is a palindrome.
function checkPalindrome(str) {
  let newStr = str.toLowerCase();
  let reversedStr = reverse(newStr); // function from Q1
  if (newStr === reversedStr) console.log(`"${str}" is Palindrome`);
  else console.log(`"${str}" is not Palindrome`);
}
checkPalindrome('MaDam');
checkPalindrome('racecar');
checkPalindrome('coding');

//
//
//
// 3. Count the number of vowels in a string
function countVowel(str) {
  let count = 0;
  let newStr = str.toLowerCase();
  for (let char of newStr) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    )
      count++;
  }
  return count;
}
console.log(countVowel('Total vowels In this sentence'));

//
//
//
// 4. Count the occurrences of a specific character in a string.
function charCount(str, char) {
  let newStr = str.toLowerCase();
  let count = 0;
  for (let ch of newStr) {
    if (ch === char) count++;
  }
  return count;
}
console.log(charCount('Photosynthesis Process', 's'));

//
//
//
// 5. Extract the domain name from an email address.
function domainName(email) {
  let atIndex = 0;
  for (let char of email) {
    atIndex++;
    if (char === '@') break;
  }
  let domName = email.slice(atIndex);
  return domName;
}
console.log(domainName('xyz@protonmail.com'));

//
//
//
// 6. Capitalize the first letter of each word in a sentence.
function capitalize(str) {
  let strArray = str.split(' ');
  let capitalizeWords = [];
  for (let word of strArray) {
    capitalizeWords.push(word[0].toUpperCase() + word.slice(1));
  }
  return capitalizeWords.join(' ');
}
console.log(capitalize('this is the mars planet broadcasting...'));

//
//
//
// 7. Check if a string starts with a specific character using .startsWith()
function charCheck(str, char) {
  let newStr = str.toLowerCase();
  if (newStr.startsWith(char)) return true;
  else return false;
}

console.log(charCheck('coding', 'c'));
console.log(charCheck('coding', 'e'));

//
//
//
// 8. Find the longest word in a sentence
function longestWord(str) {
  let maxLength = 0;
  let longWord = '';
  let wordArray = str.split(' ');
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length;
      longWord = wordArray[i];
    }
  }
  return longWord;
}
console.log(
  longestWord('This is the beautiful view from the top of the Mount Everest')
);

//
//
//
// 9. Remove all non-alphabetic characters from a string
