const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkspaceSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        maxlength: 500,
        default: ''
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    users: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        role: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'editor' }
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    settings: {
        isPublic: { type: Boolean, default: false },
        allowGuests: { type: Boolean, default: false }
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Workspace', WorkspaceSchema);