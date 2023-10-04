const express = require('express')
const app = express()
const morgan = require('morgan')
const {default: helmet} = require('helmet');
const compression = require('compression');

//init midlleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())


//init database
require('./dbs/init.mongodb')
//init routes
app.use('',require('./routes'))

//handle error

module.exports = app