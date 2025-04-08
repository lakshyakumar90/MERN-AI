const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    description: {
      type: String,
      maxlength: 500,
      default: ''
    },
    workspace: {
      type: Schema.Types.ObjectId,
      ref: 'Workspace',
      required: true
    },
    members: [{
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      role: { type: String, enum: ['lead', 'member'], default: 'member' }
    }],
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Team', TeamSchema);