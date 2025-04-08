const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    action: {
      type: String, // e.g., 'created_project', 'edited_file', 'invited_user'
      required: true
    },
    target: {
      type: String, // e.g., 'project', 'file', 'user'
      required: true
    },
    targetId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    workspace: {
      type: Schema.Types.ObjectId,
      ref: 'Workspace'
    },
    details: {
      type: String, // Additional context
      default: ''
    },
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Activity', ActivitySchema);