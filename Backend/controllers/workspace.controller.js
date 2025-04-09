const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const { createWorkspace } = require('../services/workspace.service');
const Workspace = require('../models/workspace.model');

const createWorkspaceController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        const { name, description, settings } = req.body;

        // Assuming you have a Workspace model to create a workspace
        const workspace = await createWorkspace({ name, description, settings, owner: req.user.id });

        return res.status(201).json({
            message: 'Workspace created successfully',
            success: true,
            workspace
        });


    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err.message
        });
    }
}

const getWorkspaceController = async (req, res) => {
    try {
        const workspace = await Workspace.find({
            $or: [
                { owner: req.user.id },
                { users: { $elemMatch: { user: req.user.id } } }
            ]
        });

        if (!workspace) {
            return res.status(404).json({
                message: 'Workspace not found'
            });
        }

        return res.status(200).json({
            success: true,
            workspace
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err.message
        });
    }
}

const getWorkspaceByIdController = async (req, res) => {
    try {
        const workspaceId = req.params.workspaceId;

        if(!mongoose.Types.ObjectId.isValid(workspaceId)){
            return res.status(400).json({
                message: 'Invalid workspace ID'
            })
        }

        const workspace = await Workspace.findById(workspaceId);

        if (!workspace) {
            return res.status(404).json({
                message: 'Workspace not found'
            })
        }

        return res.status(200).json({
            success: true,
            workspace
        })
    } catch (err) {

    }
}

module.exports = {
    createWorkspaceController,
    getWorkspaceController,
    getWorkspaceByIdController
}