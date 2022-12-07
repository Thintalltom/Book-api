const express = require('express')
const app  = express()
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const session = require ('express-session')


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}))

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    key: 'userId',
    secret: 'Nigerian',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/books', express.static('./upload/images'))
app.use('/genres',express.static('./upload/images') )
app.use('/addbook',express.static('./upload/images') )
app.use('/books', require('./api/book'))
app.use('/genres', require('./api/Genre'))
app.use('/login', require('./api/login'))
app.use('/auth', require('./api/auth') )
app.use('/maingenres', require('./api/maingenres'))
app.use('/mainbooks', require('./api/mainBook'))
app.use('/addbook', require('./api/addbook'))
app.use('/documentary', require('./api/documentary'))
app.use('/kidsbook', require('./api/kidsbook'))
app.use('/economic', require('./api/economic'))
app.use('/comment', require('./api/comment'))
app.listen('4001', (req, res) => {
    console.log('Now on port 4001')
})