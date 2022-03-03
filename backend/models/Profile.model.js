const mongoose = require('mongoose');

const Actor = mongoose.Schema({
    actorId : String, // #
    password: String,
    token : String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('actors', Actor);
