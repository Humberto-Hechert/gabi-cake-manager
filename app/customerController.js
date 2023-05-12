const connection = require("./dbConnect")

class customerController {
    
    home(req, res){
        res.render("homeView")
    }

    sendCustomer(req, res){
        const {nome, telefone, sabor, quantidade, preco} = req.body
        const cliente = {nome, telefone, sabor, quantidade, preco}

        connection.query('INSERT INTO customers SET ?', cliente, (err, results) => {
            if (err){
                throw err
            }
            console.log("Cliente cadastrado com sucesso!")
            res.render("customerRegisteredView")
        })
    }

    getCustomers(req, res){
      connection.query('SELECT * FROM customers', (err, results) => {
        if (err){
          throw err
        }
        res.render("getCustomersView", {data : results})
      })
    }
}

module.exports = customerController