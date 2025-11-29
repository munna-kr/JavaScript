// triggered when text or form data changes..
//
// input - when value changes
const input = document.getElementById('inputArea');
input.addEventListener('input', () => {
  console.log('user typing...');
});
//
// change - when input loses focus after change
input.addEventListener('change', () => {
  console.log('input loses focus');
});
//
// focus - when element gets focus
input.addEventListener('focus', () => {
  console.log('input gets focus');
});
// blur - when focus leaves element
input.addEventListener('blur', () => {
  console.log('input loses focus');
});
// submit - form submission
userForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop page refresh
  console.log('form submitted');
});
