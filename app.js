const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { port } = require('./config')
const cors = require('cors')
const router = require('./routes/api')
require('./db/mongoose')


app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})