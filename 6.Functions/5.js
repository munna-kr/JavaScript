// converting string into one word by removing all space
const oneWord = function (word) {
  return word.replace(/ /g, '').toLowerCase();
};

// transform first word into uppercase
function upperFirstWord(str) {
  const [first, ...others] = str.split(' ');
  return first.toUpperCase() + ' ' + others.join(' ');
}

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

const str = 'javascript is the best';

transformer(str, upperFirstWord);

transformer(str, oneWord);
// here upperFirsWord and oneWord are callback functions
// they are not directly called by us, it's called by the fuction: transformer
// and transformer is the high order function

// function returning function

// using arrow function
const greet = (greeting) => (name) => console.log(greeting, name);

const greetings = greet('Hello');
greetings('Jack');

// using function expression
const greet2 = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetings2 = greet('Hiii');
greetings2('Jack');

// this keyword
// manually adding, using call
const indigo = {
  airline: 'Indigo Air Lines',
  iataCode: 'IA',
  bookings: [],

  //book
  book(name, flightNum) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};
indigo.book('Jack', 282);

const airIndia = {
  airline: 'Air India',
  iataCode: 'AR',
  bookings: [],
};

const skyIndia = {
  airline: 'Sky INDIA',
  iataCode: 'SI',
  bookings: [],
};

// indigo.book.call(airIndia, 'John', 2929);
const book = indigo.book;
book.call(airIndia, 'John', 2929);

// apply
const passengerData = ['Peter', 2344];
book.apply(airIndia, ['David', 129]);
book.apply(airIndia, passengerData);

// call and spread Operator
book.call(skyIndia, ...passengerData);

// Bind method: it returns new funtion
// since, bind returns new function it can assigned to new variable
const bookSI = book.bind(skyIndia);
bookSI('John', 2910);

// predefined one parameter alongside object
const bookAR = book.bind(airIndia, 'John');
bookAR(2920);

//partial application
const addTax = function (rate, value) {
  return value + rate * value;
};
const gst = addTax.bind(null, 0.28);

console.log(gst(400));

// using function returnig fn
const newAddTax = function (rate) {
  return (value) => value + rate * value;
};

const gTax = newAddTax(0.28);
console.log(gTax(400));

//---run once

const runOnce = function () {
  console.log('This will run only one times');
};
runOnce();

// immediately invoked function expression
// 1st style
(function () {
  console.log('This will never run again!!');
})();

// 2nd style
(() => console.log("This won't also run again!!"))();

// and in modern JS IIFE is not used anymore, if we want to create a new scope for data privacy. We can simply, use {} and declare variable inside it
{
  const privateVar = 1930;
}

// for closure scenario
// alwyas returning a function is not necessary
let a;

function abc() {
  let x = 10;

  a = function () {
    console.log(x ** 2);
  };
}
// variable 'x' inside backpack of function 'a'
abc();
a();
