"use strict";

// Trick 1
let arr = [];
function sortedArray(...array) {
  for (let value of array.values()) {
    arr.push(...value);
  }
  arr.sort((a, b) => {
    return b - a;
  });
  console.log(arr.join(" , "));
}
sortedArray([5, 6, 2], [3, 7, 1], [4, 7, 8]);

// Trick 2
// function sort(...arrays) {
//   return [...new Set([].concat(...arrays))].sort((a, b) => b - a).join(" , ");
// }
// console.log(sort([5, 6, 2], [3, 7, 1]));
