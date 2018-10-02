const router = require('express').Router();

const userService = require('../services/users/index');


router.get('/',
  userService.listUsers
);

router.get('/:firstName',
  userService.getUser
);

router.get('/:lastName',
  userService.getUser
);

router.post('/',
  userService.addUser
);


module.exports = router;