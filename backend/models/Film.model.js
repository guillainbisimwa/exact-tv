const mongoose = require('mongoose');

const Film = mongoose.Schema({
    title: String,
    subtitle: String,
    dateAnouncement: Date,
    dateRelease: Date,
    categoryId: String, // #
    actorId: String,
    actorsId: [],
    genreId: String, // #
    userId: String, // #
    productionHouseId: String,
    productionHousesId: [],
    urlTrailer: String,
    urlFullFilm: String,
    price: Number,
    discount: Number,
    cover: String,
    screenShots: [],
    details: String,
    status: Number, default:0,
    stars: Number,
    competitions: [], // TODO {name, date, town, price}
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('films', Film);
