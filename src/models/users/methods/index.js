// const Promise = require('bluebird');

module.exports = (Users) => {
  /**
   * @description List all users.
   */
  Users.listAllUsers = () => {
    return Users.find({});
  };
  

  Users.searchUser = (searchQuery) => {
    return Users.findOne({searchQuery})
  };
  

  /**
   * @param {Object} userData
   * @description create users.
   */
  Users.createUser = (userData) => {
    return Users.create(userData);
  };

};