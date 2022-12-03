const express = require('express')
const router = express.Router()
// next step you import the books array from the folder it is
let book = require('../book')
// call on multer 
const multer = require ('multer')
const path = require('path')
const mysql = require('mysql2')
const db= require('../config/database')


db.connect((err) => {
    if(err) {
        throw err
    }
    console.log('connected to db')
})

// storage destination
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

//Step 1: get all the books using the get method of the http
router.get('/', (req, res) => {
//step 1 select all elements in the table
    db.query('SELECT * FROM book', (err, result) => {
        if(err) {
            res.status(400).json(err)
        } else
        {
            res.json(result) 
        }
       
    })
  
})

//Step 2: get books based on id using the get method
// Method used use the javascript filter method to check if the book id and the request id is the same 
// else send an error message
router.get('/:id', (req, res)=> {
    const found = book.some((book) =>  book.id ===  parseInt(req.params.id))
    if(found){
        res.json(book.filter((book) => book.id ===  parseInt(req.params.id)))
    }else 
    {
        res.sendStatus(400)
    }
})


//Step 3: add new books using the post method of http
router.post('/', upload.single('profile'), (req, res)=> {
    // to upload data into the server you have to state the data 
    const newBooks = {
        title: req.body.title,
        Author: req.body.Author,
        image: `http://localhost:4001/books/${req.file.filename}`
    }
   
    db.query("INSERT INTO book set ? ",[newBooks], (err, result) => {
        if(err)
        {
            res.status(400).json(err)
        }else
        {
            res.status(200).json(result);
        }
    })
    
})

// step4: editing a book using the put method
router.put('/:id', (req, res) => {
    const found = book.some(book =>  book.id === parseInt(req.params.id))

    if(found) {
        const updateBook = {
            id: parseInt(req.body.id),
            title: req.body.title,
            Author: req.body.Author,
            img: req.file}
        book.map( book => {
            if(book.id ===  parseInt(req.params.id)){
                book.title = updateBook.title ? updateBook.title: book.title
                book.Author = updateBook.Author ? updateBook.Author: book.Author
                res.json({
                    message: 'book updated',
                    book
                })
            }
        })
    }
})

// STEP 5: DELETE ALL BOOKS using the http delete method
router.delete('/:id', (req, res) => {
    const found = book.some(book =>  book.id === parseInt(req.params.id))

    if(found) {
        book = book.filter(book => book.id  !==  parseInt(req.params.id))
        res.json({
            message: 'Book deleted successfully',
            book
        })
    }else {
            res.sendStatus(403)
        }
    })

module.exports = router