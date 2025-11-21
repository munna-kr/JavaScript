                JAVASCRIPT ARRAY STRUCTURE
       ────────────────────────────────────────────

   let arr = [10, 20, 30];

   Internally, the array is actually an OBJECT:

   {
     "0": 10,
     "1": 20,
     "2": 30,
     length: 3,
     __proto__: Array.prototype   ← Methods live here
   }

   PROTOTYPE CHAIN (Where methods come from):

       arr
        │
        └── __proto__ → Array.prototype
                            │
                            └── __proto__ → Object.prototype
                                                    │
                                                    └── null

   ARR CONTAINS:
   ✔ Indexed keys (0,1,2,...)
   ✔ length property
   ✔ __proto__ link (to Array.prototype)

   ARRAY DOES NOT CONTAIN ITS METHODS DIRECTLY.
   Methods live in Array.prototype.

   Example:
   arr.push(40);
   push() is looked up from Array.prototype through __proto__ link.
