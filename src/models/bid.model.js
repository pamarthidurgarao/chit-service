const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    amount: { type: Number, required: true },
    createDate: { type: Date, required: true },
    chit: { type: Schema.Types.ObjectId, ref: 'Chit' },
    bidUser: { type: Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Bid', bidSchema);