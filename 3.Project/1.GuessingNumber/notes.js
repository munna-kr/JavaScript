// Event Listener method
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
my_element.addEventListener('click', function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});

// the return value of function is directly assigned to addEventListener argument as second parameters
// until and unless, event is not happened, function won't called
