/*
====> BROWSER EVENTS <====
> Events are actions that happnes in the browser, like 
user_clicks, mouse_moves, key_presses, page_laods,
input_changes, elements_get_focused, form_submitted

===> Event Handling:
> Listening for events (actions) that happen in the browser
and running some JavaScript code in response.

Events = things that happen
Event handler = user code that reacts to it

*/

// ==> 1. Mouse Events
//
const btn2 = document.getElementById('btn2');
// click - single click
btn2.addEventListener('click', (e) => {
  btn2.innerHTML = 'single clicked';
  console.log(e.type);
  console.log(e.target);
});
//
const btn3 = document.getElementById('btn3');
// dblclick - double click
btn3.addEventListener('dblclick', (e) => {
  btn3.innerHTML = 'Double clicked';
  console.log(e.type);
  console.log(e.target);
});
//
// mouseover - pointer enters element
const btn4 = document.getElementById('btn4');
btn4.addEventListener('mouseover', (e) => {
  btn4.innerHTML = 'pointer on element';
  console.log(e.type);
  console.log(e.target);
});
//
// mouseout - pointer leaves element
const btn5 = document.getElementById('btn5');
btn5.addEventListener('mouseout', (e) => {
  btn5.innerHTML = 'pointer levaes element';
  console.log(e.type);
  console.log(e.target);
});
//
// mousemove - pointer moves
const btn6 = document.getElementById('btn6');
btn6.addEventListener('mousemove', (e) => {
  btn6.innerHTML = 'pointer moves';
  console.log(e.type);
  console.log(e.target);
});
// mousedown - mouse button pressed
const btn7 = document.getElementById('btn7');
btn7.addEventListener('mousedown', (e) => {
  btn7.innerHTML = 'mouse button pressed';
  console.log(e.type);
  console.log(e.target);
});

// mouseup - mouse button released
const btn8 = document.getElementById('btn8');
btn8.addEventListener('mouseup', (e) => {
  btn8.innerHTML = 'mouse button released';
  console.log(e.type);
  console.log(e.target);
});
//
//
//
// press and hold on same button
const btn9 = document.getElementById('btn9');
btn9.addEventListener('mousedown', (e) => {
  btn9.innerHTML = 'mouse button pressed';
  console.log(e.type);
  console.log(e.target);
});
btn9.addEventListener('mouseup', (e) => {
  btn9.innerHTML = 'mouse button released';
  console.log(e.type);
  console.log(e.target);
});
