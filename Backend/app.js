require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connect = require('./db/db');

connect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;