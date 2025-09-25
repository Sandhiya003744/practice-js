const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
