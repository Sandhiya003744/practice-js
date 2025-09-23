const User = require("./schema.js"); 
const postUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      role: req.body.role,
      email: req.body.email,
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({message:"error"});
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: "error"});
  }
};

const userById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "can't found user" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({
      message: "error",
    });
  }
};

module.exports = { postUser, getUser, userById };

