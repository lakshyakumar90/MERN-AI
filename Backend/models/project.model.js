const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [3, 'Too short, min is 3 characters'],
        max: [50, 'Too long, max is 50 characters'],
    },
    description: {
        type: String,
        maxlength: 500,
        default: ''
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    workspace: {
        type: Schema.Types.ObjectId,
        ref: 'workspace',
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    collaborators: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        role: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'editor' }
    }],
    files: [{
        type: Schema.Types.ObjectId,
        ref: 'File'
    }],
    status: {
        type: String,
        enum: ['active', 'archived', 'completed'],
        default: 'active'
    },
    language: {
        type: String, // e.g., 'javascript', 'python'
        default: 'javascript'
    },
    framework: {
        type: String, // e.g., 'react', 'django'
        default: null
    },
    dependencies: [{
        name: String,
        version: String
    }],
}, {
    timestamps: true
})

const Project = mongoose.model('project', ProjectSchema);
module.exports = Project;