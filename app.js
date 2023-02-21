const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { port } = require('./config')
const router = require('./routes/api')
const cors = require('cors')
require('./db/mongoose')


app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})