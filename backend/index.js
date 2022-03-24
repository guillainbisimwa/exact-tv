const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
require('./db/db')

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true} ));

app.use(cors());

app.use('/test', require('./routes/api'));
app.use('/actor', require('./routes/actor.route'));
app.use('/category', require('./routes/category.route'));
app.use('/film', require('./routes/film.route'));
app.use('/genre', require('./routes/genre.route'));
app.use('/production-house', require('./routes/productionHouse.route'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))