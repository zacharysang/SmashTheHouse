var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    timeStamp: String,
    sender: String,
    body: String,

});

module.exports.Message = mongoose.model("Message",messageSchema);