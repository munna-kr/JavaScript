// JavaScript String Methods — Grouped by Topic

///////////////////////
// 🔍 SEARCH METHODS //
///////////////////////

// Finds the first index of a substring.
console.log('banana'.indexOf('a'));

// Finds the last index of a substring.
console.log('banana'.lastIndexOf('a'));

// Checks if the string contains a specific value.
console.log('hello world'.includes('world'));

// Searches for a match using a regular expression.
console.log('hello'.search(/l/));

// Returns the matched value of a regex pattern.
console.log('123abc'.match(/\d+/));

// Returns all regex matches as an iterator.
console.log([...'test1test2'.matchAll(/test\d/g)]);

///////////////////////
// ✂️ EXTRACT METHODS //
///////////////////////

// Extracts part of a string.
console.log('JavaScript'.slice(0, 4));

// Returns characters between two indices.
console.log('JavaScript'.substring(4, 10));

// Splits the string into an array.
console.log('a,b,c'.split(','));

// Extracts a substring (deprecated).
console.log('JavaScript'.substr(4, 6));

////////////////////////////
// 🔁 REPLACE / MATCH METHODS //
////////////////////////////

// Replaces a part of the string.
console.log('hello world'.replace('world', 'JS'));

// Replaces all occurrences of a value.
console.log('a-b-c'.replaceAll('-', '_'));

// Finds all matches of a regex pattern.
console.log('a1b2c3'.match(/\d/g));

// Returns all regex matches with groups.
console.log([...'x1x2'.matchAll(/x\d/g)]);

/////////////////////////
// 🔠 CASE / INFO METHODS //
/////////////////////////

// Converts all letters to lowercase.
console.log('HELLO'.toLowerCase());

// Converts all letters to uppercase.
console.log('hello'.toUpperCase());

// Returns the character at a specific index.
console.log('Hello'.charAt(1));

// Returns the Unicode value of a character.
console.log('ABC'.charCodeAt(0));

// Returns the character at an index (supports negatives).
console.log('Hello'.at(-1));

// Compares two strings alphabetically.
console.log('a'.localeCompare('b'));

// Normalizes Unicode characters.
console.log('\u004F\u0308'.normalize('NFC'));

///////////////////////
// 🧹 TRIM METHODS //
///////////////////////

// Removes whitespace from both ends.
console.log('   hi   '.trim());

// Removes whitespace from the start.
console.log('   hi'.trimStart());

// Removes whitespace from the end.
console.log('hi   '.trimEnd());

////////////////////////////
// 📏 PADDING / REPEAT METHODS //
////////////////////////////

// Pads the start of the string with characters.
console.log('5'.padStart(3, '0'));

// Pads the end of the string with characters.
console.log('5'.padEnd(3, '0'));

// Repeats the string multiple times.
console.log('ha'.repeat(3));

///////////////////////////
// 🔗 COMBINE / CONVERT METHODS //
///////////////////////////

// Combines multiple strings.
console.log('Hello'.concat(' ', 'World'));

// Converts a number to a string.
console.log((123).toString());

// Returns the primitive string value.
console.log(new String('hi').valueOf());

///////////////////////////////
// 🧭 START / END CHECK METHODS //
///////////////////////////////

// Checks if the string starts with a substring.
console.log('JavaScript'.startsWith('Java'));

// Checks if the string ends with a substring.
console.log('file.txt'.endsWith('.txt'));

//////////////////////////////////
// ⚙️ POSITION / TEMPLATE HELPERS //
//////////////////////////////////

// Converts Unicode values to characters.
console.log(String.fromCharCode(65, 66, 67));

// Returns raw string content from a template literal.
console.log(String.raw`Hello\nWorld`);

////////////////////////////
// 🕰️ DEPRECATED / LEGACY //
////////////////////////////

// Legacy substring extraction method (avoid in new code).
console.log('JavaScript'.substr(4, 6));
