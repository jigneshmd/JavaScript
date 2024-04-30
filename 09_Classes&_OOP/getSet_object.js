const User = {
  _email: "dk57@gmail.com",
  _password: "Dk@420",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
