const {Router} = require('express');
const UsersController = require('../controllers/users.controller');

const router = Router();

router.get('/', UsersController.getAll)
router.post('/', UsersController.create)
router.post('/:uid/courses/:cid', UsersController.addToCourse)

module.exports = router;