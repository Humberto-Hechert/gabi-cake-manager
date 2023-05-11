const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'H@181098',
    database: 'gabi_cake_manager'
})

connection.connect((err) => {
    if (err){
        throw err
    }
    console.log("Conexão com o banco de dados realizada")
})

module.exports = connection