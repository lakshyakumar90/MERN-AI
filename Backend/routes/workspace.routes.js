const express = require('express');
const { userAuth } = require('../middlewares/auth.middleware');
const { createWorkspaceController, getWorkspaceController, getWorkspaceByIdController, updateWorkspaceController } = require('../controllers/workspace.controller');
const { body } = require('express-validator');
const { workspaceMemberMiddleware, workspaceAdminMiddleware } = require('../middlewares/workspace.middleware');

const workspaceRouter = express.Router();

workspaceRouter.post('/workspace',
    body('name').notEmpty().withMessage('Workspace name is required'),
    body('description').notEmpty().withMessage('Workspace description is required'),
    userAuth,
    createWorkspaceController
)

workspaceRouter.get('/workspace', userAuth, getWorkspaceController);

workspaceRouter.get('/workspace/:workspaceId', userAuth, workspaceMemberMiddleware, getWorkspaceByIdController);

workspaceRouter.put('/workspace/:workspaceId', userAuth, workspaceMemberMiddleware, workspaceAdminMiddleware, updateWorkspaceController);


module.exports = workspaceRouter;