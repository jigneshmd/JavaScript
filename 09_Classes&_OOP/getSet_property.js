function User(email, password) {
  this.email = email;
  this.password = password;
}

Object.defineProperty(this, "email", {
  get: function () {
    return this._email.toUpperCase();
  },
  set: function (value) {
    this._email = value;
  },
});

Object.defineProperty(this, "password", {
  get: function () {
    return this._password;
  },
  set: function (value) {
    this._password = value;
  },
});
const Dhruv = new User("Dhruv@gmail.com", "Dk#57");
console.log(Dhruv.email);
console.log(Dhruv.password);
