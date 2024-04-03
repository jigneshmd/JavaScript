// const myArray = [1, 2, 3, 4, 5];

// const values = myArray.forEach(function (value) {
//   //   console.log(value);
//   return value;
// });
// console.log(values);

// -----For Each loop do not Returns Values------

// -------- Filter ----------
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNum.filter((num) => {
//   return num > 4;
// });

// const newNums = [];
// myNum.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

// const newNums = myNum.filter((num) => {
//   return num <= 4;
// });
// console.log(newNums);

const myArray = [
  { name: "js", std: "11TH", group: "a", exam: "JEE" },
  { name: "jay", std: "12TH", group: "b", exam: "NEET" },
  { name: "rutvik", std: "12TH", group: "a", exam: "NEET" },
  { name: "chirag", std: "11TH", group: "b", exam: "JEE" },
  { name: "ritesh", std: "11TH", group: "a", exam: "NEET" },
  { name: "yash", std: "12TH", group: "a", exam: "JEE" },
  { name: "kupal", std: "11TH", group: "b", exam: "JEE" },
];
let stdData = myArray.filter((sd) => sd.std === "11TH");

stdData = myArray.filter((sd) => {
  return sd.std > "11TH" && sd.group === "b";
});
console.log(stdData);
//
//
//======= Map Mathod ==========

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNum.map((num) => {
//   return num + 10;
// });

const newNums = myNum
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((num) => num >= 40);
console.log(newNums);
