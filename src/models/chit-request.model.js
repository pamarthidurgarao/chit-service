const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chitRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chit: { type: Schema.Types.ObjectId, ref: 'Chit', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    requestDate: { type: Date, required: true },
    status: { type: Boolean, required: true }
});
module.exports = mongoose.model('ChitRequest', chitRequestSchema);