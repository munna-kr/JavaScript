// events that happen when the page loads, unloads, or becomes visible/hidden.
// it's triggred by the browser not user
//
// load - page fully loaded
window.addEventListener('load', () => console.log('Page loaded fully'));
//
// DOMContentLoaded - HTML loaded(images not required)
document.addEventListener('DOMContentLoaded', () =>
  console.log('Html content Loaded')
);
// resize - window size changed
window.addEventListener('resize', () => console.log('resizing window'));
//
// scroll - page scrolled
document.addEventListener('scroll', () => console.log('scrolling'));
//
// beforeunload - leaving the page or refreshing the page
// window.addEventListener('beforeunload', (e) => {
//   console.log('scrolling');
//   e.preventDefault();
// });

// visibilitychange
// Fires when the page becomes hidden (switch tab) or visible.
document.addEventListener('visibilitychange', () => {
  console.log('Page visibility:', document.visibilityState);
});
