const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cpf: {
        type: String
    },
    birth_date: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('customer', CustomerSchema);