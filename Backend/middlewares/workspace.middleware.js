const Workspace = require('../models/workspace.model');
const mongoose = require('mongoose');

const workspaceMemberMiddleware = async (req, res, next) => {
    try {
        const workspaceId = req.params.workspaceId;

        if (!workspaceId) {
            return res.status(400).json({ success: false, message: 'Workspace ID is required' });
        }

        if (!mongoose.Types.ObjectId.isValid(workspaceId)) {
            return res.status(400).json({ success: false, message: 'Invalid workspace ID' });
        }
        const workspace = await Workspace.findById(workspaceId);

        if (!workspace) {
            return res.status(404).json({ message: 'Workspace not found' });
        }
        const isMember = workspace.users.some(user => user.user.equals(req.user._id));
        if (isMember || workspace.owner.equals(req.user._id)) {
            req.workspace = workspace;
            next();
        } else {
            res.status(401).json({ success: false, message: 'You are not a member of this workspace' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const workspaceAdminMiddleware = async (req, res, next) => {
    try {
        if (req.workspace.owner.equals(req.user._id)) {
            next();
        } else {
            res.status(401).json({ success: false, message: 'You are not an admin of this workspace' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { workspaceMemberMiddleware, workspaceAdminMiddleware };