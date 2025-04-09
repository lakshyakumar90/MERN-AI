const express = require('express');
const { userAuth } = require('../middlewares/auth.middleware');
const { createWorkspaceController, getWorkspaceController } = require('../controllers/workspace.controller');
const { body } = require('express-validator');

const workspaceRouter = express.Router();

workspaceRouter.post('/workspace', 
    body('name').notEmpty().withMessage('Workspace name is required'),
    body('description').notEmpty().withMessage('Workspace description is required'),
    body('settings.isPublic').isBoolean().withMessage('Workspace public setting must be a boolean'),
    userAuth,
    createWorkspaceController
)

workspaceRouter.get('/workspace', userAuth, getWorkspaceController);

module.exports = workspaceRouter;