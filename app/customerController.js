//const Connection = require("mysql2/typings/mysql/lib/Connection")
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

    editCustomer(req, res){
      const id = req.params.id
      const { nome, telefone, sabor, quantidade, preco } = req.body
      const sql = 'UPDATE customers SET nome = ?, telefone = ?, sabor = ?, quantidade = ?, preco = ? WHERE id = ?'

      connection.query(sql, 
        [nome, telefone, sabor, quantidade, preco], 
        (err, results) => {
          if(err){
            console.error(err)
            res.sendStatus(500)
          } else {
            res.sendStatus(200)
          }
        })
    }

    deleteCustomer(req, res){
      const id = req.params.id
      const sql = 'DELETE from customers WHERE id = ?'

      connection.query(sql, [id], (err, results) => {
        if(err){
          console.error(err)
          res.sendStatus(500)
        } else {
          res.sendStatus(200)
        }
      })
    }

    
}

module.exports = customerController