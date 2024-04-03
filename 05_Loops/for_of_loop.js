const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of Array) {
  //   console.log(num);
}

const masseg = "Hello World";
for (const greet of masseg) {
  //   console.log(greet);
  //   break;
  //   continue;
}

const map = new Map();
map.set("IN", "India");
map.set("UK", "United Kingdom");
map.set("USA", "United State Of America");
map.set("USaa", "United State Of America");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const obj = {
  name: "jay",
  age: 22,
};
for (const [key, value] of obj) {
  //   console.log(key, ":-", value);
}
// Object will throw :- error because object is not iterable
