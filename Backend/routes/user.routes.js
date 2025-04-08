const express = require('express');
const { createUserController, loginController, profileController, logoutController, getAllUsersController, getUserController, updateUserController } = require('../controllers/user.controller');
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

userRouter.get('/me', userAuth, profileController);

userRouter.put('/me', userAuth, updateUserController);

userRouter.post('/logout', userAuth, logoutController);

userRouter.get('/all', userAuth, getAllUsersController);

userRouter.get('/:username', getUserController);

module.exports = userRouter;