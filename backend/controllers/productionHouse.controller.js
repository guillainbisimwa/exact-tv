const ProductionHouse = require('../models/productionHouse.model');

// Fetch All ProductionHouse
exports.findAll = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await ProductionHouse.find()
        .then(prods => res.json(prods))
        .catch(err => res.status(400).json({error_message:err}));
};

// Fetch a ProductionHouse by id
exports.findOne = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await ProductionHouse.findById(req.params.id)
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json({error_message:err}));
};


// Post Production House
exports.create = async (req, res) => {
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
};

// Update a Production House
exports.update = async (req, res) => {
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
};