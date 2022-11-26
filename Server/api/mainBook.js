const express = require('express')
const multer =require('multer')
const router = express.Router()
const mainBook = require('../Mainbooks')
const mysql = require ('mysql2')
const path = require('path')

const db= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'bookdb'
})


const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//function for upload image
const upload = multer({
    storage: storage
})

db.connect((err) => {
    if(err) {
        throw err
    }
    console.log('connected to db6')
})



//Step 1: get all the books using the get method of the http
router.get('/', (req, res) => {
    //step 1 select all elements in the table
        db.query('SELECT * FROM book2', (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else
            {
                res.json(result) 
            }
           
        })
})

router.post('/',upload.single('program'), (req, res)=> {
    // to upload data into the server you have to state the data 
    const newBooks = {
        title: req.body.title,
        Author: req.body.Author,
        image: `http://localhost:4001/books/${req.file.filename}`
   }
   
   db.query("INSERT INTO book2 set ? ",[newBooks], (err, result) => {
       if(err)
       {
           res.status(400).json(err)
       }else
       {
           res.status(200).json(result);
       }
   })
   
})



//api for documentary books
router.post('/documentary',upload.single('docu'), (req, res)=> {
    // to upload data into the server you have to state the data 
    const newBooks = {
        title: req.body.title,
        Author: req.body.Author,
        image: `http://localhost:4001/books/${req.file.filename}`
   }
   
   db.query("INSERT INTO documentary set ? ",[newBooks], (err, result) => {
       if(err)
       {
           res.status(400).json(err)
       }else
       {
           res.status(200).json(result);
       }
   })
   
})

router.get('/documentary', (req, res) => {
    //step 1 select all elements in the table
        db.query('SELECT * FROM documentary ', (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else
            {
                res.json(result) 
            }
           
        })
})



// api for kids books
router.post('/kids',upload.single('kid'), (req, res)=> {
    // to upload data into the server you have to state the data 
    const newBooks = {
        title: req.body.title,
        Author: req.body.Author,
        image: `http://localhost:4001/books/${req.file.filename}`
   }
   
   db.query("INSERT INTO kids set ? ",[newBooks], (err, result) => {
       if(err)
       {
           res.status(400).json(err)
       }else
       {
           res.status(200).json(result);
       }
   })
   
})

router.get('/kids', (req, res) => {
    //step 1 select all elements in the table
        db.query('SELECT * FROM kids ', (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else
            {
                res.json(result) 
            }
           
        })
})

///api for economics books
router.post('/economics',upload.single('eco'), (req, res)=> {
    // to upload data into the server you have to state the data 
    const newBooks = {
        title: req.body.title,
        Author: req.body.Author,
        image: `http://localhost:4001/books/${req.file.filename}`
   }
   
   db.query("INSERT INTO economic set ? ",[newBooks], (err, result) => {
       if(err)
       {
           res.status(400).json(err)
       }else
       {
           res.status(200).json(result);
       }
   })
   
})

router.get('/economics', (req, res) => {
    //step 1 select all elements in the table
        db.query('SELECT * FROM economic', (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else
            {
                res.json(result) 
            }
           
        })
})
   
   module.exports = router
