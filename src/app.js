const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const models = require('./models/index');
const { usersRoutes} = require('./routes/index');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({limit: '5mb', extended: false}));
app.use(bodyParser.json({limit: '5mb'}));

app.use('/users', usersRoutes);

module.exports = app;