# JavaScript Data Structures Practice Questions

---

## 1. Arrays

**Example Data:**

```js
const numbers = [5, 3, 9, 1, 5, 7];
const numsA = [1, 2, 3, 4];
const numsB = [3, 4, 5, 6];
const fruits = ["apple", "banana", "cherry", "banana", "apple"];
const nested = [1, [2, [3, [4]]]];
```

**Practice Questions:**

* Reverse `numbers` without using `.reverse()`
* Sort `numbers` ascending and descending
* Remove duplicates from `fruits`
* Count frequency of each element in `fruits`
* Find max and min values in `numbers`
* Find sum of all elements using `.reduce()`
* Create a new array with each element * 2 (use `.map()`)
* Filter even numbers using `.filter()`
* Check if all elements are greater than 0 (use `.every()`)
* Check if any element is greater than 5 (use `.some()`)
* Find first number greater than 4 (use `.find()`)
* Find index of first number greater than 4 (use `.findIndex()`)
* Flatten `nested` completely → `[1,2,3,4]`
* Join all fruits into a string separated by commas
* Merge `numsA` and `numsB` and remove duplicates
* Get intersection of `numsA` and `numsB`
* Rotate `numbers` array by 2 steps
* Split array into chunks of size 2
* Replace all 5’s with 0
* Find average of all numbers
* Get last 3 elements of `numbers` using `.slice()`
* Insert `100` after 9 using `.splice()`
* Convert array → object of index: value pairs
* Create a copy using spread operator
* Shuffle array randomly

---

## 2. Objects

**Example Data:**

```js
const student = { name: "Alice", age: 22, marks: { math: 85, english: 90, science: 95 } };
const people = { John: 25, Alice: 30, Eve: 15, Bob: 20, Charlie: 35, Dave: 12, Frank: 28 };
```

**Practice Questions:**

* Print all keys using `Object.keys()`
* Print all values using `Object.values()`
* Convert object to array of `[key, value]` pairs
* Convert back array to object using `Object.fromEntries()`
* Find person with max age in `people`
* Count how many are above 18
* Delete a property from `student`
* Merge two objects
* Check if property “marks” exists
* Copy `student` object without reference
* Update nested key (increase math marks by 10)
* Convert object values into an array
* Create a new object only with people aged ≥ 18
* Sort `people` by age
* Filter names starting with “A”

---

## 3. Sets

**Example Data:**

```js
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const words = ["apple", "banana", "apple", "cherry", "banana"];
```

**Practice Questions:**

* Create a set from `words` (remove duplicates)
* Add and remove elements from a Set
* Check if a value exists
* Find union of `setA` and `setB`
* Find intersection of `setA` and `setB`
* Find difference between `setA` and `setB`
* Find symmetric difference between `setA` and `setB`
* Convert Set → Array and back
* Count number of unique elements
* Filter out even numbers using spread + filter

---

## 4. Maps

**Example Data:**

```js
const users = new Map([
  ["John", 25],
  ["Alice", 30],
  ["Eve", 15],
  ["Bob", 20],
  ["Charlie", 35],
  ["Dave", 12],
  ["Frank", 28]
]);
```

**Practice Questions:**

* Print all keys
* Print all values
* Get value for “Alice”
* Check if “Eve” exists
* Add a new user
* Delete a user
* Count total entries using `.size`
* Increase every user’s age by 1 (use `.forEach()`)
* Filter only adults (age ≥ 18)
* Sort by age ascending
* Convert Map → Array
* Convert Map → Object
* Merge two Maps
* Find user with max age
* Group users by “even” or “odd” age
* Create Map of city → count of users
* Create Map from array of objects
* Get first key using `.keys().next().value`
* Convert only names (keys) to uppercase
* Get average of all ages

---

## 5. WeakMap / WeakSet

**Example Data:**

```js
const wm = new WeakMap();
const ws = new WeakSet();
const obj1 = { id: 1 };
const obj2 = { id: 2 };
```

**Practice Questions:**

* Store metadata for `obj1` in WeakMap
* Check if `obj2` exists in WeakMap
* Add `obj1` and `obj2` to WeakSet
* Check if `obj1` was processed
* Remove references and observe GC (conceptually)
* Use WeakMap for caching function results

---

## 6. Stack

**Example Data:**

```js
const stack = [];
const input = "({[]})";
```

**Practice Questions:**

* Implement push, pop, peek
* Reverse a string using stack
* Check if parentheses are balanced
* Convert infix to postfix
* Evaluate postfix expression
* Sort stack using another stack
* Get min element in constant time

---

## 7. Queue

**Example Data:**

```js
const queue = [];
const tasks = ["task1", "task2", "task3"];
```

**Practice Questions:**

* Implement enqueue, dequeue
* Peek first element
* Reverse queue
* Simulate printer queue
* Implement circular queue class
* Implement queue using two stacks
* Implement priority queue (custom)

---

## 8. Linked List

**Example Data:**

```js
class Node {
  constructor(value) { this.value = value; this.next = null; }
}
const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
a.next = b; b.next = c;
```

**Practice Questions:**

* Traverse and print list
* Insert node at beginning / end
* Delete node by value
* Reverse linked list
* Find middle node
* Detect loop (Floyd’s cycle)
* Merge two sorted linked lists
* Remove duplicates from sorted list

---

## 9. Trees (BST)

**Example Data:**

```js
class Node {
  constructor(v){ this.value=v; this.left=this.right=null; }
}
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
```

**Practice Questions:**

* Inorder traversal
* Preorder traversal
* Postorder traversal
* Find max / min
* Insert a new node
* Delete a node
* Find height of tree
* Check if tree is balanced
* Level-order traversal (BFS)
* Sum of all nodes

---

## 10. Graphs

**Example Data:**

```js
const graph = new Map([
  ["A", ["B","C"]],
  ["B", ["A","D"]],
  ["C", ["A","D"]],
  ["D", ["B","C"]]
]);
```

**Practice Questions:**

* BFS traversal
* DFS traversal
* Detect cycle
* Find shortest path between A and D
* Count connected components
* Check if graph is bipartite
* Topological sort (DAG)
* Find degree of each vertex

---

## 11. Heap / Priority Queue

**Example Data:**

```js
const arr = [5, 3, 8, 1, 2];
```

**Practice Questions:**

* Implement min-heap (insert + remove)
* Implement max-heap
* Find k-th smallest element
* Sort array using heap sort
* Merge k sorted arrays
* Use priority queue for scheduling tasks

---

## 12. Trie

**Example Data:**

```js
const words = ["car", "cat", "cart", "dog"];
```

**Practice Questions:**

* Insert words
* Search for a word
* Check if any word starts with prefix
* Count number of words sharing prefix
* Delete a word
* Autocomplete given prefix

---

## 13. Real-world DS Problems

**Example Data:**

```js
const orders = [
  { id: 1, user: "A", price: 100 },
  { id: 2, user: "B", price: 200 },
  { id: 3, user: "A", price: 150 },
  { id: 4, user: "C", price: 300 }
];
```

**Practice Questions:**

* Group orders by user
* Find user with highest total price
* Create an LRU cache class
* Track visited pages using WeakSet
* Filter Map data by custom condition
* Convert nested objects into flat objects
* Convert array → Map → Object chain
* Create frequency counter using Map
* Remove duplicates from Map values
* Sort array of objects by property using `.sort()`

---

## 14. Built-in Method Practice

| Method        | Question                                  |
| ------------- | ----------------------------------------- |
| `.map()`      | Convert array of numbers to their squares |
| `.filter()`   | Filter users above 25 years               |
| `.reduce()`   | Find sum, avg, max in array               |
| `.find()`     | Find first even number                    |
| `.every()`    | Check all elements positive               |
| `.some()`     | Check any element < 0                     |
| `.forEach()`  | Print all key-value pairs in Map          |
| `.sort()`     | Sort array of objects by property         |
| `.flat()`     | Flatten nested array                      |
| `.concat()`   | Combine two arrays                        |
| `.slice()`    | Get last n elements                       |
| `.splice()`   | Insert/delete mid elements                |
| `.includes()` | Check if element exists                   |
| `.join()`     | Join array into string                    |
| `.keys()`     | Print keys of Map                         |
| `.values()`   | Print all values in Map                   |
| `.entries()`  | Convert structure into key-value pairs    |

---
