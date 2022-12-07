const express = require('express')
const router = express.Router()
const comment = require('../Comment')
const path = require('path')
const db= require('../config/database')
const { Router } = require('express')

db.connect((err) => {
    if(err) {
        throw err
    }
    console.log('connected to db10')
})

router.get('/', (req, res) => {
    //step 1 select all elements in the table
        db.query('SELECT * FROM comment', (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else
            {
                res.json(result) 
            }
           
        })
})

router.post('/', (req, res) => {
    const data = {
        header: req.body.header,
        title: req.body.title
    }
    db.query("INSERT INTO comment set ? ", [data], (err, result) => {
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