const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiagramSchema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    default: 'Untitled Diagram'
  },
  scene: {
    type: Object, // Excalidraw JSON scene data
    required: true
  },
  collaborators: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, enum: ['editor', 'viewer'], default: 'editor' }
  }],
  lastModifiedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
    timestamps: true
});

module.exports = mongoose.model('Diagram', DiagramSchema);