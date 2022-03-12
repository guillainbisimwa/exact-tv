const Actor = require('../models/Actor.model');

// get all actors
exports.findAll = async(req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        const actors = await Actor.find();
        return res.status(200).json(actors);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}