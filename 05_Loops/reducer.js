const myNumber = [1, 2, 3, 4, 5];

// const myTotal = myNumber.reduce(function (accumulator, currentValue) {
//   console.log(`accumulator : ${accumulator} currentValue : ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);

const myTotal = myNumber.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

const shopingCart = [
  {
    Product: "Shoes",
    Price: 2999,
  },
  {
    Product: "Cloths",
    Price: 999,
  },
  {
    Product: "Mobile",
    Price: 25000,
  },
  {
    Product: "TV",
    Price: 29999,
  },
  {
    Product: "AirPods",
    Price: 1499,
  },
];

const pricetopay = shopingCart.reduce((acc, item) => acc + item.Price, 0);
// console.log("Total Bill Is :", pricetopay);
