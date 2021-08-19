const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/ecommerce")
  .then(() => {
    console.log(`Server connected on mongodb://loalhost/ecommerce`);
  })
  .catch((err) => {
    console.log(`404 => ${err}`);
  });
