'use strict';

/*
========> SET <=========
--> It's collection of unique values, either primitve or non primitve
--> A set automatically remove duplicate values.
--> The values in a Set are stored in the order they were inserted.
--> A Set can store values of any data type, including objects, numbers, strings, and more.

syntax: const mySet = new Set();
*/

// creating a set
const idNo = new Set([1231, 2242, 9282, 1093, 1111, 3929, 3901, 9301]);
console.log(idNo);

// ====> COMMON METHODS <====

// 1. add(value)
idNo.add(4499);

// 2. delete(value)
idNo.delete(1111);

// 3. has(value): return boolean
idNo.has(4499);

// 4. size
console.log(idNo.size);

// 5. clear : delete all values from set
idNo.clear();

// ====> ITERATING OVER SET <=====
const newID = new Set([12231, 12242, 19282, 11093, 11111, 13929, 13901, 19301]);

// for ...of
for (const id of newID) console.log(id);

// forEach();
newID.forEach((value) => {
  console.log(value);
});

// ...operator
const idArray = [...newID];
console.log(idArray);

// =====> USE CASES <=====

// 1. Removing duplicates from an array:
const staff = new Set([
  'Waiter',
  'Chef',
  'Manager',
  'Waiter',
  'Chef',
  'Waiter',
]);
console.log(staff);

// 2. Storing Unique objects:
const cafeStaff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];
const bankStaff = ['Manager', 'Cashier', 'Accountant', 'Clerk', 'Cashier'];
const storeStaff = [
  'Supervisor',
  'Manager',
  'DeliveryPerson',
  'Manager',
  'Cashier',
];

const uniqueStaff = new Set([...cafeStaff, ...bankStaff, ...storeStaff]);
console.log(uniqueStaff);

// =======> New features of Sets, since june 2024<======

const setCafeStaff = new Set(['Waiter', 'Manager', 'Chef', 'Cashier']);
const setBankStaff = new Set(['Manager', 'Cashier', 'Accountant', 'Clerk']);

// 1.  Set.prototype.intersection()
// ==> common elements.
const cafeCommonBank = setCafeStaff.intersection(setBankStaff);
console.log('---New Features---');
console.log(cafeCommonBank);

// 2.  Set.prototype.union()
// ==> collection of all elements (cobinination of all sets).
const cafeUbank = setCafeStaff.union(setBankStaff);
console.log(cafeUbank);

// 3.  Set.prototype.difference()
// ==> A and B two sets, (A-B) means elements that is only available in A but not in B.
// --> setCafeStaff-setBankStaff
const uniqueCafeStaff = setCafeStaff.difference(setBankStaff);
console.log(uniqueCafeStaff);
// --> setBankStaff-setCafeStaff
const uniqueBankStaff = setBankStaff.difference(setCafeStaff);
console.log(uniqueBankStaff);

// 4.  Set.prototype.symmetricDifference()
// ==> either in set A or in set B, but not in both.
// ==> just opposite of intersection
const cafeNOTcommonBank = setCafeStaff.symmetricDifference(setBankStaff);
console.log(cafeNOTcommonBank);

// 5.  Set.prototype.isDisjointFrom()
// ==> true if set A has no elements in common with the set B, and false otherwise.
const iscafeDisjointbank = setCafeStaff.isDisjointFrom(setBankStaff);
console.log('is setCafeStaff disjoint form setBankStaff:', iscafeDisjointbank);

// 6.  Set.prototype.isSupersetOf()
// ==> true if all elements in the set A are also in set B, and false otherwise.
const iscafeSupersetOfbank = setCafeStaff.isSupersetOf(setBankStaff);
console.log(
  'is setCafeStaff is super set of setBankStaff:',
  iscafeSupersetOfbank
);

// 7. Set.prototype.isSubsetOf()
// ==> true if all elements in set A are also in the set B, and false otherwise.
const iscafeSubsetOfbank = setCafeStaff.isSubsetOf(setBankStaff);
console.log('is setCafeStaff is sub set of setBankStaff:', iscafeSubsetOfbank);
