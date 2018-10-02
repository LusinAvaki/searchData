const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setModelMethods = require('./methods/index');

const UsersSchema = new Schema({
    firstName: String,
    lastName: String,
  });


const Users = mongoose.model('Users', UsersSchema);

setModelMethods(Users);

module.exports = Users;