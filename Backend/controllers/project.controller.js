const Project = require('../models/project.model');
const { validationResult } = require('express-validator');
const User = require('../models/user.model');
const { createProject, getAllProjects, getProjectById, addUserToProject } = require('../services/project.service');

const createProjectController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        const userId = req.user._id;
        const project = await createProject({ ...req.body, userId });
        return res.status(201).json({
            project
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

const getAllProjectsController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }

    try {
        const userId = req.user._id;
        console.log(userId);
        const allUserProjects = await getAllProjects({ userId });
        return res.status(200).json({
            projects: allUserProjects
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

const addUserToProjectController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }

    try {
        const { projectId, users } = req.body;

        const userId = req.user._id;

        const updatedProject = await addUserToProject({ projectId, users, userId });
        return res.status(200).json({
            project: updatedProject
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

const getProjectByIdController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }

    try {
        const { projectId } = req.params;

        const project = await getProjectById({ projectId });
        return res.status(200).json({
            project
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    createProjectController,
    getAllProjectsController,
    addUserToProjectController,
    getProjectByIdController
}

