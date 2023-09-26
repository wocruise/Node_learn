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

//init routes
app.get('/',(req,res,next) => {
    return res.status(200).json({
        message: 'Invalid'
    })
})

//handle error

module.exports = app