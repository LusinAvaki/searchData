const UsersModel = require('../../models/index').UsersModel;


function listUsers(req, res, next) {
  UsersModel.listAllUsers()
    .then((users) => res.json(users))
    .catch(next)
}

function searchUsers(req, res, next) {
  const {firstName, lastName} = req.query;
  
  const searchQuery = {};
  
  if(firstName){
    searchQuery.firstName = firstName
  }
  if (lastName){
    searchQuery.lastName = lastName
  }
  UsersModel.searchUser(searchQuery)
    .then((user) => res.json(user))
    .catch(next)
}

/**
 * @param req
 * @param res
 * @param next
 */
function addUser(req, res, next) {
  const {firstName, lastName} = req.body;
  
  const createData = {firstName, lastName};
  
  UsersModel.createUser(createData)
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}


module.exports = {
  listUsers,
  searchUsers,
  addUser
};