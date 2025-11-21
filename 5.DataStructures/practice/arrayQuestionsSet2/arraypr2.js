/*
### 2. Shopping Cart Summary

**Scenario:** A shopping cart contains item prices, but the customer wants the total and average.

**Tasks:**

* Find total price
* Find average price
* Round all prices up
*/

const cart = [12.49, 3.5, 199.99, 0, 9.99, 15.0, 7.25, 4.1, 23.89, 1.99];

// 1 - Find total price
const total = cart.reduce((acc, curr) => acc + curr, 0);
console.log(total);

// 2 - Find average price
const avgPrice = total / cart.length;
console.log(avgPrice);

// 3 - Round all prices up
const roundPrice = cart.map((value) => Math.ceil(value));
console.log(roundPrice);
