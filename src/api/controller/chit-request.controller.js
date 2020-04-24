const mongoose = require('mongoose');
const ChitRequest = require('../../models/chit-request.model')

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
        return ChitRequest.find(qur).populate('chit').populate('user').exec();
    },
    deleteRequest: async(id) => {
        const request = await ChitRequest.findById(id);
        if (request)
            request.delete();
    }
}