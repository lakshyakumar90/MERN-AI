const Workspace = require('../models/workspace.model');

const createWorkspace = async ({ name, description, settings, owner, users }) => {
    try {
        if (!name || !description || !settings) throw new Error('Invalid workspace data');

        const workspace = await Workspace.findOne({ name });
        if (workspace) throw new Error('Workspace already exists');
        if (settings.isPublic === undefined || settings.isPublic === null || settings.isPublic === '') settings.isPublic = false;
        return await Workspace.create({ name, description, settings, owner, users });
    } catch (err) {
        throw new Error(err.message);
    }
}

const updateWorkspace = async ({ workspaceId, updates }) => {
    try {
        if (!workspaceId || !updates) throw new Error('Invalid workspace data');

        const workspace = await Workspace.findByIdAndUpdate(workspaceId, updates, { new: true, runValidators: true });

        return workspace;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { createWorkspace, updateWorkspace };