const express = require('express')
const app  = express()
const cors = require('cors')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/books', require('./api/book'))
app.use('/genres', require('./api/Genre'))
app.listen('4000', (req, res) => {
    console.log('Now on port 4000')
})