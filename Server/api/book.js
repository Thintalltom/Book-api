const express = require('express')
const router = express.Router()
// next step you import the books array from the folder it is
let book = require('../book')
// call on multer 
const multer = require ('multer')
const path = require('path')

// storage destination
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

//Step 1: get all the books using the get method of the http
router.get('/',(req, res) => {
    res.json(book)
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
    const newBooks = req.body
    const img = req.file
    book.push({newBooks, img})
    res.json({message: 'movies has been added', book})
    console.log(req.file)
})

// step4: editing a book using the put method
router.put('/:id', (req, res) => {
    const found = book.some(book =>  book.id === parseInt(req.params.id))

    if(found) {
        const updateBook = req.body 
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