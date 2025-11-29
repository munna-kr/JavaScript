// Accessing child inside DOM
console.log(document.body.lastChild);
console.log(document.body.childNodes);

document.body.childNodes[5].textContent = 'This is the comment';
console.log(document.body.getElementsByTagName('p'));

// creating array of all nodes of document.body
const arr = Array.from(document.body.childNodes);
console.log(arr);

// arr[3].style.color = "red";
const h1 = arr[3];
h1.style.color = 'red';
console.log(arr[3]);
console.log(typeof document);
console.log(typeof window);

// Accessing parent inside DOM
console.log(document.body.firstChild);
const a = document.body.firstChild;
console.log(a.parentElement);

console.log(a.nextSibling);
