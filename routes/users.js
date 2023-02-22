const express =  require('express');
const router = express.Router();
const  users = require('../controllers/users');

router.route('/users')
.get(users.getAllUsers)
.post(users.postUser);

router.route('/users/:id')
.get(users.getSingleUser)
.delete(users.deleteUser)
.put(users.editUser);

module.exports = router