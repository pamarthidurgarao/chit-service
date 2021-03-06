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
            resolve(Chit.findById(id).populate('members').populate('instalments').populate('createdBy').exec());
        });
    },
    getChitsByUser: async(userId) => {
        return Chit.find({ "createdBy": { _id: userId }, "members": { _id: userId } }).populate('members').populate('instalments').populate('createdBy').exec();
    },

    update: async(updateChit) => {
        let chit = {};
        if (updateChit._doc) {
            chit = Object.assign(chit, updateChit._doc);
        } else {
            chit = Object.assign(chit, updateChit);
        }
        delete chit._id;
        try {
            return Chit.findByIdAndUpdate({ _id: updateChit.id }, chit, {}, function(err, chit) {
                return chit;
            })
        } catch (error) {
            throw error;
        }
    },
    query: async(qur) => {
        return Chit.find(qur).populate('members').populate('instalments').populate('createdBy').exec();
    },
    deleteChit: async(id) => {
        return Chit.findOneAndDelete({ _id: id }, function(err, s) {
            return s;
        });
    }
}