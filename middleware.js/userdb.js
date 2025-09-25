const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error to connect MongoDB:", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
