const User = require("./UserModels.js");
async function createUser(req, res) {
  try {
    const user = new User({
      Name: req.body.Name,
      Age: req.body.Age,
      email: req.body.email,
      role: req.body.role
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getUserByName(req, res) {
  try {
    const user = await User.findOne({ Name: req.params.Name });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createUser, getUsers, getUserByName };
