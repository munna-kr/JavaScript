/*
===========================================
  IMPLEMENT ARRAY METHODS MANUALLY - QUESTIONS
===========================================

  DATA:
  const sample = [1, 2, 3, 4];

  ----------------------------------------------------
  QUESTIONS
  ----------------------------------------------------

  1. Implement a custom version of Array.prototype.map()
     Name it: myMap
     Requirements:
       - Accepts a callback
       - Returns a NEW array
       - Does not mutate original array
       - Passes (value, index, array) to callback

  2. Implement a custom version of Array.prototype.filter()
     Name it: myFilter
     Requirements:
       - Keeps elements where callback returns true
       - Returns a NEW array
       - Behavior must match real filter()

  3. Implement a custom version of Array.prototype.reduce()
     Name it: myReduce
     Requirements:
       - Handles both cases:
         • reduce(callback, initialValue)
         • reduce(callback) without initialValue
       - Accumulator and currentValue must work like native reduce()
       - Must throw error if array is empty AND no initialValue

  4. Implement a custom version of Array.prototype.find()
     Name it: myFind
     Requirements:
       - Returns the FIRST element for which callback returns true
       - Returns undefined if no element matches

  5. Implement a custom version of Array.prototype.forEach()
     Name it: myForEach
     Requirements:
       - Executes callback for every element
       - Does NOT return anything (undefined)
       - Should support passing index and array

  6. Implement a custom version of Array.prototype.some()
     Name it: mySome
     Requirements:
       - Returns true if ANY element satisfies the callback
       - Stops early when a match is found

  7. Implement a custom version of Array.prototype.every()
     Name it: myEvery
     Requirements:
       - Returns true only if ALL elements satisfy the callback
       - Stops early when callback returns false

  8. Implement a custom version of Array.prototype.flat()
     Name it: myFlat
     Requirements:
       - Accepts depth argument (default = 1)
       - Must handle nested arrays
       - Must not mutate original

  9. Implement a custom version of Array.prototype.flatMap()
     Name it: myFlatMap
     Requirements:
       - Equivalent to: arr.map(...).flat(1)
       - Must behave exactly like native flatMap()

  10. Bonus: Implement Array.prototype.myReduceRight()
      Requirements:
        - Works like reduceRight()
        - Processes array from RIGHT to LEFT

  11. Write test cases for all custom methods using `sample`:
        const sample = [1, 2, 3, 4];
      Example checks:
        - myMap(x => x * 2)
        - myFilter(x => x % 2 === 0)
        - myReduce((a,b) => a + b)

  12. Edge Case Tests:
      - Empty array []
      - Array with undefined/null values
      - Passing invalid callbacks (not a function)
      - Using negative numbers or strings

===========================================
*/
