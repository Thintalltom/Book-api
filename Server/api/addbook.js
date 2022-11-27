const express = require('express')
const multer =require('multer')
const router = express.Router()
const addbook = require('../addbook')
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
    console.log('connected to db7')
})



//Step 1: get all the books using the get method of the http
router.get('/', (req, res) => {
    //step 1 select all elements in the table
        db.query('SELECT * FROM addbook', (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else
            {
                res.json(result) 
            }
           
        })
})

router.post('/',upload.single('image'), (req, res)=> {
    // to upload data into the server you have to state the data 
 
       const title = req.body.title
       const Author = req.body.author
       const image = req.file
   
   db.query("INSERT INTO addbook set ? ",[Author, title, image], (err, result) => {
       if(err)
       {
           res.status(400).json(err)
       }else
       {
           res.status(200).json(result);
       }
   })
   
})


module.exports = router