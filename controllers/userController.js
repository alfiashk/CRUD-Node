const User = require("../model/userModel");
const wrapAsync = require("../middleware/wrapAsync");

exports.createUser = wrapAsync(async (req, res, next) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) return next(new Error("All fields are required"));
    const newUser = await User.create({ name, email, age });
    res.json(newUser);
});

exports.getAllUsers = wrapAsync(async (req, res) => {
    const users = await User.find();
    res.json(users);
});

exports.getUserById = wrapAsync(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) return next(new Error("User not found"));
    res.json(user);
});

exports.updateUser = wrapAsync(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedUser) return next(new Error("User not found"));
    res.json(updatedUser);
});

exports.deleteUser = wrapAsync(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return next(new Error("User not found"));
    res.json({ message: "User deleted successfully" });
});
