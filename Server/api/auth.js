const express = require('express')
const mysql = require('mysql2')
const router = express.Router()
const path = require('path')

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'bookdb'
})

db.connect((err) => {
    try {
        console.log('connected to db3')
    } catch (error) {
        throw error
    }
})

router.post('/',  (req, res)=> {
    // to upload the data of the user 
        const username = req.body.username
        const password= req.body.password
    // to check if the user details are present in the MYSQL database 
    db.query("SELECT * FROM login WHERE email = ? AND password = ?",[username, password], (err, result) => {
        if(err) {
            console.log(err)
        }
            if(result.length > 0) {
                res.send(result)
            } else {
                res.send({message: 'wrong user combination'})
            }
    })
    
})

module.exports = router