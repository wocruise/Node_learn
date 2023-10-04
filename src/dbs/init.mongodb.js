'use strict';
const mongoose = require('mongoose');
const {db:{port, name, host}} = require('../configs/sandbox')

// dev
class Database {
    constructor() {
        this.connect();
        this.countConnections();
    }

    //connect
    connect( type = 'mongodb') {
      if(1 === 1){
        mongoose.set('debug', true);
        mongoose.set('debug', {color: true});

      }
      const connectStr = `${type}://${host}:${port}/${name}`
        mongoose.connect(connectStr,{
          maxPoolSize: 50
        }).then(_ => console.log('Connect database Success:::',connectStr))
        .catch(err => console.log(`Error Connecting to Mongoose!!!`))

    }

    static getInstance() {
      if(!Database.instance){
        Database.instance = new Database();
      }
      return Database.instance;
    }

    countConnections() {
      const countConnection = mongoose.connections.length
      console.log(`Number of connections: ${countConnection}`)
    }
}


const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb