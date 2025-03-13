const User = require('../model/userModel');
const asyncHandler = require('../middleware/wrapAsync');
const Joi = require('joi');

// Validation Schema
const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(1).max(120).required()
});

// Create User
const createUser = asyncHandler(async (req, res) => {
  const { error } = userValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { name, email, age } = req.body;
  const user = new User({ name, email, age });
  await user.save();
  res.status(201).json(user);
});

// Get All Users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get Single User
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// Update User
const updateUser = asyncHandler(async (req, res) => {
  const { error } = userValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// Delete User
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ message: 'User deleted successfully' });
});

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };
