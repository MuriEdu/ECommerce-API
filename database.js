const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/ecommerce")
  .then(() => {
    console.log(`Server connected on mongodb://localhost/ecommerce`);
  })
  .catch((err) => {
    console.log(`404 => ${err}`);
  });
