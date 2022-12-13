const mysql = require ('mysql2')

const database= mysql.createConnection({
    host:'us-cdbr-east-06.cleardb.net',
    user: 'bbe909b5d36a2b',
    password: '16542f6a',
    database: 'heroku_f46e79aefd04daf'
})

module.exports = database