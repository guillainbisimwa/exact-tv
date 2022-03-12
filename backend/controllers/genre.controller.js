const Genre = require('../models/genre.model');

// Fetch All Genres
exports.findAll = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Genre.find()
        .then(genres => res.json(genres))
        .catch(err => res.status(400).json({error_message:err}));
};

// Fetch a Genre by id
exports.findOne = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Genre.findById(req.params.id)
        .then(genre => res.json(genre))
        .catch(err => res.status(400).json({error_message:err}));
};


// Post Genre
exports.create = async (req, res) => {
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
};


// Update a Genre
exports.update = async (req, res) => {
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
};