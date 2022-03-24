const express =  require('express');
const router = express.Router();
const { findAll, findOne, create, update, signin } = require('../controllers/actor.controller');

router.post('/', create)
router.get('/', findAll );
router.get('/:id', findOne );
router.put('/:id', update)
router.post('/signin', signin);


module.exports = router;