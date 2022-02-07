const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instalmentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  amount: { type: Number, required: true },
  chitId: { type: mongoose.Schema.Types.ObjectId, required: true },
  instalmentDate: { type: Date, required: true },
  chitDate: { type: Date, required: true },
  instalmentNumber: { type: Number, required: true },
  users: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      paymentStatus: { type: String, required: false },
      paymentDate: { type: Date, required: false },
    },
  ],
});
module.exports = mongoose.model("Instalment", instalmentSchema);
