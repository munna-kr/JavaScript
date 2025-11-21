/*
### 1. Student Scores Cleanup

**Scenario:** A teacher exports test scores, but some entries are invalid (`null`, "NA", or negative numbers).

**Tasks:**

> Remove invalid entries
> Convert all scores to integers
> Count how many students passed (score ≥ 40)
*/
const scores = [
  78,
  '82',
  null,
  'NA',
  43,
  20,
  '29',
  39,
  -4,
  91,
  ' 56 ',
  undefined,
  0,
  100,
  38,
  '87.5',
  'NA',
  28,
  -1,
  '73',
  40,
  'hello',
];

// filter all invalid entries
const invalid = function (value) {
  if (
    value === null ||
    value === undefined ||
    value < 0 ||
    Number(value) === NaN
  )
    return false;
  else typeof value === String;
  return Number(value);
};

// 1 - Remove invalid entries
const validScore = scores.filter(invalid);
console.log(validScore);

// 2 - convet all scores to integer

// convert string into number
const strToNum = (value) => (typeof value === 'string' ? Number(value) : value);

const allIntegers = validScore.map(strToNum);
console.log(allIntegers);

// 3- Count how many students passed (score ≥ 40)
const count = allIntegers.filter((value) => value >= 40).length;
console.log(count);
