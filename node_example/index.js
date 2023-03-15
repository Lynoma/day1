const axios = require("axios");
const validator = require("validator");
const lodash = require("lodash");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    response.data.forEach((element) => {
      console.log(
        element["email"] + " = " + validator.isEmail(element["email"])
      );
    });
  })
  .catch(function (error) {
    console.log(error);
  });

console.log(
  "strong password: " + validator.isStrongPassword("testTest@123#172937")
);

var lodashChunks = lodash.chunk(["a", "b", "c", "d"], 2);
var sum = lodash.sum([1, 2, 3, 4]);
console.log(lodashChunks);
console.log(sum);
