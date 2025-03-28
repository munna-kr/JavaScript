'use strict';

const users = {
  books: ['coding', 'science', 'maths', 'Hindi', 'English'],
  skills: ['racing', 'hacking', 'martialArts', 'cooking'],
};

// const { books: book, skills: skill } = users;
const { books, skills } = users;
console.log(books, skills);

const bzooks = ['coding', 'science', 'maths', 'Hindi', 'English'];
const [code] = books;
console.log(code);

const { books: favBook } = users;
console.log(favBook, 'this is the books');

console.log(...favBook);

const arrNumber = [12, 3, 4];
const newArr = [...arrNumber];
console.log(...newArr);

function addingNumber(...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  return sum;
}

console.log(addingNumber(12, 12, 12, 10, 10));
console.log(addingNumber(...arrNumber));
