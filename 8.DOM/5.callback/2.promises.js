// setTimeout(() => console.log('hello'), 1000);

// setTimeout(() => {
//   console.log('hello2');
// }, 2000);

// ==> promises
// -> it's built-in JS object that represents a value that will be availabe now, later, or never (if it fails)
//
// -> it has three states:
// pending:
// fulfilled:
// rejected:

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Success!!');
  } else {
    reject('Failed!');
  }
});

console.log(myPromise);
