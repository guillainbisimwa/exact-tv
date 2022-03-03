const mongoose = require('mongoose');

const ProductionHouse = mongoose.Schema({
    name : String,
    ownerId: String, // # Actor TODO
    founderId: String, // # Actor TODO
    coFounders: [], // # users
    country: String,
    city: String,
    address : String,
    cover : String,
    screenShots: [],
    contact: [], // # TODO {email, phone, twitter, FaceBook, web, Youtube}
    details : String,
    status : Number, default: 0,
    stars: Number,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('productionHouses', ProductionHouse);
