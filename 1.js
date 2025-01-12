// process.stdout.write('Enter your name: ');

// process.stdin.on('data', (data) => {
//   const name = data.toString().trim();
//   console.log(`Hello, ${name}!`);
//   process.exit(); // Exit the process after receiving input
// });

const prompt = require('prompt-sync')();
const user3 = prompt('what is ur name?');
console.log(user3);

// const user3 = require('prompt-sync')('enter');

