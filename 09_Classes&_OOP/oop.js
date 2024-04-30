const user = {
  userName: "Harsh",
  loginCount: 10,
  userlogedin: "fales",

  getUserDetails() {
    // console.log("login found");
    // console.log(`userName ${this.userName}`);
  },
};
// console.log(user.userName);
// console.log(user.getUserDetails());

function User(userName, loginCount, userlogedin) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.userlogedin = userlogedin;

  //   return this;
}

const UserOne = new User("paras", 12, "true");

console.log(UserOne);
