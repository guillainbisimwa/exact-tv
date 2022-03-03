const mongoose = require('mongoose');

const Category = mongoose.Schema({
    label : String,
    details : String,
    status : Number, default: 0,
    value: Number,
    picture: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('categories', Category);
