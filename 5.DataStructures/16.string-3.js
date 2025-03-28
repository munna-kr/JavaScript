'use strict';

// =====> STRING Part 3 <======

// ===> split(): it returns an array with splitted words <===

const sentence = 'Once+upon+a+time+there+was+a+king';
const [...wordsArray] = sentence.split('+');
console.log(wordsArray);

const names = 'john smith';
// --> result: John SMITH
let [firstname, lastname] = names.split(' ');
firstname = firstname[0].toUpperCase() + firstname.slice(1);
lastname = lastname.toUpperCase();
console.log(firstname, lastname);

// function to capitalize first character of strings
function capitalizeName(names) {
  let formattedName = [];
  let nameArray = names.split(' ');
  for (let name of nameArray) {
    formattedName.push(name[0].toUpperCase() + name.slice(1));
    // replace method
    // formattedName.push(name.replace(name[0], name[0].toUpperCase()));
  }
  console.log('---');
  console.log(formattedName.join(' '));
}

capitalizeName('john singh smith');

// ====> Padding <=====
// --> add characeter, start and ending
const topic = 'The Evolution of JavaScript';

console.log(topic.padStart(35, '*'));
console.log(topic.padEnd(35, '*'));

console.log(topic.padStart(35, '>').padEnd(44, '<'));

// credit card masking application
function crediCardMask(ccNumber) {
  const ccNumberStr = String(ccNumber);
  const visibleDigit = ccNumberStr.slice(-4);
  const maskedCredNum = visibleDigit.padStart(ccNumberStr.length, '*');
  return maskedCredNum;
}

console.log(crediCardMask(3228929201010));

// ====> repeat <====
const message = 'Bad weather...All flights delayed.. ';
console.log(message.repeat(3));
