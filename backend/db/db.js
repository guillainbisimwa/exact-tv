const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_PATH, () => {
    console.log('Exact-tv mongoDB connected successfuly');
});

mongoose.Promise = global.Promise;
