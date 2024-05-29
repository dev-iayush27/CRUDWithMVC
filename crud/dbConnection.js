const { mongoose } = require("mongoose");

// DB connection
async function connectMongoDb() {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/my-app")
    .then(
      (con) => `MongoDB Database connected with HOST: ${con.connection.host}`
    )
    .catch((err) => console.log("Error: ", err));
}

module.exports = { connectMongoDb };
