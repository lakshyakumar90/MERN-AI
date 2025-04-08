const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    path: {
        type: String, // e.g., 'src/app.js'
        required: true
    },
    content: {
        type: String, // Actual code content
        default: ''
    },
    type: {
        type: String, // e.g., 'javascript', 'css', 'json'
        required: true
    },
    versionHistory: [{
        content: String,
        modifiedBy: { type: Schema.Types.ObjectId, ref: 'User' },
        timestamp: { type: Date, default: Date.now }
    }],
    lastModifiedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('File', FileSchema);