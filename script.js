"use strict";

let salaries = {
  John: 300,
  Pete: 300,
  Mary: 250,
};
let newSalaries = {
  Saeed: 300,
  Mohamad: 600,
  Alireza: 400,
  Ehsan: 600,
};
// Trick 1
function topSalarys(input) {
  let arr = Object.entries(input);
  arr.sort((a, b) => {
    return b[1] - a[1];
  });
  let newArr = arr.filter((item) => {
    return item[1] == arr[0][1];
  });
  for (const x of newArr) {
    console.log(`${x[0]} 😎`);
  }
}
topSalarys(newSalaries);

// Trick 2
// function topSalary(obj) {
//   let maxSalary = 0;
//   let maxName = [];
//   for (let name in obj) {
//     if (obj[name] > maxSalary) {
//       maxSalary = obj[name];
//       maxName = [name];
//     } else if (obj[name] === maxSalary) {
//       maxName.push(name);
//     }
//   }
//   return `${maxName.join(" and ")} Have Max Salary 😎`;
// }
// console.log(topSalary(newSalaries));
