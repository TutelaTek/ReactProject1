// models the database data
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String },
    price: {type: Number}
    //imageId: {},

});
//collection name
const model = mongoose.model('MenuItems', menuSchema);

module.exports = model