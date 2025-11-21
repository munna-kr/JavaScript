/*
======================================================
🧠 JavaScript — Passing Arguments (Value vs Reference)
======================================================

In JavaScript, ALL function arguments are technically passed **by value**.
BUT — for reference types, that value is the **reference (memory address)**,
which makes it *behave like* pass-by-reference.

We’ll explore this in three parts:
1️⃣ Pass by Value (Primitives)
2️⃣ Pass by Reference (Objects)
3️⃣ Reassignment (Local Reference Change)
------------------------------------------------------
*/

// ====================================================
// 🔹 PASS BY VALUE — (Primitives)
// ====================================================
/* 
> When primitive values (like number, string, boolean, null, undefined, symbol, or bigint) 
are passed to a function, a COPY of the original value is passed.

> This means any change made to the parameter inside the function 
does NOT affect the original variable outside the function.
*/

function changValue(x) {
  x = x * 2; // only changes local copy
}

let num = 10;
console.log('Before the function call, value of num:', num);
changValue(num);
console.log('After the function call, value of num:', num);

/*
🧠 MEMORY MODEL
------------------------------------------------------
Before call:
num ──▶ [10]

Inside function:
x   ──▶ [10]   (copy of value)
x = 20  → affects only local copy

After function:
num still 10
------------------------------------------------------

✅ Summary:
- We pass a copy of the primitive value.
- Changing the parameter doesn’t affect the original variable.
*/

// ====================================================
// 🔹 PASS BY REFERENCE — (Objects, Arrays, Functions)
// ====================================================
/*
> When a reference type (like an object, array, or function) is passed to a function,
JavaScript passes a COPY of the reference (memory address) — not the object itself.

> This means both the original variable and the parameter refer to the same object in memory.

> Therefore, if we modify the object’s properties inside the function,
those changes will affect the original object outside the function as well.
*/

function changeMessage(obj) {
  obj.number = 40; // modifies same object in memory
}

const myObj = { number: 25 };
console.log('Before function call', myObj);
changeMessage(myObj);
console.log('After function call', myObj);

/*
🧠 MEMORY MODEL
------------------------------------------------------
Memory address #101 → { number: 25 }

Before call:
myObj ──▶ #101

During call:
obj   ──▶ #101   (same reference)
obj.number = 40 → updates same object

After:
Both myObj and obj → { number: 40 }
------------------------------------------------------

✅ Summary:
- We pass the reference (address) to the object.
- Both parameter and original variable point to the same object.
- Mutating properties inside the function affects the original object.
*/

// ====================================================
// 🔹 REASSIGNMENT INSIDE FUNCTION — (Local Only)
// ====================================================
/*
> Inside a function, if we assign a NEW object to the local parameter (the variable that received the reference),
it does NOT change the original object that it was referring to earlier.

> That’s because the function parameter holds a COPY of the reference,
and reassigning it only updates that local copy — not the original reference outside the function.
*/

let user = {
  name: 'Original',
};

function reassignExample(obj) {
  obj.message = 'Changed Original'; // modifies original
  console.log(obj);

  obj = { message: 'new obj value, reassignment' }; // local reference only
  console.log(obj);
}

reassignExample(user);
console.log(user);

/*
🧠 MEMORY MODEL
------------------------------------------------------
Before call:
user ──▶ #200 → { name: "Original" }

During call:
obj  ──▶ #200 → same object
obj.message = "Changed Original" → modifies original

Then:
obj = { message: "new obj value, reassignment" } → new address #300
obj ──▶ #300 → { message: "new obj value, reassignment" }
user ──▶ #200 → { name: "Original", message: "Changed Original" }

After:
user still points to original (#200)
------------------------------------------------------

✅ Summary:
- Reassigning the parameter to a new object breaks the link.
- Only the local reference changes, the original remains intact.
- Modifying properties before reassignment still affects the original.
*/

/*
======================================================
⚡ QUICK RECAP TABLE
======================================================
| Type              | What’s Passed?   | Affects Original? | Example Action            |
|-------------------|------------------|-------------------|---------------------------|
| Primitive         | Copy of value    | ❌ No              | x = 100                   |
| Object / Array    | Copy of reference| ✅ Yes (if mutated)| obj.name = 'X'            |
| Reassign parameter| Local reference  | ❌ No              | obj = { name: 'Y' }       |
------------------------------------------------------

💡 Final Note:
JavaScript is **always pass-by-value**, 
but for objects and arrays, the value that’s passed is a **reference**.

🧩 As a team, we should remember:
- We pass primitives → only copies (safe).
- We pass objects → shared reference (mutations visible).
- We reassign inside → affects only local variable, not the original.
------------------------------------------------------
*/
