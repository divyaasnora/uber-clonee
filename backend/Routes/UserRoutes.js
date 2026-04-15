const express = require('express')
const router = express.Router();
const {body} = require("express-validator");
const userControllers = require('../controllers/UserControllers');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstName').isLength({min:3}).withMessage('First name must be 3 at least chararcters'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
userControllers.registerUser)



module.exports = router;

