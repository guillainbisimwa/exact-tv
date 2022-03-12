const router = require('express').Router();
const Film = require('../models/film.model');
const Genre = require('../models/genre.model');
const ProductionHouse = require('../models/productionHouse.model');

router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('API works perfectly ...');
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
        .then(saveItem => res.json(saveItem))
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

// Fetch a Genre by id
router.get('/genre/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Genre.findById(req.params.id)
        .then(genre => res.json(genre))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Genre
router.post('/genre', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        label,
        details,
        status,
        value,
        picture,
        stars,
    } = req.body;
    newGenre = new Genre(req.body);

    await newGenre.save()
        .then(saveItem => res.json(saveItem))
        .catch(err => res.status(400).json({error_message:err}));
});


// Update a Genre
router.put('/genre/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        label,
        details,
        status,
        value,
        picture,
        stars,
    } = req.body;

    Genre.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Genre Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});

// Fetch All ProductionHouse
router.get('/prods', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await ProductionHouse.find()
        .then(prods => res.json(prods))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch a ProductionHouse by id
router.get('/prod/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await ProductionHouse.findById(req.params.id)
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Production House
router.post('/prod', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        name,
        ownerId,
        founderId,
        coFounders,
        country,
        city,
        address,
        cover,
        contact,
        details,
        status,
        stars,
    } = req.body;
    newProd = new ProductionHouse(req.body);

    await newProd.save()
        .then(saveItem => res.json(saveItem))
        .catch(err => res.status(400).json({error_message:err}));
});

// Update a Production House
router.put('/prod/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        name,
        ownerId,
        founderId,
        coFounders,
        country,
        city,
        address,
        cover,
        contact,
        details,
        status,
        stars,
    } = req.body;

    ProductionHouse.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Production ouse Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});



module.exports = router;
