const express = require('express')
const router = express.Router()
let maingenres = require('../Maingenres')
// call on multer 
const multer = require ('multer')
const path = require('path')
const db= require('../config/database')

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
    console.log('connected to db5')
})

//Step 1: get all the books using the get method of the http
router.get('/', (req, res) => {
    //step 1 select all elements in the table
        db.query('SELECT * FROM genre2', (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else
            {
                res.json(result) 
            }
           
        })
})


router.post('/',upload.single('genres'), (req, res)=> {
 // to upload data into the server you have to state the data 
 const newGenres = {
    Name: req.body.Name,
    image: `http://localhost:4001/books/${req.file.filename}`
}

db.query("INSERT INTO genre2 set ? ",[newGenres], (err, result) => {
    if(err)
    {
        res.status(400).json(err)
    }else
    {
        res.status(200).json(result);
    }
})

})

// function to get details of a particular genres
router.get('/:id', (req, res) => {
    const data = req.params.id

    db.query('SELECT * FROM genre2 WHERE id = ?', [data], (err, result) => {
        if(err){
            res.status(400).json(err)
        }else 
        {
            res.status(200).json({
                result, 
                message: 'use gotten succesffuly'
            })
        }
    })
})

module.exports = router