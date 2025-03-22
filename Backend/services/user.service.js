const UserModel = require('../models/user.model');

const createUser = async ({ email, password }) => {
    try {
        if (!email || !password) {
            throw new Error('Missing required fields: email and password');
        }

        const hashedPassword = await UserModel.hashPassword(password);

        const newUser = await UserModel.create({ email, password: hashedPassword });
        return newUser;
    } catch (error) {
        throw new Error('Error creating user');
    }
}

module.exports= {
    createUser,
}