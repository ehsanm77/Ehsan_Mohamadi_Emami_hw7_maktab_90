"use strict";

let map = new Map();
map.set("name", "John");
// let keys = map.keys();
//    Error: keys.push is not a function
// keys.push("more");

// Trick 1
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);

// Trick 2
// let keys = [...map.keys()];
// keys.push("more");
// console.log(keys);

// Reason ==>
// `map.keys()` returns an iterator object rather than an array, and iterator object do not have the same methods as array, such as the `push()` methods.
// To fix this issue, you can convert the iterator object to an array  using the `Array.from()` method like trick 1
// And we can fix this issue with using spread operator(...) like trick 2
