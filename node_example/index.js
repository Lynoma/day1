const axios = require("axios");
const validator = require("validator");
const lodash = require("lodash");
const { parse } = require("csv-parse");
const fs = require("fs");

function axiosValidator() {
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
}

function lodashUse() {
    var lodashChunks = lodash.chunk(["a", "b", "c", "d"], 2);
    var sum = lodash.sum([1, 2, 3, 4]);
    console.log(lodashChunks);
    console.log(sum);
}


function habitablePlanets() {
    var results = [];

    fs.createReadStream("./assets/kepler.csv")
    .pipe(
      parse({
        columns: true,
        comment: "#",
      })
    )
    .on("data", (data) => results.push(data))
    .on("end", () => {
      results.forEach((planet) => {
        if (
          planet.koi_disposition == "CONFIRMED" &&
          planet.koi_prad < 1.6 &&
          planet.koi_insol > 0.36 &&
          planet.koi_insol < 1.11
        )
          console.log(planet.kepler_name);
      });
    });
}

axiosValidator();
lodashUse();
habitablePlanets();


