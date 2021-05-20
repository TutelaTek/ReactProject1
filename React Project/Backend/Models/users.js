//models the database data
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String }

});
//collection name
const model = mongoose.model('user', userSchema);

module.exports = model