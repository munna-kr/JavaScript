/* ===> The Nullish Coalescing Operator (??) 
=> it is used to provide a default value when dealing with null or undefined
=> it check...
=> if left-hand operand is null or undefined:
=> yes --> return right-hand operand
=> no  --> return left-hand operand
*/

// || operator failed to evalaute actual value of balance, 0 is falsy value
// so it will evaluate 100 (which is truthy value)
const balance = 0;
console.log('Current Balance:', balance || 100);

// Nullish Coalescing operator, it fix the above error
// will return left-hand operand
console.log('Current Balance:', balance ?? null);

// will return right hand operand
const user = undefined;
console.log(user ?? "Name is undefined");