# JavaScript Array Coding Exercises (Beginner to Advanced)

## Beginner Level — Core Array Operations

### 1. Student Scores Cleanup

**Scenario:** A teacher exports test scores, but some entries are invalid (`null`, "NA", or negative numbers).

**Tasks:**

* Remove invalid entries
* Convert all scores to integers
* Count how many students passed (score ≥ 40)

---

### 2. Shopping Cart Summary

**Scenario:** A shopping cart contains item prices, but the customer wants the total and average.

**Tasks:**

* Find total price
* Find average price
* Round all prices up

---

### 3. Extract Email Usernames

**Scenario:** You receive a list of emails, and you want just the username (before "@").

**Tasks:**

* Convert emails to usernames
* Remove duplicates

---

## Intermediate Level — Combining Methods

### 4. Movie Library Filter

**Scenario:** You have an array of movie objects:

```js
{ title: "Inception", rating: 8.8, year: 2010, genre: "Sci-Fi" }
```

**Tasks:**

* Find all movies with rating > 8
* Extract only titles
* Sort movies by year (newest→oldest)
* Check if every movie has a `title` property
* Check if any movie is Sci-Fi

---

### 5. Product Stock Update

**Scenario:** A warehouse updates stock by applying patches:

```js
[{ id: 1, change: +5 }, { id: 3, change: -2 }]
```

**Tasks:**

* Apply stock changes to products array
* Find products that are now out of stock
* Check if all products have non-negative stock

---

### 6. Library Books Search (case-insensitive)

**Scenario:** Search books by partial title.

**Tasks:**

* Normalize strings
* Filter titles that include search term
* Return count + matched titles

---

## Advanced Level — Complex Data Transformation

### 7. Order Grouping by Customer

**Scenario:** You receive raw data:

```js
[
  { customer: "Alice", orderId: 101, amount: 50 },
  { customer: "Bob", orderId: 102, amount: 70 },
  { customer: "Alice", orderId: 103, amount: 30 }
]
```

**Tasks:** Transform into:

```js
{
  Alice: { total: 80, orders: [101, 103] },
  Bob: { total: 70, orders: [102] }
}
```

→ Practice *(reduce)* heavily.

---

### 8. Flatten Social Media Comments

**Scenario:** Comments may be nested:

```js
[ "Nice!", ["Thanks", ["Welcome"]] ]
```

**Tasks:**

* Fully flatten
* Count comment depth level (recursive or stack)

---

### 9. Event Attendance Analytics

**Scenario:** Attendance log:

```js
[
 { user: "A", events: ["login", "view", "logout"] },
 { user: "B", events: ["login", "error"] }
]
```

**Tasks:**

* Create a unique list of all events
* Count frequency of each event

Output:

```js
{ login: 2, view: 1, logout: 1, error: 1 }
```

---

### 10. String Processing Pipeline

You receive:

```js
"  hello   world  javascript  arrays "
```

**Tasks:**

* Convert into array of words
* Trim spaces, remove empties
* Sort words alphabetically
* Join back into a sentence

---

## Expert Level — Real-Case Challenges

### 11. Inventory Sync Between Systems

Two arrays:

```js
oldData = [{id:1,qty:5},{id:2,qty:0}]
newData = [{id:1,qty:7},{id:3,qty:4}]
```

**Tasks:**

* Merge them (id-based)
* If item exists in both, use *newData*
* If only in one, include it
* Sort by ID

Methods: *(map, filter, find, sort, reduce)*

---

### 12. Build a Tag Recommendation System

User history:

```js
[
 { tags: ["js", "web", "arrays"] },
 { tags: ["js", "react"] },
 { tags: ["css", "web"] }
]
```

**Tasks:**

* Flatten tags
* Count frequency
* Return top 3 tags

Methods: *(flatMap, reduce, sort, slice)*

---

### 13. Implement Array Methods Manually

Recreate:

* `myMap`
* `myFilter`
* `myReduce`
* `myFlat`

---

### 14. JSON API Normalization

Given:

```js
{
  users: [
    { id: 1, posts: [{pid: 10}, {pid: 11}] },
    { id: 2, posts: [{pid: 12}] }
  ]
}
```

Transform to:

```js
{
  1: [10,11],
  2: [12]
}
```

Methods: *(reduce, map, flatMap)*

## Sample Data for Exercises

### 1. Student Scores Cleanup

```js
const scores = [85, "NA", null, 92, -5, 47, 39, "76", "88.5", undefined];
```

### 2. Shopping Cart Summary

```js
const cart = [12.49, 3.5, 199.99, 0, 9.99, 15.0];
```

### 3. Extract Email Usernames

```js
const emails = [
  "alice@example.com",
  "bob.smith@work.org",
  "carol@school.edu",
  "alice@example.com"
];
```

### 4. Movie Library Filter

```js
const movies = [
  { title: "Inception", rating: 8.8, year: 2010, genre: "Sci-Fi" },
  { title: "Parasite", rating: 8.6, year: 2019, genre: "Thriller" },
  { title: "The Room", rating: 3.7, year: 2003, genre: "Drama" },
  { title: "Interstellar", rating: 8.6, year: 2014, genre: "Sci-Fi" }
];
```

### 5. Product Stock Update

```js
const products = [
  { id: 1, name: "Widget", stock: 10 },
  { id: 2, name: "Gadget", stock: 0 },
  { id: 3, name: "Doohickey", stock: 3 }
];

const patches = [ { id: 1, change: +5 }, { id: 3, change: -4 } ];
```

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

### 7. Order Grouping by Customer

```js
const orders = [
  { customer: "Alice", orderId: 101, amount: 50 },
  { customer: "Bob", orderId: 102, amount: 70 },
  { customer: "Alice", orderId: 103, amount: 30 }
];
```

### 8. Flatten Social Media Comments

```js
const comments = [
  "Nice!",
  ["Thanks", ["Welcome", ["Great post!"]]],
  "Awesome"
];
```

### 9. Event Attendance Analytics

```js
const attendance = [
  { user: "A", events: ["login", "view", "logout"] },
  { user: "B", events: ["login", "error"] },
  { user: "C", events: ["login", "view"] }
];
```

### 10. String Processing Pipeline

```js
const raw = "  hello   world  javascript  arrays ";
```

### 11. Inventory Sync Between Systems

```js
const oldData = [{id:1,qty:5},{id:2,qty:0}];
const newData = [{id:1,qty:7},{id:3,qty:4}];
```

### 12. Build a Tag Recommendation System

```js
const history = [
  { tags: ["js", "web", "arrays"] },
  { tags: ["js", "react"] },
  { tags: ["css", "web"] }
];
```

### 13. Implement Array Methods Manually

```js
// No data required — test your implementations with simple arrays:
const sample = [1,2,3,4];
```

### 14. JSON API Normalization

```js
const payload = {
  users: [
    { id: 1, posts: [{pid: 10}, {pid: 11}] },
    { id: 2, posts: [{pid: 12}] }
  ]
};
```

---

If you want, I can also add **expected outputs** and **solution code** for each exercise in the same .md file.
