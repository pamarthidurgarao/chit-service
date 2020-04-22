const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chitSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    tenure: { type: Number, required: true },
    createDate: { type: Date, required: true },
    chitDate: { type: Date, required: true },
    chitType: { type: String, required: true },
    membersSize: { type: Number, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Chit', chitSchema);