const express = require('express')
const mysql = require('mysql2')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcrypt')
const saltRounds = 10;

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

// using bcrypt to hash the password to save the password in an hashed mode
router.post('/',  (req, res)=> {
    // to upload the data of the user 
        const username = req.body.username
        const password= req.body.password
    // to check if the user details are present in the MYSQL database 
    db.query("SELECT * FROM login WHERE email = ? ",
    username, (err, result) => {
            if(err) {
                console.log(err)
            }
            if(result.length > 0) {
                bcrypt.compare(password, result[0].password, (err, response) => {
                    if(response){
                        req.session.user = result
                        console.log(req.session.user)
                        res.send(result)
                    }else
                    {
                        res.send({message: 'Wrong user Combination'})
                    }
                })
            } else {
                res.send({message: 'User does not exist !!'})
            }
    })
    
})

module.exports = router