const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    type: {
      type: String, // e.g., 'mention', 'invite', 'project_update'
      required: true
    },
    message: {
      type: String,
      required: true
    },
    relatedEntity: {
      type: { type: String }, // 'project', 'workspace', etc.
      id: { type: Schema.Types.ObjectId }
    },
    read: {
      type: Boolean,
      default: false
    },
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Notification', NotificationSchema);