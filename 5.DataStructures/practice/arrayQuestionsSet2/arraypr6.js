/*
### 6. Library Books Search (case-insensitive)

```js
const books = [
  "JavaScript: The Good Parts",
  "Eloquent JavaScript",
  "You Don't Know JS",
  "Learning React",
  "javascript patterns"
];
```
*/

const books = [
  // normal titles
  'JavaScript: The Good Parts',
  'Eloquent JavaScript',
  "You Don't Know JS",
  'Learning React',
  'javascript patterns',

  // different casing
  'JAVASCRIPT FOR BEGINNERS',
  'React In Action',
  'the road to REACT',
  'Node.js Design Patterns',

  // duplicates & near-duplicates
  'Eloquent JavaScript',
  'JavaScript: The Good Parts',
  'javascript patterns',

  // extra spaces
  '   Modern JavaScript   ',
  'React     Explained',
  '   Deep Dive into JS',

  // punctuation & symbols
  'JavaScript - The Definitive Guide',
  'JavaScript & JQuery',
  'Learn JavaScript! Fast',

  // numbers in titles
  'TypeScript Handbook 2023',
  'JavaScript 101',
  'ES6 & Beyond',

  // edge cases
  '',
  '   ',
  null,
  undefined,
  12345, // wrong type
  { title: 'JS Book' }, // wrong format
  'CSS Mastery',
  'HTML & CSS: Design and Build Websites',
];
