const discripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(discripter);

const User = {
  name: "JayPatel",
  email: "jay@123gmail.com",
  logedin: "true",
};

console.log(Object.getOwnPropertyDescriptor(User, "name"));
