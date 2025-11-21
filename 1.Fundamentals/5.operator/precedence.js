/**
============================================
   JAVASCRIPT OPERATOR PRECEDENCE NOTES
   CLEAN — SECTIONED — MULTILINE FORMAT
============================================
*/

/**
============================================
 SECTION 1 — WHAT IS OPERATOR PRECEDENCE?
============================================
 Operator precedence decides which operations
 execute first in an expression.

 Higher precedence = evaluated earlier.

 Example:
   2 + 3 * 4
   → 3 * 4 = 12, then 2 + 12 = 14
*/

/**
============================================
 SECTION 2 — FULL PRECEDENCE TABLE
 (From highest → lowest)
============================================
 21. Parentheses → (...)
 20. Member Access & Calls → obj.x, arr[i], fn(), new.target
 19. new (no parentheses) → new Foo
 18. Postfix & Unary → x++, ++x, !x, typeof, await
 16. Exponentiation → **
 15. Multiplicative → *, /, %
 14. Additive → +, -
 13. Bitwise Shifts → <<, >>, >>>
 12. Relational → <, >, <=, >=, instanceof, in
 11. Equality → ==, !=, ===, !==
 10. Bitwise AND → &
  9. Bitwise XOR → ^
  8. Bitwise OR → |
  7. Logical AND → &&
  6. Logical OR → ||
  5. Nullish Coalescing → ??
  4. Ternary → ? :
  3. Assignment → =, +=, -=, **=, etc.
  1. Comma → ,
*/

/**
============================================
 SECTION 3 — ASSOCIATIVITY
 (Which direction operations group)
============================================
 Left → Right:
   +, -, *, /, %, <, >, ==, ===, &&, ||, etc.

 Right → Left:
   = (assignment), **, unary ops (!, typeof), ternary (?:)
*/

/**
============================================
 SECTION 4 — COMMON EXAMPLES
============================================

 Example 1 — Parentheses vs Multiplication
 -----------------------------------------
   10 + 2 * 3
   → 2 * 3 = 6 → result = 16

   (10 + 2) * 3
   → 12 * 3 = 36


 Example 2 — AND vs OR
 -----------------------------------------
   false || true && false
   → true && false = false
   → false || false = false


 Example 3 — Nullish (??) vs OR (||)
 -----------------------------------------
   0 || 5 → 5   (0 is falsy)
   0 ?? 5 → 0   (0 is NOT null/undefined)


 Example 4 — Assignment right-to-left
 -----------------------------------------
   let a, b;
   a = b = 10;
   → (b = 10) happens first
   → then a = 10


 Example 5 — Ternary + Logical
 -----------------------------------------
   true && false ? "yes" : "no"
   → true && false = false
   → false ? "yes" : "no" → "no"


 Example 6 — Mixing || and ?? (MUST group!)
 -----------------------------------------
   let x = null;
   x ?? false || true
   → || has higher precedence than ??
   → x ?? (false || true)
   → null ?? true → true
*/

/**
============================================
 SECTION 5 — MEMORY TRICKS
============================================
 1. Easy order to remember:
    Parentheses → Member → Unary → Math → Bitwise → Logical → Ternary → Assignment → Comma

 2. "Math first, logic last"
    Multiplication/division/addition run early.

 3. Assignments run near the bottom — and right → left.

 4. Exponentiation (**) also runs right → left.

 5. When mixing ||, &&, ?? always use parentheses.
*/

/**
============================================
 END OF NOTES
============================================
*/
