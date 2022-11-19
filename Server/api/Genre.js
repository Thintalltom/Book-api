const express = require('express')
const router = express.Router()
const genres = require('../Genre')


router.get('/',  (req, res) => {
    res.json(genres)
})

router.get('/:id', (req, res) => {
    const found = genres.some((genres) =>  genres.id === parseInt(req.params.id))
    if(found){
        res.json(genres.filter((genres) => genres.id === parseInt(req.params.id)))
    }else 
    {
        res.sendStatus(400)
    }
})

router.post('/', (req, res) => {
    const newGenres = req.body 
    genres.push(newGenres)
    res.json({message: 'Genres has been added successfully', genres})
})

router.put('/:id', (req, res) => {
    const found = genres.some((genres) =>  genres.id === parseInt(req.params.id))
    if(found){
        const updateGenres = req.body
        genres.map(genres => {
            if(genres.id === parseInt(req.params.id)) {
                genres.id = updateGenres.id ? updateGenres.id: genres.id
                genres.name = updateGenres.name ? updateGenres.name: genres.name
                res.json({
                    message: 'Gneres has been updated',
                    genres
                }) 
            }
        })
    }
})

router.delete('/:id', (req, res) => {
    const found = genres.some((genres) =>  genres.id === parseInt(req.params.id))
    if(found) {
        genres = genres.filter((genres) => genres.id !== parseInt(req.params.id))
        res.json({
            message: 'Genres has been successful removed',
            genres
        })
    }else {
        res.sendStatus(403)
    }
})
module.exports = router