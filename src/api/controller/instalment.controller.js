const mongoose = require('mongoose');
const Instalment = require('../../models/instalment.model')
const Chit = require('../../models/chit.model')
const { update: updateChit, get: getChit } = require('./chit.controller');


module.exports = {
    create: async(reqInstalment) => {
        const instalment = new Instalment(reqInstalment);
        instalment._id = new mongoose.Types.ObjectId();
        try {
            const newInstalmentEntry = await instalment.save()
            const chit = await getChit(newInstalmentEntry.chitId)
            if (chit.instalment)
                chit.instalment.push(newInstalmentEntry.id)
            else {
                chit.instalment = [];
                chit.instalment.push(newInstalmentEntry.id)
            }
            chit.update();
            return newInstalmentEntry;
        } catch (error) {
            throw error
        }
    },
    update: async(reqInstalment) => {
        const instalment = new Instalment(reqInstalment);
        try {
            const updateInstalmentEntry = await instalment.update()
            return updateInstalmentEntry;
        } catch (error) {
            throw error
        }
    },
    get: async(id) => {
        return Instalment.find(id);
    }
}