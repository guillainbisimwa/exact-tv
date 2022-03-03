const mongoose = require('mongoose');

const Actor = mongoose.Schema({
    name: String,
    lastName: String,
    nickName: String,
    // password: String,
    country: String,
    sex: String,
    dateBirth: Date,
    biography: String,
    profilePicture: String,
    screenShots: [],
    status: Number, default:0,
    stars: Number,
    contact: [], // # TODO {email, phone, twitter, FaceBook, web, Youtube}
    competitions: [], // TODO {name, date, town, price}
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('actors', Actor);
