const express = require('express')
const bodyParser = require('body-parser')
const CustomerController = require('./src/controllers/customerController')
require('dotenv/config')

const app = express()
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(express.static('public'))

const port = process.env.PORT || 3030

const customerController = new CustomerController()

app.get('/', customerController.teste)

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/src/public/views/home.html')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})