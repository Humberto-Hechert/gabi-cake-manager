const connection = require("./dbConnect")

class customerController {
    
    home(req, res){
        res.sendFile(__dirname + '/interface/home.html')
    }

    sendCustomer(req, res){
        const {nome, telefone, sabor, quantidade, preco} = req.body
        const cliente = {nome, telefone, sabor, quantidade, preco}

        connection.query('INSERT INTO customers SET ?', cliente, (err, results) => {
            if (err){
                throw err
            }
            console.log("Cliente cadastrado com sucesso!")
            res.sendFile(__dirname + '/interface/customerRegistered.html')
        })
        
    }
}

module.exports = customerController