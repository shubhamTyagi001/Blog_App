const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();
// middleware
const auth = require('../middleware/auth');

// ajaj.com/api/auth/register

router.post('/register', authController.register)
router.post('/signin', authController.signin)
router.get('/isauth', auth(), authController.isauth)
//router.post('/testrole',auth('createAny','test'), authController.testrole)

module.exports = router