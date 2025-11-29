// console is built-in object in JS
// it contains several methods

// ===> JavaScript Console Methods Notes

// 1. console.log()
//    General output.
console.log("console.log(): Hello there!!");

// 2. console.warn()
//    Yellow warning message.

console.warn("console.warn(): Dont dirve too fast");
// 3. console.error()
//    Red error message.
console.error("console.error(): This is the error");

// 4. console.info()
//    Informational message.
console.info("console.info(): This is the safe zone");

// 5. console.debug()
//    Debug logs (may require Verbose mode in DevTools).

// 6. console.clear()
//    Clears the console.
// console.clear();

// 7. console.table()
//    Displays arrays/objects in table format.
const numbers = [12, 24, 36, 48, 60];
console.table(numbers);

// 8. console.group()
//    Starts a log group.

// 9. console.groupEnd()
//    Ends a log group.

// 10. console.groupCollapsed()
//     Creates a collapsed (click-to-expand) log group.

// 11. console.time()
//     Starts a timer.
console.time("a");

console.log("Hello!!");

// 12. console.timeEnd()
//     Ends a timer and prints duration.
console.timeEnd("a");

// 13. console.count()
//     Counts how many times the label was used.

// 14. console.countReset()
//     Resets the counter for a label.

// 15. console.trace()
//     Prints stack trace from where it was called.

// 16. console.dir()
//     Displays an obje

//
// foreach
// console.time("foreach");
// const tabels = [12, 39, 30, 10, 103, 30];
// tabels.forEach((i) => {
//   console.log(i);
// });
// console.timeEnd("foreach");

// //
// // for
// console.time("for");
// for (let i = 0; i < tabels.length; i++) {
//   console.log(tabels[i]);
// }
// console.timeEnd("for");

// //
// // while
// console.time("while");
// let i = 0;
// while (i < tabels.length) {
//   console.log(tabels[i]);
//   i++;
// }
// console.timeEnd("while");
