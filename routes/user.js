const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const { handleGetAllUsers } = require("../controllers/user");
const { handleAddNewUser } = require("../controllers/user");
const { handleGetUserById } = require("../controllers/user");
const { handleUpdateUserById } = require("../controllers/user");
const { handleDeleteUserById } = require("../controllers/user");

Router.route("/").get(handleGetAllUsers).post(handleAddNewUser);

Router.route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = Router;
