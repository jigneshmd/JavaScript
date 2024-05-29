const array = [1, 2, 3, 4, 5];
const array2 = ["ramesh", "hitesh", "mukesh"];
const array3 = new Array(1, 2, 3, 4, 5, 7);
// console.log(array3[3]);

/****** Array Methods ******/

// array.push(6); //add a new value in array
// array.pop(); //remove last value in array
// array.unshift(6); //add a new avlue in array starting
// array.shift(); //remove a sarting value
// console.log(array.includes(5));
// console.log(array.indexOf(5));

// const newArray = array.join();

// console.log(array);
// console.log(typeof newArray);

// slice aplice
// console.log("A ", array);

// const ny1 = array.slice(1, 4);
// console.log("B  ", array);
// console.log("ny1", ny1);

const ny2 = array.splice(1, 4); // Manuplet origenl array
// console.log("C ", array);
console.log("ny2", ny2);

// array.push(array2);
// console.log(array);

// const FullName = array.concat(array2);
// console.log(FullName);

// const spredop = [...array, ...array2, ...array3];
// console.log(spredop);

// console.log(Array.isArray("Jignesh"));
// console.log(Array.from("jignesh"));

// const name = "jignesh";
// const MiddelName = "Mhesh bhai";
// const lastName = "Dankharar";
// console.log(Array.of(name, MiddelName, lastName));

// const arrayy = [1, 2, 3, 4, 5, 7];
// const named = ["j", "m", "f", "e", "dh"];
