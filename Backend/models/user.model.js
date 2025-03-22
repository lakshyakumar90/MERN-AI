const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        min: [6, 'Too short, min is 6 characters'],
        max: [50, 'Too long, max is 50 characters'],
    },
    password: {
        type: String,
        required: true,
        select: false,
        min: [6, 'Too short, min is 6 characters'],
        max: [50, 'Too long, max is 50 characters'],
    },
})

UserSchema.statics.hashPassword = async function (password){
    return bcrypt.hash(password, 10);
}

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

UserSchema.methods.generateJWT = function () {
    return jwt.sign({email: this.email}, process.env.JWT_SECRET, {expiresIn: '24h'});
}

const User = mongoose.model('user', UserSchema);

module.exports = User;