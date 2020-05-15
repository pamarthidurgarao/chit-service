const mongoose = require('mongoose');
const Bid = require('../../models/bid.model')

create = async function(reqBid) {
    const bid = new Bid(reqBid);
    bid._id = new mongoose.Types.ObjectId();
    try {
        const newUserEntry = await bid.save()
        global.io.emit(reqBid.chit, { status: 'msg' });
        return newUserEntry;
    } catch (error) {
        throw error
    }
}

query = async function(qur) {
    return Bid.find(qur).populate('chit').populate('bidUser').exec();
}

socketTest = async function(qur) {
    global.io.emit(qur, 'msg');
    console.log('socket request');
}

module.exports = { create, query, socketTest }