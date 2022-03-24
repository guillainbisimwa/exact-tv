const mongoose = require('mongoose');

const Genre = mongoose.Schema({
    label: String,
    details: String,
    status: Number, default: 0,
    value: Number,
    picture: String,
    stars: Number,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('genres', Genre);
