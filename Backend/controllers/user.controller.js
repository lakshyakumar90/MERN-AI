const { createUser } = require('../services/user.service');
const UserModel = require('../models/user.model');
const { validationResult } = require('express-validator');
const redisClient = require('../services/redis.service');

const createUserController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        const user = await createUser(req.body);
        const token = await user.generateJWT();

        // Set the token as a cookie with a 1-day expiration
        res.cookie('token', token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });

        // Create a user object without the password
        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email
        };

        return res.status(201).json({
            user: userResponse,
            token
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

const loginController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({
                message: 'User not found'
            });
        }

        const isValid = await user.isValidPassword(password);

        if (!isValid) {
            return res.status(401).json({
                message: 'Invalid password'
            });
        }

        const token = await user.generateJWT();
        // Set the token as a cookie with a 1-day expiration
        res.cookie('token', token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });

        // Create a user object without the password
        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email
        };

        return res.status(200).json({
            user: userResponse,
            token
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

const profileController = async (req, res) => {
    const user = req.user;

    return res.status(200).json({
        user
    });
}

const logoutController = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        redisClient.set(token, 'logout', 'EX', 60 * 60 * 24);
        // Clear the token cookie
        res.cookie('token', '', { expires: new Date(Date.now()) });
        res.clearCookie('session');

        res.json({
            message: "Logout successfully"
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

const getAllUsersController = async (req, res) => {
    const userId = req.user._id;

    if (!userId) {
        return res.status(400).json({
            message: 'User not found'
        })
    }

    try {
        const allUsers = await UserModel.find({ _id: { $ne: userId } });
        return res.status(200).json(allUsers);
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    createUserController,
    loginController,
    profileController,
    logoutController,
    getAllUsersController
}


