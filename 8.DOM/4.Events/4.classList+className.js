const p1 = document.getElementById('first').firstElementChild;
const p2 = document.getElementById('second').firstElementChild;

//-------> className <---------
// string property (not a funciton)
// give all class names as one string
// element.className
//
console.log(p1.className); // read all class names
//
p1.className = 'font-big'; // replace all classes
//
p1.className += ' bg-red'; // add bg-red, but keep existing one
// space in  is needed' bg-red' not'bg-red'
//---------> ******** <------------

//
//---------> classList <-------
// return all class as DOMTokenList(special object)
// it's also not a function
// it has some methods
//
console.log(p2.classList); // gives all class as DOMTokenList

p2.classList.remove('font-small', 'bg-yellow'); // remove one or more clasees

p2.classList.add('font-big', 'bg-red'); // add one or more classes

p2.classList.toggle('dark-text'); // add if not present, remove if present

p2.classList.replace('bg-red', 'bg-yellow'); // replace oldClass to newClass

console.log(p2.classList.contains('bg-red')); // chechk if exists, return boolean value
