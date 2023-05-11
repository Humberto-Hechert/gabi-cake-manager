const mysql2 = require('mysql2')
require('dotenv/config')

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
})

connection.connect((err) => {
    if (err){
        throw err
    }
    console.log("Conexão com o banco de dados realizada")
})

module.exports = connection