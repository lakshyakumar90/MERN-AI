const UserModel = require('../models/user.model');

const createUser = async ({ name, email, password }) => {
    try {
        if (!email || !password) {
            throw new Error('Missing required fields: email and password');
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists with this email');
        }

        const hashedPassword = await UserModel.hashPassword(password);

        const newUser = await UserModel.create({ name, email, password: hashedPassword });
        return newUser;
    } catch (error) {
        if (error.message === 'User already exists with this email' || error.message === 'Missing required fields: email and password') {
            throw error;
        }
        throw new Error('Error creating user');
    }
}

module.exports= {
    createUser,
}