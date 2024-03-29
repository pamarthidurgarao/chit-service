const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  displayName: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: String, required: false },
  gender: { type: String, required: false },
  imageUrl: { type: String, required: false },
  dob: { type: String, required: false },
  address: { type: String, required: false },
  fbId: { type: String, required: false },
  googleId: { type: String, required: false },
});
module.exports = mongoose.model("User", userSchema);
