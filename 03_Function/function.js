function myFunction() {
  console.log("Hiii");
  console.log("Hello");
  console.log("How Are You");
  console.log("Kem Cho");
  console.log("MajaMA");
}
myFunction();

// function addNum(a, b) {
//   console.log(a + b);
// }
// addNum(20, 15);

function addNum(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}
// const result = addNum(5, 7);
// console.log("result is :", result);

function userloggedin(useername) {
  return `${useername} has login`;
}
// console.log(userloggedin("Jignesh Dankharar"));

function marks(std1, std2) {
  return std1, std2;
}
// console.log("std1", 56, "std2", 78);

function loginmassage(Hello = "Hiiii") {
  if (!Hello) {
    // console.log("welcome");
    return;
  }
  return `${Hello} wellcome to the site`;
}
// console.log(loginmassage());

// function cartTotal(pri1, pri2, ...num1) {
//   return num1;
// }
// console.log(cartTotal(100, 200, 300, 456, 678));

// const obj = {
//   userName: "takshil",
//   prodprice: 999,
// };

// function handleobject(anyobj) {
//   console.log(
//     `UserName is ${anyobj.userName} & TotalProductPrice is ${anyobj.prodprice}`
//   );
// }
// handleobject(obj);

// handleobject({
//   userName: "goti",
//   prodprice: 300,
// });

// const newArray = [100, 235, 46, 86, 48];

// function newArray2(getArray) {
//   return getArray[1];
// }
// console.log(newArray2(newArray));
// console.log(newArray2([100, 25, 57, 89, 500]));

// const Name = ["goti", "nakrani", "balar", "goyani"];

// function surName(getArray) {
//   return getArray[2];
// }
// console.log(surName(Name));

// const Number = [1, 2, 3, 4, 5, 6];

// function number1(getnum) {
//   return getnum[3];
// }
// console.log(number1(Number));

// const object = {
//   AccountHolderName: "paras nakrani",
//   AccountType: "Curent",
//   AvilabelBalance: 1200000,
// };

// function bankName(branch) {
//   console.log(
//     `Account Holder Name is ${branch.AccountHolderName} Avilabel Balance ${branch.AvilabelBalance}`
//   );
// }
// bankName(object);

// let val1 = 10;
// let val2 = 20;

// function addNum(num1, num2) {
//   let total = num1 + num2;
//   return total;
// }
// let result = (val1, val2);
