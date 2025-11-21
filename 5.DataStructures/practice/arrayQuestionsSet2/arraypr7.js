/*
### 7. Order Grouping by Customer

```js
const orders = [
  { customer: "Alice", orderId: 101, amount: 50 },
  { customer: "Bob", orderId: 102, amount: 70 },
  { customer: "Alice", orderId: 103, amount: 30 }
];
*/
const orders = [
  // normal valid data
  { customer: 'Alice', orderId: 101, amount: 50 },
  { customer: 'Bob', orderId: 102, amount: 70 },
  { customer: 'Alice', orderId: 103, amount: 30 },
  { customer: 'David', orderId: 104, amount: 120 },
  { customer: 'Carol', orderId: 105, amount: 85 },

  // multiple purchases by same customers
  { customer: 'Bob', orderId: 106, amount: 25 },
  { customer: 'Alice', orderId: 107, amount: 40 },
  { customer: 'Carol', orderId: 108, amount: 55 },
  { customer: 'David', orderId: 109, amount: 200 },

  // different casing (edge case for grouping)
  { customer: 'alice', orderId: 110, amount: 75 },
  { customer: 'BOB', orderId: 111, amount: 15 },

  // missing fields (edge cases)
  { orderId: 112, amount: 60 }, // missing customer
  { customer: 'Eve', amount: 90 }, // missing orderId
  { customer: 'Eve', orderId: 113 }, // missing amount

  // wrong types
  { customer: 123, orderId: 114, amount: 50 }, // customer not string
  { customer: 'Frank', orderId: '115', amount: 30 }, // orderId as string
  { customer: 'Frank', orderId: 116, amount: '40' }, // amount as string

  // null or undefined
  { customer: null, orderId: 117, amount: 25 },
  { customer: 'Grace', orderId: null, amount: 90 },
  { customer: 'Grace', orderId: 118, amount: undefined },

  // zero and negative numbers (edge cases)
  { customer: 'Henry', orderId: 119, amount: 0 },
  { customer: 'Henry', orderId: 120, amount: -10 },

  // large values
  { customer: 'Isabella', orderId: 121, amount: 1000 },
  { customer: 'Isabella', orderId: 122, amount: 1500 },
];
