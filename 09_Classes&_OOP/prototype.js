let name = ["nirav", "jatin", "milan"];

let surName = {
  nirav: "Chovti",
  jatin: "Jaat",
  milan: "paneliya",

  getmilansurName: function () {
    console.log(`milan ${this.milan}`);
  },
};

Object.prototype.ritesh = function () {
  console.log(`ritesh pass all object in function`);
};

Array.prototype.rutvik = function () {
  console.log("rutvik is not pass in the object ");
};
// surName.ritesh();
// name.ritesh();
// name.rutvik();
// surName.rutvik();

//inheritanc

const user = {
  name: "Yash",
  Email: "yash@Email.com",
  pass: 111,
};

const login = {
  userisLogedin: "true",
};

const singOut = {
  userLogOut: "fales",
  __prototype__: login,
};
singOut.__prototype__ = user;

/////
Object.setPrototypeOf(singOut, user);

let anotherUsername = "Hello Jignesh    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength();
"jignesh MaheshBhai Dankhara".trueLength();
