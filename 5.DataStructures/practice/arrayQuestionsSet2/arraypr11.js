/*
 
===========================================
  INVENTORY SYNC BETWEEN SYSTEMS - QUESTIONS
===========================================

  DATA:
  const oldData = [
    { id: 1, qty: 5 },
    { id: 2, qty: 0 }
  ];

  const newData = [
    { id: 1, qty: 7 },
    { id: 3, qty: 4 }
  ];

  ----------------------------------------------------
  QUESTIONS
  ----------------------------------------------------

  1. Merge oldData and newData into a single array.
     - If an id exists in BOTH arrays, use the qty from newData.
     - If an id is unique to one array, include it as-is.

  2. Sort the merged inventory by id in ascending order.

  3. Find all products that are out of stock (qty === 0).

  4. Check if every product has non-negative qty.

  5. Count total number of items (sum of all qty values).

  6. Create an array of all product ids (unique, sorted).

  7. Identify which products were newly added in newData
     (products whose id does NOT exist in oldData).

  8. Identify which products were removed
     (exist in oldData but not in newData).

  9. Return only updated products – items where old qty !== new qty.
     Example:
       old: { id: 1, qty: 5 }
       new: { id: 1, qty: 7 }
       → changed because 5 → 7

  10. Normalize the inventory data:
      - Ensure id is a number
      - Ensure qty is a number
      - Replace invalid values (null, undefined, NaN) with 0

  11. Generate an object grouped by id:
      Example:
      {
        1: { oldQty: 5, newQty: 7 },
        2: { oldQty: 0, newQty: 0 },
        3: { oldQty: 0, newQty: 4 }
      }

  12. Detect inventory conflicts:
      Conflict = same id appears with negative qty in any dataset.

===========================================
*/
