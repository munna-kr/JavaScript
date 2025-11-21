/*
=====================================================
🧠 JavaScript — Why It's *Not* True Pass by Reference
=====================================================

⚙️ In JavaScript, arguments are ALWAYS passed by VALUE.

However, when we pass an object or array,
the *value being copied* is a REFERENCE (the memory address of that object).

That’s why it can *look like* pass-by-reference — but technically, it’s not.

> What “Pass by Value” Really Means

When we call a function and pass a variable,
JavaScript always makes a copy of that variable’s value and gives it to the function parameter.

For primitives, that value is the actual number, string, etc.

For objects, that value is the reference (memory address) of the object.
------------------------------------------------------
*/

// ====================================================
// 🔹 Pass-by-Value (Primitive Example)
// ====================================================

function modifyPrimitive(x) {
  x = x + 10;
  console.log('Inside function:', x);
}

let num = 5;
console.log('Before function call:', num);
modifyPrimitive(num);
console.log('After function call:', num);

/*
🧠 MEMORY MODEL
------------------------------------------------------
Before call:
num ──▶ [5]

During call:
x   ──▶ [5]   (copy of value)
x = 15 → local change only

After:
num ──▶ [5]   (unchanged)
------------------------------------------------------

✅ JS copies the primitive value.
*/

// ====================================================
// 🔹 Pass-by-Value (Reference Value for Objects)
// ====================================================

function modifyObject(obj) {
  obj.name = 'Updated'; // modifies same object
  console.log('Inside function:', obj);
}

let user = { name: 'Alice' };
console.log('Before function call:', user);
modifyObject(user);
console.log('After function call:', user);

/*
🧠 MEMORY MODEL
------------------------------------------------------
user ──▶ #101 → { name: "Alice" }

During call:
obj  ──▶ #101 → same object

Change:
obj.name = "Updated" → modifies shared object

After:
Both user & obj → { name: "Updated" }
------------------------------------------------------

✅ JS copies the reference (address), not the object.
✅ That’s why property changes reflect outside the function.
*/

// ====================================================
// 🔹 Why It's *Not* True Pass-by-Reference
// ====================================================

function reassignExample(obj) {
  obj = { name: 'New Object' }; // reassign to a new reference
  console.log('Inside function:', obj);
}

let member = { name: 'John' };
console.log('Before function call:', member);
reassignExample(member);
console.log('After function call:', member);

/*
🧠 MEMORY MODEL
------------------------------------------------------
Before call:
member ──▶ #200 → { name: "John" }

During call:
obj    ──▶ #200 → same object

Then:
obj = { name: "New Object" } → new object #300
obj    ──▶ #300 (local only)
member ──▶ #200 (unchanged)

After:
member → { name: "John" }
------------------------------------------------------

✅ In true pass-by-reference (like C++), 
  reassigning obj would also change member.
✅ In JavaScript, it doesn’t — only the local copy of the reference changes.
*/

// ====================================================
// 🔹 Comparing with C++ (for clarity)
// ====================================================
/*
C++ (true pass-by-reference):
------------------------------------------
void change(int &x) {
    x = 10;
}
int num = 5;
change(num); // num becomes 10
------------------------------------------

JS equivalent:
------------------------------------------
function change(x) { x = 10; }
let num = 5;
change(num); // num stays 5
------------------------------------------
*/

// ====================================================
// 🧩 Quick Recap
// ====================================================
/*
| Type             | What’s Copied (Passed) | Can Affect Original? | True Reference? |
|------------------|------------------------|-----------------------|-----------------|
| Primitive        | Value (actual data)    | ❌ No                | ❌ No            |
| Object / Array   | Reference (address)    | ✅ Yes (mutations)   | ❌ No            |
| Reassignment     | Local reference only   | ❌ No                | ❌ No            |
------------------------------------------------------

💡 Key Takeaways:
- JavaScript is ALWAYS **pass-by-value**.
- The value copied can be a **reference to an object**.
- That’s why modifying object properties affects the original,
  but reassigning the parameter doesn’t.
*/

// ====================================================
// ⚡ One-Line Summary
// ====================================================
/*
✅ JavaScript copies values when passing arguments.
If that value is a reference, both variables point to the same object,
so changes inside the function appear outside —
but it’s still **pass-by-value of the reference**, not true pass-by-reference.
------------------------------------------------------
*/
