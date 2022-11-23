const express = require('express')
const mysql = require("mysql2")
const router = express.Router()
const path = require('path')


const db= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'bookdb'
})

db.connect((err) => {
    if(err) {
        throw err
    }
    console.log('connected to db 2')
})

router.get('/', (req, res) => {
    //step 1 select all elements in the table
        db.query('SELECT * FROM login', (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else
            {
                res.json(result) 
            }
           
        })
      
    })


    router.post('/',  (req, res)=> {
        // to upload data into the server you have to state the data 
            const username = req.body.username
            const password= req.body.password
    
        db.query("INSERT INTO login (email, password) VALUES (?, ?) ",[username, password], (err, result) => {
         console.log(err)
        })
        
    })

    router.get('/', (req, res) => {
        
    })
module.exports = router