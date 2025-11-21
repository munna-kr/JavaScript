// ============================================
// ⚡ QUICK REVISION: REGULAR EXPRESSIONS (RegExp)
// ============================================
// A Regular Expression (RegExp) is a pattern used to match, search,
// and manipulate strings.
//
// Syntax:
//   /pattern/flags
//
// Example:
//   const regex = /hello/gi;
//   Here: "hello" is the pattern, "g" and "i" are flags.

// --------------------------------------------
// 🔹 REGULAR EXPRESSION LITERAL
// --------------------------------------------
// We can define a regex directly using slashes /pattern/flags
const pattern = /hello/gi; // g = global, i = case-insensitive

console.log('Hello hello world'.match(pattern));
// ["Hello", "hello"]

// Equivalent using RegExp constructor:
const pattern2 = new RegExp('hello', 'gi');

// --------------------------------------------
// 🔹 COMMON REGEXP FLAGS
// --------------------------------------------
/*
g → global match (find all matches)
i → case-insensitive
m → multiline mode
s → dot (.) matches newlines
u → unicode support
y → sticky match
*/

// --------------------------------------------
// 🔹 BASIC CHARACTER MATCHING
// --------------------------------------------
console.log(/cat/.test('I have a cat')); // true
console.log(/dog/.test('I have a cat')); // false

// Dot (.) matches any character
console.log(/c.t/.test('cat')); // true ("." matches "a")

// --------------------------------------------
// 🔹 CHARACTER CLASSES
// --------------------------------------------
/*
[] → Matches any character inside the brackets
[^] → Negates (matches anything except inside chars)
*/
console.log(/[aeiou]/.test('apple')); // true (contains vowel)
console.log(/[^0-9]/.test('123')); // false (only digits)

// --------------------------------------------
// 🔹 PREDEFINED CHARACTER CLASSES
// --------------------------------------------
/*
\d → digit (0–9)
\D → non-digit
\w → word char (a–z, A–Z, 0–9, _)
\W → non-word char
\s → whitespace (space, tab, newline)
\S → non-whitespace
*/
console.log(/\d/.test('abc123')); // true
console.log(/\s/.test('Hi there')); // true

// --------------------------------------------
// 🔹 QUANTIFIERS
// --------------------------------------------
/*
+ → one or more
* → zero or more
? → zero or one
{n} → exactly n times
{n,} → at least n times
{n,m} → between n and m times
*/
console.log(/\d+/.test('12345')); // true
console.log(/go{2,3}d/.test('good')); // true ("o" appears 2–3 times)

// --------------------------------------------
// 🔹 ANCHORS (POSITION MATCHING)
// --------------------------------------------
/*
^ → start of string
$ → end of string
\b → word boundary
\B → not a word boundary
*/
console.log(/^H/.test('Hello')); // true (starts with H)
console.log(/world$/.test('Hello world')); // true (ends with world)

// --------------------------------------------
// 🔹 GROUPS & CAPTURING
// --------------------------------------------
const text = 'My number is 123-456';
const regex = /(\d{3})-(\d{3})/;
const match = text.match(regex);
console.log(match);
// ["123-456", "123", "456"]

// --------------------------------------------
// 🔹 COMMON STRING METHODS USING REGEX
// --------------------------------------------
const str = 'JavaScript is Awesome!';

// test() → returns true/false
console.log(/script/i.test(str)); // true

// match() → returns matched array or null
console.log(str.match(/a/g)); // ["a", "a", "a"]

// replace() → replaces matched text
console.log(str.replace(/awesome/i, 'powerful'));
// "JavaScript is powerful!"

// split() → splits string using pattern
console.log('a,b;c|d'.split(/[,;|]/)); // ["a", "b", "c", "d"]

// --------------------------------------------
// 🔹 EXAMPLES OF USEFUL REGEX PATTERNS
// --------------------------------------------
const email = 'test@example.com';
const isEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
console.log(isEmail.test(email)); // true

const phone = '987-654-3210';
const isPhone = /^\d{3}-\d{3}-\d{4}$/;
console.log(isPhone.test(phone)); // true

const password = 'Abc123!';
const isStrong = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
console.log(isStrong.test(password)); // true

// --------------------------------------------
// ✅ QUICK SUMMARY
// --------------------------------------------
/*
🧩 RegExp = Regular Expression (pattern matching tool)

Syntax:
   /pattern/flags
   OR new RegExp("pattern", "flags")

Common Flags:
   g → global   i → ignore case   m → multiline

Common Methods:
   test()    → Boolean result
   match()   → Returns matches
   replace() → Replace matched text
   split()   → Split string by pattern

Common Use Cases:
   - Validation (email, phone, password)
   - Searching & replacing text
   - Filtering and matching patterns
   - Cleaning user input

💡 In short:
A Regular Expression is a *pattern* that helps us find,
validate, and manipulate text efficiently.
------------------------------------------------------------
*/
