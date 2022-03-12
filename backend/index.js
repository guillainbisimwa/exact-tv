const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
require('./db/db')

const PORT = process.env.PORT || 5000

// Make sure you place body-parser before your CRUD handlers!
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true} ));

app.use(cors())


app.use('/test', require('./routes/api'));
app.use('/actor', require('./routes/actor.route'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))