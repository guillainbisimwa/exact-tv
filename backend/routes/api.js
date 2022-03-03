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

// Fetch All Actors
router.get('/actors', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Actor.find()
        .then(actors => res.json(actors))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch an Actor by id
router.get('/actor/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Actor.findById(req.params.id)
        .then(actor => res.json(actor))
        .catch(err => res.status(400).json({error_message:err}));
});


module.exports = router;
