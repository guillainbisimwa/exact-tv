const Film = require('../models/film.model');

// Fetch All Films
exports.findAll = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Film.find()
        .then(film => res.json(film))
        .catch(err => res.status(400).json({error_message:err}));
};

// Fetch a Film by id
exports.findOne = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Film.findById(req.params.id)
        .then(actor => res.json(actor))
        .catch(err => res.status(400).json({error_message:err}));
};


// Post Film
exports.create = async (req, res) => {
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
};


// Update a Film
exports.update = async (req, res) => {
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
        .then(() => res.send('Film Updated successfully!'))
        .catch(err => res.status(400).send({error_message: err}));
};

