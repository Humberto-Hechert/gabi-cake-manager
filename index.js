const express = require('express')
const bodyParser = require('body-parser')
const CustomerController = require('./app/customerController')
const connection = require('./app/dbConnect')
require('dotenv/config')

const app = express()
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(express.static('public'))

const port = process.env.PORT || 3030

const customerController = new CustomerController()

app.get('/home', customerController.home)

app.post('/sendCustomer', customerController.sendCustomer)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})