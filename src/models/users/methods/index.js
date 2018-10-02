// const Promise = require('bluebird');

module.exports = (Users) => {
  /**
   * @description List all users.
   */
  Users.listAllUsers = () => {
    return Users.find({});
  };
  

  Users.searchUser = () => {
    return Users.find({})
  };
  
  // Users.searchUser = (lastName) => {
  //   return Users.find({lastName})
  // };
  /**
   * @param {Object} userData
   * @description create users.
   */
  Users.createUser = (userData) => {
    return Users.create(userData);
  };

};