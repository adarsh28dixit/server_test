var express = require('express');
const { getUsers, createUser, getUserById } = require('../controllers/userController');
var router = express.Router();

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);
router.get('/getUserById/:id', getUserById)

module.exports = router;
