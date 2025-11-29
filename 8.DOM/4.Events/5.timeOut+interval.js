// ==> setTimeout()
// ==> setInterval()

//--> setTimeout(function, delayInMs)
//-- Runs a function ONE time after a delay
//
const timer = function () {
  const newMsg = document.querySelector('p');
  newMsg.innerHTML = 'Time over! <br> Have a beautiful Day ⌣';
};
setTimeout(timer, 4000); // after 4 second timer will start and change the content..

//
//--> setInterval(function, delayInMs)
//--> Runs a function continuosly, after a fix interval
//
const div = document.querySelector('div');
const repeatMsg = function () {
  div.innerText = 'Hello its changed!';
};
// setInterval(repeatMsg, 5000); forever until stopped

//
// ==> cancelling..
// -> clearTimeout(setTimeoutVariable)
// -> clearinterval(setIntervalVariable)
//
// -> clearTimeout()
const stopTimer = setTimeout(timer, 4000);
clearTimeout(stopTimer);

// -> clearInterval()
//
const stopRepeatMsg = setInterval(repeatMsg, 5000);
clearInterval(stopRepeatMsg); // stopped
