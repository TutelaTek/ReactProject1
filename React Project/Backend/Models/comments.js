//models the database data
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    fname: { type: String},
    lname: { type: String },
    email: { type: String},
    phone: {type: String},
    message: {type: String}
    //imageId: {},

});
//collection name
const model = mongoose.model('comment', commentSchema);

module.exports = model