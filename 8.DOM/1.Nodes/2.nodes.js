// Node :
// it is basic bulding block of the entire DOM.
// Everything inside a webpage —> tags, text, comments, even spaces is a node.
// A node is any single object in the DOM tree.
//
//
// -> nodeName
// nodeName --> "H1", "#text", ....

// ==> nodeType : it tells what kind of node something is
// Each node in the DOM has a numeric type

// ==> Types of nodes, numeric type and example
// element nodes ---> (1) "H1", "P"
// text nodes  -----> (3) "#text"
// comment nodes ---> (8) "#comment"
// document --------> (9) "#document"

// ===> A tag is not text. They are different nodes
// </p> Hello </p>
// two different nodes here
// <p> -- element node
// <Hello> -- text node (child of <p>)

//
// ==> DOM functions treat nodes differently..
//
// --> element nodes
// element.nodeValue
const heading1 = document.body.getElementsByTagName('h1')[0];
console.log(heading1.nodeValue); // null
console.log(heading1.nodeName); //  H1
console.log(heading1.nodeType); // 1
//
// --> text nodes
// text.nodevalue
const textNode = document.body.getElementsByTagName('h1')[0].firstChild;
console.log(textNode.nodeValue); // string value
console.log(textNode.nodeName); // #text
console.log(textNode.nodeType); // 3

//
