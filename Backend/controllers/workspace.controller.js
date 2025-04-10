const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const { createWorkspace, updateWorkspace } = require('../services/workspace.service');
const Workspace = require('../models/workspace.model');

const createWorkspaceController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        const { name, description, settings = { isPublic: false }, users } = req.body;

        // Assuming you have a Workspace model to create a workspace
        const workspaceUsers = users.map(user => ({
            user: user.userId, // Assuming userId is the key for user ID
            role: user.role || 'editor' // Default role to 'editor' if not provided
        }));

        const workspace = await createWorkspace({ name, description, settings, owner: req.user.id, users: workspaceUsers });

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

        if (!mongoose.Types.ObjectId.isValid(workspaceId)) {
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
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err.message
        });
    }
}

const updateWorkspaceController = async (req, res) => {
    try {
        const workspaceId = req.params.workspaceId;

        if (!mongoose.Types.ObjectId.isValid(workspaceId)) {
            return res.status(400).json({
                message: 'Invalid workspace ID'
            })
        }

        const { name, description, settings, owner, users, projects, teams } = req.body;

        const updates = {};

        if (!workspaceId) {
            return res.status(400).json({ success: false, message: 'Workspace ID is required' });
        }

        if (!name && !description && !settings && !owner && !users && !projects && !teams) {
            return res.status(400).json({ success: false, message: 'At least one field is required for updating workspace' });
        }

        if (name) {
            updates.name = name;
        }

        if (description) {
            updates.description = description;
        }

        if (settings) {
            updates.settings = settings;
        }

        if (owner) {
            updates.owner = owner;
        }

        if (users) {
            updates.users = users.map(user => ({
                user: user.userId, // Assuming userId is the key for user ID
                role: user.role || 'editor' // Default role to 'editor' if not provided
            }));
        }

        if (projects) {
            updates.projects = projects;
        }

        if (teams) {
            updates.teams = teams;
        }

        if (updates.users) {
            const workspace = await Workspace.findById(workspaceId);
            if (workspace) {
                const existingUserIds = new Set(workspace.users.map(existingUser => existingUser.user.toString()));
                updates.users.forEach(user => {
                    if (!existingUserIds.has(user.user.toString())) {
                        workspace.users.push(user);
                    }
                });
                await workspace.save();
            }
            delete updates.users;
        }
        const workspace = await Workspace.findByIdAndUpdate(workspaceId, updates, { new: true });

        return res.status(200).json({
            success: true,
            workspace
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err.message
        });
    }
}

const deleteWorkspaceController = async (req, res) => {
    try {
        const workspaceId = req.params.workspaceId;

        if (!mongoose.Types.ObjectId.isValid(workspaceId)) {
            return res.status(400).json({
                message: 'Invalid workspace ID'
            })
        }

        const workspace = await Workspace.findByIdAndDelete(workspaceId);
        console.log(workspace)
        if (!workspace) {
            return res.status(404).json({
                success: false,
                message: 'Workspace not found'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Workspace deleted successfully'
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err.message
        });
    }
}

module.exports = {
    createWorkspaceController,
    getWorkspaceController,
    getWorkspaceByIdController,
    updateWorkspaceController,
    deleteWorkspaceController
}