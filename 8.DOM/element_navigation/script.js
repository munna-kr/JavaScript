console.log(document.body.children);
// How to avoid text , comment nodes
// only getting element

console.log(document.body.firstChild); // it also includes text as node

// element only navigation
const a = document.body;
console.log(a.firstChild);
console.log(a.firstElementChild);
console.log(a.nextElementSibling);
console.log(a.lastElementChild);
console.log(a.previousElementSibling);

// nagivating through  <nav></nav>
const navigation = document.body.children[0];
navigation.style.background = "green";
navigation.style.color = "white";

// nagivating through <div></div>
const about = document.body.children[1];
console.log(about);

about.style.color = "black";
about.style.background = "powderblue";
about.style.margin = "10px 0px";

// ==> tables
const t = document.body.children[2].firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.tFoot);
console.log(t.tHead);
console.log(t.caption);
console.log(t.tBodies);

console.log(t.firstElementChild);
