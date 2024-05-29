const User = require("../model/user");

async function createUser(req, res) {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.designation
  ) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  const user = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    designation: body.designation,
  });

  return res.status(201).json({ status: "Success", user: user });
}

async function getAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.json(allUsers);
}

async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.status(200).json(user);
}

async function updateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, {
    lastName: req.body.last_name,
  });
  const user = await User.findById(req.params.id);
  return res.status(201).json({ status: "Success", user: user });
}

async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res
    .status(200)
    .json({ status: "Success", msg: "User has been deleted." });
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
