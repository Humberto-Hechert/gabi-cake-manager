const express = require('express')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})