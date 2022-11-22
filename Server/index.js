const express = require('express')
const app  = express()
const cors = require('cors')
const bodyParser = require("body-parser");


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/books', express.static('./upload/images'))
app.use('/genres',express.static('./upload/images') )
app.use('/books', require('./api/book'))
app.use('/genres', require('./api/Genre'))
app.listen('4001', (req, res) => {
    console.log('Now on port 4000')
})