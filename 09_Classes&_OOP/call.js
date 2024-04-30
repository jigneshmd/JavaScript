function SetUsername(username) {
  this.username = username;
  console.log("Call");
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const ChaiPila = new CreateUser("ChaiVala", "ChaivalaBhau@gmail.com", "111");
console.log(ChaiPila);
