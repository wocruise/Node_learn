const app = require('./src/app');
const path = require('path')
require('dotenv').config()

const PORT = process.env.APP_PORT || 3002
const server = app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

process.on('SIGINT', () =>{
    server.close(() => {
        console.log('Exit server express');
    });
})