const user = {
  userName: "krupal",
  primer: 199,

  wlcomeMassage: function () {
    console.log(`${this.userName}, Welcom to the Websit`);
    console.log(this);
  },
};
// user.wlcomeMassage();
// user.userName = "yash";
// user.wlcomeMassage();
// console.log(this);

// function myfunc() {
//   let vieverName = "Hitesh";
//   console.log(this.myfunc);
// }
// myfunc();

// const myfunc = function () {
//   let userName = "yash";
//   console.log(this.userName);
// };
// myfunc();

/****** Arrow Function ******/
// const myfunc = () => {
//   let userName = "Hitesh";
//   console.log(this.userName);
// };
// myfunc();

// let total = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(total(4, 6));

// const total = (num1, num2) => num1 + num2;
// const total = (num1, num2) => ({ userName: "Ritesh" });
// console.log(total(4, 4));

// (function testing() {
//   console.log("DB Connected");
// })();

// ((Name) => {
//   console.log(`DB Connected ${Name}`);
// })("Ramesh");
