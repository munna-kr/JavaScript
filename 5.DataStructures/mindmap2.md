# JavaScript Operators — Tree Mindmap Notes

```
JavaScript Operators
│
├─ 1. Spread Operator (...)
│     │
│     ├─ Purpose: Expand iterable values
│     │
│     ├─ Usage:
│     │     • Copy arrays
│     │     • Merge arrays
│     │     • Copy objects
│     │     • Pass elements as function args
│     │
│     ├─ Examples:
│     │     const arr2 = [...arr1, 4, 5]
│     │     const obj2 = {...obj1, c:3}
│     │     Math.max(...nums)
│     │
│     └─ Key Notes:
│           • Creates shallow copy
│           • Expands values
│
├─ 2. Rest Operator (...)
│     │
│     ├─ Purpose: Gather multiple values into an array
│     │
│     ├─ Usage:
│     │     • Function parameters
│     │     • Destructuring
│     │
│     ├─ Examples:
│     │     function sum(...n){}
│     │     const [a, ...rest] = arr
│     │
│     └─ Key Notes:
│           • Must be last parameter
│           • Opposite of Spread
│
├─ 3. Short-Circuit Operators
│     │
│     ├─ OR (||)
│     │     • Returns first Truthy
│     │     • Used for fallback defaults
│     │     Example: "" || "Guest" → "Guest"
│     │
│     └─ AND (&&)
│           • Returns first Falsy
│           • Used for conditional execution
│           Example: true && "Hi" → "Hi"
│
└─ 4. Nullish Coalescing (??)
      │
      ├─ Purpose: Default only when null/undefined
      │
      ├─ Example:
      │     0 ?? 10 → 0
      │     null ?? 10 → 10
      │
      └─ Key Notes:
            • More accurate than ||
            • Does not override valid falsy values
```

---

## All Question Types

### 1. Conceptual Questions

* Explain the difference between Spread and Rest.
* Why is `??` preferred over `||` when dealing with user input?
* What is short-circuit evaluation and how does it work in logical operators?
* Does the spread operator perform deep copying? Explain.
* Why must the Rest parameter always appear last?

### 2. Output Prediction

```js
console.log([1,2] === [1,2]);
```

```js
const x = null ?? "default";
console.log(x);
```

```js
console.log(false || "Hello");
console.log(false ?? "Hello");
```

```js
const obj1 = { a: 1, nested: { b: 2 } };
const obj2 = { ...obj1 };
obj2.nested.b = 10;
console.log(obj1.nested.b);
```

### 3. Coding Tasks

1. Write a function to multiply any number of arguments using Rest.
2. Merge two arrays using Spread without modifying original arrays.
3. Safely assign a default value to a variable using Nullish Coalescing.
4. Extract the first item from an array and keep the rest in a new array.

### 4. Real-World Scenario Questions

* A user sets volume to `0` but your UI resets it to default. Explain the bug.
* When merging API responses, why is shallow copy sometimes dangerous?
* Explain how short-circuit prevents unnecessary function calls.

---

End of Tree Notes.
