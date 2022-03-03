const router = require('express').Router();
const Actor = require('../models/actor.model');
const Category = require('../models/category.model');
const Film = require('../models/film.model');
const Genre = require('../models/genre.model');
const ProductionHouse = require('../models/productionHouse.model');
const Profile = require('../models/profile.model');

var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('API works perfectly ...');
});

module.exports = router;
