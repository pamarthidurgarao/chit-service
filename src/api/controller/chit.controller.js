const mongoose = require('mongoose');
const Chit = require('../../models/chit.model')

module.exports = {
    create: async(reqChit) => {
        const chit = new Chit(reqChit);
        chit._id = new mongoose.Types.ObjectId();
        try {
            const savedEntry = await chit.save()
            return savedEntry;
        } catch (error) {
            throw error
        }
    },
    getChits: async() => {
        return Chit.find((err, res) => {
            return res;
        });
    },
    get: async(id) => {
        return new Promise((resolve, reject) => {
            resolve(Chit.findById(id));
        });
    },
    getChitsByUser: async(userId) => {
        return Chit.find({ "members": { _id: userId } }).populate('members').exec();
    },

    update: async(updateChit) => {
        let chit = {};
        if (updateChit.$init) {
            chit = updateChit;
        } else
            chit = new Chit(updateChit);
        try {
            const updateEntry = chit.update();
            return updateEntry;
        } catch (error) {
            throw error;
        }
    }
}