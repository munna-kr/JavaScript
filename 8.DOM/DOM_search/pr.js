//Q1  changing color to red
const child = document.body.children;
const navbar = child[0];

const home = navbar.children[0].firstElementChild.firstElementChild;
home.style.color = 'red';

// Q3
const table = child[1];
console.log(table);
const company = table.children[0].firstElementChild.firstElementChild;
company.style.color = 'red';

const comments = table.children[0].firstElementChild.lastElementChild;
comments.style.color = 'cyan';

// Q4
const li = document.getElementsByTagName('li');

for (let i of li) {
  i.style.background = 'black';
}

// Q5
