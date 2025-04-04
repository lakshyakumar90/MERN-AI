const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String, 
        required: true,
        min: [3, 'Too short, min is 3 characters'],
        max: [50, 'Too long, max is 50 characters'],
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
})

const Project = mongoose.model('project', ProjectSchema);
module.exports = Project;