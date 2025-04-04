const Project = require("../models/project.model");
const mongoose = require("mongoose");

const createProject = async ({ name, users, userId }) => {
    try {
        if (!name || !users) {
            throw new Error('Missing required fields: name and users');
        }

        if (!Array.isArray(users) || users.some(user => !mongoose.Types.ObjectId.isValid(user))) {
            throw new Error('Invalid userId(s) in users array');
        }

        if (!userId) {
            throw new Error('Missing required fields: userId');
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid userId');
        }

        const existingProject = await Project.findOne({ name, users: { $all: [userId, ...users] } });
        if (existingProject) {
            throw new Error('Project already exists with the same name and users');
        }

        const newProject = await Project.create({ name, users: [userId, ...users] });
        return newProject;
    } catch (err) {
        throw new Error(`Error creating project: ${err.message}`);
    }
}

const getAllProjects = async ({ userId }) => {
    if (!userId) {
        throw new Error('Missing required fields: userId');
    }

    try {
        const allUserProjects = await Project.find({ users: userId }).populate('users', 'name email');
        if (!allUserProjects) {
            throw new Error('No projects found for this user');
        }
        return allUserProjects;
    } catch (err) {
        throw new Error('Error fetching projects');
    }
}

const addUserToProject = async ({ projectId, users, userId }) => {
    if (!projectId) {
        throw new Error('Missing required fields: projectId');
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error('Invalid projectId');
    }
    if (!users) {
        throw new Error('Missing required fields: users');
    }
    if (!Array.isArray(users) || users.some(user => !mongoose.Types.ObjectId.isValid(user))) {
        throw new Error('Invalid userId(s) in users array');
    }
    if (!userId) {
        throw new Error('Missing required fields: userId');
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error('Invalid userId');
    }


    try {
        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            {
                $addToSet: {
                    users: {
                        $each: users
                    }
                }
            },
            { new: true }
        ).populate('users', 'name email');

        return updatedProject;
    } catch (err) {
        throw new Error('Error adding user to project');
    }
}

const getProjectById = async ({ projectId }) => {
    if (!projectId) {
        throw new Error('Missing required fields: projectId');
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error('Invalid projectId');
    }

    try {
        const project = await Project.findById(projectId).populate('users', 'name email');
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    } catch (err) {
        throw new Error('Error fetching project');
    }
}

module.exports = {
    createProject,
    getAllProjects,
    addUserToProject,
    getProjectById
}