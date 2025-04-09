const UserModel = require('../models/user.model');

const createUser = async ({ username, name, email, password }) => {
    try {
        if (!email || !password) {
            throw new Error('Missing required fields: email and password');
        }

        const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            if (existingUser.email === email) {
                throw new Error('User already exists with this email');
            } else if (existingUser.username === username) {
                throw new Error('User already exists with this username');
            }
        }

        const hashedPassword = await UserModel.hashPassword(password);

        const newUser = await UserModel.create({ username, name, email, password: hashedPassword });
        return newUser;
    } catch (error) {
        if (error.message === 'User already exists with this email' || error.message === 'Missing required fields: email and password') {
            throw error;
        }
        throw new Error(error.message);
    }
}

module.exports= {
    createUser,
}