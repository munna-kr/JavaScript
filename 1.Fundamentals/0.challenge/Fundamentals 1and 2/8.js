/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/

// solution

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

function calcTip(bill) {
    let tip = 0;
    bill >= 50 && bill <= 300 ? tip = (15 / 100) * bill :
        tip = (20 / 100) * bill;
    return tip;
};

function totalAmount(bills, tips) {
    return bills + tips;
};


for (let a = 0; a < bills.length; a++) {
    tips.push(calcTip(bills[a]));
    totals.push(totalAmount(bills[a], tips[a]));
}

console.log(bills, tips, totals);

/* ---------------- BONUS EXERCISE --------
Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

// bonus question's solution
function calcAverage(arr) {
    let sum = 0;
    for (let a = 0; a < arr.length; a++) {
        // sum = sum + arr[a];
        sum += arr[a];
    }
    let average = sum / arr.length;
    return average;
};

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));