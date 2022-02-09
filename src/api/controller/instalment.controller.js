const mongoose = require("mongoose");
const Instalment = require("../../models/instalment.model");
const Chit = require("../../models/chit.model");
const {
  update: updateChit,
  get: getChit,
  query,
} = require("./chit.controller");
const { getById } = require("./user.controller");

module.exports = {
  create: async (reqInstalment) => {
    const instalment = new Instalment(reqInstalment);
    instalment._id = new mongoose.Types.ObjectId();
    try {
      const newInstalmentEntry = await instalment.save();
      const chit = await getChit(newInstalmentEntry.chitId);

      if (chit.instalments) chit.instalments.push(newInstalmentEntry.id);
      else {
        chit.instalments = [];
        chit.instalments.push(newInstalmentEntry.id);
      }
      updateChit(chit);
      return newInstalmentEntry;
    } catch (error) {
      throw error;
    }
  },
  update: async (reqInstalment) => {
    const instalment = new Instalment(reqInstalment);
    try {
      const updateInstalmentEntry = await instalment.update();
      return updateInstalmentEntry;
    } catch (error) {
      throw error;
    }
  },
  get: async (id) => {
    return Instalment.findById(id)
      .populate("users.user")
      .populate("bidUser")
      .exec();
  },
  deleteInstalment: async (id) => {
    const instalment = await Instalment.findById(id);
    const chit = await getChit(instalment.chitId);
    chit.instalments = chit.instalments.filter(
      (item) => item.toString() !== id
    );
    updateChit(chit);
    return instalment.delete();
  },
  query: async (qur) => {
    return Instalment.find(qur)
      .populate("users.user")
      .populate("bidUser")
      .exec();
  },
};
