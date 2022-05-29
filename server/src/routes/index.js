const express = require("express");
const { register, login, checkAuth } = require("../controllers/auth");
const { addProfile } = require("../controllers/profile");
const { getTodo } = require("../controllers/todo");
const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserByEmail,
} = require("../controllers/user");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.get("/todos", getTodo);

router.post("/user", addUsers);
router.get("/users", getUsers);
router.get("/user", auth, getUser);
router.get("/userByEmail", getUserByEmail);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.patch("/profile", auth, addProfile);

// Auth
router.post("/register", register);
router.post("/login", login);
router.get("/auth", auth, checkAuth);

module.exports = router;
