const mongoose = require('mongoose');

const Profile = mongoose.Schema({
    actorId : String, // #
    password: String,
    name: String,
    token : String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('profiles', Profile);
