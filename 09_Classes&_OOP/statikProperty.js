class User {
  constructor(usernamwe) {
    this.usernamwe = usernamwe;
  }
  logMe() {
    console.log(`UserName : ${this.usernamwe}`);
  }
  static CreatedId() {
    return `111`;
  }
}
const Takshil = new User("Takshil");

// console.log(Takshil.CreatedId());

class Student extends User {
  constructor(usernamwe, email) {
    super(usernamwe);
    this.email = email;
  }
}

const sem = new Student("JD", "JD123@gmail.com");
sem.logMe();
