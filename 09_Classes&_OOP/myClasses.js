// class User {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}jigneshmd`;
//   }
//   toChangeUserName() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const creatUser = new User("Jignesh", "Jigneshmd@gmail.com", "4907");

// console.log(creatUser.encryptPassword());
// console.log(creatUser.toChangeUserName());

///////////////////

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}jigneshmd`;
};
User.prototype.ChangeNewUser = function () {
  return `${this.userName.toUpperCase()}`;
};

const CreatNewUser = new User("Mahesh bhai", "mahesh@xxxgmail.com", "5786");

console.log(CreatNewUser.encryptPassword());
console.log(CreatNewUser.ChangeNewUser());
