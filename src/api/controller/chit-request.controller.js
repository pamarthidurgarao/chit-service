const mongoose = require('mongoose');
const ChitRequest = require('../../models/chit-request.model');
const Chit = require('../../models/chit.model');

module.exports = {
    create: async(reqChitRequest) => {
        const chitRequest = new ChitRequest(reqChitRequest);
        chitRequest._id = new mongoose.Types.ObjectId();
        try {
            const chitRequestEntry = await chitRequest.save()
            return chitRequestEntry;
        } catch (error) {
            throw error
        }
    },
    query: async(qur) => {
        return ChitRequest.find(qur).populate({
            path: 'chit',
            populate: { path: 'createdBy' }
        }).populate('user').exec();
    },
    deleteRequest: async(id) => {
        const request = await ChitRequest.findById(id);
        if (request)
            request.delete();
    },
    requestAction: async(id, status) => {
        const request = await ChitRequest.findById(id);
        if (status) {
            const updateChit = await Chit.findById(request.chit);
            let chit = {};
            if (updateChit._doc) {
                chit = Object.assign(chit, updateChit._doc);
            } else {
                chit = Object.assign(chit, updateChit);
            }
            delete chit._id;
            chit.members.push(request.user);
            try {
                Chit.findByIdAndUpdate({ _id: updateChit.id }, chit, {}, function(err, chit) {
                    console.log("chit updated!");
                })
            } catch (error) {
                throw error;
            }
        }
        request.delete();
    }
}