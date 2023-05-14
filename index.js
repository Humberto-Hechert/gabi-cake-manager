const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const ejs = require('ejs')
const CustomerController = require('./app/customerController')
const connection = require('./app/dbConnect')
require('dotenv/config')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))

const port = process.env.PORT || 3030

const customerController = new CustomerController()

app.get('/home', customerController.home)

app.post('/sendCustomer', customerController.sendCustomer)

app.get('/getCustomers', customerController.getCustomers)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})