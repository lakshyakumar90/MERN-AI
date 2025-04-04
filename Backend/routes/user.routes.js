const express = require('express');
const { createUserController, loginController, profileController, logoutController, getAllUsersController } = require('../controllers/user.controller');
const { body } = require('express-validator');
const { userAuth } = require('../middlewares/auth.middleware');

const userRouter = express.Router();

userRouter.post('/register',
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password is too short'),
    createUserController);

userRouter.post('/login',
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password is too short'),
    loginController);

userRouter.get('/profile', userAuth, profileController);

userRouter.post('/logout', userAuth, logoutController);

userRouter.get('/all', userAuth, getAllUsersController);

module.exports = userRouter;