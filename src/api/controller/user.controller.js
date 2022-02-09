const mongoose = require("mongoose");
const User = require("../../models/user.model");

module.exports = {
  createUser: async (reqUser) => {
    const user = new User(reqUser);
    user._id = new mongoose.Types.ObjectId();
    try {
      const newUserEntry = await user.save();
      return newUserEntry;
    } catch (error) {
      throw error;
    }
  },
  getAllUsers: async () => {
    // ...
    return User.find((err, res) => {
      return res;
    });
  },
  getById: async (id) => {
    // ...
    return User.findById(id, (err, res) => {
      return res;
    });
  },
  query: async (qur) => {
    return User.find(qur).exec();
  },
};
