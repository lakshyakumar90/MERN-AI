const express = require('express');
const { createUserController, loginController } = require('../controllers/user.controller');
const { body } = require('express-validator');

const userRouter = express.Router();

userRouter.post('/register',
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password is too short'),
    createUserController);

userRouter.post('/login',
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password is too short'),
    loginController);

module.exports = userRouter;