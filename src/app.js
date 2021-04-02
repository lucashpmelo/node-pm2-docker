const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

//Rotas
const indexRoute = require('../src/routes/index-route')

app.use('/', indexRoute)

app.use(helmet())
app.use(cors())
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

module.exports = app
