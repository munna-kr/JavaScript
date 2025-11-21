/*
===========================================
  TAG RECOMMENDATION SYSTEM - QUESTIONS
===========================================

DATA:
const history = [
  { tags: ["js", "web", "arrays"] },
  { tags: ["js", "react"] },
  { tags: ["css", "web"] }
];

----------------------------------------------------
QUESTIONS
----------------------------------------------------

1. Flatten all tags into a single array.
   Expected shape: ["js","web","arrays","js","react","css","web"]

2. Create a frequency map of tags.
   Expected shape:
   {
     js: 2,
     web: 2,
     arrays: 1,
     react: 1,
     css: 1
   }

3. Return the top 3 most frequent tags (sorted by count desc).
   If counts tie, decide a secondary sort (alphabetical).

4. Produce a deduplicated list of tags (preserve first-seen order).

5. Given a new user's tag list, recommend 3 tags they haven't used yet,
   ordered by overall popularity in `history`.

   Example input: ["react"]
   Example output: ["js","web","arrays"]  // (do not include "react")

6. Normalize tags first:
   - trim whitespace
   - convert to lowercase
   - ignore empty strings

7. Handle edge cases:
   - tags may be missing or not an array (skip or coerce)
   - tags may contain non-string values (ignore invalid)
   - history could be empty

8. Build a function `tagPairs()` that returns co-occurrence counts:
   For each tag, count how often it appears together with every other tag.
   Expected example output:
   {
     js: { web: 1, arrays:1, react:1 },
     web: { js:1, arrays:1, css:1 },
     ...
   }

9. Create a weighted recommendation score that favors:
   - global popularity (70%)
   - tag co-occurrence with user's tags (30%)
   Return top N tags by score.

10. Export results in two formats:
    - array of { tag, count } sorted by count desc
    - object map { tag: count }

11. (Advanced) Given time-series tag history (each entry has a timestamp),
    implement a decay factor so recent tags weigh more heavily than old ones.

12. (Testing) Write unit-test style sample inputs and expected outputs for:
    - flattening
    - frequency counting
    - top-k recommendation
    - co-occurrence map

===========================================
*/
