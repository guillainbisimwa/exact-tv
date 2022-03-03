const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
require('./db/db')

const PORT = process.env.PORT || 5000

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));

app.use(cors())


app.use('/', require('./routes/api'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))