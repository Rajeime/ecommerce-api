const express =  require('express');
const router = express.Router();
const  auth = require('../controllers/auth');
const user = require('../controllers/users')

router.route('/register')
.post(user.postUser)

router.route('/login');