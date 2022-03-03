const router = require('express').Router();

var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('API works perfectly ...');
});

module.exports = router;
