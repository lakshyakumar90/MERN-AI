const { createUser } = require('../services/user.service');
const UserModel = require('../models/user.model');
const {validationResult} = require('express-validator');

const createUserController = async(req, res) => {
    const error = validationResult(req);

    if(!error.isEmpty()) {
        return res.status(400).json({error: error.array()});
    }

    try{
        const user = await createUser(req.body);
        const token = await user.generateJWT();
        return res.status(201).json({
            user,
            token
        });
    } catch (err){
        return res.status(400).json({
            message: err.message
        })
    }
}

const loginController = async(req, res) => {
    const error = validationResult(req);

    if(!error.isEmpty()) {
        return res.status(400).json({error: error.array()});
    }

    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email}).select('+password');

        if(!user){
            res.status(401).json({
                message: 'User not found'
            })
        }

        const isValid = await user.isValidPassword(password);

        if(!isValid){
            res.status(401).json({
                message: 'Invalid password'
            })
        }

        const token = await user.generateJWT();
        return res.status(200).json({
            user,
            token
        });
    } catch (err){
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    createUserController,
    loginController,
}


