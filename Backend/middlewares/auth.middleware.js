const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized '
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findOne({ email: decoded.email });

        if (!user) {
            return res.status(401).json({
                message: 'User not found'
            })
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}

module.exports = { userAuth };  