// Attribute methods
//
//==> 1. getAttribute()
// return attribute value
// element.getAttribute("attributeName")

// get the value of an attribute
const valueDiv = document.getElementById('firstDiv');
console.log(valueDiv.getAttribute('class'));

const attributeDiv = document.getElementById('secondDiv').getAttribute('class');
console.log(attributeDiv);

// ==> 2.hasAttribute()
// return boolean
// element.hasAttribute("attributeName")
// check if element has given attribute or not
const hasPara = document.getElementById('secondDiv').hasAttribute('para');
console.log(hasPara);

// ==> 3. setAttribute()
// element.setAttribute("attribute", "value")
// add a new attribute or replaces an existing one

// replacing existing one
const oldReplaced = document
  .getElementById('secondDiv')
  .setAttribute('class', 'aboutSection'); //class is existing one

// new atrribute: hidden with value true
const hidePara = document
  .getElementById('specialPara')
  .setAttribute('hidden', 'true');

//
// ==> 4. removeAttribute()
// remove an attribute from an element
document.getElementById('forRemoving').removeAttribute('class');

//
// ==> 5. toggleAttribute()
// either remove the attribute if exist or
// add the attribute if doesn't exist
const toggle = document.getElementById('toggle-Feature');

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  toggle.toggleAttribute('hidden');
});

//
// ==> 6. getAttributeNames()
// return a list of all attributes Name (not any value)
const btnAttribute = document.getElementById('btn').getAttributeNames();
console.log(btnAttribute);

//
// ==> CUSTOM ATTRIBUTE
// ==> we can create custom attribute in HTML element
// ==> using data-*
// ==> * stands for any attribute name
const userAttribute = document.getElementById('user');
console.log(userAttribute.dataset);
console.log(userAttribute.dataset.userAge);
console.log(userAttribute.dataset.userName);
// JS automatically converts
// user-age (html dataset attribute value )
// to
// userAge
// ** automatically turns hyphens into camelCase
//
// but if-> html dataset attribute value = userage
// then it won't get converted to userAge
// so we have to use: userage

// ==> setting data attribute in jS
userAttribute.dataset.city = 'Patna';
console.log(userAttribute.dataset);
// setAttribute() can also use

// ==> removing attribute
userAttribute.removeAttribute('data-city');
console.log(userAttribute.dataset);
