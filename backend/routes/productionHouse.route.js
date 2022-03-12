const express =  require('express');
const router = express.Router();
const { findAll, findOne, create, update } = require('../controllers/productionHouse.controller');

router.post('/', create)
router.get('/', findAll );
router.get('/:id', findOne );
router.put('/:id', update)

module.exports = router;