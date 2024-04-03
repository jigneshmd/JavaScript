let Number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let total = 0;
for (let i = 0; i < Number.length; i++) {
  if (i % 2 == 0) {
    total += Number[i];
  }
}
console.log(total);
