"use strict";
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// Trick 1
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
}
console.log(aclean(arr));

// Trick 2
// function aclean(arr) {
//   let newArr = [];
//   let result = [];
//   for (const value of arr) {
//     newArr.push(value.toLowerCase().split("").sort().join(""));
//   }
//   for (let item of newArr) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   }
//   console.log(result);
// }
// aclean(arr);
