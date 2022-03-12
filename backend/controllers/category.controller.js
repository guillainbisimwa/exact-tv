const Category = require('../models/category.model');

// Fetch All Categories
exports.findAll = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Category.find()
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json({error_message:err}));
};

// Fetch a Category by id
exports.findOne = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Category.findById(req.params.id)
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json({error_message:err}));
};


// Post Category
exports.create = async (req, res) => {
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
        .then(saveItem => res.json(saveItem))
        .catch(err => res.status(400).json({error_message:err}));
};


// Update a Category
exports.update = async (req, res) => {
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
        .then(() => res.send('Category Updated successfully!'))
        .catch(err => res.status(400).send({error_message: err}));
};