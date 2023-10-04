'use strict';
require('dotenv').config()

const dev = {
   db:{ host: process.env.HOST || 'localhost',
    port: process.env.DATABASE_PORT || 27017,
    name: process.env.NANE || 'dev'}
}

const pro = {
    db:{host: process.env.PRO_HOST || 'localhost',
    port: process.env.PRO_DATABASE_PORT || 27017,
    name: process.env.PRO_NANE || 'product'}
}
 
const config  = {dev,pro}

const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]