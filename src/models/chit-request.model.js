const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chitRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chit: { type: Schema.Types.ObjectId, ref: 'Chit' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: Boolean, required: false }
});
module.exports = mongoose.model('ChitRequest', chitRequestSchema);