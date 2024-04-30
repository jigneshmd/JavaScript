class User {
  constructor(email, password) {
    this.email = email;
    this.passwords = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}hitesh`;
  }
  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("hitesh@123gmail.com", "h@01");
console.log(hitesh.passwords);
console.log(hitesh.email);
