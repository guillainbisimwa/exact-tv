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


// Post Actor
router.post('/actor', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        name,
        lastName,
        nickName,
        country,
        sex,
        dateBirth,
        biography,
        profilePicture,
        screenShots,
        status,
        stars,
        contact,
        competitions
    } = req.body;
    newActor = new Actor(req.body);

    await newActor.save()
        .then(actorSaved => res.json(actorSaved))
        .catch(err => res.status(400).json({error_message:err}));
});

// Update an Actor
router.put('/actor/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        name,
        lastName,
        nickName,
        country,
        sex,
        dateBirth,
        biography,
        profilePicture,
        screenShots,
        status,
        stars,
        contact,
        competitions
    } = req.body;

    Actor.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Actor Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});

// Fetch All Categories
router.get('/categories', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Category.find()
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch a Category by id
router.get('/categorie/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Category.findById(req.params.id)
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Category
router.post('/category', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        label,
        details,
        status,
        value,
        picture,
        stars
    } = req.body;
    newCat = new Category(req.body);

    await newCat.save()
        .then(actorSaved => res.json(actorSaved))
        .catch(err => res.status(400).json({error_message:err}));
});


// Update a Category
router.put('/category/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        label,
        details,
        status,
        value,
        picture,
        stars
    } = req.body;

    Category.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Category Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});

// Fetch All Films
router.get('/films', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Film.find()
        .then(film => res.json(film))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch a Film by id
router.get('/film/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Film.findById(req.params.id)
        .then(actor => res.json(actor))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Film
router.post('/film', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        title,
        subtitle,
        dateAnouncement,
        dateRelease,
        categoryId,
        actorId,
        actorsId,
        genreId,
        userId,
        productionHouseId,
        productionHousesId,
        urlTrailer,
        urlFullFilm,
        price,
        discount,
        cover,
        screenShots,
        details,
        status,
        stars,
        competitions
    } = req.body;
    newFilm = new Film(req.body);

    await newFilm.save()
        .then(actorSaved => res.json(actorSaved))
        .catch(err => res.status(400).json({error_message:err}));
});


// Update a Film
router.put('/film/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        title,
        subtitle,
        dateAnouncement,
        dateRelease,
        categoryId,
        actorId,
        actorsId,
        genreId,
        userId,
        productionHouseId,
        productionHousesId,
        urlTrailer,
        urlFullFilm,
        price,
        discount,
        cover,
        screenShots,
        details,
        status,
        stars,
        competitions
    } = req.body;

    Film.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Film Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});

// Fetch All Genres
router.get('/genres', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Genre.find()
        .then(genres => res.json(genres))
        .catch(err => res.status(400).json({error_message:err}));
});



module.exports = router;
