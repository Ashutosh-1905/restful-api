const express = require("express");
const {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUser,
  loginUser,
  logoutUser,
} = require("../controllers/usercontroller");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();

// public routes
router.post("/users", createUser);
router.post("/users/login", loginUser);
router.post("/users/logout",logoutUser);

// private routes
router.get("/users", isLoggedIn, getAllUser);
router.get("/users/:id", isLoggedIn, getUser);
router.put("/users/:id", isLoggedIn, updateUser);
router.delete("/users/:id", isLoggedIn, deleteUser);

module.exports = router;
