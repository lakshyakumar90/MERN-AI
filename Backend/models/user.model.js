const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [3, 'Too short, min is 3 characters'],
        max: [50, 'Too long, max is 50 characters'],
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [3, 'Too short, min is 3 characters'],
        maxlength: [50, 'Too long, max is 50 characters'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        min: [6, 'Too short, min is 6 characters'],
        max: [50, 'Too long, max is 50 characters'],
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: true,
        select: false,
        min: [6, 'Too short, min is 6 characters'],
        max: [50, 'Too long, max is 50 characters'],
    },
    avatar: {
        type: String, // URL to profile picture
        default: ''
    },
    bio: {
        type: String,
        maxlength: 500,
        default: ''
    },
    workspaces: [{
        type: Schema.Types.ObjectId,
        ref: 'Workspace'
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }], settings: {
        theme: { type: String, enum: ['light', 'dark'], default: 'dark' },
        notifications: {
            email: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true }
        },
        editorPreferences: {
            fontSize: { type: Number, default: 14 },
            tabSize: { type: Number, default: 2 }
        }
    },
    lastLogin: {
        type: Date,
        default: null
    },
}, { timestamps: true });

UserSchema.statics.hashPassword = async function (password) {
    return bcrypt.hash(password, 10);
}

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

UserSchema.methods.generateJWT = function () {
    return jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
}

const User = mongoose.model('user', UserSchema);

module.exports = User;