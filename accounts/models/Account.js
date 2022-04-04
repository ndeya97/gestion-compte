const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Compte model
const accountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    statut: {
        type: String,
        required: false
    }
});


const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
