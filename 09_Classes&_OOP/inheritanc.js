class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName is : ${this.username}`);
  }
}

class profil extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  AddUser() {
    console.log(`Added New User ${this.username}`);
  }
}

const xyz = new profil("xyz", "xyz@gmail.com", "001");

xyz.logMe();

const ChaiPilla = new User("PrafullBillore");

ChaiPilla.logMe();
