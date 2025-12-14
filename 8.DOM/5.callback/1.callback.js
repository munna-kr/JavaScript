// ==> JavaScript is single threaded language
// means it can do only one task at one time.

// Synchronous action: when javaScript engine finish taske in sequential order one by one and without finishing one task, it dont got to next task.

// Synchronous = run now, finish before next step, blocks the thread.
console.log('starting...');
// alert('Hello the synchronous action...');
console.log('ended...');
// this is a synchronous action because execution stops until the user interacts (closes the alert box).

// ==> But we often need to do tasks that take time, such as:
// > Fetching data from an API
// > Reading files
// > Waiting for a timer
// > Responding to user events
// > These tasks should not block the rest of the code.
// So, JavaScript uses asynchronous actions..

// Asynchronous action: task that run in the background and one it complete it notify the JS
// it doesn't block the execution of code.

console.log('starting asynchronous aciton'); // 1

setTimeout(() => {
  console.log('run later, after 1 sec'); // 3
}, 2000);

console.log('ended asynchronous aciton'); // 2
// here setTimeout() didn't block the thread

// Callback
// A callback is a function passed as an argument to another function,
// to be executed later.
// (usually after an asynchronous action completes)

// main function
function greet(user, callbackFn) {
  console.log('Hello', user);
  callbackFn();
}
// callback function
function afterGreet() {
  console.log('How are you!');
}
// calling main function
greet('jack', afterGreet);

//==> callback with arguments
function calcualtor(a, b, result) {
  console.log('calculator...');
  result(a + b);
}

calcualtor(10, 20, function (callbackFn) {
  console.log(callbackFn);
});

//
// callback function after loading image/script
//
const imgLink =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrvE85eW9nMQbakX11jPL2XybGmNTIlhnKw&s';

//==>
// with callback
function laodImg(src, callbackFn) {
  const img = document.createElement('img');
  img.src = src;

  img.onload = function () {
    console.log('Image Loaded', src);
    callbackFn(null, src);
  };

  img.onerror = function () {
    callbackFn('Error Loading image');
  };
  document.body.appendChild(img);
}

laodImg(imgLink, function (callbackFn) {
  // what to do
  console.log(callbackFn);
  console.log("It's log message after image loaded successfully");
});
// with callback...
// user have control, what to do next
// user can select next actions after image/script loaded
//
//
//==>
// without callback
function laodImg(src) {
  const img = document.createElement('img');
  img.src = src;

  img.onload = function () {
    console.log('Image Loaded', src);
  };

  img.onerror = function () {
    console.log('Error Loading image');
  };
  document.body.appendChild(img);
}

laodImg(imgLink);

// without callback no control what to do after loading image/script
// it will just show load/unload log messages
