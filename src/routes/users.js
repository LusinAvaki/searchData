const router = require('express').Router();

const userService = require('../services/users/index');


router.get('/',
  userService.listUsers
);

router.get('/:search',
  userService.searchUsers
);

router.post('/',
  userService.addUser
);


module.exports = router;