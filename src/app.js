const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const database = require('./configs/database')
database.connect()

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))

const index = require('./routes/index')
const admAccount = require('./routes/admRoutes')
const schools = require('./routes/schoolRoutes')
const userAccount = require('./routes/userRoutes')
const review = require('./routes/reviewRoutes')

app.use('/', index)
app.use('/accounts/adm', admAccount)
app.use('/accounts', userAccount)
app.use('/schools', schools)
app.use('/review', review)

  

module.exports = app