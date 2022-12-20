const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// ajaj.com/api/auth/register

router.post('/register', authController.register)
router.post('/signin', authController.signin)



module.exports = router