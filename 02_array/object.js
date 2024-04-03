const user_object = {
  name: "Jignesh",
  email: "jignesh11@.com",
  age: 23,
  password: 111111,
  isloggedIn: "fales",
};
// console.log(user_object.email);
// console.log(user_object["email"]);
// console.log(user_object["password"]);

// user_object.email = "jigneshmd111@gmail.com";
// console.log(user_object);

// user_object.greeting = function () {
//   console.log("Namsteee...");
// };
// user_object.greeting1 = function () {
//   console.log(`Namsteee,${this.name}`);
// };

// console.log(user_object.greeting());
// console.log(user_object.greeting1());

// const User = {};

// User.name = "jignesh";
// User.id = 123;
// User.isLoggedIn = "False";

// console.log(User);

const temporery_user = {
  email: "jignesh00@gmail.com",
  fullName: {
    userFullName: {
      name: "jignesh",
      middelName: "Mahesh Bhai",
      lastName: "Dankharar",
    },
  },
};
// console.log(temporery_user.fullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const user = [
  {
    id: 1,
    email: "Abcd@gmail.com",
  },
  {
    id: 2,
    email: "Abcdefghij@gmail.com",
  },
  {
    id: 3,
    email: "Abcdretyktg@gmail.com",
  },
  {
    id: 4,
    email: "Abcdqqqqqq@gmail.com",
  },
  {
    id: 5,
    email: "Abcdsddhj@gmail.com",
  },
];
// console.log(user[0].id);

// console.log(Object.keys(user_object));
// console.log(Object.values(user_object));

const course = {
  courseName: "JavaScript",
  Fees: "$999",
  Type: "Online",
};
const { Fees } = course;
console.log(Fees);
