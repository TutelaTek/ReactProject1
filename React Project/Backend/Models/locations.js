// models the database data
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String},
    street: { type: String },
    address: { type: String},
    hours: {type: String},
    phone: {type: String}
    //imageId: {},

});
//collection name
const model = mongoose.model('location', locationSchema);

module.exports = model