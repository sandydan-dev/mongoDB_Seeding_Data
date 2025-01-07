const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB;

const connectDB = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.log("Error while connection", error.message);
    });
};

module.exports = { connectDB };
