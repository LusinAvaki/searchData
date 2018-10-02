// const Promise = require('bluebird');

module.exports = (Users) => {
  /**
   * @description List all users.
   */
  Users.listAllUsers = () => {
    return Users.find({});
  };
  
  /**
   * @param {string} firstName
   * @description get users.
   */
  Users.getUserByFirstName = (firstName) => {
    return Users.find({firstName})
  };
  
  Users.getUserByLastName = (lastName) => {
    return Users.find({lastName})
  };
  /**
   * @param {Object} userData
   * @description create users.
   */
  Users.createUser = (userData) => {
    return Users.create(userData);
  };

};