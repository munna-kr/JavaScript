// ==> console.log console.dir
//
console.log(document.getElementsByTagName('span')[0]); //will give object but if it direcly runs in browser console will give DOM tree

console.dir(document.getElementsByTagName('span')[0]); // give objesct in browser console also

console.log(document.getElementsByTagName('span')[0].outerHTML); // will just give HMTL snapshot

//
//
// ==> tagname, nodename
//
// -> tagname: only works for Element nodes (actual Html tags)
// -> doesn't work for text nodes, comment nodes, document nodes
// -> always return uppercase tag name
console.log('document.body.firstChild->', document.body.firstChild);
console.log(
  'document.body.firstChild.tagName->',
  document.body.firstChild.tagName
); // undefined
console.log(
  'document.body.firstElementChild->',
  document.body.firstElementChild
);
console.log(
  'document.body.firstElementChild.tagName->',
  document.body.firstElementChild.tagName
);

// -> nodename: works for every nodes in DOM
// element nodes --> "H1", "P"
// text nodes --> "#text"
// comment nodes --> "#comment"
// document --> "#document"
console.log('document.body.firstChild->', document.body.firstChild);
console.log(
  'document.body.firstChild.nodeName->',
  document.body.firstChild.nodeName
);

console.log(
  'document.body.firstElementChild->',
  document.body.firstElementChild
);
console.log(
  'document.body.firstElementChild.nodename->',
  document.body.firstElementChild.nodeName
);

//
//
// ===> innerHTML and outerHTML
//
// --> innerHTML: only the text content of the element, ..
// <element>inside</element>
// it returns only the content(string value) that's inside the element including all spcaing
// and inner HTML tags (if there's any)
// only valid for element nodes
console.log(document.body.getElementsByTagName('h1')[0].innerHTML);
console.log(document.body.getElementsByTagName('span')[0].innerHTML);
// setting innerHTML
const newH2 = (document.getElementById('span1').innerHTML =
  '<h2>new Heading2</h2>');
console.log(newH2);

//--> outerHTML:
// it returns element itself + the content that's inside the element
console.log(document.body.getElementsByTagName('h1')[0].outerHTML);

// setting outerHTML
const newOuterH2 = (document.getElementById('span1').outerHTML =
  '<h2>new Heading2</h2>');
console.log(newOuterH2);

// --> data, nodeValue
console.log(document.body.firstChild.nodeValue);
console.log(document.body.firstChild.data);

const h1 = document.querySelectorAll('h1')[0].firstChild.nodeType;
console.log(h1);

const comment = document.body.childNodes[1].nodeValue;
console.log(comment);

// ==> textContent
// provides access to text inside an element and not any html tags
// ✔ text inside nested elements
// ✔ text hidden with CSS
// ✔ text in script/style tags (if present)
// ✔ whitespace and line breaks exactly as they exist

console.log(`\n..\n..\ndocument.body.textContent <start>`);
console.log(document.body.textContent); // webpage as text
console.log(`\n..\n..\ndocument.body.textContent <end>`);

// ==> hidden property
/*
-> hidden is a boolean HTML attribute that hides an element from the page.
-> Works like display: none
-> Easy to control with JS (element.hidden = true/false)
-> Does NOT appear on page
-> Does NOT take up space
*/
const hiddenDiv = document.getElementById('hiddenDiv');
console.log(hiddenDiv);

// element will be visible on webpage
// hiddenDiv.hidden = false;
