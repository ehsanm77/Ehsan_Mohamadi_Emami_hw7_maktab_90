"use strict";

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
// Trick 1
function unique(arr) {
  let result = [];
  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result.join(" , ");
}
console.log(unique(values));

// Trick 2
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(unique(values).join(" , "));
