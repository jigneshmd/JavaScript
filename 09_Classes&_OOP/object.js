function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function creatUser(userName, score) {
  this.userName = userName;
  this.score = score;
}

creatUser.prototype.increment = function () {
  this.score++;
};
creatUser.prototype.printme = function () {
  console.log(`Score is ${this.score}`);
};

const Rohitman = new creatUser("Rohitman", 264);
const Kingkoli = creatUser("Kingkoli", 100);

Rohitman.printme();
