const UsersModel = require('../../models/index').UsersModel;


function listUsers(req, res, next) {
  UsersModel.listAllUsers()
    .then((users) => res.json(users))
    .catch(next)
}

function getUser(req, res, next) {
  const {firstName, lastName} = req.body;
  
  UsersModel.getUserByFirstName(firstName)
    .then((data) => res.json(data))
    .catch(next);
  
  UsersModel.getUserByLastName(lastName)
    .then((data) => res.json(data))
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
  getUser,
  addUser
};