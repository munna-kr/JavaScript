/*
===========================================
   ARRAY REFERENCE vs COPY — VISUAL GUIDE
===========================================

Arrays in JavaScript are **reference types**.
This means assigning one array to another variable
does NOT create a new array — only a new reference.

-------------------------------------------
1. Direct Assignment (Reference Copy)
-------------------------------------------

const numbers = [5, 3, 9, 1];
const reversedNumbers = numbers;

Memory Diagram:

   numbers ───────────────┐
                           │
                           ▼
                     [5, 3, 9, 1]
                           ▲
                           │
   reversedNumbers ────────┘

Both variables → SAME array in memory.

So this mutates BOTH:
reversedNumbers.reverse();


-------------------------------------------
2. Spread Operator (Shallow Copy)
-------------------------------------------

const numbers = [5, 3, 9, 1];
const reversedNumbers = [...numbers];

Memory Diagram:

numbers ─────────► [5, 3, 9, 1]

reversedNumbers ─► [5, 3, 9, 1]  (new array)

Now reverse() affects ONLY the new array:
reversedNumbers.reverse();


-------------------------------------------
3. Why reverse() Mutates?
-------------------------------------------

reverse() changes array IN PLACE.

Example:
[5, 3, 9, 1]  →  [1, 9, 3, 5]

If two variables reference the same array → both reflect changes.
If it’s a copy → only the copied version changes.


-------------------------------------------
4. Recommended Safe Copy Methods
-------------------------------------------

const copy1 = [...numbers];
const copy2 = numbers.slice();
const copy3 = Array.from(numbers);

Deep copy (for nested arrays only):
const deep = structuredClone(numbers);


-------------------------------------------
5. Summary Table
-------------------------------------------

Operation           Copies array?   Mutates?   Affects original?
----------------------------------------------------------------
newVar = numbers        No            —             YES
[...numbers]            Yes           —              No
numbers.slice()         Yes           —              No
reverse()               —             YES          If same array
map()                   Yes           No              No
structuredClone()       Yes (deep)    —              No


-------------------------------------------
6. Working Example
-------------------------------------------

const numbers = [5, 3, 9, 1, 5, 7];

// SAFE reverse without modifying original
const reversedNumbers = [...numbers].reverse();

console.log("Original:", numbers);
console.log("Reversed:", reversedNumbers);

===========================================
*/
