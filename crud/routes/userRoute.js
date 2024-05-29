const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controller/userController");

const router = express.Router();

router.post("/user", createUser);

router.get("/users", getAllUsers);

router
  .route("/user/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
