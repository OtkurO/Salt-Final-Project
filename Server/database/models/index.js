require('dotenv').config();
const mongoose = require('mongoose');
const Menu = require('./menu');
const Recipe = require('./recipe');
const Restaurant = require('./restaurant');

const url = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const options = {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  keepAlive: 1,
  connectTimeoutMS: 30000,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 3000,
  dbName: dbName,
};

const connectDb = () =>
  mongoose.connect(url, options, err => {
    if (!err) return console.log('Mongoose has connected to the database.');
    return err;
  });

const models = { Menu, Recipe, Restaurant };

module.exports = {
  models,
  connectDb,
};
