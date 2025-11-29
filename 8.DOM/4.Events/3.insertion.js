// --> createElement: create a new empty element
// const newDiv = document.createElement('div');
// element is created but Now, it's not on webpage
// it's just in JS memory
// to insert in hmtl, insertion method required

//==> There are two different methods
// ==> create element
// ==> insert element

// insetion methods
//----------------------------------
const parent = document.getElementById('container');
const firstChild = document.createElement('span');
firstChild.innerHTML = 'this is newly added paragraph using append()';
//
// 1. append()
// adds content inside the element, at the end.
parent.append(firstChild);
//--------------------------------

//--------------------------------
const secondChild = document.createElement('span');
secondChild.innerHTML = 'this is newly added paragraph using prepend()';
//
// 2. prepend()
// adds content inside the element, at the beginning
parent.prepend(secondChild);
//---------------------------------

//----------------------------------
const thirdChild = document.createElement('span');
thirdChild.innerHTML = 'newly added paragraph using before()';
//
// 3. before()
// add before the element, outside of the element
parent.before(thirdChild);
//----------------------------------

//----------------------------------
const fourthChild = document.createElement('span');
fourthChild.innerHTML = 'newly added paragraph using after()';
// 4. after()
// add after the element, outside of the element
parent.after(fourthChild);
//----------------------------------

//----------------------------------
const oldDiv = document.getElementById('replaceable');
const replacement = document.createElement('span');
replacement.innerHTML = "I'm the new guy in town, replaced another";
const btn = document.getElementById('btn');
//
// 5. replaceWith()
// replaces the element entirely with another element
btn.addEventListener('click', () => {
  oldDiv.replaceWith(replacement); // replacing
});
//----------------------------------

// insertAdjacentHTML();
// insert HTML string relative to the elememnt
// element.insertAdjacentHTML(position, htmlString)
//
// - "beforebegin"
// before element
const adjacent = document.getElementById('adjacent');
const beforebegin = document.createElement('span');
beforebegin.innerHTML = 'beforebegin';
adjacent.insertAdjacentElement('beforebegin', beforebegin);

// - "afterbegin"
// after element  inside, at start
const afterbegin = document.createElement('span');
afterbegin.innerHTML = 'afterbegin';
adjacent.insertAdjacentElement('afterbegin', afterbegin);

// - "beforeend"
// at end, inside
const beforeEnd = document.createElement('span');
beforeEnd.innerHTML = 'beforeEnd';
adjacent.insertAdjacentElement('beforeend', beforeEnd);

// - "afterend"
// after element
const afterEnd = document.createElement('span');
afterEnd.innerHTML = 'afterEnd';
adjacent.insertAdjacentElement('afterend', afterEnd);

//
//
//=== nodes removal
// --> delete specific node form DOM
const newNode = document.getElementById('newNode');
newNode.remove();

// -- it will remove whole <body>...</body>
// document.body.remove();
