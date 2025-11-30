const btn = document.getElementById('btn');
btn.addEventListener('touchstart', () => console.log('touch started..'));

btn.addEventListener('touchmove', () => console.log('touch moved...'));

btn.addEventListener('touchend', () => console.log('finger lifted'));
