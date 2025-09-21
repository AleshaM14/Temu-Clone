import { User } from "../models/model.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Do not send password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
