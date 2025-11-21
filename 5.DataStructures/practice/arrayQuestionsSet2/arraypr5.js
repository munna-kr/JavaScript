/*
### 5. Product Stock Update

**Scenario:** A warehouse updates stock by applying patches:

```js
[{ id: 1, change: +5 }, { id: 3, change: -2 }]
```

**Tasks:**

* Apply stock changes to products array
* Find products that are now out of stock
* Check if all products have non-negative stock
*/
// Product list
const products = [
  { id: 1, name: 'Laptop', stock: 10 },
  { id: 2, name: 'Mouse', stock: 0 },
  { id: 3, name: 'Keyboard', stock: 5 },
  { id: 4, name: 'Monitor', stock: 2 },
  { id: 5, name: 'USB Cable', stock: 15 },
];

// Stock updates (patches)
const patches = [
  { id: 1, change: +5 },
  { id: 3, change: -2 },
  { id: 4, change: -3 },
  { id: 2, change: +7 },
  { id: 6, change: +4 }, // update for non-existing product (edge case)
];
