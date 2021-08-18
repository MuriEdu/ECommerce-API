const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/ecommerce", { useMongoClient: true })
  .then(() => {
    console.log(`Server connected on mongodb://localhost/ecommerce`);
  })
  .catch((err) => {
    console.log(`404 => ${err}`);
  });
