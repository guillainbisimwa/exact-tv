const mongoose = require('mongoose');

const Film = mongoose.Schema({
    title : String,
    subtitle : String,
    dateAnouncement: Date,
    dateRelease: Date,
    categoryId: String, // # 
    actorId: String, // # TODO
    actorsId: [], // # TODO
    genreId: String, // # TODO
    producerId: String, // # TODO
    productionHouseId: String,
    productionHousesId: [],
    urlTrailer : String,
    urlFullFilm : String,
    price: Number,
    discount: Number,
    cover: String,
    screenShots: [],
    details : String,
    status : Number, default: 0,
    stars: Number,
    // competition: String, TODO
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('films', Film);
