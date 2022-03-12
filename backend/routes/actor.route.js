const express =  require('express');
const router = express.Router();
const { findAll } = require('../controllers/actor.controller');

router.get('/', findAll );

module.exports = router;