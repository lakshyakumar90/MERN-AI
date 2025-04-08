const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AIInteractionSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project'
    },
    type: {
      type: String, // e.g., 'code_suggestion', 'bug_fix', 'documentation'
      required: true
    },
    input: {
      type: String, // What the user asked for
      required: true
    },
    output: {
      type: String, // AI-generated response
      required: true
    },
    feedback: {
      rating: { type: Number, min: 1, max: 5 },
      comment: { type: String, maxlength: 500 }
    },
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('AIInteraction', AIInteractionSchema);