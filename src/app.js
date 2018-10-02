const express = require('express');
const morgan = require('morgan');

const models = require('./models/index');
const { usersRoutes} = require('./routes/index');

const app = express();

app.use(morgan('dev'));

app.use('/users', usersRoutes);
app.use('/', usersRoutes);

module.exports = app;