const User = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
};
const handleDeleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
};
const handleUpdateUserById = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "lolodile" });
    return res.json({ status: "success" });
};
const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ status: "nahi mila sir" });
  }
  return res.json(user);
};
const handleAddNewUser = async (req, res) => {
  const body = req.body;
  if (!body || !body.email) {
    return res.status(400).json({ status: "empity" });
  }
  const data = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    profession: body.profession,
  });
  console.log("result", data);
  return res.status(201).json({ mssg: "hogaya ji" });
};

module.exports = {
  handleGetAllUsers,
  handleAddNewUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById
};
