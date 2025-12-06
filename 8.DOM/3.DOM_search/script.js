// search using document.getElementById('');
// when id attribute is given to an element
const cardSecond = document.getElementById('secondCard');
cardSecond.style.color = 'teal';

//
//
// search document.querySelectorAll (not live)
// css selector attribute
// It accepts any valid CSS selector

// -> By class name
// document.querySelectorAll - select all element with same classname
const card = document.querySelectorAll('.card'); // select all element with class: card
card[2].style.color = 'purple'; // 3rd element with class: card

// document.querySelector - select first element of specific class
const cardFirst = document.querySelector('.card');
cardFirst.style.color = 'red';

//
// -> By id name
console.log(document.querySelectorAll('#firstCard'));

// --> By tag
console.log(document.querySelectorAll('nav'));

// --> multiple selectors
console.log(document.querySelectorAll('.row', '.container'));

// --> descendent selecotr
console.log(document.querySelectorAll('ul li'));

console.log(document.querySelectorAll('.container', '.card-body'));

//
//
// ==> document.getElementByTagname (live)
// returns all elements of given tag name
console.log(document.getElementsByTagName('div'));

// ==> by class name (live)
// returns all elements with given class
console.log(document.getElementsByClassName('card-body'));

// ==> by name of attribute (not live)
// use when inputs have a name attribute
// useful in radio button group
console.log(document.getElementsByName('button'));

//
//==> matches
// Checks whether a specific element matches a CSS selector.
// element.matches("css-selector")
const id1 = document.getElementById('id1');
console.log(id1.matches('.box')); // true
console.log(id1.matches('#id1')); // true
console.log(id1.matches('.container')); //false

//
//==> closest
// Finds the nearest ancestor (including itself) that matches the selector.
const sp1 = document.getElementById('sp1');
console.log(sp1.closest('.box'));
console.log(sp1.closest('#sp1'));

//
//==> contains :  element.contains(nodes)
// Checks whether a node contains another node (child, grandchild, etc.)
const container = document.querySelector('.box-container');
console.log(container.contains(id2));
console.log(container.contains(sp1));

// matches → “Am I this?”
// closest → “Find my nearest parent that is this.”
// contains → “Do I have this inside me?”
