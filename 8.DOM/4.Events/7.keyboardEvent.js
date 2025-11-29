// keyboard Event
// triggered when key is pressed
//
//- keydown : key pressed (fires repeatedly if hold)
const input = document.getElementById('inputArea');
input.addEventListener('keydown', (e) => {
  console.log('key pressed: ', e.key);
});
//
// - keydown : key relased
// input.addEventListener('keyup', (e) => {
//   console.log('key released: ', e.key);
// });
