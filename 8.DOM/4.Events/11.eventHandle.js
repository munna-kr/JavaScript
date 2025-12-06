const btn = document.getElementById('btn');
//
const greet = function () {
  console.log('Hello world1');
};

const msg = function () {
  console.log('Hello world2');
};
//
// ==> addEventListener('the event type', 'the function that runs when event fires')

btn.addEventListener('click', greet);

btn.addEventListener('click', msg);

//==> removeEventListener('eventName', handler function)
// hadnler fuction must be the same that we add in addEventListener
let a;
// a = prompt('Enter a number: ');

if (a === '2') {
  btn.removeEventListener('click', greet);
}

//
//
//===> Event Object
//--> event = a special object created by browser
//--> It describes exactly what happened.

//-> This object contains details about the event, such as:
//-> Which key was pressed
//-> What element was clicked
//-> Mouse position
//-> Event type
//-> Timestamp
//-> Whether Ctrl/Shift/Alt was pressed

// ===> event object properties ( some important ones)
//
//--> event type: "click", 'keydown', 'input'...

//--> event.target
//-> the element that triggered the event
// console.log(event.target.texContent);

//--> event.currentTarget
//-> the element the listener is attached to

//--> event.key(keyboards events)
//->  which key was pressed

//--> event.clientX / event.clientY (mouse events)
//-> Mouse position on the screen

//--> event.preventDefault()
//-> stops default browser action

// example:
//
btn.addEventListener('click', function (event) {
  console.log('event.target->', event.target);

  console.log('event.target.textContent->', event.target.textContent);

  console.log('event.currentTarget->', event.currentTarget);

  console.log('event.key->', event.key); // undefined

  console.log('event.clientX / Y ->', event.clientX, event.clientY);

  console.log('event.preventDefault->', event.preventDefault);
});

btn.addEventListener('keydown', (e) => console.log(e.key));
