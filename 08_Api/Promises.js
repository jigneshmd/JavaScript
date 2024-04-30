const prmisesOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("DB Connected");
    resolve();
  }, 1000);
});
prmisesOne.then(function () {
  //   console.log("Data Passs");
});

//2
new Promise(function (reslove, reject) {
  setTimeout(function () {
    // console.log("Server Start");
    reslove();
  }, 1000);
}).then(function () {
  //   console.log("Server Startrd");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "harsh", Email: "Harsh@121Email.com" });
  });
});
PromiseThree.then(function (user) {
  console.log(user);
});

const PromiseFour = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      reslove({ userName: "Harsh", Pass: "123" });
    } else {
      reject("ERROR: data not found");
    }
  }, 1000);
});
PromiseFour.then((user) => {
  console.log(user);
  return user.userName;
})
  .then((userName) => {
    console.log("User is :", userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is resolve or rejact"));

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userid: "121", loginpass: "123" });
    } else {
      reject("ERROR : the id is not match");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const respons = await PromiseFive;
    console.log(respons);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//
// async function getAllUsers() {
//   try {
//     const respons = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await respons.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Somting Went to Wrong", error);
//   }
// }
// getAllUsers();

fetch("https://fakestoreapi.com/products")
  .then((respons) => {
    return respons.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
