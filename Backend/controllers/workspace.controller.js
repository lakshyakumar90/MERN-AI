const express = require('express');
const { validationResult } = require('express-validator');
const { createWorkspace } = require('../services/workspace.service');

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
            workspace
        });


    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err.message
        });
    }
}

module.exports = {
    createWorkspaceController
}